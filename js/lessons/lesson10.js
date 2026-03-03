/**
 * PPT学习站 - 第10课：插入音频与视频
 * 文件路径: js/lessons/lesson10.js
 * 模块：多媒体与表格
 * 任务情境：班级活动策划配乐
 */

window.lessonData = {
    scenario: '班级要举办一场"电商创意大赛"的颁奖典礼，需要制作一个PPT来展示获奖作品。光有图片和文字太单调了，想加上背景音乐烘托气氛，还想在介绍获奖者时播放他们的采访视频。这就需要用到WPS中的音频和视频插入功能。',

    knowledge: `
        <h3>一、为什么要在PPT中加入音频和视频？</h3>
        <ul>
            <li><strong>增强表现力</strong> —— 音乐和视频能营造氛围，让观众更投入</li>
            <li><strong>提高专业度</strong> —— 配乐的PPT看起来更专业、更高级</li>
            <li><strong>传递信息</strong> —— 有些信息用视频展示比文字更直观</li>
            <li><strong>吸引注意力</strong> —— 多媒体内容能有效吸引观众的注意力</li>
        </ul>

        <h3>二、支持的音频和视频格式</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">常见格式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">文件大小建议</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">音频</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">MP3、WAV、M4A、WMA</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">不超过50MB</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">视频</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">MP4、AVI、WMV、MOV</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">不超过100MB</td>
                </tr>
            </tbody>
        </table>

        <h3>三、插入音频的步骤</h3>
        <ol>
            <li>点击菜单栏 <strong>"插入"</strong> → <strong>"音频"</strong></li>
            <li>选择本地音频文件（MP3、WAV等）</li>
            <li>点击"插入"，音频图标会出现在幻灯片上</li>
            <li>可以调整音频图标的大小和位置</li>
        </ol>

        <h3>四、音频的播放设置</h3>
        <p>选中音频后，会出现<strong>"音频工具"</strong>选项卡：</p>
        <ul>
            <li><strong>自动播放</strong> —— 幻灯片出现时自动播放</li>
            <li><strong>隐藏播放器</strong> —— 放映时隐藏音频图标，只听声音</li>
            <li><strong>循环播放</strong> —— 音乐播完后自动重新开始</li>
            <li><strong>音量</strong> —— 调整音量大小</li>
        </ul>

        <h3>五、插入视频的步骤</h3>
        <ol>
            <li>点击菜单栏 <strong>"插入"</strong> → <strong>"视频"</strong></li>
            <li>选择本地视频文件（MP4、AVI等）</li>
            <li>点击"插入"，视频会显示在幻灯片上</li>
            <li>可以调整视频的大小和位置</li>
        </ol>

        <h3>六、视频的播放设置</h3>
        <p>选中视频后，会出现<strong>"视频工具"</strong>选项卡：</p>
        <ul>
            <li><strong>自动播放</strong> —— 幻灯片出现时自动播放</li>
            <li><strong>全屏播放</strong> —— 点击视频时全屏播放</li>
            <li><strong>循环播放</strong> —— 视频播完后自动重新开始</li>
            <li><strong>音量</strong> —— 调整音量大小</li>
            <li><strong>海报帧</strong> —— 设置视频未播放时显示的封面</li>
        </ul>

        <h3>七、多媒体文件的优化建议</h3>
        <ul>
            <li><strong>压缩文件大小</strong> —— 使用在线工具或专业软件压缩音视频，保证PPT文件不会太大</li>
            <li><strong>选择合适的格式</strong> —— MP4视频和MP3音频兼容性最好</li>
            <li><strong>测试播放</strong> —— 在不同电脑上测试，确保能正常播放</li>
            <li><strong>准备备用方案</strong> —— 如果多媒体无法播放，准备截图或文字说明</li>
        </ul>
    `,

    keyPoints: [
        { title: '为什么加入音视频', content: '增强表现力、提高专业度、传递信息、吸引注意力' },
        { title: '支持的格式', content: '音频：MP3、WAV；视频：MP4、AVI、WMV' },
        { title: '插入音频', content: '插入菜单 → 音频 → 选择文件' },
        { title: '音频设置', content: '自动播放、隐藏播放器、循环播放、音量调整' },
        { title: '插入视频', content: '插入菜单 → 视频 → 选择文件' },
        { title: '视频设置', content: '自动播放、全屏播放、循环播放、海报帧' }
    ],

    quiz: [
        {
            type: 'single',
            question: '下列哪个视频格式在WPS中兼容性最好？',
            options: [
                'MOV格式',
                'MP4格式',
                'FLV格式',
                'MKV格式'
            ],
            answer: 1,
            explanation: 'MP4是目前最通用的视频格式，在WPS和各种播放器中兼容性最好。其他格式可能在某些电脑上无法播放。'
        },
        {
            type: 'single',
            question: '想让背景音乐在幻灯片出现时自动播放，应该怎么设置？',
            options: [
                '在音频工具中勾选"自动播放"',
                '在音频工具中勾选"循环播放"',
                '在音频工具中勾选"隐藏播放器"',
                '无法自动播放，只能手动点击'
            ],
            answer: 0,
            explanation: '在音频工具选项卡中，勾选"自动播放"就能让音乐在幻灯片出现时自动开始播放。'
        },
        {
            type: 'single',
            question: '插入的视频文件太大，会导致什么问题？',
            options: [
                '视频无法播放',
                'PPT文件变得很大，难以分享和传输',
                '视频画质下降',
                '没有问题，可以正常使用'
            ],
            answer: 1,
            explanation: '大的视频文件会让整个PPT文件变得很大，不利于分享和传输。建议提前压缩视频文件。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span></span> 实战任务：制作班级活动策划PPT
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少3页的PPT，展示班级"电商创意大赛"颁奖典礼的策划方案：</p>
                <ol>
                    <li>
                        <strong>第1页：标题页 + 背景音乐</strong><br>
                        • 标题："电商创意大赛 颁奖典礼"<br>
                        • 插入一首背景音乐（建议选择欢快、庄重的音乐）<br>
                        • 设置为自动播放、循环播放、隐藏播放器
                    </li>
                    <li>
                        <strong>第2页：活动流程 + 视频介绍</strong><br>
                        • 用SmartArt展示活动流程（开场→颁奖→合影→闭幕）<br>
                        • 插入一段获奖者的采访视频（如果没有真实视频，可以用任何MP4文件代替）<br>
                        • 设置视频为点击播放（不自动播放）
                    </li>
                    <li>
                        <strong>第3页：获奖作品展示</strong><br>
                        • 展示3个获奖作品的图片<br>
                        • 每个作品下方可以添加一段简短的音频介绍（可选）
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>音频文件大小不超过50MB</li>
                    <li>视频文件大小不超过100MB</li>
                    <li>所有多媒体文件都能正常播放</li>
                    <li>在放映模式下测试音视频播放效果</li>
                </ul>
            </div>
        </div>
    `,

    steps: `
        <p>现在我们来<strong>制作一个带有背景音乐和视频的PPT</strong>，实战掌握多媒体的插入和设置。</p>
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">准备多媒体文件</div>
            <div class="step-card-desc">
                <p>在制作PPT之前，先准备好需要的音频和视频文件：</p>
                <ul>
                    <li>背景音乐：一首MP3格式的音乐（建议时长2-3分钟）</li>
                    <li>视频文件：一段MP4格式的视频（建议时长30秒-1分钟）</li>
                    <li>将这些文件保存在一个容易找到的文件夹中</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">新建PPT并插入背景音乐</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>班级活动策划.pptx</code></p>
                <p>在第1页（标题页）插入背景音乐：</p>
                <ul>
                    <li>点击菜单栏 <strong>"插入"</strong> → <strong>"音频"</strong></li>
                    <li>选择你准备好的MP3音乐文件</li>
                    <li>点击"插入"，音频图标会出现在幻灯片上</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">设置音频的播放方式</div>
            <div class="step-card-desc">
                <p>选中音频图标，会出现<strong>"音频工具"</strong>选项卡：</p>
                <ul>
                    <li>勾选 <strong>"自动播放"</strong> —— 幻灯片出现时自动播放</li>
                    <li>勾选 <strong>"隐藏播放器"</strong> —— 放映时隐藏音频图标</li>
                    <li>勾选 <strong>"循环播放"</strong> —— 音乐播完后自动重新开始</li>
                    <li>调整 <strong>"音量"</strong> 到合适的大小</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">新建第2页并插入视频</div>
            <div class="step-card-desc">
                <p>新建第2页，添加标题"获奖者采访"</p>
                <p>插入视频：</p>
                <ul>
                    <li>点击菜单栏 <strong>"插入"</strong> → <strong>"视频"</strong></li>
                    <li>选择你准备好的MP4视频文件</li>
                    <li>点击"插入"，视频会显示在幻灯片上</li>
                    <li>调整视频的大小和位置，使其占据页面的中心区域</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">设置视频的播放方式</div>
            <div class="step-card-desc">
                <p>选中视频，会出现<strong>"视频工具"</strong>选项卡：</p>
                <ul>
                    <li><strong>不勾选"自动播放"</strong> —— 让观众手动点击播放</li>
                    <li>勾选 <strong>"全屏播放"</strong> —— 点击视频时全屏播放</li>
                    <li>调整 <strong>"音量"</strong> 到合适的大小</li>
                    <li>可以设置 <strong>"海报帧"</strong> 为视频的第一帧</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">测试播放效果</div>
            <div class="step-card-desc">
                <p>完成编辑后，一定要测试多媒体的播放效果：</p>
                <ul>
                    <li>按 <span class="kbd">F5</span> 进入放映模式</li>
                    <li>检查背景音乐是否自动播放</li>
                    <li>检查视频是否能正常播放</li>
                    <li>检查音量是否合适</li>
                    <li>如果有问题，返回编辑模式调整设置</li>
                </ul>
            </div>
        </div>
        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">保存并打包</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存PPT</p>
                <p>如果要分享给别人，建议：</p>
                <ul>
                    <li>将PPT和所有多媒体文件放在同一个文件夹中</li>
                    <li>或者使用"文件"→"打包"功能，将所有文件打包在一起</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>多媒体文件的来源</strong><br>
            • 免费音乐网站：网易云音乐、QQ音乐（下载无版权音乐）<br>
            • 免费视频素材：Pexels、Pixabay、Unsplash<br>
            • 自己录制：用手机或电脑录制视频和音频<br><br>
            注意：使用他人的音乐和视频时，要确保有使用权或获得授权。
        </div>
        <div class="tip-box tip-warning">
            <strong>⚠️ 多媒体使用的常见问题</strong><br>
            1. <strong>文件太大</strong>：PPT文件变得很大，难以分享<br>
            2. <strong>格式不兼容</strong>：在某些电脑上无法播放<br>
            3. <strong>音量太大或太小</strong>：影响观看体验<br>
            4. <strong>自动播放设置不当</strong>：导致音乐或视频在不该播放的时候播放<br><br>
            建议：提前压缩文件、测试兼容性、调整音量、仔细设置播放方式。
        </div>
        <div class="tip-box tip-success">
            <strong>多媒体的高级技巧</strong><br>
            • 可以为视频添加"海报帧"（视频未播放时显示的封面）<br>
            • 可以设置音视频的"淡入淡出"效果<br>
            • 可以在视频上添加播放按钮或其他装饰<br>
            • 可以同时播放多个音频或视频<br><br>
            这些技巧能让你的PPT更加专业和生动！
        </div>
    `,

    summary: `
        <div class="tip-box tip-success">
            <strong>完成本课后，你已经掌握了：</strong><br>
            ✅ 支持的音频和视频格式<br>
            ✅ 插入音频和视频的方法<br>
            ✅ 音频的播放设置（自动播放、隐藏播放器、循环播放）<br>
            ✅ 视频的播放设置（全屏播放、海报帧）<br>
            ✅ 多媒体文件的优化和打包<br><br>
            下一课我们将学习<strong>表格制作与美化</strong>——用表格来展示销售数据，让数据一目了然！
        </div>
    `
};
