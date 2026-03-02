/* =============================================
   管理员模块
   ============================================= */
const Admin = {
    creds: null,

    getCreds() {
        if (this.creds) return this.creds;
        const d = sessionStorage.getItem('admin');
        this.creds = d ? JSON.parse(d) : null;
        return this.creds;
    },

    requireAdmin() {
        if (!this.getCreds()) { location.href = 'admin-login.html'; return false; }
        return true;
    },

    async login(username, password) {
        const { data, error } = await db.rpc('admin_login', {
            p_username: username, p_password: password
        });
        if (error) throw new Error(error.message);
        if (!data.success) throw new Error(data.error);
        this.creds = { username, password };
        sessionStorage.setItem('admin', JSON.stringify(this.creds));
        return data;
    },

    logout() {
        sessionStorage.removeItem('admin');
        this.creds = null;
        location.href = 'admin-login.html';
    },

    async rpc(fnName, params = {}) {
        const c = this.getCreds();
        const { data, error } = await db.rpc(fnName, {
            p_username: c.username, p_password: c.password, ...params
        });
        if (error) throw new Error(error.message);
        if (data && !data.success) throw new Error(data.error);
        return data;
    }
};

/* =============================================
   管理页面初始化
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
    if (!Admin.requireAdmin()) return;

    // Nav
    const adminEl = document.getElementById('admin-user');
    if (adminEl) adminEl.textContent = `🔧 ${Admin.getCreds().username}`;

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Load data
    loadChapters();
    loadStudents();
    loadProgress();
});

/* ---------- 章节管理 ---------- */
async function loadChapters() {
    const container = document.getElementById('chapters-table');
    try {
        const data = await Admin.rpc('admin_get_chapters');
        const chapters = data.chapters;

        // Stats
        const open = chapters.filter(c => c.is_open).length;
        document.getElementById('stat-open').textContent = `${open}/${chapters.length}`;

        let html = `
      <table class="data-table">
        <thead><tr>
          <th>ID</th><th>章节名称</th><th>所属模块</th><th>状态</th><th>操作</th>
        </tr></thead><tbody>`;

        chapters.forEach(ch => {
            html += `
        <tr>
          <td>${ch.id}</td>
          <td>${ch.title}</td>
          <td>${ch.module}</td>
          <td>
            <label class="toggle">
              <input type="checkbox" ${ch.is_open ? 'checked' : ''}
                onchange="toggleChapter(${ch.id}, this.checked)">
              <span class="toggle-slider"></span>
            </label>
          </td>
          <td>
            <span class="badge ${ch.is_open ? 'badge-success' : 'badge-gray'}">
              ${ch.is_open ? '已开放' : '未开放'}
            </span>
          </td>
        </tr>`;
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    } catch (e) {
        container.innerHTML = `<p>加载失败: ${e.message}</p>`;
    }
}

async function toggleChapter(id, isOpen) {
    try {
        await Admin.rpc('admin_toggle_chapter', { p_chapter_id: id, p_is_open: isOpen });
        showToast(`第${id}课 已${isOpen ? '开放' : '关闭'}`, 'success');
        loadChapters();
    } catch (e) {
        showToast(e.message, 'error');
        loadChapters();
    }
}

async function batchToggle(isOpen) {
    try {
        const ids = Array.from({ length: 26 }, (_, i) => i + 1);
        await Admin.rpc('admin_batch_toggle_chapters', {
            p_chapter_ids: ids, p_is_open: isOpen
        });
        showToast(isOpen ? '已全部开放' : '已全部关闭', 'success');
        loadChapters();
    } catch (e) {
        showToast(e.message, 'error');
    }
}

async function openUpTo() {
    const n = parseInt(prompt('开放到第几课？(1-26)'));
    if (!n || n < 1 || n > 26) return;
    try {
        const openIds = Array.from({ length: n }, (_, i) => i + 1);
        const closeIds = Array.from({ length: 26 - n }, (_, i) => i + n + 1);
        await Admin.rpc('admin_batch_toggle_chapters', { p_chapter_ids: openIds, p_is_open: true });
        if (closeIds.length > 0) {
            await Admin.rpc('admin_batch_toggle_chapters', { p_chapter_ids: closeIds, p_is_open: false });
        }
        showToast(`已开放前 ${n} 课`, 'success');
        loadChapters();
    } catch (e) {
        showToast(e.message, 'error');
    }
}

/* ---------- 学生管理 ---------- */
async function loadStudents() {
    const container = document.getElementById('students-table');
    try {
        const data = await Admin.rpc('admin_get_students');
        const students = data.students;

        document.getElementById('stat-students').textContent = students.length;

        if (students.length === 0) {
            container.innerHTML = '<p style="color:var(--text-light)">暂无学生</p>';
            return;
        }

        let html = `
      <table class="data-table">
        <thead><tr>
          <th>学号</th><th>姓名</th><th>注册时间</th><th>操作</th>
        </tr></thead><tbody>`;

        students.forEach(s => {
            const date = new Date(s.created_at).toLocaleDateString('zh-CN');
            html += `
        <tr>
          <td>${s.student_id}</td>
          <td>${s.name}</td>
          <td>${date}</td>
          <td>
            <button class="btn btn-secondary btn-xs" onclick="resetStudent('${s.student_id}','${s.name}')">重置进度</button>
            <button class="btn btn-danger btn-xs" onclick="deleteStudent('${s.student_id}','${s.name}')">删除</button>
          </td>
        </tr>`;
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    } catch (e) {
        container.innerHTML = `<p>加载失败: ${e.message}</p>`;
    }
}

async function resetStudent(studentId, name) {
    if (!confirm(`确定重置 ${name}(${studentId}) 的所有学习进度吗？`)) return;
    try {
        await Admin.rpc('admin_reset_progress', { p_student_id: studentId });
        showToast(`已重置 ${name} 的进度`, 'success');
        loadStudents();
        loadProgress();
    } catch (e) { showToast(e.message, 'error'); }
}

async function deleteStudent(studentId, name) {
    if (!confirm(`确定删除学生 ${name}(${studentId}) 及其所有数据吗？此操作不可恢复！`)) return;
    try {
        await Admin.rpc('admin_delete_student', { p_student_id: studentId });
        showToast(`已删除 ${name}`, 'success');
        loadStudents();
        loadProgress();
    } catch (e) { showToast(e.message, 'error'); }
}

function filterStudents() {
    const keyword = document.getElementById('student-search').value.toLowerCase();
    const rows = document.querySelectorAll('#students-table tbody tr');
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(keyword) ? '' : 'none';
    });
}

/* ---------- 学习进度 ---------- */
async function loadProgress() {
    const container = document.getElementById('progress-table');
    try {
        const data = await Admin.rpc('admin_get_all_progress');
        const list = data.data;

        if (list.length === 0) {
            container.innerHTML = '<p style="color:var(--text-light)">暂无数据</p>';
            return;
        }

        // Calculate overall stats
        let totalCompleted = 0, totalPossible = 0;
        list.forEach(s => {
            totalCompleted += s.completed_chapters;
            totalPossible += parseInt(s.total_chapters);
        });
        const avgPct = totalPossible > 0 ? Math.round(totalCompleted / totalPossible * 100) : 0;
        document.getElementById('stat-avg').textContent = avgPct + '%';

        let html = `
      <table class="data-table">
        <thead><tr>
          <th>学号</th><th>姓名</th><th>完成进度</th><th>完成率</th><th>详情</th>
        </tr></thead><tbody>`;

        list.forEach(s => {
            const pct = s.total_chapters > 0
                ? Math.round(s.completed_chapters / s.total_chapters * 100) : 0;
            html += `
        <tr>
          <td>${s.student_id}</td>
          <td>${s.name}</td>
          <td>
            <div class="d-flex items-center gap-8">
              <div class="progress-bar" style="width:120px">
                <div class="progress-fill" style="width:${pct}%"></div>
              </div>
              <span style="font-size:0.85rem">${s.completed_chapters}/${s.total_chapters}</span>
            </div>
          </td>
          <td><span class="badge ${pct >= 80 ? 'badge-success' : pct >= 40 ? 'badge-warning' : 'badge-gray'}">${pct}%</span></td>
          <td><button class="btn-text" onclick="showStudentDetail('${s.student_id}')">查看</button></td>
        </tr>`;
        });

        html += '</tbody></table>';
        container.innerHTML = html;

        // Store for detail view
        window._progressData = list;
    } catch (e) {
        container.innerHTML = `<p>加载失败: ${e.message}</p>`;
    }
}

function showStudentDetail(studentId) {
    const student = window._progressData?.find(s => s.student_id === studentId);
    if (!student) return;

    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-content');

    let html = `<h3>${student.name} (${student.student_id}) 的学习详情</h3>
    <table class="data-table mt-16">
      <thead><tr><th>章节</th><th>阅读</th><th>测验</th><th>状态</th></tr></thead><tbody>`;

    student.progress.forEach(p => {
        html += `
      <tr>
        <td>${p.chapter_title}</td>
        <td>${p.is_read ? '✅' : '❌'}</td>
        <td>${p.quiz_total > 0 ? `${p.quiz_score}/${p.quiz_total}` : '-'}</td>
        <td>${p.is_completed ? '<span class="badge badge-success">已完成</span>' : '<span class="badge badge-gray">未完成</span>'}</td>
      </tr>`;
    });

    html += '</tbody></table>';
    content.innerHTML = html;
    modal.classList.add('show');
}

function closeModal() {
    document.getElementById('detail-modal').classList.remove('show');
}

/* ---------- 批量导入 ---------- */
async function importStudents() {
    const input = document.getElementById('import-data').value.trim();
    if (!input) { showToast('请输入学生数据', 'warning'); return; }

    let students;
    try {
        // Try JSON first
        students = JSON.parse(input);
    } catch {
        // Try CSV
        try {
            students = input.split('\n').filter(l => l.trim()).map(line => {
                const parts = line.split(/[,，\t]+/).map(s => s.trim());
                if (parts.length < 2) throw new Error('格式错误');
                return { student_id: parts[0], name: parts[1] };
            });
        } catch {
            showToast('数据格式错误，请检查', 'error');
            return;
        }
    }

    if (!Array.isArray(students) || students.length === 0) {
        showToast('未检测到有效数据', 'warning');
        return;
    }

    try {
        const data = await Admin.rpc('admin_import_students', {
            p_students: JSON.stringify(students)
        });
        showToast(`导入成功！新增 ${data.imported} 人，跳过 ${data.skipped} 人`, 'success');
        document.getElementById('import-data').value = '';
        loadStudents();
    } catch (e) {
        showToast('导入失败: ' + e.message, 'error');
    }
}