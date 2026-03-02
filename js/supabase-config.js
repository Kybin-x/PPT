/**
 * PPT学习站 - Supabase 配置与数据库交互
 * 文件路径: js/supabase-config.js
 * 说明: 所有与 Supabase 的交互都通过此文件
 * 更新: 增加班级(class_name)字段支持
 */

const SUPABASE_URL = 'https://owrqlzzvkhmeggygefab.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gt9pgzAFcgHpNKs1UewINg_VLvVu7li';

// 初始化 Supabase 客户端
let db = null;

function initSupabase() {
    if (db) return db;
    if (typeof window.supabase === 'undefined') {
        console.error('Supabase SDK 未加载，请检查 CDN 引入');
        return null;
    }
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return db;
}

// ==================== 学生相关 ====================

/**
 * 检查学生是否存在
 * @param {string} studentId - 学号
 * @returns {Promise<{exists: boolean, name?: string, student_id?: string, class_name?: string}>}
 */
async function checkStudent(studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('check_student', {
        p_student_id: studentId
    });
    if (error) {
        console.error('检查学生失败:', error);
        return { exists: false };
    }
    return data;
}

/**
 * 学生登录 / 自动注册
 * @param {string} studentId - 学号
 * @param {string} name - 姓名
 * @param {string} className - 班级
 * @returns {Promise<{success: boolean, is_new?: boolean, student?: object, error?: string}>}
 */
async function studentLogin(studentId, name, className = '') {
    const client = initSupabase();
    const { data, error } = await client.rpc('student_login', {
        p_student_id: studentId,
        p_name: name,
        p_class_name: className
    });
    if (error) {
        console.error('登录失败:', error);
        return { success: false, error: '网络错误，请重试' };
    }
    return data;
}

/**
 * 获取学生学习进度
 * @param {string} studentId - 学号
 * @returns {Promise<Array>}
 */
async function getStudentProgress(studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('get_student_progress', {
        p_student_id: studentId
    });
    if (error) {
        console.error('获取进度失败:', error);
        return [];
    }
    return data || [];
}

/**
 * 更新学习进度
 * @param {string} studentId - 学号
 * @param {number} chapterId - 章节ID
 * @param {object} params - { is_read, quiz_score, quiz_total }
 * @returns {Promise<{success: boolean}>}
 */
async function updateProgress(studentId, chapterId, params = {}) {
    const client = initSupabase();
    const { data, error } = await client.rpc('update_progress', {
        p_student_id: studentId,
        p_chapter_id: chapterId,
        p_is_read: params.is_read || null,
        p_quiz_score: params.quiz_score || null,
        p_quiz_total: params.quiz_total || null
    });
    if (error) {
        console.error('更新进度失败:', error);
        return { success: false, error: '网络错误' };
    }
    return data;
}

// ==================== 章节相关 ====================

/**
 * 获取所有已开放的章节
 * @returns {Promise<Array>}
 */
async function getOpenChapters() {
    const client = initSupabase();
    const { data, error } = await client
        .from('chapters')
        .select('*')
        .order('sort_order', { ascending: true });
    if (error) {
        console.error('获取章节失败:', error);
        return [];
    }
    return data || [];
}

// ==================== 管理员相关 ====================

/**
 * 管理员登录
 * @param {string} username
 * @param {string} password
 * @returns {Promise<{success: boolean, username?: string, error?: string}>}
 */
async function adminLogin(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_login', {
        p_username: username,
        p_password: password
    });
    if (error) {
        console.error('管理员登录失败:', error);
        return { success: false, error: '网络错误' };
    }
    return data;
}

/**
 * 管理员：获取所有章节
 */
async function adminGetChapters(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_get_chapters', {
        p_username: username,
        p_password: password
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：切换章节开放状态
 */
async function adminToggleChapter(username, password, chapterId, isOpen) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_toggle_chapter', {
        p_username: username,
        p_password: password,
        p_chapter_id: chapterId,
        p_is_open: isOpen
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：批量切换章节
 */
async function adminBatchToggleChapters(username, password, chapterIds, isOpen) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_batch_toggle_chapters', {
        p_username: username,
        p_password: password,
        p_chapter_ids: chapterIds,
        p_is_open: isOpen
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：获取全部学生
 */
async function adminGetStudents(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_get_students', {
        p_username: username,
        p_password: password
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：获取全班进度概览
 */
async function adminGetAllProgress(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_get_all_progress', {
        p_username: username,
        p_password: password
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：重置学生进度
 */
async function adminResetProgress(username, password, studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_reset_progress', {
        p_username: username,
        p_password: password,
        p_student_id: studentId
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：删除学生
 */
async function adminDeleteStudent(username, password, studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_delete_student', {
        p_username: username,
        p_password: password,
        p_student_id: studentId
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

/**
 * 管理员：批量导入学生
 * @param {Array<{student_id: string, name: string, class_name: string}>} students
 */
async function adminImportStudents(username, password, students) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_import_students', {
        p_username: username,
        p_password: password,
        p_students: students    // 直接传数组，不要 JSON.stringify
    });
    if (error) {
        console.error('批量导入失败:', error);
        return { success: false, error: error.message || '网络错误' };
    }
    return data;
}

// ==================== 本地会话管理 ====================

/**
 * 保存学生登录信息到 localStorage
 */
function saveStudentSession(student) {
    localStorage.setItem('ppt_student', JSON.stringify(student));
}

/**
 * 获取当前登录的学生信息
 * @returns {object|null} { id, student_id, name, class_name }
 */
function getStudentSession() {
    const data = localStorage.getItem('ppt_student');
    return data ? JSON.parse(data) : null;
}

/**
 * 清除学生登录信息
 */
function clearStudentSession() {
    localStorage.removeItem('ppt_student');
}

/**
 * 保存管理员登录信息到 sessionStorage
 */
function saveAdminSession(username, password) {
    sessionStorage.setItem('ppt_admin', JSON.stringify({ username, password }));
}

/**
 * 获取管理员会话
 * @returns {{username: string, password: string}|null}
 */
function getAdminSession() {
    const data = sessionStorage.getItem('ppt_admin');
    return data ? JSON.parse(data) : null;
}

/**
 * 清除管理员会话
 */
function clearAdminSession() {
    sessionStorage.removeItem('ppt_admin');
}