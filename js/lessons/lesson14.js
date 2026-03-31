/**
 * PPT学习站 - 第14课：配色方案与主题
 * 文件路径: js/lessons/lesson14.js
 * 模块：母版与模板
 * 任务情境：为电商团队定制PPT风格
 */

window.lessonData = {

    scenario: '运营总监看了你做的母版，很满意："框架搞好了，但颜色能不能更统一一些？我们团队每个人做的PPT颜色都不一样，有的红有的蓝，看起来不像一个公司出来的。你能不能定一套配色方案，大家都用同一套颜色？"今天我们来学习PPT配色的艺术和WPS的主题功能。',

    knowledge: `
        <h3>一、为什么配色很重要？</h3>
        <p>配色是PPT视觉效果的<strong>灵魂</strong>。同样的内容，不同的配色给人完全不同的感受：</p>
        <ul>
            <li><strong>红色/橙色</strong> → 热情、促销、紧迫感 → 适合电商促销PPT</li>
            <li><strong>蓝色</strong> → 专业、信任、冷静 → 适合商务汇报、数据分析</li>
            <li><strong>绿色</strong> → 健康、环保、成长 → 适合业绩增长报告</li>
            <li><strong>黑色/金色</strong> → 高端、奢华 → 适合高端品牌展示</li>
            <li><strong>紫色</strong> → 创意、神秘 → 适合新品发布、创意方案</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 颜色的心理学效应</strong><br>
            • 淘宝/天猫用<strong>橙红色</strong> → 激发购买欲望<br>
            • 支付宝用<strong>蓝色</strong> → 传递安全感和信任<br>
            • 微信用<strong>绿色</strong> → 舒适自然<br>
            • 拼多多用<strong>红色</strong> → 热闹、低价的感觉<br><br>
            选对颜色，你的PPT就成功了一半！
        </div>

        <h3>二、配色的基础知识</h3>

        <h4>1. 色彩三要素</h4>
        <ul>
            <li><strong>色相（Hue）</strong>：颜色本身——红、橙、黄、绿、蓝、紫</li>
            <li><strong>饱和度（Saturation）</strong>：颜色的鲜艳程度。饱和度高=鲜艳，低=灰暗</li>
            <li><strong>明度（Brightness）</strong>：颜色的亮度。明度高=亮，低=暗</li>
        </ul>

        <h4>2. PPT中的颜色表示方式</h4>
        <p>在WPS中设置颜色时，你会看到以下几种表示方式：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">方式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">格式示例</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>HEX（十六进制）</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">#FF6B35</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐最常用，网页设计师常说的"色值"</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">RGB</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">R:255 G:107 B:53</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">红绿蓝三通道数值（0-255）</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">HSL</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">H:16 S:100% L:60%</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">色相、饱和度、亮度</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-success">
            <strong>🎯 实用技巧：记住HEX色值</strong><br>
            工作中别人经常会说"用这个颜色"然后给你一个<strong>#开头的6位代码</strong>，比如 #FF6B35。在WPS中：<br>
            选择颜色时 → 点击<strong>"更多颜色"</strong> → 切换到<strong>"自定义"</strong>选项卡 → 找到HEX输入框 → 输入色值 → 确定。<br><br>
            常用色值建议保存到手机备忘录，要用时随时查。
        </div>

        <h3>三、PPT配色的黄金法则</h3>

        <h4>法则一：不超过4种颜色</h4>
        <p>一份PPT中使用的颜色种类控制在<strong>3-4种</strong>：</p>
        <ul>
            <li><strong>主色</strong>（1种）：占据60%的视觉面积。用于标题、重点元素、色带</li>
            <li><strong>辅色</strong>（1-2种）：占30%面积。用于图表辅助色、装饰、次要元素</li>
            <li><strong>点缀色</strong>（1种）：占10%面积。用于极少数需要强调的地方</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 60-30-10配色法则</strong><br>
            这个法则来自室内设计，同样适用于PPT：<br>
            • <strong>60%</strong> 主色/中性色：背景、大面积色块<br>
            • <strong>30%</strong> 辅色：标题、图表、装饰元素<br>
            • <strong>10%</strong> 点缀色：按钮、重点数字、警示标记<br><br>
            比如：白色背景（60%）+ 深蓝标题和色带（30%）+ 橙色强调按钮（10%）
        </div>

        <h4>法则二：文字和背景要有足够对比</h4>
        <p>文字必须能在背景上<strong>清楚地看到</strong>：</p>
        <ul>
            <li>✅ 浅色背景 + 深色文字（最安全）</li>
            <li>✅ 深色背景 + 白色/浅色文字</li>
            <li>❌ 浅色背景 + 浅色文字（看不清）</li>
            <li>❌ 深色背景 + 深色文字（更看不清）</li>
            <li>❌ 花哨背景图 + 任何文字（被背景干扰）</li>
        </ul>

        <h4>法则三：同色系搭配最安全</h4>
        <p>不知道怎么配色？用<strong>同一种颜色的深浅变化</strong>就对了：</p>
        <ul>
            <li><strong>蓝色系</strong>：深蓝标题 + 中蓝色带 + 浅蓝背景</li>
            <li><strong>橙色系</strong>：深橙标题 + 橙色按钮 + 浅橙点缀</li>
            <li>这种搭配方法叫<strong>"单色渐变"</strong>，永远不会出错</li>
        </ul>

        <h3>四、电商PPT常用配色方案</h3>
        <p>以下是几套经过验证的配色方案，可以直接拿来用：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">方案名称</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">主色</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">辅色</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🔵 <strong>商务蓝</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#1A237E;">■</span> #1A237E</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#42A5F5;">■</span> #42A5F5 + <span style="color:#E3F2FD;">■</span> #E3F2FD</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">工作汇报、数据分析</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🟠 <strong>电商橙</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#FF6B35;">■</span> #FF6B35</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#333333;">■</span> #333333 + <span style="color:#FFF3E0;">■</span> #FFF3E0</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">促销方案、活动策划</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🔴 <strong>活力红</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#E53935;">■</span> #E53935</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#212121;">■</span> #212121 + <span style="color:#FFEBEE;">■</span> #FFEBEE</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">年终总结、大促复盘</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🟢 <strong>清新绿</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#2E7D32;">■</span> #2E7D32</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#66BB6A;">■</span> #66BB6A + <span style="color:#E8F5E9;">■</span> #E8F5E9</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">环保产品、健康食品</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⚫ <strong>高端黑金</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#212121;">■</span> #212121</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#FFD700;">■</span> #FFD700 + <span style="color:#424242;">■</span> #424242</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">高端品牌、奢侈品展示</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-success">
            <strong>🎯 不知道用什么配色？试试这个万能方案：</strong><br>
            <strong>白色背景 + 深蓝标题(#1A237E) + 浅蓝装饰(#E3F2FD) + 橙色强调(#FF6B35)</strong><br><br>
            这套配色专业、百搭、不会出错，适合90%的工作场景。
        </div>

        <h3>五、WPS中的主题功能</h3>
        <p>WPS演示的<strong>"主题"</strong>是一套<strong>预设的配色+字体+效果</strong>的组合方案，可以一键应用到整个PPT。</p>

        <h4>1. 应用主题</h4>
        <ol>
            <li>点击 <strong>"设计"</strong> 选项卡</li>
            <li>浏览<strong>"主题"</strong>区域的各种预设</li>
            <li>鼠标悬停可以预览效果</li>
            <li>点击一个主题即可应用</li>
        </ol>

        <h4>2. 主题包含的三个要素</h4>
        <ul>
            <li><strong>主题颜色</strong>：一组12种配套的颜色（背景色、文字色、强调色等）</li>
            <li><strong>主题字体</strong>：标题字体 + 正文字体的组合</li>
            <li><strong>主题效果</strong>：形状和图表的默认样式效果</li>
        </ul>

        <h4>3. 单独修改主题颜色</h4>
        <p>如果你喜欢某个主题的布局但不喜欢它的颜色：</p>
        <ol>
            <li>"设计"选项卡 → <strong>"颜色"</strong>（或"主题颜色"）下拉按钮</li>
            <li>从预设的配色方案中选择一个</li>
            <li>或者点击<strong>"自定义颜色"</strong>来创建你自己的配色方案</li>
        </ol>

        <h4>4. 自定义主题颜色</h4>
        <p>创建公司专属配色方案：</p>
        <ol>
            <li>"设计"选项卡 → 颜色 → <strong>"自定义颜色"</strong></li>
            <li>在弹出的对话框中设置12种颜色：
                <ul>
                    <li><strong>文字/背景色</strong>（深色1、浅色1、深色2、浅色2）</li>
                    <li><strong>强调色</strong>（6种强调色，用于图表、形状等）</li>
                    <li><strong>超链接色</strong>（2种）</li>
                </ul>
            </li>
            <li>给方案起一个名字（如"XX公司品牌色"）</li>
            <li>点击保存</li>
        </ol>

        <div class="tip-box tip-info">
            <strong>💡 自定义主题颜色的核心设置</strong><br>
            12种颜色不用全改，最重要的是：<br>
            • <strong>强调色1</strong>：这是最常用的主色，图表、形状默认都用它<br>
            • <strong>强调色2</strong>：辅色<br>
            • <strong>文字/背景深色1</strong>：通常设为深灰/黑色<br>
            • <strong>文字/背景浅色1</strong>：通常设为白色<br><br>
            只要把这几个关键色设为你的品牌色，整个PPT的默认颜色就统一了。
        </div>

        <h4>5. 单独修改主题字体</h4>
        <ol>
            <li>"设计"选项卡 → <strong>"字体"</strong>（或"主题字体"）下拉按钮</li>
            <li>从预设字体组合中选择</li>
            <li>或点击<strong>"自定义字体"</strong>，分别设置<strong>标题字体</strong>和<strong>正文字体</strong></li>
            <li>推荐：标题用<strong>微软雅黑Bold</strong>，正文用<strong>微软雅黑Regular</strong></li>
        </ol>

        <h3>六、配色工具推荐</h3>
        <p>如果你不知道怎么搭配颜色，可以借助这些免费工具：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">工具名称</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">网址</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Color Hunt</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">colorhunt.co</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 精选4色配色卡，直接复制色值</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Coolors</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">coolors.co</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">按空格随机生成配色方案</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>中国色</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">zhongguose.com</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">中国传统色，做古风PPT很好看</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>Adobe Color</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">color.adobe.com</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">专业配色工具，可以从图片提取配色</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-success">
            <strong>🎯 从品牌Logo提取配色</strong><br>
            最简单的配色方法——看公司的Logo是什么颜色，就用那个颜色做主色！<br><br>
            • 公司Logo是<strong>蓝色</strong>→ PPT用蓝色系<br>
            • 公司Logo是<strong>红色</strong>→ PPT用红色系<br>
            • 公司Logo是<strong>多色</strong>→ 选其中最显眼的颜色做主色<br><br>
            这样做出来的PPT和公司品牌高度统一，老板一定满意！
        </div>

        <h3>七、使用取色器</h3>
        <p>看到某个PPT或网页上有个好看的颜色想用？WPS有<strong>取色器</strong>功能：</p>
        <ol>
            <li>选中要修改颜色的对象</li>
            <li>点击颜色设置（字体颜色或填充颜色）的下拉按钮</li>
            <li>找到 <strong>"取色器"</strong>（吸管图标 💉）</li>
            <li>鼠标变成吸管后，在<strong>屏幕上任何位置</strong>点击</li>
            <li>就能精确获取那个位置的颜色</li>
        </ol>

        <div class="tip-box tip-info">
            <strong>💡 取色器的妙用</strong><br>
            • 从公司Logo中<strong>吸取品牌色</strong><br>
            • 从好看的PPT模板中<strong>吸取配色</strong><br>
            • 从产品图片中<strong>吸取产品色</strong>作为PPT主题色<br>
            • 确保不同元素使用<strong>完全相同的颜色</strong>（用取色器从已有元素吸取）
        </div>
    `,

    steps: `
        <p>现在我们来为电商团队<strong>定制一套PPT配色方案</strong>，并应用到实际PPT中。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">打开上节课做的公司模板</div>
            <div class="step-card-desc">
                <p>打开上节课保存的 <code>公司品牌模板.pptx</code>（如果没有就新建一个）。</p>
                <p>我们在这个基础上添加配色方案。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">体验预设主题</div>
            <div class="step-card-desc">
                <p>先感受一下主题的威力：</p>
                <ol>
                    <li>在普通视图中，确保有2-3页内容（随便写点什么）</li>
                    <li>点击 <strong>"设计"</strong> 选项卡</li>
                    <li>在<strong>"主题"</strong>区域依次<strong>悬停</strong>不同主题，观察整个PPT的变化</li>
                    <li>注意：颜色、字体、背景都在变化！</li>
                    <li>先不要点击应用，只是感受一下</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">自定义主题颜色</div>
            <div class="step-card-desc">
                <p>我们来创建"电商橙"配色方案：</p>
                <ol>
                    <li>"设计"选项卡 → <strong>"颜色"</strong>（或"变体"中的颜色按钮）→ <strong>"自定义颜色"</strong></li>
                    <li>设置以下颜色（在HEX框中输入色值）：
                        <ul>
                            <li><strong>强调色1</strong>：#FF6B35（电商橙 — 主色）</li>
                            <li><strong>强调色2</strong>：#1A237E（深蓝 — 辅色）</li>
                            <li><strong>强调色3</strong>：#4CAF50（绿色 — 增长标记）</li>
                            <li><strong>强调色4</strong>：#E53935（红色 — 下降标记）</li>
                            <li><strong>文字/背景深色1</strong>：#212121（近黑色）</li>
                            <li><strong>文字/背景浅色1</strong>：#FFFFFF（白色）</li>
                        </ul>
                    </li>
                    <li>方案名称输入：<strong>"电商团队配色"</strong></li>
                    <li>点击保存</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">自定义主题字体</div>
            <div class="step-card-desc">
                <ol>
                    <li>"设计"选项卡 → <strong>"字体"</strong> → <strong>"自定义字体"</strong></li>
                    <li>标题字体选择：<strong>微软雅黑</strong>（如果有Bold版就选Bold）</li>
                    <li>正文字体选择：<strong>微软雅黑</strong></li>
                    <li>方案名称：<strong>"电商团队字体"</strong></li>
                    <li>点击保存</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">更新母版中的颜色</div>
            <div class="step-card-desc">
                <p>进入母版视图，把之前的颜色更新为新配色：</p>
                <ol>
                    <li>视图 → 幻灯片母版</li>
                    <li>选中主母版上的<strong>底部色带</strong></li>
                    <li>修改填充色为<strong>#FF6B35</strong>（电商橙）</li>
                    <li>检查标题占位符的颜色是否需要更新</li>
                    <li>关闭母版视图</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">制作配色展示页</div>
            <div class="step-card-desc">
                <p>新建一页，制作一个<strong>"团队PPT配色规范"</strong>展示页：</p>
                <ol>
                    <li>标题：<strong>"PPT配色规范"</strong></li>
                    <li>画4个圆角矩形，分别填充为：
                        <ul>
                            <li>主色 #FF6B35（标注：主色 - 标题/色带）</li>
                            <li>辅色 #1A237E（标注：辅色 - 图表/装饰）</li>
                            <li>正文色 #333333（标注：正文 - 文字内容）</li>
                            <li>背景色 #FFFFFF（标注：背景 - 页面底色）</li>
                        </ul>
                    </li>
                    <li>在每个矩形内或旁边标注<strong>颜色名称和色值</strong></li>
                    <li>这就是一个"配色卡"，以后团队成员照着用就行</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">体验取色器</div>
            <div class="step-card-desc">
                <ol>
                    <li>在页面上插入一个新的形状（如圆形）</li>
                    <li>点击<strong>形状填充</strong>的下拉箭头</li>
                    <li>找到<strong>"取色器"</strong>（吸管图标）</li>
                    <li>鼠标变成吸管后，点击页面上<strong>主色色块</strong></li>
                    <li>新形状的颜色就和主色完全一致了</li>
                    <li>试试从其他元素吸取颜色</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">测试配色在图表中的效果</div>
            <div class="step-card-desc">
                <p>新建一页，插入一个柱状图：</p>
                <ol>
                    <li>插入 → 图表 → 柱状图</li>
                    <li>随便填一些数据</li>
                    <li>观察图表自动使用了你设置的<strong>主题颜色</strong></li>
                    <li>如果不满意可以手动调整颜色</li>
                </ol>
                <p>这就是自定义主题颜色的好处——新插入的图表、形状都会自动使用你的品牌色！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">保存主题</div>
            <div class="step-card-desc">
                <p>把当前的主题设置保存下来复用：</p>
                <ul>
                    <li>"设计"选项卡 → 主题区域 → 点击下拉箭头 → <strong>"保存当前主题"</strong></li>
                    <li>起名为 <strong>"电商团队主题"</strong></li>
                    <li>保存后以后新建PPT时可以在主题列表中找到它</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存文件</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>另存为 .potx 模板文件更新模板</li>
                    <li>按 <span class="kbd">F5</span> 放映检查整体效果</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-danger">
            <strong>🚫 配色的常见错误</strong><br>
            1. <strong>颜色太多</strong>：一页PPT上出现7-8种不同的颜色，像彩虹<br>
            2. <strong>红配绿</strong>：除非是圣诞节主题，否则红+绿非常刺眼<br>
            3. <strong>高饱和度大面积</strong>：整个背景都是鲜艳的红色，看两秒眼睛就累<br>
            4. <strong>不统一</strong>：每页的主色都不一样，看起来像几个不同的PPT拼起来的<br>
            5. <strong>忽略投影效果</strong>：在电脑上好看的颜色，投影到幕布上可能偏色
        </div>

        <div class="tip-box tip-info">
            <strong>💡 投影仪上的配色注意事项</strong><br>
            投影仪的显示效果和电脑屏幕有差异：<br>
            • 投影后颜色通常会<strong>变淡/变暗</strong><br>
            • <strong>浅色</strong>在投影上可能看不太清<br>
            • <strong>高对比度</strong>的配色在投影上效果更好<br><br>
            建议：<br>
            • 重要演讲前<strong>提前到现场测试投影效果</strong><br>
            • 背景用<strong>白色</strong>最安全<br>
            • 文字和背景<strong>对比度要高</strong>
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 配色速成秘籍：参考优秀作品</strong><br>
            最快的学习方法就是<strong>模仿</strong>：<br>
            • 看到好看的PPT → 用<strong>取色器</strong>吸取它的颜色<br>
            • 看到好看的网页 → 记下它的配色方案<br>
            • 看到好看的海报 → 分析它用了哪几种颜色<br><br>
            推荐去看看这些网站的设计：<br>
            • <strong>苹果官网</strong>（极简配色的典范）<br>
            • <strong>天猫旗舰店</strong>（电商配色参考）<br>
            • <strong>站酷/花瓣</strong>（设计师社区，搜"PPT配色"有很多灵感）
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 自定义主题颜色的12个位置都有用</strong><br>
            自定义主题颜色时有12个色块要设置，它们分别控制：<br>
            • <strong>深色1/浅色1</strong>：主文字和主背景<br>
            • <strong>深色2/浅色2</strong>：次要文字和次要背景<br>
            • <strong>强调色1-6</strong>：图表、形状、SmartArt等自动使用的颜色序列<br>
            • <strong>超链接/已访问链接</strong>：文字超链接的颜色<br><br>
            其中<strong>强调色1</strong>最重要——它是插入形状和图表时的默认颜色。设为品牌主色就对了！
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '一份PPT中使用的颜色种类建议控制在多少种以内？',
            options: ['2种', '3-4种', '7-8种', '不限制'],
            answer: 1,
            explanation: 'PPT配色建议控制在3-4种颜色：1种主色（60%）、1-2种辅色（30%）、1种点缀色（10%）。颜色太多会显得杂乱不专业。'
        },
        {
            type: 'single',
            question: '在WPS中输入HEX色值（如#FF6B35）应该在哪里操作？',
            options: [
                '直接在幻灯片上输入',
                '颜色选择器 → 更多颜色 → 自定义',
                '文件 → 属性',
                '视图 → 配色'
            ],
            answer: 1,
            explanation: '选择颜色时点击"更多颜色"，在弹出的对话框中切换到"自定义"选项卡，就可以找到HEX（十六进制）输入框来精确输入色值。'
        },
        {
            type: 'single',
            question: '电商促销类PPT最适合用什么颜色作为主色？',
            options: ['蓝色', '灰色', '红色/橙色', '紫色'],
            answer: 2,
            explanation: '红色和橙色传递热情、紧迫感和促销氛围，和电商促销场景最匹配。淘宝、京东的促销页面也大量使用红色和橙色。蓝色更适合商务汇报。'
        },
        {
            type: 'judge',
            question: '一个PPT的每一页都可以使用不同的主色调。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！整个PPT应该使用统一的配色方案。每页颜色都不一样会让PPT看起来不像一个整体，非常不专业。'
        },
        {
            type: 'single',
            question: 'WPS中"取色器"（吸管工具）的作用是什么？',
            options: [
                '从调色板中选择颜色',
                '从屏幕上任意位置吸取精确颜色',
                '自动生成配色方案',
                '删除元素的颜色'
            ],
            answer: 1,
            explanation: '取色器可以让你像吸管一样，从屏幕上任何位置（PPT内或PPT外）点击并获取该位置的精确颜色，用于实现颜色统一。'
        },
        {
            type: 'multiple',
            question: '以下哪些是安全的文字和背景搭配？（多选）',
            options: [
                '白色背景 + 深灰色文字',
                '深蓝背景 + 白色文字',
                '浅黄色背景 + 浅灰色文字',
                '白色背景 + 红色标题'
            ],
            answer: [0, 1, 3],
            explanation: '文字和背景必须有足够的对比度。浅黄+浅灰对比度太低，看不清楚。白+深灰、深蓝+白、白+红都有足够的对比度。'
        },
        {
            type: 'single',
            question: '自定义主题颜色中，哪个位置的颜色最重要？',
            options: ['超链接颜色', '背景浅色2', '强调色1', '文字深色2'],
            answer: 2,
            explanation: '强调色1是最重要的主题色——新插入的形状、图表、SmartArt等都默认使用强调色1。把它设为品牌主色，所有新元素都自动是品牌色。'
        },
        {
            type: 'single',
            question: '"60-30-10配色法则"中，主色应该占整个页面视觉面积的多少？',
            options: ['10%', '30%', '60%', '90%'],
            answer: 2,
            explanation: '60-30-10法则中，主色/中性色占60%（通常是背景色），辅色占30%（标题、色带等），点缀色占10%（按钮、强调数字等）。这个比例看起来最和谐。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：为电商团队定制PPT配色方案
            </div>
            <div class="practice-task-body">
                <p>请完成以下配色定制工作，并制作一个展示PPT：</p>
                <ol>
                    <li>
                        <strong>创建自定义主题颜色</strong><br>
                        从本课提供的5套配色方案中选择一套（或自己搭配），创建自定义主题颜色并保存
                    </li>
                    <li>
                        <strong>创建自定义主题字体</strong><br>
                        标题：微软雅黑Bold，正文：微软雅黑
                    </li>
                    <li>
                        <strong>制作"配色规范"展示页</strong><br>
                        用4-5个色块展示你的配色方案，标注颜色名称、色值、用途
                    </li>
                    <li>
                        <strong>制作至少3页测试PPT</strong><br>
                        使用你的配色方案：
                        <ul>
                            <li>封面页：主色色带 + 标题</li>
                            <li>内容页：包含文字、形状（使用主色和辅色）</li>
                            <li>图表页：插入一个图表，验证图表颜色是否自动使用主题色</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>使用取色器从一张产品图片中提取配色</li>
                    <li>到 colorhunt.co 找一个你喜欢的配色方案并应用</li>
                    <li>保存为主题文件，分享给同学</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 配色的基础知识（色相、饱和度、明度、HEX色值）<br>
            ✅ PPT配色的黄金法则（不超过4色、60-30-10法则）<br>
            ✅ 电商常用配色方案<br>
            ✅ 自定义主题颜色和主题字体<br>
            ✅ 取色器的使用<br>
            ✅ 配色工具的推荐<br><br>
            下一课我们将学习<strong>使用与自制模板</strong>——制作可复用的周报模板，让团队效率翻倍！
        </div>
    `
};
