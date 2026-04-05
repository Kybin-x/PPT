/**
 * PPT学习站 - 第21课：PPT的导出与打印
 * 模块：放映与输出
 */
window.lessonData = {
    scenario: '你的周报汇报非常成功！老板说："把这份PPT发给各部门负责人存档，还要打印几份给不方便看电脑的客户。另外能不能做一版可以发朋友圈的图片？"今天我们学习PPT的各种导出和打印技能！',
    knowledge: `
        <h3>一、为什么要导出为其他格式？</h3>
        <ul>
            <li>发给不使用WPS/PPT的人 → 导出为<strong>PDF</strong>，格式不会乱</li>
            <li>发朋友圈/微信 → 导出为<strong>图片</strong></li>
            <li>上传到视频平台 → 导出为<strong>视频</strong></li>
            <li>打印出来使用 → 了解<strong>打印设置</strong></li>
        </ul>
        <h3>二、导出为PDF（最常用）</h3>
        <p>PDF是最安全的分享格式：字体不会变、排版不会乱、对方不能随意修改。</p>
        <h4>导出方法</h4>
        <ol>
            <li>点击 <strong>文件</strong> 选项卡</li>
            <li>选择 <strong>"导出"</strong> 或 <strong>"另存为"</strong></li>
            <li>文件类型选择 <strong>PDF格式（.pdf）</strong></li>
            <li>点击保存/导出</li>
        </ol>
        <h4>PDF导出选项</h4>
        <ul>
            <li><strong>标准（适用于联机发布和打印）</strong>：质量高，文件稍大，推荐选这个</li>
            <li><strong>最小文件大小（联机发布）</strong>：文件小，质量略低，邮件发送时可用</li>
            <li>可以选择导出<strong>全部幻灯片</strong>或<strong>指定范围</strong></li>
        </ul>
        <div class="tip-box tip-success">
            <strong>🎯 何时应该发PDF而不是PPT</strong><br>
            • 给客户/领导的正式文件 → PDF（防止被修改，格式固定）<br>
            • 给对方存档的资料 → PDF<br>
            • 跨设备分享 → PDF（手机、平板都能打开）<br>
            • 需要对方编辑 → 发.pptx<br>
            • 下次自己要继续改 → 保留.pptx源文件！
        </div>
        <h3>三、导出为图片</h3>
        <p>将每张幻灯片保存为单独的图片文件，适合发社交媒体、插入到其他文档等。</p>
        <h4>导出方法</h4>
        <ol>
            <li>文件 → 另存为</li>
            <li>文件类型选择 <strong>PNG图片（.png）</strong> 或 <strong>JPEG图片（.jpg）</strong></li>
            <li>保存后会弹窗询问：导出所有幻灯片还是仅当前幻灯片</li>
            <li>选"所有幻灯片"→ 会创建一个文件夹，每页生成一张图片</li>
        </ol>
        <h4>PNG vs JPG选哪个？</h4>
        <ul>
            <li><strong>PNG</strong>：无损压缩，图片质量更好，文件稍大 → 有透明元素时必须用PNG</li>
            <li><strong>JPG</strong>：有损压缩，文件更小 → 纯色/照片背景的幻灯片用JPG够用</li>
            <li><strong>发朋友圈/微信</strong>：JPG即可，PNG也行</li>
        </ul>
        <h3>四、导出为视频</h3>
        <p>将PPT导出为MP4视频，适合上传到B站、微信视频号等平台。</p>
        <h4>导出方法</h4>
        <ol>
            <li>文件 → 导出 → <strong>"创建视频"</strong>（或另存为mp4格式）</li>
            <li>选择视频质量：<strong>1080P（全高清）</strong>推荐，720P也可以</li>
            <li>选择每张幻灯片的停留时间（如5秒）</li>
            <li>点击导出，等待处理</li>
        </ol>
        <div class="tip-box tip-info">
            <strong>💡 视频导出的特点</strong><br>
            • 动画效果会被保留在视频中<br>
            • 切换效果也会体现<br>
            • 如果录制了备注旁白，可以包含在视频中<br>
            • 导出时间较长，10页PPT可能需要1-3分钟
        </div>
        <h3>五、打印设置</h3>
        <p>点击 <strong>文件 → 打印</strong>，进入打印预览界面。</p>
        <h4>关键打印选项</h4>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead><tr style="background: var(--bg-code);">
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">选项</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">说明</th>
                <th style="padding:10px;border:1px solid var(--border-color);text-align:left;">使用场景</th>
            </tr></thead>
            <tbody>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>整页幻灯片</strong></td><td style="padding:10px;border:1px solid var(--border-color);">每页纸打印一张幻灯片</td><td style="padding:10px;border:1px solid var(--border-color);">展示用，画质最好</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>讲义（每页2/4/6/9张）</strong></td><td style="padding:10px;border:1px solid var(--border-color);">一页纸打印多张幻灯片</td><td style="padding:10px;border:1px solid var(--border-color);">⭐ 给观众的讲义，省纸</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>备注页</strong></td><td style="padding:10px;border:1px solid var(--border-color);">每页纸上半部分幻灯片，下半部分备注</td><td style="padding:10px;border:1px solid var(--border-color);">演讲者自己的提词稿</td></tr>
                <tr><td style="padding:10px;border:1px solid var(--border-color);"><strong>大纲视图</strong></td><td style="padding:10px;border:1px solid var(--border-color);">只打印文字大纲</td><td style="padding:10px;border:1px solid var(--border-color);">会议记录、内容存档</td></tr>
            </tbody>
        </table>
        <h4>灰度/黑白打印</h4>
        <p>彩色PPT用黑白打印机打印时，颜色可能显示不正确。可以在打印设置中选择<strong>"灰度"</strong>，让WPS自动优化黑白打印效果。</p>
        <div class="tip-box tip-warning">
            <strong>⚠️ 打印前必须预览</strong><br>
            打印前一定要在"打印预览"中确认：<br>
            • 文字是否被裁切<br>
            • 图片是否完整显示<br>
            • 讲义模式下内容是否清晰<br>
            这样可以避免浪费纸张和墨水！
        </div>
        <h3>六、文件大小优化</h3>
        <p>如果PPT文件太大（超过10MB），发邮件或上传都很慢，可以压缩：</p>
        <ul>
            <li><strong>压缩图片</strong>：文件→另存为→工具→压缩图片，选择"适合屏幕（150dpi）"</li>
            <li><strong>删除不用的媒体</strong>：删掉未使用的背景图片、音频文件</li>
            <li><strong>转换为PDF</strong>：PDF通常比.pptx小很多</li>
            <li><strong>使用WPS在线链接分享</strong>：不用发文件，发一个链接即可</li>
        </ul>
    `,
    steps: `
        <div class="step-card"><div class="step-card-number">1</div><div class="step-card-title">将PPT导出为PDF</div><div class="step-card-desc"><ol><li>打开你的PPT文件</li><li>文件 → 另存为（或导出）</li><li>文件类型选择 <strong>PDF（.pdf）</strong></li><li>文件名输入"周报-PDF版"</li><li>选择"标准"质量</li><li>点击保存</li><li>找到保存的PDF文件，双击打开，检查格式是否正确</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">2</div><div class="step-card-title">将幻灯片导出为图片</div><div class="step-card-desc"><ol><li>文件 → 另存为</li><li>文件类型选择 <strong>PNG图片（.png）</strong></li><li>保存到桌面上的一个新文件夹</li><li>选择导出"所有幻灯片"</li><li>找到生成的文件夹，查看每张幻灯片的图片文件</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">3</div><div class="step-card-title">设置讲义打印</div><div class="step-card-desc"><ol><li>文件 → 打印（或 <span class="kbd">Ctrl</span>+<span class="kbd">P</span>）</li><li>在打印布局中选择 <strong>"讲义 4张"</strong>（一页纸印4张幻灯片）</li><li>确认"颜色"选项（彩色打印机选彩色，黑白打印机选灰度）</li><li>查看右侧预览，确认排版正确</li><li>【不要真的打印，确认预览效果即可】</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">4</div><div class="step-card-title">打印备注页（演讲提词）</div><div class="step-card-desc"><ol><li>文件 → 打印</li><li>布局选择 <strong>"备注页"</strong></li><li>预览中可以看到：上半部分是幻灯片缩略图，下半部分是你写的备注</li><li>这张打印出来就是演讲提词稿</li></ol></div></div>
        <div class="step-card"><div class="step-card-number">5</div><div class="step-card-title">检查PPT文件大小并压缩</div><div class="step-card-desc"><ol><li>在Windows资源管理器中右键你的PPT文件 → 属性，查看文件大小</li><li>如果超过10MB，执行压缩：文件 → 另存为时，点击"工具"→"压缩图片"</li><li>选择"适合屏幕（150dpi）"，应用于"所有图片"</li><li>保存，对比压缩前后的文件大小</li></ol></div></div>
    `,
    tips: `
        <div class="tip-box tip-info"><strong>💡 发送给客户前必做的检查</strong><br>发给客户的PPT（无论是.pptx还是PDF）前，务必检查：<br>• 有没有临时的占位文字（【在此输入xxx】）<br>• 有没有涉密/内部信息<br>• 图片是否清晰，没有被压缩得很模糊<br>• 文件名是否专业（不要叫"新建PPT"）</div>
        <div class="tip-box tip-success"><strong>🌟 WPS云文档分享技巧</strong><br>不想发文件，可以把PPT上传到WPS云文档，然后分享链接给对方。对方用手机/电脑打开链接就能查看，还可以设置"只读"防止修改，非常便捷！</div>
        <div class="tip-box tip-warning"><strong>⚠️ 永远保留.pptx源文件</strong><br>无论导出为PDF、图片还是视频，都要保留原始的.pptx文件。如果后期需要修改，只有.pptx才能编辑，其他格式导出后不可修改。</div>
    `,
    quiz: [
        { type: 'single', question: '以下哪种导出格式最适合发给客户存档（确保格式不变、不被随意修改）？', options: ['.pptx', '.docx', '.pdf', '.png'], answer: 2, explanation: 'PDF格式最适合正式存档，字体和排版不会变化，且对方无法轻易修改内容。' },
        { type: 'single', question: '打印PPT时，"讲义（每页4张）"模式的含义是？', options: ['一张幻灯片放大打印', '一页纸上打印4张幻灯片', '打印4页纸', '打印幻灯片的第4页'], answer: 1, explanation: '"讲义"模式在一页纸上打印多张幻灯片缩略图，节省纸张，适合打印给观众作为参考材料。' },
        { type: 'judge', question: '将PPT导出为PDF后，原.pptx文件就不需要保留了。', options: ['对', '错'], answer: 1, explanation: '错误！必须保留.pptx源文件。PDF不可编辑，如果后续需要修改PPT内容，只有.pptx格式才能编辑。' },
        { type: 'single', question: '将PPT导出为图片时，应选择哪种格式保证最好的图片质量？', options: ['GIF', 'BMP', 'PNG', 'TXT'], answer: 2, explanation: 'PNG是无损压缩格式，导出的图片质量最好，且支持透明背景。适合需要高质量图片的场景。' },
        { type: 'multiple', question: '以下哪些方法可以减小PPT文件大小？（多选）', options: ['压缩图片分辨率', '添加更多动画', '删除未使用的媒体文件', '导出为PDF替代发.pptx'], answer: [0, 2, 3], explanation: '压缩图片、删除无用媒体、发PDF替代大文件都能减小文件大小。添加更多动画只会增大文件。' },
        { type: 'single', question: '打印"备注页"格式有什么用途？', options: ['省纸，一页打印多张幻灯片', '打印演讲者的提词稿', '打印幻灯片大纲', '打印所有备注汇总'], answer: 1, explanation: '"备注页"格式在每页纸的上方显示幻灯片缩略图，下方显示备注内容，非常适合演讲者打印成提词稿。' },
        { type: 'judge', question: '黑白打印彩色PPT时，应选择"灰度"选项以获得更好的打印效果。', options: ['对', '错'], answer: 0, explanation: '正确！选择"灰度"后，WPS会将彩色元素转换为合适的灰度色调进行优化，比直接黑白打印效果更好，文字和图形对比度更清晰。' }
    ],
    practice: `
        <div class="practice-task">
            <div class="practice-task-header"><span>🎯</span> 实战任务：多格式导出练习</div>
            <div class="practice-task-body">
                <p>对你的周报PPT进行三种格式的导出：</p>
                <ol>
                    <li><strong>导出PDF</strong>：文件名"周报_正式版.pdf"，标准质量，全部幻灯片</li>
                    <li><strong>导出图片</strong>：选择PNG格式，导出所有幻灯片，保存到"周报图片"文件夹</li>
                    <li><strong>设置打印参数</strong>：进入打印预览，设置讲义模式（每页4张），查看效果（无需实际打印）</li>
                    <li><strong>检查文件大小</strong>：对比.pptx、.pdf和单张.png的文件大小，理解各格式特点</li>
                </ol>
            </div>
        </div>
        <div class="tip-box tip-success"><strong>🎉 恭喜！"放映与输出"模块全部完成！</strong><br>你已经掌握了：放映快捷键、演讲者视图、排练计时、演讲技巧、PDF/图片/视频导出、打印设置。<br><br>下一模块：<strong>WPS特色功能</strong>——AI智能排版、云文档协作、独家特色工具！</div>
    `
};
