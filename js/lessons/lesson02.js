/**
 * PPT学习站 - 第2课：界面认识与基本操作
 * 文件路径: js/lessons/lesson02.js
 * 模块：初识WPS演示
 * 任务情境：熟悉工作台
 */

window.lessonData = {

    scenario: '上一课我们了解了什么是演示文稿，今天正式走进WPS演示的"驾驶舱"！就像学开车要先认识方向盘、油门、刹车一样，做PPT之前，你得先认识WPS演示的各个功能区域。别担心，比学开车简单多了！',

    knowledge: `
        <h3>一、启动WPS演示</h3>
        <p>打开WPS演示有几种常用方法：</p>
        <ul>
            <li><strong>方法一：</strong>双击桌面上的 <strong>WPS Office</strong> 图标 → 选择"演示"</li>
            <li><strong>方法二：</strong>点击开始菜单 → 搜索"WPS 演示" → 点击打开</li>
            <li><strong>方法三：</strong>直接双击一个 <code>.pptx</code> 文件</li>
            <li><strong>方法四：</strong>右键桌面空白处 → 新建 → WPS演示文稿</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 小贴士：</strong>建议在桌面创建一个WPS演示的快捷方式，以后每次打开就更方便了。右键WPS程序 → 发送到 → 桌面快捷方式。
        </div>

        <h3>二、WPS演示的界面全景</h3>
        <p>打开WPS演示后，你会看到一个完整的工作界面。我们把它从上到下拆解开来认识：</p>

        <div class="img-placeholder">
            <div class="img-icon">🖥️</div>
            <p>WPS演示界面全景示意</p>
            <p style="font-size: var(--text-xs); margin-top: 8px;">
                ┌──────────────────────────────────────┐<br>
                │ &nbsp;&nbsp;① 标题栏 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                ├──────────────────────────────────────┤<br>
                │ &nbsp;&nbsp;② 菜单栏 / 选项卡 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                ├──────────────────────────────────────┤<br>
                │ &nbsp;&nbsp;③ 工具栏 / 功能区 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                ├─────┬────────────────────────────────┤<br>
                │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                │ &nbsp;④ &nbsp;│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⑤ 编辑区 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                │幻灯片│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（当前幻灯片） &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                │面板  │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                │ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                ├─────┴────────────────────────────────┤<br>
                │ &nbsp;&nbsp;⑥ 备注栏 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                ├──────────────────────────────────────┤<br>
                │ &nbsp;&nbsp;⑦ 状态栏 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│<br>
                └──────────────────────────────────────┘
            </p>
        </div>

        <h4>① 标题栏</h4>
        <p>位于窗口最顶部，显示当前文件的名称（比如"演示文稿1"）。如果文件还没保存，会显示默认名称。左侧有<strong>快速访问工具栏</strong>（常用按钮如保存、撤销），右侧有窗口的最小化、最大化、关闭按钮。</p>

        <h4>② 菜单栏（选项卡）</h4>
        <p>这是WPS演示最核心的导航区域，包含多个选项卡：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">选项卡</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">主要功能</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">你什么时候会用到</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>文件</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">新建、打开、保存、导出、打印</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">开始或结束工作时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>开始</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">字体、段落、新建幻灯片、排列</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">最常用！编辑文字时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>插入</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">图片、形状、图表、视频、音频</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">添加各种素材时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>设计</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">主题、配色、幻灯片大小</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">美化PPT整体风格时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>动画</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">添加动画效果、设置动画时间</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">让元素动起来时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>切换</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">页与页之间的过渡效果</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">翻页要更酷炫时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>放映</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">放映设置、排练计时</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">要展示PPT时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>视图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">切换视图模式、显示/隐藏面板</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">调整工作界面时</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 记忆口诀：</strong>"文开插设动切放视"——<strong>文</strong>件<strong>开</strong>始<strong>插</strong>入<strong>设</strong>计<strong>动</strong>画<strong>切</strong>换<strong>放</strong>映<strong>视</strong>图。记住这8个选项卡的顺序，你就能快速找到任何功能！
        </div>

        <h4>③ 工具栏（功能区/Ribbon）</h4>
        <p>点击不同的选项卡，下方的工具栏会显示对应的功能按钮。比如点击"开始"选项卡，就会看到字体大小、加粗、对齐方式等按钮。这个区域是你使用频率最高的地方。</p>

        <h4>④ 幻灯片面板（缩略图）</h4>
        <p>位于左侧，以缩略图的形式显示所有幻灯片。你可以：</p>
        <ul>
            <li><strong>单击</strong>某个缩略图 → 跳转到该页编辑</li>
            <li><strong>右键</strong>缩略图 → 出现复制、删除、移动等操作</li>
            <li><strong>拖拽</strong>缩略图 → 调整幻灯片的顺序</li>
        </ul>

        <h4>⑤ 编辑区（工作区）</h4>
        <p>界面中央最大的区域，显示当前正在编辑的那一张幻灯片。你所有的文字输入、图片插入、排版操作都在这个区域完成。</p>

        <h4>⑥ 备注栏</h4>
        <p>位于编辑区下方，可以给当前幻灯片添加备注文字。这些备注在放映时<strong>不会显示给观众</strong>，只有演讲者自己能看到，非常适合写提词和要点。</p>

        <div class="tip-box tip-success">
            <strong>🎯 职场技巧：</strong>很多职场高手会在备注栏写上"这页要讲什么""大概讲2分钟"等提示信息，这样汇报时就不会忘词了。演讲者视图（后面课程会讲）可以让你一边放映一边看备注。
        </div>

        <h4>⑦ 状态栏</h4>
        <p>位于窗口最底部，显示当前的页码（如"第1张/共5张"）、语言设置等。右下角还有三个<strong>视图切换按钮</strong>和<strong>缩放滑块</strong>：</p>
        <ul>
            <li><strong>普通视图</strong> —— 默认的编辑模式（最常用）</li>
            <li><strong>幻灯片浏览视图</strong> —— 以缩略图方式查看所有页面，方便调整顺序</li>
            <li><strong>阅读视图</strong> —— 在窗口内预览放映效果</li>
            <li><strong>缩放滑块</strong> —— 放大或缩小编辑区的显示比例</li>
        </ul>

        <h3>三、鼠标在WPS演示中的不同作用</h3>
        <p>鼠标在PPT中的操作比在Word中更丰富，因为PPT是一个"画布型"软件：</p>
        <ul>
            <li><strong>单击</strong> —— 选中对象（文本框、图片等）</li>
            <li><strong>双击</strong> —— 进入编辑模式（比如双击文本框可以输入文字）</li>
            <li><strong>右键</strong> —— 弹出快捷菜单（超级有用！很多隐藏功能在这里）</li>
            <li><strong>拖拽</strong> —— 移动对象位置、调整对象大小</li>
            <li><strong>滚轮</strong> —— 上下滚动页面 / 按住 <span class="kbd">Ctrl</span> + 滚轮 = 缩放</li>
        </ul>

        <h3>四、必须记住的快捷键</h3>
        <p>掌握这些快捷键，你的操作速度会快2倍以上：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">快捷键</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">功能</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">使用频率</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">S</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">保存文件</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐⭐ 必须随时按！</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">Z</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">撤销操作</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐⭐ 做错了就按它</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">Y</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">恢复/重做</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐ 撤销多了就用它</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">C</span> / <span class="kbd">V</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">复制 / 粘贴</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl</span> + <span class="kbd">A</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">全选（当前页所有对象）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Delete</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">删除选中的对象</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">F5</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">从头开始放映</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Shift</span> + <span class="kbd">F5</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">从当前页开始放映</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><span class="kbd">Esc</span></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">退出放映 / 取消选择</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-danger">
            <strong>🚨 最重要的快捷键：</strong><span class="kbd">Ctrl</span> + <span class="kbd">S</span>（保存）和 <span class="kbd">Ctrl</span> + <span class="kbd">Z</span>（撤销）！<br>
            养成随手按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 的习惯，否则电脑死机或断电时，你几个小时的工作就白费了！血泪教训！
        </div>
    `,

    steps: `
        <p>现在让我们动手操作一下，熟悉WPS演示的界面：</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">打开WPS演示并新建空白文档</div>
            <div class="step-card-desc">
                <p>双击桌面的WPS图标 → 在启动页选择<strong>"新建空白演示"</strong>。你会看到一个只有一页幻灯片的空白文档。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">逐个点击选项卡，观察工具栏变化</div>
            <div class="step-card-desc">
                <p>依次点击顶部的每个选项卡：<strong>文件 → 开始 → 插入 → 设计 → 动画 → 切换 → 放映 → 视图</strong>。</p>
                <p>注意观察：每点击一个选项卡，下方工具栏里的按钮都会变化。这就是<strong>"功能区"</strong>的切换方式。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">试试在编辑区操作</div>
            <div class="step-card-desc">
                <p>在中央编辑区你会看到"单击此处添加标题"的提示：</p>
                <ul>
                    <li><strong>单击</strong>它 → 出现文本框边框（选中状态）</li>
                    <li><strong>再单击</strong>或<strong>双击</strong> → 光标出现，可以输入文字</li>
                    <li>随便输入一些文字，比如"我的第一个PPT"</li>
                    <li>点击编辑区<strong>空白处</strong> → 取消选中</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">体验缩放功能</div>
            <div class="step-card-desc">
                <p>在窗口右下角找到缩放滑块：</p>
                <ul>
                    <li>拖动滑块 → 放大或缩小编辑区的显示</li>
                    <li>或者按住 <span class="kbd">Ctrl</span> + 鼠标滚轮 → 快速缩放</li>
                    <li>试试放大到150%看看细节，再缩小到50%看看全局</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">切换视图模式</div>
            <div class="step-card-desc">
                <p>在状态栏右下角找到三个视图按钮，逐个点击体验：</p>
                <ul>
                    <li><strong>普通视图</strong>（默认）—— 左侧有缩略图，中间是编辑区</li>
                    <li><strong>幻灯片浏览</strong> —— 所有幻灯片以缩略图排列，适合调整顺序</li>
                    <li><strong>阅读视图</strong> —— 在窗口内预览放映效果</li>
                </ul>
                <p>最后切回<strong>普通视图</strong>，这是日常编辑最常用的模式。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">体验撤销与恢复</div>
            <div class="step-card-desc">
                <p>现在来感受一下最强大的"后悔药"：</p>
                <ul>
                    <li>在标题文本框里输入一些文字</li>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">Z</span> → 文字被撤销了！</li>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">Y</span> → 文字又恢复了！</li>
                    <li>可以连续按 <span class="kbd">Ctrl</span> + <span class="kbd">Z</span> 撤销多步操作</li>
                </ul>
                <p>记住：不管做错了什么，<strong>撤销大法好</strong>！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">试试放映功能</div>
            <div class="step-card-desc">
                <p>虽然我们只有一页简单内容，但可以先体验放映：</p>
                <ul>
                    <li>按 <span class="kbd">F5</span> → 全屏放映开始！</li>
                    <li>你输入的标题会全屏显示</li>
                    <li>按 <span class="kbd">Esc</span> → 退出放映回到编辑界面</li>
                </ul>
                <p>是不是有那味儿了？想象一下你站在讲台上，屏幕上展示着你做的PPT…… 😎</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 功能区隐藏/显示</strong><br>
            如果你觉得工具栏太占空间，可以双击任意一个选项卡来<strong>隐藏功能区</strong>，再双击就能恢复。这样编辑区的空间就更大了。快捷键是 <span class="kbd">Ctrl</span> + <span class="kbd">F1</span>。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 易错点：单击 vs 双击</strong><br>
            在PPT中，<strong>单击</strong>文本框是"选中"（出现边框），<strong>双击</strong>文本框是"进入编辑"（出现光标）。很多新手分不清这两个状态，导致操作不了文字。记住：<br>
            • 想移动/缩放文本框 → <strong>单击</strong>选中后操作<br>
            • 想修改文本框里的文字 → <strong>双击</strong>进入编辑模式
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 效率技巧：快速访问工具栏</strong><br>
            标题栏左侧有一排小图标（保存、撤销、恢复等），这就是<strong>快速访问工具栏</strong>。你可以右键点击任何功能按钮 → 选择"添加到快速访问工具栏"，把常用功能放在最顺手的位置。
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 血泪教训：养成保存习惯！</strong><br>
            每操作3-5分钟就按一次 <span class="kbd">Ctrl</span> + <span class="kbd">S</span>！你永远不知道什么时候会断电、蓝屏、卡死。WPS有自动恢复功能，但那不是100%靠谱的。<strong>手动保存才是王道！</strong><br><br>
            顺口溜：<em>"做完三步按Ctrl+S，PPT安全不怕断电炸"</em> 🤣
        </div>

        <div class="tip-box tip-info">
            <strong>💡 右键万能菜单</strong><br>
            WPS演示中<strong>右键点击</strong>几乎任何地方都会弹出功能菜单。不知道某个功能在哪里？先试试右键！<br>
            • 右键幻灯片缩略图 → 新增/删除/复制页面<br>
            • 右键编辑区空白处 → 设置背景、排列对象<br>
            • 右键文本框 → 格式设置、动画效果<br>
            <strong>右键是PPT新手的最好朋友！</strong>
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: 'WPS演示界面中，用来显示所有幻灯片缩略图的区域叫什么？',
            options: ['编辑区', '工具栏', '幻灯片面板', '状态栏'],
            answer: 2,
            explanation: '界面左侧显示所有幻灯片缩略图的区域叫"幻灯片面板"，你可以在这里单击跳转到某一页，也可以拖拽调整页面顺序。'
        },
        {
            type: 'single',
            question: '在WPS演示中，按下哪个快捷键可以保存文件？',
            options: ['Ctrl + A', 'Ctrl + S', 'Ctrl + Z', 'Ctrl + C'],
            answer: 1,
            explanation: 'Ctrl + S 是保存快捷键（S = Save）。建议养成每操作几分钟就按一次的习惯，防止数据丢失。'
        },
        {
            type: 'single',
            question: '以下哪个选项卡主要用于插入图片、图表等素材？',
            options: ['开始', '设计', '插入', '视图'],
            answer: 2,
            explanation: '"插入"选项卡包含了插入图片、形状、图表、表格、视频、音频等各种素材的功能。'
        },
        {
            type: 'judge',
            question: '在PPT编辑中，单击文本框可以直接输入文字。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！单击文本框是"选中"状态（出现边框），需要双击才能进入文本编辑模式（出现光标），然后才能输入文字。'
        },
        {
            type: 'single',
            question: '按下哪个快捷键可以从头开始放映幻灯片？',
            options: ['F1', 'F3', 'F5', 'F7'],
            answer: 2,
            explanation: 'F5 是从第一页开始放映的快捷键。如果想从当前正在编辑的页面开始放映，可以按 Shift + F5。'
        },
        {
            type: 'multiple',
            question: 'WPS演示的状态栏（最底部）包含以下哪些功能？（多选）',
            options: ['显示当前页码', '视图切换按钮', '缩放滑块', '插入图片按钮'],
            answer: [0, 1, 2],
            explanation: '状态栏显示页码信息，右侧有普通视图/浏览视图/阅读视图的切换按钮和缩放滑块。插入图片在"插入"选项卡中，不在状态栏。'
        },
        {
            type: 'single',
            question: '做错操作后，按哪个快捷键可以撤销？',
            options: ['Ctrl + Y', 'Ctrl + Z', 'Ctrl + X', 'Ctrl + V'],
            answer: 1,
            explanation: 'Ctrl + Z 是撤销操作的快捷键（Z是Undo的常用键位）。可以连续按多次来撤销多步操作。Ctrl + Y 是恢复/重做。'
        },
        {
            type: 'single',
            question: '备注栏的内容在放映PPT时会怎样？',
            options: ['和幻灯片内容一起显示', '不会显示给观众看', '自动删除', '变成水印'],
            answer: 1,
            explanation: '备注栏的内容在正常放映时不会显示给观众。它是给演讲者自己看的提示信息，可以通过"演讲者视图"来查看。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：界面探索大挑战
            </div>
            <div class="practice-task-body">
                <p>请打开WPS演示，完成以下操作来证明你已经熟悉了界面：</p>
                <ol>
                    <li>
                        <strong>新建一个空白演示文稿</strong><br>
                        打开WPS演示，创建一个空白演示。
                    </li>
                    <li>
                        <strong>在标题区输入文字</strong><br>
                        双击"单击此处添加标题"，输入<strong>"WPS演示界面探索"</strong>。
                    </li>
                    <li>
                        <strong>在副标题区输入你的信息</strong><br>
                        在下方的副标题区域输入<strong>"姓名：XXX 学号：XXXXXXXXX"</strong>（填写你自己的信息）。
                    </li>
                    <li>
                        <strong>体验三种视图</strong><br>
                        在右下角依次切换<strong>普通视图 → 浏览视图 → 阅读视图</strong>，感受它们的区别，最后切回普通视图。
                    </li>
                    <li>
                        <strong>体验放映与退出</strong><br>
                        按 <span class="kbd">F5</span> 开始放映，观察全屏效果，然后按 <span class="kbd">Esc</span> 退出。
                    </li>
                    <li>
                        <strong>保存文件</strong><br>
                        按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span>，保存到桌面，文件名为<strong>"02-界面练习"</strong>。
                    </li>
                </ol>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ WPS演示界面的7大区域<br>
            ✅ 8个选项卡的功能分类<br>
            ✅ 最重要的快捷键<br>
            ✅ 三种视图模式的区别<br><br>
            下一课我们将学习如何新建、保存、打开文件——这可是做PPT的第一步！
        </div>
    `
};