/**
 * PPT学习站 - 第3课：新建、保存与打开文件
 * 文件路径: js/lessons/lesson03.js
 * 模块：初识WPS演示
 * 任务情境：制作"开学自我介绍"PPT
 */

window.lessonData = {

    scenario: '开学第一周，班主任让每位同学做一个"自我介绍"PPT，下节班会课上台展示。你需要新建一个PPT文件，做好内容后保存好，还要确保在家里和学校都能打开它。今天我们就来学习文件管理的基本功！',

    knowledge: `
        <h3>一、新建演示文稿</h3>
        <p>在WPS演示中，新建文件有以下几种方式：</p>

        <h4>方式一：从启动页新建</h4>
        <p>打开WPS演示后，在启动页可以看到：</p>
        <ul>
            <li><strong>空白演示</strong> —— 一张白纸从零开始（最常用）</li>
            <li><strong>推荐模板</strong> —— WPS自带的精美模板，可以直接使用或修改</li>
            <li><strong>按分类选择</strong> —— 工作汇报、教育培训、商务计划等分类模板</li>
        </ul>

        <h4>方式二：快捷键新建</h4>
        <p>在已打开的WPS演示中，按 <span class="kbd">Ctrl</span> + <span class="kbd">N</span> 即可快速新建一个空白演示文稿。</p>

        <h4>方式三：菜单新建</h4>
        <p>点击 <strong>文件 → 新建</strong>，也可以创建新的演示文稿。</p>

        <h4>方式四：桌面右键新建</h4>
        <p>在桌面或文件夹空白处 <strong>右键 → 新建 → WPS演示文稿</strong>，会直接创建一个文件。</p>

        <div class="tip-box tip-info">
            <strong>💡 模板 vs 空白：怎么选？</strong><br>
            • <strong>新手阶段</strong>：建议先用空白演示，学会基本操作后再尝试模板<br>
            • <strong>赶时间时</strong>：选一个好看的模板直接改内容，效率翻倍<br>
            • <strong>工作中</strong>：很多公司有统一的PPT模板，直接用公司模板就好
        </div>

        <h3>二、保存文件</h3>
        <p>保存是PPT制作中<strong>最重要的操作</strong>，没有之一！学好保存的各种方式，能避免很多"翻车"事故。</p>

        <h4>1. 普通保存（Ctrl + S）</h4>
        <p>这是你用得最多的保存方式：</p>
        <ul>
            <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span>，或点击工具栏的保存按钮 💾</li>
            <li><strong>第一次保存</strong>时会弹出"另存为"对话框，让你选择保存位置和文件名</li>
            <li><strong>之后每次按</strong> <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 就是直接覆盖保存，不会再弹窗</li>
        </ul>

        <h4>2. 另存为（Ctrl + Shift + S）</h4>
        <p>当你需要保存为<strong>不同名字</strong>或<strong>不同位置</strong>时使用：</p>
        <ul>
            <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">Shift</span> + <span class="kbd">S</span>，或点击 <strong>文件 → 另存为</strong></li>
            <li>可以修改文件名、选择保存路径、选择文件格式</li>
            <li>原文件不会被覆盖，相当于"复制一份"</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 职场技巧：版本管理</strong><br>
            在工作中，经常需要反复修改PPT。建议保存时在文件名后加上版本号，比如：<br>
            <code>产品推广方案_v1.pptx</code><br>
            <code>产品推广方案_v2_修改配色.pptx</code><br>
            <code>产品推广方案_v3_终版.pptx</code><br>
            这样即使改坏了也能找回之前的版本！
        </div>

        <h4>3. 文件格式选择</h4>
        <p>保存时要注意文件格式的选择：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">格式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">后缀名</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">什么时候用</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>PPTX</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.pptx</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">通用格式，兼容性最好</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 默认选择这个！</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">DPS</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.dps</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">WPS专用格式</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">不推荐，兼容性差</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">PPT</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.ppt</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">旧版格式</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对方用Office 2003时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">PDF</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.pdf</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">不可编辑，格式固定</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">发给客户/打印时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">图片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.png / .jpg</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">每页变成一张图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">发朋友圈/微信时</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-warning">
            <strong>⚠️ 格式选择原则：</strong><br>
            • <strong>自己编辑用</strong> → 保存为 <code>.pptx</code><br>
            • <strong>发给别人看（不需要修改）</strong> → 导出为 <code>.pdf</code><br>
            • <strong>发到社交媒体</strong> → 导出为图片<br>
            <strong>最重要的是：永远保留一份 .pptx 源文件！</strong>不然以后想修改就没办法了。
        </div>

        <h3>三、打开已有文件</h3>
        <p>打开已有的PPT文件也有多种方式：</p>

        <h4>方式一：双击文件</h4>
        <p>在资源管理器（文件夹）中找到 <code>.pptx</code> 文件，<strong>直接双击</strong>即可用WPS演示打开。这是最简单的方式。</p>

        <h4>方式二：从WPS内部打开</h4>
        <p>在WPS演示中，按 <span class="kbd">Ctrl</span> + <span class="kbd">O</span>（O = Open），或点击 <strong>文件 → 打开</strong>，然后浏览到文件所在位置。</p>

        <h4>方式三：最近使用的文件</h4>
        <p>WPS启动页的<strong>"最近"</strong>列表会显示你最近打开过的文件，直接点击即可快速打开。这个功能在日常工作中非常实用！</p>

        <h4>方式四：拖拽打开</h4>
        <p>把PPT文件直接<strong>拖拽到WPS演示窗口</strong>中，也能打开文件。</p>

        <h3>四、文件保存位置的选择</h3>
        <p>文件保存在哪里也很有讲究：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">保存位置</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">优点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">缺点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">建议</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>桌面</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">方便找到</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">容易堆满、重装系统会丢失</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">临时文件可以放</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>文档文件夹</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">有序管理</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">需要自己建文件夹</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 推荐！养成分类习惯</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>U盘</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">可以带到其他电脑</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">容易丢、容易中毒</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">做备份用，别只存U盘</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>WPS云文档</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">多设备同步、不怕丢</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">需要网络</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 强烈推荐！后面会详细讲</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-success">
            <strong>🎯 文件管理好习惯</strong><br>
            建议在"文档"文件夹下建立这样的结构：<br>
            <code>文档/</code><br>
            <code>├── PPT作业/</code><br>
            <code>│ &nbsp;&nbsp;├── 01-自我介绍/</code><br>
            <code>│ &nbsp;&nbsp;├── 02-产品方案/</code><br>
            <code>│ &nbsp;&nbsp;└── ...</code><br>
            <code>├── 工作文件/</code><br>
            <code>└── 素材库/</code><br>
            养成良好的文件管理习惯，找文件时不再抓狂！
        </div>

        <h3>五、自动保存与恢复</h3>
        <p>WPS演示有一个<strong>自动保存/自动备份</strong>功能，可以在意外关闭时帮你找回文件：</p>
        <ul>
            <li>点击 <strong>文件 → 选项（或设置）→ 备份中心</strong></li>
            <li>可以设置自动保存的时间间隔（建议设为<strong>3-5分钟</strong>）</li>
            <li>如果电脑意外关机，下次打开WPS时会提示你恢复未保存的文件</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚨 但是！</strong>自动保存不是万能的！它有时候恢复不了，有时候恢复出来的是很久之前的版本。<strong>手动 Ctrl + S 才是最可靠的！</strong>说三遍：手动保存！手动保存！手动保存！
        </div>
    `,

    steps: `
        <p>现在我们来动手制作第一个完整的PPT——<strong>"开学自我介绍"</strong>！</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建空白演示文稿</div>
            <div class="step-card-desc">
                <p>打开WPS演示 → 选择<strong>"空白演示"</strong>。你会看到一张有"单击此处添加标题"的幻灯片。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">第一次保存文件</div>
            <div class="step-card-desc">
                <p>在开始做内容之前，<strong>先保存文件</strong>（好习惯从第一步开始）：</p>
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span></li>
                    <li>在弹出的对话框中：
                        <ul>
                            <li><strong>保存位置</strong>：选择"文档"文件夹（或桌面）</li>
                            <li><strong>文件名</strong>：输入 <code>自我介绍-你的名字</code></li>
                            <li><strong>文件格式</strong>：确认是 <code>.pptx</code></li>
                        </ul>
                    </li>
                    <li>点击<strong>"保存"</strong></li>
                </ul>
                <p>注意看标题栏，文件名已经从"演示文稿1"变成了你输入的名字。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">制作封面页（第1页）</div>
            <div class="step-card-desc">
                <p>在第一张幻灯片上：</p>
                <ul>
                    <li>双击"单击此处添加标题" → 输入你的<strong>名字</strong></li>
                    <li>双击"单击此处添加副标题" → 输入<strong>班级和学号</strong>，比如"24级电商6班 124030601"</li>
                </ul>
                <p>输完后按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存一下。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">新增第2页幻灯片</div>
            <div class="step-card-desc">
                <p>现在我们需要添加更多页面。有几种方法：</p>
                <ul>
                    <li><strong>方法一：</strong>点击"开始"选项卡 → 点击<strong>"新建幻灯片"</strong>按钮</li>
                    <li><strong>方法二：</strong>在左侧幻灯片面板的空白处<strong>右键 → 新建幻灯片</strong></li>
                    <li><strong>方法三（推荐）：</strong>按快捷键 <span class="kbd">Ctrl</span> + <span class="kbd">M</span></li>
                </ul>
                <p>新页面会自动出现在当前页面的下方。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">选择幻灯片版式</div>
            <div class="step-card-desc">
                <p>新建幻灯片时，WPS会提供多种<strong>版式</strong>（布局模板）供你选择：</p>
                <ul>
                    <li><strong>标题幻灯片</strong> —— 适合封面页（大标题 + 副标题）</li>
                    <li><strong>标题和内容</strong> —— 最常用！上面标题，下面放内容</li>
                    <li><strong>两栏内容</strong> —— 左右两栏对比展示</li>
                    <li><strong>空白</strong> —— 完全自由布局</li>
                </ul>
                <p>为第2页选择<strong>"标题和内容"</strong>版式。在标题输入"关于我"，内容区随便写几条个人信息。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">继续添加3-5页</div>
            <div class="step-card-desc">
                <p>用同样的方法继续添加页面，建议的内容：</p>
                <ul>
                    <li>第3页：<strong>我的家乡</strong>（简单介绍你的家乡）</li>
                    <li>第4页：<strong>我的爱好</strong>（你喜欢做什么）</li>
                    <li>第5页：<strong>我的电商梦想</strong>（为什么选电商专业）</li>
                    <li>第6页：<strong>��谢大家</strong>（结尾页）</li>
                </ul>
                <p>每做完一页都按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">调整幻灯片顺序</div>
            <div class="step-card-desc">
                <p>如果你觉得某些页面的顺序需要调整：</p>
                <ul>
                    <li>在左侧幻灯片面板中，<strong>按住鼠标左键拖拽</strong>某个缩略图</li>
                    <li>把它拖到想要的位置后松开</li>
                    <li>比如把"我的电商梦想"移到"我的爱好"前面</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">删除多余的幻灯片</div>
            <div class="step-card-desc">
                <p>如果某页不想要了：</p>
                <ul>
                    <li>在左侧面板<strong>右键点击</strong>那个缩略图 → 选择<strong>"删除幻灯片"</strong></li>
                    <li>或者选中缩略图后按 <span class="kbd">Delete</span> 键</li>
                </ul>
                <p>如果误删了，立刻按 <span class="kbd">Ctrl</span> + <span class="kbd">Z</span> 撤销！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">另存为不同格式</div>
            <div class="step-card-desc">
                <p>最后我们来练习另存为功能：</p>
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">Shift</span> + <span class="kbd">S</span></li>
                    <li>把文件名改为 <code>自我介绍-你的名字-备份</code></li>
                    <li>保存到桌面</li>
                </ul>
                <p>现在你有了两份文件：一份在文档文件夹，一份在桌面，互为备份！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">关闭并重新打开</div>
            <div class="step-card-desc">
                <p>验证你的文件保存成功了：</p>
                <ul>
                    <li>关闭WPS演示（点击右上角的 ✕）</li>
                    <li>到保存的位置找到你的文件</li>
                    <li>双击打开，检查内容是否完整</li>
                </ul>
                <p>如果一切正常，恭喜你！你已经学会了文件管理的基本功！</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-danger">
            <strong>🚨 新手最常见的悲剧</strong><br>
            <strong>场景1：</strong>"我做了2个小时的PPT，忘了保存，电脑突然蓝屏了……"<br>
            <strong>场景2：</strong>"我把PPT保存在U盘里，U盘丢了……"<br>
            <strong>场景3：</strong>"我发给老板一个.dps文件，老板打不开……"<br><br>
            <strong>解决方案：</strong><br>
            ① 每3分钟按一次 Ctrl+S<br>
            ② 至少保存在两个地方（本地+云端 或 本地+U盘）<br>
            ③ 永远保存为 .pptx 格式
        </div>

        <div class="tip-box tip-info">
            <strong>💡 快捷键对照表</strong><br>
            <span class="kbd">Ctrl</span> + <span class="kbd">N</span> = <strong>N</strong>ew 新建<br>
            <span class="kbd">Ctrl</span> + <span class="kbd">O</span> = <strong>O</strong>pen 打开<br>
            <span class="kbd">Ctrl</span> + <span class="kbd">S</span> = <strong>S</strong>ave 保存<br>
            <span class="kbd">Ctrl</span> + <span class="kbd">Shift</span> + <span class="kbd">S</span> = <strong>S</strong>ave As 另存为<br>
            <span class="kbd">Ctrl</span> + <span class="kbd">M</span> = 新建幻灯片（M可以记成"More page"）<br><br>
            发现规律了吗？快捷键的字母通常是功能英文单词的首字母！
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 易错点：保存位置搞混了</strong><br>
            很多同学保存时随便选了个位置，后来找不到文件了。教你一招：<br>
            <strong>保存后立刻检查标题栏</strong>——标题栏会显示完整的文件路径，比如"D:\文档\PPT作业\自我介绍.pptx"。记住这个路径，找文件就不迷路了！<br><br>
            另外，WPS的"最近使用"列表也能快速找到之前打开过的文件。
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 高手习惯：定期整理文件</strong><br>
            每周花5分钟整理一下你的PPT文件：<br>
            • 删除不需要的临时文件<br>
            • 给文件起清晰的名字（不要叫"新建演示文稿(1)(2)(3).pptx"）<br>
            • 按项目/日期分类放到不同文件夹<br>
            • 重要文件上传到WPS云文档做备份<br><br>
            电商工作中，你可能一个月要做十几个PPT，如果不整理，后面找文件会崩溃！
        </div>

        <div class="tip-box tip-info">
            <strong>💡 文件命名技巧</strong><br>
            好的文件名应该包含：<strong>主题 + 日期/版本</strong><br>
            ✅ 好的命名：<code>双十一推广方案_2024v2.pptx</code><br>
            ✅ 好的命名：<code>周报_第3周_张三.pptx</code><br>
            ❌ 坏的命名：<code>新建演示文稿.pptx</code><br>
            ❌ 坏的命名：<code>PPT.pptx</code><br>
            ❌ 坏的命名：<code>asdfgh.pptx</code>
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '在WPS演示中，新建空白演示文稿的快捷键是？',
            options: ['Ctrl + O', 'Ctrl + N', 'Ctrl + M', 'Ctrl + S'],
            answer: 1,
            explanation: 'Ctrl + N（N = New）用于新建一个空白演示文稿。Ctrl + O 是打开文件，Ctrl + M 是新建幻灯片（页面），Ctrl + S 是保存。'
        },
        {
            type: 'single',
            question: '以下哪种文件格式兼容性最好，建议作为默认保存格式？',
            options: ['.dps', '.ppt', '.pptx', '.pdf'],
            answer: 2,
            explanation: '.pptx 是目前最通用的演示文稿格式，WPS和PowerPoint都能完美打开。.dps是WPS专用格式兼容性差，.ppt是旧版格式，.pdf不能编辑。'
        },
        {
            type: 'single',
            question: '当你想把文件保存为另一个名字时，应该使用什么操作？',
            options: ['Ctrl + S', '文件 → 另存为', '文件 → 打开', 'Ctrl + N'],
            answer: 1,
            explanation: '"另存为"可以让你修改文件名、保存位置和文件格式，同时保留原文件不被覆盖。快捷键是 Ctrl + Shift + S。'
        },
        {
            type: 'judge',
            question: '把PPT只保存在U盘里就足够安全了。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！U盘容易丢失、损坏或中病毒。重要文件应该至少保存在两个地方（比如本地+U盘，或本地+云端），做好备份。'
        },
        {
            type: 'single',
            question: '新建一张幻灯片（在已有文件中新增一页）的快捷键是？',
            options: ['Ctrl + N', 'Ctrl + M', 'Ctrl + P', 'Ctrl + L'],
            answer: 1,
            explanation: 'Ctrl + M 用于在当前演示文稿中新增一张幻灯片。注意区分：Ctrl + N 是新建一个文件，Ctrl + M 是在文件中新增一页。'
        },
        {
            type: 'multiple',
            question: '以下哪些是打开已有PPT文件的方法？（多选）',
            options: ['在文件夹中双击 .pptx 文件', '在WPS中按 Ctrl + O', '按 Ctrl + N', '把文件拖拽到WPS窗口中'],
            answer: [0, 1, 3],
            explanation: '打开文件的方式有：直接双击文件、在WPS中按Ctrl+O、从"最近使用"列表点击、拖拽文件到WPS窗口。Ctrl+N是新建文件，不是打开文件。'
        },
        {
            type: 'single',
            question: '以下哪个文件名是好的命名习惯？',
            options: ['新建演示文稿(1).pptx', 'PPT.pptx', '双十一推广方案_v2.pptx', 'aaa.pptx'],
            answer: 2,
            explanation: '好的文件命名应该包含主题和版本号/日期，让人一看就知道是什么内容。"双十一推广方案_v2.pptx"清晰明了，其他几个命名都无法体现文件内容。'
        },
        {
            type: 'judge',
            question: 'WPS演示的自动保存功能可以完全代替手动保存（Ctrl+S）。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！自动保存/自动备份功能并不是100%可靠的，有时候恢复的文件可能不完整或版本较旧。养成手动按Ctrl+S的习惯才是最安全的做法。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作"开学自我介绍"PPT
            </div>
            <div class="practice-task-body">
                <p>请独立完成一个至少5页的自我介绍PPT，具体要求如下：</p>
                <ol>
                    <li>
                        <strong>新建文件并正确命名</strong><br>
                        文件名格式：<code>自我介绍-姓名-班级.pptx</code>，例如 <code>自我介绍-张三-24电商6班.pptx</code>
                    </li>
                    <li>
                        <strong>包含至少5页幻灯片</strong><br>
                        参考结构：封面页 → 关于我 → 我的家乡/爱好 → 我的电商梦想 → 结尾页（谢谢大家）
                    </li>
                    <li>
                        <strong>每页都有标题和内容</strong><br>
                        目前只需要输入文字即可，后面的课程会教你美化排版
                    </li>
                    <li>
                        <strong>尝试不同的版式</strong><br>
                        至少使用2种不同的幻灯片版式（如"标题幻灯片"和"标题和内容"）
                    </li>
                    <li>
                        <strong>正确保存文件</strong><br>
                        保存为 .pptx 格式，保存到"文档"文件夹中。再另存为一份备份到桌面
                    </li>
                    <li>
                        <strong>验证文件</strong><br>
                        关闭WPS → 重新打开文件 → 确认内容完整
                    </li>
                </ol>
                <p><strong>加分项：</strong>尝试调整幻灯片的顺序（拖拽缩略图），体验删除和撤销操作。</p>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 4种新建演示文稿的方法<br>
            ✅ 保存/另存为的操作与区别<br>
            ✅ 不同文件格式的选择与使用场景<br>
            ✅ 打开已有文件的多种方式<br>
            ✅ 文件管理的好习惯<br>
            ✅ 新增/删除/调整幻灯片顺序<br><br>
            现在你已经能独立创建和管理PPT文件了！下一课我们将深入学习<strong>文本框的使用</strong>，让你的PPT内容更丰富！
        </div>
    `
};