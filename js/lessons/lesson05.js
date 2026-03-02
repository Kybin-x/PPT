/**
 * PPT学习站 - 第5课：字体、字号、颜色与段落
 * 文件路径: js/lessons/lesson05.js
 * 模块：文字与排版
 * 任务情境：美化产品文案排版
 */

window.lessonData = {

    scenario: '你的店铺运营主管看了你做的618标语卡片，说："内容没问题，但文字太单调了，字体不够醒目，排版也不够好看。你重新美化一下，让文字更有冲击力！"今天我们就来学习如何让PPT中的文字变得又好看又专业。',

    knowledge: `
        <h3>一、字体（Font）</h3>
        <p>字体是文字的"外衣"，不同的字体传递不同的感觉。选对字体，PPT的气质立刻提升一个档次。</p>

        <h4>1. 如何更改字体</h4>
        <ul>
            <li><strong>方法一：</strong>选中文字 → 在"开始"选项卡的<strong>字体下拉框</strong>中选择</li>
            <li><strong>方法二：</strong>选中文字 → 右键 → <strong>字体</strong> → 在对话框中设置</li>
            <li><strong>方法三：</strong>选中文字 → 直接在字体框中<strong>输入字体名称</strong>（比如打"微软"就会自动过滤出微软雅黑）</li>
        </ul>

        <h4>2. 常用字体推荐</h4>
        <p>不需要记住几百种字体，掌握以下几类就够用了：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">推荐字体</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">风格感觉</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>正文首选</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">微软雅黑、思源黑体</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">清晰、现代、百搭</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">几乎所有PPT</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>标题加粗</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">微软雅黑 Bold、阿里巴巴普惠体</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">醒目、有力量感</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题、口号、重点</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>文艺/古风</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">华文行楷、方正楷体</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">优雅、传统</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">中国风、文化类PPT</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>英文首选</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Arial、Calibri</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">简洁、国际化</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">英文内容、跨境电商</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>数字/数据</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">DIN、Impact、Arial Black</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">粗壮、有冲击力</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">销售额、折扣数字</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-danger">
            <strong>🚫 字体使用的三大禁忌：</strong><br>
            1. <strong>一页PPT不要超过3种字体</strong>：太多字体会显得杂乱无章<br>
            2. <strong>不要用宋体做PPT</strong>：宋体是印刷字体，在屏幕上显示效果不好，尤其是小字号<br>
            3. <strong>注意字体版权</strong>：商用PPT要用免费字体（微软雅黑、思源黑体、阿里巴巴普惠体都是免费的）
        </div>

        <div class="tip-box tip-success">
            <strong>🎯 电商PPT字体万能公式：</strong><br>
            <strong>标题：微软雅黑 Bold（加粗）</strong><br>
            <strong>正文：微软雅黑 Regular（常规）</strong><br>
            <strong>数字：Arial Black 或 Impact</strong><br>
            这三种字体搭配，能搞定90%的电商PPT！
        </div>

        <h3>二、字号（Font Size）</h3>
        <p>字号就是文字的大小，单位是<strong>"磅"（pt）</strong>。字号的选择直接影响信息的层级关系。</p>

        <h4>1. 如何调整字号</h4>
        <ul>
            <li>选中文字 → 在"开始"选项卡的<strong>字号框</strong>中输入数字或从下拉列表选择</li>
            <li>快捷键：<span class="kbd">Ctrl</span> + <span class="kbd">]</span> 增大字号，<span class="kbd">Ctrl</span> + <span class="kbd">[</span> 减小字号</li>
            <li>快捷键：<span class="kbd">Ctrl</span> + <span class="kbd">Shift</span> + <span class="kbd">></span> 快速增大，<span class="kbd">Ctrl</span> + <span class="kbd">Shift</span> + <span class="kbd"><</span> 快速减小</li>
        </ul>

        <h4>2. 字号参考标准</h4>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">元素</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">建议字号</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">封面大标题</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>36-54pt</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">醒目、一眼看清</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">页面标题</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>28-36pt</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">每页顶部的标题</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">正文内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>18-24pt</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">主要阅读内容</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">辅助说明</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>14-16pt</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">注释、来源等</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">促销数字/价格</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>54-96pt</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">比如"5折""¥99"要特别大</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-warning">
            <strong>⚠️ 黄金法则：正文字号不低于18pt！</strong><br>
            如果你的PPT要投影到大屏幕上展示，文字太小后排的人根本看不清。<strong>低于14pt的文字</strong>在投影时几乎无法辨认。如果你发现一页内容放不下，不是字号要缩小，而是<strong>内容要精简</strong>！
        </div>

        <h3>三、字体颜色</h3>
        <p>颜色是PPT视觉表达中最有力的工具。用好颜色，能让重点信息"跳"出来。</p>

        <h4>1. 如何设置字体颜色</h4>
        <ul>
            <li>选中文字 → "开始"选项卡 → 点击<strong>"字体颜色"</strong>按钮旁的下拉箭头 → 选择颜色</li>
            <li>可以从预设颜色中选择，也可以点击<strong>"更多颜色"</strong>自定义</li>
        </ul>

        <h4>2. 电商PPT常用配色</h4>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">颜色</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">色值参考</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">常见用途</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#E53935;">🔴 红色</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">#E53935</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">促销价格、紧急提示、热卖标签</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#FF6D00;">🟠 橙色</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">#FF6D00</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">活动主题、优惠信息</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#333333;">⬛ 深灰/黑</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">#333333</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">正文文字（不要用纯黑#000000）</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#757575;">⬜ 浅灰</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">#757575</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">辅助文字、注释</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span style="color:#FFFFFF; background:#333; padding:2px 6px; border-radius:3px;">⚪ 白色</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">#FFFFFF</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">深色背景上的文字</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 配色口诀：</strong><br>
            <strong>"正文用深灰，标题加点彩，重点用红橙，背景别太嗨"</strong><br>
            • 正文不要用纯黑（#000000），用深灰（#333333）更柔和<br>
            • 标题可以用品牌色或主题色<br>
            • 价格/促销用红色或橙色<br>
            • 背景颜色不要太花哨，白色或浅灰色最安全
        </div>

        <h3>四、文字效果：加粗、斜体、下划线等</h3>
        <p>除了字体、字号、颜色之外，还有一些常用的文字效果：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">效果</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">快捷键</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">用途</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">使用建议</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>加粗 B</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">B</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">强调重要内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 常用！标题必加粗</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><em>斜体 I</em></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">I</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">引用、补充说明</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">中文慎用，效果不好</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><u>下划线 U</u></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">U</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">强调、标记链接</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">少用，用颜色强调更好</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">文字阴影</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">工具栏按钮</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">让文字更立体</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题可适当使用</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">字符间距</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">字体对话框</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">调整字与字的间距</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题适当加宽更大气</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-success">
            <strong>🎯 字符间距的秘密武器</strong><br>
            很多人不知道，调整<strong>字符间距</strong>（字与字之间的距离）可以让标题瞬间变得高级！<br>
            操作：选中标题文字 → 右键 → 字体 → "字符间距"选项卡 → 间距选择<strong>"加宽"</strong>，设为<strong>2-5磅</strong>。<br>
            对比效果：<br>
            普通标题：<strong>618大促来了</strong><br>
            加宽间距：<strong style="letter-spacing:4px;">618大促来了</strong><br>
            是不是瞬间高级了？
        </div>

        <h3>五、段落设置</h3>
        <p>段落设置决定了文字的排列方式和间距，是排版的核心技能。</p>

        <h4>1. 水平对齐方式</h4>
        <ul>
            <li><strong>左对齐</strong>（<span class="kbd">Ctrl</span> + <span class="kbd">L</span>）—— 默认方式，适合正文内容</li>
            <li><strong>居中对齐</strong>（<span class="kbd">Ctrl</span> + <span class="kbd">E</span>）—— 适合标题、封面文字</li>
            <li><strong>右对齐</strong>（<span class="kbd">Ctrl</span> + <span class="kbd">R</span>）—— 适合日期、署名</li>
            <li><strong>两端对齐</strong>（<span class="kbd">Ctrl</span> + <span class="kbd">J</span>）—— 让每行左右都对齐，适合大段文字</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 对齐选择原则：</strong><br>
            • 标题 → <strong>居中对齐</strong><br>
            • 正文（多行文字）→ <strong>左对齐</strong>（最易阅读）<br>
            • 日期、页码 → <strong>右对齐</strong><br>
            • 千万不要把正文居中对齐！多行文字居中很难看！
        </div>

        <h4>2. 行间距</h4>
        <p>行间距是上下两行文字之间的距离，直接影响阅读舒适度：</p>
        <ul>
            <li>选中文字 → "开始"选项卡 → 点击<strong>"行距"</strong>按钮</li>
            <li>可以选择预设值：1.0、1.5、2.0、2.5、3.0</li>
            <li>也可以点击"行距选项"自定义精确数值</li>
        </ul>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">行距</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">效果</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1.0倍</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">行与行很紧密</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">很少用，太挤了</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>1.2-1.5倍</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">适中，阅读舒适</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ PPT正文推荐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1.5-2.0倍</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">比较松散</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">内容较少的页面</td>
                </tr>
            </tbody>
        </table>

        <h4>3. 段前/段后间距</h4>
        <p>段前间距和段后间距是<strong>段落与段落之间</strong>的距离，和行间距不同：</p>
        <ul>
            <li>行间距 = 同一段落内行与行的距离</li>
            <li>段间距 = 不同段落之间的距离</li>
        </ul>
        <p>设置方法：选中段落 → 开始选项卡 → 行距 → 行距选项 → 设置<strong>段前</strong>和<strong>段后</strong>的数值。</p>

        <div class="tip-box tip-warning">
            <strong>⚠️ 新手常见错误：用回车键制造间距</strong><br>
            很多同学想让两段文字之间有空隙，就狂按回车键添加空行。这样做的问题是：<br>
            • 位置不精确<br>
            • 后面修改内容时，空行会乱跑<br>
            • 不专业<br><br>
            <strong>正确做法：</strong>用段前/段后间距来控制段落之间的距离！
        </div>

        <h3>六、格式刷——快速复制格式</h3>
        <p>当你费劲把一段文字的字体、字号、颜色、间距都设好了，又要把同样的格式应用到其他文字上，怎么办？一个一个重新设置太累了！这时候就需要<strong>格式刷</strong>！</p>

        <ul>
            <li><strong>单击格式刷</strong> → 刷一次格式 → 自动取消</li>
            <li><strong>双击格式刷</strong> → 连续刷多次格式 → 按 <span class="kbd">Esc</span> 取消</li>
        </ul>
        <p>操作步骤：</p>
        <ol>
            <li>选中<strong>已经设好格式的文字</strong></li>
            <li>点击"开始"选项卡的<strong>"格式刷"</strong>按钮 🖌️（双击可连续刷）</li>
            <li>去选中（框选或点击）<strong>需要应用格式的文字</strong></li>
            <li>格式瞬间复制过去了！</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 格式刷是效率神器！</strong><br>
            在工作中做PPT，你经常需要让多个页面的标题格式保持一致。与其每页都手动设置字体、字号、颜色，不如设好一个标题，然后<strong>双击格式刷</strong>，依次到每一页去刷格式。5分钟的工作10秒搞定！
        </div>
    `,

    steps: `
        <p>现在我们来美化上节课做的<strong>"618标语卡片"</strong>，让它从"能看"变成"好看"。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">打开上节课的文件</div>
            <div class="step-card-desc">
                <p>打开 <code>618标语卡片.pptx</code>，如果找不到就新建一个，重新输入标语内容。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">美化主标语——字体、字号、颜色</div>
            <div class="step-card-desc">
                <p>选中主标语"618年中大促 疯狂来袭"的文字：</p>
                <ul>
                    <li><strong>字体</strong>：改为 <strong>微软雅黑</strong>（或阿里巴巴普惠体 Bold）</li>
                    <li><strong>字号</strong>：设为 <strong>54pt</strong></li>
                    <li><strong>加粗</strong>：按 <span class="kbd">Ctrl</span> + <span class="kbd">B</span></li>
                    <li><strong>颜色</strong>：设为 <strong>红色</strong>（#E53935）</li>
                    <li><strong>对齐</strong>：居中对齐（<span class="kbd">Ctrl</span> + <span class="kbd">E</span>）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">调整字符间距</div>
            <div class="step-card-desc">
                <p>让标题更大气：</p>
                <ul>
                    <li>选中主标语文字</li>
                    <li>右键 → <strong>字体</strong></li>
                    <li>切换到 <strong>"字符间距"</strong> 选项卡</li>
                    <li>间距选 <strong>"加宽"</strong>，磅值设为 <strong>3</strong></li>
                    <li>点击确定，观察变化</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">美化活动时间文字</div>
            <div class="step-card-desc">
                <p>选中"6月1日-6月18日 限时抢购"：</p>
                <ul>
                    <li><strong>字体</strong>：微软雅黑</li>
                    <li><strong>字号</strong>：<strong>24pt</strong></li>
                    <li><strong>颜色</strong>：<strong>深灰色</strong>（#333333）</li>
                    <li><strong>对齐</strong>：居中</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">突出"618"数字</div>
            <div class="step-card-desc">
                <p>在主标语中，只选中<strong>"618"</strong>这三个字符（不要选其他文字）：</p>
                <ul>
                    <li><strong>字号</strong>：改为 <strong>72pt</strong>（比其他文字大一号）</li>
                    <li><strong>字体</strong>：改为 <strong>Arial Black</strong> 或 <strong>Impact</strong>（数字用英文字体更好看）</li>
                    <li><strong>颜色</strong>：改为<strong>亮橙色</strong>（#FF6D00）</li>
                </ul>
                <p>这样"618"就特别突出了——<strong>在同一个文本框里可以给不同文字设不同格式</strong>！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">美化三个优惠信息框</div>
            <div class="step-card-desc">
                <p>依次设置"满200减30""跨店满减""限时秒杀"的文字：</p>
                <ul>
                    <li><strong>字体</strong>：微软雅黑 Bold</li>
                    <li><strong>字号</strong>：<strong>20pt</strong></li>
                    <li><strong>颜色</strong>：<strong>白色</strong>（#FFFFFF）—— 因为背景是红色</li>
                    <li><strong>对齐</strong>：居中</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">使用格式刷统一格式</div>
            <div class="step-card-desc">
                <p>假设第一个优惠框的文字格式已经设好了，用格式刷给其他两个刷上相同格式：</p>
                <ul>
                    <li>选中第一个框内的文字</li>
                    <li><strong>双击</strong> "开始"选项卡的<strong>格式刷</strong>按钮</li>
                    <li>依次选中第二个、第三个框内的文字</li>
                    <li>按 <span class="kbd">Esc</span> 退出格式刷</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">设置行间距</div>
            <div class="step-card-desc">
                <p>如果某个文本框内有多行文字，调整行间距让它更舒适：</p>
                <ul>
                    <li>选中文本框中的所有文字（<span class="kbd">Ctrl</span> + <span class="kbd">A</span>）</li>
                    <li>开始 → 行距 → 选择 <strong>1.2 或 1.5</strong></li>
                    <li>对比修改前后的效果</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">新建第2页——产品文案排版练习</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">M</span> 新建一页。在这页练习产品文案排版：</p>
                <ul>
                    <li>标题文本框：<strong>"爆款推荐"</strong>（36pt，微软雅黑Bold，居中，红色）</li>
                    <li>产品名文本框：<strong>"无线蓝牙耳机 Pro Max"</strong>（24pt，加粗，深灰色，左对齐）</li>
                    <li>描述文本框：写2-3行产品描述（18pt，常规，浅灰色，左对齐，行距1.5）</li>
                    <li>价格文本框：<strong>"¥199"</strong>（48pt，Arial Black，红色）</li>
                    <li>原价文本框：<strong>"原价¥399"</strong>（16pt，灰色，加删除线）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并预览</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 全屏放映</li>
                    <li>对比美化前后的效果，感受文字排版的力量！</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 字体安装与嵌入</strong><br>
            如果你在自己电脑上安装了漂亮的字体，但发到别人电脑上可能变成默认字体（因为对方没安装）。解决方案：<br>
            • <strong>方案一：</strong>保存时勾选 <strong>"嵌入字体"</strong>（文件 → 选项 → 保存 → 嵌入字体），但会增大文件体积<br>
            • <strong>方案二：</strong>导出为 <strong>PDF</strong>，PDF中字体不会变化<br>
            • <strong>方案三：</strong>只用<strong>系统自带字体</strong>（微软雅黑、Arial等），最安全
        </div>

        <div class="tip-box tip-danger">
            <strong>🚫 排版四大忌</strong><br>
            1. <strong>字号不统一</strong>：同级别的内容字号要一样，不要这个标题32pt那个标题28pt<br>
            2. <strong>颜色太多</strong>：一页PPT不要超过3种文字颜色<br>
            3. <strong>正文居中</strong>：多行正文千万不要居中对齐，看着很别扭<br>
            4. <strong>行间距太小</strong>：文字挤在一起像蚂蚁爬，设置1.2-1.5倍行距
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 大小对比=视觉层次</strong><br>
            好的排版最核心的技巧就是<strong>"大小对比"</strong>：<br>
            • <strong>最重要的信息</strong> → 最大的字号<br>
            • <strong>次要信息</strong> → 中等字号<br>
            • <strong>辅助信息</strong> → 最小字号<br><br>
            比如促销PPT中：<br>
            <strong style="font-size:24px;">5折</strong> &gt; <span style="font-size:16px;">限时特惠</span> &gt; <span style="font-size:12px; color:#999;">活动截止12月31日</span><br>
            这样观众一眼就知道重点是什么！
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 中英文混排技巧</strong><br>
            跨境电商PPT经常会有中英文混排的情况。建议：<br>
            • 中文用微软雅黑，英文用 Arial 或 Calibri<br>
            • WPS支持分别设置中文字体和英文字体（字体对话框中有两个选项）<br>
            • 中英文之间留一个空格，看起来更舒服
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '以下哪种字体最适合做PPT正文？',
            options: ['宋体', '华文行楷', '微软雅黑', 'Comic Sans'],
            answer: 2,
            explanation: '微软雅黑是最适合在屏幕上显示的中文字体，清晰、现代、易读。宋体是印刷字体，屏幕显示效果差；华文行楷适合装饰性文字；Comic Sans不适合正式场合。'
        },
        {
            type: 'single',
            question: 'PPT正文的字号建议不低于多少？',
            options: ['10pt', '14pt', '18pt', '28pt'],
            answer: 2,
            explanation: 'PPT正文字号建议不低于18pt。如果要投影展示，太小的文字后排观众看不清。如果一页内容放不下，应该精简内容而不是缩小字号。'
        },
        {
            type: 'single',
            question: '加粗文字的快捷键是什么？',
            options: ['Ctrl + A', 'Ctrl + B', 'Ctrl + C', 'Ctrl + D'],
            answer: 1,
            explanation: 'Ctrl + B（B = Bold）是加粗文字的快捷键。Ctrl + A 是全选，Ctrl + C 是复制，Ctrl + D 是复制对象。'
        },
        {
            type: 'single',
            question: '正文文字推荐使用什么颜色？',
            options: ['纯黑 #000000', '深灰 #333333', '红色 #E53935', '白色 #FFFFFF'],
            answer: 1,
            explanation: '正文推荐使用深灰色（#333333），而不是纯黑（#000000）。深灰色看起来更柔和舒适，不会太刺眼。红色适合强调，白色用于深色背景。'
        },
        {
            type: 'judge',
            question: '一页PPT中可以使用5种以上的字体来让页面更丰富。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！一页PPT不应超过3种字体。字体太多会让页面显得杂乱不专业。建议标题用一种字体，正文用一种字体，特殊数字可以用第三种字体。'
        },
        {
            type: 'single',
            question: '格式刷的作用是什么？',
            options: ['清除文字格式', '复制文字内容', '复制文字格式到其他文字', '给文字加特效'],
            answer: 2,
            explanation: '格式刷可以复制一段文字的格式（字体、字号、颜色等），然后应用到其他文字上。单击格式刷刷一次，双击格式刷可以连续刷多次。'
        },
        {
            type: 'multiple',
            question: '以下哪些是调整文字水平对齐方式的快捷键？（多选）',
            options: ['Ctrl + L 左对齐', 'Ctrl + E 居中', 'Ctrl + R 右对齐', 'Ctrl + B 加粗'],
            answer: [0, 1, 2],
            explanation: 'Ctrl+L 左对齐（Left），Ctrl+E 居中（Center 的 E？实际是传统习惯），Ctrl+R 右对齐（Right），Ctrl+J 两端对齐。Ctrl+B 是加粗，不是对齐。'
        },
        {
            type: 'single',
            question: '以下哪个做法是错误的排版习惯？',
            options: ['标题设为居中对齐', '多行正文设为左对齐', '用段间距控制段落之间的距离', '多行正文设为居中对齐'],
            answer: 3,
            explanation: '多行正文不应该居中对齐！居中对齐会导致每行文字左右参差不齐，阅读起来很不舒服。多行正文应该使用左对齐。标题居中是可以的。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：美化产品文案排版
            </div>
            <div class="practice-task-body">
                <p>请制作一个包含2页的PPT，展示你的排版功力：</p>
                <ol>
                    <li>
                        <strong>第1页：美化后的618标语卡片</strong><br>
                        要求使用至少2种字体、3种字号、2种颜色，标题要有字符间距加宽效果
                    </li>
                    <li>
                        <strong>第2页：产品信息排版</strong><br>
                        包含以下元素：
                        <ul>
                            <li>页面标题（36pt，加粗，居中）</li>
                            <li>产品名称（24pt，加粗，左对齐）</li>
                            <li>产品描述（18pt，常规，左对齐，行距1.5）</li>
                            <li>促销价格（48pt以上，红色或橙色，数字用英文字体）</li>
                            <li>原价（16pt，灰色，加删除线）</li>
                        </ul>
                    </li>
                    <li>
                        <strong>使用格式刷</strong><br>
                        至少使用一次格式刷来统一不同文本框的格式
                    </li>
                </ol>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>试着用不同的行间距对比效果（1.0 vs 1.5 vs 2.0）</li>
                    <li>在同一个文本框内给不同文字设置不同的字号和颜色</li>
                    <li>给标题加文字阴影效果</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 选择合适的字体及字体搭配<br>
            ✅ 设置字号并建立信息层级<br>
            ✅ 字体颜色的选择与搭配<br>
            ✅ 加粗、斜体、字符间距等文字效果<br>
            ✅ 水平对齐方式的选择原则<br>
            ✅ 行间距与段间距的调整<br>
            ✅ 格式刷的使用技巧<br><br>
            下一课我们将学习<strong>项目符号与编号</strong>，让内容条理更清晰！
        </div>
    `
};
