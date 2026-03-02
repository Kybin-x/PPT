/**
 * PPT学习站 - 练习题引擎
 * 文件路径: js/quiz.js
 * 说明: 渲染练习题 / 判分 / 反馈 / 重做
 * 
 * 题目数据格式:
 * {
 *   type: 'single' | 'multiple' | 'judge',   // 单选 / 多选 / 判断
 *   question: '题目内容',
 *   options: ['A选项', 'B选项', 'C选项', 'D选项'],  // 判断题为 ['对', '错']
 *   answer: 0,            // 单选/判断：正确选项索引；多选：[0, 2] 索引数组
 *   explanation: '解析'    // 解析说明
 * }
 */

// ==================== 全局变量 ====================
let quizQuestions = [];
let userAnswers = {};       // { 题号: 选择的索引 或 索引数组 }
let quizSubmitted = false;

// ==================== 渲染练习题 ====================

/**
 * 渲染练习题到页面
 * @param {Array} questions - 题目数据数组
 */
function renderQuiz(questions) {
    quizQuestions = questions;
    userAnswers = {};
    quizSubmitted = false;

    const container = document.getElementById('quizContainer');
    if (!container) return;

    // 隐藏结果区
    const resultEl = document.getElementById('quizResult');
    if (resultEl) resultEl.classList.add('hidden');

    let html = '';

    questions.forEach((q, index) => {
        const num = index + 1;
        const typeLabel = getTypeLabel(q.type);
        const typeBadge = getTypeBadgeClass(q.type);

        html += `
            <div class="quiz-item" id="quizItem${num}" data-index="${index}">
                <div class="quiz-question">
                    <span class="quiz-question-num">${num}.</span>
                    <div>
                        <span class="badge ${typeBadge}" style="margin-right: 6px; vertical-align: middle;">${typeLabel}</span>
                        <span>${escapeHtml(q.question)}</span>
                    </div>
                </div>
                <div class="quiz-options" id="quizOptions${num}">
                    ${renderOptions(q, num)}
                </div>
                <div class="quiz-explanation" id="quizExplanation${num}">
                    <strong>📝 解析：</strong>${escapeHtml(q.explanation || '暂无解析')}
                </div>
            </div>
        `;
    });

    // 提交按钮
    html += `
        <div class="quiz-submit-area" id="quizSubmitArea">
            <button class="btn btn-primary btn-lg" id="quizSubmitBtn" onclick="submitQuiz()">
                ✏️ 提交答案
            </button>
            <p style="margin-top: var(--space-sm); font-size: var(--text-xs); color: var(--text-muted);">
                共 ${questions.length} 题，请全部作答后提交
            </p>
        </div>
    `;

    container.innerHTML = html;
}

/**
 * 渲染选项
 * @param {object} question - 题目对象
 * @param {number} num - 题号（从1开始）
 * @returns {string} HTML
 */
function renderOptions(question, num) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let html = '';

    question.options.forEach((opt, optIndex) => {
        const letter = letters[optIndex] || String(optIndex + 1);
        const isMultiple = question.type === 'multiple';

        html += `
            <div class="quiz-option" 
                 id="quizOpt${num}_${optIndex}"
                 data-num="${num}"
                 data-index="${optIndex}"
                 onclick="selectOption(${num}, ${optIndex}, ${isMultiple})">
                <span class="quiz-option-letter">${letter}</span>
                <span class="quiz-option-text">${escapeHtml(opt)}</span>
            </div>
        `;
    });

    return html;
}

// ==================== 选择选项 ====================

/**
 * 选择选项
 * @param {number} num - 题号
 * @param {number} optIndex - 选项索引
 * @param {boolean} isMultiple - 是否多选
 */
function selectOption(num, optIndex, isMultiple) {
    if (quizSubmitted) return;

    const question = quizQuestions[num - 1];
    if (!question) return;

    if (isMultiple) {
        // 多选：切换选中状态
        if (!userAnswers[num]) {
            userAnswers[num] = [];
        }

        const idx = userAnswers[num].indexOf(optIndex);
        if (idx > -1) {
            userAnswers[num].splice(idx, 1);
        } else {
            userAnswers[num].push(optIndex);
        }
    } else {
        // 单选/判断：直接替换
        userAnswers[num] = optIndex;
    }

    // 更新选项样式
    updateOptionStyles(num, isMultiple);
}

