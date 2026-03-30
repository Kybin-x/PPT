/**
 * PPT学习站 - 第9课：SmartArt图示
 * 文件路径: js/lessons/lesson09.js
 * 模块：图片与图形
 * 任务情境：绘制跨境电商发货流程图
 */

window.lessonData = {

    scenario: '仓库主管问你："能不能做一张发货流程图？新来的实习生老是搞不清楚从接单到发货有哪些步骤。"如果用纯文字列表写流程，效果一般。如果用形状一个一个拼，太费时间。WPS演示有一个神器叫SmartArt——几秒钟就能做出专业的流程图、组织架构图、循环图！',

    knowledge: `
        <h3>一、什么是SmartArt？</h3>
        <p>SmartArt是WPS演示（和PowerPoint）内置的<strong>智能图示工具</strong>。你只需要输入文字内容，SmartArt会<strong>自动生成</strong>好看的图形布局，包括：</p>
        <ul>
            <li><strong>流程图</strong> —— 展示步骤、阶段、先后顺序</li>
            <li><strong>层次结构</strong> —— 组织架构、分类关系</li>
            <li><strong>循环图</strong> —— 周而复始的流程</li>
            <li><strong>关系图</strong> —— 展示各部分之间的关系</li>
            <li><strong>矩阵图</strong> —— 交叉分类</li>
            <li><strong>棱锥图</strong> —— 层级递进</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 SmartArt vs 手动画形状</strong><br>
            • <strong>手动画形状</strong>：灵活但费时，适合需要精确控制设计的场景<br>
            • <strong>SmartArt</strong>：快速且统一，适合展示结构化信息<br><br>
            <strong>口诀：结构化信息用SmartArt，创意设计手动画。</strong><br>
            流程图、组织架构、分类关系 → SmartArt<br>
            促销标签、创意排版 → 手动形状
        </div>

        <h3>二、SmartArt的类型详解</h3>
        <p>WPS提供了多种SmartArt布局类型，每种适合不同的信息展示场景：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">图示样式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">电商实例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>列表</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">📋 排列展示</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">并列信息、要点罗列</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">产品三大卖点</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>流程</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">➡️ 步骤连接</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">有先后顺序的步骤</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 发货流程、退货流程</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>循环</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🔄 环形连接</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">周期性重复的流程</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">客户复购循环、运营周期</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>层次结构</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🌳 树状结构</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">组织架构、上下级关系</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">团队组织架构、产品分类</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>关系</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🔗 相互关联</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">多个因素的交互关系</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">影响销量的因素分析</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>棱锥图</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">🔺 三角分层</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">层级递进、重要性排序</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">客户分层（VIP/普通/新客）</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 怎么选择SmartArt类型？</strong><br>
            先问自己三个问题：<br>
            1. 信息之间有<strong>先后顺序</strong>吗？→ 用<strong>流程</strong>图<br>
            2. 信息之间是<strong>并列/对等</strong>关系吗？→ 用<strong>列表</strong>图<br>
            3. 信息之间有<strong>上下级/包含</strong>关系吗？→ 用<strong>层次结构</strong>图<br>
            4. 信息是<strong>循环往复</strong>的吗？→ 用<strong>循环</strong>图
        </div>

        <h3>三、插入SmartArt</h3>

        <h4>方法一：菜单插入</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"SmartArt"</strong> 按钮</li>
            <li>在弹出的对话框中<strong>选择类型和样式</strong></li>
            <li>点击确定，SmartArt出现在幻灯片上</li>
        </ol>

        <h4>方法二：从占位符转换</h4>
        <p>如果幻灯片版式中有"内容"占位符，你也可以在占位符中找到SmartArt图标点击插入。</p>

        <h3>四、编辑SmartArt内容</h3>

        <h4>1. 输入文字</h4>
        <p>SmartArt插入后，会出现一个<strong>文本窗格</strong>（Text Pane），通常在SmartArt的左边：</p>
        <ul>
            <li>在文本窗格中输入文字，SmartArt会<strong>自动更新图形</strong></li>
            <li>每按一次<strong>回车</strong>，增加一个新节点</li>
            <li>按 <span class="kbd">Tab</span> 将节点降级（变成子节点）</li>
            <li>按 <span class="kbd">Shift</span> + <span class="kbd">Tab</span> 将节点升级</li>
            <li>也可以直接<strong>点击SmartArt图形上的文字区域</strong>进行编辑</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 文本窗格找不到了？</strong><br>
            如果文本窗格不见了，选中SmartArt后：<br>
            • 点击SmartArt左边缘的<strong>小箭头按钮</strong> ◀ 打开<br>
            • 或者在"SmartArt工具/设计"选项卡中点击<strong>"文本窗格"</strong>按钮<br>
            文本窗格就像一个大纲编辑器，在这里修改文字比直接点图形更方便！
        </div>

        <h4>2. 增加和删除节点</h4>
        <ul>
            <li><strong>增加节点：</strong>
                <ul>
                    <li>在文本窗格中按回车增加一行</li>
                    <li>或者选中某个图形节点 → "SmartArt设计"选项卡 → <strong>"添加形状"</strong></li>
                    <li>可以选择"在前面添加""在后面添加""在上方添加""在下方添加"</li>
                </ul>
            </li>
            <li><strong>删除节点：</strong>
                <ul>
                    <li>在文本窗格中删除对应的文字行</li>
                    <li>或者选中图形节点后按 <span class="kbd">Delete</span></li>
                </ul>
            </li>
        </ul>

        <h4>3. 调整节点顺序</h4>
        <ul>
            <li>在文本窗格中<strong>拖拽文字行</strong>来调整顺序</li>
            <li>或者选中节点 → "SmartArt设计"选项卡 → <strong>"上移"/"下移"</strong>按钮</li>
        </ul>

        <h3>五、美化SmartArt</h3>

        <h4>1. 更改颜色方案</h4>
        <ul>
            <li>选中SmartArt → "SmartArt设计"选项卡 → <strong>"更改颜色"</strong></li>
            <li>WPS提供了多种配色方案：彩色、单色渐变、强调色等</li>
            <li>选择一个和你PPT主题匹配的配色</li>
        </ul>

        <h4>2. 更改样式</h4>
        <ul>
            <li>选中SmartArt → "SmartArt设计"选项卡 → <strong>"SmartArt样式"</strong></li>
            <li>可以选择：简单、中等、3D效果等</li>
            <li>推荐使用<strong>"简单"或"细微效果"</strong>，3D效果往往显得过时</li>
        </ul>

        <h4>3. 更改布局类型</h4>
        <p>做好SmartArt后发现布局类型选错了？不用重做：</p>
        <ul>
            <li>选中SmartArt → "SmartArt设计"选项卡 → <strong>"更改布局"</strong></li>
            <li>选择新的布局类型，文字内容会自动适配</li>
        </ul>

        <h4>4. 自定义单个节点</h4>
        <p>如果想让某个节点和其他节点不一样（比如突出当前步骤）：</p>
        <ul>
            <li>选中SmartArt中的<strong>某一个形状</strong>（不是整个SmartArt）</li>
            <li>右键 → 设置对象格式 → 修改填充颜色</li>
            <li>或者在"格式"选项卡中修改该形状的颜色</li>
            <li>比如把"当前步骤"变成红色，其他步骤保持蓝色</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 SmartArt美化技巧总结</strong><br>
            1. <strong>颜色统一</strong>：选择和PPT主题一致的配色方案<br>
            2. <strong>样式简洁</strong>：推荐扁平化样式，少用3D效果<br>
            3. <strong>文字精简</strong>：每个节点不超过5-8个字<br>
            4. <strong>节点数量</strong>：3-7个节点最佳，太多太密<br>
            5. <strong>突出重点</strong>：用不同颜色标记关键步骤
        </div>

        <h3>六、SmartArt的局限与替代方案</h3>
        <p>SmartArt虽然方便，但也有一些局限：</p>
        <ul>
            <li><strong>布局不够灵活</strong> —— SmartArt是预设布局，不能完全自由排列</li>
            <li><strong>样式有限</strong> —— 设计感不如手动画的形状精致</li>
            <li><strong>复杂流程不好表达</strong> —— 有分支的复杂流程用SmartArt不方便</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 SmartArt的"拆解"技巧</strong><br>
            如果你想要SmartArt的布局但又想自由修改每个元素，可以把SmartArt<strong>转换为普通形状</strong>：<br>
            选中SmartArt → 右键 → <strong>"转换为形状"</strong>（或在设计选项卡中找到此功能）<br><br>
            转换后SmartArt就变成了一组普通形状，你可以自由移动、修改每一个元素了。但注意：转换后就<strong>不能再变回SmartArt了</strong>！
        </div>
    `,

    steps: `
        <p>现在我们来制作一个<strong>"跨境电商发货流程图"</strong>，通过实战掌握SmartArt的全部操作。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件并设置封面</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>发货流程图.pptx</code></p>
                <p>封面页输入：</p>
                <ul>
                    <li>标题：<strong>"跨境电商发货全流程"</strong></li>
                    <li>副标题：<strong>"仓储物流部 · 标准操作流程（SOP）"</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">插入流程型SmartArt</div>
            <div class="step-card-desc">
                <ol>
                    <li>新建第2页（<span class="kbd">Ctrl</span> + <span class="kbd">M</span>），标题输入<strong>"发货六步流程"</strong></li>
                    <li>点击 <strong>插入 → SmartArt</strong></li>
                    <li>在左侧选择 <strong>"流程"</strong> 类型</li>
                    <li>选择一个<strong>"基本流程"</strong>或<strong>"V形流程"</strong>样式</li>
                    <li>点击确定</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">在文本窗格中输入流程步骤</div>
            <div class="step-card-desc">
                <p>在SmartArt左边的文本窗格中，依次输入6个步骤：</p>
                <ol>
                    <li>输入：<strong>接收订单</strong>，按回车</li>
                    <li>输入：<strong>拣货备货</strong>，按回车</li>
                    <li>输入：<strong>质量检查</strong>，按回车</li>
                    <li>输入：<strong>打包贴标</strong>，按回车</li>
                    <li>输入：<strong>物流交接</strong>，按回车</li>
                    <li>输入：<strong>跟踪签收</strong></li>
                </ol>
                <p>如果SmartArt默认只有3个节点，后面的节点会在你按回车时<strong>自动新增</strong>。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">更改SmartArt颜色方案</div>
            <div class="step-card-desc">
                <ol>
                    <li>选中SmartArt整体（点击边缘）</li>
                    <li>"SmartArt设计"选项卡 → <strong>"更改颜色"</strong></li>
                    <li>选择一个<strong>"彩色"方案</strong>（每个节点不同颜色）或<strong>"强调色"方案</strong>（同一色系渐变）</li>
                    <li>选择和你PPT风格匹配的配色</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">更改SmartArt样式</div>
            <div class="step-card-desc">
                <ol>
                    <li>"SmartArt设计"选项卡 → 浏览<strong>"SmartArt样式"</strong></li>
                    <li>推荐选择<strong>"细微效果"</strong>或<strong>"中等效果"</strong></li>
                    <li>避免选择3D样式，看起来比较老气</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">突出关键步骤</div>
            <div class="step-card-desc">
                <p>假设"质量检查"是最关键的环节，需要特别突出：</p>
                <ol>
                    <li>在SmartArt内部，<strong>单独点击"质量检查"那个形状</strong>（不是点击整个SmartArt）</li>
                    <li>右键 → 设置对象格式 → 填充 → 改为<strong>红色</strong></li>
                    <li>修改该节点的文字为<strong>白色加粗</strong></li>
                    <li>现在"质量检查"在一排蓝色节点中特别显眼了</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">第3页：制作组织架构图</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"仓储部组织架构"</strong></p>
                <ol>
                    <li>插入 → SmartArt → 选择<strong>"层次结构"</strong> → 选择<strong>"组织结构图"</strong></li>
                    <li>在文本窗格中输入：
                        <ul>
                            <li>第1行：<strong>仓储部经理</strong></li>
                            <li>第2行：按 <span class="kbd">Tab</span> 缩进 → <strong>入库组</strong></li>
                            <li>第3行：<strong>拣货组</strong>（不用Tab，和入库组同级）</li>
                            <li>第4行：<strong>打包组</strong></li>
                            <li>第5行：<strong>物流对接组</strong></li>
                        </ul>
                    </li>
                    <li>更改颜色方案，使用品牌色系</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">第4页：制作客户复购循环图</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"客户复购循环"</strong></p>
                <ol>
                    <li>插入 → SmartArt → 选择<strong>"循环"</strong> → 选择一个环形样式</li>
                    <li>输入循环的步骤：
                        <ul>
                            <li><strong>浏览商品</strong></li>
                            <li><strong>下单购买</strong></li>
                            <li><strong>收货体验</strong></li>
                            <li><strong>评价反馈</strong></li>
                            <li><strong>会员营销</strong></li>
                        </ul>
                    </li>
                    <li>这5个步骤形成了一个首尾相接的循环</li>
                    <li>更改颜色和样式</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">尝试更改SmartArt布局</div>
            <div class="step-card-desc">
                <p>对发货流程图（第2页）尝试换一种布局：</p>
                <ol>
                    <li>选中SmartArt → "SmartArt设计" → <strong>"更改布局"</strong></li>
                    <li>在"流程"类型中浏览其他样式</li>
                    <li>试试<strong>"V形列表""交替流"</strong>等不同的布局</li>
                    <li>观察同样的文字在不同布局下的效果</li>
                    <li>选择一个你认为最好看的保留</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并全屏检查</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 全屏放映</li>
                    <li>检查每一页的SmartArt是否清晰、文字是否完整可读</li>
                    <li>确保颜色方案统一、风格协调</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 SmartArt中的文字要超级精简！</strong><br>
            SmartArt每个节点的空间有限，文字太多会自动缩小变得看不清。原则：<br>
            • 每个节点<strong>不超过5-8个字</strong><br>
            • 用<strong>关键词</strong>而非完整句子<br>
            • 详细说明放在SmartArt旁边的文本框中，或者在演讲时口头说明<br><br>
            ✅ 好："接收订单"<br>
            ❌ 差："从平台后台接收客户下的新订单并确认订单信息"
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ SmartArt节点不要太多</strong><br>
            SmartArt的节点数量建议：<br>
            • <strong>流程图</strong>：4-7个节点最佳<br>
            • <strong>循环图</strong>：3-6个节点最佳<br>
            • <strong>组织架构图</strong>：看实际需要，但一页不要超过15个节点<br><br>
            节点太多会导致每个节点非常小，文字变得无法阅读。如果步骤很多，考虑分成多页或分成几个阶段展示。
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 SmartArt转形状的高级用法</strong><br>
            如果你觉得SmartArt的预设样式不够好看，可以"拆解"后自由修改：<br>
            1. 先用SmartArt<strong>快速生成布局</strong>（利用它自动排列的优势）<br>
            2. 然后<strong>右键 → 转换为形状</strong><br>
            3. SmartArt变成了一组普通形状和文本框<br>
            4. 你可以自由修改每个形状的颜色、大小、位置<br><br>
            这个方法结合了SmartArt的"快"和手动形状的"灵活"，高手都这么用！
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 注意：转换为形状后不能撤回！</strong><br>
            一旦把SmartArt转换为形状，就<strong>无法再变回SmartArt</strong>了。建议：<br>
            • 转换前先 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存<br>
            • 或者先<strong>复制一份SmartArt到旁边</strong>做备份<br>
            • 然后再对其中一份进行转换
        </div>

        <div class="tip-box tip-info">
            <strong>💡 电商中常用的SmartArt场景</strong><br>
            • <strong>订单处理流程</strong>：下单→付款→发货→签收→售后<br>
            • <strong>店铺运营周期</strong>：选品→上架→推广→分析→优化（循环）<br>
            • <strong>团队架构</strong>：总监→运营组/客服组/仓储组<br>
            • <strong>产品特点展示</strong>：3-4个产品卖点并列展示<br>
            • <strong>客户分层</strong>：VIP客户→忠实客户→普通客户→新客户（棱锥图）<br>
            • <strong>竞品对比</strong>：我们 vs 竞品A vs 竞品B（列表对比型）
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '以下哪种信息最适合用SmartArt的"流程"类型来展示？',
            options: ['产品的五大卖点', '发货操作步骤', '团队人员名单', '月度销售数据'],
            answer: 1,
            explanation: '"流程"类型适合展示有先后顺序的步骤。发货操作步骤有明确的先后顺序，最适合用流程图。产品卖点是并列关系适合"列表"，团队人员适合"层次结构"，月度数据适合图表。'
        },
        {
            type: 'single',
            question: '在SmartArt的文本窗格中，按哪个键可以将节点降级（变成子节点）？',
            options: ['Enter', 'Tab', 'Space', 'Shift'],
            answer: 1,
            explanation: '在SmartArt的文本窗格中，按Tab键可以将当前行降级为子节点（缩进一级）。按Shift+Tab则是升级。这和编号列表的操作一样。'
        },
        {
            type: 'single',
            question: '想要改变SmartArt的配色方案，应该在哪里操作？',
            options: [
                '开始选项卡 → 字体颜色',
                'SmartArt设计选项卡 → 更改颜色',
                '插入选项卡 → 颜色',
                '右键 → 填充颜色'
            ],
            answer: 1,
            explanation: '选中SmartArt后，在"SmartArt设计"选项卡中的"更改颜色"可以整体更换配色方案。这比逐个修改每个节点的颜色方便得多。'
        },
        {
            type: 'judge',
            question: 'SmartArt转换为普通形状后，还可以再变回SmartArt。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！一旦将SmartArt转换为普通形状，就无法再变回SmartArt了。建议在转换前先保存文件或复制一份备份。'
        },
        {
            type: 'single',
            question: 'SmartArt中每个节点的文字建议不超过多少字？',
            options: ['2-3个字', '5-8个字', '15-20个字', '不限字数'],
            answer: 1,
            explanation: 'SmartArt每个节点的空间有限，文字太多会自动缩小变得看不清。建议每个节点不超过5-8个字，使用关键词而非完整句子。'
        },
        {
            type: 'multiple',
            question: '以下哪些是美化SmartArt的推荐做法？（多选）',
            options: [
                '使用和PPT主题一致的配色方案',
                '选择3D立体效果让图示更炫酷',
                '突出关键节点使用不同颜色',
                '节点数量控制在3-7个'
            ],
            answer: [0, 2, 3],
            explanation: '统一配色、突出关键节点、控制数量都是好做法。但3D效果通常显得过时，现代PPT设计推荐扁平化/简洁风格。'
        },
        {
            type: 'single',
            question: '以下哪种场景最适合使用"循环"型SmartArt？',
            options: [
                '公司组织架构',
                '年度销售排名',
                '客户复购流程（浏览→购买→体验→复购）',
                '产品生产步骤'
            ],
            answer: 2,
            explanation: '循环型SmartArt适合展示周而复始、首尾相接的流程。客户复购是一个循环过程（购买→体验→再次购买），最适合用循环图。组织架构用层次结构，排名用列表，生产步骤用流程图。'
        },
        {
            type: 'single',
            question: '如何在SmartArt中添加新的节点？',
            options: [
                '只能删除SmartArt后重新插入',
                '在文本窗格中按回车添加新行',
                '在SmartArt外面画一个新形状',
                '必须先转换为形状才能添加'
            ],
            answer: 1,
            explanation: '在SmartArt的文本窗格中按回车键就可以添加新的节点。也可以在"SmartArt设计"选项卡中使用"添加形状"按钮来在指定位置添加。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作跨境电商流程图PPT
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少4页的PPT，使用不同类型的SmartArt：</p>
                <ol>
                    <li>
                        <strong>第1页：封面</strong><br>
                        标题："跨境电商业务全景图"
                    </li>
                    <li>
                        <strong>第2页：发货流程图（流程型）</strong><br>
                        使用"流程"类型SmartArt，包含5-7个发货步骤。要求：更改配色方案、突出一个关键步骤
                    </li>
                    <li>
                        <strong>第3页：团队组织架构（层次结构型）</strong><br>
                        使用"层次结构/组织结构图"类型，展示一个电商团队的人员结构（如：店长→运营组/客服组/仓储组，每组下面有2-3个岗位）
                    </li>
                    <li>
                        <strong>第4页：运营循环图（循环型）</strong><br>
                        使用"循环"类型SmartArt，展示店铺运营的周期性流程（如：选品→上架→推广→分析→优化→选品...）
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>每页SmartArt都使用自定义配色（不用默认配色）</li>
                    <li>样式选择简洁扁平风（不要3D效果）</li>
                    <li>每个节点文字不超过8个字</li>
                    <li>每页都有清晰的页面标题</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试对一个SmartArt执行"转换为形状"，然后自定义修改其中的元素</li>
                    <li>在流程图旁边添加文本框做补充说明</li>
                    <li>尝试使用你之前学会的形状和标签给SmartArt做装饰</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 恭喜！"图片与图形"模块全部完成！</strong><br>
            经过第7-9课的学习，你已经掌握了：<br>
            ✅ 图片的插入、裁剪、美化、压缩<br>
            ✅ 形状的绘制、填充、组合、合并<br>
            ✅ SmartArt图示的创建和自定义<br>
            ✅ 流程图、组织架构图、循环图的制作<br><br>
            下一模块我们将进入<strong>"多媒体与表格"</strong>，第10课将学习<strong>插入音频与视频</strong>——让你的PPT动起来！
        </div>
    `
};
