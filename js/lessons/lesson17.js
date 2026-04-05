/**
 * PPT学习站 - 第17课：元素动画效果
 * 模块：动画与切换
 */
window.lessonData = {
    scenario: '数据分析页做好了，但老板说："你把所有数据一口气全展示出来，观众来不及跟上思路。能不能让图表、文字一个一个地出现，我讲到哪里，它就出来哪里？"这就是元素动画的作用！今天我们来学习让PPT内容"活"起来。',
    knowledge: `
        <h3>一、什么是元素动画？</h3>
        <p>元素动画（Animation）是指<strong>幻灯片内某个具体元素</strong>（文本框、图片、形状、图表等）的出现、消失或移动效果。与切换效果不同，动画作用于<strong>单个对象</strong>，可以精确控制每个元素出现的时机。</p>
        <div class="tip-box tip-info">
            <strong>💡 动画的核心价值</strong><br>
            • 控制信息出现节奏，配合演讲逻辑<br>
            • 让观众专注于当前要讲的内容<br>
            • 突出重点，隐藏后续内容制造悬念<br>
            • 适当使用可以提升专业感
        </div>
        <h3>二、动画的四大类型</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">类型</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">作用</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">常用效果</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">颜色标识</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>进入</strong></td><td style="padding:10px;border:1px solid var(--border-color);">元素从无到有的出现方式</td><td style="padding:10px;border:1px solid var(--border-color);">淡化、飞入、缩放</td><td style="padding:10px;border:1px solid var(--border-color);">绿色 🟢</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>退出</strong></td><td style="padding:10px;border:1px solid var(--border-color);">元素从有到无的消失方式</td><td style="padding:10px;border:1px solid var(--border-color);">淡化、飞出</td><td style="padding:10px;border:1px solid var(--border-color);">红色 🔴</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>强调</strong></td><td style="padding:10px;border:1px solid var(--border-color);">元素在原位的变化效果</td><td style="padding:10px;border:1px solid var(--border-color);">放大、颜色变化、晃动</td><td style="padding:10px;border:1px solid var(--border-color);">黄色 🟡</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>路径</strong></td><td style="padding:10px;border:1px solid var(--border-color);">元素沿指定路径移动</td><td style="padding:10px;border:1px solid var(--border-color);">直线、曲线、自定义路径</td><td style="padding:10px;border:1px solid var(--border-color);">蓝色 🔵</td></tr>
            </tbody>
        </table>
        <h3>三、添加动画的步骤</h3>
        <ol>
            <li>选中要添加动画的元素（文本框、图片等）</li>
            <li>点击 <strong>"动画"</strong> 选项卡</li>
            <li>从动画库中选择一个效果（绿色=进入，红色=退出，黄色=强调）</li>
            <li>元素旁边出现数字标签 ①②③，表示动画播放顺序</li>
        </ol>
        <h3>四、动画的触发方式</h3>
        <ul>
            <li><strong>单击时</strong>（默认）：每点击一次鼠标，播放下一个动画，最常用</li>
            <li><strong>与上一动画同时</strong>：和上一个动画同时开始，用于多元素同步出现</li>
            <li><strong>上一动画之后</strong>：上一个动画结束后自动开始，制作连贯动画</li>
        </ul>
        <h3>五、动画窗格——精确控制</h3>
        <p>点击"动画"选项卡中的 <strong>"动画窗格"</strong> 按钮，右侧会出现一个面板，显示当前页面所有动画的列表，可以：</p>
        <ul>
            <li>查看所有动画的顺序</li>
            <li>拖拽调整动画顺序</li>
            <li>点击动画名旁的下拉箭头 → 修改触发方式、删除动画</li>
            <li>设置动画的持续时间和延迟</li>
        </ul>
        <h3>六、推荐动画方案</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">使用场景</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">推荐动画</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">持续时间</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">文字逐条出现</td><td style="padding:10px;border:1px solid var(--border-color);">淡化（进入）</td><td style="padding:10px;border:1px solid var(--border-color);">0.3-0.5秒</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">图表数据展示</td><td style="padding:10px;border:1px solid var(--border-color);">缩放/淡化（进入）</td><td style="padding:10px;border:1px solid var(--border-color);">0.5-0.7秒</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">重点数字强调</td><td style="padding:10px;border:1px solid var(--border-color);">放大（强调）</td><td style="padding:10px;border:1px solid var(--border-color);">0.3秒</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">图片展示</td><td style="padding:10px;border:1px solid var(--border-color);">淡化/飞入（进入）</td><td style="padding:10px;border:1px solid var(--border-color);">0.5秒</td></tr>
            </tbody>
        </table>
        <div class="tip-box tip-danger">
            <strong>🚫 动画使用的三大禁忌</strong><br>
            1. <strong>每个元素都加动画</strong>：视觉噪音，观众无法专注内容<br>
            2. <strong>使用弹跳、旋转等夸张效果</strong>：显得幼稚不专业<br>
            3. <strong>持续时间设太长</strong>：观众等动画结束比等电梯还烦
        </div>
        <div class="tip-box tip-success">
            <strong>🎯 动画使用的黄金法则</strong><br>
            • 只给<strong>关键信息</strong>加动画（标题、重要数据、结论）<br>
            • 优先用<strong>淡化</strong>，简洁不失格调<br>
            • 速度要快：0.3-0.5秒，不要让观众等<br>
            • 同一页不超过<strong>3-4个</strong>动画触发点
        </div>
    `,
    steps: `
        <div class="step-card"><div class="step-card-number">1</div><div class="step-card-title">新建或打开PPT，选择一页内容丰富的幻灯片</div><div class="step-card-desc"><p>建议选择数据分析页或产品介绍页，该页有标题、图表、文字等多个元素。</p></div></div>
        <div class="step-card"><div class="step-card-number">2</div><div class="step-card-title">给标题添加淡化进入动画</div><div class="step-card-desc"><ol><li>单击选中标题文本框</li><li>点击 <strong>"动画"</strong> 选项卡</li><li>在动画库中选择 <strong>"淡化"</strong>（进入类，绿色）</li><li>持续时间设为 <strong>0.30秒</strong></li><li>触发方式：<strong>单击时</strong></li></ol></div></div>
        <div class="step-card"><div class="step-card-number">3</div><div class="step-card-title">给正文列表添加逐条出现动画</div><div class="step-card-desc"><ol><li>点击选中正文文本框</li><li>选择 <strong>"飞入"</strong>（进入类）→ 效果选项选 <strong>"自左侧"</strong></li><li>触发方式：<strong>单击时</strong></li><li>这样每点一次鼠标，文字就一条一条飞入</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">4</div><div class="step-card-title">打开动画窗格查看顺序</div><div class="step-card-desc"><ol><li>点击"动画"选项卡中的 <strong>"动画窗格"</strong></li><li>右侧面板显示所有动画列表</li><li>可以拖拽调整顺序</li><li>双击某条动画，可以设置详细时间参数</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">5</div><div class="step-card-title">给图表添加缩放进入动画</div><div class="step-card-desc"><ol><li>选中图表</li><li>选择动画效果 <strong>"缩放"</strong>（进入类）</li><li>触发方式：<strong>单击时</strong></li><li>持续时间：<strong>0.50秒</strong></li></ol></div></div>
        <div class="step-card"><div class="step-card-number">6</div><div class="step-card-title">给数字卡片添加强调动画</div><div class="step-card-desc"><ol><li>选中关键数据卡片</li><li>在动画库中切换到<strong>强调</strong>类效果</li><li>选择 <strong>"放大/缩小"</strong></li><li>触发方式：<strong>与上一动画同时</strong>（和卡片出现同时放大）</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">7</div><div class="step-card-title">预览并调整</div><div class="step-card-desc"><ul><li>点击"动画"选项卡中的 <strong>"预览"</strong> 按钮</li><li>或按 <span class="kbd">Shift</span>+<span class="kbd">F5</span> 从当前页放映，点击查看动画效果</li><li>回到编辑模式调整不满意的动画</li></ul></div></div>
        <div class="step-card"><div class="step-card-number">8</div><div class="step-card-title">删除多余动画</div><div class="step-card-desc"><p>觉得某个动画不需要：在动画窗格中选中该条目 → 按 <span class="kbd">Delete</span>。或者选中元素，在动画库中选择<strong>"无"</strong>。</p></div></div>
    `,
    tips: `
        <div class="tip-box tip-info"><strong>💡 文字逐段出现的技巧</strong><br>选中含有多个段落的文本框，添加进入动画后，在动画窗格中选中该动画 → 右键"效果选项"→ 在"文本动画"标签中选择"按第一级段落"，这样每点一次鼠标就出现一段文字！</div>
        <div class="tip-box tip-warning"><strong>⚠️ 动画太多反而减分</strong><br>一页PPT上的动画触发点建议不超过4-5个。太多动画会让演示节奏拖沓，观众失去耐心。只给真正关键的内容加动画。</div>
        <div class="tip-box tip-success"><strong>🌟 "与上一动画同时"的妙用</strong><br>想让多个元素同时出现？只需把第一个设为"单击时"，其余设为"与上一动画同时"，这样一次点击就能让一组元素同时出现，非常整洁！</div>
        <div class="tip-box tip-danger"><strong>🚫 不要用弹跳、旋转等夸张效果</strong><br>这些效果让PPT看起来像小学生制作的。商务场合坚持：淡化、飞入（从左/右）、缩放。简单但专业。</div>
    `,
    quiz: [
        { type: 'single', question: '元素动画中，"进入"类动画的颜色标识是？', options: ['红色', '绿色', '黄色', '蓝色'], answer: 1, explanation: '"进入"类动画用绿色标识，表示元素从无到有的出现效果。红色是"退出"，黄色是"强调"，蓝色是"路径"。' },
        { type: 'single', question: '想让多个元素在一次点击时同时出现，应该设置什么触发方式？', options: ['都设为"单击时"', '第一个"单击时"，其余"与上一动画同时"', '都设为"上一动画之后"', '不加动画'], answer: 1, explanation: '第一个元素设为"单击时"，其余设为"与上一动画同时"，这样一次点击就能让一组元素同时出现。' },
        { type: 'judge', question: '为了让PPT更生动，应该给每个文本框和图片都添加动画效果。', options: ['对', '错'], answer: 1, explanation: '错误！动画应该只加在关键信息上。每个元素都加动画会造成视觉噪音，分散观众注意力。' },
        { type: 'single', question: '在哪里可以查看和调整当前页面所有动画的顺序？', options: ['动画选项卡中的"动画库"', '切换选项卡', '动画选项卡中的"动画窗格"', '视图选项卡'], answer: 2, explanation: '"动画窗格"显示当前页所有动画的列表，可以查看顺序、调整触发方式、设置时间参数。' },
        { type: 'multiple', question: '以下哪些是适合商务PPT使用的进入动画？（多选）', options: ['淡化', '弹跳', '飞入', '旋转'], answer: [0, 2], explanation: '淡化和飞入是简洁专业的进入动画，适合商务场合。弹跳和旋转过于夸张，在正式汇报中显得不专业。' },
        { type: 'single', question: '给文本框中的文字设置"按段落"出现，需要在哪里设置？', options: ['在动画库中直接选择', '在动画窗格的效果选项中设置', '在文本框格式中设置', '在切换效果中设置'], answer: 1, explanation: '在动画窗格中选中该动画 → 右键"效果选项" → "文本动画"标签，选择"按第一级段落"即可让文字逐段出现。' },
        { type: 'single', question: '动画持续时间设置为多少比较合适？', options: ['0.1秒以内', '0.3-0.7秒', '2-3秒', '越长越好'], answer: 1, explanation: '动画持续时间推荐0.3-0.7秒，太快看不清效果，太慢让观众等待。简短有力的动画最专业。' },
        { type: 'judge', question: '"强调"类动画可以让已经显示的元素产生变化，如放大或变色。', options: ['对', '错'], answer: 0, explanation: '正确！"强调"动画让已经在页面上的元素产生变化（放大/缩小、闪烁、颜色变化等），用于突出重点信息。' }
    ],
    practice: `
        <div class="practice-task">
            <div class="practice-task-header"><span>🎯</span> 实战任务：为数据分析页添加专业动画</div>
            <div class="practice-task-body">
                <p>新建一页"销售数据分析"，包含标题、3个数据卡片、1个图表、3条结论。完成以下动画设置：</p>
                <ol>
                    <li>标题：<strong>淡化进入</strong>，0.3秒，单击时</li>
                    <li>3个数据卡片：<strong>同时淡化进入</strong>（第一个"单击时"，后两个"与上一动画同时"）</li>
                    <li>图表：<strong>缩放进入</strong>，0.5秒，单击时</li>
                    <li>3条结论文字：<strong>飞入（自左）</strong>，按段落逐条出现，0.3秒</li>
                </ol>
                <p>放映测试：每次点击，内容按设计的节奏一一出现。</p>
            </div>
        </div>
        <div class="tip-box tip-success"><strong>🎉 完成本课后，你已经掌握了：</strong><br>✅ 进入/退出/强调/路径四类动画<br>✅ 单击时/同时/之后三种触发方式<br>✅ 动画窗格的使用<br>✅ 文字按段落出现的技巧<br><br>下一课我们学习<strong>动画高级技巧</strong>——制作专业的产品展示动效！</div>
    `
};
