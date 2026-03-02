/* =============================================
   课程内容加载器
   ============================================= */
document.addEventListener('DOMContentLoaded', async () => {
    const student = Auth.requireLogin();
    if (!student) return;
    Auth.updateNav();

    const chapterId = parseInt(new URLSearchParams(location.search).get('id'));
    if (!chapterId) { location.href = 'index.html'; return; }

    showLoading('lesson-content');
    showLoading('sidebar-chapters');

    try {
        const [chapters, progress] = await Promise.all([
            Progress.getChapters(),
            Progress.getStudentProgress(student.student_id)
        ]);

        // Check access
        const access = Progress.isAccessible(chapterId, chapters, progress);
        if (!access.accessible) {
            document.getElementById('lesson-content').innerHTML = `
        <div class="page-loading">
          <p>🔒 ${access.reason === 'closed' ? '该章节未开放' : '请先完成上一章节'}</p>
          <a href="index.html" class="btn btn-primary mt-16">返回首页</a>
        </div>`;
            return;
        }

        // Render sidebar
        renderSidebar(chapters, progress, chapterId);

        // Load lesson content
        loadLessonContent(chapterId, chapters, progress, student);

    } catch (e) {
        document.getElementById('lesson-content').innerHTML = `
      <div class="page-loading"><p>❌ ${e.message}</p>
      <a href="index.html" class="btn btn-primary mt-16">返回首页</a></div>`;
    }
});

function renderSidebar(chapters, progress, currentId) {
    const container = document.getElementById('sidebar-chapters');
    let html = '';

    chapters.forEach(ch => {
        const status = Progress.getStatus(ch.id, chapters, progress);
        let icon, cls;
        switch (status) {
            case 'completed': icon = '✅'; cls = 'done'; break;
            case 'in-progress': case 'available': icon = '📖'; cls = ''; break;
            default: icon = '🔒'; cls = 'locked';
        }
        if (ch.id === currentId) cls = 'active';

        const clickable = status !== 'closed' && status !== 'locked';
        html += `
      <div class="sidebar-item ${cls}"
        ${clickable ? `onclick="location.href='lesson.html?id=${ch.id}'"` : ''}>
        <span class="sidebar-item-num">${icon}</span>
        <span>${ch.id}. ${ch.title}</span>
      </div>`;
    });

    container.innerHTML = html;
}

function loadLessonContent(chapterId, chapters, progress, student) {
    const script = document.createElement('script');
    script.src = `js/lessons/lesson${String(chapterId).padStart(2, '0')}.js`;
    script.onload = () => {
        const lesson = window.LESSONS && window.LESSONS[chapterId];
        if (lesson) {
            renderLesson(lesson, chapters, progress, student);
        } else {
            document.getElementById('lesson-content').innerHTML = `
        <div class="page-loading"><p>📝 课程内容正在建设中，敬请期待！</p>
        <a href="index.html" class="btn btn-primary mt-16">返回首页</a></div>`;
        }
    };
    script.onerror = () => {
        document.getElementById('lesson-content').innerHTML = `
      <div class="page-loading"><p>📝 课程内容正在建设中，敬请期待！</p>
      <a href="index.html" class="btn btn-primary mt-16">返回首页</a></div>`;
    };
    document.head.appendChild(script);
}

