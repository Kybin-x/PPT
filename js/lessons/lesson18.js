/**
 * PPT学习站 - 第18课：动画高级技巧
 * 模块：动画与切换
 */
window.lessonData = {
    scenario: '你为产品展示PPT加了基础动画，但总监说："能不能让产品图片先放大展示，然后文字从下方滑入，再配合高亮标注——像发布会那样？"今天我们学习动画的高级技巧，让你的PPT接近专业发布会级别！',
    knowledge: `
        <h3>一、动画计时精确控制</h3>
        <p>通过<strong>动画窗格</strong>，可以精确控制每个动画的时间：</p>
        <ul>
            <li><strong>持续时间</strong>：动画播放多长时间（推荐0.3-0.7秒）</li>
            <li><strong>延迟</strong>：上一个动画结束后，等多久再开始（可以制造节奏感）</li>
            <li><strong>开始</strong>：单击时 / 与上一动画同时 / 上一动画之后</li>
        </ul>
        <div class="tip-box tip-info">
            <strong>💡 用"延迟"制造节奏感</strong><br>
            例如：3个数据卡片同时用"与上一动画同时"，但设置不同的延迟（0秒、0.1秒、0.2秒），这样3张卡片会依次快速出现，看起来很有节奏感，比同时出现更专业！
        </div>
        <h3>二、动画效果选项</h3>
        <p>双击动画窗格中的某个动画，弹出"效果选项"对话框，里面有很多高级设置：</p>
        <h4>效果标签</h4>
        <ul>
            <li><strong>方向</strong>：飞入的方向（从左、右、上、下、左上角等）</li>
            <li><strong>弹跳结束</strong>：元素出现时是否有轻微弹跳（建议关闭，显得稳重）</li>
            <li><strong>动画文本</strong>：整体出现 / 按字/词出现（效果很酷但要慎用）</li>
        </ul>
        <h4>计时标签</h4>
        <ul>
            <li>更精确地设置持续时间（精确到0.01秒）</li>
            <li>重复次数（建议"无"，循环动画容易让人烦躁）</li>
        </ul>
        <h4>文本动画标签（仅文本框）</h4>
        <ul>
            <li><strong>按第一级段落</strong>：文字每次出现一条（做逐条动画的关键！）</li>
            <li><strong>整批</strong>：文本框整体出现</li>
        </ul>
        <h3>三、路径动画</h3>
        <p>路径动画让元素沿着指定路径移动，可以制作产品"飞入"等效果。</p>
        <h4>预设路径</h4>
        <p>在动画库的"路径"类中有直线、弧形、圆形等预设路径，点击即可应用。</p>
        <h4>自定义路径</h4>
        <ol>
            <li>选中元素 → 动画库 → 路径 → <strong>"自定义路径"</strong></li>
            <li>鼠标变成十字准星，在幻灯片上<strong>单击划出路径</strong></li>
            <li>双击结束路径绘制</li>
            <li>绿色箭头=起点，红色箭头=终点</li>
        </ol>
        <div class="tip-box tip-success">
            <strong>🎯 路径动画的实用场景</strong><br>
            • 产品从箱子里"飞出"展示<br>
            • 电商数据从低到高"上升"的动态效果<br>
            • 地图上物流路线的动态展示<br>
            • 模拟用户点击路径的演示
        </div>
        <h3>四、触发器动画</h3>
        <p><strong>触发器</strong>是更高级的动画控制——点击某个特定元素（而不是任意点击）才触发动画。</p>
        <h4>设置触发器</h4>
        <ol>
            <li>选中要触发的动画，在动画窗格中点击下拉箭头</li>
            <li>选择 <strong>"计时"</strong> → 触发器</li>
            <li>勾选<strong>"单击下列对象时启动效果"</strong></li>
            <li>从下拉列表选择触发这个动画的对象</li>
        </ol>
        <h4>典型用法</h4>
        <p>做一个"点击产品图片，弹出产品详情"的交互效果：点击图片 → 出现标注文字框</p>
        <h3>五、组合动画打造发布会效果</h3>
        <p>专业的产品发布会PPT通常用以下动画组合：</p>
        <ol>
            <li>产品图片：<strong>缩放进入</strong>（从小变大，制造"登场感"），0.7秒</li>
            <li>产品名称：<strong>淡化进入</strong>（延迟0.3秒），0.3秒</li>
            <li>卖点文字：<strong>飞入（从左）</strong>，按段落，每条0.3秒</li>
            <li>价格数字：<strong>淡化进入 + 强调放大</strong>，制造"震撼感"</li>
        </ol>
        <div class="tip-box tip-warning">
            <strong>⚠️ 高级动画的注意事项</strong><br>
            • 路径动画和触发器会让文件更复杂，确保电脑性能够用<br>
            • 在目标电脑上提前测试，避免卡顿<br>
            • 动画越复杂，PPT文件越大，尽量精简
        </div>
        <h3>六、动画刷——快速复制动画</h3>
        <p>类似格式刷，WPS的<strong>动画刷</strong>可以把一个元素的动画设置复制到其他元素：</p>
        <ol>
            <li>选中已设好动画的元素</li>
            <li>点击"动画"选项卡中的 <strong>"动画刷"</strong> 按钮</li>
            <li>点击要应用相同动画的元素</li>
            <li>该元素立刻拥有相同的动画设置</li>
        </ol>
    `,
    steps: `
        <div class="step-card"><div class="step-card-number">1</div><div class="step-card-title">制作产品展示页基础布局</div><div class="step-card-desc"><p>新建一页空白幻灯片，添加：一张产品图片（居中较大）、产品名称文本框、3条卖点文字、一个价格文本框。</p></div></div>
        <div class="step-card"><div class="step-card-number">2</div><div class="step-card-title">产品图片添加缩放进入动画</div><div class="step-card-desc"><ol><li>选中产品图片</li><li>动画 → 选择<strong>"缩放"</strong>（进入类）</li><li>持续时间：<strong>0.70秒</strong>，触发：单击时</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">3</div><div class="step-card-title">产品名称淡化进入（带延迟）</div><div class="step-card-desc"><ol><li>选中产品名称文本框</li><li>动画 → <strong>"淡化"</strong>（进入）</li><li>触发：<strong>与上一动画同时</strong></li><li>延迟：<strong>0.30秒</strong>（等图片出来0.3秒后再出现名称）</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">4</div><div class="step-card-title">卖点文字逐条飞入</div><div class="step-card-desc"><ol><li>选中卖点文字文本框</li><li>动画 → <strong>"飞入（自左侧）"</strong></li><li>触发：单击时</li><li>双击动画窗格中该动画 → "文本动画"→ 选<strong>"按第一级段落"</strong></li></ol></div></div>
        <div class="step-card"><div class="step-card-number">5</div><div class="step-card-title">价格添加强调动画</div><div class="step-card-desc"><ol><li>选中价格文本框</li><li>先加<strong>淡化进入</strong>（单击时，0.3秒）</li><li>再加<strong>强调→放大/缩小</strong>（与上一动画同时，延迟0.2秒）</li><li>这样价格出现后立刻放大，制造冲击感</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">6</div><div class="step-card-title">尝试路径动画</div><div class="step-card-desc"><ol><li>新增一个小装饰形状（如五角星）</li><li>动画 → 路径 → <strong>"弧形"</strong></li><li>调整路径起点和终点，让星星沿弧线飘落</li><li>持续时间1秒，触发"上一动画之后"</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">7</div><div class="step-card-title">使用动画刷复制动画</div><div class="step-card-desc"><ol><li>选中卖点文字框（已有飞入动画）</li><li>点击 <strong>"动画刷"</strong></li><li>点击另一个文本框，它立刻获得相同动画</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">8</div><div class="step-card-title">放映测试整体效果</div><div class="step-card-desc"><p>按 <span class="kbd">Shift</span>+<span class="kbd">F5</span> 从当前页开始放映，依次点击，检查动画节奏是否符合预期。</p></div></div>
    `,
    tips: `
        <div class="tip-box tip-info"><strong>💡 用延迟制造错落感</strong><br>3个数据卡片全部设为"与上一动画同时"，但延迟分别设为0秒、0.15秒、0.30秒，三张卡片会快速依次出现，效果远比同时出现更有节奏感。</div>
        <div class="tip-box tip-warning"><strong>⚠️ 动画在放映时才显示</strong><br>编辑模式下看不到动画效果，必须按F5或Shift+F5进入放映模式才能看到完整的动画效果。点击"预览"只能看到单个动画的效果。</div>
        <div class="tip-box tip-success"><strong>🌟 清除所有动画的快速方法</strong><br>选中所有对象（Ctrl+A） → 动画选项卡 → 在动画库中选择最左边的<strong>"无"</strong>，一键清除当前页所有动画。</div>
    `,
    quiz: [
        { type: 'single', question: '以下哪种方式可以让3个元素以0.15秒间隔依次出现，但只需点击一次？', options: ['3个都设为"单击时"', '都设"与上一动画同时"，延迟分别设0/0.15/0.30秒', '都设为"上一动画之后"', '不加动画'], answer: 1, explanation: '将所有元素设为"与上一动画同时"，但分别设置递增的延迟，就能实现一次点击后元素依次快速出现的效果。' },
        { type: 'single', question: '在动画效果选项的"文本动画"标签中，选择什么选项可以让文字按段落逐条出现？', options: ['整批', '按字母', '按第一级段落', '按词'], answer: 2, explanation: '选择"按第一级段落"后，每次点击幻灯片，文本框中就出现一条（一段）文字，适合演讲时逐条讲解。' },
        { type: 'single', question: '路径动画中，绿色箭头和红色箭头分别代表什么？', options: ['开始和暂停', '起点和终点', '快速和慢速', '正向和反向'], answer: 1, explanation: '路径动画中，绿色箭头（▶）是起点，红色箭头（■）是终点。拖动它们可以调整路径的起始和结束位置。' },
        { type: 'judge', question: '动画刷可以将一个元素的动画设置快速复制给其他元素。', options: ['对', '错'], answer: 0, explanation: '正确！动画刷和格式刷类似，选中已有动画的元素，点击动画刷，再点击目标元素，即可复制动画设置。' },
        { type: 'single', question: '触发器动画的特点是什么？', options: ['动画速度特别快', '点击特定元素才触发对应动画', '自动循环播放', '只能用于图片'], answer: 1, explanation: '触发器让特定动画只在点击指定元素时才播放，而不是点击幻灯片任意位置。可以实现"点击产品图显示详情"等交互效果。' },
        { type: 'multiple', question: '以下哪些是制作"产品发布会"效果的推荐动画组合？（多选）', options: ['产品图片用缩放进入', '所有元素同时飞入', '产品名称淡化+延迟', '价格用强调放大'], answer: [0, 2, 3], explanation: '产品图缩放进入制造登场感，名称淡化+延迟让出现更有节奏，价格强调放大制造冲击感。让所有元素同时出现则没有节奏感。' },
        { type: 'judge', question: '在编辑模式下可以看到元素的完整动画播放效果。', options: ['对', '错'], answer: 1, explanation: '错误！必须进入放映模式（F5或Shift+F5）才能看到完整的动画效果。编辑模式下点击"预览"只能看到当前单个动画的预览。' },
        { type: 'single', question: '如果要删除一个元素的所有动画，最简单的方法是？', options: ['在动画窗格中逐条删除', '删除整个元素重新插入', '选中元素后在动画库中选择"无"', '按Delete键'], answer: 2, explanation: '选中元素后，在动画库中点击最左边的"无"（通常显示为空白格或"无动画"），即可清除该元素的所有动画。' }
    ],
    practice: `
        <div class="practice-task">
            <div class="practice-task-header"><span>🎯</span> 实战任务：制作产品发布会风格展示页</div>
            <div class="practice-task-body">
                <p>制作一个3页的"产品发布会"PPT：</p>
                <ol>
                    <li><strong>第1页：产品登场</strong> — 产品大图缩放进入(0.7秒)，产品名淡化+延迟0.3秒</li>
                    <li><strong>第2页：卖点展示</strong> — 3条卖点文字按段落依次飞入，每条0.3秒；末尾价格淡化进入后放大强调</li>
                    <li><strong>第3页：对比展示</strong> — 使用路径动画，让竞品图片从左滑入，我方产品从右滑入，形成对比</li>
                </ol>
                <p><strong>要求：</strong>全程按F5放映检查，动画节奏流畅、不拖沓。</p>
            </div>
        </div>
        <div class="tip-box tip-success"><strong>🎉 恭喜！"动画与切换"模块全部完成！</strong><br>你已经掌握了：切换效果、元素动画、动画计时控制、路径动画、触发器、动画刷。<br><br>下一模块：<strong>放映与输出</strong>——学习如何像专业演讲者一样放映PPT！</div>
    `
};
