/**
 * PPT学习站 - 第6课：项目符号与编号
 * 文件路径: js/lessons/lesson06.js
 * 模块：文字与排版
 * 任务情境：整理跨境电商平台操作流程
 */

window.lessonData = {

    scenario: '你的团队要给新入职的同事做一次"跨境电商平台操作流程"培训，老板让你把操作步骤整理成PPT。步骤很多，如果全写成一大段文字，看着很累也不清楚。怎么办？用项目符号和编号把信息条理化！今天就来学这个PPT排版中不可或缺的技能。',

    knowledge: `
        <h3>一、为什么需要项目符号和编号？</h3>
        <p>看看下面两种写法，哪个更容易理解？</p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin:var(--space-md) 0;">
            <div style="padding:var(--space-md); background:var(--error-light); border-radius:var(--radius-md); border:1px solid var(--error);">
                <p style="font-size:var(--text-sm); color:var(--error); font-weight:700; margin-bottom:var(--space-sm);">❌ 没有项目符号</p>
                <p style="font-size:var(--text-sm); margin:0; color:var(--text-secondary);">跨境开店流程包括注册账号然后进行身份认证接着选择经营类目再上传产品信息设置价格和库存最后发布商品等待审核通过后就可以开始运营了。</p>
            </div>
            <div style="padding:var(--space-md); background:var(--success-light); border-radius:var(--radius-md); border:1px solid var(--success);">
                <p style="font-size:var(--text-sm); color:var(--success); font-weight:700; margin-bottom:var(--space-sm);">✅ 使用编号</p>
                <p style="font-size:var(--text-sm); margin:0; color:var(--text-secondary);">
                    1. 注册平台账号<br>
                    2. 完成身份认证<br>
                    3. 选择经营类目<br>
                    4. 上传产品信息<br>
                    5. 设置价格和库存<br>
                    6. 发布商品并等待审核
                </p>
            </div>
        </div>

        <p>差别一目了然！项目符号和编号能够：</p>
        <ul>
            <li><strong>化整为零</strong> —— 把大段文字拆成独立的要点</li>
            <li><strong>层次分明</strong> —— 让观众快速抓住要点和逻辑</li>
            <li><strong>易于记忆</strong> —— 人脑更容易记住列表而非段落</li>
            <li><strong>方便讲解</strong> —— 演讲时可以逐条展开说明</li>
        </ul>

        <h3>二、项目符号 vs 编号：什么时候用哪个？</h3>
        
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">样式示例</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>项目符号</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">● ○ ■ ◆ ✓ ▸</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">并列的要点、特征、优势</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">没有先后顺序，各条平等</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>编号</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1. 2. 3. / ① ② ③</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">操作步骤、排名、有先后顺序的内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">有明确的先后或层级关系</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 简单判断法：</strong><br>
            问自己一个问题：<strong>"这些内容可以随意换顺序吗？"</strong><br>
            • 可以换顺序（并列关系）→ 用<strong>项目符号</strong>（比如：产品的3个优势）<br>
            • 不能换顺序（先后关系）→ 用<strong>编号</strong>（比如：开店的6个步骤）
        </div>

        <h3>三、如何添加项目符号</h3>

        <h4>方法一：自动生成</h4>
        <p>在WPS演示中，很多版式的内容占位符已经自带项目符号。当你点击"单击此处添加文本"并输入内容后，每按一次回车换行就自动生成下一个项目符号。</p>

        <h4>方法二：手动添加</h4>
        <ol>
            <li>选中你要添加项目符号的文字段落</li>
            <li>在<strong>"开始"</strong>选项卡中找到<strong>"项目符号"</strong>按钮（一个带小圆点和横线的图标）</li>
            <li>点击按钮右边的<strong>下拉箭头</strong></li>
            <li>从预设样式中选择一个，比如 ● ■ ◆ 等</li>
        </ol>

        <h4>方法三：自定义符号</h4>
        <p>如果预设的符号不满意，可以自定义：</p>
        <ol>
            <li>点击项目符号下拉箭头 → 选择<strong>"自定义项目符号"</strong></li>
            <li>可以选择：
                <ul>
                    <li><strong>符号</strong> —— 从特殊字符中选（比如 ✓ ★ ♦ ➤）</li>
                    <li><strong>图片</strong> —— 用自定义图片作为项目符号</li>
                </ul>
            </li>
            <li>还可以设置符号的<strong>颜色和大小</strong></li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 电商PPT常用的项目符号</strong><br>
            • <strong>✓</strong>（对勾）—— 适合表示"已完成""具备的优势"<br>
            • <strong>★</strong>（五角星）—— 适合表示"亮点""推荐"<br>
            • <strong>▸</strong>（三角）—— 适合表示"步骤""流向"<br>
            • <strong>●</strong>（圆点）—— 最通用，百搭<br>
            • <strong>✕</strong>（叉号）—— 适合表示"注意事项""不要做的事"
        </div>

        <h3>四、如何添加编号</h3>
        <p>编号的添加方式和项目符号类似：</p>
        <ol>
            <li>选中需要编号的段落</li>
            <li>在"开始"选项卡找到<strong>"编号"</strong>按钮（123图标）</li>
            <li>点击下拉箭头��择编号样式：
                <ul>
                    <li><strong>1. 2. 3.</strong> —— 最常用</li>
                    <li><strong>① ② ③</strong> —— 带圈编号，更精致</li>
                    <li><strong>一、二、三、</strong>—— 中文编号</li>
                    <li><strong>A. B. C.</strong> —— 字母编号</li>
                </ul>
            </li>
        </ol>

        <div class="tip-box tip-info">
            <strong>💡 编号会自动更新</strong><br>
            编号的一大优势是：当你在中间插入或删除某一条时，后面的编号会<strong>自动重新排序</strong>。不用手动改数字！比如你在第2步和第3步之间插入一条，它会自动变成2→3→4→5。
        </div>

        <h3>五、多级列表（层级缩进）</h3>
        <p>有时候一个列表中的某些条目还需要展开细分，这就需要<strong>多级列表</strong>。比如：</p>

        <div style="padding:var(--space-md); background:var(--bg-code); border-radius:var(--radius-md); margin:var(--space-md) 0; font-size:var(--text-sm); line-height:2;">
            1. 注册平台账号<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• 准备营业执照<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• 准备法人身份证<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• 填写注册信息<br>
            2. 完成身份认证<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• 上传证件照片<br>
            &nbsp;&nbsp;&nbsp;&nbsp;• 等待平台审核（约3个工作日）<br>
            3. 选择经营类目<br>
        </div>

        <h4>如何创建多级列表</h4>
        <ul>
            <li><strong>增加缩进（降级）：</strong>将光标放在某行开头 → 按 <span class="kbd">Tab</span> 键 → 该行缩进一级并变成子项目</li>
            <li><strong>减少缩进（升级）：</strong>按 <span class="kbd">Shift</span> + <span class="kbd">Tab</span> → 该行减少一级缩进</li>
            <li>也可以在"开始"选项卡中使用<strong>"增加缩进量"</strong>和<strong>"减少缩进量"</strong>按钮</li>
        </ul>

        <div class="tip-box tip-warning">
            <strong>⚠️ 缩进不要超过3级！</strong><br>
            列表最多用到<strong>2-3级</strong>就够了。如果你需要4级甚至5级缩进，说明内容应该拆分到多页而不是堆在一页上。层级太多，观众根本看不清！<br><br>
            <strong>建议的层级关系：</strong><br>
            • 第1级：主要步骤/要点（最大字号）<br>
            • 第2级：补充说明/子步骤（稍小字号）<br>
            • 第3级：极少使用，仅在必要时
        </div>

        <h3>六、项目符号和编号的美化技巧</h3>

        <h4>1. 修改符号颜色</h4>
        <p>让项目符号和品牌色保持一致：</p>
        <ul>
            <li>选中带项目符号的段落</li>
            <li>点击项目符号下拉箭头 → <strong>自定义</strong></li>
            <li>在弹出的对话框中修改<strong>颜色</strong></li>
            <li>比如把黑色圆点改成红色或橙色，和电商主题配合</li>
        </ul>

        <h4>2. 调整符号大小</h4>
        <p>默认的符号大小是跟随文字大小的，但你可以单独调整符号的大小百分比。在自定义对话框中设置为文字大小的<strong>80%-120%</strong>。</p>

        <h4>3. 调整符号与文字的间距</h4>
        <p>如果符号和文字离得太近或太远，可以通过调整<strong>缩进量</strong>来控制。使用标尺上的缩进滑块（在编辑区上方的标尺上拖拽）可以精确控制。</p>

        <h4>4. 用图标代替传统符号</h4>
        <p>在高级的PPT设计中，可以用小图标来代替传统的圆点符号，让列表更生动。方法是：</p>
        <ul>
            <li>不使用系统项目符号，直接在每行前面<strong>插入小图标/图片</strong></li>
            <li>或者使用 Emoji 表情符号（比如 ✅ 📦 🚀 💰）作为手动标记</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 让列表更有设计感</strong><br>
            高手做PPT不会只用普通的圆点符号。几个技巧：<br>
            1. 用<strong>彩色数字图标</strong>代替编号（比如红底白字的圆形数字）<br>
            2. 用<strong>行业相关图标</strong>代替圆点（电商可以用购物车、包裹图标）<br>
            3. 把列表变成<strong>卡片式布局</strong>（每个要点一张小卡片，比纯文字列表更美观）<br><br>
            当然，这些高级技巧后面的课程会详细学习，现在先打好基础！
        </div>

        <h3>七、列表内容的书写原则</h3>
        <p>光会加符号不够，<strong>内容本身怎么写</strong>也有讲究：</p>

        <ul>
            <li><strong>保持并列：</strong>同一级的内容应该是同类型的（都是名词、都是动作、都是特点）</li>
            <li><strong>控制长度：</strong>每条不超过一行（最多两行），太长就不是列表了</li>
            <li><strong>简洁有力：</strong>用关键词和短句，不要写完整的长句子</li>
            <li><strong>数量适中：</strong>一个列表3-7条最佳，超过7条应该分组或拆页</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚫 列表的反面教材</strong><br>
            ❌ 一个列表写了15条要点（信息过载，观众记不住）<br>
            ❌ 每条都是一大段话（列表变成了段落，失去了列表的意义）<br>
            ❌ 混搭不同类型（有的是名词有的是句子有的是数字，逻辑混乱）<br>
            ❌ 把Word上的内容直接复制上来原封不动（PPT不是Word！）
        </div>
    `,

    steps: `
        <p>现在我们来制作一个<strong>"跨境电商平台开店操作流程"</strong>培训PPT，综合运用项目符号与编号。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件，制作封面页</div>
            <div class="step-card-desc">
                <p>新建空白演示文稿 → 保存为 <code>跨境开店流程培训.pptx</code></p>
                <p>在封面页输入：</p>
                <ul>
                    <li>标题：<strong>"跨境电商平台开店全流程"</strong>（36pt，微软雅黑Bold，居中）</li>
                    <li>副标题：<strong>"新员工入职培训 · 运营部"</strong>（20pt，灰色）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">第2页：使用编号制作操作步骤</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">M</span> 新建一页，使用"标题和内容"版式。</p>
                <p>标题输入：<strong>"开店六步走"</strong></p>
                <p>在内容区域输入以下6行文字（每行按回车换行）：</p>
                <ul>
                    <li>注册平台账号</li>
                    <li>完成身份资质认证</li>
                    <li>选择经营类目</li>
                    <li>上传产品信息</li>
                    <li>设置价格与库存</li>
                    <li>发布商品等待审核</li>
                </ul>
                <p>全选这6行 → 在"开始"选项卡点击<strong>"编号"</strong>按钮 → 选择<strong>"1. 2. 3."</strong>样式。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">添加二级缩进内容</div>
            <div class="step-card-desc">
                <p>在"注册平台账号"下方增加子要点：</p>
                <ul>
                    <li>在第1条末尾按回车，输入：<strong>准备营业执照</strong></li>
                    <li>按 <span class="kbd">Tab</span> 键 → 这行自动缩进一级并变成子项目</li>
                    <li>继续回车输入：<strong>准备法人身份证</strong></li>
                    <li>再回车输入：<strong>填写注册信息并提交</strong></li>
                </ul>
                <p>你会看到这3行自动变成了带项目符号的第二级列表。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">同样方法给其他步骤添加子要点</div>
            <div class="step-card-desc">
                <p>参考以下内容，给每个步骤添加1-3条子要点：</p>
                <ul>
                    <li><strong>2. 完成身份认证</strong><br>
                        &nbsp;&nbsp;• 上传证件照片<br>
                        &nbsp;&nbsp;• 等待审核（约3个工作日）</li>
                    <li><strong>3. 选择经营类目</strong><br>
                        &nbsp;&nbsp;• 研究平台热销类目<br>
                        &nbsp;&nbsp;• 注意类目限制和资质要求</li>
                    <li><strong>4. 上传产品信息</strong><br>
                        &nbsp;&nbsp;• 拍摄高质量产品图<br>
                        &nbsp;&nbsp;• 撰写中英文产品描述<br>
                        &nbsp;&nbsp;• 设置产品属性参数</li>
                </ul>
                <p>记住：子要点用 <span class="kbd">Tab</span> 缩进！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">修改项目符号样式和颜色</div>
            <div class="step-card-desc">
                <p>美化列表的外观：</p>
                <ul>
                    <li>选中所有二级子要点的文字</li>
                    <li>点击项目符号下拉箭头 → <strong>自定义项目符号</strong></li>
                    <li>选择一个<strong>三角形 ▸</strong> 或 <strong>对勾 ✓</strong> 符号</li>
                    <li>颜色设为<strong>橙色</strong>（和电商主题配合）</li>
                    <li>点击确定</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">第3页：使用项目符号列出注意事项</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"开店注意事项"</strong></p>
                <p>输入以下内容并添加项目符号（这些是并列的，没有先后顺序，所以用符号不用编号）：</p>
                <ul>
                    <li>确保营业执照在有效期内</li>
                    <li>产品图片不得侵犯他人版权</li>
                    <li>产品描述需中英文双语</li>
                    <li>遵守平台定价规则</li>
                    <li>首批上架建议10-20个SKU</li>
                    <li>定期检查商品状态和库存</li>
                </ul>
                <p>选择<strong>实心方块 ■</strong> 作为项目符号，颜色设为<strong>红色</strong>（表示"注意"）。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">第4页：混合使用符号和编号</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"产品上架检查清单"</strong></p>
                <p>使用编号列出大步骤，每个步骤下用项目符号列出检查项：</p>
                <ul>
                    <li><strong>1. 图片检查</strong><br>
                        &nbsp;&nbsp;✓ 主图尺寸符合要求<br>
                        &nbsp;&nbsp;✓ 图片清晰无水印<br>
                        &nbsp;&nbsp;✓ 至少5张产品图</li>
                    <li><strong>2. 文案检查</strong><br>
                        &nbsp;&nbsp;✓ 标题包含核心关键词<br>
                        &nbsp;&nbsp;✓ 描述无语法错误<br>
                        &nbsp;&nbsp;✓ 卖点突出明确</li>
                    <li><strong>3. 价格检查</strong><br>
                        &nbsp;&nbsp;✓ 利润空间合理<br>
                        &nbsp;&nbsp;✓ 对比竞品定价</li>
                </ul>
                <p>二级用 <strong>✓</strong> 符号，颜色设为绿色。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">调整行间距和字号</div>
            <div class="step-card-desc">
                <p>让列表内容更易读：</p>
                <ul>
                    <li>一级内容（编号步骤）：<strong>22pt，加粗</strong></li>
                    <li>二级内容（子要点）：<strong>16-18pt，常规</strong></li>
                    <li>选中所有内容 → 行间距设为 <strong>1.3</strong></li>
                    <li>一级内容的段后间距设为 <strong>6pt</strong>（和下一条拉开距离）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">制作结尾页</div>
            <div class="step-card-desc">
                <p>新建最后一页，标题：<strong>"总结 & 答疑"</strong></p>
                <p>添加一个文本框，简要总结：</p>
                <ul>
                    <li>开店六步走：注册 → 认证 → 选品 → 上传 → 定价 → 发布</li>
                    <li>关键点：资质齐全、图片优质、定价合理</li>
                    <li>如有疑问请联系运营部</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并检查</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 全屏放映</li>
                    <li>检查每页的列表是否清晰、对齐、层级分明</li>
                    <li>检查项目符号的颜色是否统一</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 Tab 和 Shift+Tab 是列表缩进的核心</strong><br>
            在输入列表时，这两个快捷操作是最常用的：<br>
            • <span class="kbd">Tab</span> = 向右缩进一级（变成子项目）<br>
            • <span class="kbd">Shift</span> + <span class="kbd">Tab</span> = 向左减少一级（恢复为上级项目）<br><br>
            注意：光标要在<strong>行首</strong>时按 Tab 才是缩进。如果光标在文字中间按 Tab，可能只是插入了一个制表符。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 常见错误：编号手动输入</strong><br>
            有些同学不用编号功能，而是手动在每行前面打"1. 2. 3."。这样做的问题：<br>
            • 插入或删除某一条后，后面的数字不会自动更新<br>
            • 缩进和对齐不整齐<br>
            • 数字和文字的间距不统一<br><br>
            <strong>正确做法：</strong>永远使用系统的编号功能，让WPS自动管理编号！
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 "减法"比"加法"更重要</strong><br>
            做列表式PPT时，最重要的不是往上面加更多内容，而是做<strong>减法</strong>：<br>
            • 每条要点<strong>不超过15个字</strong>，能用关键词就不写句子<br>
            • 每个列表<strong>不超过7条</strong>，超过就拆分或分组<br>
            • 每页<strong>只讲一个主题</strong>，不要什么都塞在一页<br><br>
            记住：PPT上的文字是给观众"看"的提纲，详细内容由你"讲"出来！
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 千万别把PPT做成Word文档！</strong><br>
            这是中职生做PPT最常见的问题——把Word上的文字原封不动粘贴到PPT上，一页全是字。<br><br>
            <strong>Word的内容：</strong>跨境电商开店首先需要注册一个平台账号，注册时需要准备好营业执照和法人身份证，填写完注册信息后提交等待审核...<br><br>
            <strong>PPT应该的样子：</strong><br>
            1. 注册平台账号<br>
            &nbsp;&nbsp;&nbsp;• 准备营业执照<br>
            &nbsp;&nbsp;&nbsp;• 准备法人身份证<br>
            &nbsp;&nbsp;&nbsp;• 提交审核<br><br>
            发现区别了吗？PPT要<strong>提炼关键词</strong>！
        </div>

        <div class="tip-box tip-info">
            <strong>💡 取消项目符号/编号</strong><br>
            如果你想去掉某行的项目符号或编号：<br>
            方法一：选中那行文字 → 再次点击"项目符号"或"编号"按钮（相当于取消切换）<br>
            方法二：在该行开头按两次 <span class="kbd">Backspace</span><br>
            方法三：在空白行按回车后再按 <span class="kbd">Backspace</span>，取消自动生成的符号
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '以下哪种内容更适合使用"编号"而非"项目符号"？',
            options: ['产品的三大优势', '店铺经营理念', '开店操作步骤', '团队成员介绍'],
            answer: 2,
            explanation: '编号适用于有先后顺序的内容。"开店操作步骤"有明确的先后顺序（先注册再认证再上传），应该用编号。其他三项是并列关系，适合用项目符号。'
        },
        {
            type: 'single',
            question: '在列表中，将某一行缩进为子项目（降级）的快捷键是？',
            options: ['Enter', 'Tab', 'Space', 'Ctrl + Tab'],
            answer: 1,
            explanation: '在列表中，光标在行首按 Tab 键可以将该行缩进一级，变成上一行的子项目。按 Shift + Tab 可以减少缩进（升级）。'
        },
        {
            type: 'single',
            question: '一个列表中的条目数量最好控制在多少条以内？',
            options: ['3条以内', '5条以内', '7条以内', '15条以内'],
            answer: 2,
            explanation: '一个列表最佳数量是3-7条。超过7条信息量太大，观众难以记忆，应该考虑分组或拆分到多页。心理学上，人的短期记忆容量约为"7±2"个单元。'
        },
        {
            type: 'judge',
            question: '编号可以手动输入"1. 2. 3."来代替系统的编号功能。',
            options: ['对', '错'],
            answer: 1,
            explanation: '不建议手动输入编号。使用系统编号功能的好处是：插入或删除条目后编号自动更新、缩进对齐自动处理、格式统一美观。手动输入编号需要自己维护很麻烦。'
        },
        {
            type: 'single',
            question: '项目符号的颜色可以自定义吗？',
            options: ['不可以，只能是黑色', '可以，通过自定义项目符号设置', '可以，但必须和文字颜色一样', '只有VIP才能自定义'],
            answer: 1,
            explanation: '可以自定义项目符号的颜色。点击项目符号下拉箭头 → 自定义项目符号 → 在弹出的对话框中可以修改符号的颜色和大小。'
        },
        {
            type: 'multiple',
            question: '以下哪些是好的列表书写习惯？（多选）',
            options: ['每条不超过一行', '同级内容保持并列', '一个列表不超过7条', '每条都写完整的长句子'],
            answer: [0, 1, 2],
            explanation: '好的列表应该：每条简短不超过一行、同级内容类型一致（保持并列）、数量控制在7条以内。长句子应该精简为关键词和短句。'
        },
        {
            type: 'single',
            question: '多级列表的缩进层级建议不超过几级？',
            options: ['1级', '2-3级', '5级', '不限制'],
            answer: 1,
            explanation: '列表缩进建议不超过2-3级。层级太多会让观众看不清信息结构。如果需要更多层级，应该考虑将内容拆分到多页或用其他方式呈现（如SmartArt流程图）。'
        },
        {
            type: 'single',
            question: '将子项目升级（减少缩进）的快捷键是？',
            options: ['Tab', 'Shift + Tab', 'Ctrl + Tab', 'Alt + Tab'],
            answer: 1,
            explanation: 'Shift + Tab 可以减少列表缩进（升级）。Tab 是增加缩进（降级）。Alt + Tab 是切换窗口，Ctrl + Tab 在某些软件中是切换标签页。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作跨境电商开店流程培训PPT
            </div>
            <div class="practice-task-body">
                <p>请完成一个至少5页的培训PPT，具体要求：</p>
                <ol>
                    <li>
                        <strong>第1页：封面页</strong><br>
                        标题："跨境电商平台开店全流程"，包含副标题和日期
                    </li>
                    <li>
                        <strong>第2页：使用编号列出开店步骤</strong><br>
                        至少6个步骤，使用系统编号功能（不要手动输入数字）。至少2个步骤下面有二级子要点（用Tab缩进）
                    </li>
                    <li>
                        <strong>第3页：使用项目符号列出注意事项</strong><br>
                        至少5条注意事项，使用自定义项目符号（不要用默认圆点），符号颜色和主题配合
                    </li>
                    <li>
                        <strong>第4页：混合使用编号和项目符号</strong><br>
                        比如"产品上架检查清单"：编号标大类，项目符号标检查项
                    </li>
                    <li>
                        <strong>第5页：总结页</strong><br>
                        用简洁的列表总结全文要点
                    </li>
                </ol>
                <p><strong>排版要求：</strong></p>
                <ul>
                    <li>一级内容和二级内容字号有明显区别（如22pt vs 16pt）</li>
                    <li>行间距设置为1.2-1.5倍</li>
                    <li>每条要点不超过一行</li>
                    <li>项目符号颜色统一</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试使用带圈编号（① ② ③）样式</li>
                    <li>尝试用 Emoji 符号（如 ✅ 📦 ⚠️）手动作为项目标记</li>
                    <li>思考：哪些内容可以进一步用图表或SmartArt来代替纯文字列表？（后面会学到）</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 恭喜！"文字与排版"模块全部完成！</strong><br>
            经过第4-6课的学习，你已经掌握了：<br>
            ✅ 文本框的插入、移动、缩放、复制、对齐<br>
            ✅ 字体、字号、颜色的选择与搭配<br>
            ✅ 加粗、字符间距、格式刷等高效技巧<br>
            ✅ 段落对齐、行间距、段间距设置<br>
            ✅ 项目符号与编号的使用<br>
            ✅ 多级列表的创建与美化<br><br>
            下一模块我们将进入<strong>"图片与图形"</strong>，学习如何让PPT更加图文并茂！第7课将学习<strong>插入、裁剪与美化图片</strong>——制作商品主图展示页。
        </div>
    `
};
