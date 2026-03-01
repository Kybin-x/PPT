// JavaScript Document
/* ==========================================
   PPT闪光课堂 - 全局脚本 main.js
   功能：导航交互 / 用户信息管理 / 工具函数
   ========================================== */

// ==========================================
// 1. 用户信息管理
// ==========================================

const UserManager = {
  KEY: 'ppt_flash_user',

  // 获取用户信息
  getUser() {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : null;
  },

  // 保存用户信息
  saveUser(studentId, name) {
    const user = {
      studentId: studentId.trim(),
      name: name.trim(),
      joinTime: new Date().toLocaleDateString('zh-CN')
    };
    localStorage.setItem(this.KEY, JSON.stringify(user));
    return user;
  },

  // 清除用户信息
  clearUser() {
    localStorage.removeItem(this.KEY);
  },

  // 是否已登录
  isLoggedIn() {
    const user = this.getUser();
    return user && user.studentId && user.name;
  }
};

// ==========================================
// 2. 学习进度管理
// ==========================================

const ProgressManager = {
  KEY: 'ppt_flash_progress',

  // 获取所有进度
  getAll() {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : {};
  },

  // 标记某节课已完成
  markComplete(lessonId) {
    const progress = this.getAll();
    progress[lessonId] = {
      completed: true,
      time: new Date().toLocaleDateString('zh-CN')
    };
    localStorage.setItem(this.KEY, JSON.stringify(progress));
  },

  // 判断某节课是否完成
  isComplete(lessonId) {
    const progress = this.getAll();
    return progress[lessonId] && progress[lessonId].completed;
  },

  // 获取已完成课程数量
  getCompletedCount() {
    const progress = this.getAll();
    return Object.values(progress).filter(v => v.completed).length;
  }
};

// ==========================================
// 3. 测验成绩管理
// ==========================================

const QuizManager = {
  KEY: 'ppt_flash_quiz',

  // 获取所有成绩
  getAll() {
    const data = localStorage.getItem(this.KEY);
    return data ? JSON.parse(data) : {};
  },

  // 保存某模块成绩
  saveScore(moduleId, score, total) {
    const records = this.getAll();
    if (!records[moduleId]) records[moduleId] = [];
    records[moduleId].push({
      score,
      total,
      percent: Math.round((score / total) * 100),
      time: new Date().toLocaleString('zh-CN')
    });
    localStorage.setItem(this.KEY, JSON.stringify(records));
  },

  // 获取某模块最高分
  getBestScore(moduleId) {
    const records = this.getAll();
    if (!records[moduleId] || records[moduleId].length === 0) return null;
    return records[moduleId].reduce((best, cur) =>
      cur.percent > best.percent ? cur : best
    );
  },

  // 获取某模块历史记录
  getHistory(moduleId) {
    const records = this.getAll();
    return records[moduleId] || [];
  }
};

// ==========================================
// 4. 用户信息弹窗
// ==========================================

const Modal = {
  overlay: null,

  // 初始化弹窗
  init() {
    this.overlay = document.getElementById('userModal');
    if (!this.overlay) return;

    // 绑定提交事件
    const form = document.getElementById('userForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }

    // 点击遮罩不可关闭（强制输入）
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay && UserManager.isLoggedIn()) {
        this.hide();
      }
    });
  },

  // 显示弹窗
  show() {
    if (this.overlay) {
      this.overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
      // 聚焦第一个输入框
      setTimeout(() => {
        const firstInput = this.overlay.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 300);
    }
  },

  // 隐藏弹窗
  hide() {
    if (this.overlay) {
      this.overlay.classList.remove('show');
      document.body.style.overflow = '';
    }
  },

  // 处理表单提交
  handleSubmit() {
    const studentId = document.getElementById('studentId')?.value || '';
    const studentName = document.getElementById('studentName')?.value || '';

    // 校验
    if (!studentId.trim()) {
      this.showError('请输入学号！');
      return;
    }
    if (!studentName.trim()) {
      this.showError('请输入姓名！');
      return;
    }
    if (studentId.trim().length < 4) {
      this.showError('学号格式不正确，请重新输入！');
      return;
    }

    // 保存用户信息
    const user = UserManager.saveUser(studentId, studentName);

    // 更新导航栏用户显示
    NavBar.updateUserDisplay(user);

    // 关闭弹窗并显示欢迎提示
    this.hide();
    Toast.show(`🎉 欢迎你，${user.name}！开始闪光之旅吧！`, 'success');
  },

  // 显示错误提示
  showError(msg) {
    let errEl = document.getElementById('modalError');
    if (!errEl) {
      errEl = document.createElement('p');
      errEl.id = 'modalError';
      errEl.style.cssText = `
        color: #FF4757;
        font-size: 0.875rem;
        margin-top: -0.5rem;
        text-align: left;
        padding-left: 0.2rem;
      `;
      const form = document.getElementById('userForm');
      const btn = form.querySelector('.btn-start');
      form.insertBefore(errEl, btn);
    }
    errEl.textContent = '⚠️ ' + msg;

    // 3秒后自动消失
    setTimeout(() => {
      if (errEl) errEl.textContent = '';
    }, 3000);
  }
};

// ==========================================
// 5. 导航栏交互
// ==========================================

