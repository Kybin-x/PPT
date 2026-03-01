// JavaScript Document
/* ==========================================
   PPT闪光课堂 - 测验引擎 quiz.js
   ========================================== */

'use strict';

/* ==========================================
   1. 测验配置常量
   ========================================== */
const QUIZ_CONFIG = {
  // 每次测验随机抽取题目数
  QUESTION_COUNT: 10,

  // 分数等级
  GRADE: {
    PERFECT:  { min: 100, badge: '🏆', title: '满分闪光奖',  color: '#FFD700' },
    EXCELLENT:{ min: 90,  badge: '🌟', title: '优秀之星奖',  color: '#FF6B35' },
    GOOD:     { min: 75,  badge: '🎯', title: '稳步前进奖',  color: '#5B8BF5' },
    PASS:     { min: 60,  badge: '📚', title: '继续努力奖',  color: '#2ED573' },
    FAIL:     { min: 0,   badge: '💪', title: '不懈挑战奖',  color: '#888AAA' }
  },

  // 鼓励语
  ENCOURAGE: {
    PERFECT:  ['太厉害了！满分闪光达人非你莫属！✨', '完美！你就是PPT界的天才！🌟', '无懈可击！祝贺你获得满分！🏆'],
    EXCELLENT:['非常棒！你已经掌握得很好啦！🎉', '优秀！再努力一点就满分了！加油！💪', '太强了！继续保持这股劲儿！🔥'],
    GOOD:     ['不错哦！基础掌握得还可以，再复习一遍会更好！📖', '良好！距离优秀只差一步，继续加油！🚀', '稳扎稳打！多练练就能上去的！💡'],
    PASS:     ['及格啦！但还有进步空间，多看看知识点！📚', '通过了！建议再回顾一遍课程内容哦！🔄', '加油！把不会的知识点再看一遍！✏️'],
    FAIL:     ['别灰心！先回去认真看看课程，再来挑战！💪', '不要放弃！学习需要反复练习，加油！🌈', '失败是成功之母！再看看知识点，重新来过！🔥']
  }
};

/* ==========================================
   2. 题目类型标签
   ========================================== */
const TYPE_LABELS = {
  single: { text: '单选题', icon: '🔘', color: '#5B8BF5' },
  judge:  { text: '判断题', icon: '⚖️', color: '#2ED573' },
  match:  { text: '连线题', icon: '🔗', color: '#FF6B35' }
};

/* ==========================================
   3. 核心测验引擎
   ========================================== */
class QuizEngine {

  /**
   * @param {Array}  questions  题库数组
   * @param {string} moduleId   模块ID，如 'module1_quiz'
   * @param {string} containerId 渲染容器ID
   */
  constructor(questions, moduleId, containerId = 'quizContainer') {
    this.allQuestions = questions;
    this.moduleId     = moduleId;
    this.containerId  = containerId;

    // 运行时状态
    this.questions    = [];   // 本次题目
    this.currentIndex = 0;    // 当前题目索引
    this.score        = 0;    // 得分
    this.answers      = [];   // 用户答案记录
    this.startTime    = null; // 开始时间
    this.isFinished   = false;

    // 连线题状态
    this.matchState   = {
      selectedLeft:  null,
      selectedRight: null,
      matched:       {}
    };
  }

  /* ------------------------------------------
     3.1 初始化 & 开始测验
  ------------------------------------------ */
  start() {
    // 随机抽题
    this.questions  = Utils.randomPick(
      this.allQuestions,
      Math.min(QUIZ_CONFIG.QUESTION_COUNT, this.allQuestions.length)
    );
    this.currentIndex = 0;
    this.score        = 0;
    this.answers      = [];
    this.startTime    = Date.now();
    this.isFinished   = false;

    this._render();
  }

