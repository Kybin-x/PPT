/**
 * PPT学习站 - 第19课：放映设置与演讲者视图
 * 模块：放映与输出
 */
window.lessonData = {
    scenario: '你的周报PPT终于做好了，明天要在会议室正式汇报。但你担心：放映时怎么看备注？屏幕要投影到大屏幕，电脑上怎么控制？万一说错了怎么快速翻到某页？今天我们系统学习PPT放映的全套技能！',
    knowledge: `
        <h3>一、开始放映的方式</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">方式</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">操作</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">说明</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>从头开始</strong></td><td style="padding:10px;border:1px solid var(--border-color);">按 <span class="kbd">F5</span></td><td style="padding:10px;border:1px solid var(--border-color);">从第一页开始放映</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>从当前页</strong></td><td style="padding:10px;border:1px solid var(--border-color);">按 <span class="kbd">Shift</span>+<span class="kbd">F5</span></td><td style="padding:10px;border:1px solid var(--border-color);">从正在编辑的页开始</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>菜单放映</strong></td><td style="padding:10px;border:1px solid var(--border-color);">放映选项卡 → 从头放映/从当前</td><td style="padding:10px;border:1px solid var(--border-color);">包含更多设置选项</td></tr>
            </tbody>
        </table>
        <h3>二、放映中的快捷键</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">快捷键</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">功能</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><span class="kbd">空格</span> / 方向键 →</td><td style="padding:10px;border:1px solid var(--border-color);">下一页 / 下一个动画</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">方向键 ←</td><td style="padding:10px;border:1px solid var(--border-color);">上一页 / 上一个动画</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><span class="kbd">Esc</span></td><td style="padding:10px;border:1px solid var(--border-color);">退出放映</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);">输入页码 + <span class="kbd">Enter</span></td><td style="padding:10px;border:1px solid var(--border-color);">直接跳转到指定页</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><span class="kbd">B</span></td><td style="padding:10px;border:1px solid var(--border-color);">黑屏（暂停讨论时遮住屏幕）</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><span class="kbd">W</span></td><td style="padding:10px;border:1px solid var(--border-color);">白屏</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><span class="kbd">Ctrl</span>+<span class="kbd">P</span></td><td style="padding:10px;border:1px solid var(--border-color);">打开画笔工具（在屏幕上圈注）</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><span class="kbd">E</span></td><td style="padding:10px;border:1px solid var(--border-color);">清除画笔痕迹</td></tr>
            </tbody>
        </table>
        <div class="tip-box tip-success">
            <strong>🎯 现场神技：黑屏键B</strong><br>
            当你需要和观众讨论某个问题，又不想让PPT分散注意力时，按 <span class="kbd">B</span> 键屏幕变黑屏，讨论结束后任意按键恢复。这是职场演讲者必备的高级技巧！
        </div>
        <h3>三、演讲者视图（最重要！）</h3>
        <p><strong>演讲者视图</strong>是双屏放映的核心功能：</p>
        <ul>
            <li><strong>大屏幕/投影</strong>：显示正常幻灯片，观众看</li>
            <li><strong>演讲者电脑屏幕</strong>：显示当前幻灯片缩略图 + 下一页预览 + 备注 + 计时器</li>
        </ul>
        <h4>如何启用演讲者视图</h4>
        <ol>
            <li>连接投影仪/大屏幕</li>
            <li>点击"放映"选项卡 → 勾选 <strong>"演讲者视图"</strong></li>
            <li>按F5开始放映，演讲者视图自动出现在电脑屏幕</li>
        </ol>
        <h4>演讲者视图的功能区域</h4>
        <ul>
            <li>左上：<strong>当前幻灯片预览</strong>（含动画状态）</li>
            <li>右上：<strong>下一页预览</strong>（提前知道下一张是什么）</li>
            <li>下方：<strong>备注区域</strong>（显示你写在备注栏的提词）</li>
            <li>顶部：<strong>计时器</strong>（控制演讲时间）</li>
            <li>底部工具栏：画笔、激光笔、翻页按钮</li>
        </ul>
        <div class="tip-box tip-info">
            <strong>💡 演讲者视图的最大价值</strong><br>
            你可以在备注栏提前写好"这页要讲什么、大概讲几分钟、注意强调哪个数字"，放映时在电脑屏幕上悄悄看备注，观众只看到大屏幕上的PPT，完全察觉不到你在看提词！
        </div>
        <h3>四、放映设置</h3>
        <p>点击"放映"选项卡 → <strong>"放映设置"</strong>，可以配置：</p>
        <ul>
            <li><strong>放映类型</strong>：演讲者放映（全屏，最常用）/ 观众自行浏览 / 在展台自动浏览</li>
            <li><strong>放映幻灯片</strong>：全部 / 指定范围（如只放映第3-8页）</li>
            <li><strong>换片方式</strong>：手动 / 自动</li>
            <li><strong>循环放映</strong>：展台模式下用，放完自动重头</li>
        </ul>
        <h3>五、自定义放映</h3>
        <p>如果你的PPT有20页，但今天只想放其中10页（不同受众看不同内容），可以用<strong>自定义放映</strong>：</p>
        <ol>
            <li>放映选项卡 → <strong>"自定义放映"</strong> → 新建</li>
            <li>给这个放映方案起名（如"管理层版本"）</li>
            <li>从左侧选择要放映的页面，点击添加</li>
            <li>保存后，下次可以直接选择这个方案放映</li>
        </ol>
        <div class="tip-box tip-success">
            <strong>🎯 实际应用场景</strong><br>
            同一份PPT，可以创建两个自定义放映：<br>
            "精简版"（给高层，只看结论，10分钟）<br>
            "完整版"（给执行团队，所有细节，30分钟）<br>
            一份PPT满足两种需求！
        </div>
    `,
    steps: `
        <div class="step-card"><div class="step-card-number">1</div><div class="step-card-title">给备注栏添加提词内容</div><div class="step-card-desc"><p>在普通视图下，点击编辑区下方的备注栏，为每一页幻灯片输入演讲提词，例如：</p><ul><li>"这页讲本月总结，重点强调销售额增长了15%，大概2分钟"</li><li>"这里会有观众提问，预留1分钟互动"</li></ul></div></div>
        <div class="step-card"><div class="step-card-number">2</div><div class="step-card-title">练习放映快捷键</div><div class="step-card-desc"><p>按 <span class="kbd">F5</span> 开始全屏放映，逐一练习：</p><ul><li>空格/→ 翻下一页</li><li>← 翻上一页</li><li>输入数字+Enter 跳转指定页</li><li>按 <span class="kbd">B</span> 变黑屏，再按任意键恢复</li><li>按 <span class="kbd">Ctrl</span>+<span class="kbd">P</span> 打开画笔，在屏幕上圈注</li><li>按 <span class="kbd">Esc</span> 退出</li></ul></div></div>
        <div class="step-card"><div class="step-card-number">3</div><div class="step-card-title">设置自定义放映</div><div class="step-card-desc"><ol><li>点击"放映"选项卡 → <strong>"自定义放映"</strong></li><li>点击<strong>"新建"</strong></li><li>输入名称：<strong>"汇报精简版"</strong></li><li>从左侧列表选择几张关键幻灯片，点击<strong>"添加"</strong></li><li>点击确定保存</li><li>选中该方案，点击<strong>"放映"</strong>，验证只放映选定的幻灯片</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">4</div><div class="step-card-title">体验演讲者视图（模拟）</div><div class="step-card-desc"><p>即使没有外接屏幕，也可以在放映模式下体验演讲者视图：</p><ol><li>按 <span class="kbd">F5</span> 全屏放映</li><li>在全屏上右键 → 选择<strong>"演讲者视图"</strong></li><li>或在放映前勾选放映选项卡中的"演讲者视图"</li></ol><p>观察左侧当前页、右侧下一页预览、下方备注区域。</p></div></div>
        <div class="step-card"><div class="step-card-number">5</div><div class="step-card-title">设置放映范围</div><div class="step-card-desc"><ol><li>放映选项卡 → <strong>"放映设置"</strong></li><li>在"放映幻灯片"中选择<strong>"从X到X"</strong></li><li>输入你想放映的页码范围</li><li>点击确定，下次放映只会播放这个范围的页面</li></ol></div></div>
    `,
    tips: `
        <div class="tip-box tip-danger"><strong>🚨 现场必须提前测试！</strong><br>会议室的电脑、分辨率、字体、投影仪颜色可能和你自己电脑不一样。重要汇报前必须提前到会议室测试：<br>• 字体是否显示正确<br>• 图片是否清晰<br>• 动画是否顺畅<br>• 演讲者视图是否正常工作</div>
        <div class="tip-box tip-info"><strong>💡 计时器帮你控制时间</strong><br>演讲者视图顶部有计时器，显示已经放映了多长时间。如果每页预计讲2分钟，一共10页，20分钟内应该结束。超时了就要加快节奏。</div>
        <div class="tip-box tip-success"><strong>🌟 激光笔功能</strong><br>放映时按 <span class="kbd">Ctrl</span>+<span class="kbd">L</span> 可以打开"激光笔"模式，鼠标光标变成红色光点，可以在屏幕上指向重点位置，观众能清楚看到你在指哪里，比物理激光笔更方便！</div>
        <div class="tip-box tip-warning"><strong>⚠️ 携带备用方案</strong><br>重要演讲建议同时准备：<br>• U盘里存一份PPT备份<br>• 邮件发给自己一份<br>• 导出一份PDF（字体不会乱的保底方案）</div>
    `,
    quiz: [
        { type: 'single', question: '放映时，按哪个键可以让屏幕变黑（暂停展示）？', options: ['空格键', 'B键', 'Esc键', 'P键'], answer: 1, explanation: '放映时按"B"键屏幕变黑，可以在讨论时遮住内容。按任意键恢复显示。"W"键是白屏。' },
        { type: 'single', question: '演讲者视图中，演讲者能看到但观众看不到的内容是什么？', options: ['幻灯片内容', '动画效果', '备注和下一页预览', '切换效果'], answer: 2, explanation: '演讲者视图在演讲者的电脑屏幕上显示备注、下一页预览和计时器，而观众只能看到投影屏幕上的幻灯片内容。' },
        { type: 'single', question: '放映时想直接跳到第8页，应该怎么操作？', options: ['按8次→键', '输入"8"然后按Enter键', '按F8键', '点击幻灯片缩略图'], answer: 1, explanation: '放映时直接输入页码数字，然后按Enter键，可以快速跳转到指定页面。不需要逐页翻过去。' },
        { type: 'judge', question: '自定义放映功能可以让同一份PPT根据不同受众放映不同的页面组合。', options: ['对', '错'], answer: 0, explanation: '正确！自定义放映可以创建多个放映方案，每个方案选择不同的页面组合，同一份PPT可以对不同受众放映不同内容。' },
        { type: 'multiple', question: '以下哪些是演讲者视图提供的功能？（多选）', options: ['显示演讲备注', '下一页预览', '放映计时器', '直接编辑幻灯片内容'], answer: [0, 1, 2], explanation: '演讲者视图提供备注显示、下一页预览和计时器功能。在放映模式下无法直接编辑幻灯片内容（需退出放映才能编辑）。' },
        { type: 'single', question: '在放映时打开画笔工具（在屏幕上圈注标记）的快捷键是？', options: ['Ctrl+B', 'Ctrl+P', 'Ctrl+D', 'Ctrl+A'], answer: 1, explanation: 'Ctrl+P在放映时打开画笔工具，可以在屏幕上圈画和标注，强调重点内容。按E键清除画笔痕迹。' },
        { type: 'single', question: '"展台自动浏览"放映类型最适合哪种场景？', options: ['演讲者现场汇报', '展会展台无人值守循环展示', '学生自学课件', '老师授课'], answer: 1, explanation: '"在展台浏览（全屏）"放映类型适合无人值守的展台，PPT自动循环播放，观众自己观看，不需要演讲者手动翻页。' },
        { type: 'judge', question: '即使没有连接外部屏幕，也可以在单台电脑上体验演讲者视图。', options: ['对', '错'], answer: 0, explanation: '正确！单台电脑下也可以进入演讲者视图模式（放映时右键选择演讲者视图），只是界面会在同一屏幕上分区显示，可以用于练习和熟悉功能。' }
    ],
    practice: `
        <div class="practice-task">
            <div class="practice-task-header"><span>🎯</span> 实战任务：模拟完整汇报流程</div>
            <div class="practice-task-body">
                <p>拿出你的周报PPT模板，按以下步骤模拟一次完整的会议汇报：</p>
                <ol>
                    <li><strong>为每页添加备注</strong>：每页写3-5句演讲提词</li>
                    <li><strong>创建自定义放映</strong>：建立"5分钟精简版"（只选3-4页关键幻灯片）</li>
                    <li><strong>练习放映快捷键</strong>：F5→空格翻页→B黑屏→输入页码跳转→Esc退出</li>
                    <li><strong>体验演讲者视图</strong>：开启演讲者视图，查看备注显示和下一页预览</li>
                    <li><strong>使用画笔功能</strong>：放映时用Ctrl+P打开画笔，在重要数据上画圈标注</li>
                </ol>
            </div>
        </div>
        <div class="tip-box tip-success"><strong>🎉 完成本课后，你已经掌握了：</strong><br>✅ 放映快捷键大全<br>✅ 演讲者视图的使用<br>✅ 自定义放映方案<br>✅ 画笔和激光笔功能<br><br>下一课：<strong>排练计时与演讲技巧</strong>——让你的演讲更从容专业！</div>
    `
};
