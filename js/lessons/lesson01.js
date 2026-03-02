/**
 * PPT学习站 - 第1课：演示文稿是什么
 * 文件路径: js/lessons/lesson01.js
 * 模块：初识WPS演示
 * 任务情境：认识PPT在电商工作中的作用
 */

window.lessonData = {

    // 任务情境
    scenario: '你刚入职一家跨境电商公司，老板让你下周做一个新品推广方案的汇报。你打开电脑，发现同事们都在用PPT做方案……等等，PPT到底是什么？它能做什么？别慌，今天我们就来彻底搞懂它！',

    // 知识讲解
    knowledge: `
        <h3>一、什么是演示文稿？</h3>
        <p>演示文稿（Presentation），俗称<strong>"PPT"</strong>，是一种用来<strong>展示信息、表达观点、汇报工作</strong>的电子文档。你可以把它想象成一本<strong>电子版的"翻页画册"</strong>——每一页叫做一张<strong>"幻灯片"</strong>（Slide），可以放文字、图片、视频、动画等各种内容。</p>
        
        <div class="tip-box tip-info">
            <strong>💡 生活类比：</strong>你去奶茶店，看到墙上的电子屏幕轮播着新品推荐——那其实就是一个演示文稿在自动播放！
        </div>

        <h3>二、演示文稿在电商工作中有多重要？</h3>
        <p>作为电商从业者，你几乎<strong>每天都会接触到PPT</strong>。来看看这些真实的工作场景：</p>
        
        <ul>
            <li><strong>🛒 产品推广方案</strong> —— 向老板汇报新品上架计划、推广策略</li>
            <li><strong>📊 数据分析报告</strong> —— 用图表展示店铺的销售额、转化率、客户画像</li>
            <li><strong>🤝 客户提案</strong> —— 给供应商或合作方展示合作方案</li>
            <li><strong>📋 工作周报/月报</strong> —— 总结本周/本月的运营情况</li>
            <li><strong>🎓 培训课件</strong> —— 给新员工培训平台操作流程</li>
            <li><strong>🏆 述职报告</strong> —— 年终总结，争取升职加薪</li>
        </ul>

        <div class="tip-box tip-warning">
            <strong>⚠️ 真相：</strong>在很多电商公司，<strong>PPT做得好不好，直接影响你的工作评价！</strong>同样的数据，会做PPT的人能讲得清晰有力，不会做的人只能念一堆数字。这就是差距！
        </div>

        <h3>三、常见的演示文稿软件</h3>
        <p>制作PPT的软件有好几个，下面是最常见的三个：</p>
        
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">软件</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">开发公司</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">文件格式</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>WPS 演示</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">金山办公（中国）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">免费、体积小、国产、有AI功能</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.pptx / .dps</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Microsoft PowerPoint</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">微软（美国）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">功能强大、行业标准</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.pptx / .ppt</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">Google Slides</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">谷歌（美国）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">在线协作、免费</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">在线/可导出</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-success">
            <strong>🎯 我们的选择：</strong>本课程使用 <strong>WPS 演示</strong> 进行教学。它免费、好用，而且是国产软件，在国内企业中使用非常广泛。WPS演示和PowerPoint的文件格式完全兼容，学会WPS，用PowerPoint也毫无压力！
        </div>

        <h3>四、演示文稿的基本组成</h3>
        <p>一个完整的PPT通常由以下部分组成：</p>
        
        <ul>
            <li><strong>🎬 封面页</strong> —— 标题、副标题、作者信息，就像书的封面</li>
            <li><strong>📋 目录页</strong> —— 告诉观众你要讲什么，像地图一样</li>
            <li><strong>📝 内容页</strong> —— 主体内容，可以有文字、图片、图表等</li>
            <li><strong>📊 数据页</strong> —— 专门展示数据的页面，用图表说话</li>
            <li><strong>🙏 结尾页</strong> —— 感谢观看、联系方式，留下好印象</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 举个例子：</strong>假设你要做一个"双十一店铺运营总结"PPT，结构大概是：<br>
            封面（标题+日期） → 目录 → 销售数据总览 → 爆款分析 → 客户反馈 → 存在问题 → 改进计划 → 感谢页<br>
            看，是不是很像你写作文的"总-分-总"结构？
        </div>

        <h3>五、好PPT的标准是什么？</h3>
        <p>很多同学以为PPT就是"把Word的内容复制粘贴上去"，这是一个<strong>超级大的误区</strong>！好的PPT应该做到：</p>
        
        <ul>
            <li><strong>🎯 内容精炼</strong> —— 每页只讲一个重点，不要密密麻麻全是字</li>
            <li><strong>🎨 视觉美观</strong> —— 配色协调、排版整齐、图片清晰</li>
            <li><strong>📖 逻辑清晰</strong> —— 有明确的结构和顺序，观众能跟上你的思路</li>
            <li><strong>👀 重点突出</strong> —— 关键信息一眼就能看到</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚫 反面教材：</strong>满屏都是小字 → 没人看；颜色花里胡哨 → 看得眼花；没有逻辑顺序 → 听不懂。记住：<strong>PPT是给观众看的，不是给自己看的！</strong>
        </div>
    `,

    // 操作步骤
    steps: `
        <p>这节课我们还不需要动手操作软件，但你可以先完成以下准备工作：</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">检查电脑是否安装了WPS Office</div>
            <div class="step-card-desc">
                <p>在电脑上查找"WPS Office"或"WPS 演示"程序：</p>
                <ul>
                    <li>Windows系统：点击左下角<strong>开始菜单</strong>，搜索"WPS"</li>
                    <li>如果找到了，说明已经安装好了 ✅</li>
                    <li>如果没有找到，请到 <strong>wps.cn</strong> 下载安装免费版</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">尝试打开WPS演示</div>
            <div class="step-card-desc">
                <p>找到WPS演示并双击打开，你会看到一个启动界面，里面有：</p>
                <ul>
                    <li><strong>新建空白演示</strong> —— 从零开始创建</li>
                    <li><strong>模板推荐</strong> —— WPS提供的各种漂亮模板</li>
                    <li><strong>最近打开</strong> —— 之前打开过的文件</li>
                </ul>
                <p>先不要操作，只看看界面就行，下节课我们会详细讲解。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">观察身边的PPT</div>
            <div class="step-card-desc">
                <p>在接下来的一周里，留意你身边出现的演示文稿：</p>
                <ul>
                    <li>老师上课的课件是不是PPT？</li>
                    <li>商场里的电子广告屏在播什么？</li>
                    <li>刷短视频时有没有看到PPT教程？</li>
                </ul>
                <p>观察它们的<strong>配色、排版、文字量</strong>，想想哪些做得好，哪些不好。</p>
            </div>
        </div>
    `,

    // 小贴士
    tips: `
        <div class="tip-box tip-info">
            <strong>💡 小知识：PPT和演示文稿的关系</strong><br>
            严格来说，"PPT"是微软PowerPoint的文件后缀名（.ppt），后来大家习惯用"PPT"来代指所有演示文稿软件做出来的文件。所以当别人说"做个PPT"的时候，用WPS演示做出来的也叫PPT，别纠结这个称呼 😄
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 易错点：PPT ≠ Word</strong><br>
            很多新手犯的第一个错误就是把PPT当成Word来用——一页塞满了文字。记住：<br>
            <strong>Word是用来"读"的，PPT是用来"看"和"讲"的。</strong><br>
            PPT上的文字应该是关键词和短句，详细内容由你口头来讲。
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 职场小秘密</strong><br>
            在电商行业，很多面试都会要求你"做一个PPT来展示你的运营方案"。如果你PPT做得好，面试官会觉得你<strong>有条理、有审美、会表达</strong>——这些都是电商岗位非常看重的能力。所以从现在开始学PPT，就是在为你的未来加分！
        </div>

        <div class="tip-box tip-info">
            <strong>💡 有趣的数据</strong><br>
            据统计，全球每天有超过<strong>3000万</strong>个PPT在被制作和展示。在中国，WPS的月活跃用户超过<strong>5亿</strong>。可以说，学好PPT就等于掌握了一个全民技能！
        </div>
    `,

    // 课后练习
    quiz: [
        {
            type: 'single',
            question: '演示文稿中，每一页被称为什么？',
            options: ['工作表', '文档页', '幻灯片', '画布'],
            answer: 2,
            explanation: '演示文稿中的每一页叫做"幻灯片"（Slide），就像一张一张的幻灯胶片一样可以逐页展示。'
        },
        {
            type: 'single',
            question: 'WPS演示是哪家公司开发的？',
            options: ['微软（Microsoft）', '谷歌（Google）', '金山办公（Kingsoft）', '苹果（Apple）'],
            answer: 2,
            explanation: 'WPS Office是中国金山办公软件公司开发的办公套件，WPS演示是其中负责制作演示文稿的组件。'
        },
        {
            type: 'single',
            question: '以下哪个不是演示文稿在电商工作中的常见用途？',
            options: ['产品推广方案汇报', '店铺数据分析报告', '写一篇3000字的产品描述', '年终述职报告'],
            answer: 2,
            explanation: '写长篇文字内容适合用Word（文字处理软件），不适合用PPT。PPT更适合做汇报、展示、总结类的工作。'
        },
        {
            type: 'judge',
            question: '好的PPT应该每一页都写满文字，越详细越好。',
            options: ['对', '错'],
            answer: 1,
            explanation: '这是错误的！好的PPT应该内容精炼，每页只讲一个重点。PPT是给观众"看"的，不是用来"读"的，详细内容应该由演讲者口头说明。'
        },
        {
            type: 'single',
            question: '一个完整的PPT通常不包含以下哪个部分？',
            options: ['封面页', '目录页', '代码编辑页', '结尾页'],
            answer: 2,
            explanation: '一个标准的PPT通常包含封面页、目录页、内容页、数据页和结尾页。"代码编辑页"不是PPT的标准组成部分。'
        },
        {
            type: 'multiple',
            question: '以下哪些是好PPT的标准？（多选）',
            options: ['内容精炼，每页一个重点', '颜色越多越漂亮', '逻辑清晰有条理', '重点信息突出醒目'],
            answer: [0, 2, 3],
            explanation: '好PPT的标准是：内容精炼、视觉美观（配色协调而非颜色越多越好）、逻辑清晰、重点突出。颜色过多反而会让PPT显得杂乱。'
        },
        {
            type: 'single',
            question: 'WPS演示文稿的默认保存格式是什么？',
            options: ['.doc', '.xls', '.pptx', '.pdf'],
            answer: 2,
            explanation: 'WPS演示文稿默认保存为 .pptx 格式（也支持保存为 .dps 格式）。.doc是文字文档格式，.xls是电子表格格式，.pdf是通用文档格式。'
        },
        {
            type: 'judge',
            question: 'WPS演示和Microsoft PowerPoint的文件可以互相打开。',
            options: ['对', '错'],
            answer: 0,
            explanation: '正确！WPS演示和PowerPoint都支持 .pptx 格式，它们的文件可以互相兼容打开。学会WPS演示，也等于学会了PowerPoint的基本操作。'
        }
    ],

    // 实战任务
    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：观察与思考
            </div>
            <div class="practice-task-body">
                <p>虽然我们还没有开始动手做PPT，但可以先培养"PPT思维"。请完成以下任务：</p>
                <ol>
                    <li>
                        <strong>找到3个PPT的使用场景</strong><br>
                        在你的生活中找到至少3个用到演示文稿的场景（比如老师课件、商场广告屏、产品发布会等），把它们记录下来。
                    </li>
                    <li>
                        <strong>构思一个PPT大纲</strong><br>
                        假设你要做一个<strong>"自我介绍"</strong>PPT（下节课会用到），先在纸上或手机备忘录里列出你打算放哪些内容：
                        <ul>
                            <li>第1页：封面——你的名字和一句个性签名</li>
                            <li>第2页：基本信息——家乡、爱好、特长</li>
                            <li>第3页：我的电商梦想——你为什么选择电商专业</li>
                            <li>第4页：我的目标——这学期想学会什么</li>
                            <li>第5页：结尾——谢谢大家 + 联系方式</li>
                        </ul>
                    </li>
                    <li>
                        <strong>思考一个问题</strong><br>
                        如果你是老板，看到员工拿出一份做得很丑的PPT和一份做得很漂亮的PPT，你的第一反应分别是什么？想想为什么PPT的"颜值"也很重要。
                    </li>
                </ol>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 恭喜你！</strong>完成本课学习后，你已经了解了演示文稿的基本概念。下一课我们将深入认识WPS演示的操作界面，正式开始动手制作PPT！
        </div>
    `
};