  /* ------------------------------------------
     3.2 主渲染入口
  ------------------------------------------ */
  _render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    if (this.isFinished) {
      this._renderResult(container);
    } else {
      this._renderQuestion(container);
    }
  }

  /* ------------------------------------------
     3.3 渲染题目
  ------------------------------------------ */
  _renderQuestion(container) {
    const q     = this.questions[this.currentIndex];
    const total = this.questions.length;
    const pct   = Math.round((this.currentIndex / total) * 100);

    // 重置连线状态
    this.matchState = {
      selectedLeft:  null,
      selectedRight: null,
      matched:       {}
    };

    container.innerHTML = `
      <!-- 进度条 -->
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" id="progressFill"
               style="width:${pct}%"></div>
        </div>
        <span class="quiz-progress-text">${this.currentIndex + 1}/${total}</span>
      </div>

      <!-- 题目卡片 -->
      <div class="quiz-question-card" id="questionCard">

        <!-- 题型标签 -->
        <div class="quiz-type-badge">
          ${this._renderTypeBadge(q.type)}
        </div>

        <!-- 题目文字 -->
        <div class="quiz-question-text">
          <span style="
            color:var(--primary);
            font-weight:900;
            margin-right:0.3rem;
          ">Q${this.currentIndex + 1}.</span>
          ${Utils._escapeHtml(q.question)}
        </div>

        <!-- 答题区域 -->
        <div class="quiz-answer-area" id="answerArea">
          ${this._renderAnswerArea(q)}
        </div>

        <!-- 反馈区域 -->
        <div class="quiz-feedback" id="quizFeedback"></div>

      </div>

      <!-- 提交按钮 -->
      <div style="text-align:center;margin-top:1.2rem;">
        <button
          class="btn btn-primary"
          id="submitBtn"
          onclick="quizEngine._handleSubmit()"
          style="
            padding:0.8rem 2.5rem;
            font-size:1rem;
            min-width:160px;
          "
        >
          ✅ 确认答案
        </button>
      </div>

      <!-- 当前得分提示 -->
      <div style="
        text-align:center;
        margin-top:1rem;
        font-size:0.82rem;
        color:var(--text-light);
      ">
        当前得分：<strong style="color:var(--primary);">
          ${this.score}
        </strong> 分 ·
        还剩 <strong>${total - this.currentIndex}</strong> 题
      </div>
    `;

    // 绑定连线题事件
    if (q.type === 'match') {
      this._bindMatchEvents(q);
    }
  }

  /* ------------------------------------------
     3.4 渲染题型标签
  ------------------------------------------ */
  _renderTypeBadge(type) {
    const cfg = TYPE_LABELS[type] || TYPE_LABELS.single;
    return `
      <span style="
        display:inline-flex;
        align-items:center;
        gap:0.3rem;
        padding:0.25rem 0.8rem;
        background:${cfg.color}18;
        border:1.5px solid ${cfg.color}44;
        border-radius:var(--radius-pill);
        font-size:0.78rem;
        font-weight:700;
        color:${cfg.color};
      ">
        ${cfg.icon} ${cfg.text}
      </span>
    `;
  }

  /* ------------------------------------------
     3.5 渲染答题区域（根据题型分发）
  ------------------------------------------ */
  _renderAnswerArea(q) {
    switch (q.type) {
      case 'single': return this._renderSingle(q);
      case 'judge':  return this._renderJudge(q);
      case 'match':  return this._renderMatch(q);
      default:       return this._renderSingle(q);
    }
  }

  /* ------------------------------------------
     3.6 单选题渲染
  ------------------------------------------ */
  _renderSingle(q) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    // 打乱选项顺序
    const shuffled = Utils.shuffle(
      q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.answer }))
    );

    // 保存打乱后的映射，供提交时使用
    this._shuffledOptions = shuffled;

    return `
      <div class="quiz-options" id="optionsList">
        ${shuffled.map((opt, i) => `
          <div
            class="quiz-option"
            data-index="${i}"
            onclick="quizEngine._selectOption(${i})"
          >
            <span class="option-letter">${letters[i]}</span>
            <span>${Utils._escapeHtml(opt.text)}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  /* ------------------------------------------
     3.7 判断题渲染
  ------------------------------------------ */
  _renderJudge(q) {
    return `
      <div class="judge-options">
        <div
          class="judge-option"
          data-value="true"
          onclick="quizEngine._selectJudge('true')"
        >
          <span class="judge-icon">⭕</span>
          <span style="font-size:1rem;font-weight:700;">正确</span>
        </div>
        <div
          class="judge-option"
          data-value="false"
          onclick="quizEngine._selectJudge('false')"
        >
          <span class="judge-icon">❌</span>
          <span style="font-size:1rem;font-weight:700;">错误</span>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------
     3.8 连线题渲染
  ------------------------------------------ */
  _renderMatch(q) {
    // 打乱右列顺序
    const rightItems = Utils.shuffle([...q.pairs.map(p => p.right)]);
    this._matchRightOrder = rightItems;

    return `
      <div style="
        font-size:0.82rem;
        color:var(--text-light);
        margin-bottom:0.8rem;
        text-align:center;
      ">
        💡 先点击左边，再点击右边进行连线
      </div>
      <div class="match-container">
        <!-- 左列 -->
        <div class="match-col" id="matchLeft">
          ${q.pairs.map((pair, i) => `
            <div
              class="match-item"
              data-left="${i}"
              onclick="quizEngine._selectMatchLeft(${i})"
            >
              ${Utils._escapeHtml(pair.left)}
            </div>
          `).join('')}
        </div>
        <!-- 右列 -->
        <div class="match-col" id="matchRight">
          ${rightItems.map((right, i) => `
            <div
              class="match-item"
              data-right="${i}"
              onclick="quizEngine._selectMatchRight(${i})"
            >
              ${Utils._escapeHtml(right)}
            </div>
          `).join('')}
        </div>
      </div>
      <!-- 已连线记录 -->
      <div id="matchResult" style="
        margin-top:0.8rem;
        display:flex;
        flex-wrap:wrap;
        gap:0.5rem;
        min-height:28px;
      "></div>
    `;
  }

  /* ------------------------------------------
     3.9 连线题事件绑定
  ------------------------------------------ */
  _bindMatchEvents(q) {
    // 事件通过内联onclick处理，此处留空备用
  }

  /* ------------------------------------------
     3.10 单选题选项点击
  ------------------------------------------ */
  _selectOption(index) {
    // 如果已提交，不允许更改
    if (document.getElementById('submitBtn')?.disabled) return;

    Utils.$$('.quiz-option').forEach((el, i) => {
      el.classList.toggle('selected', i === index);
    });
    this._selectedOption = index;
  }

  /* ------------------------------------------
     3.11 判断题选项点击
  ------------------------------------------ */
  _selectJudge(value) {
    if (document.getElementById('submitBtn')?.disabled) return;

    Utils.$$('.judge-option').forEach(el => {
      el.classList.toggle('selected', el.dataset.value === value);
    });
    this._selectedJudge = value;
  }

  /* ------------------------------------------
     3.12 连线题左列点击
  ------------------------------------------ */
  _selectMatchLeft(index) {
    if (this.matchState.matched[index] !== undefined) return;

    // 清除旧选中
    Utils.$$('.match-item[data-left]').forEach(el => {
      el.classList.remove('selected');
    });

    this.matchState.selectedLeft = index;
    const el = document.querySelector(`.match-item[data-left="${index}"]`);
    if (el) el.classList.add('selected');

    // 如果右边已选，自动配对
    if (this.matchState.selectedRight !== null) {
      this._doMatch();
    }
  }

  /* ------------------------------------------
     3.13 连线题右列点击
  ------------------------------------------ */
  _selectMatchRight(index) {
    // 是否已被匹配
    const isMatched = Object.values(this.matchState.matched)
      .includes(index);
    if (isMatched) return;

    // 清除旧选中
    Utils.$$('.match-item[data-right]').forEach(el => {
      el.classList.remove('selected');
    });

    this.matchState.selectedRight = index;
    const el = document.querySelector(`.match-item[data-right="${index}"]`);
    if (el) el.classList.add('selected');

    // 如果左边已选，自动配对
    if (this.matchState.selectedLeft !== null) {
      this._doMatch();
    }
  }

  /* ------------------------------------------
     3.14 执行连线配对
  ------------------------------------------ */
  _doMatch() {
    const leftIdx  = this.matchState.selectedLeft;
    const rightIdx = this.matchState.selectedRight;

    if (leftIdx === null || rightIdx === null) return;

    // 记录配对
    this.matchState.matched[leftIdx] = rightIdx;

    // 更新样式
    const leftEl  = document.querySelector(`.match-item[data-left="${leftIdx}"]`);
    const rightEl = document.querySelector(`.match-item[data-right="${rightIdx}"]`);
    if (leftEl)  { leftEl.classList.remove('selected');  leftEl.classList.add('matched');  }
    if (rightEl) { rightEl.classList.remove('selected'); rightEl.classList.add('matched'); }

    // 显示连线标记
    this._renderMatchTag(leftIdx, rightIdx);

    // 重置选中状态
    this.matchState.selectedLeft  = null;
    this.matchState.selectedRight = null;

    // 检查是否全部配对完成
    const q = this.questions[this.currentIndex];
    if (Object.keys(this.matchState.matched).length === q.pairs.length) {
      Toast.show('连线完成！点击确认答案 ✅', 'success', 2000);
    }
  }

  /* ------------------------------------------
     3.15 渲染连线标签
  ------------------------------------------ */
  _renderMatchTag(leftIdx, rightIdx) {
    const container = document.getElementById('matchResult');
    if (!container) return;

    const q         = this.questions[this.currentIndex];
    const leftText  = q.pairs[leftIdx].left;
    const rightText = this._matchRightOrder[rightIdx];

    const tag = document.createElement('div');
    tag.style.cssText = `
      display:inline-flex;
      align-items:center;
      gap:0.3rem;
      padding:0.25rem 0.7rem;
      background:linear-gradient(135deg,#FFF0E8,#FFFBF0);
      border:1.5px solid var(--border);
      border-radius:var(--radius-pill);
      font-size:0.8rem;
      color:var(--primary);
      font-weight:600;
    `;
    tag.innerHTML = `
      ${Utils._escapeHtml(leftText)}
      <span style="color:var(--text-light);">→</span>
      ${Utils._escapeHtml(rightText)}
    `;
    container.appendChild(tag);
  }

  /* ------------------------------------------
     3.16 提交答案
  ------------------------------------------ */
  _handleSubmit() {
    const q = this.questions[this.currentIndex];

    let isCorrect = false;
    let userAnswer = null;

    switch (q.type) {
      case 'single':
        isCorrect  = this._checkSingle(q);
        userAnswer = this._selectedOption;
        break;
      case 'judge':
        isCorrect  = this._checkJudge(q);
        userAnswer = this._selectedJudge;
        break;
      case 'match':
        isCorrect  = this._checkMatch(q);
        userAnswer = { ...this.matchState.matched };
        break;
    }

    // 验证是否已作答
    if (!this._hasAnswered(q.type)) {
      Toast.show('请先选择答案哦 😊', 'warning');
      return;
    }

    // 记分
    if (isCorrect) this.score++;

    // 记录答案
    this.answers.push({
      questionIndex: this.currentIndex,
      question:      q.question,
      type:          q.type,
      userAnswer,
      isCorrect
    });

    // 显示反馈
    this._showFeedback(q, isCorrect);

    // 禁用提交按钮
    const btn = document.getElementById('submitBtn');
    if (btn) {
      btn.disabled = true;
      btn.textContent = isCorrect ? '✅ 答对了！' : '❌ 答错了';
      btn.style.background = isCorrect
        ? 'linear-gradient(135deg,#2ED573,#17C964)'
        : 'linear-gradient(135deg,#FF4757,#FF6B9D)';
    }

    // 高亮正确答案
    this._highlightAnswer(q);

    // 延迟进入下一题
    setTimeout(() => this._next(), 2200);
  }

  /* ------------------------------------------
     3.17 检验答案
  ------------------------------------------ */
  _hasAnswered(type) {
    switch (type) {
      case 'single':
        return this._selectedOption !== undefined && this._selectedOption !== null;
      case 'judge':
        return this._selectedJudge !== undefined && this._selectedJudge !== null;
      case 'match': {
        const q = this.questions[this.currentIndex];
        return Object.keys(this.matchState.matched).length === q.pairs.length;
      }
      default:
        return false;
    }
  }

  _checkSingle(q) {
    if (this._selectedOption === undefined || this._selectedOption === null) return false;
    return this._shuffledOptions[this._selectedOption]?.isCorrect === true;
  }

  _checkJudge(q) {
    if (this._selectedJudge === undefined) return false;
    const userVal = this._selectedJudge === 'true';
    return userVal === q.answer;
  }

  _checkMatch(q) {
    // 逐对检验
    for (let leftIdx = 0; leftIdx < q.pairs.length; leftIdx++) {
      const rightIdx      = this.matchState.matched[leftIdx];
      if (rightIdx === undefined) return false;
      const rightText     = this._matchRightOrder[rightIdx];
      const correctRight  = q.pairs[leftIdx].right;
      if (rightText !== correctRight) return false;
    }
    return true;
  }

  /* ------------------------------------------
     3.18 显示答题反馈
  ------------------------------------------ */
  _showFeedback(q, isCorrect) {
    const feedbackEl = document.getElementById('quizFeedback');
    if (!feedbackEl) return;

    const icon = isCorrect ? '🎉' : '💡';
    const text = isCorrect
      ? `答对了！${q.explanation || '做得很棒！'}`
      : `答错了！${q.explanation || '再好好复习一下吧！'}`;

    feedbackEl.className = `quiz-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
    feedbackEl.innerHTML = `
      <span style="font-size:1.3rem;flex-shrink:0;">${icon}</span>
      <div>
        <strong>${isCorrect ? '✅ 正确！' : '❌ 错误！'}</strong>
        <div style="margin-top:0.2rem;">${Utils._escapeHtml(text)}</div>
      </div>
    `;

    feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  /* ------------------------------------------
     3.19 高亮正确答案
  ------------------------------------------ */
  _highlightAnswer(q) {
    switch (q.type) {
      case 'single': {
        Utils.$$('.quiz-option').forEach((el, i) => {
          el.classList.add('disabled');
          if (this._shuffledOptions[i]?.isCorrect) {
            el.classList.add('correct');
          } else if (el.classList.contains('selected')) {
            el.classList.add('wrong');
            el.classList.remove('selected');
          }
        });
        break;
      }
      case 'judge': {
        const correctVal = String(q.answer);
        Utils.$$('.judge-option').forEach(el => {
          el.style.pointerEvents = 'none';
          if (el.dataset.value === correctVal) {
            el.classList.add('correct');
          } else if (el.classList.contains('selected')) {
            el.classList.add('wrong');
            el.classList.remove('selected');
          }
        });
        break;
      }
      case 'match': {
        // 连线题逐对标记对错
        for (let leftIdx = 0; leftIdx < q.pairs.length; leftIdx++) {
          const rightIdx    = this.matchState.matched[leftIdx];
          const rightText   = this._matchRightOrder[rightIdx];
          const correctRight= q.pairs[leftIdx].right;
          const isRight     = rightText === correctRight;

          const leftEl  = document.querySelector(`.match-item[data-left="${leftIdx}"]`);
          const rightEl = document.querySelector(`.match-item[data-right="${rightIdx}"]`);

          if (leftEl)  {
            leftEl.classList.remove('matched');
            leftEl.classList.add(isRight ? 'matched' : 'wrong');
          }
          if (rightEl) {
            rightEl.classList.remove('matched');
            rightEl.classList.add(isRight ? 'matched' : 'wrong');
          }
        }
        break;
      }
    }
  }

  /* ------------------------------------------
     3.20 进入下一题
  ------------------------------------------ */
  _next() {
    // 重置单选/判断状态
    this._selectedOption = null;
    this._selectedJudge  = null;
    this._shuffledOptions = [];

    this.currentIndex++;

    if (this.currentIndex >= this.questions.length) {
      this.isFinished = true;
      this._finalize();
    } else {
      this._render();
    }
  }

  /* ------------------------------------------
     3.21 测验结束 & 保存成绩
  ------------------------------------------ */
  _finalize() {
    const total     = this.questions.length;
    const percent   = Math.round((this.score / total) * 100);
    const timeUsed  = Math.round((Date.now() - this.startTime) / 1000);

    // 判断等级
    const grade = this._getGrade(percent);

    // 保存进度
    ProgressManager.saveScore(
      this.moduleId,
      this.score,
      total,
      grade.badge
    );

    // 满分触发撒花
    if (percent === 100) {
      setTimeout(() => Confetti.fire(120), 300);
    } else if (percent >= 90) {
      setTimeout(() => Confetti.fire(60), 300);
    }

    this._render();
  }

  /* ------------------------------------------
     3.22 获取等级信息
  ------------------------------------------ */
  _getGrade(percent) {
    const grades = QUIZ_CONFIG.GRADE;
    if (percent === 100) return grades.PERFECT;
    if (percent >= 90)   return grades.EXCELLENT;
    if (percent >= 75)   return grades.GOOD;
    if (percent >= 60)   return grades.PASS;
    return grades.FAIL;
  }

  _getEncourage(percent) {
    const enc = QUIZ_CONFIG.ENCOURAGE;
    let arr;
    if (percent === 100)    arr = enc.PERFECT;
    else if (percent >= 90) arr = enc.EXCELLENT;
    else if (percent >= 75) arr = enc.GOOD;
    else if (percent >= 60) arr = enc.PASS;
    else                    arr = enc.FAIL;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /* ------------------------------------------
     3.23 渲染结果页
  ------------------------------------------ */
  _renderResult(container) {
    const total    = this.questions.length;
    const percent  = Math.round((this.score / total) * 100);
    const grade    = this._getGrade(percent);
    const encourage= this._getEncourage(percent);
    const timeUsed = Math.round((Date.now() - this.startTime) / 1000);
    const wrongCnt = total - this.score;

    container.innerHTML = `
      <div class="quiz-result scale-in">

        <!-- 图标 -->
        <div class="quiz-result-icon">${grade.badge}</div>

        <!-- 标题 -->
        <div class="quiz-result-title">测验完成！</div>

        <!-- 分数 -->
        <div class="quiz-result-score">${percent}<span style="font-size:2rem;">分</span></div>

        <!-- 徽章 -->
        <div class="quiz-result-badge">
          <span class="badge-icon">${grade.badge}</span>
          <span>${grade.title}</span>
        </div>

        <!-- 鼓励语 -->
        <div class="quiz-result-encourage">${encourage}</div>

        <!-- 统计 -->
        <div class="quiz-stats">
          <div class="quiz-stat-item">
            <div class="quiz-stat-num" style="color:#2ED573">${this.score}</div>
            <div class="quiz-stat-label">答对题数</div>
          </div>
          <div class="quiz-stat-item">
            <div class="quiz-stat-num" style="color:#FF4757">${wrongCnt}</div>
            <div class="quiz-stat-label">答错题数</div>
          </div>
          <div class="quiz-stat-item">
            <div class="quiz-stat-num">${total}</div>
            <div class="quiz-stat-label">总题数</div>
          </div>
          <div class="quiz-stat-item">
            <div class="quiz-stat-num">${this._formatTime(timeUsed)}</div>
            <div class="quiz-stat-label">用时</div>
          </div>
        </div>

        <!-- 历史最高分 -->
        ${this._renderBestScore()}

        <!-- 错题回顾 -->
        ${wrongCnt > 0 ? this._renderWrongReview() : `
          <div style="
            background:linear-gradient(135deg,#EAFFF5,#F5FFF9);
            border:1.5px solid #2ED573;
            border-radius:var(--radius-md);
            padding:1rem;
            margin:1rem 0;
            font-size:0.9rem;
            color:#1a6640;
            font-weight:600;
          ">
            🎉 全部答对！你真的太厉害了！
          </div>
        `}

        <!-- 操作按钮 -->
        <div class="quiz-result-actions">
          <button
            class="btn btn-primary"
            onclick="quizEngine.restart()"
            style="padding:0.8rem 1.5rem;"
          >
            🔄 再来一次
          </button>
          <a
            href="index.html"
            class="btn btn-ghost"
            style="padding:0.8rem 1.5rem;"
          >
            🏠 返回首页
          </a>
          <button
            class="btn btn-secondary"
            onclick="ProgressManager.showHistory()"
            style="padding:0.8rem 1.5rem;"
          >
            📊 学习记录
          </button>
        </div>

      </div>
    `;
  }

 /* ------------------------------------------
     3.24 渲染历史最高分（续）
  ------------------------------------------ */
  _renderBestScore() {
    const best    = ProgressManager.getBestScore(this.moduleId);
    const total   = this.questions.length;
    const current = this.score;

    if (best === null) return '';

    const bestPct    = Math.round((best / total) * 100);
    const isNewBest  = current >= best;
    const currentPct = Math.round((current / total) * 100);

    return `
      <div style="
        background:${isNewBest
          ? 'linear-gradient(135deg,#FFF8E0,#FFF0E0)'
          : 'var(--bg)'};
        border:1.5px solid ${isNewBest ? 'var(--secondary)' : 'var(--border)'};
        border-radius:var(--radius-md);
        padding:0.9rem 1.2rem;
        margin:1rem 0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:1rem;
        flex-wrap:wrap;
      ">
        <div style="font-size:0.875rem;color:var(--text-mid);">
          ${isNewBest
            ? '<span style="color:#b8860b;font-weight:700;">🏅 新纪录！</span>'
            : '📈 历史最高分'}
        </div>
        <div style="
          display:flex;
          align-items:center;
          gap:1.2rem;
          font-size:0.875rem;
        ">
          <div style="text-align:center;">
            <div style="
              font-size:1.4rem;
              font-weight:900;
              color:var(--primary);
              line-height:1;
            ">${currentPct}分</div>
            <div style="color:var(--text-light);font-size:0.75rem;margin-top:0.2rem;">
              本次
            </div>
          </div>
          <div style="color:var(--border);font-size:1.2rem;">→</div>
          <div style="text-align:center;">
            <div style="
              font-size:1.4rem;
              font-weight:900;
              color:${isNewBest ? '#b8860b' : 'var(--text-mid)'};
              line-height:1;
            ">${bestPct}分</div>
            <div style="color:var(--text-light);font-size:0.75rem;margin-top:0.2rem;">
              最高
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------
     3.25 渲染错题回顾
  ------------------------------------------ */
  _renderWrongReview() {
    const wrongAnswers = this.answers.filter(a => !a.isCorrect);
    if (wrongAnswers.length === 0) return '';

    const items = wrongAnswers.map((a, i) => {
      const q         = this.questions[a.questionIndex];
      const typeLabel = TYPE_LABELS[q.type] || TYPE_LABELS.single;

      // 生成正确答案文字
      let correctText = '';
      switch (q.type) {
        case 'single':
          correctText = q.options[q.answer] || '';
          break;
        case 'judge':
          correctText = q.answer ? '⭕ 正确' : '❌ 错误';
          break;
        case 'match':
          correctText = q.pairs.map(p => `${p.left} → ${p.right}`).join('、');
          break;
      }

      return `
        <div style="
          background:var(--bg);
          border:1.5px solid var(--border);
          border-left:4px solid var(--error);
          border-radius:var(--radius-sm);
          padding:1rem;
          margin-bottom:0.7rem;
        ">
          <div style="
            display:flex;
            align-items:center;
            gap:0.5rem;
            margin-bottom:0.5rem;
          ">
            <span style="
              font-size:0.72rem;
              font-weight:700;
              color:${typeLabel.color};
              background:${typeLabel.color}18;
              padding:0.15rem 0.5rem;
              border-radius:var(--radius-pill);
            ">${typeLabel.icon} ${typeLabel.text}</span>
            <span style="
              font-size:0.72rem;
              color:var(--error);
              font-weight:600;
            ">第${a.questionIndex + 1}题</span>
          </div>

          <div style="
            font-size:0.875rem;
            font-weight:600;
            color:var(--text-dark);
            margin-bottom:0.6rem;
            line-height:1.6;
          ">
            ${Utils._escapeHtml(q.question)}
          </div>

          <div style="
            font-size:0.82rem;
            color:#1a6640;
            background:#EAFFF5;
            border-radius:var(--radius-sm);
            padding:0.5rem 0.8rem;
            line-height:1.6;
          ">
            ✅ 正确答案：<strong>${Utils._escapeHtml(correctText)}</strong>
          </div>

          ${q.explanation ? `
            <div style="
              font-size:0.82rem;
              color:var(--text-mid);
              margin-top:0.5rem;
              line-height:1.6;
            ">
              💡 解析：${Utils._escapeHtml(q.explanation)}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    return `
      <div style="margin:1rem 0;text-align:left;">
        <div style="
          font-size:0.9rem;
          font-weight:700;
          color:var(--text-dark);
          margin-bottom:0.8rem;
          display:flex;
          align-items:center;
          gap:0.4rem;
        ">
          ❌ 错题回顾
          <span style="
            background:var(--error);
            color:white;
            font-size:0.72rem;
            padding:0.1rem 0.5rem;
            border-radius:var(--radius-pill);
            font-weight:700;
          ">${wrongAnswers.length}题</span>
        </div>
        ${items}
      </div>
    `;
  }

  /* ------------------------------------------
     3.26 格式化时间
  ------------------------------------------ */
  _formatTime(seconds) {
    if (seconds < 60) return `${seconds}秒`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return s > 0 ? `${m}分${s}秒` : `${m}分钟`;
  }

  /* ------------------------------------------
     3.27 重新开始
  ------------------------------------------ */
  restart() {
    this.currentIndex     = 0;
    this.score            = 0;
    this.answers          = [];
    this.isFinished       = false;
    this._selectedOption  = null;
    this._selectedJudge   = null;
    this._shuffledOptions = [];
    this.matchState       = {
      selectedLeft:  null,
      selectedRight: null,
      matched:       {}
    };
    this.start();
    Toast.show('重新开始挑战！加油 💪', 'info', 2000);
  }
}

/* ==========================================
   4. 题库工具函数
   ========================================== */

/**
 * 验证题库格式是否合法
 * @param {Array} questions 题库数组
 * @returns {boolean}
 */
function validateQuestionBank(questions) {
  if (!Array.isArray(questions) || questions.length === 0) {
    console.error('题库为空或格式错误');
    return false;
  }

  let valid = true;
  questions.forEach((q, i) => {
    if (!q.type) {
      console.error(`第${i + 1}题缺少type字段`);
      valid = false;
    }
    if (!q.question) {
      console.error(`第${i + 1}题缺少question字段`);
      valid = false;
    }
    switch (q.type) {
      case 'single':
        if (!Array.isArray(q.options) || q.options.length < 2) {
          console.error(`第${i + 1}题选项不足`);
          valid = false;
        }
        if (typeof q.answer !== 'number') {
          console.error(`第${i + 1}题answer应为数字索引`);
          valid = false;
        }
        break;
      case 'judge':
        if (typeof q.answer !== 'boolean') {
          console.error(`第${i + 1}题answer应为布尔值`);
          valid = false;
        }
        break;
      case 'match':
        if (!Array.isArray(q.pairs) || q.pairs.length < 2) {
          console.error(`第${i + 1}题pairs不足`);
          valid = false;
        }
        break;
      default:
        console.error(`第${i + 1}题未知题型: ${q.type}`);
        valid = false;
    }
  });

  return valid;
}

/**
 * 快速创建测验引擎并启动
 * @param {Array}  questions   题库
 * @param {string} moduleId    模块ID
 * @param {string} containerId 容器ID
 * @returns {QuizEngine}
 */
function createQuiz(questions, moduleId, containerId = 'quizContainer') {
  if (!validateQuestionBank(questions)) {
    console.error('题库验证失败，请检查题目格式');
    return null;
  }

  // 挂载到全局，供HTML内联事件调用
  window.quizEngine = new QuizEngine(questions, moduleId, containerId);
  window.quizEngine.start();

  return window.quizEngine;
}

/* ==========================================
   5. 示例题库格式参考（注释版）
   ==========================================

// ---- 单选题 ----
{
  type: 'single',
  question: '在WPS演示中，新建演示文稿的快捷键是？',
  options: ['Ctrl+N', 'Ctrl+O', 'Ctrl+S', 'Ctrl+Z'],
  answer: 0,          // 正确答案的索引（0=第一个选项）
  explanation: 'Ctrl+N是新建文件的通用快捷键。'
}

// ---- 判断题 ----
{
  type: 'judge',
  question: '幻灯片母版修改后，所有应用该母版的幻灯片都会同步更新。',
  answer: true,       // true=正确, false=错误
  explanation: '母版是所有幻灯片的模板，修改后会自动同步。'
}

// ---- 连线题 ----
{
  type: 'match',
  question: '请将以下快捷键与其对应功能连线：',
  pairs: [
    { left: 'Ctrl+C', right: '复制' },
    { left: 'Ctrl+V', right: '粘贴' },
    { left: 'Ctrl+Z', right: '撤销' },
    { left: 'Ctrl+S', right: '保存' }
  ],
  explanation: '这些都是常用的文件操作快捷键。'
}

========================================== */
