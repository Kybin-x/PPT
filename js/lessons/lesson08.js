/**
 * PPT学习站 - 第8课：形状绘制与组合
 * 文件路径: js/lessons/lesson08.js
 * 模块：图片与图形
 * 任务情境：设计店铺活动促销标签
 */

window.lessonData = {

    scenario: '双十一即将到来，运营部需要在产品展示PPT中加入各种促销标签——"限时折扣""包邮""爆款""新品"等标签。这些标签不是用图片做的，而是用PPT自带的形状功能"画"出来的！学会形状操作，你就能自己设计各种精美的视觉元素，不再依赖设计师。',

    knowledge: `
        <h3>一、什么是形状？</h3>
        <p>形状（Shape）是WPS演示中内置的<strong>矢量图形</strong>元素。和图片不同，形状是用数学公式描述的，所以<strong>无论放大多少倍都不会模糊</strong>。</p>
        <p>WPS演示提供了上百种预设形状，大致分为以下几类：</p>
        <ul>
            <li><strong>基本形状</strong> —— 矩形、圆形、三角形、菱形等</li>
            <li><strong>箭头</strong> —— 各种方向和样式的箭头</li>
            <li><strong>流程图</strong> —— 用于画流程图的专用形状</li>
            <li><strong>星与旗帜</strong> —— 五角星、爆炸形、旗帜等（做促销标签超好用！）</li>
            <li><strong>标注</strong> —— 对话气泡、批注框等</li>
            <li><strong>线条</strong> —— 直线、曲线、箭头线等</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 形状在电商PPT中的用途</strong><br>
            • <strong>促销标签</strong>：爆炸形 + 文字 = "限时5折"标签<br>
            • <strong>按钮设计</strong>：圆角矩形 + 文字 = "立即购买"按钮<br>
            • <strong>流程图</strong>：矩形 + 箭头 = 运营流程图<br>
            • <strong>装饰元素</strong>：圆形、线条做页面分割和装饰<br>
            • <strong>数据突出</strong>：圆形 + 大数字 = 数据展示卡片
        </div>

        <h3>二、插入形状</h3>

        <h4>基本步骤</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"形状"</strong> 按钮，弹出形状面板</li>
            <li>选择你需要的形状（比如圆角矩形）</li>
            <li>在幻灯片上<strong>按住鼠标拖拽</strong>画出形状</li>
            <li>松开鼠标，形状就出现了</li>
        </ol>

        <h4>绘制技巧</h4>
        <ul>
            <li>按住 <span class="kbd">Shift</span> 拖拽 → 画出<strong>正形状</strong>（正方形、正圆、等边三角形）</li>
            <li>按住 <span class="kbd">Ctrl</span> 拖拽 → 从<strong>中心向外</strong>画（而不是从角开始）</li>
            <li>按住 <span class="kbd">Shift</span> + <span class="kbd">Ctrl</span> 拖拽 → 从中心画正形状</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 必背技巧：Shift 画正形状</strong><br>
            • 画矩形时按住 Shift → 变成<strong>正方形</strong><br>
            • 画椭圆时按住 Shift → 变成<strong>正圆</strong><br>
            • 画线条时按住 Shift → 变成<strong>水平/垂直/45度线</strong><br>
            这个技巧用得非常多，一定要记住！
        </div>

        <h3>三、形状的格式设置</h3>
        <p>形状的外观可以完全自定义，让你做出各种各样的设计效果。</p>

        <h4>1. 填充颜色</h4>
        <p>形状默认有一个蓝色填充，你可以修改：</p>
        <ul>
            <li>选中形状 → "绘图工具/形状格式"选项卡 → <strong>"形状填充"</strong></li>
            <li>或者右键 → 设置对象格式 → 填充</li>
            <li>可选择的填充类型：
                <ul>
                    <li><strong>纯色填充</strong> —— 最常用，选一个颜色</li>
                    <li><strong>渐变填充</strong> —— 两种颜色过渡，更有质感</li>
                    <li><strong>图案填充</strong> —— 填充斜线、网格等图案</li>
                    <li><strong>图片填充</strong> —— 用一张图片填充形状内部</li>
                    <li><strong>无填充</strong> —— 形状变透明，只显示边框</li>
                </ul>
            </li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 渐变填充是高级感的秘密</strong><br>
            纯色填充看起来比较"平"，而渐变填充让形状立刻有了<strong>质感和深度</strong>。<br>
            • 电商促销标签：<strong>红→深红</strong> 渐变，更有力量感<br>
            • 科技感按钮：<strong>蓝→紫</strong> 渐变，很现代<br>
            • 高级卡片：<strong>浅灰→白</strong> 渐变，低调奢华<br><br>
            设置方法：选中形状 → 形状填充 → 渐变 → 选择预设或自定义渐变方向和颜色。
        </div>

        <h4>2. 边框（轮廓）</h4>
        <ul>
            <li>选中形状 → <strong>"形状轮廓"</strong>（或右键 → 设置对象格式 → 线条）</li>
            <li>可以设置：颜色、粗细（磅值）、线型（实线/虚线/点线）</li>
            <li>选择<strong>"无轮廓"</strong>可以去掉边框线</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 现代设计趋势：无边框</strong><br>
            当前流行的PPT设计风格通常<strong>不加边框</strong>——只用填充色和阴影来区分形状。边框会让设计看起来比较"古老"。除非你特意需要边框效果，否则建议设为"无轮廓"。
        </div>

        <h4>3. 阴影效果</h4>
        <ul>
            <li>选中形状 → 右键 → 设置对象格式 → <strong>"效果"</strong> → <strong>"阴影"</strong></li>
            <li>或者在"形状格式"选项卡中找到"形状效果" → 阴影</li>
            <li>推荐使用<strong>"外部"阴影</strong>，偏移量和模糊度都不要太大（2-8px为宜）</li>
        </ul>

        <h4>4. 圆角调整</h4>
        <p>对于圆角矩形，你可以精确控制圆角的大小：</p>
        <ul>
            <li>选中圆角矩形后，左上角会出现一个<strong>黄色小菱形</strong>调节点</li>
            <li>向左拖拽 → 圆角变小（趋向直角）</li>
            <li>向右拖拽 → 圆角变大（趋向胶囊形/圆形）</li>
        </ul>

        <h3>四、在形状中添加文字</h3>
        <p>形状不只是装饰，还可以<strong>直接在里面输入文字</strong>，这是做促销标签的核心技能！</p>

        <h4>添加文字的方法</h4>
        <ul>
            <li><strong>方法一：</strong>选中形状后直接开始<strong>打字</strong>，文字自动出现在形状中央</li>
            <li><strong>方法二：</strong>右键形状 → <strong>"编辑文字"</strong></li>
            <li><strong>方法三：</strong>双击形状，进入文字编辑模式</li>
        </ul>

        <p>形状中的文字格式设置和普通文本框完全一样——可以改字体、字号、颜色、对齐方式等。</p>

        <div class="tip-box tip-success">
            <strong>🎯 促销标签公式：形状 + 文字 = 标签</strong><br>
            <strong>爆炸形（红色填充）+ "限时5折"（白色大字）= 促销爆炸标签</strong><br>
            <strong>圆角矩形（橙色填充）+ "包邮"（白色加粗）= 包邮标签</strong><br>
            <strong>五角星（金色填充）+ "TOP1"（白色加粗）= 排名标签</strong><br>
            <strong>圆形（红色填充）+ "HOT"（白色）= 热卖标签</strong><br><br>
            学会这个组合，你就能做出各种各样的标签了！
        </div>

        <h3>五、形状的高级操作</h3>

        <h4>1. 组合（Group）</h4>
        <p>当多个形状和文本框组成一个整体时，可以<strong>组合</strong>起来，方便一起移动和缩放：</p>
        <ol>
            <li>按住 <span class="kbd">Ctrl</span> 选中多个对象</li>
            <li>右键 → <strong>"组合"</strong> → <strong>"组合"</strong></li>
            <li>或者快捷键 <span class="kbd">Ctrl</span> + <span class="kbd">G</span></li>
        </ol>
        <p>组合后的对象变成一个整体，移动时不会散开。如果需要修改其中某个元素：</p>
        <ul>
            <li><strong>取消组合：</strong>右键 → 组合 → 取消组合（或 <span class="kbd">Ctrl</span> + <span class="kbd">Shift</span> + <span class="kbd">G</span>）</li>
            <li><strong>进入组合编辑：</strong>双击组合体，可以编辑内部的单个元素，编辑完点击外面恢复</li>
        </ul>

        <h4>2. 对齐与分布</h4>
        <p>和图片、文本框一样，多个形状也可以使用对齐工具：</p>
        <ul>
            <li>选中多个形状 → 开始/格式 → <strong>对齐</strong></li>
            <li>常用：水平居中、顶端对齐、横向分布、纵向分布</li>
        </ul>

        <h4>3. 复制形状</h4>
        <ul>
            <li><span class="kbd">Ctrl</span> + 拖拽 → 快速复制（最推荐）</li>
            <li><span class="kbd">Ctrl</span> + <span class="kbd">D</span> → 快速复制副本</li>
            <li><span class="kbd">Ctrl</span> + <span class="kbd">C</span> / <span class="kbd">V</span> → 经典复制粘贴</li>
        </ul>

        <h4>4. 更改形状类型</h4>
        <p>画好一个形状后发现想换一个形状？不用删了重画：</p>
        <ul>
            <li>选中形状 → "形状格式"选项卡 → <strong>"编辑形状"</strong> → <strong>"更改形状"</strong></li>
            <li>选择新的形状类型，原来的大小、颜色、文字全部保留</li>
        </ul>

        <h4>5. 形状的合并运算</h4>
        <p>这是形状操作的高级功能，可以用两个或多个形状"运算"出新形状：</p>
        <ul>
            <li>选中两个形状 → "形状格式"选项卡 → <strong>"合并形状"</strong></li>
            <li>五种运算：
                <ul>
                    <li><strong>联合</strong> —— 合并成一个形状</li>
                    <li><strong>组合</strong> —— 去掉重叠部分</li>
                    <li><strong>拆分</strong> —— 把重叠区域单独拆出</li>
                    <li><strong>相交</strong> —— 只保留重叠的部分</li>
                    <li><strong>剪除</strong> —— 从第一个形状中挖掉第二个的部分</li>
                </ul>
            </li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 合并形状的妙用</strong><br>
            • <strong>联合</strong>：把两个圆角矩形拼成一个异形标签<br>
            • <strong>剪除</strong>：在一个矩形上"挖洞"，做出镂空效果<br>
            • <strong>相交</strong>：让图片只显示在某个形状的范围内（高级裁剪）<br><br>
            这个功能初学者暂时用不太到，但知道它存在，以后需要时就知道去哪里找。
        </div>

        <h3>六、常用形状设计模板</h3>
        <p>记住这几个常用的形状组合，遇到需要时直接套用：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">用途</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">形状选择</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">颜色建议</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">文字建议</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">促销爆炸标签</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">爆炸形/星形</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">红色/橙色填充</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">白色大字"5折""秒杀"</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标签/徽章</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">圆角矩形</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">品牌色填充</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">白色小字"包邮""新品"</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据卡片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">圆角矩形</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">浅色/白色 + 阴影</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">大数字 + 小说明文字</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">按钮</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">圆角矩形（大圆角）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">渐变填充</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">白色字"立即购买""了解更多"</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">排名标签</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">圆形/盾牌形</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">金色/红色</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">白色"TOP1""第1名"</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">分割线</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">直线</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">浅灰色，1-2pt</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">无文字</td>
                </tr>
            </tbody>
        </table>
    `,

    steps: `
        <p>现在我们来<strong>设计一套电商促销标签</strong>，实战掌握形状操作的全部技能。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件，准备工作页</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>促销标签设计.pptx</code></p>
                <p>删除默认占位符，得到空白页面。这一页我们用来制作各种标签。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">制作"限时折扣"爆炸标签</div>
            <div class="step-card-desc">
                <ol>
                    <li>插入 → 形状 → 在"星与旗帜"分类中选择<strong>"爆炸形"</strong>（有锯齿边缘的星形）</li>
                    <li>在页面左上角拖拽画出一个中等大小的爆炸形</li>
                    <li>设置填充：<strong>红色</strong>（#E53935），无轮廓</li>
                    <li>双击形状（或选中后直接打字），输入：<strong>限时5折</strong></li>
                    <li>设置文字：<strong>白色、28pt、微软雅黑Bold、居中</strong></li>
                    <li>给形状添加阴影：右键 → 设置对象格式 → 效果 → 阴影 → 选择外部阴影</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">制作"包邮"圆角标签</div>
            <div class="step-card-desc">
                <ol>
                    <li>插入 → 形状 → 选择<strong>"圆角矩形"</strong></li>
                    <li>画一个小尺寸的圆角矩形（大概和两个字差不多宽）</li>
                    <li>拖拽<strong>黄色调节点</strong>，让圆角变大一些（接近胶囊形状）</li>
                    <li>填充色：<strong>橙色</strong>（#FF6D00），无轮廓</li>
                    <li>输入文字：<strong>包邮</strong>（白色、16pt、加粗）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">用 Ctrl+拖拽 批量复制标签</div>
            <div class="step-card-desc">
                <p>用刚做好的"包邮"标签快速做出更多标签：</p>
                <ol>
                    <li>选中"包邮"标签 → 按住 <span class="kbd">Ctrl</span> 拖拽到右边 → 复制一个</li>
                    <li>双击复制出来的标签，把文字改为<strong>"新品"</strong></li>
                    <li>修改填充色为<strong>绿色</strong>（#4CAF50）</li>
                    <li>同样方法再复制做出<strong>"爆款"</strong>（红色）和<strong>"热卖"</strong>（紫色#9C27B0）</li>
                </ol>
                <p>这样你就有了一套4个小标签了！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">对齐排列所有小标签</div>
            <div class="step-card-desc">
                <ol>
                    <li>按住 <span class="kbd">Ctrl</span> 依次点击4个小标签全部选中</li>
                    <li>开始 → 对齐 → <strong>"顶端对齐"</strong></li>
                    <li>开始 → 对齐 → <strong>"横向分布"</strong></li>
                    <li>四个标签现在整齐地排成一行了</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">制作"TOP1"圆形排名标签</div>
            <div class="step-card-desc">
                <ol>
                    <li>插入 → 形状 → 选择<strong>"椭圆"</strong></li>
                    <li>按住 <span class="kbd">Shift</span> 拖拽 → 画出一个<strong>正圆形</strong></li>
                    <li>填充：<strong>渐变填充</strong>（从金黄色到深橙色，方向：从上到下）</li>
                    <li>无轮廓</li>
                    <li>输入文字：<strong>TOP1</strong>（白色、24pt、Arial Black、居中）</li>
                    <li>添加阴影效果</li>
                </ol>
                <p>一个金灿灿的排名标签就做好了！</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">制作"立即购买"按钮</div>
            <div class="step-card-desc">
                <ol>
                    <li>插入 → 形状 → <strong>"圆角矩形"</strong></li>
                    <li>画一个宽度约6-8厘米、高度约1.5厘米的矩形</li>
                    <li>拖拽黄色调节点让圆角<strong>尽可能大</strong>（变成胶囊/药丸形状）</li>
                    <li>填充：<strong>渐变填充</strong>（从 #FF6B35 橙色 → #E53935 红色，方向：从左到右）</li>
                    <li>无轮廓</li>
                    <li>输入文字：<strong>立即购买</strong>（白色、20pt、加粗、居中）</li>
                    <li>加阴影：偏移量4px，模糊8px</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">组合标签元素</div>
            <div class="step-card-desc">
                <p>把标签和相关元素组合在一起：</p>
                <ol>
                    <li>假设你在"限时5折"爆炸标签旁边加了一个小文本框写"仅剩3天"</li>
                    <li>选中爆炸标签 + "仅剩3天"文本框（按住 <span class="kbd">Ctrl</span> 依次点击）</li>
                    <li>右键 → <strong>组合 → 组合</strong>（或按 <span class="kbd">Ctrl</span> + <span class="kbd">G</span>）</li>
                    <li>现在它们变成一个整体了，移动时不会散开</li>
                    <li>如果需要修改内部元素，双击组合体即可进入编辑</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">第2页：将标签应用到产品展示</div>
            <div class="step-card-desc">
                <p>新建第2页，做一个完整的产品展示效果：</p>
                <ol>
                    <li>插入一张产品图片，放在页面中央</li>
                    <li>把你做好的标签<strong>复制到这一页</strong>（在第1页选中标签 → Ctrl+C → 切换到第2页 → Ctrl+V）</li>
                    <li>把"限时5折"爆炸标签放在产品图的<strong>右上角</strong></li>
                    <li>把"包邮"标签放在价格旁边</li>
                    <li>把"TOP1"圆形放在产品图的<strong>左上角</strong></li>
                    <li>在产品图下方放"立即购买"按钮</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">调整层叠顺序并保存</div>
            <div class="step-card-desc">
                <p>确保标签显示在产品图的上方：</p>
                <ul>
                    <li>如果标签被产品图遮挡了 → 选中标签 → 右键 → 叠放次序 → <strong>置于顶层</strong></li>
                    <li>调整好所有元素的位置和层级</li>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 放映查看效果</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 形状的黄色调节点</strong><br>
            很多形状在选中后会出现一个<strong>黄色小菱形</strong>调节点，拖拽它可以调整形状的某个特殊属性：<br>
            • <strong>圆角矩形</strong>：调整圆角大小<br>
            • <strong>箭头</strong>：调整箭头头部大小<br>
            • <strong>星形</strong>：调整角的尖锐程度<br>
            • <strong>对话气泡</strong>：调整指向箭头的位置<br><br>
            多尝试拖拽这个点，你会发现很多有趣的变化！
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 形状设计的常见错误</strong><br>
            1. <strong>形状太多太杂</strong>：一页上放了七八种不同的形状，看起来很乱<br>
            2. <strong>颜色不统一</strong>：每个形状一个颜色，五颜六色像调色盘<br>
            3. <strong>大小不一致</strong>：同类型的标签/按钮大小参差不齐<br>
            4. <strong>保留默认蓝色</strong>：WPS默认的蓝色填充不好看，一定要改<br><br>
            <strong>原则：同类形状保持统一风格（同色系、同大小、同圆角）</strong>
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 快速做出高级感：形状 + 阴影 + 无边框</strong><br>
            记住这个万能公式：<br>
            <strong>圆角矩形 + 纯色/渐变填充 + 无轮廓 + 轻微阴影 = 高级卡片</strong><br><br>
            这就是你在各种好看的PPT和App界面上看到的"卡片式设计"的核心做法。用这个方法做出来的形状，比默认的带蓝边框的矩形好看100倍！
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 别忘了 Shift 键！</strong><br>
            画圆形（正圆）和画正方形时，<strong>必须按住 Shift</strong>！否则画出来的是椭圆或长方形。<br>
            这和调整图片大小的逻辑一样——Shift 键是"保持比例"的万能键。<br><br>
            <strong>Shift 在形状操作中的作用汇总：</strong><br>
            • 画形状时：画出正形状（正圆、正方形等）<br>
            • 移动形状时：限制水平/垂直方向<br>
            • 旋转形状时：每次旋转15度<br>
            • 缩放形状时：等比例缩放
        </div>

        <div class="tip-box tip-info">
            <strong>💡 收藏你做好的标签</strong><br>
            做好的标签可以反复使用！建议创建一个<strong>"素材库.pptx"</strong>文件，专门存放你设计好的标签、按钮、图标等元素。以后需要时直接复制过来用，不用每次从头做。<br><br>
            这在工作中是一个非常好的习惯——很多电商运营团队都有自己的PPT素材库。
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '画一个正圆形（而非椭圆），应该怎么操作？',
            options: [
                '选择"椭圆"后直接拖拽',
                '选择"椭圆"后按住 Shift 拖拽',
                '选择"圆形"形状',
                '画好椭圆后手动调整宽高相等'
            ],
            answer: 1,
            explanation: '在WPS的形状列表中没有独立的"圆形"选项，圆形是通过"椭圆"形状 + 按住Shift拖拽来画出的。Shift键约束宽高相等，所以椭圆就变成了正圆。'
        },
        {
            type: 'single',
            question: '如何在形状内添加文字？',
            options: [
                '必须单独插入文本框覆盖在形状上',
                '选中形状后直接打字或双击形状',
                '只有矩形才能添加文字',
                '需要先取消形状的填充色'
            ],
            answer: 1,
            explanation: '几乎所有形状都可以直接添加文字。选中形状后直接打字，或者双击形状进入文字编辑模式，就可以在形状内部输入文字了。'
        },
        {
            type: 'single',
            question: '将多个形状合并成一个整体的操作叫什么？',
            options: ['对齐', '组合', '联合', '合并'],
            answer: 1,
            explanation: '"组合"（Group）是将多个对象合并成一个整体的操作，快捷键是Ctrl+G。组合后的对象可以一起移动和缩放。"联合"和"合并"是形状合并运算的名称，和"组合"不同。'
        },
        {
            type: 'judge',
            question: '形状放大后会像图片一样变模糊。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！形状是矢量图形，由数学公式描述，无论放大多少倍都不会模糊。这是形状相比位图（如JPG、PNG）的一大优势。'
        },
        {
            type: 'single',
            question: '圆角矩形中的黄色小菱形调节点是用来做什么的？',
            options: ['调整填充颜色', '调整圆角大小', '旋转形状', '调整文字大小'],
            answer: 1,
            explanation: '圆角矩形的黄色调节点用于调整圆角的弧度大小。向内拖拽圆角变小（趋向直角），向外拖拽圆角变大（趋向胶囊形）。'
        },
        {
            type: 'multiple',
            question: '以下哪些是让形状设计更专业的做法？（多选）',
            options: [
                '使用渐变填充代替纯色',
                '保留默认的蓝色填充和边框',
                '设为无轮廓并添加轻微阴影',
                '同类形状保持统一的大小和颜色'
            ],
            answer: [0, 2, 3],
            explanation: '渐变填充增加质感、无轮廓+阴影是现代设计趋势、统一风格保持专业感。默认的蓝色边框看起来很"初级"，一定要自定义修改。'
        },
        {
            type: 'single',
            question: '想把一个已画好的圆角矩形改成五角星形状，最快的方法是？',
            options: [
                '删除圆角矩形，重新画一个五角星',
                '用"编辑形状" → "更改形状"功能',
                '用"合并形状"功能',
                '无法更改，只能重做'
            ],
            answer: 1,
            explanation: '选中形状 → "形状格式"选项卡 → "编辑形状" → "更改形状"，可以直接把当前形状变成另一种形状，原来设置的颜色、大小、文字都会保留。'
        },
        {
            type: 'single',
            question: '组合对象后想修改内部的某个元素，应该怎么做？',
            options: [
                '必须先取消组合',
                '双击组合体即可编辑内部元素',
                '无法修改，只能取消组合后重做',
                '右键选择"进入编辑"'
            ],
            answer: 1,
            explanation: '双击组合体可以进入组合编辑模式，此时可以选中和修改内部的单个元素。修改完毕后点击组合体外面的空白处即可恢复。不需要先取消组合。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：设计一套电商促销标签
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少3页的PPT，包含一套完整的促销标签设计：</p>
                <ol>
                    <li>
                        <strong>第1页：标签素材展示</strong><br>
                        在一页上展示你设计的所有标签，至少包含5种不同的标签：
                        <ul>
                            <li>一个爆炸形促销标签（如"限时5折""秒杀"）</li>
                            <li>两个以上的小标签（如"包邮""新品""爆款""热卖"）</li>
                            <li>一个圆形排名标签（如"TOP1""No.1"）</li>
                            <li>一个按钮样式标签（如"立即购买""加入购物车"）</li>
                        </ul>
                    </li>
                    <li>
                        <strong>第2页：产品展示应用</strong><br>
                        插入一张产品图片，把你做的标签合理地放置在产品图周围，模拟真实的电商产品详情页效果
                    </li>
                    <li>
                        <strong>第3页：数据卡片</strong><br>
                        用圆角矩形做3-4个数据卡片，每个卡片显示一个关键数据（如"月销量 10000+""好评率 98%""回头客 65%"）
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>所有形状都要自定义颜色（不能保留默认蓝色）</li>
                    <li>至少使用一次渐变填充</li>
                    <li>形状设为无轮廓 + 阴影效果</li>
                    <li>使用对齐工具排列形状</li>
                    <li>至少一组元素使用了组合功能</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试使用"更改形状"功能</li>
                    <li>尝试使用合并形状做出创意形状</li>
                    <li>创建一个"素材库.pptx"文件，保存你设计好的标签</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 插入和绘制各种预设形状<br>
            ✅ Shift画正形状的技巧<br>
            ✅ 形状填充（纯色、渐变）和轮廓设置<br>
            ✅ 在形状中添加文字<br>
            ✅ 形状的组合与取消组合<br>
            ✅ 圆角调整、阴影效果<br>
            ✅ 更改形状类型和合并形状<br><br>
            下一课我们将学习<strong>SmartArt图示</strong>——用它来绘制跨境电商发货流程图，让复杂信息一目了然！
        </div>
    `
};
