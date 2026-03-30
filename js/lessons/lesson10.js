/**
 * PPT学习站 - 第10课：插入音频与视频
 * 文件路径: js/lessons/lesson10.js
 * 模块：多媒体与表格
 * 任务情境：班级活动策划配乐
 */

window.lessonData = {

    scenario: '班级要举办一次"电商创业分享会"主题班会，班主任让你负责制作活动PPT。为了让现场气氛更好，你想在PPT中加入背景音乐，并且在介绍优秀电商案例时插入一段短视频。今天我们来学习如何让PPT不仅能"看"，还能"听"和"动"！',

    knowledge: `
        <h3>一、为什么要在PPT中使用多媒体？</h3>
        <p>多媒体元素（音频和视频）可以让PPT从"静态展示"变成"沉浸式体验"：</p>
        <ul>
            <li><strong>背景音乐</strong> —— 营造氛围，让汇报/活动更有感染力</li>
            <li><strong>音效</strong> —— 在关键节点添加提示音，吸引注意力</li>
            <li><strong>视频</strong> —— 产品演示、案例展示、教程回放</li>
            <li><strong>录音</strong> —— 旁白解说，让PPT可以"自动讲解"</li>
        </ul>

        <div class="tip-box tip-warning">
            <strong>⚠️ 多媒体不是越多越好！</strong><br>
            • <strong>正式汇报</strong>：少用或不用音乐，除非是开场暖场<br>
            • <strong>活动策划</strong>：可以适当使用背景音乐和视频<br>
            • <strong>教学课件</strong>：视频和录音很有用<br>
            • <strong>产品展示</strong>：产品视频是加分项<br><br>
            原则：多媒体是<strong>辅助手段</strong>，不能喧宾夺主。
        </div>

        <h3>二、插入音频</h3>

        <h4>1. 从本地文件插入音频</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"音频"</strong> 按钮</li>
            <li>选择 <strong>"本地音频"</strong>（或"PC上的音频"）</li>
            <li>浏览到音频文件 → 点击插入</li>
        </ol>
        <p>支持的音频格式：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">格式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">说明</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">推荐度</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>MP3</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">最通用的音频格式，体积小</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐⭐ 首选</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">WAV</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">无损音频，体积很大</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐ 音质要求高时</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">WMA</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Windows音频格式</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐ 可用</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">M4A/AAC</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">苹果设备常用</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐ 可用</td>
                </tr>
            </tbody>
        </table>

        <h4>2. 录制音频</h4>
        <p>WPS演示还支持直接录音：</p>
        <ol>
            <li>插入 → 音频 → <strong>"录制音频"</strong></li>
            <li>给录音命名（如"旁白-第1页"）</li>
            <li>点击红色录制按钮 🔴 开始录音</li>
            <li>录完后点击停止 ⬛</li>
            <li>点击确定，录音就插入到当前页面了</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 录音的实用场景</strong><br>
            • <strong>自动讲解PPT</strong>：给每一页录一段旁白，PPT就变成了"有声教程"<br>
            • <strong>给老师交作业</strong>：录制你对PPT内容的解说，老师可以听到你的理解<br>
            • <strong>远程汇报</strong>：无法现场演讲时，录好旁白让PPT"自己讲"
        </div>

        <h4>3. 音频的播放设置</h4>
        <p>插入音频后，页面上会出现一个<strong>喇叭图标 🔊</strong>。选中它可以设置播放方式：</p>

        <p>在<strong>"音频工具/播放"</strong>选项卡中，有以下关键设置：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">设置项</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">选项</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>开始方式</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">自动 / 单击时 / 跨幻灯片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">"自动"翻到该页自动播放；"单击时"需要点击才播放</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>跨幻灯片播放</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">勾选/不勾选</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">勾选后音乐可以在翻页后继续播放（背景音乐必选！）</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>循环播放</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">勾选/不勾选</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">音乐播完后自动重头播放</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>放映时隐藏图标</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">勾选/不勾选</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">放映时不显示喇叭图标（背景音乐建议勾选）</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>音量</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">低/中/高/静音</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">背景音乐建议"低"，避免盖过演讲声</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>淡入/淡出</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">设置秒数</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">让音乐渐入渐出，更自然</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>剪裁音频</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">设置起止时间</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">只使用音频的某一段</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 设置背景音乐的标准流程</strong><br>
            如果你要给整个PPT添加背景音乐，按以下步骤设置：<br>
            1. 在<strong>第一页</strong>插入音频<br>
            2. 开始方式：<strong>自动</strong><br>
            3. 勾选 <strong>"跨幻灯片播放"</strong><br>
            4. 勾选 <strong>"循环播放"</strong>（如果需要）<br>
            5. 勾选 <strong>"放映时隐藏图标"</strong><br>
            6. 音量设为 <strong>"低"</strong><br>
            7. 设置<strong>淡入</strong> 2-3秒<br><br>
            这样音乐会在放映时自动播放，翻页不会中断，而且不会太吵。
        </div>

        <h3>三、插入视频</h3>

        <h4>1. 从本地文件插入视频</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"视频"</strong> 按钮</li>
            <li>选择 <strong>"本地视频"</strong>（或"PC上的视频"）</li>
            <li>浏览到视频文件 → 插入</li>
        </ol>

        <p>支持的视频格式：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">格式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">说明</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">推荐度</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>MP4</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">最通用的视频格式（H.264编码）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐⭐⭐ 首选</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">WMV</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Windows视频格式</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐⭐ 兼容性好</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">AVI</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">老格式，体积大</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐ 不推荐</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">MOV</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">苹果设备常用</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐⭐ 兼容性一般</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-danger">
            <strong>🚨 视频格式不对怎么办？</strong><br>
            如果你的视频是 MKV、FLV 等格式，WPS可能无法播放。解决方案：<br>
            • 使用免费转换工具（如 HandBrake、格式工厂）转换为 <strong>MP4</strong> 格式<br>
            • 在线转换网站（如 convertio.co）也可以<br>
            • 建议视频分辨率不超过<strong>1080p</strong>，否则PPT会很大
        </div>

        <h4>2. 插入在线视频</h4>
        <p>WPS演示支持通过链接插入在线视频（需要网络连接）：</p>
        <ol>
            <li>插入 → 视频 → <strong>"在线视频"</strong></li>
            <li>粘贴视频链接（如优酷、B站等的视频地址）</li>
            <li>放映时需要联网才能播放</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ 在线视频的风险</strong><br>
            • 放映时<strong>没有网络就无法播放</strong><br>
            • 视频被原作者删除就会失效<br>
            • 公司内网可能无法访问视频网站<br><br>
            <strong>建议：</strong>重要场合一定用<strong>本地视频</strong>，在线视频只作为备用。
        </div>

        <h4>3. 视频的播放设置</h4>
        <p>选中视频后，在<strong>"视频工具/播放"</strong>选项卡中设置：</p>
        <ul>
            <li><strong>开始方式</strong>：自动播放 / 单击时播放</li>
            <li><strong>全屏播放</strong>：勾选后视频会全屏显示（适合展示完整视频）</li>
            <li><strong>放映时隐藏</strong>：不播放时隐藏视频画面</li>
            <li><strong>循环播放</strong>：视频播完重新开始</li>
            <li><strong>播完返回开头</strong>：播完后画面回到第一帧</li>
            <li><strong>剪裁视频</strong>：只使用视频的某一段</li>
        </ul>

        <h4>4. 调整视频外观</h4>
        <ul>
            <li><strong>调整大小</strong>：和图片一样，按住 <span class="kbd">Shift</span> 拖拽四角等比例缩放</li>
            <li><strong>设置封面帧</strong>：视频未播放时显示的画面。可以选择视频中的某一帧，或插入自定义图片作为封面</li>
            <li><strong>视频样式</strong>：可以给视频添加边框、阴影、圆角等效果</li>
            <li><strong>视频形状</strong>：可以将视频裁剪为圆形、圆角矩形等形状</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 视频封面帧很重要！</strong><br>
            视频未播放时，默认显示第一帧画面。如果第一帧是黑屏或不好看的画面，会影响PPT的整体效果。<br><br>
            设置方法：选中视频 → 播放选项卡 → <strong>"封面帧"</strong> → 可以选择"当前帧"（先拖到好看的画面再选）或"文件中的图像"（用自定义图片）。
        </div>

        <h3>四、音频和视频的管理技巧</h3>

        <h4>1. 嵌入 vs 链接</h4>
        <p>多媒体文件插入PPT有两种方式：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">方式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">优点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">缺点</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>嵌入</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">文件包含在PPT内部</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">发给别人一定能播放</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">PPT文件会变得很大</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>链接</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">PPT只保存文件路径</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">PPT文件体积小</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">移动PPT后可能找不到文件</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-warning">
            <strong>⚠️ 最常见的翻车：视频播不出来！</strong><br>
            演讲现场最尴尬的事之一就是：视频放不出来。常见原因：<br>
            1. <strong>视频是链接方式</strong>，但文件路径变了（比如U盘盘符不同）<br>
            2. <strong>格式不支持</strong>，电脑上缺少解码器<br>
            3. <strong>文件太大</strong>，电脑卡顿无法播放<br><br>
            <strong>防翻车指南：</strong><br>
            ✅ 使用<strong>MP4格式</strong>（H.264编码），兼容性最好<br>
            ✅ 选择<strong>嵌入方式</strong>而非链接<br>
            ✅ 演讲前在<strong>目标电脑上测试播放</strong><br>
            ✅ 准备<strong>备用方案</strong>（比如把视频也拷到U盘里单独播放）
        </div>

        <h4>2. 控制PPT文件大小</h4>
        <p>插入视频后PPT可能变得非常大（几百MB甚至1GB），影响传输和打开速度：</p>
        <ul>
            <li><strong>压缩视频</strong>：用工具提前将视频压缩到合适大小（720p通常就够了）</li>
            <li><strong>剪裁视频</strong>：在PPT中只保留需要的片段，去掉多余部分</li>
            <li><strong>降低分辨率</strong>：WPS可能提供"压缩媒体"功能</li>
            <li><strong>使用链接</strong>：如果确定在固定电脑上播放，可以用链接方式减小PPT体积</li>
        </ul>

        <h3>五、屏幕录制（特色功能）</h3>
        <p>WPS演示还有一个很实用的功能——<strong>屏幕录制</strong>：</p>
        <ol>
            <li>插入 → <strong>"屏幕录制"</strong></li>
            <li>选择录制区域</li>
            <li>点击录制按钮</li>
            <li>操作你想录制的内容（比如演示软件操作）</li>
            <li>按快捷键停止录制</li>
            <li>录制的视频会自动插入到当前幻灯片</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 屏幕录制的电商用途</strong><br>
            • <strong>录制后台操作</strong>：演示如何在平台上架产品、修改价格<br>
            • <strong>录制数据分析</strong>：展示如何在后台查看销售数据<br>
            • <strong>培训教程</strong>：录制操作流程，新员工可以反复观看<br>
            • <strong>Bug反馈</strong>：遇到系统问题时录屏给技术人员看
        </div>
    `,

    steps: `
        <p>现在我们来为<strong>"电商创业分享会"</strong>PPT添加多媒体内容。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">准备多媒体素材</div>
            <div class="step-card-desc">
                <p>在开始之前，准备以下素材：</p>
                <ul>
                    <li><strong>一首背景音乐</strong>：MP3格式，轻快舒缓的纯音乐（可以从免费音乐网站下载，或使用手机自带的音乐）</li>
                    <li><strong>一段短视频</strong>：MP4格式，30秒-2分钟（可以用手机拍一段，或从网上下载一段电商相关的视频）</li>
                </ul>
                <p>如果暂时没有素材，也可以先学习操作步骤，以后再添加真正的文件。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">新建PPT并制作基本页面</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>电商分享会.pptx</code></p>
                <p>快速制作3页内容：</p>
                <ul>
                    <li>第1页（封面）：<strong>"电商创业分享会"</strong> + 日期</li>
                    <li>第2页：<strong>"优秀案例展示"</strong>（这页放视频）</li>
                    <li>第3页：<strong>"互动环节"</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">在第1页插入背景音乐</div>
            <div class="step-card-desc">
                <ol>
                    <li>切换到第1页（封面页）</li>
                    <li>点击 <strong>插入 → 音频 → 本地音频</strong></li>
                    <li>选择你准备好的MP3文件 → 插入</li>
                    <li>页面上出现了一个<strong>喇叭图标 🔊</strong></li>
                    <li>把喇叭图标拖到页面角落（放映时可以隐藏）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">设置音频为背景音乐模式</div>
            <div class="step-card-desc">
                <p>选中喇叭图标，在<strong>"音频工具/播放"</strong>选项卡中设置：</p>
                <ul>
                    <li>开始方式：选择 <strong>"自动"</strong></li>
                    <li>勾选 ✅ <strong>"跨幻灯片播放"</strong></li>
                    <li>勾选 ✅ <strong>"循环播放直到停止"</strong></li>
                    <li>勾选 ✅ <strong>"放映时隐藏"</strong></li>
                    <li>音量：设为 <strong>"低"</strong></li>
                    <li>淡入：设为 <strong>2秒</strong></li>
                    <li>淡出：设为 <strong>2秒</strong></li>
                </ul>
                <p>这样音乐会在放映开始时自动渐入播放，翻页不中断，声音也不会太大。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">在第2页插入视频</div>
            <div class="step-card-desc">
                <ol>
                    <li>切换到第2页（案例展示页）</li>
                    <li>点击 <strong>插入 → 视频 → 本地视频</strong></li>
                    <li>选择你准备好的MP4文件 → 插入</li>
                    <li>视频出现在页面上</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">调整视频大小和位置</div>
            <div class="step-card-desc">
                <ul>
                    <li>按住 <span class="kbd">Shift</span> 拖拽视频四角，调整到合适大小（页面宽度的60-80%）</li>
                    <li>把视频居中放置在页面中央偏下的位置</li>
                    <li>在视频上方留出空间放标题文字</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">设置视频播放方式</div>
            <div class="step-card-desc">
                <p>选中视频，在<strong>"视频工具/播放"</strong>选项卡中设置：</p>
                <ul>
                    <li>开始方式：<strong>"单击时"</strong>（翻到这页后点击视频才开始播放）</li>
                    <li>如果需要全屏播放：勾选 <strong>"全屏播放"</strong></li>
                    <li>勾选 <strong>"播完返回开头"</strong>（播完后显示第一帧而非黑屏）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">设置视频封面帧</div>
            <div class="step-card-desc">
                <ol>
                    <li>选中视频 → 在视频预览中<strong>拖动播放进度条</strong>到一个好看的画面</li>
                    <li>在"播放"选项卡中点击 <strong>"封面帧"</strong> → <strong>"当前帧"</strong></li>
                    <li>现在视频未播放时显示的就是你选择的这个画面了</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">给视频添加样式</div>
            <div class="step-card-desc">
                <p>让视频在页面上更好看：</p>
                <ul>
                    <li>选中视频 → 在"视频格式"选项卡中浏览<strong>视频样式</strong></li>
                    <li>选择一个带<strong>圆角 + 阴影</strong>的样式</li>
                    <li>或者手动设置：右键 → 设置对象格式 → 效果 → 添加阴影</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">测试放映效果</div>
            <div class="step-card-desc">
                <p>最关键的步骤——测试！</p>
                <ul>
                    <li>按 <span class="kbd">F5</span> 从第一页开始放映</li>
                    <li>检查：背景音乐是否自动播放？音量合适吗？</li>
                    <li>翻到第2页，检查：音乐是否继续播放？</li>
                    <li>点击视频，检查：视频能正常播放吗？</li>
                    <li>继续翻到第3页，检查：音乐是否还在继续？</li>
                    <li>按 <span class="kbd">Esc</span> 退出放映</li>
                    <li>如有问题，回去调整设置后再次测试</li>
                </ul>
                <p>最后 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存。</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-danger">
            <strong>🚨 多媒体PPT的"保命"清单</strong><br>
            在重要演讲/活动前，请确认以下事项：<br>
            ☐ 在<strong>实际放映的电脑</strong>上测试过音频和视频能正常播放<br>
            ☐ 视频使用的是<strong>MP4格式</strong>（H.264编码）<br>
            ☐ 多媒体文件是<strong>嵌入</strong>在PPT中的，不是链接<br>
            ☐ 现场有<strong>音响/喇叭</strong>可以输出声音<br>
            ☐ 准备了<strong>备用方案</strong>（视频单独存一份，用播放器打开也行）<br>
            ☐ PPT文件大小<strong>没有超过2GB</strong>（太大会导致打开卡顿）
        </div>

        <div class="tip-box tip-info">
            <strong>💡 免费音乐素材哪里找？</strong><br>
            注意：不能直接用有版权的歌曲（QQ音乐/网易云的歌曲都有版权）。免费音乐推荐：<br>
            • <strong>YouTube Audio Library</strong>：谷歌提供的免费音乐库<br>
            • <strong>FreePD.com</strong>：完全免费的公共领域音乐<br>
            • <strong>Pixabay Music</strong>：免费可商用的背景音乐<br>
            • <strong>WPS自带素材</strong>：WPS稻壳商城中有一些免费音效<br><br>
            学习用途一般不涉及版权问题，但工作中要注意。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 音频和视频的剪裁功能</strong><br>
            WPS内置的剪裁功能是<strong>非破坏性的</strong>——它不会真正删除原始文件中多余的部分，只是在播放时跳过。这意味着：<br>
            • 优点：随时可以重新调整剪裁范围<br>
            • 缺点：PPT文件大小不会因为剪裁而变小<br><br>
            如果想真正减小文件大小，建议在插入前就用<strong>专门的剪辑软件</strong>（如剪映、格式工厂）把音视频处理好。
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 让视频播放更专业的技巧</strong><br>
            1. <strong>给视频加"标题框"</strong>：在视频上方放一个半透明的形状 + 白色标题文字<br>
            2. <strong>设置自定义封面</strong>：用设计好的图片做视频封面，比默认的第一帧好看<br>
            3. <strong>视频裁剪为形状</strong>：把视频画面裁剪成圆角矩形或圆形，更有设计感<br>
            4. <strong>合理安排播放时机</strong>：不要自动播放，让演讲者自己控制何时播放视频
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '以下哪种音频格式最适合插入到PPT中？',
            options: ['FLAC', 'MP3', 'OGG', 'MIDI'],
            answer: 1,
            explanation: 'MP3是最通用、兼容性最好的音频格式，体积小且所有电脑都能播放。FLAC体积太大，OGG兼容性一般，MIDI是合成音乐不适合背景音乐。'
        },
        {
            type: 'single',
            question: '设置背景音乐时，以下哪个选项必须勾选才能让音乐在翻页后继续播放？',
            options: ['循环播放', '跨幻灯片播放', '放映时隐藏', '自动播放'],
            answer: 1,
            explanation: '"跨幻灯片播放"是让音乐在翻页后继续播放的关键设置。如果不勾选，翻到下一页时音乐就会停止。'
        },
        {
            type: 'single',
            question: '以下哪种视频格式兼容性最好，推荐在PPT中使用？',
            options: ['MKV', 'FLV', 'MP4', 'RMVB'],
            answer: 2,
            explanation: 'MP4（H.264编码）是目前兼容性最好的视频格式，几乎所有电脑和软件都能播放。MKV、FLV、RMVB可能需要额外安装解码器。'
        },
        {
            type: 'judge',
            question: '在PPT中使用"剪裁视频"功能后，PPT文件会变小。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！PPT中的视频剪裁是非破坏性的，原始完整文件仍然保存在PPT中。剪裁只是设置了播放的起止点。要真正减小文件大小，需要在插入前用视频编辑软件处理。'
        },
        {
            type: 'multiple',
            question: '设置PPT背景音乐时，以下哪些是推荐的设置？（多选）',
            options: [
                '开始方式设为"自动"',
                '音量设为"高"',
                '勾选"跨幻灯片播放"',
                '设置淡入淡出效果'
            ],
            answer: [0, 2, 3],
            explanation: '背景音乐应该自动播放、跨幻灯片、有淡入淡出效果。音量应该设为"低"而非"高"，避免盖过演讲者的声音。'
        },
        {
            type: 'single',
            question: '视频"封面帧"的作用是什么？',
            options: [
                '视频播放结束后显示的画面',
                '视频未播放时在页面上显示的静态画面',
                '视频的水印',
                '视频的标题字幕'
            ],
            answer: 1,
            explanation: '封面帧是视频未播放时显示的静态画面（预览图）。设置一个好看的封面帧可以提升PPT的整体视觉效果，避免显示黑屏或不好看的第一帧。'
        },
        {
            type: 'single',
            question: '演讲现场视频播放不出来，最可能的原因是什么？',
            options: [
                'PPT文字太多',
                '视频是链接方式且文件路径改变了',
                '电脑屏幕分辨率不够',
                '没有安装WPS'
            ],
            answer: 1,
            explanation: '最常见的原因是视频使用链接方式插入，换了电脑或U盘后文件路径变了，PPT找不到视频文件。解决方法是使用嵌入方式或确保文件路径正确。'
        },
        {
            type: 'judge',
            question: '正式的商务汇报PPT应该添加大量背景音乐来增强效果。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！正式的商务汇报一般不需要背景音乐，音乐会分散观众的注意力并干扰演讲者。背景音乐更适合活动策划、庆典、教学课件等场景。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：为班会PPT添加多媒体
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少3页的PPT，综合运用音频和视频功能：</p>
                <ol>
                    <li>
                        <strong>第1页：封面 + 背景音乐</strong><br>
                        插入一首背景音乐，设置为自动播放、跨幻灯片、循环播放、低音量、放映时隐藏、淡入2秒
                    </li>
                    <li>
                        <strong>第2页：视频展示页</strong><br>
                        插入一段视频（MP4格式），设置为单击时播放，调整视频大小居中，设置封面帧，添加视频样式（圆角或阴影）
                    </li>
                    <li>
                        <strong>第3页：总结页</strong><br>
                        普通的文字总结页，用来验证背景音乐是否跨幻灯片播放
                    </li>
                </ol>
                <p><strong>测试要求：</strong></p>
                <ul>
                    <li>全屏放映测试，确认音乐自动播放且翻页不中断</li>
                    <li>在第2页单击视频确认能正常播放</li>
                    <li>翻到第3页确认音乐还在继续</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试使用"录制音频"功能给某一页录一段旁白</li>
                    <li>尝试使用"屏幕录制"功能录制一段操作演示</li>
                    <li>尝试"剪裁视频"只保留视频的某一段</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 插入本地音频和录制音频<br>
            ✅ 设置背景音乐（自动、跨幻灯片、循环、淡入淡出）<br>
            ✅ 插入本地视频和在线视频<br>
            ✅ 视频播放设置（单击/自动、全屏、循环）<br>
            ✅ 设置视频封面帧和样式<br>
            ✅ 音视频文件格式选择和管理<br>
            ✅ 多媒体PPT的"防翻车"技巧<br><br>
            下一课我们将学习<strong>表格制作与美化</strong>——制作月度销售数据表，让数据更清晰！
        </div>
    `
};
