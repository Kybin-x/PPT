/**
 * PPT学习站 - 第7课：插入、裁剪与美化图片
 * 文件路径: js/lessons/lesson07.js
 * 模块：图片与图形
 * 任务情境：制作商品主图展示页
 */

window.lessonData = {

    scenario: '运营总监说："纯文字的PPT太枯燥了，客户看不下去。你把产品图片加上去，做成一个商品主图展示页，让客户一眼就看到我们的产品长什么样！"图片是PPT中最直观、最有冲击力的元素。今天我们来学习如何在PPT中插入、处理和美化图片。',

    knowledge: `
        <h3>一、为什么PPT中需要图片？</h3>
        <p>有一句设计界的名言：<strong>"一图胜千言"</strong>。在电商工作中尤其如此：</p>
        <ul>
            <li><strong>展示产品</strong> —— 客户想看到产品实物照片，而不是文字描述</li>
            <li><strong>数据可视化</strong> —— 用图表代替数字表格，更直观</li>
            <li><strong>营造氛围</strong> —— 一张高质量的背景图能提升整个PPT的档次</li>
            <li><strong>辅助理解</strong> —— 流程图、示意图帮助观众理解复杂内容</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 电商PPT中常用的图片类型</strong><br>
            • <strong>产品图</strong>：白底商品图、场景图、细节图<br>
            • <strong>数据截图</strong>：后台数据、竞品分析截图<br>
            • <strong>图标素材</strong>：扁平化小图标，用于美化排版<br>
            • <strong>背景图</strong>：大气的商务/电商背景<br>
            • <strong>团队照片</strong>：汇报和述职时展示团队风采
        </div>

        <h3>二、插入图片的方法</h3>

        <h4>方法一：从电脑插入（最常用）</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"图片"</strong> 按钮</li>
            <li>选择 <strong>"本地图片"</strong>（或"来自文件"）</li>
            <li>在弹出的文件选择窗口中找到你的图片 → 点击<strong>"插入"</strong></li>
        </ol>

        <h4>方法二：在线图片</h4>
        <p>WPS提供了在线图片搜索功能：</p>
        <ol>
            <li>插入 → 图片 → <strong>"在线图片"</strong></li>
            <li>在搜索框输入关键词（如"电商""购物"）</li>
            <li>选择图片 → 插入</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ 在线图片的版权问题</strong><br>
            从网上搜索的图片可能有<strong>版权限制</strong>，用于商业PPT要注意：<br>
            • 课堂作业/学习用途 → 一般没问题<br>
            • 公司对外展示/商用 → 需要用<strong>免费商用图片</strong><br>
            推荐免费图片网站：Unsplash、Pexels、Pixabay、站酷海洛（部分免费）
        </div>

        <h4>方法三：截图插入</h4>
        <p>需要把屏幕上的内容放进PPT时（比如后台数据截图）：</p>
        <ul>
            <li><strong>系统截图：</strong>按 <span class="kbd">Win</span> + <span class="kbd">Shift</span> + <span class="kbd">S</span>（Windows 10/11），框选区域截图后粘贴到PPT</li>
            <li><strong>WPS截图：</strong>插入 → 截图 → 选择截图区域</li>
            <li><strong>微信/QQ截图：</strong>也可以截图后直接 <span class="kbd">Ctrl</span> + <span class="kbd">V</span> 粘贴到PPT</li>
        </ul>

        <h4>方法四：拖拽插入</h4>
        <p>最简单的方式——直接从<strong>文件夹中把图片拖到PPT编辑区</strong>，松开即可插入。</p>

        <h3>三、调整图片大小与位置</h3>

        <h4>1. 调整大小</h4>
        <p>图片插入后，操作方式和文本框类似：</p>
        <ul>
            <li>选中图片 → 拖拽<strong>四角控制点</strong>调整大小</li>
            <li>⭐ <strong>务必按住 <span class="kbd">Shift</span> 拖拽</strong> → 保持图片<strong>等比例缩放</strong>，防止变形！</li>
            <li>也可以在"图片工具"选项卡中精确输入宽度和高度数值</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚨 最重要的规则：图片不能拉变形！</strong><br>
            这是新手最常犯的错误——把图片拉得又宽又扁，或者又窄又长。产品图变形了，客户会觉得你很不专业。<br><br>
            <strong>记住：永远按住 Shift 拖拽四角来缩放图片！</strong><br>
            如果不小心拉变形了，按 <span class="kbd">Ctrl</span> + <span class="kbd">Z</span> 撤销。
        </div>

        <h4>2. 移动位置</h4>
        <ul>
            <li>选中图片 → 拖拽移动到想要的位置</li>
            <li>按住 <span class="kbd">Shift</span> 拖拽 → 限制水平或垂直方向移动</li>
            <li>用<strong>方向键</strong>微调位置（每次移动1像素）</li>
        </ul>

        <h4>3. 旋转图片</h4>
        <ul>
            <li>选中图片 → 拖拽顶部的<strong>旋转手柄</strong></li>
            <li>按住 <span class="kbd">Shift</span> → 每次旋转15度</li>
            <li>右键 → 设置对象格式 → 可以精确输入旋转角度</li>
        </ul>

        <h3>四、裁剪图片</h3>
        <p>插入的图片经常不是我们想要的比例或构图，这时就需要<strong>裁剪</strong>。裁剪不会删除原图，只是隐藏不需要的部分。</p>

        <h4>1. 自由裁剪</h4>
        <ol>
            <li>选中图片</li>
            <li>在顶部出现的<strong>"图片工具"</strong>选项卡中找到<strong>"裁剪"</strong>按钮并点击</li>
            <li>图片四周和四角出现<strong>黑色裁剪框</strong></li>
            <li>拖拽裁剪框的边和角，调整保留区域</li>
            <li>调整好后<strong>点击图片外的空白处</strong>确认裁剪</li>
        </ol>

        <h4>2. 按比例裁剪</h4>
        <p>需要特定比例的图片（比如正方形、16:9）：</p>
        <ol>
            <li>选中图片 → 点击"裁剪"按钮旁边的<strong>下拉箭头</strong></li>
            <li>选择 <strong>"按比例裁剪"</strong></li>
            <li>选择需要的比例：
                <ul>
                    <li><strong>1:1</strong> —— 正方形（淘宝/拼多多主图常用）</li>
                    <li><strong>16:9</strong> —— 宽屏比例（PPT默认比例）</li>
                    <li><strong>4:3</strong> —— 传统比例</li>
                    <li><strong>3:4</strong> —— 竖版比例（手机展示）</li>
                </ul>
            </li>
        </ol>

        <h4>3. 裁剪为形状</h4>
        <p>把图片裁剪成各种形状（圆形、心形、星形等），非常适合做创意排版：</p>
        <ol>
            <li>选中图片 → 裁剪下拉箭头 → <strong>"裁剪为形状"</strong></li>
            <li>选择一个形状（最常用的是<strong>圆形/椭圆</strong>，适合做头像或产品特写）</li>
            <li>图片会自动变成该形状</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 电商实用技巧：圆形产品图</strong><br>
            把产品图裁剪成圆形，放在PPT上特别好看且专业。特别适合：<br>
            • 产品对比页（几个圆形产品图并排）<br>
            • 团队介绍页（头像裁剪成圆形）<br>
            • 流程图节点（每个节点放一张圆形图片）
        </div>

        <h3>五、图片美化与调整</h3>

        <h4>1. 亮度和对比度</h4>
        <p>如果图片太暗或太亮，可以调整：</p>
        <ul>
            <li>选中图片 → "图片工具"选项卡 → <strong>"亮度/对比度"</strong></li>
            <li>或者点击 <strong>"图片校正"</strong>，从预设方案中选择</li>
        </ul>

        <h4>2. 图片样式（边框和效果）</h4>
        <p>WPS提供了丰富的图片样式一键应用：</p>
        <ul>
            <li>选中图片 → "图片工具"选项卡 → <strong>"图片样式"</strong> 区域</li>
            <li>可以选择预设样式：带阴影、带边框、带倒影、圆角等</li>
            <li>也可以单独设置：
                <ul>
                    <li><strong>边框</strong>：给图片添加边框线，设置颜色和粗细</li>
                    <li><strong>阴影</strong>：给图片添加阴影效果，让图片有立体感</li>
                    <li><strong>倒影</strong>：图片下方出现倒影效果，非常高级</li>
                    <li><strong>柔化边缘</strong>：图片边缘变得模糊渐变</li>
                </ul>
            </li>
        </ul>

        <h4>3. 图片透明度</h4>
        <p>需要把图片变成半透明效果（比如作为背景时不要太抢眼）：</p>
        <ul>
            <li>选中图片 → 右键 → <strong>设置对象格式</strong></li>
            <li>找到<strong>"透明度"</strong>滑块，向右拖拽增加透明度</li>
        </ul>

        <h4>4. 去除图片背景</h4>
        <p>有时候产品图有背景色，想让产品"浮"在PPT上（抠图效果）：</p>
        <ol>
            <li>选中图片 → "图片工具"选项卡 → <strong>"删除背景"</strong>（或"设置透明色"）</li>
            <li><strong>设置透明色</strong>：适合纯色背景。点击后鼠标变成吸管，点击要变透明的背景色</li>
            <li><strong>删除背景</strong>：适合复杂背景。WPS会自动识别前景和背景，你可以手动调整保留区域</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ WPS的删除背景功能有局限</strong><br>
            对于复杂背景的抠图，WPS的效果不如专业工具。如果需要精确抠图，建议：<br>
            • 使用免费在线抠图工具（如 remove.bg）<br>
            • 直接找白底/透明底的产品图<br>
            • 用PNG格式的透明底图片
        </div>

        <h3>六、图片排列与布局技巧</h3>

        <h4>1. 多图对齐</h4>
        <p>一页放多张图片时，对齐非常重要：</p>
        <ul>
            <li>选中所有图片（<span class="kbd">Ctrl</span> + 逐个点击）</li>
            <li>开始 → 对齐 → 选择对齐方式（顶端对齐、横向分布等）</li>
            <li>和文本框的对齐操作一模一样</li>
        </ul>

        <h4>2. 图片层叠顺序</h4>
        <p>当图片和图片、图片和文本框重叠时，谁在上面谁在下面？</p>
        <ul>
            <li>选中图片 → 右键 → <strong>"叠放次序"</strong></li>
            <li><strong>置于顶层</strong> —— 放到最上面</li>
            <li><strong>置于底层</strong> —— 放到最下面</li>
            <li><strong>上移一层 / 下移一层</strong> —— 微调层级</li>
        </ul>

        <h4>3. 图文混排的原则</h4>
        <p>图片和文字在同一页面上时，要注意以下排版原则：</p>
        <ul>
            <li><strong>左图右文</strong>或<strong>上图下文</strong> —— 最经典的布局方式</li>
            <li><strong>图大文小</strong> —— 图片是主角时，文字做辅助说明</li>
            <li><strong>留白呼吸</strong> —— 图片和文字之间留出足够空间，不要挤在一起</li>
            <li><strong>图文对齐</strong> —— 图片的边缘和文字的边缘保持对齐</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 电商PPT图片排版公式</strong><br>
            <strong>产品展示页：</strong>大图居中 + 下方放产品名和价格<br>
            <strong>产品对比页：</strong>2-4张图片等宽排列 + 下方分别写参数<br>
            <strong>数据分析页：</strong>截图占页面2/3 + 旁边放关键结论<br>
            <strong>团队介绍页：</strong>圆形头像排列 + 下方放姓名职位
        </div>

        <h3>七、图片文件格式与质量</h3>
        <p>了解常见的图片格式，选对格式才能让PPT既好看又不会太大：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">格式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>JPG/JPEG</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">体积小，不支持透明</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">照片、产品实拍图</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>PNG</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">支持透明背景，体积较大</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ Logo、图标、抠图产品</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>GIF</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">支持动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">简单的动态效果演示</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>SVG</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">矢量图，放大不模糊</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">图标、标志</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 图片大小与PPT体积</strong><br>
            一张5MB的高清照片插入PPT后，PPT文件也会增大约5MB。如果放了20张大图，PPT可能变成100MB，发邮件都发不出去！<br><br>
            <strong>解决方案：</strong><br>
            • 插入前先<strong>压缩图片</strong>（用系统画图工具或在线压缩工具）<br>
            • WPS内压缩：选中图片 → 图片工具 → <strong>"压缩图片"</strong> → 选择适当分辨率<br>
            • 一般PPT用途，图片宽度<strong>1920px</strong>就足够了
        </div>
    `,

    steps: `
        <p>现在我们来制作一个<strong>"商品主图展示页"</strong>PPT，实战掌握图片操作的全部技能。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">准备图片素材</div>
            <div class="step-card-desc">
                <p>在开始做PPT之前，先准备好要用的图片：</p>
                <ul>
                    <li>去网上找<strong>3-5张产品图片</strong>（可以是任何产品：耳机、手机壳、衣服等）</li>
                    <li>推荐来源：淘��/京东产品图（学习用途）、Unsplash（免费高清图）</li>
                    <li>保存到电脑的一个文件夹中，比如 <code>桌面/PPT素材/</code></li>
                    <li>尽量选择<strong>白底</strong>或<strong>简洁背景</strong>的产品图</li>
                </ul>
                <p>如果没有现成的产品图，也可以用手机拍几张身边的物品。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">新建文件，制作封面</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>商品展示.pptx</code></p>
                <p>封面页内容：</p>
                <ul>
                    <li>标题：<strong>"2024爆款商品推荐"</strong>（40pt，微软雅黑Bold）</li>
                    <li>副标题：<strong>"XX旗舰店 · 年度精选"</strong>（20pt，灰色）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">第2页：插入单张产品大图</div>
            <div class="step-card-desc">
                <p>新建一页，做一个<strong>"主推产品展示页"</strong>：</p>
                <ol>
                    <li>删除默认的占位符文本框</li>
                    <li>插入 → 图片 → 本地图片 → 选择一张产品图 → 插入</li>
                    <li>按住 <span class="kbd">Shift</span> 拖拽四角，调整图片大小（放大到页面的60%左右）</li>
                    <li>把图片移到<strong>页面中央偏上</strong>的位置</li>
                    <li>在图片下方添加文本框：产品名称（24pt，加粗）和价格（36pt，红色）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">裁剪图片为正方形</div>
            <div class="step-card-desc">
                <p>电商产品图通常需要正方形比例：</p>
                <ol>
                    <li>选中刚插入的产品图</li>
                    <li>在"图片工具"选项卡找到 <strong>"裁剪"</strong> → 点击下拉箭头</li>
                    <li>选择 <strong>"按比例裁剪" → "1:1"</strong></li>
                    <li>拖拽调整裁剪区域，确保产品在画面中央</li>
                    <li>点击空白处确认裁剪</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">给图片添加样式效果</div>
            <div class="step-card-desc">
                <p>让产品图更精致：</p>
                <ul>
                    <li>选中图片 → "图片工具"选项卡 → 浏览<strong>"图片样式"</strong></li>
                    <li>选择一个<strong>带阴影</strong>的样式（让图片有立体感）</li>
                    <li>或者手动设置：右键 → 设置对象格式 → 效果：
                        <ul>
                            <li>阴影：选择"外部" → 偏移量5px → 模糊10px</li>
                            <li>圆角：设置圆角半径为10px（让图片不那么生硬）</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">第3页：多产品对比展示</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"热卖商品 TOP3"</strong></p>
                <p>插入3张产品图并排展示：</p>
                <ol>
                    <li>插入第1张图片 → 按住 <span class="kbd">Shift</span> 缩放到合适大小</li>
                    <li>按住 <span class="kbd">Ctrl</span> 拖拽复制图片位置（先做好布局占位）</li>
                    <li>删除复制出的图片，重新插入第2、3张不同的产品图</li>
                    <li>调整3张图片大小一致（选中图片 → 图片工具 → 输入相同的宽度和高度）</li>
                    <li>全选3张图片 → 对齐 → <strong>"顶端对齐"</strong> + <strong>"横向分布"</strong></li>
                    <li>在每张图下方添加产品名和价格</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">第4页：圆形图片展示</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"产品特写"</strong></p>
                <p>把产品图裁剪为圆形：</p>
                <ol>
                    <li>插入一张产品图</li>
                    <li>选中图片 → 裁剪下拉 → <strong>"裁剪为形状"</strong> → 选择<strong>圆形</strong></li>
                    <li>按住 <span class="kbd">Shift</span> 调整大小</li>
                    <li>给圆形图片添加<strong>白色边框</strong>（右键 → 设置对象格式 → 线条 → 白色，3pt粗）</li>
                    <li>再加一个<strong>阴影效果</strong></li>
                    <li>用同样方法再做2-3个圆形图片，排成一行</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">尝试设置透明色</div>
            <div class="step-card-desc">
                <p>如果你的某张产品图有纯色背景（比如白色），可以尝试去掉背景：</p>
                <ol>
                    <li>选中图片</li>
                    <li>图片工具 → <strong>"设置透明色"</strong></li>
                    <li>鼠标变成吸管后，<strong>点击图片的白色背景区域</strong></li>
                    <li>白色背景变透明了！产品"浮"在了幻灯片上</li>
                </ol>
                <p>注意：这个功能对纯色背景效果最好，复杂背景可能效果不理想。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">调整图片层叠顺序</div>
            <div class="step-card-desc">
                <p>在产品展示页上做一个"叠放"效果：</p>
                <ol>
                    <li>插入2-3张图片，让它们<strong>部分重叠</strong></li>
                    <li>选中最前面要显示的图片 → 右键 → 叠放次序 → <strong>"置于顶层"</strong></li>
                    <li>选中要放在后面的图片 → 右键 → 叠放次序 → <strong>"置于底层"</strong></li>
                    <li>调整出一个好看的层叠效果</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">压缩图片并保存</div>
            <div class="step-card-desc">
                <p>如果PPT文件太大，压缩图片：</p>
                <ul>
                    <li>选中任意一张图片</li>
                    <li>图片工具 → <strong>"压缩图片"</strong></li>
                    <li>选择<strong>"应用于所有图片"</strong></li>
                    <li>分辨率选择<strong>"屏幕（150dpi）"</strong>或<strong>"打印（220dpi）"</strong></li>
                    <li>点击确定</li>
                </ul>
                <p>最后 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存，<span class="kbd">F5</span> 放映检查效果。</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-danger">
            <strong>🚨 图片操作三大禁忌</strong><br>
            1. <strong>不按Shift拖拽导致图片变形</strong> —— 永远等比例缩放！<br>
            2. <strong>使用模糊/低分辨率的图片</strong> —— 宁可不放图，也别放模糊的图<br>
            3. <strong>图片太多太满没有留白</strong> —— 一页最多4-5张图，保持"呼吸感"
        </div>

        <div class="tip-box tip-info">
            <strong>💡 图片对齐的快速技巧</strong><br>
            当页面上有多张图片需要统一大小时：<br>
            1. 先把第一张图调整到理想大小<br>
            2. 记住它的<strong>宽度和高度数值</strong>（在图片工具中查看）<br>
            3. 依次选中其他图片，输入相同的数值<br>
            4. 全选后使用对齐工具排列整齐<br><br>
            这样所有图片就<strong>大小一致、排列整齐</strong>了！
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 让图片更专业的小技巧</strong><br>
            • <strong>统一风格</strong>：同一页的图片尽量风格一致（都是白底、都是实拍、都是插画）<br>
            • <strong>加圆角</strong>：方形图片加圆角，看起来更柔和现代<br>
            • <strong>加阴影</strong>：轻微的投影效果让图片更有立体感<br>
            • <strong>加边框</strong>：白色细边框让图片和背景区分更清楚<br>
            • <strong>统一间距</strong>：图片之间的间距保持一致，用"横向/纵向分布"功能
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 关于图片版权的重要提醒</strong><br>
            在学校做作业可以随意使用网上的图片，但<strong>工作中做商用PPT</strong>要注意：<br>
            • <strong>免费可商用</strong>：Unsplash、Pexels、Pixabay 上的图片<br>
            • <strong>可能有版权</strong>：百度图片、Google图片搜索到的<br>
            • <strong>肯定有版权</strong>：竞品官网的产品图、明星照片、品牌Logo<br><br>
            养成好习惯：建立自己的<strong>素材库文件夹</strong>，收集合规可用的图片素材。
        </div>

        <div class="tip-box tip-info">
            <strong>💡 截图也是一种"图片"</strong><br>
            电商工作中经常需要在PPT里展示后台数据截图。截图技巧：<br>
            • 截图前<strong>先调整好窗口大小</strong>，确保要展示的内容完整<br>
            • 截图后可以在PPT中<strong>裁剪掉不必要的部分</strong>（如浏览器地址栏）<br>
            • 如果截图中有<strong>敏感信息</strong>（客户手机号、订单号等），记得打马赛克<br>
            • 打马赛克方法：在截图上方画一个<strong>矩形覆盖</strong>敏感区域
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '调整图片大小时，为防止图片变形，应该怎么做？',
            options: [
                '随意拖拽任意控制点',
                '按住 Shift 拖拽四角控制点',
                '按住 Ctrl 拖拽',
                '双击图片后调整'
            ],
            answer: 1,
            explanation: '按住 Shift 拖拽四角控制点可以保持图片的原始宽高比（等比例缩放），防止图片被拉伸变形。这是图片操作中最重要的规则！'
        },
        {
            type: 'single',
            question: '想把产品图裁剪成正方形比例，应该使用哪个功能？',
            options: ['自由裁剪', '按比例裁剪 → 1:1', '裁剪为形状 → 圆形', '删除背景'],
            answer: 1,
            explanation: '选择"按比例裁剪 → 1:1"可以将图片裁剪为正方形比例。这在电商中很常用，因为淘宝、拼多多等平台的产品主图都是正方形的。'
        },
        {
            type: 'single',
            question: '以下哪种图片格式支持透明背景？',
            options: ['JPG', 'PNG', 'BMP', 'GIF（静态）'],
            answer: 1,
            explanation: 'PNG格式支持透明背景（Alpha通道），适合插入Logo、抠图产品等需要透明效果的场景。JPG不支持透明，GIF虽然支持但质量较低。'
        },
        {
            type: 'judge',
            question: '在PPT中裁剪图片后，被裁掉的部分会被永久删除。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！PPT中的裁剪只是隐藏了图片的一部分，原始图片数据仍然保留在文件中。你可以重新点击裁剪来调整裁剪区域。如果想彻底删除裁剪部分（减小文件大小），可以使用"压缩图片"功能。'
        },
        {
            type: 'single',
            question: '多张图片重叠时，想让某张图片显示在最前面，应该使用什么功能？',
            options: ['对齐 → 居中', '叠放次序 → 置于顶层', '组合', '图片样式'],
            answer: 1,
            explanation: '右键 → 叠放次序 → "置于顶层"可以将选中的图片放到所有对象的最前面。同理，"置于底层"可以放到最后面。'
        },
        {
            type: 'multiple',
            question: '以下哪些是让图片在PPT中更专业的技巧？（多选）',
            options: [
                '给图片添加轻微阴影效果',
                '让图片尽量铺满整个页面不留空白',
                '同一页的图片统一大小和风格',
                '使用对齐工具排列多张图片'
            ],
            answer: [0, 2, 3],
            explanation: '阴影增加立体感、统一大小风格、使用对齐工具排列都能让图片更专业。但不应该让图片铺满不留空白，适当的留白让页面更有"呼吸感"。'
        },
        {
            type: 'single',
            question: 'PPT文件变得很大（超过50MB），最可能的原因是什么？',
            options: ['文字太多', '动画太多', '插入了大量高分辨率图片', '使用了太多字体'],
            answer: 2,
            explanation: '高分辨率图片是导致PPT文件体积过大的最常见原因。一张5MB的照片插入PPT后文件就增大5MB。解决方法是使用"压缩图片"功能降低分辨率。'
        },
        {
            type: 'single',
            question: '"设置透明色"功能最适合处理什么样的图片背景？',
            options: ['复杂的自然风景背景', '渐变色背景', '纯色背景（如纯白、纯黑）', '有人物的背景'],
            answer: 2,
            explanation: '"设置透明色"通过点击某个颜色将其变为透明，对纯色背景效果最好。复杂的背景需要使用专业的抠图工具（如remove.bg）。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作商品主图展示PPT
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少4页的商品展示PPT，要求：</p>
                <ol>
                    <li>
                        <strong>第1页：封面</strong><br>
                        标题 + 副标题，风格与电商主题匹配
                    </li>
                    <li>
                        <strong>第2页：主推产品大图展示</strong><br>
                        一张大产品图（裁剪为正方形或合适比例）+ 产品名 + 价格。图片需添加阴影或圆角效果
                    </li>
                    <li>
                        <strong>第3页：多产品对比展示</strong><br>
                        3张产品图并排展示，要求：大小一致、顶部对齐、等间距分布。每张图下方有产品名和价格
                    </li>
                    <li>
                        <strong>第4页：创意展示</strong><br>
                        至少使用以下一种技巧：裁剪为圆形、设置透明色、图片叠放效果
                    </li>
                </ol>
                <p><strong>图片要求：</strong></p>
                <ul>
                    <li>所有图片不变形（等比例缩放）</li>
                    <li>同一页的图片大小统一</li>
                    <li>至少一张图片有样式效果（阴影/边框/圆角）</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>使用"压缩图片"功能，让最终文件大小控制在10MB以内</li>
                    <li>尝试使用"删除背景"或"设置透明色"功能</li>
                    <li>尝试图片和文字的创意混排（比如文字叠在图片上方，白色文字配深色图片背景）</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 4种插入图片的方法<br>
            ✅ 图片的缩放、移动、旋转（等比例缩放！）<br>
            ✅ 自由裁剪、按比例裁剪、裁剪为形状<br>
            ✅ 图片美化：阴影、边框、倒影、透明度<br>
            ✅ 设置透明色和删除背景<br>
            ✅ 多图对齐与层叠顺序<br>
            ✅ 图片格式选择与压缩<br><br>
            下一课我们将学习<strong>形状绘制与组合</strong>——设计店铺活动促销标签，让你的PPT更加精彩！
        </div>
    `
};
