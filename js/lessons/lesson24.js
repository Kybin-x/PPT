/**
 * PPT学习站 - 第24课：母版设计与全局格式管理
 * 文件路径: js/lessons/lesson24.js
 * 模块：WPS特色功能
 * 任务情境：为公司设计统一的PPT模板
 */

window.lessonData = {

    scenario: '你所在的电商公司每周都要做很多PPT——周报、月报、产品发布、活动策划……但每个人做的PPT风格各不相同，字体不一、颜色乱、logo位置也不统一，发给客户很不专业。上司说："你来整理一个公司统一的PPT模板，以后大家都用这个做！"今天来学PPT的核心进阶技能——母版设计！',

    knowledge: `
        <h3>一、什么是母版？</h3>
        <p><strong>幻灯片母版</strong>（Slide Master）是PPT的"总控室"——在母版上做的任何修改，都会自动应用到所有使用该版式的幻灯片上。</p>

        <div class="tip-box tip-info">
            <strong>💡 母版的原理</strong><br>
            把母版想象成一张"底层纸"：<br>
            • 每张幻灯片都叠在这张底层纸上<br>
            • 底层纸上有Logo、公司名称、背景图案、统一的字体设置<br>
            • 你在普通编辑视图里不能直接修改底层纸，只能通过"母版视图"<br>
            • 改了底层纸，所有叠在上面的幻灯片都会跟着变<br><br>
            这就是为什么大公司的PPT模板，无论谁来填内容，Logo和品牌色都不会乱的原因！
        </div>

        <h3>二、进入母版视图</h3>
        <ol>
            <li>点击 <strong>"视图"</strong> 选项卡</li>
            <li>点击 <strong>"幻灯片母版"</strong></li>
            <li>界面变化：左侧面板第一个大缩略图是<strong>主母版</strong>，下方小缩略图是<strong>各版式母版</strong></li>
            <li>顶部出现 <strong>"幻灯片母版"</strong> 专属选项卡</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 主母版 vs 版式母版</strong><br>
            <strong>主母版</strong>（第一个，最大的）：<br>
            → 在这里做的修改，影响所有版式（所有页面都会变）<br>
            → 适合放：Logo、背景色/图、全局字体、页脚<br><br>
            <strong>版式母版</strong>（小的，排在主母版下方）：<br>
            → 每种版式单独控制（只影响使用该版式的页面）<br>
            → 适合放：版式特定的装饰元素、占位符位置调整
        </div>

        <h3>三、在主母版中设置全局元素</h3>

        <h4>1. 添加公司Logo</h4>
        <ol>
            <li>在主母版视图中，插入 → 图片 → 选择Logo文件</li>
            <li>将Logo移到右上角（或左上角，按公司规范）</li>
            <li>调整大小，确保不影响内容区域</li>
            <li>退出母版视图后，所有页面都会出现Logo</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ Logo在母版上的版权保护</strong><br>
            放在母版上的Logo，在普通编辑视图中<strong>无法被选中或移动</strong>（除非进入母版视图）。这确保了非设计人员填写内容时，Logo不会被意外移动。<br>
            但需要注意：转为图片格式（jpg/png）的PPT，这个保护就不存在了。
        </div>

        <h4>2. 设置全局字体</h4>
        <ol>
            <li>在主母版视图中，主母版选项卡 → <strong>"字体"</strong></li>
            <li>选择一组字体组合（标题字体+正文字体）</li>
            <li>例如：标题"微软雅黑 Bold"，正文"微软雅黑 Regular"</li>
            <li>或者在字体下拉菜单中选 <strong>"自定义字体"</strong>，分别设置标题和正文</li>
        </ol>

        <h4>3. 设置全局配色</h4>
        <ol>
            <li>主母版选项卡 → <strong>"颜色"</strong></li>
            <li>选择一个预设配色方案，或点击<strong>"自定义颜色"</strong></li>
            <li>输入公司品牌色的十六进制色码（如 #0052CC 是一种深蓝色）</li>
            <li>设置强调色、超链接色等</li>
        </ol>

        <h4>4. 设置背景</h4>
        <ol>
            <li>主母版视图中，右键主母版 → <strong>"设置背景格式"</strong></li>
            <li>选择纯色、渐变、图片或纹理背景</li>
            <li>背景会应用到所有使用该母版的幻灯片</li>
        </ol>

        <h3>四、创建自定义版式</h3>
        <p>除了修改现有版式，你还可以创建全新的版式：</p>
        <ol>
            <li>在母版视图的左侧面板，右键某个版式 → <strong>"插入版式"</strong></li>
            <li>给新版式命名（如"图文左右版式""数据展示版式"）</li>
            <li>在版式上放置<strong>占位符</strong>（插入 → 占位符 → 选择类型）</li>
            <li>占位符是普通视图中用来填入内容的容器</li>
        </ol>

        <div class="tip-box tip-info">
            <strong>💡 占位符的类型</strong><br>
            • <strong>内容</strong>：可以放文字、图片、表格等任意内容<br>
            • <strong>文本</strong>：只能放文字<br>
            • <strong>图片</strong>：专门用于放图片（点击后弹出插入图片对话框）<br>
            • <strong>标题</strong>：专门用于标题文字<br>
            • <strong>媒体</strong>：用于视频/音频<br>
        </div>

        <h3>五、退出母版视图与检验效果</h3>
        <ol>
            <li>设置完成后，点击 <strong>"关闭母版视图"</strong>（或直接切换到"视图→普通"）</li>
            <li>返回普通编辑视图，查看效果</li>
            <li>新建幻灯片：右键左侧面板 → "新建幻灯片" → 可以选择你创建的版式</li>
        </ol>

        <h3>六、将母版保存为模板</h3>
        <p>设计好的母版可以保存为模板，方便以后直接使用：</p>
        <ol>
            <li>文件 → 另存为</li>
            <li>文件类型选择 <strong>"WPS演示模板（*.dpt）"</strong> 或 <strong>"PowerPoint模板（*.potx）"</strong></li>
            <li>保存到WPS的模板文件夹（系统会提示默认路径）</li>
            <li>以后新建PPT时，可以在"我的模板"中找到这个模板</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🌟 公司PPT模板的推荐内容</strong><br>
            一套完整的公司PPT模板应该包含以下版式：<br>
            • 封面版式（大标题 + 副标题 + 日期）<br>
            • 目录版式（章节列表）<br>
            • 章节标题版式（分隔页）<br>
            • 纯文字版式（正文内容页）<br>
            • 图文版式（左图右文、左文右图）<br>
            • 数据图表版式（留出图表区域）<br>
            • 结尾/致谢版式<br><br>
            以上7种版式可以覆盖90%的PPT制作需求！
        </div>
    `,

    steps: `
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建PPT并进入母版视图</div>
            <div class="step-card-desc">
                <ol>
                    <li>新建一个空白PPT（不使用任何模板）</li>
                    <li>点击 <strong>"视图"</strong> → <strong>"幻灯片母版"</strong></li>
                    <li>观察左侧面板：最顶部大图是主母版，下方是各版式</li>
                    <li>点击<strong>主母版</strong>（第一个大缩略图）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">设置全局字体和配色</div>
            <div class="step-card-desc">
                <ol>
                    <li>在"幻灯片母版"选项卡中，点击<strong>"字体"</strong></li>
                    <li>选择一个组合，或自定义：标题"微软雅黑"，正文"微软雅黑"</li>
                    <li>点击<strong>"颜色"</strong>，选择一个配色方案（如"蓝色"系列）</li>
                    <li>或选"自定义颜色"，输入你喜欢的十六进制颜色</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">在主母版上添加Logo和页脚</div>
            <div class="step-card-desc">
                <ol>
                    <li>确认选中的是<strong>主母版</strong>（不是版式）</li>
                    <li>插入 → 文本框，在右上角输入公司名称（如"飞跃跨境电商"）或插入Logo图片</li>
                    <li>字体大小14-16pt，颜色用品牌色</li>
                    <li>在底部插入文本框，输入页脚（如年份、版权信息）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">设置主母版背景</div>
            <div class="step-card-desc">
                <ol>
                    <li>右键主母版区域 → <strong>"设置背景格式"</strong></li>
                    <li>选择纯色填充，颜色选白色（#FFFFFF）或极淡的灰（#F8F8F8）</li>
                    <li>或者选择渐变填充，创建有层次感的背景</li>
                    <li>点击"全部应用"</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">修改封面版式</div>
            <div class="step-card-desc">
                <ol>
                    <li>在左侧面板中，点击第一个小版式（通常是"封面"版式）</li>
                    <li>将标题占位符调大，放在页面中央</li>
                    <li>添加一条装饰色块（和品牌色一致）作为视觉元素</li>
                    <li>封面版式上不需要公司Logo（因为Logo会从主母版继承）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">退出母版视图，测试效果</div>
            <div class="step-card-desc">
                <ol>
                    <li>点击<strong>"关闭母版视图"</strong></li>
                    <li>回到普通视图，看到第一页已经有了你在母版上设置的Logo和背景</li>
                    <li>新建几张幻灯片，观察每张都自动继承了Logo和背景</li>
                    <li>右键新建幻灯片时，可以看到并选择不同版式</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">保存为模板文件</div>
            <div class="step-card-desc">
                <ol>
                    <li>文件 → 另存为</li>
                    <li>文件类型选 <strong>"PowerPoint模板（*.potx）"</strong></li>
                    <li>文件名：<code>电商公司PPT模板_2024.potx</code></li>
                    <li>保存到桌面或易于找到的位置</li>
                    <li>以后制作PPT时，从这个模板开始即可</li>
                </ol>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-danger">
            <strong>🚨 母版设计的常见失误</strong><br>
            1. <strong>在普通视图修改了母版元素位置</strong>：普通视图里是改不了母版内容的，如果发现Logo可以被选中，说明这个Logo是放在普通幻灯片层（不在母版上）<br>
            2. <strong>每个版式都设置了不同的Logo位置</strong>：应该只在主母版上放一次Logo<br>
            3. <strong>退出母版视图忘了删多余版式</strong>：未使用的版式会让文件变大，应该删掉不用的<br>
            4. <strong>字体设置后发现字体在别人电脑上不显示</strong>：尽量选系统字体（微软雅黑、黑体等），避免特殊字体
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 母版设计的最佳实践</strong><br>
            • <strong>主母版只放全局元素</strong>（Logo、背景、页脚），不放内容<br>
            • <strong>颜色不超过3种</strong>（主色+辅助色+强调色），保持统一<br>
            • <strong>字体不超过2种</strong>（标题字体+正文字体）<br>
            • <strong>保留足够的内容区域</strong>，不要装饰元素太多占满空间<br>
            • <strong>给版式起有意义的名称</strong>，方便团队使用时选择
        </div>

        <div class="tip-box tip-info">
            <strong>💡 什么时候用母版而非直接设计？</strong><br>
            • <strong>需要制作10页以上的PPT</strong>：母版能保证每页统一<br>
            • <strong>需要多人协作</strong>：先设计好母版，团队成员只填内容<br>
            • <strong>公司/部门的通用模板</strong>：一次设计，长期使用<br>
            • <strong>系列PPT</strong>（月报、周报等）：同一套母版，格式统一<br><br>
            只做一次性的临时PPT，不一定需要设计母版。
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '"幻灯片母版"的主要作用是：',
            options: ['存储幻灯片的备份', '统一控制所有幻灯片的全局样式（字体、背景、Logo等）', '记录幻灯片的修改历史', '保存放映设置'],
            answer: 1,
            explanation: '幻灯片母版是PPT的"总控室"，在母版上设置的元素（如Logo、背景、字体）会自动应用到所有使用该母版的幻灯片，实现全局统一管理。'
        },
        {
            type: 'single',
            question: '进入幻灯片母版视图的操作路径是：',
            options: ['插入 → 母版', '视图 → 幻灯片母版', '设计 → 主题 → 编辑母版', '格式 → 幻灯片母版'],
            answer: 1,
            explanation: '进入母版视图的路径是：视图选项卡 → 幻灯片母版。这会切换到专门的母版编辑界面，左侧显示主母版和各版式母版。'
        },
        {
            type: 'single',
            question: '公司Logo应该放在PPT母版的哪个位置？',
            options: ['每个版式母版上单独放置', '只放在主母版上', '只放在封面版式上', '放在幻灯片正文区域'],
            answer: 1,
            explanation: 'Logo应该放在主母版（第一个，最大的）上，这样所有版式都会继承Logo，不需要在每个版式上重复添加。封面如果不需要Logo，可以在封面版式上专门遮盖或不显示。'
        },
        {
            type: 'judge',
            question: '在普通编辑视图中，可以直接选中并移动母版上的Logo。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！放在母版上的元素（如Logo）在普通编辑视图中无法被选中或移动，必须进入母版视图才能修改。这是母版的保护特性，防止内容编辑时意外移动全局元素。'
        },
        {
            type: 'multiple',
            question: '一套完整的公司PPT模板应该包含哪些版式？（多选）',
            options: ['封面版式', '目录版式', '图文版式', '数据图表版式'],
            answer: [0, 1, 2, 3],
            explanation: '完整的公司PPT模板应该包含：封面版式、目录版式、章节标题版式、纯文字版式、图文版式、数据图表版式、结尾版式等，覆盖各类内容需求。以上四个选项都是必要版式。'
        },
        {
            type: 'single',
            question: '设计好母版后，应该将文件保存为什么格式，以便以后作为模板使用？',
            options: ['.pptx（普通演示文件）', '.pdf（PDF文件）', '.potx（PowerPoint模板）', '.docx（Word文档）'],
            answer: 2,
            explanation: '模板文件应保存为.potx格式（PowerPoint模板），或WPS的.dpt格式。以模板格式保存后，用它创建新PPT时会自动使用你的母版设计，且不会修改模板文件本身。'
        },
        {
            type: 'single',
            question: '主母版和版式母版的区别是：',
            options: ['大小不同，功能相同', '主母版影响所有页面，版式母版只影响使用该版式的页面', '版式母版的优先级高于主母版', '它们是相互独立的，没有关联'],
            answer: 1,
            explanation: '主母版的修改影响所有使用该母版的幻灯片；版式母版的修改只影响使用该特定版式的幻灯片。版式会继承主母版的设置，同时可以添加自己特有的元素。'
        },
        {
            type: 'judge',
            question: '设计PPT时，颜色越多越丰富，越能体现设计感。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！专业的PPT设计通常控制在3种颜色以内（主色+辅助色+强调色）。颜色太多会显得杂乱无序，缺乏专业感。统一、克制的配色才是高水平设计的体现。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作"飞跃跨境电商"公司PPT模板
            </div>
            <div class="practice-task-body">
                <p>请为飞跃跨境电商有限公司制作一套完整的PPT母版模板：</p>
                <ol>
                    <li>
                        <strong>主母版设置</strong>
                        <ul>
                            <li>全局字体：标题"微软雅黑 Bold"，正文"微软雅黑"</li>
                            <li>右上角添加公司名称文字"飞跃跨境"</li>
                            <li>底部添加页脚：左侧公司名，右侧"版权所有"</li>
                        </ul>
                    </li>
                    <li>
                        <strong>封面版式</strong>：大标题居中，添加蓝色装饰色块，副标题和日期占位符
                    </li>
                    <li>
                        <strong>内容版式</strong>：标题在顶部，内容区域在下方
                    </li>
                    <li>
                        <strong>图文版式</strong>：左图右文布局，图片和文字各占一半
                    </li>
                    <li>
                        <strong>退出母版视图</strong>，新建5张幻灯片测试，每张选用不同版式
                    </li>
                    <li>
                        <strong>保存为.potx模板文件</strong>
                    </li>
                </ol>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 "WPS特色功能"模块全部完成！</strong><br>
            经过第21-24课，你已经掌握了：<br>
            ✅ WPS AI的使用技巧和正确姿势<br>
            ✅ 云文档多端同步和团队协作<br>
            ✅ 稻壳儿模板库的高效使用<br>
            ✅ 母版设计和全局格式管理<br><br>
            最后两课我们进入<strong>"综合实战"</strong>模块，用前24课所学，完成真实的职业场景项目！
        </div>
    `
};