function renderLesson(lesson, chapters, progress, student) {
    const container = document.getElementById('lesson-content');
    const myProgress = progress.find(p => p.chapter_id === lesson.id);
    const isRead = myProgress && myProgress.is_read;

    let html = `
    <div class="lesson-breadcrumb">
      <a href="index.html">首页</a> / ${lesson.module} / 第${lesson.id}课
    </div>
    <h1 class="lesson-title">${lesson.title}</h1>`;

    // Scenario
    if (lesson.scenario) {
        html += `
      <div class="scenario-box">
        <h3>${lesson.scenario.icon || '📦'} ${lesson.scenario.title}</h3>
        <p>${lesson.scenario.desc}</p>
      </div>`;
    }

    // Content sections
    if (lesson.sections) {
        lesson.sections.forEach(sec => {
            html += `
        <div class="lesson-section">
          <h3>${sec.title}</h3>
          ${sec.html}
        </div>`;
        });
    }

    // Tips
    if (lesson.tips && lesson.tips.length > 0) {
        html += `
      <div class="tips-box">
        <h3>💡 小贴士</h3>
        <ul>${lesson.tips.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>`;
    }

    // Practice
    if (lesson.practice) {
        html += `
      <div class="practice-box">
        <h3>🎯 ${lesson.practice.title || '实战任务'}</h3>
        <p>${lesson.practice.desc}</p>
      </div>`;
    }

    // Read marker
    html += `
    <div class="read-section ${isRead ? 'completed' : ''}" id="read-section">
      ${isRead
            ? '<p>✅ 你已完成本节阅读</p>'
            : `<p>📖 阅读完以上内容后，请点击下方按钮确认</p>
           <button class="btn btn-success" id="read-btn" onclick="markAsRead()">
             ✅ 我已阅读完本节内容
           </button>`
        }
    </div>`;

    // Quiz
    html += `
    <div class="quiz-section">
      <h2>📝 课后练习</h2>
      <div id="quiz-container"></div>
    </div>`;

    // Navigation
    const currentSort = chapters.find(c => c.id === lesson.id)?.sort_order || 0;
    const prevChapter = chapters.find(c => c.sort_order === currentSort - 1 && c.is_open);
    const nextChapter = chapters.find(c => c.sort_order === currentSort + 1 && c.is_open);

    const nextAccessible = nextChapter
        ? Progress.isAccessible(nextChapter.id, chapters, progress).accessible
        : false;

    html += `
    <div class="lesson-nav">
      ${prevChapter
            ? `<a href="lesson.html?id=${prevChapter.id}" class="btn btn-secondary">← ${prevChapter.title}</a>`
            : '<span></span>'}
      ${nextChapter
            ? `<a href="lesson.html?id=${nextChapter.id}"
             class="btn btn-primary ${nextAccessible ? '' : 'hidden'}"
             id="next-chapter-btn">
             ${nextChapter.title} →</a>`
            : '<a href="index.html" class="btn btn-primary">返回首页 🏠</a>'}
    </div>`;

    container.innerHTML = html;

    // Render quiz
    if (lesson.quiz && lesson.quiz.length > 0) {
        Quiz.render('quiz-container', lesson.quiz);
    }

    // Setup scroll tracking
    setupScrollTracking();
}

/* 标记已阅读 */
async function markAsRead() {
    const student = Auth.getStudent();
    const chapterId = parseInt(new URLSearchParams(location.search).get('id'));
    const btn = document.getElementById('read-btn');
    if (!student || !chapterId || !btn) return;

    btn.disabled = true;
    btn.textContent = '保存中...';

    try {
        await Progress.update(student.student_id, chapterId, { isRead: true });
        const section = document.getElementById('read-section');
        section.classList.add('completed');
        section.innerHTML = '<p>✅ 你已完成本节阅读</p>';
        showToast('阅读进度已保存', 'success');

        // Check if chapter is now completed
        setTimeout(() => checkCompletion(), 500);
    } catch (e) {
        btn.disabled = false;
        btn.textContent = '✅ 我已阅读完本节内容';
        showToast('保存失败: ' + e.message, 'error');
    }
}

/* 滚动追踪（可选：滚到底部才启用阅读按钮） */
function setupScrollTracking() {
    const readBtn = document.getElementById('read-btn');
    if (!readBtn) return;

    // 简化处理：直接启用按钮
    // 如果想要滚动到底部才启用，可以取消以下注释
    /*
    readBtn.disabled = true;
    readBtn.style.opacity = '0.5';
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        readBtn.disabled = false;
        readBtn.style.opacity = '1';
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(document.getElementById('read-section'));
    */
}

/* 移动端侧边栏切换 */
function toggleSidebar() {
    const sidebar = document.querySelector('.lesson-sidebar');
    sidebar.classList.toggle('open');
}