/**
 * PPT学习站 - 第13课：动画与过渡效果
 * 文件路径: js/lessons/lesson13.js
 * 模块：动画与交互
 * 任务情境：制作产品发布会PPT
 */

window.lessonData = {
    scenario: '电商公司要举办一场新产品发布会，需要制作一个精彩的PPT来展示新产品。静态的PPT太无聊了，想用动画让产品图片逐个出现，用过渡效果让幻灯片切换更流畅。这样能大大提升发布会的视觉效果和观众的参与度。',

    knowledge: `
        <h3>一、动画与过渡效果的区别</h3>
        <ul>
            <li><strong>动画</strong> —— 作用于幻灯片内的对象（文字、图片、形状等），让它们在放映时动起来</li>
            <li><strong>过渡效果</strong> —— 作用于幻灯片本身，控制从一张幻灯片切换到下一张时的效果</li>
        </ul>

        <h3>二、动画的作用</h3>
        <ul>
            <li><strong>吸引注意力</strong> —— 动画能吸引观众的目光，让他们关注重点内容</li>
            <li><strong>控制信息节奏</strong> —— 通过动画逐步展示信息，避免观众一下子看到所有内容</li>
            <li><strong>增强表现力</strong> —— 动画能让PPT更生动、更专业</li>
            <li><strong>强调重点</strong> —— 用动画突出重要的数据或观点</li>
        </ul>

        <h3>三、常见的动画类型</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">动画类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">用途</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">示例</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">进入动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对象从无到有出现</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">淡入、飞入、弹跳进入</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">强调动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对象已存在，强调它</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">放大、旋转、闪烁</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">退出动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对象从有到无消失</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">淡出、飞出、缩小退出</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">路径动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对象沿着指定路径移动</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">沿直线移动、沿曲线移动</td>
                </tr>
            </tbody>
        </table>

        <h3>四、添加动画的步骤</h3>
        <ol>
            <li>选中要添加动画的对象（文字、图片等）</li>
            <li>点击菜单栏 <strong>"动画"</strong> → 选择动画类型</li>
            <li>在右侧的"动画窗格"中可以看到已添加的动画</li>
            <li>可以调整动画的顺序、时间、速度等</li>
        </ol>

        <h3>五、动画的设置选项</h3>
        <ul>
            <li><strong>动画类型</strong> —— 选择进入、强调、退出或路径动画</li>
            <li><strong>动画速度</strong> —— 很慢、慢、中等、快、很快</li>
            <li><strong>开始方式</strong> —— 点击时开始、与上一个同时、在上一个之后</li>
            <li><strong>延迟时间</strong> —— 动画开始前的等待时间</li>
            <li><strong>重复</strong> —— 动画是否重复播放</li>
        </ul>

        <h3>六、过渡效果的类型</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">过渡效果</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">淡入淡出</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">平缓、专业</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">商务演讲</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">推进</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">动感、流畅</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">产品发布</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">擦除</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">有趣、活泼</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">创意展示</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">立方体</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">3D效果、炫彩</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">创意展示</td>
                </tr>
            </tbody>
        </table>

        <h3>七、添加过渡效果的步骤</h3>
        <ol>
            <li>选中要添加过渡效果的幻灯片</li>
            <li>点击菜单栏 <strong>"切换"</strong> → 选择过渡效果</li>
            <li>可以设置过渡效果的速度和声音</li>
            <li>可以选择"应用到所有幻灯片"，让所有幻灯片都使用相同的过渡效果</li>
        </ol>

        <h3>八、动画与过渡效果的最佳实践</h3>
        <ul>
            <li><strong>不要过度使用</strong> —— 动画太多会显得廉价和不专业</li>
            <li><strong>保持一致性</strong> —— 整个PPT的动画风格要统一</li>
            <li><strong>控制速度</strong> —— 动画速度要适中，不要太快或太慢</li>
            <li><strong>有目的地使用</strong> —— 每个动画都要有明确的目的，不是为了炫耀</li>
            <li><strong>测试播放</strong> —— 一定要在放映模式下测试动画效果</li>
        </ul>
    `,

    keyPoints: [
        { title: '动画与过渡的区别', content: '动画作用于对象，过渡作用于幻灯片' },
        { title: '动画的作用', content: '吸引注意力、控制节奏、增强表现力、强调重点' },
        { title: '动画类型', content: '进入、强调、退出、路径动画' },
        { title: '添加动画', content: '选中对象 → 动画菜单 → 选择类型' },
        { title: '动画设置', content: '速度、开始方式、延迟、重复' },
        { title: '过渡效果', content: '淡入淡出、推进、擦除、立方体等' }
    ],

    quiz: [
        {
            type: 'single',
            question: '想让一张图片在幻灯片出现时逐渐显示，应该用什么动画？',
            options: [
                '强调动画',
                '进入动画',
                '退出动画',
                '路径动画'
            ],
            answer: 1,
            explanation: '进入动画用于让对象从无到有出现。淡入就是一种进入动画，能让图片逐渐显示。'
        },
        {
            type: 'single',
            question: '想让所有幻灯片的切换都有相同的效果，应该怎么做？',
            options: [
                '逐个幻灯片添加过渡效果',
                '选中一个幻灯片添加过渡效果，然后点击"应用到所有幻灯片"',
                '无法实现，只能逐个设置',
                '在第一张幻灯片设置，其他幻灯片会自动继承'
            ],
            answer: 1,
            explanation: '在"切换"菜单中，有"应用到所有幻灯片"按钮，点击它就能让所有幻灯片使用相同的过渡效果。'
        },
        {
            type: 'single',
            question: '在商务演讲中，应该用什么过渡效果最合适？',
            options: [
                '立方体',
                '擦除',
                '淡入淡出',
                '旋转'
            ],
            answer: 2,
            explanation: '淡入淡出是最平缓、最专业的过渡效果，适合商务演讲。过于炫彩的效果会显得不专业。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：制作产品发布会PPT
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少4页的PPT，展示新产品发布会的内容，并添加动画和过渡效果：</p>
                <ol>
                    <li>
                        <strong>第1页：标题页</strong><br>
                        • 标题："新产品发布会"<br>
                        • 为标题添加"飞入"进入动画<br>
                        • 为副标题添加"淡入"进入动画<br>
                        • 添加"淡入淡出"过渡效果
                    </li>
                    <li>
                        <strong>第2页：产品介绍</strong><br>
                        • 插入产品图片<br>
                        • 为图片添加"缩放"进入动画<br>
                        • 添加产品特点的文字列表<br>
                        • 为每个文字项添加"飞入"进入动画<br>
                        • 添加"推进"过渡效果
                    </li>
                    <li>
                        <strong>第3页：产品参数</strong><br>
                        • 创建一个表格展示产品参数<br>
                        • 为表格添加"飞入"进入动画<br>
                        • 添加"擦除"过渡效果
                    </li>
                    <li>
                        <strong>第4页：价格与购买</strong><br>
                        • 显示产品价格<br>
                        • 为价格添加"放大"强调动画<br>
                        • 添加"立即购买"按钮<br>
                        • 为按钮添加"闪烁"强调动画<br>
                        • 添加"淡入淡出"过渡效果
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>动画不要过多，每页最多5个动画</li>
                    <li>动画速度要适中（推荐"中等"）</li>
                    <li>所有幻灯片的过渡效果要统一</li>
                    <li>在放映模式下测试所有动画效果</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>制作一个带有动画和过渡效果的产品发布会PPT</strong>，实战掌握动画的添加和设置。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建PPT并准备内容</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>产品发布会.pptx</code></p>
                <p>在第1页添加：</p>
                <ul>
                    <li>标题："新产品发布会"</li>
                    <li>副标题："2024年新品上市"</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">为标题添加进入动画</div>
            <div class="step-card-desc">
                <p>选中标题文字</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"进入"</strong> → 选择 <strong>"飞入"</strong></p>
                <p>在右侧的"动画窗格"中可以看到已添加的动画</p>
                <p>可以调整动画的速度：右键动画 → <strong>"效果选项"</strong> → 选择 <strong>"中等"</strong></p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">为副标题添加进入动画</div>
            <div class="step-card-desc">
                <p>选中副标题文字</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"进入"</strong> → 选择 <strong>"淡入"</strong></p>
                <p>在"动画窗格"中，可以看到两个动画按顺序排列</p>
                <p>确保副标题的动画在标题之后（如果不是，可以拖拽调整顺序）</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">为第1页添加过渡效果</div>
            <div class="step-card-desc">
                <p>确保第1页被选中</p>
                <p>点击菜单栏 <strong>"切换"</strong> → 选择 <strong>"淡入淡出"</strong></p>
                <p>可以调整过渡效果的速度：在"切换"菜单中选择 <strong>"中等"</strong></p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">新建第2页并添加产品图片</div>
            <div class="step-card-desc">
                <p>新建第2页，添加标题"产品介绍"</p>
                <p>插入一张产品图片（或任何图片代替）</p>
                <p>调整图片的大小和位置</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">为产品图片添加进入动画</div>
            <div class="step-card-desc">
                <p>选中产品图片</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"进入"</strong> → 选择 <strong>"缩放"</strong></p>
                <p>调整动画速度为"中等"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">添加产品特点文字列表</div>
            <div class="step-card-desc">
                <p>在图片下方添加文字框，输入产品特点：</p>
                <ul>
                    <li>• 高性能处理器</li>
                    <li>• 超长续航能力</li>
                    <li>• 精美外观设计</li>
                    <li>• 优惠价格</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">为文字列表添加进入动画</div>
            <div class="step-card-desc">
                <p>选中文字框</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"进入"</strong> → 选择 <strong>"飞入"</strong></p>
                <p>右键动画 → <strong>"效果选项"</strong> → 选择 <strong>"按段落"</strong></p>
                <p>这样每一行文字会逐个飞入</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">为第2页添加过渡效果</div>
            <div class="step-card-desc">
                <p>确保第2页被选中</p>
                <p>点击菜单栏 <strong>"切换"</strong> → 选择 <strong>"推进"</strong></p>
                <p>调整过渡效果的速度为"中等"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">新建第3页并创建参数表格</div>
            <div class="step-card-desc">
                <p>新建第3页，添加标题"产品参数"</p>
                <p>插入一个表格，包含产品的主要参数：</p>
                <ul>
                    <li>处理器、内存、存储、电池等</li>
                    <li>参考lesson11中的表格制作方法</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">11</div>
            <div class="step-card-title">为表格添加进入动画</div>
            <div class="step-card-desc">
                <p>选中表格</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"进入"</strong> → 选择 <strong>"飞入"</strong></p>
                <p>调整动画速度为"中等"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">12</div>
            <div class="step-card-title">为第3页添加过渡效果</div>
            <div class="step-card-desc">
                <p>确保第3页被选中</p>
                <p>点击菜单栏 <strong>"切换"</strong> → 选择 <strong>"擦除"</strong></p>
                <p>调整过渡效果的速度为"中等"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">13</div>
            <div class="step-card-title">新建第4页并添加价格信息</div>
            <div class="step-card-desc">
                <p>新建第4页，添加标题"价格与购买"</p>
                <p>在页面中央添加大号文字显示价格：</p>
                <ul>
                    <li>文字内容："¥2999"</li>
                    <li>字号：72pt或更大</li>
                    <li>颜色：品牌色（如蓝色或红色）</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">14</div>
            <div class="step-card-title">为价格添加强调动画</div>
            <div class="step-card-desc">
                <p>选中价格文字</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"强调"</strong> → 选择 <strong>"放大"</strong></p>
                <p>调整动画速度为"中等"</p>
                <p>这样价格会在幻灯片出现时逐渐放大，吸引观众注意</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">15</div>
            <div class="step-card-title">添加购买按钮</div>
            <div class="step-card-desc">
                <p>在价格下方插入一个圆角矩形形状作为按钮</p>
                <p>在形状中添加文字："立即购买"</p>
                <p>设置按钮的填充颜色为品牌色，文字颜色为白色</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">16</div>
            <div class="step-card-title">为购买按钮添加强调动画</div>
            <div class="step-card-desc">
                <p>选中购买按钮</p>
                <p>点击菜单栏 <strong>"动画"</strong> → <strong>"强调"</strong> → 选择 <strong>"闪烁"</strong></p>
                <p>调整动画速度为"中等"</p>
                <p>右键动画 → <strong>"效果选项"</strong> → 设置 <strong>"重复"</strong> 为 <strong>"直到幻灯片结束"</strong></p>
                <p>这样按钮会持续闪烁，吸引观众点击</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">17</div>
            <div class="step-card-title">为第4页添加过渡效果</div>
            <div class="step-card-desc">
                <p>确保第4页被选中</p>
                <p>点击菜单栏 <strong>"切换"</strong> → 选择 <strong>"淡入淡出"</strong></p>
                <p>调整过渡效果的速度为"中等"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">18</div>
            <div class="step-card-title">应用统一的过渡效果（可选）</div>
            <div class="step-card-desc">
                <p>如果想让所有幻灯片都使用相同的过渡效果：</p>
                <ul>
                    <li>在"切换"菜单中，点击 <strong>"应用到所有幻灯片"</strong></li>
                    <li>这样所有幻灯片都会使用当前选中的过渡效果</li>
                </ul>
                <p>注意：这会覆盖之前为各个幻灯片设置的不同过渡效果</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">19</div>
            <div class="step-card-title">测试所有动画和过渡效果</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">F5</span> 进入放映模式</p>
                <p>逐页检查：</p>
                <ul>
                    <li>第1页：标题和副标题是否按顺序飞入和淡入</li>
                    <li>第2页：图片是否缩放进入，文字是否逐行飞入</li>
                    <li>第3页：表格是否飞入</li>
                    <li>第4页：价格是否放大，按钮是否闪烁</li>
                    <li>所有幻灯片的过渡效果是否流畅</li>
                </ul>
                <p>如果有问题，返回编辑模式调整</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">20</div>
            <div class="step-card-title">保存PPT</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存PPT</p>
                <p>确保所有动画和过渡效果都已保存</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>动画窗格的使用技巧</strong><br>
            • 在"动画窗格"中可以看到所有已添加的动画<br>
            • 可以拖拽动画改变顺序<br>
            • 可以右键动画选择"删除"来删除不需要的动画<br>
            • 可以右键动画选择"效果选项"来调整动画的详细设置<br><br>
            熟练使用动画窗格，能大大提高动画编辑的效率。
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ 动画使用的常见错误</strong><br>
            1. <strong>动画过多</strong>：每页有10多个动画，显得廉价和不专业<br>
            2. <strong>动画速度不当</strong>：太快观众看不清，太慢显得拖沓<br>
            3. <strong>动画类型不搭</strong>：用了太多不同的动画类型，显得杂乱<br>
            4. <strong>过渡效果太炫</strong>：用了立方体、旋转等炫彩效果，显得不专业<br>
            5. <strong>没有测试播放</strong>：在编辑模式看起来没问题，放映时出现问题<br><br>
            建议：保持简洁、速度适中、风格统一、充分测试。
        </div>
        <div class="tip-box tip-success">
            <strong>动画的高级技巧</strong><br>
            • 可以为动画添加声音效果（如掌声、打字声等）<br>
            • 可以设置动画的"开始方式"为"与上一个同时"，让多个动画同时播放<br>
            • 可以使用"路径动画"让对象沿着指定的路径移动<br>
            • 可以为动画添加"延迟"，控制动画开始的时间<br><br>
            这些技巧能让你的PPT更加专业和生动！
        </div>
    `,

    summary: `
        <div class="tip-box tip-success">
            <strong>完成本课后，你已经掌握了：</strong><br>
            ✅ 动画与过渡效果的区别<br>
            ✅ 常见的动画类型（进入、强调、退出、路径）<br>
            ✅ 添加和设置动画<br>
            ✅ 使用动画窗格管理动画<br>
            ✅ 常见的过渡效果类型<br>
            ✅ 添加和设置过渡效果<br>
            ✅ 动画与过渡效果的最佳实践<br><br>
            下一课我们将学习<strong>幻灯片母版与主题</strong>——用母版快速统一整个PPT的风格，让所有幻灯片保持一致！
        </div>
    `
};
