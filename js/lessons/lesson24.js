/**
 * PPT学习站 - 第24课：WPS云文档与多端同步
 * 文件路径: js/lessons/lesson24.js
 * 模块：WPS特色功能
 * 任务情境：实现PPT在手机、平板、电脑之间无缝流转
 */

window.lessonData = {

    scenario: '周五下班前你在公司电脑上做了一半的运营周报PPT，周末想在家里继续做，但PPT存在公司电脑上……周一早上开会前，老板在微信上说："你能不能把PPT发我手机上先看一眼？"你掏出手机，3秒钟搞定。今天我们来学习WPS的多端同步和文件流转技能——让你的PPT随时随地都能用！',

    knowledge: `
        <h3>一、为什么需要多端同步？</h3>
        <p>在真实的工作场景中，你的PPT经常需要在不同设备之间流转：</p>
        <ul>
            <li><strong>公司电脑</strong> → 主要的制作设备</li>
            <li><strong>家里电脑</strong> → 回家继续修改</li>
            <li><strong>手机</strong> → 路上查看、给老板发送、临时小改</li>
            <li><strong>平板</strong> → 客户现场演示、手写批注</li>
            <li><strong>会议室电脑</strong> → 临时登录放映</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚨 没有多端同步的惨案</strong><br>
            • "PPT在公司电脑上，我忘了拷U盘，今天在家改不了……"<br>
            • "U盘坏了/丢了，PPT没有备份！"<br>
            • "我在家改的版本和公司的版本搞混了，不知道哪个是最新的……"<br>
            • "老板让我马上发PPT，但我不在电脑旁边，手机上又没有……"<br><br>
            以上全是血泪教训！学会多端同步，彻底告别这些烦恼。
        </div>

        <h3>二、WPS云文档——你的"随身PPT仓库"</h3>
        <p>上一课我们学了云文档的协作功能，这节课重点讲<strong>多端同步和文件流转</strong>。</p>

        <h4>1. 云文档的同步原理</h4>
        <p>WPS云文档的核心就是：<strong>文件存在云端服务器上，所有设备都从同一个地方读取和保存</strong>。</p>
        <ul>
            <li>在公司电脑上保存到云端 → 文件上传到WPS服务器</li>
            <li>回家打开WPS → 自动从服务器下载最新版本</li>
            <li>在家修改后保存 → 文件同步回服务器</li>
            <li>第二天到公司 → 自动获取家里改过的最新版</li>
        </ul>
        <p><strong>只要登录同一个WPS账号，你的文件在哪台设备上都是最新的。</strong></p>

        <div class="tip-box tip-info">
            <strong>💡 云文档 vs U盘 vs 邮件发送</strong><br>
            <table style="width:100%; border-collapse:collapse; margin: var(--space-sm) 0;">
                <thead>
                    <tr style="background: var(--bg-code);">
                        <th style="padding:8px; border:1px solid var(--border-color); text-align:left;">方式</th>
                        <th style="padding:8px; border:1px solid var(--border-color); text-align:left;">优点</th>
                        <th style="padding:8px; border:1px solid var(--border-color); text-align:left;">缺点</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding:8px; border:1px solid var(--border-color);"><strong>U盘</strong></td>
                        <td style="padding:8px; border:1px solid var(--border-color);">不需要网络</td>
                        <td style="padding:8px; border:1px solid var(--border-color);">容易丢/坏/中毒，版本混乱</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid var(--border-color);"><strong>邮件/微信发送</strong></td>
                        <td style="padding:8px; border:1px solid var(--border-color);">方便转发</td>
                        <td style="padding:8px; border:1px solid var(--border-color);">版本多了搞不清哪个是最新的</td>
                    </tr>
                    <tr>
                        <td style="padding:8px; border:1px solid var(--border-color);"><strong>⭐ 云文档</strong></td>
                        <td style="padding:8px; border:1px solid var(--border-color);">自动同步、永远最新、多端可用</td>
                        <td style="padding:8px; border:1px solid var(--border-color);">需要网络</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h4>2. 云文档的存储空间</h4>
        <ul>
            <li><strong>免费用户</strong>：1GB 云空间（大约可以存 50-100 个普通PPT）</li>
            <li><strong>WPS会员</strong>：20GB+ 空间</li>
            <li><strong>超级会员</strong>：365GB 空间</li>
        </ul>
        <p>对于日常学习和工作，免费空间通常够用。如果做的PPT含大量高清图片和视频，可以定期清理不用的旧文件。</p>

        <h3>三、手机端WPS——口袋里的PPT工作站</h3>
        <p>WPS手机版是电商工作者的<strong>必装App</strong>之一。你可以用手机完成很多PPT相关操作：</p>

        <h4>1. 手机上能做什么</h4>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">功能</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">手机端支持</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">适用场景</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">查看PPT</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">✅ 完美支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 路上快速查看、发给老板前确认</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">修改文字</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">✅ 支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">改错别字、更新数字</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">添加备注</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">✅ 支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">路上准备演讲提词</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">放映PPT</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">✅ 支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">手机连投影仪临时演示</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">分享/发送</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">✅ 支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 发微信/邮件给同事或客户</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">复杂排版/动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⚠️ 有限支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">精细排版还是建议在电脑上做</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">遥控放映</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">✅ 支持</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 手机当遥控器翻页，超实用</td>
                </tr>
            </tbody>
        </table>

        <h4>2. 手机端安装和登录</h4>
        <ol>
            <li>在应用商店搜索 <strong>"WPS Office"</strong> 下载安装</li>
            <li>打开App，用<strong>和电脑端相同的账号</strong>登录（手机号/微信/QQ）</li>
            <li>登录后点击<strong>"云文档"</strong>标签，就能看到电脑端保存的所有文件</li>
            <li>点击任意PPT文件即可打开查看和编辑</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 最重要的事：登录同一个账号！</strong><br>
            多端同步的前提是所有设备登录<strong>同一个WPS账号</strong>。如果你手机上用微信登录、电脑上用手机号登录，但这两个是不同的账号，文件就不会同步！<br><br>
            在手机WPS中点击"我的" → 查看当前登录的账号 → 确认和电脑端一致。
        </div>

        <h3>四、WPS演示遥控器——手机变翻页器</h3>
        <p>这是一个非常实用的WPS特色功能：用手机遥控电脑上的PPT放映，替代实体翻页笔！</p>

        <h4>使用方法</h4>
        <ol>
            <li>确保手机和电脑<strong>连接同一个Wi-Fi网络</strong></li>
            <li>在电脑端WPS演示中，点击 <strong>"放映"选项卡 → "投影/遥控"</strong>（或类似入口）</li>
            <li>电脑屏幕上出现一个<strong>二维码</strong></li>
            <li>打开手机WPS → 扫描二维码连接</li>
            <li>连接后手机变成遥控器：
                <ul>
                    <li>左右滑动 = 翻页</li>
                    <li>可以看到当前幻灯片和备注</li>
                    <li>有激光笔功能</li>
                    <li>可以看到当前是第几页、已用时间</li>
                </ul>
            </li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 遥控器的三大好处</strong><br>
            1. <strong>自由走动</strong>：不用站在电脑旁边点鼠标，可以走到观众中间<br>
            2. <strong>看备注</strong>：手机上能看到备注提词，观众看不到<br>
            3. <strong>省钱</strong>：不用买翻页笔，手机就行！
        </div>

        <h3>五、PPT的打包与分发</h3>
        <p>做好PPT后要发给别人，怎么确保对方打开后效果和你一样？</p>

        <h4>1. 字体嵌入</h4>
        <p>如果你的PPT用了特殊字体，对方电脑上没有这个字体就会变样。解决方法：</p>
        <ol>
            <li>文件 → 选项（或设置）→ <strong>保存</strong></li>
            <li>勾选 <strong>"将字体嵌入文件"</strong></li>
            <li>选择"仅嵌入演示文稿中使用的字符"（文件不会太大）</li>
            <li>保存后字体就打包在PPT文件里了</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ 字体嵌入的注意事项</strong><br>
            • 嵌入字体会<strong>增大文件体积</strong>（每种字体增加1-5MB）<br>
            • 有些字体有<strong>版权限制</strong>，不允许嵌入<br>
            • 最安全的方式还是<strong>使用系统自带字体</strong>（微软雅黑、黑体、Arial等）<br>
            • 或者<strong>导出为PDF</strong>，PDF中字体不会变
        </div>

        <h4>2. 打包文件夹（含素材）</h4>
        <p>如果你的PPT链接了外部文件（视频、音频、图片），需要把这些文件一起打包：</p>
        <ol>
            <li>在电脑上新建一个文件夹，命名为项目名（如 <code>双十一运营方案_完整包</code>）</li>
            <li>把PPT文件复制到文件夹中</li>
            <li>把所有链接的视频、音频、图片也复制到同一文件夹</li>
            <li>将文件夹压缩为<strong>.zip</strong>压缩包</li>
            <li>发送压缩包给对方，对方解压后打开PPT就能正常使用</li>
        </ol>

        <h4>3. 通过微信/钉钉/企业微信分发</h4>
        <p>电商工作中最常见的分发方式：</p>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">分发方式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">优点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">缺点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">建议</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">直接发文件</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">简单直接</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">微信压缩画质；文件大发不了</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">小文件可以</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">发PDF版本</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">格式不变，文件较小</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对方无法编辑</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 给客户/领导查阅</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">发云文档链接</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">不占空间，永远最新</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">对方需要网络打开</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 团队内部分享</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">导出为图片发朋友圈</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">传播性强</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">只能看不能编辑</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">宣传展示用</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 微信发文件的大小限制</strong><br>
            • 微信个人版：文件大小限制约 <strong>200MB</strong><br>
            • 企业微信：文件大小限制约 <strong>200MB</strong><br>
            • 钉钉：文件大小限制约 <strong>2GB</strong>（更大）<br><br>
            如果PPT太大发不了，可以：压缩图片 → 导出PDF → 或者发云文档链接。
        </div>

        <h3>六、WPS其他实用特色功能</h3>

        <h4>1. PDF转PPT</h4>
        <p>收到别人发的PDF文件想改成PPT？WPS可以转换：</p>
        <ol>
            <li>用WPS打开PDF文件</li>
            <li>点击 <strong>"转换"</strong> 功能（或 文件 → 另存为 → PPT格式）</li>
            <li>WPS会自动将PDF内容转换为可编辑的PPT</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ PDF转PPT的效果</strong><br>
            • 纯文字的PDF → 转换效果较好<br>
            • 图文混排的PDF → 可能排版有偏差，需要手动调整<br>
            • 扫描件PDF（图片型）→ 转换效果差，建议重新做<br>
            • 部分高级转换功能可能需要WPS会员
        </div>

        <h4>2. 手机拍照插入PPT</h4>
        <p>在手机WPS中可以直接拍照并插入到PPT：</p>
        <ul>
            <li>打开手机WPS中的PPT文件</li>
            <li>进入编辑模式 → 插入 → 图片 → <strong>拍照</strong></li>
            <li>拍摄产品实物照或白板内容</li>
            <li>照片直接插入到当前幻灯片</li>
        </ul>
        <p>场景：去仓库拍了实物照片，直接插入产品展示PPT，不用传来传去。</p>

        <h4>3. 文档加密保护</h4>
        <p>涉及商业机密的PPT需要加密：</p>
        <ol>
            <li>文件 → <strong>"文档加密"</strong>（或 保护文档）</li>
            <li>设置打开密码（对方需要输入密码才能查看）</li>
            <li>可选：设置编辑密码（允许查看但禁止修改）</li>
        </ol>

        <h4>4. WPS稻壳商城</h4>
        <p>WPS内置的<strong>素材和模板商城</strong>，提供：</p>
        <ul>
            <li><strong>PPT模板</strong>：按行业/场景分类（电商/教育/金融/汇报……）</li>
            <li><strong>图标素材</strong>：扁平化矢量图标，直接插入使用</li>
            <li><strong>图表模板</strong>：预设好的数据可视化图表</li>
            <li><strong>字体</strong>：免费可商用字体下载</li>
        </ul>
        <p>部分素材免费，部分需要会员。日常学习和作业用免费素材足够了。</p>

        <div class="tip-box tip-success">
            <strong>🎯 电商人必知的WPS高效工作流</strong><br>
            1. 在电脑上用WPS做PPT → 保存到云文档<br>
            2. 下班路上用手机查看、补充备注<br>
            3. 到会议室用手机遥控翻页演示<br>
            4. 演示后生成PDF链接发给参会人员<br>
            5. 需要修改时任何设备打开都是最新版<br><br>
            这套流程一旦习惯了，效率提升不止一倍！
        </div>
    `,

    steps: `
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">确认电脑端WPS已登录账号</div>
            <div class="step-card-desc">
                <ol>
                    <li>打开WPS演示</li>
                    <li>查看右上角是否显示你的头像/昵称</li>
                    <li>如果未登录，点击"登录"用手机号或微信登录</li>
                    <li>记住你的登录方式（手机号/微信/QQ），手机端要用同一个</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">将PPT保存到云文档</div>
            <div class="step-card-desc">
                <ol>
                    <li>打开你之前做的任意一份PPT</li>
                    <li>点击 <strong>文件 → 保存到云文档</strong>（或"另存为" → 选择云端位置）</li>
                    <li>选择"我的云文档"中的一个文件夹</li>
                    <li>点击保存</li>
                    <li>观察标题栏，出现<strong>云朵图标</strong>表示已保存到云端</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">在手机上安装WPS并登录同一账号</div>
            <div class="step-card-desc">
                <ol>
                    <li>在手机应用商店搜索 <strong>"WPS Office"</strong></li>
                    <li>下载安装（免费）</li>
                    <li>打开App → 登录 → <strong>用和电脑端相同的账号登录</strong></li>
                    <li>点击底部的<strong>"云文档"</strong>标签</li>
                    <li>你应该能看到刚才在电脑上保存的PPT文件！</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">在手机上查看和编辑PPT</div>
            <div class="step-card-desc">
                <ol>
                    <li>在手机WPS的云文档中，点击你的PPT文件打开</li>
                    <li>左右滑动浏览各页幻灯片</li>
                    <li>双击某个文本框进入编辑模式</li>
                    <li>试着修改一个文字（比如把日期改成今天）</li>
                    <li>保存后，回到电脑端打开同一文件，查看修改是否同步过来</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">从手机分享PPT</div>
            <div class="step-card-desc">
                <ol>
                    <li>在手机WPS中打开PPT文件</li>
                    <li>点击右上角的<strong>"分享"</strong>按钮</li>
                    <li>选择分享方式：
                        <ul>
                            <li><strong>分享链接</strong>：生成一个链接，对方在浏览器或WPS中打开</li>
                            <li><strong>发送文件</strong>：直接通过微信/钉钉等发送文件</li>
                            <li><strong>导出PDF</strong>：转为PDF后分享</li>
                        </ul>
                    </li>
                    <li>试一试发给自己的另一个聊天窗口（或发给同学）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">体验PPT遥控功能（可选）</div>
            <div class="step-card-desc">
                <p>如果你的手机和电脑在同一Wi-Fi网络下：</p>
                <ol>
                    <li>在电脑端WPS演示中，查找<strong>"放映" → "遥控/投影"</strong>功能</li>
                    <li>如果有二维码出现，用手机WPS扫描</li>
                    <li>连接成功后，在手机上左右滑动翻页</li>
                    <li>观察电脑屏幕上的PPT跟随翻页</li>
                </ol>
                <p>注意：此功能需要手机和电脑在同一局域网，学校机房可能网络限制无法使用，可以在家里试。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">设置字体嵌入</div>
            <div class="step-card-desc">
                <ol>
                    <li>在电脑端打开你的PPT</li>
                    <li>文件 → 选项（或设置）→ <strong>保存</strong></li>
                    <li>找到"字体嵌入"相关选项</li>
                    <li>勾选<strong>"将字体嵌入文件"</strong></li>
                    <li>选择<strong>"仅嵌入文档中使用的字符"</strong></li>
                    <li>确定 → 保存文件</li>
                    <li>对比嵌入前后的文件大小差异</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">练习打包PPT文件夹</div>
            <div class="step-card-desc">
                <ol>
                    <li>在桌面新建文件夹 <code>PPT打包练习</code></li>
                    <li>把你的PPT文件复制进去</li>
                    <li>如果PPT中有引用的图片/视频文件，也复制进去</li>
                    <li>右键文件夹 → <strong>发送到 → 压缩文件夹</strong>（生成.zip）</li>
                    <li>检查：压缩包大小是否合理（通常应小于200MB）</li>
                </ol>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 离线也能用云文档！</strong><br>
            WPS手机版支持<strong>"离线下载"</strong>功能：<br>
            在有Wi-Fi的时候，长按云文档中的文件 → 选择"下载到本地"。<br>
            这样即使没有网络（比如在飞机上、地铁上），你也能查看和编辑这个文件。<br>
            等恢复网络后，修改内容会自动同步回云端。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 多端同步的常见问题</strong><br>
            <strong>问题1：手机和电脑上的文件不一样？</strong><br>
            → 检查是否登录了<strong>同一个账号</strong><br>
            → 检查文件是否保存在<strong>云文档</strong>（而非本地）<br><br>
            <strong>问题2：两台电脑同时修改同一文件会怎样？</strong><br>
            → 云文档有<strong>冲突检测</strong>，会提示你选择保留哪个版本<br>
            → 建议：两人同时编辑时用上一课学的<strong>协作模式</strong><br><br>
            <strong>问题3：不小心在手机上改坏了文件？</strong><br>
            → 使用<strong>版本历史</strong>恢复到之前的版本（上一课学过）
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 文件命名的最佳实践</strong><br>
            多端同步后你可能会有很多PPT文件，良好的命名习惯很重要：<br>
            ✅ <code>11月运营周报_v3_终版.pptx</code><br>
            ✅ <code>双十一推广方案_2024.pptx</code><br>
            ❌ <code>新建演示文稿.pptx</code><br>
            ❌ <code>PPT(1)(2)(3).pptx</code><br><br>
            在云文档中也要<strong>建文件夹分类</strong>：<br>
            <code>我的云文档/</code><br>
            <code>├── 周报/</code><br>
            <code>├── 产品方案/</code><br>
            <code>├── 培训资料/</code><br>
            <code>└── 素材库/</code>
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 注意数据安全！</strong><br>
            • 含有<strong>公司机密</strong>的PPT，发送前要确认是否允许外发<br>
            • 云文档链接分享时，设置<strong>合适的权限</strong>（只读 vs 可编辑）<br>
            • 离职时记得<strong>清理个人云文档</strong>中的公司文件<br>
            • 不要在公共电脑上勾选"记住密码"
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: 'WPS多端同步的前提条件是什么？',
            options: [
                '所有设备连接同一个Wi-Fi',
                '所有设备登录同一个WPS账号',
                '所有设备安装相同版本的WPS',
                '需要购买WPS会员'
            ],
            answer: 1,
            explanation: '多端同步的核心前提是所有设备（电脑、手机、平板）登录同一个WPS账号。文件保存到云文档后，登录同一账号的所有设备都能自动获取最新版本。'
        },
        {
            type: 'single',
            question: '以下哪种方式最适合给客户发送PPT？',
            options: [
                '直接发.pptx文件，客户可以随意修改',
                '导出为PDF后发送，格式不变且不易修改',
                '发送云文档可编辑链接',
                '截图发过去'
            ],
            answer: 1,
            explanation: '给客户发送PPT最佳方式是导出为PDF——格式固定不会变乱，客户也无法轻易修改内容。发.pptx可能被修改或字体变化，云文档可编辑链接会有安全风险。'
        },
        {
            type: 'single',
            question: 'WPS演示遥控器功能的主要用途是什么？',
            options: [
                '在手机上制作PPT',
                '用手机当遥控器翻页放映PPT',
                '自动生成PPT',
                '将手机屏幕投射到电脑'
            ],
            answer: 1,
            explanation: 'WPS演示遥控器让手机变成PPT翻页遥控器，演讲者可以拿着手机自由走动翻页，还能在手机上查看备注，替代实体翻页笔。'
        },
        {
            type: 'judge',
            question: 'PPT中使用了特殊字体，发给对方后对方电脑上一定能正常显示。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！如果对方电脑上没有安装你使用的字体，PPT会自动替换为默认字体，排版可能变乱。解决方案：嵌入字体、使用系统通用字体、或导出为PDF。'
        },
        {
            type: 'multiple',
            question: '以下哪些操作可以在手机版WPS上完成？（多选）',
            options: [
                '查看PPT并左右滑动翻页',
                '修改PPT中的文字内容',
                '通过微信分享PPT文件',
                '制作复杂的3D动画效果'
            ],
            answer: [0, 1, 2],
            explanation: '手机WPS可以查看、简单编辑和分享PPT，但复杂的排版和动画制作在手机上支持有限，建议在电脑端完成。'
        },
        {
            type: 'single',
            question: '以下哪种做法可以减小PPT文件大小，方便通过微信发送？',
            options: [
                '添加更多动画效果',
                '压缩PPT中的图片',
                '增加更多幻灯片页数',
                '嵌入所有字体'
            ],
            answer: 1,
            explanation: '压缩图片是减小PPT文件大小最有效的方法。大量高清图片是文件体积过大的主要原因。在WPS中选中图片 → 图片工具 → 压缩图片 → 选择较低分辨率。'
        },
        {
            type: 'single',
            question: '将字体嵌入PPT文件会导致什么结果？',
            options: [
                '文件体积变小',
                '文件体积增大，但对方打开字体不会变',
                '字体变得更清晰',
                '动画效果变快'
            ],
            answer: 1,
            explanation: '嵌入字体会把字体数据打包进PPT文件，导致文件变大（每种字体增加1-5MB），但好处是对方即使没安装该字体也能正常显示。'
        },
        {
            type: 'single',
            question: '发现手机上的PPT和电脑上的不一样，最可能的原因是？',
            options: [
                'WPS版本不同',
                '手机屏幕太小导致显示异常',
                '两台设备登录了不同的WPS账号',
                '手机信号不好'
            ],
            answer: 2,
            explanation: '文件不同步最常见的原因是两台设备登录了不同的账号。确认方法：分别在手机和电脑的WPS中查看当前登录的账号信息，确保是同一个。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：实现PPT多端流转
            </div>
            <div class="practice-task-body">
                <p>完成以下多端同步全流程体验：</p>
                <ol>
                    <li>
                        <strong>电脑端操作</strong>
                        <ul>
                            <li>登录WPS账号，将一份PPT保存到云文档</li>
                            <li>尝试设置字体嵌入并保存</li>
                        </ul>
                    </li>
                    <li>
                        <strong>手机端操作</strong>
                        <ul>
                            <li>安装WPS手机版，登录同一账号</li>
                            <li>在云文档中找到并打开刚才的PPT</li>
                            <li>在手机上修改一处文字（如改日期），保存</li>
                        </ul>
                    </li>
                    <li>
                        <strong>验证同步</strong>
                        <ul>
                            <li>回到电脑端，刷新/重新打开文件，确认手机端的修改已同步</li>
                        </ul>
                    </li>
                    <li>
                        <strong>分享练习</strong>
                        <ul>
                            <li>从手机端生成一个"只读"分享链接</li>
                            <li>把链接发给一位同学，让对方在浏览器中打开确认能查看</li>
                        </ul>
                    </li>
                    <li>
                        <strong>打包练习</strong>
                        <ul>
                            <li>在电脑上创建一个PPT打包文件夹，将PPT和相关素材放入</li>
                            <li>压缩为.zip文件，检查大小是否合理</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试使用WPS演示遥控器（需要手机和电脑在同一Wi-Fi）</li>
                    <li>在手机上用"拍照插入"功能添加一张照片到PPT</li>
                    <li>浏览WPS稻壳商城，找3个免费的电商类模板收藏</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ WPS云文档多端同步的原理和操作<br>
            ✅ 手机WPS的安装、登录和基本使用<br>
            ✅ WPS演示遥控器功能<br>
            ✅ PPT字体嵌入和文件打包分发<br>
            ✅ 通过微信/钉钉等渠道分发PPT的最佳实践<br>
            ✅ WPS稻壳商城、PDF转PPT等特色功能<br><br>
            恭喜！"WPS特色功能"模块全部完成！下一模块我们进入<strong>"综合实战"</strong>，用前24课所学完成真实的职业场景项目！
        </div>
    `
};
