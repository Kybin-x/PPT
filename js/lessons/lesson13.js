/**
 * PPT学习站 - 第13课：幻灯片母版
 * 文件路径: js/lessons/lesson13.js
 * 模块：母版与模板
 * 任务情境：统一公司品牌形象
 */

window.lessonData = {

    scenario: '公司要求所有部门的PPT必须使用统一的品牌视觉——相同的Logo位置、相同的底部信息栏、相同的字体和配色。如果每一页都手动放Logo、手动设背景，做20页PPT就要重复操作20次！有没有一种方法可以"设置一次，所有页面自动应用"？答案就是——幻灯片母版！',

    knowledge: `
        <h3>一、什么是幻灯片母版？</h3>
        <p>幻灯片母版（Slide Master）是PPT中一个<strong>"幕后控制者"</strong>——它定义了所有幻灯片的<strong>公共元素和默认格式</strong>。</p>

        <p>简单类比：</p>
        <ul>
            <li><strong>母版</strong> = 印章模板 🔖</li>
            <li><strong>普通幻灯片</strong> = 被盖了章的纸 📄</li>
        </ul>
        <p>你在母版上放一个Logo，所有幻灯片上都会自动出现这个Logo。你在母版上改字体，所有幻灯片的默认字体都会跟着变。</p>

        <div class="tip-box tip-info">
            <strong>💡 母版能控制什么？</strong><br>
            • <strong>背景</strong>：颜色、渐变、图片<br>
            • <strong>字体</strong>：标题和正文的默认字体、字号、颜色<br>
            • <strong>Logo/水印</strong>：放在母版上就不用每页都插入<br>
            • <strong>页脚信息</strong>：公司名称、日期、页码等<br>
            • <strong>占位符位置</strong>：标题、内容区域的默认位置和大小<br>
            • <strong>装饰元素</strong>：线条、色块等装饰性设计
        </div>

        <h3>二、母版的结构</h3>
        <p>WPS演示的母版由两层组成：</p>

        <h4>1. 幻灯片母版（主母版）</h4>
        <p>位于最顶层，控制<strong>全局</strong>设置。在这里做的修改会影响<strong>所有版式</strong>和<strong>所有普通幻灯片</strong>。</p>
        <ul>
            <li>通常放置：Logo、公司信息、全局背景、全局字体</li>
            <li>母版视图中<strong>最大的那张缩略图</strong>就是主母版</li>
        </ul>

        <h4>2. 版式（Layout）</h4>
        <p>主母版下面有多个<strong>版式</strong>，每个版式定义了不同的页面布局：</p>
        <ul>
            <li><strong>标题幻灯片</strong> —— 封面页用的大标题布局</li>
            <li><strong>标题和内容</strong> —— 最常用的布局（上面标题，下面内容区）</li>
            <li><strong>节标题</strong> —— 章节分隔页</li>
            <li><strong>两栏内容</strong> —— 左右分栏布局</li>
            <li><strong>比较</strong> —— 用于对比展示</li>
            <li><strong>仅标题</strong> —— 只有标题，内容区自由发挥</li>
            <li><strong>空白</strong> —— 完全空白，自由布局</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 母版和版式的关系</strong><br>
            想象一下：<br>
            • <strong>主母版</strong> = 房子的地基和外墙（所有房间共用）<br>
            • <strong>版式</strong> = 不同房间的内部装修（卧室、厨房、客厅各不同）<br>
            • <strong>普通幻灯片</strong> = 住进去后摆放的家具（你的实际内容）<br><br>
            修改主母版 → 影响所有版式和所有页面<br>
            修改某个版式 → 只影响使用该版式的页面
        </div>

        <h3>三、如何进入母版视图</h3>

        <h4>进入方法</h4>
        <ol>
            <li>点击 <strong>"视图"</strong> 选项卡</li>
            <li>点击 <strong>"幻灯片母版"</strong> 按钮</li>
            <li>界面切换到母版编辑模式：
                <ul>
                    <li>左侧面板显示<strong>主母版</strong>（最大的缩略图）和下面的多个<strong>版式</strong></li>
                    <li>顶部出现<strong>"幻灯片母版"</strong>专用选项卡</li>
                    <li>中央编辑区显示当前选中的母版/版式</li>
                </ul>
            </li>
        </ol>

        <h4>退出方法</h4>
        <ul>
            <li>点击"幻灯片母版"选项卡中的 <strong>"关闭母版视图"</strong> 按钮</li>
            <li>或者点击"视图"选项卡切换到"普通视图"</li>
        </ul>

        <div class="tip-box tip-warning">
            <strong>⚠️ 注意区分两种视图</strong><br>
            • <strong>普通视图</strong>：编辑具体每一页的内容（日常工作）<br>
            • <strong>母版视图</strong>：编辑整体框架和全局样式（设置一次就够了）<br><br>
            在母版视图中做的修改会自动应用到所有使用该版式的页面。<strong>不要在母版里写具体内容</strong>（如产品数据），只放公共元素（Logo、页脚等）。
        </div>

        <h3>四、在母版中添加公共元素</h3>

        <h4>1. 添加公司Logo</h4>
        <ol>
            <li>进入母版视图</li>
            <li>选中<strong>主母版</strong>（左侧面板最大的那个）</li>
            <li>插入 → 图片 → 选择公司Logo图片</li>
            <li>调整Logo大小（通常比较小，放在角落）</li>
            <li>拖拽到合适位置（通常是<strong>右下角</strong>或<strong>左上角</strong>）</li>
        </ol>
        <p>关闭母版视图后，你会发现<strong>每一页都自动出现了Logo</strong>！</p>

        <h4>2. 添加底部信息栏</h4>
        <ol>
            <li>在主母版上，在底部绘制一个<strong>细长的矩形</strong>（高度约0.5-1cm）</li>
            <li>填充为品牌色或深灰色</li>
            <li>在矩形内添加文字：<strong>公司名称 | 保密等级 | 日期</strong>等</li>
            <li>文字设为白色、8-10pt</li>
        </ol>

        <h4>3. 设置默认字体</h4>
        <ol>
            <li>在主母版上，点击<strong>标题占位符</strong>（"单击此处编辑母版标题样式"）</li>
            <li>设置字体、字号、颜色（如：微软雅黑Bold、36pt、深蓝色）</li>
            <li>点击<strong>正文占位符</strong>，设置正文默认字体（如：微软雅黑、18pt、深灰色）</li>
            <li>关闭母版后，新建的幻灯片会自动使用这些字体设置</li>
        </ol>

        <h4>4. 设置默认背景</h4>
        <ul>
            <li>在主母版上，右键空白处 → <strong>"设置背景格式"</strong></li>
            <li>可以选择：纯色、渐变、图片填充</li>
            <li>建议：白色或极浅灰色背景最安全，图片背景要注意不能影响内容可读性</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚨 母版背景的常见错误</strong><br>
            ❌ 使用太花哨的背景图片（文字看不清）<br>
            ❌ 使用深色背景+深色文字（完全看不见）<br>
            ❌ 每个版式用不同的背景颜色（风格不统一）<br><br>
            ✅ 正确做法：白色/浅灰背景 + 底部/顶部有一条品牌色色带作为装饰。
        </div>

        <h3>五、编辑特定版式</h3>
        <p>除了修改主母版（影响所有页面），你还可以修改某个<strong>特定版式</strong>（只影响使用该版式的页面）。</p>

        <h4>常见的自定义需求</h4>
        <ul>
            <li><strong>封面页版式</strong>：标题更大、可能有全屏背景图、不显示页码</li>
            <li><strong>内容页版式</strong>：标题在顶部、下方有内容区</li>
            <li><strong>章节分隔版式</strong>：大标题居中、可能有不同的配色</li>
            <li><strong>结尾页版式</strong>：感谢语、联系方式</li>
        </ul>

        <h4>操作方法</h4>
        <ol>
            <li>在母版视图的左侧面板中，找到要修改的版式</li>
            <li>点击选中它</li>
            <li>在编辑区修改该版式的元素（背景、占位符位置等）</li>
            <li>这个版式的修改只会影响使用它的页面</li>
        </ol>

        <h3>六、添加和删除版式</h3>

        <h4>新建版式</h4>
        <ul>
            <li>在母版视图中，"幻灯片母版"选项卡 → <strong>"插入版式"</strong></li>
            <li>新版式会出现在左侧面板中</li>
            <li>可以重命名：右键版式缩略图 → <strong>"重命名版式"</strong></li>
        </ul>

        <h4>删除版式</h4>
        <ul>
            <li>右键不需要的版式 → <strong>"删除版式"</strong></li>
            <li>注意：如果某个版式正在被使用，删除前需要先更换使用该版式的页面</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 自定义版式的实用场景</strong><br>
            你可以创建公司专用的版式，比如：<br>
            • <strong>"数据展示"版式</strong>：左边放图表区域，右边放结论文字区域<br>
            • <strong>"产品展示"版式</strong>：中间放产品图占位符，下方放产品信息<br>
            • <strong>"对比"版式</strong>：左右两栏带标题<br><br>
            做好后，团队成员新建页面时直接选择对应版式就行，不用每次从零排版。
        </div>

        <h3>七、页眉和页脚</h3>
        <p>WPS演示提供了专门的页眉页脚功能，用来在每页自动添加日期、页码等信息：</p>

        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡 → <strong>"页眉和页脚"</strong></li>
            <li>在弹出的对话框中可以设置：
                <ul>
                    <li>✅ <strong>日期和时间</strong>：自动更新或固定日期</li>
                    <li>✅ <strong>幻灯片编号</strong>：自动显示页码</li>
                    <li>✅ <strong>页脚</strong>：输入固定文字（如公司名称）</li>
                    <li>☐ <strong>标题幻灯片中不显示</strong>：封面页通常不需要页码</li>
                </ul>
            </li>
            <li>点击<strong>"全部应用"</strong></li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 页眉页脚在母版中的位置</strong><br>
            页眉页脚的显示位置是在母版中定义的。如果你想改变页码或日期的位置：<br>
            1. 进入母版视图<br>
            2. 找到<strong>日期占位符</strong>、<strong>页码占位符</strong>、<strong>页脚占位符</strong>（通常在底部三个小框）<br>
            3. 拖拽它们到你想要的位置<br>
            4. 修改它们的字体、颜色、大小
        </div>

        <h3>八、母版的注意事项</h3>
        <ul>
            <li><strong>不要在母版中放具体内容</strong>：母版只放公共元素（Logo、页脚、装饰等），不要在母版里写产品数据或具体文字</li>
            <li><strong>保持简洁</strong>：母版上的元素越少越好，留给正文更多空间</li>
            <li><strong>测试所有版式</strong>：修改母版后，检查所有版式是否都正常显示</li>
            <li><strong>先设计母版再写内容</strong>：最佳流程是先把母版做好，然后再开始填写具体内容</li>
        </ul>
    `,

    steps: `
        <p>现在我们来制作一个<strong>带公司品牌风格的PPT母版</strong>，实战掌握母版操作。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件并进入母版视图</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>公司品牌模板.pptx</code></p>
                <ol>
                    <li>点击 <strong>视图 → 幻灯片母版</strong></li>
                    <li>界面切换到母版编辑模式</li>
                    <li>左侧面板最大的那个就是<strong>主母版</strong>，点击选中它</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">在主母版中添加底部色带</div>
            <div class="step-card-desc">
                <ol>
                    <li>插入 → 形状 → <strong>矩形</strong></li>
                    <li>在母版页面最底部画一个<strong>横跨整个页面宽度</strong>的矩形</li>
                    <li>高度约 <strong>1厘米</strong></li>
                    <li>填充颜色：<strong>品牌色</strong>（比如深蓝 #1A237E 或电商橙 #FF6B35）</li>
                    <li>无轮廓</li>
                </ol>
                <p>这个色带会出现在所有使用该母版的幻灯片上。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">在底部色带中添加文字</div>
            <div class="step-card-desc">
                <p>在色带上添加公司信息：</p>
                <ol>
                    <li>插入一个文本框放在色带左侧</li>
                    <li>输入：<strong>"XX跨境电商有限公司 | 内部资料 · 请勿外传"</strong></li>
                    <li>字体：微软雅黑、<strong>8pt</strong>、白色</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">添加Logo</div>
            <div class="step-card-desc">
                <ol>
                    <li>在主母版中，插入 → 图片 → 选择公司Logo（如果没有Logo可以用一个小文字标识代替）</li>
                    <li>调整Logo大小（高度约<strong>1-1.5厘米</strong>）</li>
                    <li>放在母版的<strong>右上角</strong>或<strong>右下角</strong>（色带右侧）</li>
                    <li>确保Logo不会遮挡内容区域</li>
                </ol>
                <p>没有现成Logo？可以用一个圆角矩形 + 公司首字母来做一个简易Logo。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">设置默认字体</div>
            <div class="step-card-desc">
                <p>在主母版中设置全局字体：</p>
                <ol>
                    <li>点击主母版上的<strong>"单击此处编辑母版标题样式"</strong>文字</li>
                    <li>全选文字 → 设为<strong>微软雅黑Bold、36pt、深蓝色</strong></li>
                    <li>点击<strong>"单击此处编辑母版文本样式"</strong>（正文占位符）</li>
                    <li>设置第一级文字：<strong>微软雅黑、20pt、深灰色（#333）</strong></li>
                    <li>设置第二级文字：<strong>微软雅黑、16pt、灰色（#666）</strong></li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">自定义封面页版式</div>
            <div class="step-card-desc">
                <p>在左侧面板找到<strong>"标题幻灯片"版式</strong>（通常是第一个小版式），点击选中：</p>
                <ol>
                    <li>把标题占位符<strong>移到页面中央偏下</strong></li>
                    <li>把副标题占位符移到标题下方</li>
                    <li>可以给这个版式添加一个<strong>不同的背景</strong>（比如渐变色或大色块）</li>
                    <li>封面页通常Logo可以放大一些，放在中央上方</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">自定义内容页版式</div>
            <div class="step-card-desc">
                <p>找到<strong>"标题和内容"版式</strong>，稍作调整：</p>
                <ol>
                    <li>确认标题占位符在<strong>顶部</strong>，留出足够的内容区域</li>
                    <li>可以在标题下方加一条<strong>品牌色细线</strong>作为分隔装饰</li>
                    <li>检查底部色带和Logo的位置是否正确</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">设置页码和页脚</div>
            <div class="step-card-desc">
                <ol>
                    <li>仍然在母版视图中</li>
                    <li>找到底部的<strong>日期占位符、页码占位符、页脚占位符</strong>（三个小虚线框）</li>
                    <li>把<strong>页码占位符</strong>拖到色带的右侧区域</li>
                    <li>修改页码文字颜色为<strong>白色</strong>（这样在深色色带上才看得见）</li>
                    <li>关闭母版视图</li>
                    <li>在普通视图中：<strong>插入 → 页眉和页脚</strong></li>
                    <li>勾选"幻灯片编号"和"页脚"</li>
                    <li>页脚输入公司名称</li>
                    <li>勾选"标题幻灯片中不显示"</li>
                    <li>点击"全部应用"</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">测试母版效果</div>
            <div class="step-card-desc">
                <p>关闭母版视图后，在普通视图中测试：</p>
                <ol>
                    <li>第1页已经使用"标题幻灯片"版式，检查封面效果</li>
                    <li>新建第2页（<span class="kbd">Ctrl</span> + <span class="kbd">M</span>），选择"标题和内容"版式</li>
                    <li>新建第3页，选择"空白"版式</li>
                    <li>检查每一页：
                        <ul>
                            <li>✅ 底部色带是否显示？</li>
                            <li>✅ Logo是否出现？</li>
                            <li>✅ 默认字体是否正确？</li>
                            <li>✅ 页码是否显示？</li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存为模板文件</div>
            <div class="step-card-desc">
                <p>把这个做好母版的文件保存下来，以后可以复用：</p>
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 先正常保存</li>
                    <li>然后 <strong>文件 → 另存为</strong></li>
                    <li>文件类型选择<strong>".potx"</strong>（演示文稿模板格式）</li>
                    <li>文件名改为<strong>"公司品牌模板"</strong></li>
                    <li>保存到方便找到的位置</li>
                </ul>
                <p>以后新建PPT时，可以选择"从模板创建"来使用这个模板。</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 主母版 vs 版式的修改范围</strong><br>
            这是母版操作最重要的逻辑，一定要搞清楚：<br><br>
            <strong>在主母版上修改</strong> → <strong>所有版式</strong>都受影响 → <strong>所有页面</strong>都变化<br>
            <strong>在某个版式上修改</strong> → 只有<strong>使用该版式的页面</strong>受影响<br><br>
            所以：<br>
            • Logo、底部色带、全局背景 → 在<strong>主母版</strong>上设置<br>
            • 封面页的特殊布局 → 在<strong>"标题幻灯片"版式</strong>上设置<br>
            • 内容页的特殊布局 → 在<strong>"标题和内容"版式</strong>上设置
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 母版操作的注意事项</strong><br>
            1. <strong>不要在母版中放具体内容</strong>（产品数据、活动信息等），那些是普通页面的工作<br>
            2. <strong>母版上的元素在普通视图中无法直接选中</strong>——如果你发现某个元素怎么点都选不中，它可能就在母版上<br>
            3. <strong>修改母版前先保存</strong>——万一改坏了可以 Ctrl+Z 撤销<br>
            4. <strong>删除版式要小心</strong>——正在使用的版式不能删除
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 PPT制作的最佳流程</strong><br>
            专业的PPT制作流程是：<br>
            1️⃣ <strong>先设计母版</strong>：Logo、配色、字体、底部信息<br>
            2️⃣ <strong>再定义版式</strong>：封面版式、内容版式、数据版式<br>
            3️⃣ <strong>然后填写内容</strong>：在普通视图中逐页编辑内容<br>
            4️⃣ <strong>最后添加动画</strong>：切换效果和动画<br><br>
            很多新手直接从第3步开始，结果做到最后发现要改字体，得一页一页改。如果先做好母版，改一处就全部更新！
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 下载的模板有时也需要改母版</strong><br>
            从网上下载的PPT模板虽然好看，但经常有一些问题：<br>
            • Logo是别人的 → 进母版替换<br>
            • 字体你电脑上没有 → 进母版改字体<br>
            • 页脚信息不对 → 进母版修改<br>
            • 背景不适合你的内容 → 进母版调整<br><br>
            学会母版操作后，你可以<strong>完全自定义任何下载的模板</strong>！
        </div>

        <div class="tip-box tip-info">
            <strong>💡 快速查看哪些页面使用了哪个版式</strong><br>
            在普通视图中，右键某个幻灯片缩略图 → <strong>"版式"</strong>，会展开所有版式选项，当前页使用的版式会被标记。<br>
            你也可以在这里<strong>更换某个页面的版式</strong>——比如把一个"标题和内容"页改成"两栏内容"页。
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '幻灯片母版的主要作用是什么？',
            options: [
                '制作动画效果',
                '定义所有幻灯片的公共元素和默认格式',
                '插入图表和表格',
                '设置放映方式'
            ],
            answer: 1,
            explanation: '幻灯片母版定义了所有幻灯片共用的元素（如Logo、页脚、背景）和默认格式（字体、颜色等）。在母版上修改一次，所有页面自动更新。'
        },
        {
            type: 'single',
            question: '如何进入幻灯片母版视图？',
            options: [
                '开始 → 母版',
                '视图 → 幻灯片母版',
                '插入 → 母版',
                '设计 → 编辑母版'
            ],
            answer: 1,
            explanation: '进入母版视图的路径是"视图"选项卡 → "幻灯片母版"。进入后会看到主母版和多个版式，顶部出现专用的"幻灯片母版"选项卡。'
        },
        {
            type: 'single',
            question: '在主母版上放置一个Logo后，会发生什么？',
            options: [
                '只有第一页显示Logo',
                '所有使用该母版的幻灯片都自动出现Logo',
                '需要手动到每一页添加Logo',
                'Logo只在放映时显示'
            ],
            answer: 1,
            explanation: '主母版上的元素会自动出现在所有使用该母版的幻灯片上。这就是母版的核心价值——设置一次，全局生效。'
        },
        {
            type: 'judge',
            question: '在母版视图中可以编辑普通幻灯片的具体内容（如产品数据）。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！母版视图只用于编辑公共元素和格式设置。具体内容（产品数据、文字、图片等）应该在普通视图中编辑。母版和普通视图是两个不同的编辑层面。'
        },
        {
            type: 'single',
            question: '修改"标题幻灯片"版式会影响哪些页面？',
            options: [
                '所有页面',
                '只有使用"标题幻灯片"版式的页面',
                '只有第一页',
                '只有最后一页'
            ],
            answer: 1,
            explanation: '修改某个特定版式只会影响使用该版式的页面。只有修改"主母版"才会影响所有版式和所有页面。'
        },
        {
            type: 'multiple',
            question: '以下哪些适合放在母版上？（多选）',
            options: [
                '公司Logo',
                '底部信息栏（公司名称、保密等级）',
                '产品销售数据表格',
                '默认字体和颜色设置'
            ],
            answer: [0, 1, 3],
            explanation: 'Logo、底部信息栏、默认字体颜色都是所有页面共用的公共元素，适合放在母版上。产品销售数据是具体页面的内容，应该在普通视图中编辑。'
        },
        {
            type: 'single',
            question: 'PPT制作的最佳流程顺序是什么？',
            options: [
                '写内容 → 设计母版 → 添加动画',
                '设计母版 → 定义版式 → 填写内容 → 添加动画',
                '添加动画 → 写内容 → 设计母版',
                '直接开始写内容就行'
            ],
            answer: 1,
            explanation: '最佳流程是：先设计母版（确定Logo、配色、字体）→ 定义各种版式 → 在普通视图中填写具体内容 → 最后添加动画和切换效果。'
        },
        {
            type: 'single',
            question: '母版视图中，页面左侧最大的缩略图代表什么？',
            options: [
                '第一张幻灯片',
                '封面页',
                '主母版（Slide Master）',
                '目录页'
            ],
            answer: 2,
            explanation: '母版视图左侧最大的缩略图就是"主母版"（Slide Master），它控制所有版式的全局设置。下面较小的缩略图是各个版式（Layout）。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作公司品牌PPT母版
            </div>
            <div class="practice-task-body">
                <p>请制作一个完整的公司品牌PPT母版，然后用这个母版创建一个测试PPT：</p>
                <ol>
                    <li>
                        <strong>母版设计要求</strong>
                        <ul>
                            <li>主母版上添加<strong>底部品牌色带</strong>（横跨页面底部的彩色矩形）</li>
                            <li>主母版上添加<strong>Logo或公司标识</strong>（右上角或右下角）</li>
                            <li>主母版上设置<strong>默认字体</strong>（标题：微软雅黑Bold，正文：微软雅黑）</li>
                            <li>设置<strong>页码</strong>（在色带内，白色文字）</li>
                        </ul>
                    </li>
                    <li>
                        <strong>版式定制要求</strong>
                        <ul>
                            <li>"标题幻灯片"版式：封面专用，标题居中偏下，可以有不同背景</li>
                            <li>"标题和内容"版式：普通内容页，标题在顶部，标题下有一条装饰线</li>
                        </ul>
                    </li>
                    <li>
                        <strong>测试PPT（使用该母版创建）</strong>
                        <ul>
                            <li>第1页：封面（使用"标题幻灯片"版式）</li>
                            <li>第2页：内容页（使用"标题和内容"版式）</li>
                            <li>第3页：空白页（使用"空白"版式）</li>
                            <li>验证所有页面的Logo、色带、页码是否正常显示</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>把做好的母版另存为 .potx 模板文件</li>
                    <li>尝试创建一个自定义版式（如"数据展示"版式）</li>
                    <li>设置"标题幻灯片中不显示页码"</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 母版的概念和结构（主母版+版式）<br>
            ✅ 进入和退出母版视图<br>
            ✅ 在母版中添加Logo、色带、页脚等公共元素<br>
            ✅ 设置全局默认字体和背景<br>
            ✅ 编辑特定版式的布局<br>
            ✅ 设置页码和页眉页脚<br>
            ✅ 保存为模板文件<br><br>
            下一课我们将学习<strong>配色方案与主题</strong>——为电商团队定制PPT风格，让你的PPT更加协调统一！
        </div>
    `
};
