/* =============================================
   首页逻辑
   ============================================= */
document.addEventListener('DOMContentLoaded', async () => {
    const student = Auth.requireLogin();
    if (!student) return;
    Auth.updateNav();

    const container = document.getElementById('content-area');
    showLoading(container);

    try {
        const [chapters, progress] = await Promise.all([
            Progress.getChapters(),
            Progress.getStudentProgress(student.student_id)
        ]);

        renderHome(student, chapters, progress);
    } catch (e) {
        container.innerHTML = `<div class="page-loading"><p>❌ 加载失败: ${e.message}</p>
      <button class="btn btn-primary mt-16" onclick="location.reload()">重试</button></div>`;
    }
});

function renderHome(student, chapters, progress) {
    const container = document.getElementById('content-area');
    const openChapters = chapters.filter(c => c.is_open);
    const completed = progress.filter(p => p.is_completed).length;
    const total = openChapters.length;
    const pct = total > 0 ? Math.round(completed / total * 100) : 0;

    // Group by module
    const modules = {};
    const moduleIcons = {
        '初识WPS演示': '🚀', '文字与排版': '✏️', '图片与图形': '🖼️',
        '多媒体与表格': '🎬', '母版与模板': '🎨', '动画与切换': '✨',
        '放映与输出': '📽️', 'WPS特色功能': '💡', '综合实战': '🏆'
    };

    chapters.forEach(c => {
        if (!modules[c.module]) modules[c.module] = [];
        modules[c.module].push(c);
    });

    let html = `
    <div class="welcome-banner">
      <h2>👋 欢迎回来，${student.name}！</h2>
      <p>继续你的WPS演示文稿学习之旅吧，每天进步一点点 💪</p>
      <div class="welcome-progress">
        <div class="welcome-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="welcome-stats">
        <span>📖 已完成 ${completed}/${total} 节课</span>
        <span>📊 完成率 ${pct}%</span>
      </div>
    </div>`;

    Object.entries(modules).forEach(([moduleName, moduleChapters]) => {
        const icon = moduleIcons[moduleName] || '📘';
        html += `
      <div class="module-section">
        <div class="module-header">
          <div class="module-icon">${icon}</div>
          <h2>${moduleName}</h2>
        </div>
        <div class="chapter-list">`;

        moduleChapters.forEach(ch => {
            const status = Progress.getStatus(ch.id, chapters, progress);
            const p = progress.find(x => x.chapter_id === ch.id);

            let statusIcon, statusClass, actionText, clickable;
            switch (status) {
                case 'completed':
                    statusIcon = '✅'; statusClass = 'completed done';
                    actionText = '<span class="badge badge-success">已完成</span>'; clickable = true;
                    break;
                case 'in-progress':
                    statusIcon = '📖'; statusClass = 'current active';
                    actionText = '<span class="badge badge-warning">学习中</span>'; clickable = true;
                    break;
                case 'available':
                    statusIcon = '📗'; statusClass = 'active';
                    actionText = '<button class="btn btn-primary btn-xs">去学习</button>'; clickable = true;
                    break;
                case 'locked':
                    statusIcon = '🔒'; statusClass = 'locked lock';
                    actionText = '<span class="badge badge-gray">未解锁</span>'; clickable = false;
                    break;
                case 'closed':
                default:
                    statusIcon = '🚫'; statusClass = 'locked lock';
                    actionText = '<span class="badge badge-gray">未开放</span>'; clickable = false;
            }

            const scoreInfo = p && p.quiz_total > 0
                ? `<span style="font-size:0.8rem;color:var(--text-lighter)">测验 ${p.quiz_score}/${p.quiz_total}</span>` : '';

            html += `
        <div class="chapter-item ${statusClass}" ${clickable ? `onclick="location.href='lesson.html?id=${ch.id}'"` : ''}>
          <div class="chapter-status ${statusClass.split(' ')[1] || ''}">${statusIcon}</div>
          <div class="chapter-info">
            <div class="chapter-title">${ch.id}. ${ch.title}</div>
            <div class="chapter-desc">${scoreInfo}</div>
          </div>
          <div class="chapter-action">${actionText}</div>
        </div>`;
        });

        html += '</div></div>';
    });

    html += `
    <div class="admin-entry">
      <a href="admin-login.html">🔧 管理员入口</a>
    </div>`;

    container.innerHTML = html;
}