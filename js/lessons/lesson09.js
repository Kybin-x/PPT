/**
 * PPT学习站 - 第9课：SmartArt图示
 * 文件路径: js/lessons/lesson09.js
 * 模块：图片与图形
 * 任务情境：绘制跨境电商发货流程图
 */

window.lessonData = {
    scenario: '跨境电商团队需要制作一份发货流程说明PPT，要展示从"订单确认→仓库打包→国际物流→清关→本地配送→签收"的完整流程。用文字描述太复杂，用图片又不灵活。这时候SmartArt图示就派上用场了——它能自动排列流程步骤，还能一键更改样式！',

    knowledge: `
        <h3>一、什么是SmartArt？</h3>
        <p>SmartArt是WPS演示中的<strong>智能图示工具</strong>，用来快速创建专业的流程图、组织结构图、关系图等。</p>
        <p>相比手动画形状，SmartArt的优势：</p>
        <ul>
            <li><strong>自动排列</strong> —— 输入文字后自动排版，无需手动调整位置</li>
            <li><strong>一键换样式</strong> —— 选择不同的SmartArt样式，整个图示立即变化</li>
            <li><strong>专业外观</strong> —— 预设的设计都很专业，适合商务场景</li>
            <li><strong>易于修改</strong> —— 添加/删除步骤只需点几下</li>
        </ul>

        <h3>二、SmartArt的主要类型</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">用途</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">示例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">流程</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示步骤顺序</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">订单→打包→发货→配送</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">层级</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示组织结构</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">总经理→部门经理→员工</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">循环</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示循环过程</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">计划→执行→检查→改进</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">关系</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示相互关系</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">产品→价格→渠道→推广</td>
                </tr>
            </tbody>
        </table>

        <h3>三、插入SmartArt的步骤</h3>
        <ol>
            <li>点击菜单栏 <strong>"插入"</strong> → <strong>"SmartArt"</strong></li>
            <li>选择需要的类型（如"流程"）</li>
            <li>选择具体的样式</li>
            <li>点击"确定"插入到幻灯片</li>
        </ol>

        <h3>四、编辑SmartArt中的文字</h3>
        <p>插入SmartArt后，会自动打开<strong>"文本窗格"</strong>，显示一个树形结构：</p>
        <ul>
            <li>直接在文本窗格中输入文字</li>
            <li>按<span class="kbd">Tab</span>键可以增加下一级</li>
            <li>按<span class="kbd">Shift+Tab</span>键可以减少一级</li>
            <li>按<span class="kbd">Enter</span>键添加同级项目</li>
        </ul>

        <h3>五、美化SmartArt</h3>
        <p>选中SmartArt后，会出现<strong>"SmartArt工具"</strong>选项卡：</p>
        <ul>
            <li><strong>更改颜色</strong> —— 一键改变所有形状的颜色</li>
            <li><strong>应用样式</strong> —— 选择预设的设计样式</li>
            <li><strong>形状格式</strong> —— 调整单个形状的填充、轮廓等</li>
        </ul>
    `,

    keyPoints: [
        { title: '什么是SmartArt', content: '智能图示工具，用于快速创建流程图、组织结构图等' },
        { title: 'SmartArt的类型', content: '流程、层级、循环、关系等多种类型' },
        { title: '插入SmartArt', content: '插入菜单 → SmartArt → 选择类型和样式' },
        { title: '编辑文字', content: '使用文本窗格输入，Tab键控制层级' },
        { title: '美化SmartArt', content: '更改颜色、应用样式、调整形状格式' }
    ],

    quiz: [
        {
            type: 'single',
            question: '下列哪种情况最适合用SmartArt？',
            options: [
                '展示一个复杂的5步工作流程',
                '绘制一个简单的圆形',
                '插入一张产品照片',
                '添加一段文字说明'
            ],
            answer: 0,
            explanation: 'SmartArt专门用于展示流程、结构、关系等信息。复杂的多步流程用SmartArt最合适，它会自动排列和美化。'
        },
        {
            type: 'single',
            question: '在SmartArt的文本窗格中，想添加一个同级的新步骤，应该按什么键？',
            options: [
                '按Tab键',
                '按Enter键',
                '按Shift+Tab键',
                '按Delete键'
            ],
            answer: 1,
            explanation: '在文本窗格中，按Enter键会在当前项目下方添加一个同级的新项目。Tab键是增加下一级，Shift+Tab是减少一级。'
        },
        {
            type: 'single',
            question: '已经插入的SmartArt想改成另一种样式，最快的方法是？',
            options: [
                '删除重新插入',
                '在SmartArt工具选项卡中选择新样式',
                '手动修改每个形状',
                '无法更改，只能重做'
            ],
            answer: 1,
            explanation: '选中SmartArt后，在"SmartArt工具"选项卡中有"应用样式"功能，可以一键更换整个图示的样式，所有内容都会保留。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：制作跨境电商发货流程图
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少2页的PPT，用SmartArt展示完整的发货流程：</p>
                <ol>
                    <li>
                        <strong>第1页：发货流程图</strong><br>
                        使用"流程"类型的SmartArt，展示以下步骤：
                        <ul>
                            <li>订单确认</li>
                            <li>仓库打包</li>
                            <li>国际物流</li>
                            <li>清关</li>
                            <li>本地配送</li>
                            <li>签收完成</li>
                        </ul>
                    </li>
                    <li>
                        <strong>第2页：部门协作结构</strong><br>
                        使用"层级"类型的SmartArt，展示电商团队的组织结构：
                        <ul>
                            <li>顶层：运营总监</li>
                            <li>中层：产品经理、物流经理、客服经理</li>
                            <li>下层：各部门的具体岗位</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>至少使用2种不同的SmartArt样式</li>
                    <li>使用"更改颜色"功能统一配色</li>
                    <li>文字清晰易读，字号不小于18pt</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>制作一个跨境电商发货流程图</strong>，实战掌握SmartArt的全部技能。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件，准备工作</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>发货流程图.pptx</code></p>
                <p>删除默认占位符，得到空白页面。</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">插入SmartArt</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"SmartArt"</strong></p>
                <p>在弹出的对话框中，选择左侧的 <strong>"流程"</strong> 类型</p>
                <p>选择一个你喜欢的样式（推荐选择"流程"中的第一个基础样式），点击"确定"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">输入流程步骤</div>
            <div class="step-card-desc">
                <p>SmartArt插入后，右侧会自动打开<strong>"文本窗格"</strong></p>
                <p>在文本窗格中输入各个步骤：</p>
                <ul>
                    <li>第1行：订单确认</li>
                    <li>按Enter，第2行：仓库打包</li>
                    <li>按Enter，第3行：国际物流</li>
                    <li>按Enter，第4行：清关</li>
                    <li>按Enter，第5行：本地配送</li>
                    <li>按Enter，第6行：签收完成</li>
                </ul>
                <p>输入完毕后，点击文本窗格外的空白处关闭它</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">美化SmartArt</div>
            <div class="step-card-desc">
                <p>选中SmartArt（点击它的边框）</p>
                <p>在菜单栏会出现 <strong>"SmartArt工具"</strong> 选项卡</p>
                <p>点击 <strong>"更改颜色"</strong>，选择一个配色方案（推荐选择蓝色或绿色系）</p>
                <p>点击 <strong>"应用样式"</strong>，选择一个你喜欢的设计样式</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">调整大小和位置</div>
            <div class="step-card-desc">
                <p>拖拽SmartArt的边框调整大小，使其占据幻灯片的中心区域</p>
                <p>确保所有文字都清晰可读</p>
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>文本窗格的快捷键</strong><br>
            • <span class="kbd">Tab</span> —— 增加下一级（缩进）<br>
            • <span class="kbd">Shift+Tab</span> —— 减少一级（取消缩进）<br>
            • <span class="kbd">Enter</span> —— 添加同级项目<br>
            • <span class="kbd">Delete</span> —— 删除当前项目<br><br>
            熟练使用这些快捷键，可以大大提高编辑效率！
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ SmartArt使用的常见错误</strong><br>
            1. <strong>步骤太多</strong>：一个SmartArt放了10多个步骤，看起来很拥挤<br>
            2. <strong>文字太长</strong>：每个步骤的文字都很长，破坏了图示的美观<br>
            3. <strong>不调整大小</strong>：SmartArt太小，文字难以阅读<br>
            4. <strong>颜色不搭</strong>：选择的颜色与幻灯片背景不协调<br><br>
            建议：每个SmartArt最多6-8个步骤，文字简洁明了。
        </div>
        <div class="tip-box tip-success">
            <strong>SmartArt的高级技巧</strong><br>
            • 可以在SmartArt的形状中插入图片，让流程图更生动<br>
            • 可以右键选择"编辑形状"来自定义单个形状<br>
            • 可以复制SmartArt并修改内容，快速创建多个相似的图示<br><br>
            这些技巧在制作复杂的商务PPT时非常有用！
        </div>
    `,

    summary: `
        <div class="tip-box tip-success">
            <strong>完成本课后，你已经掌握了：</strong><br>
            ✅ SmartArt的主要类型和用途<br>
            ✅ 插入和编辑SmartArt<br>
            ✅ 使用文本窗格管理层级关系<br>
            ✅ 美化SmartArt的颜色和样式<br>
            ✅ 调整SmartArt的大小和位置<br><br>
            下一课我们将学习<strong>插入音频与视频</strong>——让你的PPT动起来，配上背景音乐和视频素材！
        </div>
    `
};
