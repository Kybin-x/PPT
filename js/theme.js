/**
 * PPT学习站 - 主题切换 + Toast通知 + 通用工具函数
 * 文件路径: js/theme.js
 * 说明: 所有页面都会加载此文件
 */

// ==================== 1. 主题切换 ====================

/**
 * 初始化主题
 * 优先读取 localStorage，否则跟随系统
 */
function initTheme() {
    const saved = localStorage.getItem('ppt_theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
}

/**
 * 切换主题
 */
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('ppt_theme', next);
}

/**
 * 获取当前主题
 * @returns {'light'|'dark'}
 */
function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

// 页面加载时立即初始化主题（防止闪烁）
initTheme();

// ==================== 2. Toast 通知 ====================

/**
 * 确保 Toast 容器存在
 */
function ensureToastContainer() {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    return container;
}

/**
 * 显示 Toast 通知
 * @param {string} message - 消息内容
 * @param {'success'|'error'|'warning'|'info'} type - 类型
 * @param {number} duration - 显示时长（毫秒），默认 3000
 */
function showToast(message, type = 'info', duration = 3000) {
    const container = ensureToastContainer();

    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${icons[type] || ''}</span><span>${message}</span>`;

    container.appendChild(toast);

    // 自动移除
    setTimeout(() => {
        toast.classList.add('hiding');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, duration);

    // 点击手动关闭
    toast.addEventListener('click', () => {
        toast.classList.add('hiding');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    });

    return toast;
}

// ==================== 3. 模态框工具 ====================

/**
 * 显示确认对话框
 * @param {string} title - 标题
 * @param {string} message - 内容
 * @param {string} confirmText - 确认按钮文字
 * @param {'primary'|'danger'} confirmType - 确认按钮样式
 * @returns {Promise<boolean>}
 */
function showConfirm(title, message, confirmText = '确认', confirmType = 'primary') {
    return new Promise((resolve) => {
        // 创建遮罩
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" data-action="close">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin:0; color: var(--text-secondary); line-height: 1.6;">${message}</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-action="cancel">取消</button>
                    <button class="btn btn-${confirmType}" data-action="confirm">${confirmText}</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        // 动画显示
        requestAnimationFrame(() => {
            overlay.classList.add('show');
        });

        // 关闭函数
        function close(result) {
            overlay.classList.remove('show');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
                resolve(result);
            }, 250);
        }

        // 事件绑定
        overlay.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'confirm') {
                close(true);
            } else if (action === 'cancel' || action === 'close') {
                close(false);
            } else if (e.target === overlay) {
                close(false);
            }
        });

        // ESC 关闭
        function onKeydown(e) {
            if (e.key === 'Escape') {
                document.removeEventListener('keydown', onKeydown);
                close(false);
            }
        }
        document.addEventListener('keydown', onKeydown);
    });
}

// ==================== 4. 导航栏通用逻辑 ====================

/**
 * 渲染导航栏（学生端通用）
 * @param {string} activePage - 当前激活页面标识: 'home' | 'lesson'
 */
function renderHeader(activePage = '') {
    const student = getStudentSession ? getStudentSession() : null;

    const header = document.querySelector('.header');
    if (!header) return;

    header.innerHTML = `
        <div class="header-inner">
            <div class="header-left">
                <a href="index.html" class="logo">
                    <div class="logo-icon"></div>
                    <span class="logo-text">PPT学习站</span>
                </a>
                <nav class="nav-links">
                    <a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">📚 课程首页</a>
                </nav>
            </div>
            <div class="header-right">
                ${student ? `
                    <div class="user-info">
                        <div class="user-avatar">${student.name ? student.name.charAt(0) : '?'}</div>
                        <span>${student.name || '同学'}</span>
                    </div>
                    <button class="btn btn-ghost btn-sm" onclick="handleLogout()" title="退出登录">退出</button>
                ` : `
                    <a href="login.html" class="btn btn-primary btn-sm">登录学习</a>
                `}
                <button class="theme-toggle" onclick="toggleTheme()" title="切换主题">
                    <span class="icon-sun">☀️</span>
                    <span class="icon-moon">🌙</span>
                </button>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
            </div>
        </div>

        <!-- 移动端导航菜单 -->
        <div class="mobile-nav" id="mobileNav">
            <a href="index.html" class="mobile-nav-link ${activePage === 'home' ? 'active' : ''}">📚 课程首页</a>
            ${student ? `
                <div style="padding: 14px var(--space-lg); color: var(--text-secondary); font-size: var(--text-sm);">
                    👤 ${student.name}（${student.student_id}）
                </div>
                <a href="javascript:handleLogout()" class="mobile-nav-link">🚪 退出登录</a>
            ` : `
                <a href="login.html" class="mobile-nav-link">🔑 登录学习</a>
            `}
        </div>
    `;
}

/**
 * 渲染管理员导航栏
 * @param {string} activePage - 'dashboard' | 'chapters' | 'students' | 'progress'
 */
function renderAdminHeader(activePage = '') {
    const header = document.querySelector('.header');
    if (!header) return;

    header.innerHTML = `
        <div class="header-inner">
            <div class="header-left">
                <a href="admin.html" class="logo">
                    <div class="logo-icon"></div>
                    <span class="logo-text">PPT学习站</span>
                </a>
                <nav class="nav-links">
                    <a href="admin.html" class="nav-link ${activePage === 'dashboard' ? 'active' : ''}">📊 仪表盘</a>
                    <a href="admin.html#chapters" class="nav-link ${activePage === 'chapters' ? 'active' : ''}">📖 章节管理</a>
                    <a href="admin.html#students" class="nav-link ${activePage === 'students' ? 'active' : ''}">👥 学生管理</a>
                    <a href="admin.html#progress" class="nav-link ${activePage === 'progress' ? 'active' : ''}">📈 进度查看</a>
                </nav>
            </div>
            <div class="header-right">
                <div class="user-info">
                    <div class="user-avatar">管</div>
                    <span>管理员</span>
                </div>
                <button class="btn btn-ghost btn-sm" onclick="handleAdminLogout()">退出</button>
                <button class="theme-toggle" onclick="toggleTheme()" title="切换主题">
                    <span class="icon-sun">☀️</span>
                    <span class="icon-moon">🌙</span>
                </button>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">☰</button>
            </div>
        </div>

        <div class="mobile-nav" id="mobileNav">
            <a href="admin.html" class="mobile-nav-link ${activePage === 'dashboard' ? 'active' : ''}">📊 仪表盘</a>
            <a href="admin.html#chapters" class="mobile-nav-link ${activePage === 'chapters' ? 'active' : ''}">📖 章节管理</a>
            <a href="admin.html#students" class="mobile-nav-link ${activePage === 'students' ? 'active' : ''}">👥 学生管理</a>
            <a href="admin.html#progress" class="mobile-nav-link ${activePage === 'progress' ? 'active' : ''}">📈 进度查看</a>
            <a href="javascript:handleAdminLogout()" class="mobile-nav-link">🚪 退出登录</a>
        </div>
    `;
}

/**
 * 切换移动端菜单
 */
function toggleMobileMenu() {
    const nav = document.getElementById('mobileNav');
    if (nav) {
        nav.classList.toggle('show');
    }
}

// ==================== 5. 登出处理 ====================

/**
 * 学生登出
 */
function handleLogout() {
    if (typeof clearStudentSession === 'function') {
        clearStudentSession();
    }
    showToast('已退出登录', 'info');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 500);
}

/**
 * 管理员登出
 */
function handleAdminLogout() {
    if (typeof clearAdminSession === 'function') {
        clearAdminSession();
    }
    showToast('已退出管理', 'info');
    setTimeout(() => {
        window.location.href = 'admin-login.html';
    }, 500);
}

// ==================== 6. 工具函数 ====================

/**
 * 格式化日期时间
 * @param {string} dateStr - ISO 日期字符串
 * @returns {string}
 */
function formatDateTime(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hour = String(d.getHours()).padStart(2, '0');
    const minute = String(d.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hour}:${minute}`;
}

