/**
 * PPT学习站 - 第14课：幻灯片母版与主题
 * 文件路径: js/lessons/lesson14.js
 * 模块：高级设计
 * 任务情境：统一企业PPT风格
 */

window.lessonData = {
    scenario: '电商公司要制作一套企业级的PPT模板，需要在所有幻灯片上统一显示公司logo、页码、页脚等信息。如果逐个幻灯片手动添加，既费时又容易出错。这时候就需要用到幻灯片母版——一次设置，所有幻灯片自动应用。',

    knowledge: `
        <h3>一、什么是幻灯片母版？</h3>
        <p><strong>幻灯片母版</strong>是一个特殊的幻灯片，它定义了演示文稿中所有幻灯片的外观和布局。</p>
        <ul>
            <li>在母版上添加的元素（如logo、页脚）会自动出现在所有幻灯片上</li>
            <li>在母版上修改的格式（如字体、颜色）会自动应用到所有幻灯片</li>
            <li>可以创建多个母版，用于不同类型的幻灯片</li>
        </ul>

        <h3>二、母版的优势</h3>
        <ul>
            <li><strong>提高效率</strong> —— 一次设置，所有幻灯片自动应用</li>
            <li><strong>保证一致性</strong> —— 所有幻灯片的风格保持统一</li>
            <li><strong>便于修改</strong> —— 修改母版后，所有幻灯片自动更新</li>
            <li><strong>专业外观</strong> —— 企业级的PPT看起来更专业</li>
        </ul>

        <h3>三、进入母版编辑模式</h3>
        <ol>
            <li>点击菜单栏 <strong>"视图"</strong> → <strong>"幻灯片母版"</strong></li>
            <li>进入母版编辑模式，可以看到母版的结构</li>
            <li>编辑完成后，点击 <strong>"关闭母版视图"</strong> 返回正常编辑模式</li>
        </ol>

        <h3>四、母版的结构</h3>
        <ul>
            <li><strong>主母版</strong> —— 最上面的大幻灯片，定义了所有幻灯片的基本样式</li>
            <li><strong>版式母版</strong> —— 下面的小幻灯片，定义了不同类型幻灯片的布局</li>
            <li>常见的版式：标题幻灯片、标题和内容、仅标题等</li>
        </ul>

        <h3>五、在母版上添加元素</h3>
        <ul>
            <li><strong>Logo</strong> —— 在母版上插入公司logo，所有幻灯片都会显示</li>
            <li><strong>页脚</strong> —— 添加页码、日期、公司名称等信息</li>
            <li><strong>背景</strong> —— 设置母版的背景颜色或图片</li>
            <li><strong>文字框</strong> —— 添加固定的文字信息</li>
        </ul>

        <h3>六、什么是主题？</h3>
        <p><strong>主题</strong>是一套预设的设计方案，包括颜色、字体、效果等。</p>
        <ul>
            <li>WPS提供了许多内置主题，可以直接应用</li>
            <li>应用主题后，整个PPT的风格会立即改变</li>
            <li>可以自定义主题，保存为模板供以后使用</li>
        </ul>

        <h3>七、应用主题的步骤</h3>
        <ol>
            <li>点击菜单栏 <strong>"设计"</strong></li>
            <li>在右侧可以看到各种主题</li>
            <li>点击一个主题，整个PPT会立即应用这个主题</li>
            <li>可以点击 <strong>"更多"</strong> 查看更多主题</li>
        </ol>

        <h3>八、自定义主题</h3>
        <ul>
            <li><strong>颜色方案</strong> —— 修改主题的颜色</li>
            <li><strong>字体方案</strong> —— 修改主题的字体</li>
            <li><strong>效果方案</strong> —— 修改主题的效果（如阴影、反射等）</li>
            <li>修改后可以保存为自定义主题</li>
        </ul>

        <h3>九、页脚的设置</h3>
        <p>页脚是显示在幻灯片底部的信息，通常包括：</p>
        <ul>
            <li>页码</li>
            <li>日期</li>
            <li>公司名称或演讲者名称</li>
        </ul>
        <p>设置方法：菜单栏 → <strong>"插入"</strong> → <strong>"页脚"</strong></p>

        <h3>十、母版与主题的关系</h3>
        <ul>
            <li>母版定义了幻灯片的<strong>布局和结构</strong></li>
            <li>主题定义了幻灯片的<strong>颜色、字体、效果</strong></li>
            <li>两者结合，能创建出专业、统一的PPT</li>
        </ul>
    `,

    keyPoints: [
        { title: '什么是母版', content: '定义所有幻灯片外观和布局的特殊幻灯片' },
        { title: '母版的优势', content: '提高效率、保证一致性、便于修改、专业外观' },
        { title: '进入母版模式', content: '视图菜单 → 幻灯片母版' },
        { title: '母版的结构', content: '主母版和版式母版' },
        { title: '在母版上添加元素', content: 'Logo、页脚、背景、文字框' },
        { title: '什么是主题', content: '预设的设计方案，包括颜色、字体、效果' },
        { title: '应用主题', content: '设计菜单 → 选择主题' }
    ],

    quiz: [
        {
            type: 'single',
            question: '在母版上添加的logo会怎样？',
            options: [
                '只出现在当前幻灯片上',
                '出现在所有使用这个母版的幻灯片上',
                '需要逐个幻灯片手动添加',
                '无法在母版上添加logo'
            ],
            answer: 1,
            explanation: '母版的作用就是让添加的元素自动出现在所有幻灯片上。在母版上添加的logo会自动出现在所有使用这个母版的幻灯片上。'
        },
        {
            type: 'single',
            question: '修改了母版的背景颜色后，会发生什么？',
            options: [
                '只有当前幻灯片的背景改变',
                '所有幻灯片的背景都会改变',
                '需要逐个幻灯片手动修改',
                '无法修改母版的背景'
            ],
            answer: 1,
            explanation: '母版的修改会自动应用到所有幻灯片。修改母版的背景后，所有幻灯片的背景都会改变。'
        },
        {
            type: 'single',
            question: '主题和母版的主要区别是什么？',
            options: [
                '没有区别，是同一个东西',
                '母版定义布局和结构，主题定义颜色、字体、效果',
                '主题定义布局，母版定义颜色',
                '主题只能用于标题幻灯片'
            ],
            answer: 1,
            explanation: '母版和主题是两个不同的概念。母版定义了幻灯片的布局和结构，主题定义了颜色、字体、效果等设计元素。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：制作企业级PPT模板
            </div>
            <div class="practice-task-body">
                <p>请制作一个企业级的PPT模板，包含统一的风格和元素：</p>
                <ol>
                    <li>
                        <strong>编辑幻灯片母版</strong><br>
                        • 进入母版编辑模式<br>
                        • 在主母版上添加公司logo（可以用任何图片代替）<br>
                        • 添加页脚信息：公司名称、页码、日期<br>
                        • 设置统一的背景颜色或图片<br>
                        • 调整标题和内容的字体、大小、颜色
                    </li>
                    <li>
                        <strong>应用主题</strong><br>
                        • 返回正常编辑模式<br>
                        • 应用一个内置主题（如"Office主题"或"蓝色主题"）<br>
                        • 观察主题对PPT的影响
                    </li>
                    <li>
                        <strong>创建多个幻灯片</strong><br>
                        • 创建至少3张幻灯片<br>
                        • 使用不同的版式（标题幻灯片、标题和内容等）<br>
                        • 观察母版和主题的应用效果
                    </li>
                    <li>
                        <strong>自定义主题（可选）</strong><br>
                        • 修改主题的颜色方案<br>
                        • 修改主题的字体方案<br>
                        • 保存为自定义主题
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>所有幻灯片的风格保持一致</li>
                    <li>Logo和页脚在所有幻灯片上都能看到</li>
                    <li>颜色搭配协调，符合企业形象</li>
                    <li>字体清晰易读</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>制作一个企业级的PPT模板</strong>，实战掌握母版和主题的使用。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建PPT</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>企业PPT模板.pptx</code></p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">进入幻灯片母版编辑模式</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"视图"</strong> → <strong>"幻灯片母版"</strong></p>
                <p>进入母版编辑模式，可以看到：</p>
                <ul>
                    <li>左侧显示母版的结构（主母版和各种版式母版）</li>
                    <li>中央显示当前选中的母版</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">在主母版上添加背景</div>
            <div class="step-card-desc">
                <p>确保选中左侧最上面的主母版</p>
                <p>右键母版 → <strong>"设置背景格式"</strong></p>
                <p>选择一个背景：</p>
                <ul>
                    <li>纯色背景：选择白色或浅灰色</li>
                    <li>或者选择一个浅色的渐变背景</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">在母版上添加Logo</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"图片"</strong></p>
                <p>选择一张图片作为logo（可以用任何图片代替）</p>
                <p>调整logo的大小和位置：</p>
                <ul>
                    <li>通常放在左上角或右上角</li>
                    <li>大小不要太大，不要遮挡主要内容</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">在母版上添加页脚</div>
            <div class="step-card-desc">
                <p>在母版底部添加文字框，用于显示页脚信息</p>
                <p>点击菜单栏 <strong>"插入"</strong> → <strong>"文本框"</strong></p>
                <p>在母版底部绘制一个文本框</p>
                <p>输入页脚内容：</p>
                <ul>
                    <li>左侧：公司名称（如"电商公司"）</li>
                    <li>右侧：页码（如"第 1 页"）</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">格式化页脚文字</div>
            <div class="step-card-desc">
                <p>选中页脚文本框</p>
                <p>调整文字格式：</p>
                <ul>
                    <li>字号：10-12pt（比主要内容小）</li>
                    <li>颜色：浅灰色</li>
                    <li>字体：与主题字体一致</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">调整标题和内容的格式</div>
            <div class="step-card-desc">
                <p>在主母版上，可以看到标题和内容的占位符</p>
                <p>点击标题占位符，调整：</p>
                <ul>
                    <li>字体：选择清晰易读的字体（如微软雅黑）</li>
                    <li>字号：44-54pt</li>
                    <li>颜色：深蓝色或黑色</li>
                </ul>
                <p>点击内容占位符，调整：</p>
                <ul>
                    <li>字体：同标题</li>
                    <li>字号：18-24pt</li>
                    <li>颜色：深灰色</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">关闭母版编辑模式</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"视图"</strong> → <strong>"关闭母版视图"</strong></p>
                <p>返回正常编辑模式</p>
                <p>观察第1页，应该能看到：</p>
                <ul>
                    <li>Logo出现在左上角</li>
                    <li>页脚出现在底部</li>
                    <li>背景颜色已应用</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">应用主题</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"设计"</strong></p>
                <p>在右侧可以看到各种主题</p>
                <p>选择一个你喜欢的主题（如"蓝色主题"或"绿色主题"）</p>
                <p>点击后，整个PPT的颜色和字体会立即改变</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">创建多个幻灯片</div>
            <div class="step-card-desc">
                <p>新建第2页，选择"标题和内容"版式</p>
                <p>添加标题："产品介绍"</p>
                <p>添加一些内容文字</p>
                <p>观察logo和页脚是否自动出现</p>
                <p>新建第3页，重复上述步骤</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">11</div>
            <div class="step-card-title">验证母版应用效果</div>
            <div class="step-card-desc">
                <p>检查所有幻灯片：</p>
                <ul>
                    <li>Logo是否在所有幻灯片上都显示</li>
                    <li>页脚是否在所有幻灯片上都显示</li>
                    <li>背景颜色是否一致</li>
                    <li>字体和颜色是否一致</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">12</div>
            <div class="step-card-title">自定义主题颜色（可选）</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"设计"</strong> → <strong>"颜色"</strong></p>
                <p>选择一个颜色方案，或点击 <strong>"自定义颜色"</strong> 创建自己的颜色方案</p>
                <p>修改主题颜色后，整个PPT的颜色会改变</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">13</div>
            <div class="step-card-title">保存模板</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存PPT</p>
                <p>如果想保存为模板供以后使用：</p>
                <ul>
                    <li>点击菜单栏 <strong>"文件"</strong> → <strong>"另存为"</strong></li>
                    <li>选择 <strong>"WPS演示模板"</strong> 格式</li>
                    <li>保存为 <code>企业模板.potx</code></li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>母版编辑的技巧</strong><br>
            • 在母版上添加的元素会自动出现在所有幻灯片上<br>
            • 但在普通幻灯片上添加的元素只会出现在该幻灯片上<br>
            • 可以在普通幻灯片上隐藏母版上的某些元素（如logo）<br>
            • 修改母版后，所有基于该母版的幻灯片都会自动更新<br><br>
            这就是母版的强大之处——一次修改，全局生效。
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ 母版使用的常见错误</strong><br>
            1. <strong>在普通幻灯片上添加logo</strong>：应该在母版上添加，这样所有幻灯片都有<br>
            2. <strong>修改了母版后没有保存</strong>：修改母版后一定要保存，否则下次打开时会丢失<br>
            3. <strong>混淆了母版和主题</strong>：母版是布局，主题是颜色和字体<br>
            4. <strong>在母版上放太多元素</strong>：会显得拥挤，影响内容展示<br><br>
            建议：母版上只放必要的元素（logo、页脚），其他内容在普通幻灯片上添加。
        </div>
        <div class="tip-box tip-success">
            <strong>母版的高级技巧</strong><br>
            • 可以创建多个母版，用于不同类型的演讲<br>
            • 可以为不同的版式设置不同的背景<br>
            • 可以在母版上添加水印或背景图案<br>
            • 可以保存自定义主题，供团队使用<br><br>
            这些技巧能让你的PPT更加专业和个性化！
        </div>
    `,

    summary: `
        <div class="tip-box tip-success">
            <strong>完成本课后，你已经掌握了：</strong><br>
            ✅ 什么是幻灯片母版<br>
            ✅ 进入和退出母版编辑模式<br>
            ✅ 在母版上添加logo、页脚等元素<br>
            ✅ 在母版上设置背景和格式<br>
            ✅ 母版的结构（主母版和版式母版）<br>
            ✅ 什么是主题以及如何应用主题<br>
            ✅ 自定义主题的颜色和字体<br>
            ✅ 保存PPT模板供以后使用<br><br>
            下一课我们将学习<strong>演讲者视图与放映技巧</strong>——掌握PPT放映的各种技巧，让你在演讲时更加从容自信！
        </div>
    `
};
