/**
 * PPT学习站 - 第26课：综合实战二——电商产品发布会演示PPT
 * 文件路径: js/lessons/lesson26.js
 * 模块：综合实战
 * 任务情境：制作一套可以在新品发布会上使用的完整演示PPT
 */

window.lessonData = {

    scenario: '飞跃跨境电商公司要举办一场新品发布会，向合作伙伴和媒体介绍即将上线的新产品线——"飞跃Pro"系列无线耳机。你负责制作这场发布会的完整演示PPT。不同于日常汇报，发布会PPT追求视觉冲击力和情感共鸣，要让合作商看完就想下单！今天我们来学发布会PPT的制作思路和技巧。',

    knowledge: `
        <h3>一、发布会PPT vs 汇报PPT的区别</h3>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">维度</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">汇报PPT（月报/数据）</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">发布会PPT（产品展示）</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">目的</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">传递信息、让决策者了解现状</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">打动观众、激发购买/合作欲望</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">内容重心</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据、趋势、分析</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">产品价值、情感共鸣、愿景</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">设计风格</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">简洁、专业、逻辑清晰</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">视觉冲击、精美图片、情感化</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">文字用量</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">较多，信息密度高</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">极少，每页不超过10个字</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">图片使用</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">图表为主，配图为辅</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">高质量产品图为核心</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">动画</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">少量，不干扰内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">精心设计，制造惊喜感</td>
                </tr>
            </tbody>
        </table>

        <h3>二、发布会PPT的黄金结构（Steve Jobs公式）</h3>
        <p>苹果发布会一直是PPT设计的标杆，其结构有规律可循：</p>

        <ol>
            <li><strong>情境设置（Why）</strong>：讲一个用户痛点，让观众产生共鸣</li>
            <li><strong>现有方案的不足</strong>：说明现有产品/市场的问题</li>
            <li><strong>揭晓产品（Solution）</strong>："今天，我们带来了……"</li>
            <li><strong>核心特性展示</strong>：1-3个最重要的特点，每个特点占1-2页</li>
            <li><strong>使用场景</strong>：展示产品在真实生活中的使用场景</li>
            <li><strong>价格与购买信息</strong>：最后才展示价格，制造期待</li>
            <li><strong>"One more thing"</strong>：一个惊喜/附加价值</li>
            <li><strong>号召行动（CTA）</strong>："立即预订""扫码了解更多"</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 发布会PPT的情感节奏</strong><br>
            优秀的发布会PPT有情感节奏：<br>
            • <strong>开场</strong>：制造共鸣（"你有没有遇到过这样的问题？"）<br>
            • <strong>铺垫</strong>：建立期待（"我们花了2年时间研究……"）<br>
            • <strong>高潮</strong>：产品揭晓（灯光效果/大屏展示/震撼图片）<br>
            • <strong>深化</strong>：卖点展开（让观众越来越想要）<br>
            • <strong>收尾</strong>：行动呼吁（给他们一个理由立刻行动）
        </div>

        <h3>三、发布会PPT的设计技巧</h3>

        <h4>1. 深色背景的运用</h4>
        <p>发布会PPT常用<strong>深色（黑色/深灰）背景</strong>，原因：</p>
        <ul>
            <li>深色背景让产品图片更突出、更高端</li>
            <li>在大屏幕上，深色背景比白色背景更护眼</li>
            <li>白色字在深色背景上非常醒目</li>
            <li>代表感：苹果、小米发布会都用深色背景</li>
        </ul>

        <h4>2. 极简文字原则</h4>
        <ul>
            <li><strong>每页不超过1个核心信息</strong></li>
            <li>文字不超过10-15个字</li>
            <li>字号要大（48pt起步，关键词72-96pt）</li>
            <li>文字留白要足够，不要填满整页</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 发布会文字样式举例</strong><br>
            <strong>错误：</strong>（密密麻麻写满卖点）<br>
            "飞跃Pro系列无线耳机采用最新一代降噪技术，可有效降低环境噪音，支持50小时长续航，内置高通芯片，音质达到Hi-Fi级别，重量仅28克，佩戴舒适不夹耳，兼容所有蓝牙5.0设备……"<br><br>
            <strong>正确：</strong>（每页一句话）<br>
            页1："听见更好的自己"（产品slogan，大字）<br>
            页2："50小时续航" + 产品大图<br>
            页3："主动降噪，隔绝世界的喧嚣"<br>
            页4："仅重 28g"
        </div>

        <h4>3. 图片的力量</h4>
        <p>发布会PPT的核心是<strong>视觉冲击</strong>，图片质量至关重要：</p>
        <ul>
            <li><strong>产品主图</strong>：要有专业的白底或黑底产品图，突出细节</li>
            <li><strong>场景图</strong>：真实人物使用产品的生活场景（让观众代入）</li>
            <li><strong>对比图</strong>：与竞品或旧产品的对比（突出进步）</li>
            <li>图片应<strong>全出血</strong>（铺满整页），不要留白边框</li>
        </ul>

        <h4>4. 精心设计的动画</h4>
        <p>发布会PPT的动画比普通PPT更精致：</p>
        <ul>
            <li><strong>产品揭晓：</strong>产品图从暗到亮（淡入）或从小到大（缩放）</li>
            <li><strong>数字冲击：</strong>关键数字用"缩放+放大强调"组合动画</li>
            <li><strong>特性展示：</strong>每个特点配合平滑切换，制造"飞入"效果</li>
            <li><strong>切换时间：</strong>比汇报PPT更慢（0.7-1.2秒），更有质感</li>
        </ul>

        <h3>四、本次实战的产品信息</h3>
        <div style="padding: var(--space-lg); background: var(--bg-code); border-radius: var(--radius-md); margin: var(--space-md) 0;">
            <p style="font-weight:700; margin-bottom:var(--space-md);">🎧 飞跃Pro系列无线耳机产品信息</p>
            <p><strong>型号：</strong>飞跃Pro Max 无线降噪耳机</p>
            <p><strong>核心卖点：</strong></p>
            <ul>
                <li>🔇 <strong>ANC主动降噪</strong>：降噪深度达-40dB，行业领先</li>
                <li>⚡ <strong>50小时续航</strong>：单次充电，整整两周使用</li>
                <li>🎵 <strong>Hi-Fi音质</strong>：40mm铍振膜单元，发烧友级别音质</li>
                <li>🦋 <strong>仅重28克</strong>：比同类产品轻30%，久戴不累</li>
                <li>📱 <strong>双设备同连</strong>：电脑和手机同时连接，一键切换</li>
            </ul>
            <p><strong>目标价格：</strong>￥599（建议零售价）</p>
            <p><strong>合作商批发价：</strong>￥380（起批量50台）</p>
            <p><strong>产品颜色：</strong>星空黑、月光白、珊瑚橙</p>
            <p><strong>上市时间：</strong>2025年1月15日</p>
            <p><strong>目标用户：</strong>25-35岁都市白领，追求品质生活，有通勤/远程工作需求</p>
        </div>

        <h3>五、合作商版发布会PPT的特殊考量</h3>
        <p>面向合作商（渠道商、代理商）的发布会PPT，与面向消费者的发布会略有不同，需要额外包含：</p>
        <ul>
            <li><strong>市场机会分析</strong>：这个市场有多大，合作商能赚多少钱</li>
            <li><strong>利润空间展示</strong>：批发价 vs 零售价，利润率</li>
            <li><strong>营销支持</strong>：公司提供哪些推广资源/物料</li>
            <li><strong>合作条件</strong>：起批量、账期、退货政策</li>
            <li><strong>合作行动</strong>：如何开始合作（联系方式、签约流程）</li>
        </ul>
    `,

    steps: `
        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">规划发布会PPT的内容大纲</div>
            <div class="step-card-desc">
                <p>参考以下大纲，根据产品信息完善细节：</p>
                <ol>
                    <li>封面：飞跃Pro Max | 产品图（全屏）</li>
                    <li>市场痛点：现有耳机的3大问题（画面感强）</li>
                    <li>揭晓产品：产品首秀大图（黑底，一句Slogan）</li>
                    <li>核心特性1：ANC降噪（-40dB）</li>
                    <li>核心特性2：50小时续航</li>
                    <li>核心特性3：Hi-Fi音质</li>
                    <li>特性总览：5大卖点一页汇总</li>
                    <li>使用场景：通勤、居家、出差三个场景图</li>
                    <li>市场机会：无线耳机市场规模（合作商关注）</li>
                    <li>合作利润：批发价/零售价/毛利率</li>
                    <li>公司支持：营销物料、推广资源</li>
                    <li>价格与上市：599元 | 1月15日</li>
                    <li>合作行动：联系方式 + 扫码了解详情</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">设置黑色背景母版</div>
            <div class="step-card-desc">
                <ol>
                    <li>新建PPT，进入母版视图</li>
                    <li>主母版背景设为<strong>纯黑色（#000000）</strong>或<strong>深灰（#1A1A1A）</strong></li>
                    <li>标题占位符字体：白色，微软雅黑 Bold</li>
                    <li>在右下角放置小白色公司Logo（细小，不抢眼）</li>
                    <li>退出母版视图</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">制作封面和产品揭晓页</div>
            <div class="step-card-desc">
                <ol>
                    <li><strong>封面</strong>：全黑背景，中央白色大字"飞跃Pro Max"，副标题"重新定义你的听觉世界"，底部小字上市日期</li>
                    <li><strong>痛点页</strong>：列出3个用户痛点，用图标配合（"电量不够""噪音太吵""太重不舒服"）</li>
                    <li><strong>揭晓页</strong>：全页产品大图（黑底产品图），加大字Slogan："听见更好的自己"（白色）</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">制作核心特性页</div>
            <div class="step-card-desc">
                <p>每个核心特性一页，采用极简风格：</p>
                <ol>
                    <li><strong>降噪页</strong>：超大字号"-40dB"，下方"行业领先的主动降噪深度"，配产品使用图</li>
                    <li><strong>续航页</strong>："50小时续航"大字，下方配一个简单的电量对比图（飞跃Pro vs 竞品）</li>
                    <li><strong>音质页</strong>："Hi-Fi级别" + 产品内部振膜细节图</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">制作商务合作页</div>
            <div class="step-card-desc">
                <p>这部分针对合作商，风格可以稍微"商务化"：</p>
                <ol>
                    <li><strong>市场机会页</strong>：无线耳机市场增长图（柱状图），突出"年增长率35%"</li>
                    <li><strong>利润空间页</strong>：清晰展示：批发价380元 → 零售价599元 → 毛利润219元/台（36.6%）</li>
                    <li><strong>公司支持页</strong>：列出公司提供的：推广物料/直播支持/线上广告/培训资源</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">添加精心设计的动画</div>
            <div class="step-card-desc">
                <p>发布会动画要有质感：</p>
                <ul>
                    <li><strong>封面产品文字</strong>：淡入，持续时间1秒（慢一点，有大片感）</li>
                    <li><strong>产品揭晓图</strong>：缩放进入，1.2秒（从小变大，戏剧感）</li>
                    <li><strong>特性数字</strong>：缩放进入 + 放大强调，制造冲击</li>
                    <li><strong>切换效果</strong>：全部用"平滑"切换（0.8秒），大气流畅</li>
                    <li><strong>三色版本展示</strong>：三页分别展示三个颜色，平滑切换</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">制作结尾和行动号召页</div>
            <div class="step-card-desc">
                <ol>
                    <li><strong>价格揭晓页</strong>：黑底，大字"¥599"出现（缩放动画），下方"1月15日全面上市"</li>
                    <li><strong>合作行动页</strong>：联系方式（邮件/电话）+ 二维码（可以用测试二维码图片代替），"扫码立即预订"</li>
                    <li><strong>致谢页</strong>："感谢聆听" + 产品大图 + 公司Logo</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">整体审阅与优化</div>
            <div class="step-card-desc">
                <ol>
                    <li>按 <span class="kbd">F5</span> 全屏放映，从头到尾看一遍，感受整体节奏</li>
                    <li>检查：深色背景上的文字是否清晰？图片是否够高清？动画是否流畅？</li>
                    <li>调整每页的"空白量"——发布会PPT应该有大量留白，不要塞满元素</li>
                    <li>检查动画节奏是否合适（太快显得廉价，太慢显得拖沓）</li>
                    <li>按 <span class="kbd">Esc</span> 修改，再次放映，直到满意</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">导出多个版本</div>
            <div class="step-card-desc">
                <ol>
                    <li><strong>现场版</strong>：保留动画的.pptx，大会现场用</li>
                    <li><strong>发送版</strong>：导出PDF，发给无法到场的合作商</li>
                    <li><strong>宣传视频</strong>：导出MP4（1080p，每页5秒），发到社交媒体预热</li>
                    <li><strong>云端分享</strong>：保存到云文档，生成只读链接发给合作商</li>
                </ol>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-success">
            <strong>🌟 发布会PPT的最高境界</strong><br>
            最好的发布会PPT，是让观众在演讲结束的瞬间就产生"我要拥有它"的欲望。达到这个目标的关键：<br>
            • <strong>场景代入</strong>：让他们想象自己在使用这个产品<br>
            • <strong>情感共鸣</strong>：产品解决了他们真实存在的痛苦<br>
            • <strong>视觉震撼</strong>：精美的图片让产品显得高端可信<br>
            • <strong>简洁有力</strong>：每页只说一件事，说透了再翻页
        </div>

        <div class="tip-box tip-info">
            <strong>💡 没有产品实物图怎么办？</strong><br>
            在没有真实产品图的情况下，可以：<br>
            • 从稻壳儿/免费图库（Unsplash、Pexels）找相似类别的高质量图片替代<br>
            • 用WPS AI生成产品描述，配合相关风格图<br>
            • 用WPS插入形状，自己绘制产品示意图（简单外形即可）<br>
            • 本次练习中，可以用手机/耳机类的免费图片作为占位图
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 发布会PPT的三大致命失误</strong><br>
            1. <strong>文字太多，每页写满</strong>：这是汇报PPT的风格，不是发布会风格<br>
            2. <strong>图片质量差、模糊</strong>：模糊的图片让产品显得廉价<br>
            3. <strong>所有动画堆在一起，眼花缭乱</strong>：发布会动画要精选，每个动画都要有意义<br><br>
            记住：发布会PPT宁可什么都不放，也不要放了又乱。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 深色背景的打印问题</strong><br>
            发布会PPT通常用于大屏演示，效果极佳。但如果需要打印发给合作商，深色背景会浪费大量墨水，且打印出来效果差。<br><br>
            解决方案：准备两个版本——一个深色背景的演示版，一个白色背景的打印/PDF发送版。
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '发布会PPT与数据汇报PPT最大的区别是：',
            options: ['页数不同', '发布会PPT追求视觉冲击和情感共鸣，汇报PPT追求清晰的信息传递', '发布会PPT不需要数据', '发布会PPT只能用深色背景'],
            answer: 1,
            explanation: '发布会PPT的核心目标是打动观众、激发购买/合作欲望，因此追求视觉冲击、情感共鸣、极简设计。数据汇报PPT则以清晰传递信息为主要目标，注重逻辑和数据可视化。'
        },
        {
            type: 'single',
            question: '发布会PPT中，每页文字的推荐数量是：',
            options: ['越多越好，内容丰富', '不超过100字', '不超过10-15个字，极简原则', '和幻灯片备注文字一样多'],
            answer: 2,
            explanation: '发布会PPT遵循极简文字原则：每页不超过10-15个字，大字号，大量留白。文字少才能让图片和信息足够突出，产生视觉冲击。'
        },
        {
            type: 'single',
            question: '面向合作商的产品发布会PPT，相比面向消费者的版本，应该额外包含：',
            options: ['更多的产品参数表', '利润空间、市场机会、合作条件等商务信息', '更炫的动画效果', '更多的明星代言图片'],
            answer: 1,
            explanation: '合作商关心的是商业价值，因此面向合作商的发布会PPT需要额外包含：市场规模和机会、批发价/零售价/利润率、公司提供的营销支持、合作条件（起批量、账期）等商务信息。'
        },
        {
            type: 'judge',
            question: '发布会PPT的动画效果越多越华丽，越能打动观众。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！发布会PPT的动画应该精选、有质感，而不是越多越好。过多的动画会让观众眼花缭乱，分散注意力，反而降低品牌感。每一个动画都应该有设计意图，起到强调的作用。'
        },
        {
            type: 'multiple',
            question: '发布会PPT应该包含哪些内容模块？（多选）',
            options: ['用户痛点/需求', '产品揭晓和核心特性', '价格和购买/合作信息', '行动号召（CTA）'],
            answer: [0, 1, 2, 3],
            explanation: '完整的发布会PPT应该包括：情境设置和用户痛点（引发共鸣）、产品揭晓和核心特性（展示价值）、价格信息（消除顾虑）、行动号召（促使下单/合作）。这四个模块缺一不可。'
        },
        {
            type: 'single',
            question: '发布会PPT常用深色（黑色/深灰）背景的原因是：',
            options: ['黑色最便宜，节省墨水', '深色背景让产品图更突出，在大屏幕上更护眼，有高端感', '深色背景文字更多看起来更有内容', '只是跟苹果学的，没有实际原因'],
            answer: 1,
            explanation: '深色背景在发布会中的优势：产品图片更突出（尤其是亮色/白色产品）、在大屏幕下比白背景更护眼、白色文字在深色背景上非常醒目、整体传达出高端、专业的品牌感。'
        },
        {
            type: 'single',
            question: '发布会PPT中，价格信息应该在哪里展示？',
            options: ['封面就展示，开门见山', '第二页展示，让观众有心理准备', '在展示了所有卖点之后才揭晓价格', '不在PPT上展示，口头说'],
            answer: 2,
            explanation: '优秀的发布会遵循"价值先行、价格殿后"原则：先用大量篇幅展示产品的价值（卖点、场景、情感），等观众都认为"这很值"之后，才揭晓价格。这样观众对价格的接受度更高。'
        },
        {
            type: 'judge',
            question: '完成一份发布会PPT后，应该同时准备演示版（.pptx）、发送版（PDF）和宣传视频（MP4）三个版本。',
            options: ['对', '错'],
            answer: 0,
            explanation: '正确！不同场景需要不同格式：演示版含动画适合现场投放，PDF版格式固定适合发送给未到场的合作商，MP4视频版适合发到社交媒体做预热宣传。提前准备好多个版本是专业运营人员的良好习惯。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 综合实战：完成飞跃Pro发布会PPT
            </div>
            <div class="practice-task-body">
                <p>完成本课最终实战项目——制作完整的"飞跃Pro Max"产品发布会PPT：</p>

                <p><strong>基础要求（必做）：</strong></p>
                <ol>
                    <li>页数12-16页，完整结构（痛点→揭晓→卖点→场景→商务→行动）</li>
                    <li>深色背景设计（黑色或深灰）</li>
                    <li>每页文字不超过15个字（极简原则）</li>
                    <li>包含至少3个高质量大图（可用免费素材图）</li>
                    <li>至少3个精心设计的动画（产品揭晓、价格揭晓、CTA按钮等）</li>
                    <li>全程使用"平滑"切换效果</li>
                    <li>完成演示版+PDF版两个文件</li>
                </ol>

                <p><strong>进阶要求（加分项）：</strong></p>
                <ul>
                    <li>封面使用全出血大图背景（产品图铺满整页）</li>
                    <li>制作三色版本对比页（平滑切换体现颜色变换）</li>
                    <li>导出MP4宣传视频（每页5秒，背景音乐可选）</li>
                    <li>添加备注提词（站在发布会演讲者的角度写）</li>
                    <li>进行一次完整排练（控制在10分钟内）</li>
                    <li>对比：把PPT改为白色背景版本，观察两种背景的效果差异</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎊 恭喜你完成了PPT学习站全部26课！</strong><br><br>
            回顾一下你的学习历程：<br>
            ✅ <strong>基础操作</strong>（第1-5课）：界面熟悉、文字图片基础<br>
            ✅ <strong>设计进阶</strong>（第6-10课）：色彩搭配、版式布局、数据图表<br>
            ✅ <strong>高效制作</strong>（第11-15课）：对齐规范、素材处理、专业细节<br>
            ✅ <strong>动画与切换</strong>（第16-18课）：切换效果、元素动画、演讲准备<br>
            ✅ <strong>放映与输出</strong>（第19-20课）：演讲技巧、多格式导出<br>
            ✅ <strong>WPS特色功能</strong>（第21-24课）：AI、云文档、模板、母版<br>
            ✅ <strong>综合实战</strong>（第25-26课）：数据汇报、产品发布<br><br>
            你已经具备了独立完成职场任何PPT项目的能力，加油！🚀
        </div>
    `
};
