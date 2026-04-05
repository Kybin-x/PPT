/**
 * PPT学习站 - Supabase 配置与数据库交互
 * 文件路径: js/supabase-config.js
 */

const SUPABASE_URL = 'https://owrqlzzvkhmeggygefab.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gt9pgzAFcgHpNKs1UewINg_VLvVu7li';

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

// ==================== 全局设置相关 ====================
async function checkRegistrationOpen() {
    try {
        const client = initSupabase();
        const { data, error } = await client.from('settings').select('value').eq('key', 'registration_open').single();
        if (error) return true; // 如果表不存在或报错，默认开放
        return data.value === 'true';
    } catch (e) {
        return true;
    }
}

async function adminToggleRegistration(username, password, isOpen) {
    const client = initSupabase();
    const { error } = await client.from('settings').upsert(
        { key: 'registration_open', value: isOpen ? 'true' : 'false' },
        { onConflict: 'key' }
    );
    if (error) throw error;
}

// ==================== 学生相关 ====================
async function checkStudent(studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('check_student', { p_student_id: studentId });
    if (error) return { exists: false };
    return data;
}

async function studentLogin(studentId, name, className = '') {
    const client = initSupabase();
    const { data, error } = await client.rpc('student_login', {
        p_student_id: studentId, p_name: name, p_class_name: className
    });
    if (error) return { success: false, error: '网络错误，请重试' };
    return data;
}

async function getStudentProgress(studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('get_student_progress', { p_student_id: studentId });
    if (error) return [];
    return data || [];
}

async function updateProgress(studentId, chapterId, params = {}) {
    const client = initSupabase();
    const { data, error } = await client.rpc('update_progress', {
        p_student_id: studentId, p_chapter_id: chapterId,
        p_is_read: params.is_read || null, p_quiz_score: params.quiz_score || null, p_quiz_total: params.quiz_total || null
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

// ==================== 章节相关 ====================
async function getOpenChapters() {
    const client = initSupabase();
    const { data, error } = await client.from('chapters').select('*').order('sort_order', { ascending: true });
    if (error) return [];
    return data || [];
}

// ==================== 管理员相关 ====================
async function adminLogin(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_login', { p_username: username, p_password: password });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminGetChapters(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_get_chapters', { p_username: username, p_password: password });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminToggleChapter(username, password, chapterId, isOpen) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_toggle_chapter', {
        p_username: username, p_password: password, p_chapter_id: chapterId, p_is_open: isOpen
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminBatchToggleChapters(username, password, chapterIds, isOpen) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_batch_toggle_chapters', {
        p_username: username, p_password: password, p_chapter_ids: chapterIds, p_is_open: isOpen
    });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminGetStudents(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_get_students', { p_username: username, p_password: password });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminGetAllProgress(username, password) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_get_all_progress', { p_username: username, p_password: password });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminResetProgress(username, password, studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_reset_progress', { p_username: username, p_password: password, p_student_id: studentId });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminDeleteStudent(username, password, studentId) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_delete_student', { p_username: username, p_password: password, p_student_id: studentId });
    if (error) return { success: false, error: '网络错误' };
    return data;
}

async function adminImportStudents(username, password, students) {
    const client = initSupabase();
    const { data, error } = await client.rpc('admin_import_students', { p_username: username, p_password: password, p_students: students });
    if (error) return { success: false, error: error.message || '网络错误' };
    return data;
}

// ==================== 本地会话管理 ====================

/**
 * 保存学生登录信息到 localStorage
 * 修改点：保存学生会话时强制清除管理员缓存，实现权限隔离
 */
function saveStudentSession(student) {
    localStorage.removeItem('ppt_admin'); // 核心：清理管理员痕迹
    localStorage.setItem('ppt_student', JSON.stringify(student));
}

/**
 * 获取当前登录的学生信息
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
 * 保存管理员登录信息到 localStorage
 * 修改点：保存管理员会话时清理学生缓存，确保管理员以纯净权限进行预览
 */
function saveAdminSession(username, password) {
    localStorage.removeItem('ppt_student'); // 核心：清理学生标识
    localStorage.setItem('ppt_admin', JSON.stringify({ username, password }));
}

/**
 * 获取管理员会话
 */
function getAdminSession() {
    const data = localStorage.getItem('ppt_admin');
    return data ? JSON.parse(data) : null;
}

/**
 * 清除管理员会话
 */
function clearAdminSession() {
    localStorage.removeItem('ppt_admin');
}