/**
 * 格式化日期（不含时间）
 * @param {string} dateStr
 * @returns {string}
 */
function formatDate(dateStr) {
    if (!dateStr) return '-';
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * 防抖函数
 * @param {Function} fn
 * @param {number} delay
 * @returns {Function}
 */
function debounce(fn, delay = 300) {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

/**
 * 节流函数
 * @param {Function} fn
 * @param {number} interval
 * @returns {Function}
 */
function throttle(fn, interval = 200) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= interval) {
            last = now;
            fn.apply(this, args);
        }
    };
}

/**
 * 安全获取 URL 参数
 * @param {string} name - 参数名
 * @returns {string|null}
 */
function getUrlParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

/**
 * 解析学号信息
 * 格式: 124030601 → 24级 电商6班 01号
 * @param {string} sid
 * @returns {string}
 */
function parseStudentId(sid) {
    if (!sid || sid.length < 9) return sid || '';
    const year = sid.substring(0, 1) === '1' ? '20' + sid.substring(1, 3) : sid.substring(0, 2);
    const major = sid.substring(3, 5);
    const classNum = sid.substring(5, 7);
    const num = sid.substring(7, 9);

    const majorMap = {
        '03': '电商',
        '04': '跨境电商',
        '01': '计算机',
        '02': '会计'
    };

    const majorName = majorMap[major] || '专业' + major;
    return `${year}级${majorName}${parseInt(classNum)}班${parseInt(num)}号`;
}

/**
 * 检查页面是否滚动到底部（含一定阈值）
 * @param {number} threshold - 距底部多少像素算到底，默认 100
 * @returns {boolean}
 */
function isScrolledToBottom(threshold = 100) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    return (scrollTop + windowHeight) >= (docHeight - threshold);
}

/**
 * 模块颜色映射
 * @param {string} moduleName
 * @returns {string} CSS颜色变量名
 */
function getModuleColor(moduleName) {
    const map = {
        '初识WPS演示': 'var(--module-1)',
        '文字与排版': 'var(--module-2)',
        '图片与图形': 'var(--module-3)',
        '多媒体与表格': 'var(--module-4)',
        '母版与模板': 'var(--module-5)',
        '动画与切换': 'var(--module-6)',
        '放映与输出': 'var(--module-7)',
        'WPS特色功能': 'var(--module-8)',
        '综合实战': 'var(--module-9)'
    };
    return map[moduleName] || 'var(--primary)';
}

/**
 * 模块图标映射
 * @param {string} moduleName
 * @returns {string} emoji
 */
function getModuleIcon(moduleName) {
    const map = {
        '初识WPS演示': '🚀',
        '文字与排版': '✍️',
        '图片与图形': '🎨',
        '多媒体与表格': '📊',
        '母版与模板': '🎭',
        '动画与切换': '✨',
        '放映与输出': '🖥️',
        'WPS特色功能': '💡',
        '综合实战': '🏆'
    };
    return map[moduleName] || '📖';
}

/**
 * 转义 HTML（防 XSS）
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * 生成页脚 HTML
 * @returns {string}
 */
function getFooterHtml() {
    return `
        <footer class="footer">
            <p>PPT学习站 © ${new Date().getFullYear()} | 专为中职电商学子打造</p>
            <p style="margin-top: 4px;">
                <a href="admin-login.html" style="opacity: 0.5; font-size: 12px;">管理入口</a>
            </p>
        </footer>
    `;
}