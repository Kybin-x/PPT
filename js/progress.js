/* =============================================
   学习进度模块
   ============================================= */
const Progress = {

    /* 获取所有已开放的章节 */
    async getChapters() {
        const { data, error } = await db
            .from('chapters')
            .select('*')
            .order('sort_order');
        if (error) throw error;
        return data || [];
    },

    /* 获取学生进度 */
    async getStudentProgress(studentId) {
        const { data, error } = await db.rpc('get_student_progress', {
            p_student_id: studentId
        });
        if (error) throw error;
        return data || [];
    },

    /* 更新进度 */
    async update(studentId, chapterId, opts = {}) {
        const params = {
            p_student_id: studentId,
            p_chapter_id: chapterId,
            p_is_read: opts.isRead || null,
            p_quiz_score: opts.quizScore != null ? opts.quizScore : null,
            p_quiz_total: opts.quizTotal != null ? opts.quizTotal : null
        };
        const { data, error } = await db.rpc('update_progress', params);
        if (error) throw error;
        return data;
    },

    /* 判断章节是否可访问 */
    isAccessible(chapterId, chapters, progressList) {
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter || !chapter.is_open) return { accessible: false, reason: 'closed' };

        if (chapter.sort_order === 1) return { accessible: true };

        const prevChapter = chapters.find(c => c.sort_order === chapter.sort_order - 1);
        if (!prevChapter) return { accessible: true };

        const prevProgress = progressList.find(p => p.chapter_id === prevChapter.id);
        if (!prevProgress || !prevProgress.is_completed) {
            return { accessible: false, reason: 'locked' };
        }
        return { accessible: true };
    },

    /* 获取章节状态 */
    getStatus(chapterId, chapters, progressList) {
        const chapter = chapters.find(c => c.id === chapterId);
        if (!chapter) return 'unknown';
        if (!chapter.is_open) return 'closed';

        const progress = progressList.find(p => p.chapter_id === chapterId);
        if (progress && progress.is_completed) return 'completed';

        const access = this.isAccessible(chapterId, chapters, progressList);
        if (!access.accessible) return access.reason;

        if (progress && (progress.is_read || progress.quiz_score > 0)) return 'in-progress';
        return 'available';
    }
};