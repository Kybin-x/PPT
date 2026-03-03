/**
 * PPT学习站 - 第12课：图表制作与分析
 * 文件路径: js/lessons/lesson12.js
 * 模块：多媒体与表格
 * 任务情境：制作销售趋势分析图表
 */

window.lessonData = {
    scenario: '电商团队需要在季度总结会上展示销售趋势。用表格展示数据太枯燥，观众很难一眼看出销售的增长趋势。这时候用图表就最合适了——柱状图能清晰对比不同月份的销售额，折线图能展示销售趋势，饼图能展示各产品的销售占比。',

    knowledge: `
        <h3>一、图表的作用</h3>
        <ul>
            <li><strong>直观展示数据</strong> —— 用图形化的方式展示数据，比表格更容易理解</li>
            <li><strong>突出趋势</strong> —— 能清晰展示数据的增长、下降或波动趋势</li>
            <li><strong>便于对比</strong> —— 可以快速对比不同数据之间的大小关系</li>
            <li><strong>提高专业度</strong> —— 专业的图表能大大提升PPT的质感</li>
        </ul>

        <h3>二、常见的图表类型</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">图表类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">用途</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">示例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">柱状图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对比不同类别的数据</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">各产品的销售额对比</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">折线图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示数据的趋势变化</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">销售额的月度变化</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">饼图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示各部分占比</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">各产品的销售占比</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">面积图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示多个数据的趋势</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">多个产品的销售趋势</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">散点图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示两个变量的关系</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">价格与销量的关系</td>
                </tr>
            </tbody>
        </table>

        <h3>三、插入图表的步骤</h3>
        <ol>
            <li>点击菜单栏 <strong>"插入"</strong> → <strong>"图表"</strong></li>
            <li>选择图表类型（如柱状图、折线图等）</li>
            <li>选择具体的样式</li>
            <li>点击"确定"，图表会插入到幻灯片上</li>
        </ol>

        <h3>四、编辑图表数据</h3>
        <p>插入图表后，会自动打开<strong>"数据表"</strong>窗口：</p>
        <ul>
            <li>直接在数据表中修改数据</li>
            <li>添加或删除数据行/列</li>
            <li>修改图表的标题和轴标签</li>
            <li>关闭数据表后，图表会自动更新</li>
        </ul>

        <h3>五、图表的美化</h3>
        <p>选中图表后，会出现<strong>"图表工具"</strong>选项卡：</p>
        <ul>
            <li><strong>图表样式</strong> —— 预设的图表设计样式</li>
            <li><strong>颜色</strong> —— 改变图表的颜色方案</li>
            <li><strong>图表元素</strong> —— 添加/删除标题、图例、数据标签等</li>
            <li><strong>数据标签</strong> —— 在图表上显示具体的数值</li>
        </ul>

        <h3>六、图表设计的最佳实践</h3>
        <ul>
            <li><strong>选择合适的图表类型</strong> —— 不同的数据用不同的图表</li>
            <li><strong>简化数据</strong> —— 不要在一个图表中放太多数据</li>
            <li><strong>清晰的标题</strong> —— 图表标题要能说明图表的含义</li>
            <li><strong>合理的比例</strong> —— 调整坐标轴的范围，避免数据被压缩</li>
            <li><strong>颜色搭配</strong> —— 选择与幻灯片主题相搭配的颜色</li>
            <li><strong>添加数据标签</strong> —— 在关键数据点上显示具体数值</li>
        </ul>

        <h3>七、从Excel导入数据</h3>
        <ul>
            <li>在Excel中准备好数据表</li>
            <li>在PPT中插入图表</li>
            <li>在数据表中，选择"导入数据"或直接复制Excel数据</li>
            <li>图表会自动根据数据生成</li>
        </ul>
    `,

    keyPoints: [
        { title: '图表的作用', content: '直观展示数据、突出趋势、便于对比、提高专业度' },
        { title: '常见图表类型', content: '柱状图、折线图、饼图、面积图、散点图' },
        { title: '插入图表', content: '插入菜单 → 图表 → 选择类型和样式' },
        { title: '编辑数据', content: '使用数据表修改数据、添加/删除行列' },
        { title: '图表美化', content: '应用样式、改变颜色、添加数据标签' },
        { title: '设计原则', content: '选择合适类型、简化数据、清晰标题、合理比例' }
    ],

    quiz: [
        {
            type: 'single',
            question: '想展示过去12个月的销售额变化趋势，应该用什么图表？',
            options: [
                '饼图',
                '柱状图',
                '折线图',
                '散点图'
            ],
            answer: 2,
            explanation: '折线图最适合展示数据的趋势变化。柱状图适合对比不同类别的数据，饼图适合展示占比。'
        },
        {
            type: 'single',
            question: '想展示各产品类别的销售占比（如服装占30%、美妆占40%等），应该用什么图表？',
            options: [
                '柱状图',
                '折线图',
                '饼图',
                '面积图'
            ],
            answer: 2,
            explanation: '饼图最适合展示各部分占比。饼图能清晰地显示每个部分占整体的百分比。'
        },
        {
            type: 'single',
            question: '在图表中添加数据标签的作用是什么？',
            options: [
                '美化图表外观',
                '在图表上显示具体的数值，便于观众快速了解数据',
                '改变图表的颜色',
                '增加图表的大小'
            ],
            answer: 1,
            explanation: '数据标签能在图表上显示具体的数值，让观众不用猜测，能准确了解每个数据点的具体值。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：制作销售趋势分析图表
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少3页的PPT，用不同的图表展示销售数据：</p>
                <ol>
                    <li>
                        <strong>第1页：月度销售额趋势（折线图）</strong><br>
                        • 创建一个折线图，展示过去6个月的销售额变化<br>
                        • 数据示例：1月100万、2月120万、3月110万、4月150万、5月180万、6月200万<br>
                        • 添加清晰的标题和数据标签
                    </li>
                    <li>
                        <strong>第2页：产品类别销售对比（柱状图）</strong><br>
                        • 创建一个柱状图，对比不同产品类别的销售额<br>
                        • 数据示例：服装150万、美妆200万、食品120万、电子300万<br>
                        • 用不同的颜色区分不同的产品类别
                    </li>
                    <li>
                        <strong>第3页：产品销售占比（饼图）</strong><br>
                        • 创建一个饼图，展示各产品类别的销售占比<br>
                        • 数据与第2页相同<br>
                        • 在饼图上显示百分比和产品名称
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>每个图表都有清晰的标题</li>
                    <li>图表中显示数据标签（具体数值或百分比）</li>
                    <li>颜色搭配协调，与幻灯片主题相符</li>
                    <li>图表大小适中，易于阅读</li>
                    <li>坐标轴标签清晰（如"销售额（万元）"）</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>制作专业的销售趋势分析图表</strong>，实战掌握图表的制作和美化技能。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建PPT并准备数据</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>销售趋势分析.pptx</code></p>
                <p>在第1页添加标题："销售趋势分析"</p>
                <p>准备好要用的数据：</p>
                <ul>
                    <li>月度销售额：1月100、2月120、3月110、4月150、5月180、6月200</li>
                    <li>产品类别销售额：服装150、美妆200、食品120、电子300</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">插入第一个图表（折线图）</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"图表"</strong></p>
                <p>在弹出的对话框中：</p>
                <ul>
                    <li>选择左侧的 <strong>"折线图"</strong> 类型</li>
                    <li>选择一个你喜欢的样式（推荐选择带数据点的折线图）</li>
                    <li>点击"确定"</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">编辑折线图的数据</div>
            <div class="step-card-desc">
                <p>图表插入后，会自动打开<strong>"数据表"</strong>窗口</p>
                <p>修改数据表中的数据：</p>
                <ul>
                    <li>第1列（类别）：1月、2月、3月、4月、5月、6月</li>
                    <li>第2列（数据）：100、120、110、150、180、200</li>
                    <li>删除多余的数据行和列</li>
                </ul>
                <p>关闭数据表，图表会自动更新</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">美化折线图</div>
            <div class="step-card-desc">
                <p>选中图表，会出现<strong>"图表工具"</strong>选项卡：</p>
                <ul>
                    <li>点击 <strong>"图表标题"</strong>，添加标题"月度销售额趋势"</li>
                    <li>点击 <strong>"数据标签"</strong>，选择"显示数值"</li>
                    <li>点击 <strong>"图表样式"</strong>，选择一个你喜欢的设计样式</li>
                    <li>调整图表的大小和位置</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">新建第2页并插入柱状图</div>
            <div class="step-card-desc">
                <p>新建第2页，添加标题"产品类别销售对比"</p>
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"图表"</strong></p>
                <p>选择 <strong>"柱状图"</strong> 类型，点击"确定"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">编辑柱状图的数据</div>
            <div class="step-card-desc">
                <p>在打开的数据表中输入数据：</p>
                <ul>
                    <li>第1列（类别）：服装、美妆、食品、电子</li>
                    <li>第2列（销售额）：150、200、120、300</li>
                    <li>删除多余的数据</li>
                </ul>
                <p>关闭数据表，图表会自动更新</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">美化柱状图</div>
            <div class="step-card-desc">
                <p>选中图表，在"图表工具"选项卡中：</p>
                <ul>
                    <li>点击 <strong>"图表标题"</strong>，添加标题"产品类别销售对比"</li>
                    <li>点击 <strong>"数据标签"</strong>，选择"显示数值"</li>
                    <li>点击 <strong>"颜色"</strong>，选择一个配色方案</li>
                    <li>调整图表的大小和位置</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">新建第3页并插入饼图</div>
            <div class="step-card-desc">
                <p>新建第3页，添加标题"产品销售占比"</p>
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"图表"</strong></p>
                <p>选择 <strong>"饼图"</strong> 类型，点击"确定"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">编辑饼图的数据</div>
            <div class="step-card-desc">
                <p>在打开的数据表中输入数据：</p>
                <ul>
                    <li>第1列（类别）：服装、美妆、食品、电子</li>
                    <li>第2列（销售额）：150、200、120、300</li>
                    <li>删除多余的数据</li>
                </ul>
                <p>关闭数据表，饼图会自动生成</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">美化饼图</div>
            <div class="step-card-desc">
                <p>选中图表，在"图表工具"选项卡中：</p>
                <ul>
                    <li>点击 <strong>"图表标题"</strong>，添加标题"产品销售占比"</li>
                    <li>点击 <strong>"数据标签"</strong>，选择"显示百分比和类别名称"</li>
                    <li>点击 <strong>"图表样式"</strong>，选择一个设计样式</li>
                    <li>调整图表的大小和位置</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">11</div>
            <div class="step-card-title">保存并测试</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存PPT</p>
                <p>按 <span class="kbd">F5</span> 进入放映模式，检查图表的显示效果：</p>
                <ul>
                    <li>图表标题是否清晰</li>
                    <li>数据标签是否显示正确</li>
                    <li>颜色搭配是否协调</li>
                    <li>图表大小是否合适</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>图表类型的选择建议</strong><br>
            • <strong>柱状图</strong>：对比不同类别的数据（如不同产品的销售额）<br>
            • <strong>折线图</strong>：展示数据的趋势变化（如销售额的月度变化）<br>
            • <strong>饼图</strong>：展示各部分占比（如各产品的销售占比）<br>
            • <strong>面积图</strong>：展示多个数据的趋势（如多个产品的销售趋势）<br>
            • <strong>散点图</strong>：展示两个变量的关系（如价格与销量的关系）<br><br>
            选择合适的图表类型，能让数据更加直观易懂。
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ 图表使用的常见错误</strong><br>
            1. <strong>图表类型选择不当</strong>：用饼图展示趋势，用折线图展示占比<br>
            2. <strong>数据太复杂</strong>：在一个图表中放了太多数据，看起来很拥挤<br>
            3. <strong>坐标轴范围不合理</strong>：导致数据被压缩或拉伸<br>
            4. <strong>没有标题和标签</strong>：观众看不出图表的含义<br>
            5. <strong>颜色搭配不当</strong>：颜色与幻灯片背景不协调<br><br>
            建议：选择合适的图表类型、简化数据、合理设置坐标轴、添加清晰的标题和标签。
        </div>
