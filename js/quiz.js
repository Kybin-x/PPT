// JavaScript Document
/* ==========================================
   PPT闪光课堂 - 测验引擎 quiz.js
   支持：单选题 / 判断题 / 连线题
   功能：自动评分 / 徽章显示 / 激励语 / 可重做
   ========================================== */

const QuizEngine = {

  // 当前测验数据
  moduleId: '',
  moduleName: '',
  questions: [],
  currentIndex: 0,
  answers: {},        // { questionIndex: userAnswer }
  score: 0,
  total: 0,
  startTime: null,

  // 连线题临时状态
  matchState: {
    selectedLeft: null,
    pairs: {}          // { leftIndex: rightIndex }
  },

  // ==========================================
  // 初始化测验
  // ==========================================
  init(config) {
    this.moduleId   = config.moduleId   || 'module0';
    this.moduleName = config.moduleName || '测验';
    this.questions  = Utils.shuffle([...config.questions]);
    this.currentIndex = 0;
    this.answers    = {};
    this.score      = 0;
    this.total      = this.questions.length;
    this.startTime  = Date.now();
    this.matchState = { selectedLeft: null, pairs: {} };

    // 检查用户是否已登录
    if (!UserManager.isLoggedIn()) {
      Modal.show();
      // 等待登录后重新初始化
      const checkLogin = setInterval(() => {
        if (UserManager.isLoggedIn()) {
          clearInterval(checkLogin);
          this.renderQuestion();
        }
      }, 500);
      return;
    }

    this.renderQuestion();
  },

  // ==========================================
  // 渲染当前题目
  // ==========================================
  renderQuestion() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    // 已完成所有题目 → 显示结果
    if (this.currentIndex >= this.total) {
      this.showResult();
      return;
    }

    const q = this.questions[this.currentIndex];
    const progress = Math.round((this.currentIndex / this.total) * 100);

    let questionHTML = '';

    switch (q.type) {
      case 'single':
        questionHTML = this.renderSingle(q);
        break;
      case 'judge':
        questionHTML = this.renderJudge(q);
        break;
      case 'match':
        questionHTML = this.renderMatch(q);
        break;
      default:
        questionHTML = this.renderSingle(q);
    }

    container.innerHTML = `
      <!-- 进度条 -->
      <div class="quiz-progress">
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${progress}%"></div>
        </div>
        <span class="quiz-progress-text">
          ${this.currentIndex + 1} / ${this.total}
        </span>
      </div>

      <!-- 题目卡片 -->
      <div class="quiz-question-card">
        <div class="quiz-type-badge">
          ${this.getTypeBadgeHTML(q.type)}
        </div>
        <div class="quiz-question-text">
          <span style="color:var(--primary);font-weight:900;margin-right:0.4rem;">
            Q${this.currentIndex + 1}.
          </span>
          ${q.question}
        </div>

        <!-- 题目内容区 -->
        <div class="quiz-answer-area" id="answerArea">
          ${questionHTML}
        </div>

        <!-- 答题反馈 -->
        <div class="quiz-feedback" id="quizFeedback"></div>
      </div>

      <!-- 操作按钮 -->
      <div style="display:flex;justify-content:flex-end;gap:1rem;">
        <button
          class="btn btn-primary"
          id="confirmBtn"
          onclick="QuizEngine.confirmAnswer()"
          style="min-width:120px;"
        >
          确认答案 ✅
        </button>
      </div>
    `;

    // 连线题需要初始化事件
    if (q.type === 'match') {
      this.matchState = { selectedLeft: null, pairs: {} };
      this.initMatchEvents();
    }
  },

  // ==========================================
  // 渲染单选题
  // ==========================================
  renderSingle(q) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    return `
      <div class="quiz-options" id="singleOptions">
        ${q.options.map((opt, i) => `
          <div
            class="quiz-option"
            data-index="${i}"
            onclick="QuizEngine.selectSingle(this, ${i})"
          >
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
    `;
  },

  // ==========================================
  // 渲染判断题
  // ==========================================
  renderJudge(q) {
    return `
      <div class="judge-options" id="judgeOptions">
        <div
          class="judge-option"
          data-value="true"
          onclick="QuizEngine.selectJudge(this, true)"
        >
          <span class="judge-icon">✅</span>
          <span>正确</span>
        </div>
        <div
          class="judge-option"
          data-value="false"
          onclick="QuizEngine.selectJudge(this, false)"
        >
          <span class="judge-icon">❌</span>
          <span>错误</span>
        </div>
      </div>
    `;
  },

  // ==========================================
  // 渲染连线题
  // ==========================================
  renderMatch(q) {
    // 打乱右侧选项
    const rightItems = Utils.shuffle(
      q.pairs.map((p, i) => ({ text: p.right, pairIndex: i }))
    );

    return `
      <div style="margin-bottom:0.8rem;font-size:0.875rem;color:var(--text-light);">
        💡 先点击左侧项目，再点击右侧对应项目完成连线
      </div>
      <div class="match-container">
        <div class="match-col" id="matchLeft">
          ${q.pairs.map((p, i) => `
            <div
              class="match-item"
              data-left-index="${i}"
              id="matchLeft_${i}"
            >
              ${p.left}
            </div>
          `).join('')}
        </div>
        <div class="match-col" id="matchRight">
          ${rightItems.map((item, i) => `
            <div
              class="match-item"
              data-pair-index="${item.pairIndex}"
              data-right-pos="${i}"
              id="matchRight_${i}"
            >
              ${item.text}
            </div>
          `).join('')}
        </div>
      </div>
      <!-- 已连线记录 -->
      <div id="matchRecord" style="
        margin-top:1rem;
        display:flex;
        flex-wrap:wrap;
        gap:0.5rem;
      "></div>
    `;
  },

  // ==========================================
  // 初始化连线题事件
  // ==========================================
  initMatchEvents() {
    const leftItems  = document.querySelectorAll('#matchLeft .match-item');
    const rightItems = document.querySelectorAll('#matchRight .match-item');

    leftItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('matched')) return;

        // 取消之前选中
        leftItems.forEach(el => {
          if (!el.classList.contains('matched')) el.classList.remove('selected');
        });

        item.classList.add('selected');
        this.matchState.selectedLeft = parseInt(item.dataset.leftIndex);
      });
    });

    rightItems.forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('matched')) return;
        if (this.matchState.selectedLeft === null) {
          Toast.show('请先点击左侧的项目！', 'warning');
          return;
        }

        const leftIndex  = this.matchState.selectedLeft;
        const pairIndex  = parseInt(item.dataset.pairIndex);

        // 记录配对
        this.matchState.pairs[leftIndex] = pairIndex;

        // 标记已连线
        const leftEl = document.getElementById(`matchLeft_${leftIndex}`);
        if (leftEl) {
          leftEl.classList.remove('selected');
          leftEl.classList.add('matched');
        }
        item.classList.add('matched');

        // 更新连线记录显示
        this.updateMatchRecord();

        // 重置左侧选中
        this.matchState.selectedLeft = null;

        // 如果全部连线完毕，提示确认
        const q = this.questions[this.currentIndex];
        if (Object.keys(this.matchState.pairs).length === q.pairs.length) {
          Toast.show('✨ 全部连线完成！点击确认答案吧！', 'success');
        }
      });
    });
  },

  // 更新连线记录展示
  updateMatchRecord() {
    const q = this.questions[this.currentIndex];
    const record = document.getElementById('matchRecord');
    if (!record) return;

    record.innerHTML = Object.entries(this.matchState.pairs).map(([li, ri]) => {
      const leftText  = q.pairs[parseInt(li)].left;
      const rightText = q.pairs[parseInt(ri)].right;
      return `
        <span style="
          display:inline-flex;
          align-items:center;
          gap:0.3rem;
          padding:0.3rem 0.8rem;
          background:linear-gradient(135deg,#FFF5F0,#FFFBF0);
          border:1.5px solid var(--border);
          border-radius:var(--radius-pill);
          font-size:0.8rem;
          color:var(--primary);
          font-weight:600;
        ">
          ${leftText} ➔ ${rightText}
          <span
            style="cursor:pointer;margin-left:0.3rem;color:#aaa;"
            onclick="QuizEngine.removeMatch(${li})"
            title="取消连线"
          >✕</span>
        </span>
      `;
    }).join('');
  },

  // 取消连线
  removeMatch(leftIndex) {
    const pairIndex = this.matchState.pairs[leftIndex];
    delete this.matchState.pairs[leftIndex];

    // 恢复左侧
    const leftEl = document.getElementById(`matchLeft_${leftIndex}`);
    if (leftEl) leftEl.classList.remove('matched', 'selected');

    // 恢复右侧（找到对应right元素）
    const rightItems = document.querySelectorAll('#matchRight .match-item');
    rightItems.forEach(el => {
      if (parseInt(el.dataset.pairIndex) === pairIndex) {
        el.classList.remove('matched', 'selected');
      }
    });

    this.updateMatchRecord();
  },

  // ==========================================
  // 选择单选答案
  // ==========================================
  selectSingle(el, index) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    this.answers[this.currentIndex] = index;
  },

  // ==========================================
  // 选择判断答案
  // ==========================================
  selectJudge(el, value) {
    const options = document.querySelectorAll('.judge-option');
    options.forEach(opt => opt.classList.remove('selected'));
    el.classList.add('selected');
    this.answers[this.currentIndex] = value;
  },

  // ==========================================
  // 确认答案
  // ==========================================
  confirmAnswer() {
    const q = this.questions[this.currentIndex];
    let isCorrect = false;
    let userAnswer = this.answers[this.currentIndex];
    let feedbackMsg = '';

    // ---- 单选题判断 ----
    if (q.type === 'single') {
      if (userAnswer === undefined || userAnswer === null) {
        Toast.show('请先选择一个答案！', 'warning');
        return;
      }
      isCorrect = userAnswer === q.correct;

      // 高亮选项
      const options = document.querySelectorAll('.quiz-option');
      options.forEach((opt, i) => {
        opt.classList.add('disabled');
        opt.style.pointerEvents = 'none';
        if (i === q.correct) opt.classList.add('correct');
        if (i === userAnswer && !isCorrect) opt.classList.add('wrong');
      });

      const letters = ['A', 'B', 'C', 'D', 'E'];
      feedbackMsg = isCorrect
        ? `🎉 回答正确！答案是 <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong>`
        : `💡 回答错误，正确答案是 <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong>${q.explain ? '<br>📖 ' + q.explain : ''}`;
    }

    // ---- 判断题判断 ----
    else if (q.type === 'judge') {
      if (userAnswer === undefined || userAnswer === null) {
        Toast.show('请先选择正确或错误！', 'warning');
        return;
      }
      isCorrect = userAnswer === q.correct;

      const options = document.querySelectorAll('.judge-option');
      options.forEach(opt => {
        opt.style.pointerEvents = 'none';
        const val = opt.dataset.value === 'true';
        if (val === q.correct) opt.classList.add('correct');
        if (val === userAnswer && !isCorrect) opt.classList.add('wrong');
      });

      feedbackMsg = isCorrect
        ? `🎉 回答正确！该说法<strong>${q.correct ? '正确' : '错误'}</strong>`
        : `💡 回答错误！该说法<strong>${q.correct ? '正确' : '错误'}</strong>${q.explain ? '<br>📖 ' + q.explain : ''}`;
    }

    // ---- 连线题判断 ----
    else if (q.type === 'match') {
      const pairCount = q.pairs.length;
      if (Object.keys(this.matchState.pairs).length < pairCount) {
        Toast.show(`还有 ${pairCount - Object.keys(this.matchState.pairs).length} 组未连线！`, 'warning');
        return;
      }

      // 判断每对是否正确
      let correctCount = 0;
      Object.entries(this.matchState.pairs).forEach(([li, ri]) => {
        const leftIndex = parseInt(li);
        const isMatch = ri === leftIndex; // pairs[i].left 对应 pairs[i].right

        const leftEl  = document.getElementById(`matchLeft_${leftIndex}`);
        const rightItems = document.querySelectorAll('#matchRight .match-item');
        let rightEl = null;
        rightItems.forEach(el => {
          if (parseInt(el.dataset.pairIndex) === parseInt(ri)) rightEl = el;
        });

        if (isMatch) {
          correctCount++;
          if (leftEl)  leftEl.classList.add('matched');
          if (rightEl) rightEl.classList.add('matched');
        } else {
          if (leftEl)  leftEl.classList.add('wrong');
          if (rightEl) rightEl.classList.add('wrong');
        }
      });

      // 禁用所有连线操作
      document.querySelectorAll('.match-item').forEach(el => {
        el.style.pointerEvents = 'none';
      });

      isCorrect = correctCount === pairCount;
      this.answers[this.currentIndex] = correctCount;

      feedbackMsg = isCorrect
        ? `🎉 全部连线正确！满分通过！`
        : `💡 连对了 ${correctCount}/${pairCount} 组，继续加油！${q.explain ? '<br>📖 ' + q.explain : ''}`;

      // 连线题部分得分
      if (correctCount > 0) this.score += correctCount / pairCount;
    }

    // 非连线题计分
    if (q.type !== 'match' && isCorrect) {
      this.score++;
    }

    // 显示反馈
    this.showFeedback(isCorrect, feedbackMsg);

    // 替换确认按钮为下一题按钮
    const confirmBtn = document.getElementById('confirmBtn');
    if (confirmBtn) {
      const isLast = this.currentIndex >= this.total - 1;
      confirmBtn.textContent = isLast ? '查看结果 🏆' : '下一题 →';
      confirmBtn.onclick = () => this.nextQuestion();
    }
  },

  // ==========================================
  // 显示答题反馈
  // ==========================================
  showFeedback(isCorrect, msg) {
    const feedback = document.getElementById('quizFeedback');
    if (!feedback) return;
    feedback.className = `quiz-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `
      <span style="font-size:1.2rem;flex-shrink:0;">${isCorrect ? '✅' : '❌'}</span>
      <span>${msg}</span>
    `;
  },

  // ==========================================
  // 下一题
  // ==========================================
  nextQuestion() {
    this.currentIndex++;
    this.matchState = { selectedLeft: null, pairs: {} };
    this.renderQuestion();
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ==========================================
  // 获取题型徽章HTML
  // ==========================================
  getTypeBadgeHTML(type) {
    const types = {
      single: { label: '单选题', icon: '🔘', color: 'var(--primary)' },
      judge:  { label: '判断题', icon: '⚖️',  color: '#5B8BF5' },
      match:  { label: '连线题', icon: '🔗',  color: '#2ED573' }
    };
    const t = types[type] || types.single;
    return `
      <span style="
        display:inline-flex;
        align-items:center;
        gap:0.3rem;
        padding:0.25rem 0.8rem;
        background:${t.color}18;
        border:1.5px solid ${t.color};
        border-radius:var(--radius-pill);
        font-size:0.8rem;
        font-weight:700;
        color:${t.color};
      ">
        ${t.icon} ${t.label}
      </span>
    `;
  },

  // ==========================================
  // 显示测验结果
  // ==========================================
  showResult() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    // 计算用时
    const elapsed = Math.round((Date.now() - this.startTime) / 1000);
    const minutes  = Math.floor(elapsed / 60);
    const seconds  = elapsed % 60;
    const timeStr  = minutes > 0 ? `${minutes}分${seconds}秒` : `${seconds}秒`;

    // 计算百分比
    const rawScore  = Math.round(this.score);
    const percent   = Math.round((this.score / this.total) * 100);
    const badge     = Utils.getBadge(percent);
    const user      = UserManager.getUser();

    // 保存成绩
    QuizManager.saveScore(this.moduleId, rawScore, this.total);

    // 标记模块完成（≥60分）
    if (percent >= 60) {
      ProgressManager.markComplete(this.moduleId + '_quiz');
    }

    container.innerHTML = `
      <div class="quiz-result fade-in">

        <!-- 结果图标 -->
        <div class="quiz-result-icon">${badge.icon}</div>

        <!-- 用户信息 -->
        ${user ? `
          <div style="
            font-size:0.9rem;
            color:var(--text-light);
            margin-bottom:0.5rem;
          ">
            👤 ${user.name}（${user.studentId}）的测验结果
          </div>
        ` : ''}

        <!-- 标题 -->
        <div class="quiz-result-title">${this.moduleName} · 测验完成！</div>

        <!-- 分数 -->
        <div class="quiz-result-score">${percent}<span style="font-size:1.5rem;">分</span></div>

        <!-- 徽章 -->
        <div class="quiz-result-badge">
          <span class="badge-icon">${badge.icon}</span>
          <span class="badge-name">🎖️ 获得「${badge.name}」</span>
        </div>

        <!-- 激励语 -->
        <div class="quiz-result-encourage">${badge.encourage}</div>

        <!-- 统计 -->
        <div class="quiz-stats">
          <div class="quiz-stat-item">
            <div class="quiz-stat-num">${Math.round(this.score)}</div>
            <div class="quiz-stat-label">答对题数</div>
          </div>
          <div class="quiz-stat-item">
            <div class="quiz-stat-num">${this.total - Math.round(this.score)}</div>
            <div class="quiz-stat-label">答错题数</div>
          </div>
          <div class="quiz-stat-item">
            <div class="quiz-stat-num">${timeStr}</div>
            <div class="quiz-stat-label">用时</div>
          </div>
        </div>

        <!-- 历史最高分 -->
        ${this.renderBestScore()}

        <!-- 操作按钮 -->
        <div class="quiz-result-actions">
          <button
            class="btn btn-outline"
            onclick="QuizEngine.retry()"
          >
            🔄 重新挑战
          </button>
          <a
            href="../../index.html"
            class="btn btn-secondary"
          >
            🏠 返回首页
          </a>
          ${this.getNextModuleBtn()}
        </div>

        <!-- 完成时间 -->
        <div style="
          margin-top:1.5rem;
          font-size:0.8rem;
          color:var(--text-light);
        ">
          完成时间：${new Date().toLocaleString('zh-CN')}
        </div>
      </div>
    `;

    // 撒花特效
    if (percent >= 75) this.launchConfetti();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // 渲染历史最高分
  renderBestScore() {
    const history = QuizManager.getHistory(this.moduleId);
    if (history.length <= 1) return '';

    const best = QuizManager.getBestScore(this.moduleId);
    return `
      <div style="
        padding:0.6rem 1rem;
        background:var(--bg);
        border-radius:var(--radius-sm);
        font-size:0.875rem;
        color:var(--text-mid);
        margin-bottom:1rem;
        border:1px solid var(--border);
      ">
        🏅 历史最高分：<strong style="color:var(--primary);">${best.percent}分</strong>
        &nbsp;|&nbsp; 共挑战 <strong>${history.length}</strong> 次
      </div>
    `;
  },

  // 获取下一模块按钮
  getNextModuleBtn() {
    const moduleNum = parseInt(this.moduleId.replace('module', ''));
    if (moduleNum >= 7) return '';
    return `
      <a
        href="../module${moduleNum + 1}/quiz.html"
        class="btn btn-primary"
      >
        下一模块 →
      </a>
    `;
  },

  // ==========================================
  // 重做测验
  // ==========================================
  retry() {
    this.currentIndex = 0;
    this.answers      = {};
    this.score        = 0;
    this.startTime    = Date.now();
    this.matchState   = { selectedLeft: null, pairs: {} };
    // 重新打乱题目
    this.questions    = Utils.shuffle([...this.questions]);
    this.renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    Toast.show('🔄 题目已重新排列，加油！', 'info');
  },

  // ==========================================
  // 撒花特效（高分庆祝）
  // ==========================================
  launchConfetti() {
    const colors = ['#FF6B35', '#FFD23F', '#FF4757', '#2ED573', '#5B8BF5', '#FF6EB4'];
    const container = document.body;
    const count = 80;

    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        const size = Math.random() * 10 + 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 1.5;

        el.style.cssText = `
          position: fixed;
          top: -20px;
          left: ${left}vw;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
          z-index: 9999;
          pointer-events: none;
          animation: confettiFall ${duration}s ${delay}s ease-in forwards;
          transform: rotate(${Math.random() * 360}deg);
        `;

        container.appendChild(el);
        setTimeout(() => el.remove(), (duration + delay + 0.5) * 1000);
      }, i * 20);
    }

    // 添加动画关键帧
    if (!document.getElementById('confettiStyle')) {
      const style = document.createElement('style');
      style.id = 'confettiStyle';
      style.textContent = `
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
  }
};