/**
 * PPT学习站 - 第16课：幻灯片切换效果
 * 模块：动画与切换
 */
window.lessonData = {
    scenario: '你做好了一份电商运营周报PPT，老板说："翻页太死板了，能不能加点过渡效果？"今天我们学习幻灯片切换效果——让你的PPT翻页像电影一样丝滑！',
    knowledge: `
        <h3>一、什么是切换效果？</h3>
        <p>切换效果（Transition）是指<strong>从一张幻灯片翻到下一张时</strong>出现的动画效果。切换效果作用于<strong>整个幻灯片页面</strong>，而不是页面上的某个元素（那是动画效果，下一课讲）。</p>
        <div class="tip-box tip-info">
            <strong>💡 切换 vs 动画的区别</strong><br>
            • <strong>切换效果</strong>：幻灯片与幻灯片之间的过渡（翻页时）<br>
            • <strong>动画效果</strong>：幻灯片内部某个元素的出现/消失动画（下一课）
        </div>
        <h3>二、如何添加切换效果</h3>
        <ol>
            <li>在左侧缩略图面板中<strong>选中幻灯片</strong></li>
            <li>点击顶部的 <strong>"切换"</strong> 选项卡</li>
            <li>从预设效果中选择一个</li>
            <li>缩略图左下角出现 ★ 表示已添加</li>
        </ol>
        <h3>三、切换效果分类</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">类型</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">代表效果</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">建议</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>细微型</strong></td><td style="padding:10px;border:1px solid var(--border-color);">淡化、推入、擦除、劈裂</td><td style="padding:10px;border:1px solid var(--border-color);">⭐ 商务汇报首选</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>华丽型</strong></td><td style="padding:10px;border:1px solid var(--border-color);">立方体、翻转、旋转</td><td style="padding:10px;border:1px solid var(--border-color);">谨慎使用</td></tr>
            </tbody>
        </table>
        <div class="tip-box tip-danger">
            <strong>🚫 黄金原则</strong><br>
            整个PPT只用<strong>1种切换效果</strong>，且以细微型为主！每页不同效果会让观众头晕眼花。
        </div>
        <h3>四、关键参数设置</h3>
        <ul>
            <li><strong>持续时间</strong>：推荐 0.3-0.7秒，商务场合用0.5秒</li>
            <li><strong>单击时换片</strong>：有演讲者时使用，自己控制节奏</li>
            <li><strong>自动换片时间</strong>：展台无人循环展示时使用（每页5-15秒）</li>
            <li><strong>声音</strong>：正式汇报不加声音</li>
        </ul>
        <h3>五、批量应用</h3>
        <p>设置好一页后，点击 <strong>"全部应用"</strong>，所有幻灯片立刻统一使用相同切换效果。</p>
        <div class="tip-box tip-success">
            <strong>🎯 职场推荐配置</strong><br>
            普通商务汇报：<strong>淡化，0.5秒，单击时</strong><br>
            产品展示演示：<strong>推入（从右），0.5秒，单击时</strong><br>
            展台循环展示：<strong>淡化，0.5秒，自动换片10秒</strong>
        </div>
    `,
    steps: `
        <div class="step-card"><div class="step-card-number">1</div><div class="step-card-title">打开切换选项卡</div><div class="step-card-desc"><p>打开任意PPT文件，点击顶部的 <strong>"切换"</strong> 选项卡。</p></div></div>
        <div class="step-card"><div class="step-card-number">2</div><div class="step-card-title">设置淡化效果</div><div class="step-card-desc"><p>点击第一张幻灯片，选择 <strong>"淡化"</strong>，持续时间设为 <strong>0.50秒</strong>。</p></div></div>
        <div class="step-card"><div class="step-card-number">3</div><div class="step-card-title">全部应用</div><div class="step-card-desc"><p>点击 <strong>"全部应用"</strong>，观察所有缩略图左下角出现 ★。</p></div></div>
        <div class="step-card"><div class="step-card-number">4</div><div class="step-card-title">给特殊页面单独设置（可选）</div><div class="step-card-desc"><p>点击章节分隔页，选择 <strong>"推入（自左侧）"</strong>，不要点全部应用。</p></div></div>
        <div class="step-card"><div class="step-card-number">5</div><div class="step-card-title">体验自动换片</div><div class="step-card-desc"><p>勾选"设置自动换片时间"，输入 <strong>00:05.00</strong>，按 <span class="kbd">F5</span> 放映体验，体验后取消勾选。</p></div></div>
        <div class="step-card"><div class="step-card-number">6</div><div class="step-card-title">全屏放映验证</div><div class="step-card-desc"><p>按 <span class="kbd">F5</span> 全屏放映，手动翻页感受效果，按 <span class="kbd">Esc</span> 退出，<span class="kbd">Ctrl</span>+<span class="kbd">S</span> 保存。</p></div></div>
    `,
    tips: `
        <div class="tip-box tip-info"><strong>💡 删除切换效果</strong><br>选中幻灯片 → 在切换列表选最左边的<strong>"无"</strong> → 完成。去掉所有页：选"无"后点"全部应用"。</div>
        <div class="tip-box tip-warning"><strong>⚠️ 兼容性注意</strong><br>部分华丽效果在老版本软件上可能无法显示。重要场合使用"淡化"等基础效果，兼容性最好。</div>
        <div class="tip-box tip-success"><strong>🌟 高级技巧：平滑切换</strong><br>当两页有相同元素时，"平滑"切换会自动生成流畅的位移/缩放动画，让PPT看起来极其专业！</div>
    `,
    quiz: [
        { type: 'single', question: '给整个PPT统一应用切换效果的正确做法是？', options: ['逐页手动设置', '设置好一页后点击"全部应用"', '在母版中设置', '在设计选项卡中设置'], answer: 1, explanation: '设置好一页后点击"全部应用"，就能将相同效果应用到所有幻灯片。' },
        { type: 'single', question: '商务汇报PPT切换效果的持续时间推荐设置为多少？', options: ['0.1秒', '0.3-0.7秒', '2-3秒', '5秒以上'], answer: 1, explanation: '0.3-0.7秒是合理范围。太快看不到效果，太慢让观众等待。' },
        { type: 'judge', question: '为了让PPT更丰富，每一页都应该使用不同的切换效果。', options: ['对', '错'], answer: 1, explanation: '错误！整套PPT应统一用1-2种切换效果，不同效果会分散注意力，显得杂乱。' },
        { type: 'single', question: '"设置自动换片时间"功能最适合用于哪种场景？', options: ['有演讲者现场讲解时', '展台无人自动循环展示', '老师授课时', '学生答辩时'], answer: 1, explanation: '自动换片适合无需演讲者操作的场景，如展台循环展示。有演讲者时用"单击时"。' },
        { type: 'multiple', question: '以下哪些属于"细微型"切换效果？（多选）', options: ['淡化', '立方体', '推入', '旋转'], answer: [0, 2], explanation: '淡化和推入是细微型效果，动画幅度小、视觉负担轻，适合商务场合。立方体和旋转是华丽型。' },
        { type: 'single', question: '在哪个选项卡中可以设置幻灯片的切换效果？', options: ['开始', '插入', '切换', '动画'], answer: 2, explanation: '"切换"选项卡设置页面间的切换效果，"动画"选项卡设置页面内元素的动画。' },
        { type: 'judge', question: '切换效果中添加声音（如鼓掌声）可以让商务汇报更生动，推荐添加。', options: ['对', '错'], answer: 1, explanation: '错误！正式商务汇报不应添加切换声音，会干扰演讲，显得不专业。' },
        { type: 'single', question: '以下哪种切换效果兼容性最好？', options: ['立方体', '翻转', '淡化', '涡流'], answer: 2, explanation: '"淡化"是最基础的切换效果，在各版本软件和设备上兼容性最好。' }
    ],
    practice: `
        <div class="practice-task">
            <div class="practice-task-header"><span>🎯</span> 实战任务：为PPT配置切换效果</div>
            <div class="practice-task-body">
                <p>打开你之前制作的任意PPT，完成以下任务：</p>
                <ol>
                    <li>正文页统一使用"<strong>淡化</strong>"，持续时间0.50秒，单击时换片</li>
                    <li>封面/结尾页使用"<strong>推入（从右侧）</strong>"，持续时间0.50秒</li>
                    <li>临时设置5秒自动换片，放映体验后取消</li>
                    <li>按F5全屏放映，评价切换是否流畅</li>
                </ol>
                <p><strong>加分项：</strong>尝试"平滑"切换效果，体验元素流畅变换。</p>
            </div>
        </div>
        <div class="tip-box tip-success"><strong>🎉 完成本课后，你已经掌握了：</strong><br>✅ 切换效果的添加与设置<br>✅ 细微型 vs 华丽型的选择<br>✅ 全部应用的高效操作<br><br>下一课我们将学习<strong>元素动画</strong>——让页面内的文字和图片一个一个地"飞"出来！</div>
    `
};
