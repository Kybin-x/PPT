/**
 * PPT学习站 - 第20课：排练计时与演讲技巧
 * 模块：放映与输出
 */
window.lessonData = {
    scenario: '下周你要参加公司的"电商运营成果汇报"，限时15分钟。你的PPT有20页，但不知道每页该讲多久，怎么控制时间不超时？今天我们学习排练计时功能，以及让演讲更专业的技巧！',
    knowledge: `
        <h3>一、排练计时——让时间不失控</h3>
        <p><strong>排练计时</strong>功能可以在你预演PPT时，自动记录每张幻灯片停留的时间，帮你了解每页需要多久。</p>
        <h4>如何使用排练计时</h4>
        <ol>
            <li>点击"放映"选项卡 → <strong>"排练计时"</strong></li>
            <li>PPT进入全屏放映模式，左上角出现<strong>计时工具栏</strong></li>
            <li>开始像正式演讲一样讲解每一页内容</li>
            <li>准备好翻页时，点击计时工具栏的<strong>前进按钮</strong>或按空格翻页</li>
            <li>翻完所有幻灯片后，弹窗提示总时间，选择<strong>"是"保存排练时间</strong></li>
            <li>返回幻灯片浏览视图，每张幻灯片下方显示它的排练时间</li>
        </ol>
        <div class="tip-box tip-info">
            <strong>💡 排练计时的价值</strong><br>
            • 精确知道每页讲多久，15分钟演讲不超时<br>
            • 发现哪些页面讲得太久（内容太多）需要精简<br>
            • 多次排练，让演讲越来越流畅<br>
            • 还可以设置为按录制时间自动翻页（变成"无人机"讲解模式）
        </div>
        <h4>查看和使用排练时间</h4>
        <ul>
            <li>在幻灯片浏览视图中，每页缩略图下方显示排练时间</li>
            <li>可以在放映设置中选择<strong>"如果已存在排练时间，则使用它"</strong>，自动按记录时间翻页</li>
            <li>想重新排练：再次执行"排练计时"，新时间会覆盖旧时间</li>
        </ul>
        <h3>二、如何控制演讲时间</h3>
        <h4>基本时间分配原则（以15分钟为例）</h4>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">环节</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">建议时间</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">内容</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">开场</td><td style="padding:10px;border:1px solid var(--border-color);">1分钟</td><td style="padding:10px;border:1px solid var(--border-color);">自我介绍+本次汇报目的</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">主体内容</td><td style="padding:10px;border:1px solid var(--border-color);">10分钟</td><td style="padding:10px;border:1px solid var(--border-color);">数据、分析、结论（核心部分）</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">总结</td><td style="padding:10px;border:1px solid var(--border-color);">2分钟</td><td style="padding:10px;border:1px solid var(--border-color);">关键结论和建议</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">Q&A</td><td style="padding:10px;border:1px solid var(--border-color);">2分钟</td><td style="padding:10px;border:1px solid var(--border-color);">回答问题</td></tr>
            </tbody>
        </table>
        <h3>三、专业演讲者的PPT演讲技巧</h3>
        <h4>1. 不要照着屏幕念！</h4>
        <p>PPT上的文字是<strong>提纲</strong>，不是脚本。你的职责是<strong>用口语扩充和解释</strong>这些关键词，而不是逐字朗读。</p>
        <div class="tip-box tip-danger">
            <strong>🚫 最让观众昏昏欲睡的行为</strong><br>
            背对观众，面对大屏幕，逐字逐句读PPT上的文字……<br>
            这样不如把PPT发给大家自己看，你在那里完全是多余的！
        </div>
        <h4>2. 333法则</h4>
        <p>在1页PPT上：</p>
        <ul>
            <li>每页<strong>不超过3个</strong>关键要点</li>
            <li>每个要点<strong>不超过3行</strong>字</li>
            <li>每行<strong>不超过30个</strong>字</li>
        </ul>
        <h4>3. 与观众保持眼神接触</h4>
        <ul>
            <li>看观众，而不是看屏幕</li>
            <li>在讲到不同的要点时，视线在不同区域的观众之间移动</li>
            <li>适时停顿，观察观众反应</li>
        </ul>
        <h4>4. 掌握停顿的艺术</h4>
        <p>在说出重要结论后，<strong>沉默2-3秒</strong>让观众消化信息，比滔滔不绝说话效果更好。</p>
        <h4>5. 使用数字和故事</h4>
        <ul>
            <li>抽象的数据变成具体的对比："销售额增长了15%"→ "<strong>相当于多卖了1500件产品</strong>"</li>
            <li>用一个小故事引入主题，观众注意力立刻提升</li>
        </ul>
        <h3>四、应对突发情况</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">突发情况</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">应对方案</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">电脑死机</td><td style="padding:10px;border:1px solid var(--border-color);">U盘备份 + 提前发自己邮件</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">投影仪连接失败</td><td style="padding:10px;border:1px solid var(--border-color);">提前到场测试；准备打印版备用</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">忘词了</td><td style="padding:10px;border:1px solid var(--border-color);">看备注（演讲者视图）；或说"让我换个角度解释"转移注意</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">时间超了</td><td style="padding:10px;border:1px solid var(--border-color);">直接跳到结论页；说"时间关系，直接说结论"</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">被问到不会的问题</td><td style="padding:10px;border:1px solid var(--border-color);">诚实说"这个我会后续跟进，明天给你答复"</td></tr>
            </tbody>
        </table>
    `,
    steps: `
        <div class="step-card"><div class="step-card-number">1</div><div class="step-card-title">进行第一次排练计时</div><div class="step-card-desc"><ol><li>打开你的PPT</li><li>点击"放映"→<strong>"排练计时"</strong></li><li>像正式演讲一样，对着PPT把每页内容讲出来（可以小声讲）</li><li>讲完一页按空格翻页</li><li>全部讲完后选择"是"保存时间</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">2</div><div class="step-card-title">分析排练结果</div><div class="step-card-desc"><ol><li>进入幻灯片浏览视图（视图选项卡→幻灯片浏览）</li><li>查看每张幻灯片下方的时间</li><li>找出时间最长的页面（讲得最久的，可能内容太多）</li><li>计算总时间，对比目标时间（如15分钟）</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">3</div><div class="step-card-title">优化内容精简</div><div class="step-card-desc"><p>根据排练结果优化：</p><ul><li>如果某页讲了3分钟但只有1分钟时间：删除次要内容，只保留核心要点</li><li>如果某页只讲了20秒：可能内容太少，考虑合并到其他页</li></ul></div></div>
        <div class="step-card"><div class="step-card-number">4</div><div class="step-card-title">第二次排练</div><div class="step-card-desc"><p>再次执行排练计时，目标是总时间控制在目标范围内（如13-14分钟，留1-2分钟余量应对意外）。</p></div></div>
        <div class="step-card"><div class="step-card-number">5</div><div class="step-card-title">练习不看屏幕讲PPT</div><div class="step-card-desc"><p>在放映时，试着<strong>不看大屏幕</strong>，而是：</p><ul><li>看演讲者视图中的缩略图了解当前页</li><li>看备注区的提词</li><li>眼神看向（模拟的）观众方向</li></ul></div></div>
    `,
    tips: `
        <div class="tip-box tip-info"><strong>💡 排练时大声讲效果更好</strong><br>很多同学排练时只是在心里默讲，实际演讲时才发现会卡顿。<strong>大声讲出来</strong>，让嘴巴和大脑配合，演讲才会流畅。</div>
        <div class="tip-box tip-success"><strong>🌟 "三七定律"</strong><br>演讲内容只占30%，另外70%来自肢体语言、声音语调、眼神接触。PPT做得再好，演讲者如果声音平淡、低头盯屏幕，效果也会大打折扣。</div>
        <div class="tip-box tip-warning"><strong>⚠️ 留出余量时间</strong><br>目标15分钟的演讲，排练控制在13分钟即可。实际演讲时会有意外（如临时讨论、观众提问、操作失误），留2分钟余量保证不超时。</div>
    `,
    quiz: [
        { type: 'single', question: '"排练计时"功能的主要作用是什么？', options: ['让PPT自动翻页', '记录每张幻灯片的演讲时间，帮助控制总时长', '自动添加动画效果', '检查PPT语法错误'], answer: 1, explanation: '排练计时在预演时记录每张幻灯片停留的时间，帮助演讲者了解时间分配，避免超时。' },
        { type: 'single', question: '排练计时结束后，时间信息显示在哪里？', options: ['幻灯片内容上', '幻灯片浏览视图中每张缩略图下方', '动画窗格中', '放映选项卡'], answer: 1, explanation: '保存排练时间后，在幻灯片浏览视图中可以看到每张幻灯片下方显示的时间。' },
        { type: 'judge', question: '演讲时应该面对大屏幕，逐字朗读PPT上的文字内容。', options: ['对', '错'], answer: 1, explanation: '错误！这是最常见的演讲错误。应该面对观众保持眼神接触，用口语扩充解释PPT上的关键词，而不是照本宣科。' },
        { type: 'single', question: '目标15分钟的演讲，排练时间控制在多少比较合适？', options: ['15分钟整', '18分钟（留余量）', '13分钟（留2分钟余量）', '10分钟（越短越好）'], answer: 2, explanation: '应该比目标时间少1-2分钟，留出余量应对临时讨论、技术故障等意外情况，确保实际演讲不超时。' },
        { type: 'multiple', question: '专业演讲的技巧包括哪些？（多选）', options: ['与观众保持眼神接触', '背对观众面向大屏', '在重要结论后适当停顿', '把抽象数据转化为具体对比'], answer: [0, 2, 3], explanation: '眼神接触、适当停顿、用具体对比解释数据都是专业演讲技巧。背对观众面向屏幕是大忌。' },
        { type: 'single', question: '演讲时间超了，最好的处理方式是？', options: ['继续按原来节奏讲完', '说"时间关系，直接说结论"，跳到结论页', '快速讲完，语速加快三倍', '道歉并离场'], answer: 1, explanation: '超时时最好的处理是坦然说"时间关系，直接说结论"，然后跳到关键页面讲最重要的内容，保持专业感。' },
        { type: 'judge', question: '"333法则"要求每页不超过3个要点、每点不超过3行、每行不超过30字。', options: ['对', '错'], answer: 0, explanation: '正确！333法则是控制PPT信息量的实用原则，防止一页内容过多，让观众难以消化。' }
    ],
    practice: `
        <div class="practice-task">
            <div class="practice-task-header"><span>🎯</span> 实战任务：完整演讲排练</div>
            <div class="practice-task-body">
                <p>对你的周报PPT进行两轮排练，目标总时间10分钟：</p>
                <ol>
                    <li><strong>第一轮排练</strong>：使用"排练计时"完整演讲一遍，大声讲出来（不是默讲）</li>
                    <li><strong>分析结果</strong>：查看每页时间，找出哪些页面超时</li>
                    <li><strong>优化内容</strong>：对超时的页面精简文字，只保留最核心的内容</li>
                    <li><strong>第二轮排练</strong>：再次排练，目标总时间8-9分钟（留余量）</li>
                    <li><strong>自我评估</strong>：是否做到了面对（模拟）观众、不逐字念屏幕？</li>
                </ol>
            </div>
        </div>
        <div class="tip-box tip-success"><strong>🎉 完成本课后，你已经掌握了：</strong><br>✅ 排练计时的使用方法<br>✅ 演讲时间的分配和控制<br>✅ 专业演讲者的技巧<br>✅ 应对突发情况的方案<br><br>下一课：<strong>PPT的导出与打印</strong>——学习如何将PPT以各种格式分享给他人！</div>
    `
};