/**
 * 更新选项的选中样式
 * @param {number} num - 题号
 * @param {boolean} isMultiple - 是否多选
 */
function updateOptionStyles(num, isMultiple) {
    const question = quizQuestions[num - 1];
    if (!question) return;

    question.options.forEach((_, optIndex) => {
        const el = document.getElementById(`quizOpt${num}_${optIndex}`);
        if (!el) return;

        if (isMultiple) {
            const selected = userAnswers[num] && userAnswers[num].includes(optIndex);
            el.classList.toggle('selected', selected);
        } else {
            el.classList.toggle('selected', userAnswers[num] === optIndex);
        }
    });
}

// ==================== 提交答案 ====================

/**
 * 提交练习题
 */
async function submitQuiz() {
    if (quizSubmitted) return;

    // 检查是否全部作答
    const unanswered = [];
    quizQuestions.forEach((q, index) => {
        const num = index + 1;
        const answer = userAnswers[num];

        if (answer === undefined || answer === null) {
            unanswered.push(num);
        } else if (q.type === 'multiple' && Array.isArray(answer) && answer.length === 0) {
            unanswered.push(num);
        }
    });

    if (unanswered.length > 0) {
        showToast(`还有第 ${unanswered.join('、')} 题未作答`, 'warning');

        // 滚动到第一个未答题目
        const firstUnanswered = document.getElementById(`quizItem${unanswered[0]}`);
        if (firstUnanswered) {
            firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
            firstUnanswered.style.animation = 'shakeError 0.4s ease';
            setTimeout(() => {
                firstUnanswered.style.animation = '';
            }, 500);
        }
        return;
    }

    // 确认提交
    const confirmed = await showConfirm(
        '提交答案',
        `确定要提交 ${quizQuestions.length} 道题的答案吗？<br>提交后可以查看解析，系统会记录最高分。`,
        '确定提交',
        'primary'
    );

    if (!confirmed) return;

    // 开始判分
    quizSubmitted = true;
    let correctCount = 0;
    const total = quizQuestions.length;

    quizQuestions.forEach((q, index) => {
        const num = index + 1;
        const userAnswer = userAnswers[num];
        const isCorrect = checkAnswer(q, userAnswer);

        if (isCorrect) {
            correctCount++;
        }

        // 显示结果样式
        showQuestionResult(num, q, userAnswer, isCorrect);
    });

    // 隐藏提交按钮
    const submitArea = document.getElementById('quizSubmitArea');
    if (submitArea) submitArea.classList.add('hidden');

    // 显示结果区
    showQuizResult(correctCount, total);

    // 提交到服务器
    if (typeof submitQuizScore === 'function') {
        await submitQuizScore(correctCount, total);
    }

    // 滚动到结果区
    setTimeout(() => {
        const resultEl = document.getElementById('quizResult');
        if (resultEl) {
            resultEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 300);
}

// ==================== 判断答案是否正确 ====================

/**
 * 检查答案
 * @param {object} question - 题目
 * @param {number|Array} userAnswer - 用户答案
 * @returns {boolean}
 */
function checkAnswer(question, userAnswer) {
    if (question.type === 'multiple') {
        // 多选：比较数组（排序后比较）
        if (!Array.isArray(userAnswer)) return false;
        const correct = Array.isArray(question.answer)
            ? [...question.answer].sort()
            : [question.answer].sort();
        const user = [...userAnswer].sort();

        if (correct.length !== user.length) return false;
        return correct.every((val, idx) => val === user[idx]);
    } else {
        // 单选/判断
        return userAnswer === question.answer;
    }
}

// ==================== 显示题目结果 ====================

/**
 * 显示单题结果（正确/错误 + 解析）
 * @param {number} num - 题号
 * @param {object} question - 题目
 * @param {number|Array} userAnswer - 用户答案
 * @param {boolean} isCorrect - 是否正确
 */
function showQuestionResult(num, question, userAnswer, isCorrect) {
    // 题目卡片整体样式
    const itemEl = document.getElementById(`quizItem${num}`);
    if (itemEl) {
        itemEl.classList.add(isCorrect ? 'answered-correct' : 'answered-wrong');
    }

    // 选项样式
    question.options.forEach((_, optIndex) => {
        const optEl = document.getElementById(`quizOpt${num}_${optIndex}`);
        if (!optEl) return;

        optEl.classList.add('disabled');

        if (question.type === 'multiple') {
            const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
            const isCorrectOption = correctAnswers.includes(optIndex);
            const isUserSelected = Array.isArray(userAnswer) && userAnswer.includes(optIndex);

            if (isCorrectOption) {
                optEl.classList.add('correct');
                optEl.classList.remove('selected');
            } else if (isUserSelected && !isCorrectOption) {
                optEl.classList.add('wrong');
                optEl.classList.remove('selected');
            } else {
                optEl.classList.remove('selected');
            }
        } else {
            const isCorrectOption = optIndex === question.answer;
            const isUserSelected = optIndex === userAnswer;

            if (isCorrectOption) {
                optEl.classList.add('correct');
                optEl.classList.remove('selected');
            } else if (isUserSelected && !isCorrectOption) {
                optEl.classList.add('wrong');
                optEl.classList.remove('selected');
            } else {
                optEl.classList.remove('selected');
            }
        }
    });

    // 显示解析
    const explanationEl = document.getElementById(`quizExplanation${num}`);
    if (explanationEl) {
        explanationEl.classList.add('show');
    }
}

// ==================== 显示练习总结 ====================

/**
 * 显示最终结果
 * @param {number} correct - 正确数
 * @param {number} total - 总数
 */
function showQuizResult(correct, total) {
    const resultEl = document.getElementById('quizResult');
    if (!resultEl) return;

    resultEl.classList.remove('hidden');

    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
    const isPassed = percent >= 60;

    // 图标
    let icon = '😢';
    let message = '';

    if (percent === 100) {
        icon = '🏆';
        message = '满分！太厉害了，你已经完全掌握本节内容！';
    } else if (percent >= 80) {
        icon = '🎉';
        message = '优秀！掌握得很好，继续保持！';
    } else if (percent >= 60) {
        icon = '👍';
        message = '不错！达到通过标准，建议复习一下错题。';
    } else if (percent >= 40) {
        icon = '💪';
        message = '还需要努力哦，再看看知识讲解部分，重新挑战一次吧！';
    } else {
        icon = '📖';
        message = '看来需要再认真学习一下本节内容，不要灰心，再来一次！';
    }

    document.getElementById('quizResultIcon').textContent = icon;
    document.getElementById('quizScoreText').textContent = `${correct}/${total}（${percent}分）`;
    document.getElementById('quizResultMessage').textContent = message;

    // 下一课按钮状态
    const nextBtn = document.getElementById('quizNextBtn');
    if (nextBtn) {
        if (isPassed) {
            nextBtn.disabled = false;
            nextBtn.classList.remove('btn-secondary');
            nextBtn.classList.add('btn-primary');
        } else {
            nextBtn.disabled = true;
            nextBtn.classList.remove('btn-primary');
            nextBtn.classList.add('btn-secondary');
            nextBtn.textContent = '需≥60分才能解锁下一课';
        }
    }
}

// ==================== 重新答题 ====================

/**
 * 重置练习题
 */
function resetQuiz() {
    if (quizQuestions.length === 0) return;

    // 重置状态
    userAnswers = {};
    quizSubmitted = false;

    // 重新渲染
    renderQuiz(quizQuestions);

    // 滚动到练习区顶部
    const quizSection = document.getElementById('lessonQuiz');
    if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    showToast('已重置，重新作答吧！', 'info');
}

// ==================== 辅助函数 ====================

/**
 * 获取题目类型标签
 * @param {string} type
 * @returns {string}
 */
function getTypeLabel(type) {
    const map = {
        'single': '单选',
        'multiple': '多选',
        'judge': '判断'
    };
    return map[type] || '单选';
}

/**
 * 获取题目类型徽章样式
 * @param {string} type
 * @returns {string}
 */
function getTypeBadgeClass(type) {
    const map = {
        'single': 'badge-primary',
        'multiple': 'badge-warning',
        'judge': 'badge-success'
    };
    return map[type] || 'badge-primary';
}