/**
 * PPT学习站 - 第15课：演讲者视图与放映技巧
 * 文件路径: js/lessons/lesson15.js
 * 模块：演示与输出
 * 任务情境：准备季度汇报演讲
 */

window.lessonData = {
    scenario: '电商公司季度末了，老板要求你在会议室进行季度业绩汇报。你已经做好了PPT，但还从来没有正式演讲过。放映PPT时怎么操作？怎么看到自己的备注？怎么用激光笔指出重点？万一需要跳到某一页怎么办？掌握这些放映技巧，能让你在演讲时更加从容自信，不再手忙脚乱。',

    knowledge: `
        <h3>一、PPT的放映模式</h3>
        <p>PPT有两种主要的放映方式：</p>
        <ul>
            <li><strong>从头开始</strong> —— 从第1张幻灯片开始放映（快捷键 <span class="kbd">F5</span>）</li>
            <li><strong>从当前页开始</strong> —— 从当前选中的幻灯片开始放映（快捷键 <span class="kbd">Shift</span> + <span class="kbd">F5</span>）</li>
        </ul>

        <h3>二、什么是演讲者视图？</h3>
        <p><strong>演讲者视图</strong>是一种特殊的放映模式，适用于连接投影仪或外接显示器的场景。</p>
        <ul>
            <li><strong>观众看到的</strong> —— 投影仪上只显示当前幻灯片（全屏）</li>
            <li><strong>你看到的</strong> —— 你的电脑屏幕上显示当前幻灯片 + 备注 + 下一页预览 + 计时器</li>
        </ul>
        <p>这样你可以偷偷看备注、预览下一页，而观众完全不知道！</p>

        <h3>三、演讲者视图包含的信息</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">区域</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">内容</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">作用</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">当前幻灯片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">正在放映的幻灯片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">确认观众看到的内容</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">下一页预览</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">下一张幻灯片的缩略图</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">提前知道下一页内容，做好衔接</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">备注区域</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">你为每页写的演讲备注</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">提醒自己要讲的要点</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">计时器</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">已经演讲了多长时间</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">控制演讲时间，不超时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">工具栏</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">画笔、激光笔、缩略图等工具</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">辅助演讲的各种工具</td>
                </tr>
            </tbody>
        </table>

        <h3>四、开启演讲者视图</h3>
        <ol>
            <li>点击菜单栏 <strong>"幻灯片放映"</strong></li>
            <li>勾选 <strong>"使用演讲者视图"</strong></li>
            <li>然后按 <span class="kbd">F5</span> 开始放映</li>
            <li>如果连接了投影仪，演讲者视图会自动在你的屏幕上显示</li>
        </ol>

        <h3>五、放映时的翻页操作</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">操作</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">方法</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">下一页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">鼠标左键点击 / 按 <span class="kbd">→</span> / 按 <span class="kbd">↓</span> / 按 <span class="kbd">Enter</span> / 按 <span class="kbd">空格</span></td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">上一页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">按 <span class="kbd">←</span> / 按 <span class="kbd">↑</span> / 按 <span class="kbd">Backspace</span></td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">跳到第N页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">输入数字N + <span class="kbd">Enter</span>（如输入 5 + Enter 跳到第5页）</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">跳到第1页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">按 <span class="kbd">Home</span></td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">跳到最后一页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">按 <span class="kbd">End</span></td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">结束放映</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">按 <span class="kbd">Esc</span></td>
                </tr>
            </tbody>
        </table>

        <h3>六、放映时的标注工具</h3>
        <p>放映时可以使用各种标注工具来辅助演讲：</p>
        <ul>
            <li><strong>激光笔</strong> —— 在幻灯片上显示一个红色光点，用于指出重点（快捷键 <span class="kbd">Ctrl</span> + <span class="kbd">L</span>）</li>
            <li><strong>画笔</strong> —— 可以在幻灯片上画线、圈出重点（快捷键 <span class="kbd">Ctrl</span> + <span class="kbd">P</span>）</li>
            <li><strong>荧光笔</strong> —— 用半透明的颜色标记重点内容（快捷键 <span class="kbd">Ctrl</span> + <span class="kbd">I</span>）</li>
            <li><strong>橡皮擦</strong> —— 擦除画笔或荧光笔画的内容（快捷键 <span class="kbd">Ctrl</span> + <span class="kbd">E</span>）</li>
            <li><strong>清除所有标注</strong> —— 一次性清除所有标注（快捷键 <span class="kbd">E</span>）</li>
        </ul>
        <p>使用方法：放映时右键 → 选择"指针选项" → 选择工具</p>

        <h3>七、黑屏和白屏</h3>
        <p>演讲过程中，有时候需要暂时隐藏幻灯片（比如与观众互动或回答问题时）：</p>
        <ul>
            <li><strong>黑屏</strong> —— 按 <span class="kbd">B</span> 键，屏幕变黑（再按一次恢复）</li>
            <li><strong>白屏</strong> —— 按 <span class="kbd">W</span> 键，屏幕变白（再按一次恢复）</li>
        </ul>
        <p>这样观众的注意力会回到你身上，而不是PPT上。</p>

        <h3>八、备注的编写</h3>
        <p>备注是写给演讲者自己看的笔记，观众看不到。</p>
        <ul>
            <li>在编辑模式下，点击幻灯片下方的 <strong>"备注"</strong> 区域</li>
            <li>输入你要讲的要点、数据、提示等</li>
            <li>放映时在演讲者视图中可以看到备注内容</li>
        </ul>
        <p><strong>备注编写的技巧：</strong></p>
        <ul>
            <li>用简短的关键词，不要写长段落</li>
            <li>标注重要的数据和案例</li>
            <li>写好每页的衔接语（"接下来我们看..."）</li>
            <li>标注需要强调或停顿的地方</li>
        </ul>

        <h3>九、排练计时</h3>
        <p>正式演讲前，可以使用排练计时功能来练习：</p>
        <ol>
            <li>点击菜单栏 <strong>"幻灯片放映"</strong> → <strong>"排练计时"</strong></li>
            <li>PPT会进入放映模式，同时在左上角显示计时器</li>
            <li>你可以模拟真实演讲，逐页讲解</li>
            <li>排练结束后，WPS会告诉你总共花了多少时间</li>
            <li>可以选择是否保存每页的用时，用于自动放映</li>
        </ol>

        <h3>十、自动放映</h3>
        <p>如果需要PPT自动播放（如展台展示），可以设置自动放映：</p>
        <ul>
            <li>点击菜单栏 <strong>"幻灯片放映"</strong> → <strong>"设置放映方式"</strong></li>
            <li>选择 <strong>"在展台浏览（全屏幕）"</strong></li>
            <li>设置每页的停留时间</li>
            <li>选择是否循环播放</li>
        </ul>
    `,

    keyPoints: [
        { title: '放映快捷键', content: 'F5从头放映，Shift+F5从当前页放映' },
        { title: '演讲者视图', content: '你看到备注和预览，观众只看到幻灯片' },
        { title: '翻页操作', content: '鼠标点击、方向键、空格键、数字+Enter跳页' },
        { title: '标注工具', content: '激光笔(Ctrl+L)、画笔(Ctrl+P)、荧光笔(Ctrl+I)' },
        { title: '黑屏/白屏', content: 'B键黑屏、W键白屏，再按恢复' },
        { title: '备注编写', content: '简短关键词、标注数据、写好衔接语' },
        { title: '排练计时', content: '模拟演讲并记录时间，控制演讲节奏' }
    ],

    quiz: [
        {
            type: 'single',
            question: '想从第3张幻灯片开始放映，应该怎么操作？',
            options: [
                '按F5',
                '先选中第3张幻灯片，然后按Shift+F5',
                '按Ctrl+F5',
                '在放映模式中按数字3'
            ],
            answer: 1,
            explanation: 'Shift+F5是从当前选中的幻灯片开始放映。所以先选中第3张，再按Shift+F5就能从第3张开始放映。F5是从第1张开始放映。'
        },
        {
            type: 'single',
            question: '放映时想跳到第8页，最快的方法是？',
            options: [
                '一直按右箭头翻到第8页',
                '按Esc退出，手动选中第8页再放映',
                '直接输入数字8然后按Enter',
                '右键选择"跳转到第8页"'
            ],
            answer: 2,
            explanation: '在放映模式下，直接输入页码数字然后按Enter，就能快速跳转到指定页面。这是最快的跳页方法。'
        },
        {
            type: 'single',
            question: '演讲者视图中，观众能看到什么？',
            options: [
                '观众能看到备注和下一页预览',
                '观众只能看到当前幻灯片（全屏）',
                '观众能看到计时器',
                '观众能看到演讲者视图的所有内容'
            ],
            answer: 1,
            explanation: '演讲者视图的核心就是：观众只能看到全屏的当前幻灯片，而演讲者可以看到备注、下一页预览、计时器等辅助信息。'
        },
        {
            type: 'single',
            question: '演讲过程中想让观众关注你而不是PPT，应该怎么做？',
            options: [
                '按Esc退出放映',
                '按B键让屏幕变黑或按W键让屏幕变白',
                '关闭投影仪',
                '切换到桌面'
            ],
            answer: 1,
            explanation: '按B键屏幕变黑，按W键屏幕变白，这样观众的注意力会从PPT转回到你身上。再按一次就能恢复幻灯片显示。'
        },
        {
            type: 'single',
            question: '放映时想在幻灯片上圈出一个重点数据，应该用什么工具？',
            options: [
                '激光笔',
                '画笔',
                '荧光笔',
                '橡皮擦'
            ],
            answer: 1,
            explanation: '画笔（Ctrl+P）可以在幻灯片上画线和圈出内容。激光笔只能显示光点不能画线，荧光笔适合标记文字，橡皮擦用于擦除标注。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：准备季度汇报演讲
            </div>
            <div class="practice-task-body">
                <p>请使用之前制作的任何PPT（或新建一个至少5页的PPT），练习以下放映技巧：</p>
                <ol>
                    <li>
                        <strong>编写备注</strong><br>
                        • 为每一页幻灯片添加演讲备注<br>
                        • 备注内容包括：要讲的要点、重要数据、衔接语<br>
                        • 备注要简洁，用关键词而不是长段落
                    </li>
                    <li>
                        <strong>练习放映操作</strong><br>
                        • 按F5从头开始放映<br>
                        • 练习用不同方式翻页（鼠标、方向键、空格键）<br>
                        • 练习用数字+Enter跳转到指定页面<br>
                        • 练习按Home跳到第1页，按End跳到最后一页<br>
                        • 按Esc结束放映
                    </li>
                    <li>
                        <strong>练习标注工具</strong><br>
                        • 使用激光笔指出重点（Ctrl+L）<br>
                        • 使用画笔圈出重要数据（Ctrl+P）<br>
                        • 使用荧光笔标记关键文字（Ctrl+I）<br>
                        • 使用橡皮擦清除标注（Ctrl+E）<br>
                        • 按E清除所有标注
                    </li>
                    <li>
                        <strong>练习黑屏/白屏</strong><br>
                        • 放映时按B键，观察屏幕变黑<br>
                        • 再按B键，屏幕恢复<br>
                        • 放映时按W键，观察屏幕变白<br>
                        • 再按W键，屏幕恢复
                    </li>
                    <li>
                        <strong>使用排练计时</strong><br>
                        • 点击"幻灯片放映" → "排练计时"<br>
                        • 模拟真实演讲，从头到尾讲一遍<br>
                        • 记录总用时<br>
                        • 调整节奏，确保在规定时间内完成
                    </li>
                </ol>
                <p><strong>目标：</strong></p>
                <ul>
                    <li>能熟练使用至少5个放映快捷键</li>
                    <li>能流畅地完成一次完整的模拟演讲</li>
                    <li>总用时控制在5-10分钟内</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>准备一次季度汇报演讲</strong>，实战掌握放映技巧和演讲者视图的使用。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">准备PPT文件</div>
            <div class="step-card-desc">
                <p>打开之前制作的任何PPT，或者新建一个PPT</p>
                <p>确保PPT至少有5页内容</p>
                <p>保存为 <code>季度汇报.pptx</code></p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">为每页编写备注</div>
            <div class="step-card-desc">
                <p>点击幻灯片下方的 <strong>"备注"</strong> 区域（如果看不到，可以拖拽分隔线向上拉）</p>
                <p>为第1页写备注，例如：</p>
                <ul>
                    <li>"开场白：大家好，今天汇报本季度的业绩情况"</li>
                    <li>"重点：总销售额增长了20%"</li>
                    <li>"衔接：接下来看各部门的具体数据"</li>
                </ul>
                <p>为每一页都写好备注</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">开启演讲者视图</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"幻灯片放映"</strong></p>
                <p>勾选 <strong>"使用演讲者视图"</strong></p>
                <p>注意：如果没有连接投影仪，可能需要右键放映界面底部工具栏，选择"显示演讲者视图"</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">按F5开始放映</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">F5</span> 从第1页开始放映</p>
                <p>如果开启了演讲者视图，你的屏幕上会显示：</p>
                <ul>
                    <li>左侧：当前幻灯片</li>
                    <li>右上：下一页预览</li>
                    <li>右下：备注内容</li>
                    <li>底部：工具栏和计时器</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">练习翻页操作</div>
            <div class="step-card-desc">
                <p>试试不同的翻页方式：</p>
                <ul>
                    <li>点击鼠标左键 → 下一页</li>
                    <li>按 <span class="kbd">→</span> 键 → 下一页</li>
                    <li>按 <span class="kbd">空格</span> 键 → 下一页</li>
                    <li>按 <span class="kbd">←</span> 键 → 上一页</li>
                    <li>输入 <span class="kbd">3</span> + <span class="kbd">Enter</span> → 跳到第3页</li>
                    <li>按 <span class="kbd">Home</span> → 回到第1页</li>
                    <li>按 <span class="kbd">End</span> → 跳到最后一页</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">练习激光笔</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">L</span> 启用激光笔</p>
                <p>移动鼠标，可以看到一个红色光点跟随鼠标移动</p>
                <p>用激光笔指向幻灯片上的重点内容</p>
                <p>按 <span class="kbd">Esc</span> 或右键取消激光笔，回到正常鼠标</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">练习画笔</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">P</span> 启用画笔</p>
                <p>在幻灯片上画线或圈出重要内容</p>
                <p>试着圈出一个重要的数据或标题</p>
                <p>按 <span class="kbd">E</span> 清除所有标注</p>
                <p>按 <span class="kbd">Esc</span> 回到正常鼠标</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">练习荧光笔</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">I</span> 启用荧光笔</p>
                <p>在幻灯片上的文字下方画线，标记重点</p>
                <p>荧光笔是半透明的，不会遮挡文字</p>
                <p>按 <span class="kbd">E</span> 清除所有标注</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">练习黑屏和白屏</div>
            <div class="step-card-desc">
                <p>放映时按 <span class="kbd">B</span> 键</p>
                <p>观察屏幕变黑 → 这时可以与观众互动或回答问题</p>
                <p>再按 <span class="kbd">B</span> 键 → 屏幕恢复</p>
                <p>放映时按 <span class="kbd">W</span> 键</p>
                <p>观察屏幕变白 → 再按 <span class="kbd">W</span> 键恢复</p>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">按Esc结束放映</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Esc</span> 结束放映，返回编辑模式</p>
                <p>如果放映时使用了画笔或荧光笔，WPS会询问是否保存标注</p>
                <ul>
                    <li>选择"保留" → 标注会保留在幻灯片上</li>
                    <li>选择"放弃" → 标注被清除</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">11</div>
            <div class="step-card-title">使用排练计时</div>
            <div class="step-card-desc">
                <p>点击菜单栏 <strong>"幻灯片放映"</strong> → <strong>"排练计时"</strong></p>
                <p>PPT进入放映模式，左上角显示计时器</p>
                <p>模拟真实演讲：</p>
                <ul>
                    <li>看着备注，讲解每一页的内容</li>
                    <li>每讲完一页，点击鼠标翻到下一页</li>
                    <li>讲完所有页面后，WPS会显示总用时</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">12</div>
            <div class="step-card-title">保存并记录练习结果</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存PPT</p>
                <p>记录你的排练时间，看看是否在合理范围内</p>
                <p>如果时间太长，精简内容；如果太短，增加讲解</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>放映快捷键速查表</strong><br>
            <table style="width:100%; border-collapse:collapse; margin-top: 8px;">
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">F5</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">从头开始放映</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">Shift+F5</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">从当前页开始放映</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">Esc</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">结束放映</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">B</span> / <span class="kbd">W</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">黑屏 / 白屏</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl+L</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">激光笔</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl+P</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">画笔</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">Ctrl+I</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">荧光笔</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">E</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">清除所有标注</td>
                </tr>
                <tr>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);"><span class="kbd">数字+Enter</span></td>
                    <td style="padding: 4px 8px; border: 1px solid var(--border-color);">跳到指定页</td>
                </tr>
            </table>
            <br>打印出来贴在电脑旁边，每次演讲前看一遍！
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ 演讲时的常见失误</strong><br>
            1. <strong>不知道怎么翻页</strong>：提前练习翻页操作，至少掌握两种方法<br>
            2. <strong>误按了键盘</strong>：放映时不要乱按键盘，特别是Esc会直接退出<br>
            3. <strong>忘了写备注</strong>：演讲前一定要写好备注，否则上台后容易忘词<br>
            4. <strong>没有排练</strong>：至少排练2-3次，熟悉内容和节奏<br>
            5. <strong>时间失控</strong>：用排练计时功能控制好时间<br>
            6. <strong>背对观众看PPT</strong>：使用演讲者视图，面对观众而不是转身看屏幕<br><br>
            建议：正式演讲前至少完整排练3次！
        </div>
        <div class="tip-box tip-success">
            <strong>演讲高手的技巧</strong><br>
            • <strong>6×6原则</strong>：每页不超过6行文字，每行不超过6个词<br>
            • <strong>10-20-30原则</strong>：最多10页，最多20分钟，字号不小于30pt<br>
            • <strong>先说结论</strong>：每页先说结论，再展开细节<br>
            • <strong>讲故事</strong>：用故事来包装数据，更容易被记住<br>
            • <strong>眼神交流</strong>：看观众而不是看PPT<br>
            • <strong>适当停顿</strong>：重要观点后停顿2-3秒，让观众消化<br><br>
            PPT只是工具，真正打动人的是你的演讲内容和表达方式！
        </div>
    `,

    summary: `
        <div class="tip-box tip-success">
            <strong>完成本课后，你已经掌握了：</strong><br>
            ✅ PPT的放映模式（F5和Shift+F5）<br>
            ✅ 演讲者视图的开启和使用<br>
            ✅ 放映时的翻页操作和跳页技巧<br>
            ✅ 标注工具（激光笔、画笔、荧光笔）<br>
            ✅ 黑屏和白屏操作<br>
            ✅ 备注的编写技巧<br>
            ✅ 排练计时的使用<br>
            ✅ 自动放映的设置<br><br>
            下一课我们将学习<strong>导出与分享</strong>——把你做好的PPT导出为PDF、图片、视频等格式，分享给他人！这是最后一课，学完之后你就是PPT高手了！
        </div>
    `
};