const NavBar = {
  init() {
    // 汉堡菜单
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.classList.toggle('active');
      });

      // 点击菜单外关闭
      document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.remove('open');
          toggle.classList.remove('active');
        }
      });
    }

    // 移动端下拉菜单点击展开
    const navItems = document.querySelectorAll('.nav-item.has-dropdown');
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 600) {
            e.preventDefault();
            item.classList.toggle('open');
          }
        });
      }
    });

    // 滚动时导航栏阴影
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.style.boxShadow = '0 4px 20px rgba(255,107,53,0.15)';
        } else {
          navbar.style.boxShadow = '0 2px 10px rgba(255,107,53,0.10)';
        }
      }
    });

    // 高亮当前页导航
    this.highlightCurrent();

    // 更新用户显示
    const user = UserManager.getUser();
    if (user) this.updateUserDisplay(user);
  },

  // 高亮当前页
  highlightCurrent() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.endsWith(href)) {
        link.classList.add('active');
      }
    });
  },

  // 更新导航栏用户显示
  updateUserDisplay(user) {
    const userDisplay = document.getElementById('navUserDisplay');
    if (userDisplay) {
      userDisplay.innerHTML = `
        <span style="
          display:inline-flex;
          align-items:center;
          gap:0.4rem;
          padding:0.3rem 0.8rem;
          background:linear-gradient(135deg,#FFF5F0,#FFFBF0);
          border:1.5px solid var(--border);
          border-radius:var(--radius-pill);
          font-size:0.85rem;
          font-weight:600;
          color:var(--primary);
          cursor:pointer;
        " onclick="Modal.show()" title="点击修改信息">
          👤 ${user.name}（${user.studentId}）
        </span>
      `;
    }
  }
};

// ==========================================
// 6. Toast 消息提示
// ==========================================

const Toast = {
  container: null,

  init() {
    this.container = document.createElement('div');
    this.container.id = 'toastContainer';
    this.container.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      pointer-events: none;
    `;
    document.body.appendChild(this.container);
  },

  show(message, type = 'info', duration = 3000) {
    if (!this.container) this.init();

    const colors = {
      success: { bg: '#EAFFF5', border: '#2ED573', color: '#1a8a50', icon: '✅' },
      error:   { bg: '#FFF0F1', border: '#FF4757', color: '#FF4757', icon: '❌' },
      warning: { bg: '#FFF8E8', border: '#FFD23F', color: '#b8860b', icon: '⚠️' },
      info:    { bg: '#F0F5FF', border: '#5B8BF5', color: '#3a5fc8', icon: 'ℹ️' }
    };

    const c = colors[type] || colors.info;

    const toast = document.createElement('div');
    toast.style.cssText = `
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.8rem 1.2rem;
      background: ${c.bg};
      border: 1.5px solid ${c.border};
      border-radius: 12px;
      color: ${c.color};
      font-size: 0.9rem;
      font-weight: 500;
      font-family: var(--font-main);
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      pointer-events: all;
      animation: slideInRight 0.3s ease;
      max-width: 320px;
    `;
    toast.innerHTML = `<span>${c.icon}</span><span>${message}</span>`;

    // 添加动画样式
    if (!document.getElementById('toastStyle')) {
      const style = document.createElement('style');
      style.id = 'toastStyle';
      style.textContent = `
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
      `;
      document.head.appendChild(style);
    }

    this.container.appendChild(toast);

    // 自动消失
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// ==========================================
// 7. 滚动动画（IntersectionObserver）
// ==========================================

const ScrollAnimator = {
  init() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
};

// ==========================================
// 8. 工具函数
// ==========================================

const Utils = {
  // 打乱数组
  shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  // 格式化日期
  formatDate(date = new Date()) {
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric', month: '2-digit', day: '2-digit'
    });
  },

  // 获取分数对应徽章
  getBadge(percent) {
    if (percent === 100) return { icon: '🏆', name: '满分闪光奖', encourage: '太厉害了！你已经完全掌握这个模块！' };
    if (percent >= 90)  return { icon: '🌟', name: '优秀之星奖', encourage: '非常棒！你对知识点掌握得很好！' };
    if (percent >= 75)  return { icon: '🎯', name: '稳步前进奖', encourage: '做得不错！再复习一下重点内容会更完美！' };
    if (percent >= 60)  return { icon: '💪', name: '继续加油奖', encourage: '已经及格啦！再努力一把，你一定能更好！' };
    return { icon: '📚', name: '再接再厉奖', encourage: '不要气馁！仔细看看知识点，重新挑战吧！' };
  },

  // 获取激励语（随机）
  getRandomEncourage(percent) {
    const badge = this.getBadge(percent);
    return badge.encourage;
  },

  // 防抖
  debounce(fn, delay = 300) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }
};

// ==========================================
// 9. 页面初始化入口
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // 初始化导航
  NavBar.init();

  // 初始化Toast
  Toast.init();

  // 初始化滚动动画
  ScrollAnimator.init();

  // 初始化弹窗
  Modal.init();

  // 判断是否需要弹出用户信息输入框
  // 仅在用户访问课程/测验页面时触发
  const needLogin = document.body.dataset.requireLogin === 'true';
  if (needLogin && !UserManager.isLoggedIn()) {
    setTimeout(() => Modal.show(), 600);
  }

  // 如果已登录，更新导航显示
  if (UserManager.isLoggedIn()) {
    NavBar.updateUserDisplay(UserManager.getUser());
  }

  // 平滑滚动（兼容性补充）
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});