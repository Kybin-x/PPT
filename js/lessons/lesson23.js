/**
 * PPT学习站 - 第23课：WPS云文档与在线协作
 * 模块：WPS特色功能
 */
window.lessonData = {

    scenario: '你的团队有3个人共同负责一个大型客户提案PPT，每次改完还要发邮件给队友，然后再合并……主管说："我们能不能同时在一个文件上工作？不然总有人的版本是旧的。"今天我们来学习WPS云文档和在线协作功能！',

    knowledge: `
        <h3>一、WPS云文档是什么？</h3>
        <p>WPS云文档（WPS云空间）是金山办公提供的云存储服务，可以将你的PPT、Word、Excel等文件保存在云端：</p>
        <ul>
            <li>📱 <strong>多设备同步</strong>：在公司电脑保存，回家手机也能看</li>
            <li>🔄 <strong>自动备份</strong>：文件自动保存云端，不怕本地电脑损坏</li>
            <li>👥 <strong>多人协作</strong>：多人同时编辑同一文件</li>
            <li>📌 <strong>历史版本</strong>：可以回到任意历史版本</li>
            <li>🔗 <strong>分享链接</strong>：生成分享链接，任何人都能查看</li>
        </ul>

        <h3>二、将PPT保存到云端</h3>

        <h4>方法一：直接保存到云端</h4>
        <ol>
            <li>打开WPS演示</li>
            <li>文件 → 保存到云端（或"另存为" → 选择云端位置）</li>
            <li>登录WPS账号</li>
            <li>选择保存位置（我的云文档 / 团队文档）</li>
            <li>文件保存成功后，云端图标会出现在标题栏</li>
        </ol>

        <h4>方法二：上传已有文件</h4>
        <ol>
            <li>在WPS客户端的"云文档"页面</li>
            <li>点击"上传文件"</li>
            <li>选择本地PPT文件</li>
            <li>文件上传到云端后可在任何设备访问</li>
        </ol>

        <h3>三、多人协作编辑——核心功能</h3>
        <p>云文档的最强大功能：多人同时编辑同一文件！</p>

        <h4>开启协作</h4>
        <ol>
            <li>将文件保存到云端</li>
            <li>点击右上角<strong>"协作"</strong>或<strong>"分享"</strong>按钮</li>
            <li>输入协作者的邮箱/账号，或生成分享链接</li>
            <li>设置权限：可编辑/只能查看/只能评论</li>
            <li>协作者接受邀请后，可以同时编辑文件</li>
        </ol>

        <h4>协作时的体验</h4>
        <ul>
            <li>可以看到其他协作者的<strong>光标位置</strong>（不同颜色标识）</li>
            <li>所有修改<strong>实时同步</strong>，不会出现版本冲突</li>
            <li>修改记录有<strong>操作者标识</strong></li>
            <li>可以在文档中<strong>留评论</strong>，@提醒特定成员</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 协作分工建议：</strong><br>
            多人协作PPT时，建议明确分工：<br>
            • 先一个人做好母版和配色方案<br>
            • 再按章节分配：A负责第1-5页，B负责第6-10页<br>
            • 通过评论功能相互反馈<br>
            • 最后一个人统一检查整体风格
        </div>

        <h3>四、文件版本历史</h3>
        <p>云文档会自动保存历史版本，任何时候都可以回溯：</p>
        <ol>
            <li>在云端文件上右键 → <strong>"版本历史"</strong></li>
            <li>看到所有的历史保存记录（时间 + 操作者）</li>
            <li>点击任意历史版本可以预览</li>
            <li>如果当前版本改坏了，可以<strong>一键恢复</strong>到历史版本</li>
        </ol>

        <div class="tip-box tip-info">
            <strong>💡 版本历史的实际用途：</strong><br>
            • 做了一个大改动后发现效果不好 → 恢复到之前的版本<br>
            • 老板说"上次那个版本更好" → 找到历史版本对比<br>
            • 协作时有人不小心删了重要内容 → 从历史版本找回
        </div>

        <h3>五、分享与权限管理</h3>

        <h4>分享方式</h4>
        <ul>
            <li><strong>指定人员</strong>：邀请特定账号，精确控制权限</li>
            <li><strong>链接分享</strong>：生成链接，任何获得链接的人都能访问</li>
        </ul>

        <h4>权限级别</h4>
        <ul>
            <li><strong>可编辑</strong>：对方可以修改内容（慎重授权！）</li>
            <li><strong>可评论</strong>：只能添加评论，不能修改内容</li>
            <li><strong>只可查看</strong>：只能查看，不能做任何修改</li>
        </ul>

        <div class="tip-box tip-warning">
            <strong>⚠️ 权限设置要谨慎</strong><br>
            • 发给客户/外部人员：选<strong>只可查看</strong>，防止误操作<br>
            • 发给上级领导审阅：选<strong>可评论</strong>，可以批注建议<br>
            • 发给协作团队成员：选<strong>可编辑</strong><br>
            • 涉及公司机密的文件：谨慎使用链接分享，最好指定人员
        </div>

        <h3>六、移动端访问WPS云文档</h3>
        <p>用手机随时查看和编辑你的PPT：</p>
        <ol>
            <li>在手机上下载<strong>"WPS Office"</strong>应用</li>
            <li>登录与电脑相同的WPS账号</li>
            <li>在"云文档"页面找到你的文件</li>
            <li>支持查看和简单编辑（移动端功能少于PC端）</li>
        </ol>

        <h3>七、与企业微信/飞书等协同工具的对比</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color);">工具</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">优势</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color);">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>WPS云文档</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">与WPS编辑无缝集成</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">主要使用WPS的团队</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Google Drive</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">国际通用，免费空间大</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">跨境电商、国际合作</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">飞书文档</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">与飞书即时通讯整合</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">使用飞书的公司</td>
                </tr>
            </tbody>
        </table>
    `,

    steps: `
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">登录WPS账号</div>
            <div class="step-card-desc">
                <ol>
                    <li>打开WPS演示</li>
                    <li>点击右上角的"登录"按钮</li>
                    <li>如果没有账号，注册一个免费WPS账号（使用手机号或邮箱）</li>
                    <li>登录成功后，右上角显示你的头像</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">将PPT保存到云端</div>
            <div class="step-card-desc">
                <ol>
                    <li>打开任意一个PPT</li>
                    <li>文件 → "保存到云端"（或另存为 → 云端位置）</li>
                    <li>选择"我的云文档"下的文件夹</li>
                    <li>输入文件名，点击保存</li>
                    <li>观察标题栏，出现云朵图标表示已在云端</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">生成分享链接</div>
            <div class="step-card-desc">
                <ol>
                    <li>在云端文件上，点击<strong>"分享"</strong>按钮</li>
                    <li>权限设置选择<strong>"只可查看"</strong></li>
                    <li>点击"复制链接"</li>
                    <li>把链接发给同学或老师</li>
                    <li>让对方用链接访问，确认他们能看到你的PPT</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">查看历史版本</div>
            <div class="step-card-desc">
                <ol>
                    <li>打开一个已保存在云端的PPT</li>
                    <li>修改一些内容并保存</li>
                    <li>再修改一些内容并保存</li>
                    <li>点击菜单 → "历史记录"或"版本历史"</li>
                    <li>查看保存记录，尝试预览之前的版本</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">邀请同学协作编辑</div>
            <div class="step-card-desc">
                <ol>
                    <li>在分享设置中，切换到"指定人员"</li>
                    <li>输入同学的WPS账号（手机号或邮箱）</li>
                    <li>权限设置为<strong>"可编辑"</strong></li>
                    <li>同学接受邀请后，你们可以同时编辑这个PPT</li>
                    <li>观察：你能看到对方的光标位置和修改</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">在手机上访问云文档</div>
            <div class="step-card-desc">
                <ol>
                    <li>在手机上安装WPS Office应用</li>
                    <li>用相同账号登录</li>
                    <li>在"云文档"中找到刚才上传的PPT</li>
                    <li>打开查看（手机端也可以简单编辑）</li>
                    <li>感受：多端同步，随时随地可以工作</li>
                </ol>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 云文档 vs 本地文件的选择建议</strong><br>
            • <strong>重要的工作文件</strong>：一定要同时保存在云端和本地（双重备份）<br>
            • <strong>临时草稿</strong>：保存本地就好<br>
            • <strong>需要协作的文件</strong>：放云端，方便团队访问<br>
            • <strong>机密文件</strong>：考虑是否适合放云端（涉及信息安全）
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 云文档协作的最佳实践</strong><br>
            1. 协作前明确分工，避免多人同时编辑同一处导致混乱<br>
            2. 使用评论功能（而非直接修改）提出修改建议，尊重原作者<br>
            3. 重大改动前，提前在评论区告知团队<br>
            4. 协作结束后，整理版本，保留"最终版"，归档历史版本
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 协作时的常见冲突和解决</strong><br>
            • <strong>A和B同时改了同一个地方</strong>：云文档会有冲突提示，选择保留谁的版本<br>
            • <strong>有人不小心删了内容</strong>：去历史版本找回<br>
            • <strong>分工不明确导致重复工作</strong>：协作前先在文字工具（如共享文档）里分配任务
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: 'WPS云文档多人协作时，如何避免版本冲突？',
            options: [
                '需要等一个人编辑完再轮到下一个',
                '实时同步技术让多人可以同时编辑，修改实时可见',
                '每人需要下载副本单独编辑再合并',
                '只有管理员可以编辑'
            ],
            answer: 1,
            explanation: 'WPS云文档使用实时同步技术，多人同时编辑时，每个人的修改都会实时同步给其他协作者，可以看到对方的光标位置，有效避免版本冲突。'
        },
        {
            type: 'single',
            question: '发给客户查阅的云文档分享链接，应该设置什么权限？',
            options: ['可编辑', '可评论', '只可查看', '管理员权限'],
            answer: 2,
            explanation: '发给客户查阅应设置"只可查看"权限，防止客户误操作修改内容。如果需要客户提反馈，可以考虑"可评论"权限。'
        },
        {
            type: 'judge',
            question: '云文档的历史版本功能可以帮助恢复被误删的内容。',
            options: ['对', '错'],
            answer: 0,
            explanation: '正确！云文档会自动保存历史版本，当有人误删内容或做了错误修改时，可以通过历史版本找到并恢复之前的内容。'
        },
        {
            type: 'multiple',
            question: 'WPS云文档的主要功能包含哪些？（多选）',
            options: ['多设备文件同步', '多人实时协作编辑', '文件版本历史', '自动识别PPT中的错误'],
            answer: [0, 1, 2],
            explanation: 'WPS云文档支持多设备同步、多人协作、历史版本管理。"自动识别PPT中的错误"不是云文档的功能。'
        },
        {
            type: 'single',
            question: '多人协作PPT时，以下哪种分工方式最合理？',
            options: [
                '所有人同时编辑所有页面',
                '先一人做母版，再按章节分配，最后统一审核',
                '一个人做完，其他人不参与',
                '每个人做一个完全独立的PPT，最后拼起来'
            ],
            answer: 1,
            explanation: '最合理的分工是：先统一母版/配色，再按章节分配给不同成员，最后统一检查整体风格和连贯性。这样既高效又能保证风格统一。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：云文档协作制作团队PPT
            </div>
            <div class="practice-task-body">
                <p>与1-2位同学合作，使用WPS云文档完成一个4-6页的团队PPT：</p>
                <ol>
                    <li><strong>准备阶段</strong>：建立共享云文档，明确各人负责的页面分工</li>
                    <li><strong>协作制作</strong>：各自负责指定页面，互相可以实时看到对方的进度</li>
                    <li><strong>评论反馈</strong>：用评论功能给队友的内容提1-2条修改建议</li>
                    <li><strong>版本管理</strong>：查看并记录协作过程中产生的版本历史</li>
                    <li><strong>权限测试</strong>：生成一个"只可查看"的链接，发给老师或其他同学查看</li>
                </ol>
                <p><strong>总结：</strong>协作完成后，在备注中写下：云文档协作与传统邮件传递方式相比，有哪些优势和不足？</p>
            </div>
        </div>
    `
};
