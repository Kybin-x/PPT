/**
 * PPT学习站 - 第11课：表格制作与美化
 * 文件路径: js/lessons/lesson11.js
 * 模块：多媒体与表格
 * 任务情境：制作月度销售数据表
 */

window.lessonData = {
    scenario: '电商团队需要在月度总结会上展示销售数据。数据包括：各产品类别的销售额、销售量、增长率等。用文字列举太复杂，用图表又不够详细。这时候一个清晰、美观的表格就是最好的选择。',

    knowledge: `
        <h3>一、表格的作用</h3>
        <ul>
            <li><strong>清晰展示数据</strong> —— 行列分明，数据一目了然</li>
            <li><strong>便于对比</strong> —— 可以快速对比不同数据之间的差异</li>
            <li><strong>提高专业度</strong> —— 格式化的表格看起来更专业</li>
            <li><strong>节省空间</strong> —— 用表格展示数据比用文字更节省空间</li>
        </ul>

        <h3>二、插入表格的方法</h3>
        <ol>
            <li>点击菜单栏 <strong>"插入"</strong> → <strong>"表格"</strong></li>
            <li>选择表格的行数和列数（如5行4列）</li>
            <li>点击"确定"，表格会插入到幻灯片上</li>
        </ol>

        <h3>三、表格的基本操作</h3>
        <ul>
            <li><strong>添加行/列</strong> —— 右键表格 → 插入行/列</li>
            <li><strong>删除行/列</strong> —— 右键表格 → 删除行/列</li>
            <li><strong>合并单元格</strong> —— 选中多个单元格 → 右键 → 合并单元格</li>
            <li><strong>拆分单元格</strong> —— 右键单元格 → 拆分单元格</li>
            <li><strong>调整行高/列宽</strong> —— 拖拽表格的边框</li>
        </ul>

        <h3>四、表格的美化</h3>
        <p>选中表格后，会出现<strong>"表格工具"</strong>选项卡：</p>
        <ul>
            <li><strong>表格样式</strong> —— 预设的表格设计样式</li>
            <li><strong>填充颜色</strong> —— 改变单元格的背景颜色</li>
            <li><strong>边框</strong> —— 调整表格的边框样式和颜色</li>
            <li><strong>文字格式</strong> —— 调整表格中文字的字体、大小、颜色等</li>
        </ul>

        <h3>五、表格设计的最佳实践</h3>
        <ul>
            <li><strong>表头突出</strong> —— 用不同的颜色或加粗来突出表头</li>
            <li><strong>颜色搭配</strong> —— 选择与幻灯片主题相搭配的颜色</li>
            <li><strong>字体清晰</strong> —— 选择易读的字体，字号不小于14pt</li>
            <li><strong>数据对齐</strong> —— 数字右对齐，文字左对齐</li>
            <li><strong>避免过度装饰</strong> —— 不要用太多颜色或效果，保持简洁</li>
        </ul>

        <h3>六、表格中的数据输入</h3>
        <ul>
            <li><strong>直接输入</strong> —— 点击单元格，直接输入文字或数字</li>
            <li><strong>Tab键移动</strong> —— 按Tab键移动到下一个单元格</li>
            <li><strong>Shift+Tab</strong> —— 移动到上一个单元格</li>
            <li><strong>Enter键</strong> —— 在单元格内换行</li>
        </ul>

        <h3>七、表格的高级功能</h3>
        <ul>
            <li><strong>排序</strong> —— 可以按某一列的数据进行排序</li>
            <li><strong>计算</strong> —— 可以在表格中添加求和、平均值等公式</li>
            <li><strong>导入数据</strong> —— 可以从Excel中复制数据到表格</li>
            <li><strong>导出数据</strong> —— 可以将表格导出为Excel格式</li>
        </ul>
    `,

    keyPoints: [
        { title: '表格的作用', content: '清晰展示数据、便于对比、提高专业度、节省空间' },
        { title: '插入表格', content: '插入菜单 → 表格 → 选择行数和列数' },
        { title: '基本操作', content: '添加/删除行列、合并/拆分单元格、调整大小' },
        { title: '表格美化', content: '应用样式、改变颜色、调整边框、格式化文字' },
        { title: '数据输入', content: '直接输入、Tab键移动、Enter键换行' },
        { title: '设计原则', content: '表头突出、颜色搭配、字体清晰、数据对齐' }
    ],

    quiz: [
        {
            type: 'single',
            question: '在表格中，想快速移动到下一个单元格，应该按什么键？',
            options: [
                '按Enter键',
                '按Tab键',
                '按Space键',
                '按Shift键'
            ],
            answer: 1,
            explanation: '在表格中，按Tab键会快速移动到下一个单元格。按Enter键会在单元格内换行。'
        },
        {
            type: 'single',
            question: '表格中的数字应该如何对齐？',
            options: [
                '左对齐',
                '右对齐',
                '居中对齐',
                '两端对齐'
            ],
            answer: 1,
            explanation: '数字应该右对齐，这样便于对比大小。文字应该左对齐。'
        },
        {
            type: 'single',
            question: '想让表头与数据行有明显的区别，最好的方法是？',
            options: [
                '加粗表头文字',
                '改变表头的背景颜色',
                '增大表头的字号',
                '以上都可以'
            ],
            answer: 3,
            explanation: '为了让表头突出，可以同时使用多种方法：加粗、改变背景颜色、增大字号等。这样能让表格更清晰易读。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：制作月度销售数据表
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少2页的PPT，展示电商团队的销售数据：</p>
                <ol>
                    <li>
                        <strong>第1页：产品类别销售表</strong><br>
                        创建一个表格，包含以下内容：
                        <ul>
                            <li>表头：产品类别、销售额（万元）、销售量（件）、增长率（%）</li>
                            <li>数据行：
                                <ul>
                                    <li>服装鞋帽、150、5000、15%</li>
                                    <li>美妆护肤、200、3000、25%</li>
                                    <li>食品饮料、120、8000、10%</li>
                                    <li>电子产品、300、2000、30%</li>
                                    <li>合计、770、18000、20%</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>第2页：地区销售对比表</strong><br>
                        创建另一个表格，展示不同地区的销售情况：
                        <ul>
                            <li>表头：地区、1月、2月、3月、平均值</li>
                            <li>数据行：华东、华南、华中、华北、西部等地区的销售数据</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>表头用不同的颜色突出（如蓝色或绿色背景）</li>
                    <li>数字右对齐，文字左对齐</li>
                    <li>表格边框清晰，颜色搭配协调</li>
                    <li>字号不小于14pt，易于阅读</li>
                    <li>合计行用不同的颜色区分</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>制作一个专业的销售数据表</strong>，实战掌握表格的制作和美化技能。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建PPT并准备数据</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>销售数据表.pptx</code></p>
                <p>在第1页添加标题："产品类别销售统计"</p>
                <p>准备好要输入的数据：</p>
                <ul>
                    <li>产品类别、销售额、销售量、增长率</li>
                    <li>各个产品的具体数据</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">插入表格</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"表格"</strong></p>
                <p>在弹出的对话框中：</p>
                <ul>
                    <li>列数：4（产品类别、销售额、销售量、增长率）</li>
                    <li>行数：6（1个表头行 + 4个数据行 + 1个合计行）</li>
                    <li>点击"确定"</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">输入表头</div>
            <div class="step-card-desc">
                <p>点击表格的第一个单元格，开始输入表头：</p>
                <ul>
                    <li>第1列：产品类别</li>
                    <li>按Tab键移动到第2列，输入：销售额（万元）</li>
                    <li>按Tab键移动到第3列，输入：销售量（件）</li>
                    <li>按Tab键移动到第4列，输入：增长率（%）</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">输入数据</div>
            <div class="step-card-desc">
                <p>按Tab键移动到第2行，开始输入数据：</p>
                <ul>
                    <li>第1行：服装鞋帽、150、5000、15%</li>
                    <li>第2行：美妆护肤、200、3000、25%</li>
                    <li>第3行：食品饮料、120、8000、10%</li>
                    <li>第4行：电子产品、300、2000、30%</li>
                    <li>第5行：合计、770、18000、20%</li>
                </ul>
                <p>每输入一个数据后按Tab键移动到下一个单元格</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">美化表头</div>
            <div class="step-card-desc">
                <p>选中表头行（第1行）的所有单元格：</p>
                <ul>
                    <li>点击第1个单元格，然后按Shift+点击最后一个单元格</li>
                    <li>右键 → <strong>"填充颜色"</strong> → 选择蓝色或绿色</li>
                    <li>右键 → <strong>"文字颜色"</strong> → 选择白色</li>
                    <li>右键 → <strong>"加粗"</strong>（或按Ctrl+B）</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">美化合计行</div>
            <div class="step-card-desc">
                <p>选中合计行（最后一行）的所有单元格：</p>
                <ul>
                    <li>右键 → <strong>"填充颜色"</strong> → 选择浅灰色或浅蓝色</li>
                    <li>右键 → <strong>"加粗"</strong></li>
                    <li>这样能让合计行与数据行区分开</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">调整对齐方式</div>
            <div class="step-card-desc">
                <p>选中数字列（销售额、销售量、增长率）：</p>
                <ul>
                    <li>右键 → <strong>"对齐"</strong> → <strong>"右对齐"</strong></li>
                </ul>
                <p>选中产品类别列：</p>
                <ul>
                    <li>右键 → <strong>"对齐"</strong> → <strong>"左对齐"</strong></li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">调整表格大小</div>
            <div class="step-card-desc">
                <p>拖拽表格的边框调整大小，使其：</p>
                <ul>
                    <li>占据幻灯片的中心区域</li>
                    <li>所有文字都清晰可读</li>
                    <li>行高和列宽均匀分布</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">新建第2页并创建地区销售表</div>
            <div class="step-card-desc">
                <p>新建第2页，添加标题："地区销售对比"</p>
                <p>重复步骤2-8，创建另一个表格：</p>
                <ul>
                    <li>列数：5（地区、1月、2月、3月、平均值）</li>
                    <li>行数：6（1个表头行 + 5个地区数据行）</li>
                    <li>输入各地区的销售数据</li>
                    <li>应用相同的美化样式</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并测试</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存PPT</p>
                <p>按 <span class="kbd">F5</span> 进入放映模式，检查表格的显示效果：</p>
                <ul>
                    <li>表头是否清晰突出</li>
                    <li>数据是否对齐</li>
                    <li>颜色搭配是否协调</li>
                    <li>字号是否易于阅读</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>表格数据的来源</strong><br>
            • 从Excel中复制数据：在Excel中选中数据 → Ctrl+C → 在PPT中Ctrl+V<br>
            • 手动输入：直接在表格中输入数据<br>
            • 导入CSV文件：某些情况下可以导入CSV格式的数据<br><br>
            建议：如果数据量很大，先在Excel中整理好，再复制到PPT中。
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ 表格使用的常见错误</strong><br>
            1. <strong>表格太复杂</strong>：行列太多，看起来很拥挤<br>
            2. <strong>颜色过多</strong>：用了太多颜色，显得杂乱无章<br>
            3. <strong>字号太小</strong>：观众看不清表格中的数据<br>
            4. <strong>对齐不当</strong>：数字左对齐，文字右对齐，看起来很奇怪<br>
            5. <strong>没有表头</strong>：看不出每一列代表什么<br><br>
            建议：保持简洁、颜色搭配协调、字号适中、对齐方式正确。
        </div>
        <div class="tip-box tip-success">
            <strong>表格的高级技巧</strong><br>
            • 可以在表格中插入图表，让数据更直观<br>
            • 可以使用条件格式突出重要数据（如最大值、最小值）<br>
            • 可以添加排序功能，让观众快速找到需要的数据<br>
            • 可以使用公式计算合计、平均值等<br><br>
            这些技巧能让你的表格更加专业和实用！
        </div>
    `,

    summary: `
        <div class="tip-box tip-success">
            <strong>完成本课后，你已经掌握了：</strong><br>
            ✅ 插入表格的方法<br>
            ✅ 表格的基本操作（添加/删除行列、合并/拆分单元格）<br>
            ✅ 表格中的数据输入和编辑<br>
            ✅ 表格的美化（颜色、边框、文字格式）<br>
            ✅ 表格设计的最佳实践（对齐、颜色搭配、字体选择）<br>
            ✅ 从Excel导入数据到表格<br><br>
            下一课我们将学习<strong>图表制作与分析</strong>——用柱状图、饼图等展示数据趋势，让数据更加直观！
        </div>
    `
};
