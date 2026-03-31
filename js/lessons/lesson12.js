/**
 * PPT学习站 - 第12课：图表插入与编辑
 * 文件路径: js/lessons/lesson12.js
 * 模块：多媒体与表格
 * 任务情境：展示店铺运营数据分析
 */

window.lessonData = {

    scenario: '运营总监对你说："上次你做的表格不错，但开会时大家盯着一堆数字看半天也看不出什么规律。能不能用图表来展示？比如用柱状图对比各产品销量，用折线图看销售趋势，用饼图看品类占比。这样一眼就能看出问题！"今天我们来学习PPT中最强大的数据展示工具——图表。',

    knowledge: `
        <h3>一、为什么要用图表？</h3>
        <p>图表的核心价值就是一句话：<strong>让数据"说话"</strong>。</p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin:var(--space-md) 0;">
            <div style="padding:var(--space-md); background:var(--error-light); border-radius:var(--radius-md); border:1px solid var(--error);">
                <p style="font-size:var(--text-sm); color:var(--error); font-weight:700; margin-bottom:var(--space-sm);">❌ 纯数字</p>
                <p style="font-size:var(--text-sm); margin:0; color:var(--text-secondary);">1月销售额185,000元，2月销售额162,000元，3月销售额210,000元，4月销售额258,000元，5月销售额312,000元，6月销售额298,000元……</p>
            </div>
            <div style="padding:var(--space-md); background:var(--success-light); border-radius:var(--radius-md); border:1px solid var(--success);">
                <p style="font-size:var(--text-sm); color:var(--success); font-weight:700; margin-bottom:var(--space-sm);">✅ 折线图</p>
                <p style="font-size:var(--text-sm); margin:0; color:var(--text-secondary);">一条上升的折线，一眼看出：<strong>销售额在持续增长，4-5月增速最快</strong>。比读一堆数字直观100倍！</p>
            </div>
        </div>

        <p>不同类型的数据适合不同类型的图表：</p>
        <ul>
            <li><strong>想比较大小</strong> → 柱状图</li>
            <li><strong>想看趋势变化</strong> → 折线图</li>
            <li><strong>想看占比构成</strong> → 饼图</li>
            <li><strong>想比较多个维度</strong> → 雷达图</li>
        </ul>

        <h3>二、PPT中常用的图表类型</h3>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">图表类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">电商实例</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">要点</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>📊 柱状图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对比不同项目的数值大小</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">各产品销量对比、各月销售额对比</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐最常用！适合3-8个对比项</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>📈 折线图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示随时间变化的趋势</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">月度/周度销售趋势、流量变化</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐常用！至少要4个以上的数据点</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>🥧 饼图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示各部分占总体的比例</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">各品类销售占比、流量来源占比</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">分类不超过5-6个，否则太碎</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>📊 条形图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">横向对比（名称较长时）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">各店铺销售排名、各地区订单量</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">本质就是横着的柱状图</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>📉 面积图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">展示累积变化趋势</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">累计销售额增长</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">类似折线图但强调"量"的感觉</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>🎯 环形图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">和饼图类似，更现代</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">完成率、占比展示</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">中间可以放数字或图标</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>🕸️ 雷达图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">多维度综合评估</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">产品评分、竞品分析</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">3-6个维度最佳</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>📊 组合图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">同时展示两种不同的数据</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">柱状图（销售额）+折线图（增长率）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">高级用法，非常专业</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 图表类型选择口诀</strong><br>
            <strong>"比大小用柱，看趋势用线，看占比用饼"</strong><br>
            记住这三种就能搞定80%的数据展示需求！
        </div>

        <h3>三、插入图表</h3>

        <h4>操作步骤</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"图表"</strong> 按钮</li>
            <li>在弹出的对话框中：
                <ul>
                    <li>左侧选择<strong>图表类型</strong>（柱状图、折线图等）</li>
                    <li>右侧选择<strong>具体样式</strong>（簇状柱状图、堆积柱状图等）</li>
                </ul>
            </li>
            <li>点击确定</li>
            <li>图表插入后，会自动弹出一个<strong>数据编辑表格</strong>（类似小Excel）</li>
            <li>在这个表格中<strong>修改为你自己的数据</strong></li>
            <li>修改完数据后，关闭数据表格，图表自动更新</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ 图表和数据表格的关系</strong><br>
            插入图表后弹出的数据表格是<strong>图表的数据源</strong>。你在这个表格中改数据，图表会实时更新。<br><br>
            • 如果不小心关闭了数据表格 → 选中图表 → 右键 → <strong>"编辑数据"</strong> 可以重新打开<br>
            • 蓝色虚线框表示图表使用的数据范围 → 拖拽蓝色框可以扩大或缩小数据范围
        </div>

        <h3>四、编辑图表数据</h3>

        <h4>1. 修改示例数据</h4>
        <p>图表插入后会有一些示例数据（系列1、系列2……），你需要：</p>
        <ol>
            <li>把<strong>列标题</strong>改为你的数据系列名称（如"销售额""利润"）</li>
            <li>把<strong>行标题</strong>改为你的类别名称（如"1月""2月"或"产品A""产品B"）</li>
            <li>把<strong>数值</strong>改为你的实际数据</li>
            <li>如果数据行数不够 → 直接在表格下方新增行</li>
            <li>如果数据行数太多 → 删除多余的行，或拖拽蓝色框缩小范围</li>
        </ol>

        <h4>2. 从Excel导入数据</h4>
        <p>如果数据在Excel中，可以直接复制粘贴：</p>
        <ol>
            <li>在Excel中选中数据区域 → <span class="kbd">Ctrl</span> + <span class="kbd">C</span></li>
            <li>点击PPT中图表的数据表格 → 选中左上角第一个单元格</li>
            <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">V</span> 粘贴</li>
            <li>调整蓝色框范围覆盖所有数据</li>
        </ol>

        <h3>五、美化图表</h3>
        <p>默认的图表比较普通，通过以下几步可以让它变得专业漂亮。</p>

        <h4>1. 选择图表样式</h4>
        <ul>
            <li>选中图表 → "图表工具/设计"选项卡</li>
            <li>浏览<strong>"图表样式"</strong>区域，点击一个你喜欢的预设样式</li>
            <li>也可以点击<strong>"更改颜色"</strong>按钮切换配色方案</li>
        </ul>

        <h4>2. 修改图表配色</h4>
        <p>图表的颜色应该和PPT整体风格保持一致：</p>
        <ul>
            <li>选中图表中的某个<strong>数据系列</strong>（比如某组柱子）→ 右键 → <strong>"设置数据系列格式"</strong></li>
            <li>修改<strong>填充颜色</strong>为你想要的颜色</li>
            <li>电商PPT常用：主色用品牌色/蓝色，辅色用灰色/浅色</li>
        </ul>

        <h4>3. 添加和移除图表元素</h4>
        <p>选中图表后，可以通过"图表工具/设计"选项卡的<strong>"添加图表元素"</strong>按钮来控制：</p>
        <ul>
            <li><strong>图表标题</strong> —— 告诉观众这是什么数据（建议保留）</li>
            <li><strong>数据标签</strong> —— 在柱子/点上直接显示数值（⭐推荐开启！）</li>
            <li><strong>图例</strong> —— 多个系列时需要图例说明颜色含义</li>
            <li><strong>坐标轴</strong> —— X轴和Y轴的标题和刻度</li>
            <li><strong>网格线</strong> —— 帮助对齐数值的辅助线（可以保留或去掉）</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 图表美化四步法</strong><br>
            1. <strong>选好配色</strong>：和PPT主题统一，最多3种颜色<br>
            2. <strong>加数据标签</strong>：让观众直接看到数值，不用猜<br>
            3. <strong>去多余元素</strong>：去掉不必要的网格线和边框<br>
            4. <strong>加标题</strong>：清楚标明图表展示的是什么数据
        </div>

        <h4>4. 简化图表（减法设计）</h4>
        <p>好的图表设计不是加更多元素，而是<strong>去掉不必要的元素</strong>：</p>
        <ul>
            <li>✅ 保留：标题、数据标签、必要的坐标轴</li>
            <li>❌ 去掉：过密的网格线、3D效果、多余的背景色</li>
            <li>❌ 去掉：默认的灰色图表边框</li>
            <li>❌ 去掉：不需要的图例（只有一个系列时不需要图例）</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚫 图表设计的大忌</strong><br>
            1. <strong>使用3D效果</strong>：3D柱状图/饼图看起来"炫"但不专业，还会歪曲数据比例<br>
            2. <strong>颜色太多</strong>：七八种颜色看得眼花缭乱<br>
            3. <strong>没有数据标签</strong>：观众需要猜测每个柱子到底是多少<br>
            4. <strong>饼图分块太多</strong>：超过6块就变成"调色盘"了<br>
            5. <strong>纵轴不从0开始</strong>：会夸大数据差异，误导观众
        </div>

        <h3>六、图表类型的深入讲解</h3>

        <h4>柱状图的变体</h4>
        <ul>
            <li><strong>簇状柱状图</strong>：多个系列并排（对比不同产品的销量）</li>
            <li><strong>堆积柱状图</strong>：多个系列叠加（看总量+各部分组成）</li>
            <li><strong>百分比堆积柱状图</strong>：每个柱子都100%高，只看比例</li>
        </ul>

        <h4>折线图的变体</h4>
        <ul>
            <li><strong>普通折线图</strong>：看趋势变化</li>
            <li><strong>带数据点的折线图</strong>：每个数据点有标记（⭐推荐！更清晰）</li>
            <li><strong>平滑折线图</strong>：线条平滑弯曲，更美观</li>
        </ul>

        <h4>饼图的注意事项</h4>
        <ul>
            <li>分类最好<strong>3-5个</strong>，最多不超过6个</li>
            <li>太小的分类合并为<strong>"其他"</strong></li>
            <li>最大的分类放在<strong>12点钟方向</strong>开始（默认位置）</li>
            <li>可以"分离"某一块来突出（选中某块 → 向外拖拽）</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 组合图：高手必备</strong><br>
            组合图可以在同一个图表中同时展示两种不同类型的数据：<br>
            例如：<strong>柱状图展示各月销售额</strong> + <strong>折线图展示增长率</strong><br><br>
            设置方法：插入图表 → 选择"组合图" → 为不同数据系列指定不同的图表类型。<br>
            增长率这类百分比数据通常放在<strong>次坐标轴</strong>上。
        </div>
    `,

    steps: `
        <p>现在我们来制作一个<strong>"店铺运营数据分析"</strong>PPT，包含三种常用图表。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>运营数据分析.pptx</code></p>
                <p>封面页：<strong>"店铺运营数据分析报告"</strong></p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">第2页：插入柱状图——各产品销量对比</div>
            <div class="step-card-desc">
                <ol>
                    <li>新建一页，标题：<strong>"各产品销量对比"</strong></li>
                    <li>点击 <strong>插入 → 图表</strong></li>
                    <li>选择 <strong>"柱状图" → "簇状柱状图"</strong>（第一个）</li>
                    <li>点击确定</li>
                    <li>图表和数据表格同时出现</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">编辑柱状图数据</div>
            <div class="step-card-desc">
                <p>在弹出的数据表格中，把示例数据替换为：</p>
                <table style="width:100%; border-collapse:collapse; margin:var(--space-sm) 0; font-size:var(--text-sm);">
                    <tr style="background:var(--bg-code); font-weight:700;">
                        <td style="padding:6px 10px; border:1px solid var(--border-color);"></td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">销量</td>
                    </tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">无线耳机</td><td style="padding:6px 10px; border:1px solid var(--border-color);">1280</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">手机壳</td><td style="padding:6px 10px; border:1px solid var(--border-color);">3560</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">充电线</td><td style="padding:6px 10px; border:1px solid var(--border-color);">5120</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">智能手表</td><td style="padding:6px 10px; border:1px solid var(--border-color);">420</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">充电宝</td><td style="padding:6px 10px; border:1px solid var(--border-color);">890</td></tr>
                </table>
                <p>删除多余的列（如果有系列2、系列3的列）。调整蓝色选择框只覆盖你的数据。</p>
                <p>输入完后<strong>关闭数据表格</strong>，图表自动更新。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">美化柱状图</div>
            <div class="step-card-desc">
                <p>让柱状图更专业：</p>
                <ol>
                    <li>选中图表 → "图表工具/设计" → <strong>"更改颜色"</strong> → 选择一个蓝色或品牌色系</li>
                    <li>添加数据标签：设计选项卡 → <strong>"添加图表元素" → "数据标签" → "数据标签外"</strong>（数字显示在柱子顶部）</li>
                    <li>修改图表标题：双击标题文字改为<strong>"各产品月度销量（件）"</strong></li>
                    <li>去掉网格线：添加图表元素 → 网格线 → 取消勾选</li>
                    <li>去掉图例（只有一个系列时不需要）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">突出最高销量的柱子</div>
            <div class="step-card-desc">
                <p>"充电线"销量最高，让它特别突出：</p>
                <ol>
                    <li>在图表中<strong>单击</strong>"充电线"那根柱子（先单击一次选中所有柱子，再单击一次选中这根柱子）</li>
                    <li>右键 → <strong>"设置数据点格式"</strong></li>
                    <li>填充 → 选择<strong>橙色或红色</strong>（其他柱子保持蓝色）</li>
                    <li>这样最高销量的柱子就"跳出来"了</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">第3页：插入折线图——月度销售趋势</div>
            <div class="step-card-desc">
                <ol>
                    <li>新建一页，标题：<strong>"月度销售额趋势"</strong></li>
                    <li>插入 → 图表 → <strong>"折线图" → "带数据标记的折线图"</strong></li>
                    <li>在数据表格中输入：</li>
                </ol>
                <table style="width:100%; border-collapse:collapse; margin:var(--space-sm) 0; font-size:var(--text-sm);">
                    <tr style="background:var(--bg-code); font-weight:700;">
                        <td style="padding:6px 10px; border:1px solid var(--border-color);"></td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">销售额（万元）</td>
                    </tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">1月</td><td style="padding:6px 10px; border:1px solid var(--border-color);">18.5</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">2月</td><td style="padding:6px 10px; border:1px solid var(--border-color);">16.2</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">3月</td><td style="padding:6px 10px; border:1px solid var(--border-color);">21.0</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">4月</td><td style="padding:6px 10px; border:1px solid var(--border-color);">25.8</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">5月</td><td style="padding:6px 10px; border:1px solid var(--border-color);">31.2</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">6月</td><td style="padding:6px 10px; border:1px solid var(--border-color);">29.8</td></tr>
                </table>
                <p>关闭数据表格后美化：添加数据标签、修改线条颜色、修改标题。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">美化折线图</div>
            <div class="step-card-desc">
                <ul>
                    <li>更改线条颜色为<strong>蓝色或品牌色</strong></li>
                    <li>增大线条粗细：选中线条 → 右键 → 设置数据系列格式 → 线条宽度改为<strong>3pt</strong></li>
                    <li>增大数据点标记：标记选项 → 类型选"圆形" → 大小改为<strong>8-10</strong></li>
                    <li>添加数据标签，显示在数据点上方</li>
                    <li>去掉网格线（或改为极浅的虚线）</li>
                    <li>修改标题为<strong>"2024上半年月度销售额（万元）"</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">第4页：插入饼图——品类占比分析</div>
            <div class="step-card-desc">
                <ol>
                    <li>新建一页，标题：<strong>"各品类销售额占比"</strong></li>
                    <li>插入 → 图表 → <strong>"饼图" → "饼图"</strong>（第一个，不要选3D饼图）</li>
                    <li>在数据表格中输入：</li>
                </ol>
                <table style="width:100%; border-collapse:collapse; margin:var(--space-sm) 0; font-size:var(--text-sm);">
                    <tr style="background:var(--bg-code); font-weight:700;">
                        <td style="padding:6px 10px; border:1px solid var(--border-color);"></td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">销售额</td>
                    </tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">3C数码</td><td style="padding:6px 10px; border:1px solid var(--border-color);">450000</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">手机配件</td><td style="padding:6px 10px; border:1px solid var(--border-color);">280000</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">家居用品</td><td style="padding:6px 10px; border:1px solid var(--border-color);">150000</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">服装饰品</td><td style="padding:6px 10px; border:1px solid var(--border-color);">90000</td></tr>
                    <tr><td style="padding:6px 10px; border:1px solid var(--border-color);">其他</td><td style="padding:6px 10px; border:1px solid var(--border-color);">30000</td></tr>
                </table>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">美化饼图</div>
            <div class="step-card-desc">
                <ul>
                    <li>更改颜色方案为品牌色系</li>
                    <li>添加数据标签：设计 → 添加图表元素 → 数据标签 → <strong>"类别名称 + 百分比"</strong></li>
                    <li>突出最大块：<strong>单击"3C数码"那块</strong>（点两次），然后<strong>向外拖拽</strong>，让它从饼图中"分离"出来</li>
                    <li>去掉图例（因为数据标签上已经有类别名称了）</li>
                    <li>修改标题</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并全屏检查</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 全屏放映</li>
                    <li>检查每个图表：
                        <ul>
                            <li>数据标签是否清晰可读？</li>
                            <li>颜色是否协调统一？</li>
                            <li>图表标题是否准确描述了数据内容？</li>
                            <li>有没有多余的元素需要去掉？</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-danger">
            <strong>🚫 图表设计五大禁忌</strong><br>
            1. <strong>使用3D效果</strong>：3D饼图会歪曲面积比例，不专业<br>
            2. <strong>没有数据标签</strong>：观众需要自己估算数值<br>
            3. <strong>配色混乱</strong>：一个图表用了七八种不相干的颜色<br>
            4. <strong>元素太多</strong>：标题+图例+标签+网格线+坐标轴标题全堆上去<br>
            5. <strong>图表标题含糊</strong>：写"图表1"而不是"各产品月度销量对比"
        </div>

        <div class="tip-box tip-info">
            <strong>💡 重新打开数据表格</strong><br>
            关闭数据表格后想修改数据？<br>
            选中图表 → 右键 → <strong>"编辑数据"</strong> → 数据表格重新打开<br>
            或者在"图表工具/设计"选项卡中点击"编辑数据"按钮。
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 数据标签的最佳实践</strong><br>
            数据标签是图表最重要的辅助信息：<br>
            • <strong>柱状图</strong>：数据标签放在柱子<strong>顶部外侧</strong><br>
            • <strong>折线图</strong>：数据标签放在数据点<strong>上方</strong><br>
            • <strong>饼图</strong>：数据标签包含<strong>类别名+百分比</strong><br>
            • 标签字号不要太大（10-12pt即可），不能遮挡图表主体<br>
            • 标签颜色和图表主体颜色保持一致或用深灰色
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 图表类型选错了怎么办？</strong><br>
            不用删了重做！选中图表 → "图表工具/设计"选项卡 → <strong>"更改图表类型"</strong> → 选择新的类型。<br>
            数据会自动适配，不需要重新输入。这个功能非常实用！
        </div>

        <div class="tip-box tip-info">
            <strong>💡 图表 + 结论文本框 = 专业汇报</strong><br>
            高手做数据汇报时，不会只放一个图表，还会在图表旁边加一个文本框写<strong>"关键结论"</strong>：<br><br>
            例如在折线图旁边写：<br>
            📌 <strong>关键发现：</strong><br>
            • 1-5月持续增长，5月达到峰值31.2万<br>
            • 6月微降5%，需关注退货率变化<br>
            • 预计Q3将保持平稳增长<br><br>
            图表展示"是什么"，结论文字回答"为什么"和"怎么办"。
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '想展示各产品销量大小的对比，最适合用什么图表？',
            options: ['饼图', '折线图', '柱状图', '雷达图'],
            answer: 2,
            explanation: '柱状图最适合对比不同项目的数值大小。柱子的高低差异可以直观地反映各产品销量的差异。折线图适合趋势，饼图适合占比。'
        },
        {
            type: 'single',
            question: '展示"1-12月销售额变化趋势"最适合用什么图表？',
            options: ['饼图', '折线图', '条形图', '环形图'],
            answer: 1,
            explanation: '折线图最适合展示随时间变化的趋势。12个月的数据点连成一条线，增长和下降一目了然。饼图只能展示占比，无法展示趋势。'
        },
        {
            type: 'single',
            question: '饼图的分块数量建议不超过多少块？',
            options: ['3块', '6块', '10块', '不限制'],
            answer: 1,
            explanation: '饼图建议3-5块最佳，最多不超过6块。分块太多会导致很多很小的扇形区域难以辨认，此时应把小类别合并为"其他"。'
        },
        {
            type: 'judge',
            question: '使用3D效果可以让图表看起来更专业。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！3D效果会歪曲数据的视觉比例（比如3D饼图前面的部分看起来比实际大），而且在现代设计中3D效果被认为是过时的。扁平化的2D图表更清晰、更专业。'
        },
        {
            type: 'single',
            question: '插入图表后关闭了数据表格，如何重新打开编辑数据？',
            options: [
                '必须删除图表重新插入',
                '选中图表 → 右键 → 编辑数据',
                '双击幻灯片空白处',
                '在"视图"选项卡中打开'
            ],
            answer: 1,
            explanation: '选中图表后右键点击"编辑数据"，或在"图表工具/设计"选项卡中点击"编辑数据"按钮，就可以重新打开数据编辑表格。'
        },
        {
            type: 'multiple',
            question: '以下哪些是让图表更专业的做法？（多选）',
            options: [
                '添加数据标签显示具体数值',
                '颜色和PPT整体风格保持统一',
                '给图表加粗黑色边框',
                '去掉不必要的网格线'
            ],
            answer: [0, 1, 3],
            explanation: '数据标签、统一配色、简化元素（去掉多余网格线）都是好做法。图表不需要加粗黑色边框，去掉默认边框让图表和页面融为一体更好看。'
        },
        {
            type: 'single',
            question: '图表类型选错了，最快的修改方式是？',
            options: [
                '删除图表重新插入正确类型',
                '在"图表工具/设计"中点击"更改图表类型"',
                '把数据复制到Excel中重新做图表',
                '无法修改，只能重做'
            ],
            answer: 1,
            explanation: '选中图表 → "图表工具/设计" → "更改图表类型"，可以直接切换图表类型，数据会自动适配，不需要重新输入。'
        },
        {
            type: 'single',
            question: '在图表旁边添加"关键结论"文本框的目的是什么？',
            options: [
                '让页面内容更多',
                '图表解释"是什么"，结论回答"为什么"和"怎么办"',
                '凑字数',
                '替代图表标题'
            ],
            answer: 1,
            explanation: '图表展示的是数据本身（"是什么"），而关键结论则是对数据的分析和解读（"为什么"和"怎么办"）。两者结合才是完整的数据汇报。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作店铺运营数据分析PPT
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少4页的数据分析PPT，包含三种图表：</p>
                <ol>
                    <li>
                        <strong>第1页：封面</strong><br>
                        "XX店铺 运营数据分析报告"
                    </li>
                    <li>
                        <strong>第2页：柱状图 — 产品销量对比</strong><br>
                        至少5个产品的销量数据。要求：
                        <ul>
                            <li>有数据标签</li>
                            <li>最高销量的柱子用不同颜色突出</li>
                            <li>有清晰的图表标题</li>
                        </ul>
                    </li>
                    <li>
                        <strong>第3页：折线图 — 月度销售趋势</strong><br>
                        至少6个月的销售额数据。要求：
                        <ul>
                            <li>使用带数据标记的折线图</li>
                            <li>线条粗细和颜色适当调整</li>
                            <li>旁边加一个"关键结论"文本框</li>
                        </ul>
                    </li>
                    <li>
                        <strong>第4页：饼图 — 品类占比</strong><br>
                        3-5个品类的销售额占比。要求：
                        <ul>
                            <li>不使用3D效果</li>
                            <li>数据标签包含类别名+百分比</li>
                            <li>最大的那块从饼图中"分离"突出</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>三个图表的配色风格保持统一</li>
                    <li>每个图表都有明确的标题</li>
                    <li>去掉不必要的网格线和边框</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试制作一个组合图（柱状图+折线图）</li>
                    <li>尝试对图表使用"更改图表类型"功能切换显示方式</li>
                    <li>每个图表旁加一段关键结论分析</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 恭喜！"多媒体与表格"模块全部完成！</strong><br>
            经过第10-12课的学习，你已经掌握了：<br>
            ✅ 音频的插入和背景音乐设置<br>
            ✅ 视频的插入和播放设置<br>
            ✅ 表格的创建、编辑、美化<br>
            ✅ 柱状图、折线图、饼图的制作<br>
            ✅ 图表数据编辑和美化技巧<br><br>
            下一模块我们将进入<strong>"母版与模板"</strong>，第13课将学习<strong>幻灯片母版</strong>——统一公司品牌形象，让你的PPT更专业！
        </div>
    `
};
