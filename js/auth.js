/* =============================================
   学生认证模块
   ============================================= */
const Auth = {
    getStudent() {
        const d = localStorage.getItem('student');
        return d ? JSON.parse(d) : null;
    },

    setStudent(s) {
        localStorage.setItem('student', JSON.stringify(s));
    },

    logout() {
        localStorage.removeItem('student');
        window.location.href = 'login.html';
    },

    requireLogin() {
        const s = this.getStudent();
        if (!s) { window.location.href = 'login.html'; return null; }
        return s;
    },

    async login(studentId, name) {
        const { data, error } = await db.rpc('student_login', {
            p_student_id: studentId, p_name: name
        });
        if (error) throw new Error(error.message || '网络错误');
        if (!data.success) throw new Error(data.error);
        this.setStudent(data.student);
        return data;
    },

    async checkStudent(studentId) {
        const { data, error } = await db.rpc('check_student', {
            p_student_id: studentId
        });
        if (error) throw new Error(error.message);
        return data;
    },

    updateNav() {
        const s = this.getStudent();
        const el = document.getElementById('user-info');
        if (!el) return;
        if (s) {
            el.innerHTML = `
        <span class="user-name">👤 ${s.name}</span>
        <button class="btn-text" onclick="Auth.logout()">退出</button>`;
        } else {
            el.innerHTML = '<a href="login.html" class="btn-text">请登录</a>';
        }
    }
};