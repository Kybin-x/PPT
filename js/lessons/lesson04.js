/**
 * PPT学习站 - 第4课：文本框的使用
 * 文件路径: js/lessons/lesson04.js
 * 模块：文字与排版
 * 任务情境：制作电商店铺标语卡片
 */

window.lessonData = {

    scenario: '你负责的电商店铺即将参加"618大促"，运营主管要求你做几张店铺标语卡片，用于PPT宣传方案中展示。标语内容包括促销口号、活动时间、优惠信息等。要完成这些，你首先需要学会PPT中最基础的元素——文本框！',

    knowledge: `
        <h3>一、什么是文本框？</h3>
        <p>文本框是PPT中<strong>最基本、最常用的元素</strong>。它就是一个可以输入文字的矩形区域。在PPT中，所有文字都必须放在文本框里——这和Word不同，Word可以直接在页面上打字，但PPT不行。</p>

        <div class="tip-box tip-info">
            <strong>💡 关键概念：</strong>PPT是一个"画布型"软件。你可以把每一页幻灯片想象成一块画布，文本框就是画布上的"便利贴"——你可以随意放置、移动、调整大小。
        </div>

        <h3>二、文本框的两种类型</h3>
        <p>WPS演示中的文本框分为两种：</p>

        <h4>1. 占位符文本框（自动生成的）</h4>
        <p>当你新建一张幻灯片时，上面默认就有的文本框，比如：</p>
        <ul>
            <li>"单击此处添加标题"</li>
            <li>"单击此处添加副标题"</li>
            <li>"单击此处添加文本"</li>
        </ul>
        <p>这些是<strong>版式自带的占位符</strong>，位置和大小是预设好的。你可以直接点击输入内容，也可以移动、删除它们。</p>

        <h4>2. 手动插入的文本框</h4>
        <p>当你需要在<strong>任意位置</strong>添加文字时，就要手动插入文本框。这是你自己创建的，位置和大小完全由你决定。</p>

        <div class="tip-box tip-warning">
            <strong>⚠️ 区别很重要：</strong><br>
            • <strong>占位符</strong>会跟着版式/母版变化，换模板时可能自动调整<br>
            • <strong>手动文本框</strong>是你自己创建的，不受版式影响，更灵活<br>
            在实际工作中，两种都会用到。做标语卡片、自由排版时，多用手动文本框。
        </div>

        <h3>三、插入文本框的方法</h3>
        <p>插入文本框有以下几种方式：</p>

        <h4>方法一：菜单插入（最标准）</h4>
        <ul>
            <li>点击 <strong>插入</strong> 选项卡</li>
            <li>找到 <strong>"文本框"</strong> 按钮</li>
            <li>选择 <strong>"横向文本框"</strong> 或 <strong>"纵向文本框"</strong></li>
            <li>在幻灯片上<strong>按住鼠标拖拽</strong>画出一个矩形区域</li>
            <li>松开鼠标后，光标自动出现在文本框内，即可输入文字</li>
        </ul>

        <h4>方法二：直接在空白处拖拽</h4>
        <p>在某些版本中，你可以直接在幻灯片空白处双击，会自动创建一个文本框。</p>

        <div class="tip-box tip-success">
            <strong>🎯 实用技巧：横向 vs 纵向</strong><br>
            • <strong>横向文本框</strong>（常用）—— 文字从左到右排列，这是最常见的方式<br>
            • <strong>纵向文本框</strong> —— 文字从上到下排列，用在特殊设计中（如中国风PPT、竖排标题）<br>
            日常做PPT，99%的情况用横向文本框就够了。
        </div>

        <h3>四、文本框的基本操作</h3>

        <h4>1. 选中文本框</h4>
        <p>单击文本框边缘，出现<strong>蓝色选择框和8个控制点</strong>（四角+四边中点），表示文本框已被选中。</p>
        <ul>
            <li><strong>边框是虚线</strong> = 正在编辑文字（光标在里面闪烁）</li>
            <li><strong>边框是实线</strong> = 选中了整个文本框（可以移动、缩放）</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 切换技巧：</strong><br>
            • 从编辑模式 → 选中模式：按 <span class="kbd">Esc</span> 键<br>
            • 从选中模式 → 编辑模式：按 <span class="kbd">Enter</span> 键或双击文本框<br>
            • 从选中模式 → 取消选中：点击空白处
        </div>

        <h4>2. 移动文本框</h4>
        <p>选中文本框后（实线边框状态），将鼠标移到边框上，光标变成<strong>四向箭头</strong>✥ 时，按住鼠标拖拽即可移动。</p>
        <ul>
            <li><strong>自由移动：</strong>直接拖拽</li>
            <li><strong>水平/垂直移动：</strong>按住 <span class="kbd">Shift</span> 再拖拽，只允许水平或垂直方向移动</li>
            <li><strong>微调位置：</strong>选中后按<strong>方向键</strong> ↑↓←→，每次移动1像素</li>
        </ul>

        <h4>3. 调整文本框大小</h4>
        <p>选中文本框后，拖拽8个控制点中的任意一个：</p>
        <ul>
            <li><strong>四角控制点</strong> —— 同时改变宽度和高度</li>
            <li><strong>上下中点</strong> —— 只改变高度</li>
            <li><strong>左右中点</strong> —— 只改变宽度</li>
            <li>按住 <span class="kbd">Shift</span> 拖拽四角 → <strong>等比例</strong>缩放</li>
        </ul>

        <h4>4. 旋转文本框</h4>
        <p>选中文本框后，顶部会出现一个<strong>绿色圆形旋转手柄</strong>（有些版本是弧形箭头）：</p>
        <ul>
            <li>拖拽旋转手柄 → 自由旋转</li>
            <li>按住 <span class="kbd">Shift</span> 拖拽 → 每次旋转15度（更精确）</li>
        </ul>

        <h4>5. 删除文本框</h4>
        <p>选中文本框（实线边框状态） → 按 <span class="kbd">Delete</span> 或 <span class="kbd">Backspace</span> 键。</p>

        <div class="tip-box tip-danger">
            <strong>🚨 注意区分：</strong><br>
            • 如果是<strong>虚线边框</strong>（编辑模式），按 Delete 只会删除文字<br>
            • 如果是<strong>实线边框</strong>（选中模式），按 Delete 会删除整个文本框<br>
            想删除文本框却发现只删了文字？按 <span class="kbd">Esc</span> 先退到选中模式再删！
        </div>

        <h4>6. 复制文本框</h4>
        <p>复制文本框有几种方式：</p>
        <ul>
            <li><strong>Ctrl + C → Ctrl + V：</strong>经典复制粘贴</li>
            <li><strong>Ctrl + D：</strong>快速复制（直接生成一个副本）</li>
            <li><strong>Ctrl + 拖拽：</strong>按住 Ctrl 键拖拽文本框，直接复制到新位置（最推荐！）</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 高手必备：Ctrl + 拖拽复制</strong><br>
            这是PPT操作中最实用的技巧之一！按住 <span class="kbd">Ctrl</span> 键，然后拖拽任何对象（文本框、图片、形状等），就能快速复制一个副本到新位置。比先复制再粘贴再移动快多了！
        </div>

        <h3>五、文本框的格式设置</h3>

        <h4>1. 文本框填充</h4>
        <p>文本框默认是透明无底色的，但你可以给它添加背景色：</p>
        <ul>
            <li>右键文本框 → <strong>设置对象格式</strong>（或"设置形状格式"）</li>
            <li>找到 <strong>"填充"</strong> 选项</li>
            <li>可以选择：<strong>纯色填充、渐变填充、图片填充、无填充</strong></li>
        </ul>

        <h4>2. 文本框边框</h4>
        <p>同样在"设置对象格式"中：</p>
        <ul>
            <li>找到 <strong>"线条"</strong> 选项</li>
            <li>可以设置：边框颜色、粗细、样式（实线、虚线等）</li>
            <li>也可以选择<strong>"无线条"</strong>来隐藏边框</li>
        </ul>

        <h4>3. 文本框内边距</h4>
        <p>文字和文本框边缘之间的距离叫<strong>内边距</strong>（Padding）：</p>
        <ul>
            <li>右键文本框 → 设置对象格式 → <strong>"文本选项"</strong></li>
            <li>可以设置上下左右的<strong>内部边距</strong></li>
            <li>适当增加内边距，文字不会紧贴边缘，看起来更舒服</li>
        </ul>

        <h4>4. 文字在文本框中的对齐</h4>
        <p>文字在文本框内的垂直位置可以调整：</p>
        <ul>
            <li><strong>顶端对齐</strong> —— 文字贴着文本框顶部</li>
            <li><strong>居中对齐</strong> —— 文字在文本框中垂直居中（做标语最常用）</li>
            <li><strong>底端对齐</strong> —— 文字贴着文本框底部</li>
        </ul>
        <p>设置方法：右键 → 设置对象格式 → 文本选项 → 垂直对齐方式</p>

        <h3>六、多个文本框的对齐与分布</h3>
        <p>当页面上有多个文本框时，如何让它们排列整齐？手动一个一个移很费时，WPS提供了强大的对齐工具：</p>

        <ul>
            <li>先选中多个文本框（按住 <span class="kbd">Ctrl</span> 逐个点击，或框选）</li>
            <li>点击 <strong>开始</strong> 选项卡 → 找到 <strong>"对齐"</strong> 按钮</li>
            <li>可以选择：
                <ul>
                    <li>左对齐、右对齐、水平居中</li>
                    <li>顶端对齐、底端对齐、垂直居中</li>
                    <li>横向分布、纵向分布（等间距排列）</li>
                </ul>
            </li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 对齐是排版的灵魂！</strong><br>
            判断一个PPT做得好不好，最直观的标准就是看<strong>有没有对齐</strong>。文本框歪歪扭扭的PPT，再好的内容也显得不专业。养成随手对齐的好习惯！
        </div>
    `,

    steps: `
        <p>现在我们来制作<strong>"618大促标语卡片"</strong>，通过实战掌握文本框的全部操作。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建空白演示文稿</div>
            <div class="step-card-desc">
                <p>打开WPS演示 → 新建空白演示 → 按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存为 <code>618标语卡片.pptx</code></p>
                <p>先把第一页默认的占位符文本框全部删掉：按 <span class="kbd">Ctrl</span> + <span class="kbd">A</span> 全选 → 按 <span class="kbd">Delete</span> 删除，得到一张空白页面。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">插入第一个文本框——主标语</div>
            <div class="step-card-desc">
                <p>制作促销主标语：</p>
                <ul>
                    <li>点击 <strong>插入 → 文本框 → 横向文本框</strong></li>
                    <li>在幻灯片上方区域<strong>拖拽</strong>画出一个宽大的文本框</li>
                    <li>输入文字：<strong>618年中大促 疯狂来袭</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">调整文本框大小和位置</div>
            <div class="step-card-desc">
                <p>让主标语居中、大气：</p>
                <ul>
                    <li>按 <span class="kbd">Esc</span> 退出编辑模式（变成实线边框）</li>
                    <li>拖拽控制点，把文本框<strong>拉宽到几乎和页面一样宽</strong></li>
                    <li>把文本框<strong>移动到页面上方三分之一</strong>的位置</li>
                    <li>在"开始"选项卡中，把文字设为<strong>居中对齐</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">插入第二个文本框——活动时间</div>
            <div class="step-card-desc">
                <p>在主标语下方添加活动时间：</p>
                <ul>
                    <li>再次 <strong>插入 → 文本框 → 横向文本框</strong></li>
                    <li>在主标语下方拖拽画出一个中等大小的文本框</li>
                    <li>输入：<strong>6月1日-6月18日 限时抢购</strong></li>
                    <li>设为居中对齐</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">用 Ctrl+拖拽 快速复制三个优惠信息框</div>
            <div class="step-card-desc">
                <p>在页面下方制作三个并排的优惠信息框：</p>
                <ul>
                    <li>插入一个文本框，输入：<strong>满200减30</strong></li>
                    <li>按 <span class="kbd">Esc</span> 选中这个文本框</li>
                    <li>按住 <span class="kbd">Ctrl</span>，拖拽它到右边 → 松开后自动复制了一个</li>
                    <li>修改复制出来的文本框内容为：<strong>跨店满减</strong></li>
                    <li>再用同样方法复制第三个，内容为：<strong>限时秒杀</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">对齐三个优惠信息框</div>
            <div class="step-card-desc">
                <p>让三个文本框整齐排列：</p>
                <ul>
                    <li>按住 <span class="kbd">Ctrl</span> 键，依次点击三个文本框全部选中</li>
                    <li>点击 <strong>开始 → 对齐</strong>（或 排列 → 对齐）</li>
                    <li>先选择 <strong>"顶端对齐"</strong> → 三个框顶部对齐了</li>
                    <li>再选择 <strong>"横向分布"</strong> → 三个框等间距排列了</li>
                </ul>
                <p>看！瞬间变整齐了吧？这就是对齐工具的威力！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">给文本框添加背景色</div>
            <div class="step-card-desc">
                <p>让标语卡片更醒目：</p>
                <ul>
                    <li>选中"满200减30"的文本框</li>
                    <li><strong>右键 → 设置对象格式</strong></li>
                    <li>在右侧面板找到 <strong>"填充"</strong></li>
                    <li>选择 <strong>"纯色填充"</strong> → 选一个<strong>红色</strong>（电商促销经典色）</li>
                    <li>同时可以在"线条"中选择<strong>"无线条"</strong></li>
                    <li>对另外两个也做同样的操作，可以选择不同的红色深浅</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">设置文本框内边距和垂直对齐</div>
            <div class="step-card-desc">
                <p>让文字在红色框内看起来更舒服：</p>
                <ul>
                    <li>右键文本框 → 设置对象格式 → <strong>"文本选项"</strong></li>
                    <li>将上下左右内边距都设为 <strong>10像素</strong> 左右</li>
                    <li>垂直对齐选择 <strong>"居中"</strong></li>
                    <li>三个框都做同样设置，保持统一</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">旋转一个文本框做装饰</div>
            <div class="step-card-desc">
                <p>在页面角落添加一个有趣的装饰：</p>
                <ul>
                    <li>插入一个新文本框，输入：<strong>HOT!</strong></li>
                    <li>选中它，找到顶部的<strong>旋转手柄</strong></li>
                    <li>拖拽旋转约 <strong>-15度</strong>（向左倾斜）</li>
                    <li>给它加一个亮黄色背景</li>
                    <li>把它移到页面右上角</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并预览</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 全屏放映，检查效果</li>
                    <li>按 <span class="kbd">Esc</span> 退出放映</li>
                </ul>
                <p>恭喜你完成了第一张电商标语卡片！虽然现在字体和颜色还比较简单，下节课我们会学习如何美化文字。</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 文本框自动缩小文字的问题</strong><br>
            如果你输入的文字太多，文本框装不下，WPS可能会自动缩小文字大小。要关闭这个"好心办坏事"的功能：<br>
            右键文本框 → 设置对象格式 → 文本选项 → 取消勾选 <strong>"溢出时缩排文字"</strong> 或 <strong>"根据文字调整形状大小"</strong>。<br>
            这样文字不会自动变小，你可以自己控制字号大小。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 易错点：编辑模式 vs 选中模式</strong><br>
            新手最常犯的错误就是搞混这两个模式：<br>
            • <strong>虚线边框 = 编辑模式</strong>：光标在文本框内闪烁，此时操作的是文字<br>
            • <strong>实线边框 = 选中模式</strong>：可以移动、缩放、删除文本框<br><br>
            <strong>口诀：虚线编文字，实线动框框</strong><br>
            按 Esc 从虚线切到实线，双击或 Enter 从实线切到虚线。
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 职场效率技巧：Ctrl 系列快捷操作</strong><br>
            在PPT中，<span class="kbd">Ctrl</span> 键是个万能增强键：<br>
            • <span class="kbd">Ctrl</span> + 拖拽 = <strong>复制</strong>对象<br>
            • <span class="kbd">Ctrl</span> + 点击 = <strong>多选</strong>多个对象<br>
            • <span class="kbd">Ctrl</span> + 滚轮 = <strong>缩放</strong>页面<br>
            • <span class="kbd">Ctrl</span> + <span class="kbd">G</span> = <strong>组合</strong>选中的对象<br>
            记住这几个组合，操作效率直接翻倍！
        </div>

        <div class="tip-box tip-info">
            <strong>💡 智能参考线</strong><br>
            当你移动文本框时，WPS会自动显示<strong>红色虚线参考线</strong>，帮你和其他元素对齐。看到参考线出现时，说明你的文本框已经和其他元素对齐了，这时松开鼠标就能精准定位。善用参考线，排版又快又整齐！
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 不要过度使用文本框</strong><br>
            有些同学喜欢在一页PPT上放十几个文本框，结果页面很乱，也难以管理。好的PPT设计原则是：<br>
            • 每页<strong>文本框不超过5-6个</strong><br>
            • 重要信息用<strong>大文本框</strong>突出，次要信息用<strong>小文本框</strong>辅助<br>
            • 相关内容尽量放在同一个文本框里，不要一句话一个框
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '在WPS演示中，插入文本框的操作路径是？',
            options: ['开始 → 文本框', '插入 → 文本框', '设计 → 文本框', '视图 → 文本框'],
            answer: 1,
            explanation: '插入文本框的正确路径是"插入"选项卡 → 文本框。"插入"选项卡包含了所有可以添加到幻灯片上的元素。'
        },
        {
            type: 'single',
            question: '选中文本框后，边框显示为"虚线"表示什么状态？',
            options: ['文本框被锁定', '正在编辑文字（编辑模式）', '准备删除文本框', '文本框即将移动'],
            answer: 1,
            explanation: '虚线边框表示文本框处于"编辑模式"，此时光标在文本框内，可以输入和修改文字。实线边框则是"选中模式"，可以移动、缩放文本框。'
        },
        {
            type: 'single',
            question: '按住哪个键拖拽文本框可以快速复制一个副本？',
            options: ['Shift', 'Alt', 'Ctrl', 'Tab'],
            answer: 2,
            explanation: '按住 Ctrl 键拖拽任何对象（文本框、图片等），松开后会在新位置生成一个副本。这是PPT中最常用的复制技巧。'
        },
        {
            type: 'judge',
            question: '在PPT中，文字可以直接输入在幻灯片上，不需要文本框。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！PPT是画布型软件，所有文字必须放在文本框里。这和Word不同，Word可以直接在页面上打字。'
        },
        {
            type: 'single',
            question: '想让三个并排的文本框保持等间距排列，应该使用什么功能？',
            options: ['垂直居中', '横向分布', '左对齐', '组合'],
            answer: 1,
            explanation: '"横向分布"可以让多个选中的对象在水平方向上等间距排列。先全部选中（Ctrl + 点击），再使用"对齐 → 横向分布"即可。'
        },
        {
            type: 'multiple',
            question: '以下哪些是调整文本框大小的正确方法？（多选）',
            options: ['拖拽四角控制点', '拖拽边中点', '按住Shift拖拽四角等比缩放', '双击文本框'],
            answer: [0, 1, 2],
            explanation: '拖拽四角控制点可以同时改变宽高，拖拽边中点只改变单个方向的尺寸，Shift+四角可以等比缩放。双击文本框是进入编辑模式，不是调整大小。'
        },
        {
            type: 'single',
            question: '如何设置文本框的背景颜色？',
            options: ['开始 → 字体颜色', '右键 → 设置对象格式 → 填充', '插入 → 背景', '设计 → 配色'],
            answer: 1,
            explanation: '右键点击文本框 → "设置对象格式" → 在"填充"选项中选择颜色。注意"字体颜色"改的是文字颜色，不是文本框背景色。'
        },
        {
            type: 'single',
            question: '从编辑模式（虚线边框）切换到选中模式（实线边框）应该按什么键？',
            options: ['Enter', 'Tab', 'Esc', 'Space'],
            answer: 2,
            explanation: '按 Esc 键可以从编辑模式退出到选中模式。反过来，按 Enter 或双击可以从选中模式进入编辑模式。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作电商店铺618标语卡片
            </div>
            <div class="practice-task-body">
                <p>请完成一张完整的618促销标语卡片PPT，具体要求：</p>
                <ol>
                    <li>
                        <strong>页面上至少包含5个文本框</strong><br>
                        包括：主标语、副标语/活动时间、3个优惠信息框
                    </li>
                    <li>
                        <strong>使用对齐工具</strong><br>
                        3个优惠信息框必须使用"顶端对齐"和"横向分布"使其整齐排列
                    </li>
                    <li>
                        <strong>至少2个文本框设置了背景色填充</strong><br>
                        使用电商常用的红色、橙色等活力颜色
                    </li>
                    <li>
                        <strong>使用Ctrl+拖拽复制技巧</strong><br>
                        至少有1个文本框是通过Ctrl+拖拽复制出来的
                    </li>
                    <li>
                        <strong>至少1个文本框设置了旋转效果</strong><br>
                        比如一个倾斜的"HOT""NEW""限时"等标签
                    </li>
                </ol>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试给文本框设置不同的内边距，对比效果</li>
                    <li>尝试使用纵向文本框做一个竖排的装饰文字</li>
                    <li>额外制作一张"双十一"或"年货节"版本的标语卡片</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 插入和删除文本框<br>
            ✅ 移动、缩放、旋转文本框<br>
            ✅ 复制文本框（3种方法）<br>
            ✅ 设置填充色、边框、内边距<br>
            ✅ 使用对齐工具排列多个文本框<br>
            ✅ 编辑模式与选中模式的切换<br><br>
            下一课我们将学习<strong>字体、字号、颜色与段落</strong>的设置，让你的文字更漂亮！
        </div>
    `
};