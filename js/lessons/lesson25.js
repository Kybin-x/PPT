/**
 * PPT学习站 - 第25课：综合实战一——电商运营月度数据汇报PPT
 * 文件路径: js/lessons/lesson25.js
 * 模块：综合实战
 * 任务情境：独立制作一份专业的月度数据汇报PPT
 */

window.lessonData = {

    scenario: '恭喜你完成了前24课的学习！现在是综合实战时间。你刚入职飞跃跨境电商有限公司的运营部，主管布置了第一个任务："这是上个月的运营数据，你整理一份月度汇报PPT，下周一部门例会上给大家讲一下，15分钟。要求：数据清晰、图表直观、专业规范。"这是你展示技能的机会，加油！',

    knowledge: `
        <h3>一、月度汇报PPT的标准结构</h3>
        <p>一份专业的月度数据汇报PPT，通常遵循以下结构：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">章节</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">内容</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">参考页数</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">建议时间</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">封面</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题、汇报人、日期</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">30秒</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">核心数据概览</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">3-5个最重要的KPI指标</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1-2页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">2-3分钟</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">销售数据分析</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">GMV、订单量、转化率趋势</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">2-3页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">4-5分钟</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">品类/渠道分析</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">各品类销售占比、各渠道贡献</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1-2页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">2-3分钟</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">问题与洞察</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据背后的原因分析</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1-2页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">2分钟</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">下月计划</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">目标、策略、重点行动</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1-2页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">2分钟</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">结尾</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">总结/致谢/提问</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1页</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">30秒</td>
                </tr>
            </tbody>
        </table>

        <h3>二、数据汇报PPT的设计原则</h3>

        <h4>1. 数据可视化优先</h4>
        <ul>
            <li>趋势用<strong>折线图</strong>（如月销售额变化）</li>
            <li>占比用<strong>饼图或环形图</strong>（如品类销售占比）</li>
            <li>比较用<strong>柱状图</strong>（如各渠道对比）</li>
            <li>排名用<strong>条形图</strong>（如热销产品排行）</li>
        </ul>

        <h4>2. 重要数字要大、醒目</h4>
        <ul>
            <li>核心KPI：用超大字号（48-80pt），配合简短说明</li>
            <li>同比增减：用绿色/红色箭头直观标注</li>
            <li>关键结论：用高亮色块或加粗字体强调</li>
        </ul>

        <h4>3. "一页一主题"原则</h4>
        <ul>
            <li>每页PPT只讲一件事</li>
            <li>标题就是结论（不是话题，而是观点）</li>
            <li>错误标题："销售数据" → 正确标题："10月销售额同比增长23%，超额完成目标"</li>
        </ul>

        <div class="tip-box tip-success">
            <strong>🎯 汇报标题的写法</strong><br>
            标题应该是<strong>结论句</strong>，而不仅仅是话题词：<br>
            ❌ "各渠道数据" <br>
            ✅ "直播渠道贡献占比首次超过60%，成为最大增长驱动力"<br><br>
            ❌ "用户行为分析"<br>
            ✅ "移动端下单比例达85%，PC端持续下降"<br><br>
            有结论的标题让听众在看到图表之前就知道重点，大大提升沟通效率。
        </div>

        <h3>三、综合实战任务数据</h3>
        <p>以下是本次实战任务的基础数据（飞跃跨境电商2024年10月运营数据）：</p>

        <div style="padding: var(--space-lg); background: var(--bg-code); border-radius: var(--radius-md); margin: var(--space-md) 0;">
            <p style="font-weight:700; margin-bottom:var(--space-md);">📊 10月运营核心数据</p>
            <p>• 总GMV：<strong>428万元</strong>（上月385万元，同比去年10月增长23%）</p>
            <p>• 订单量：<strong>12,640单</strong>（上月11,200单）</p>
            <p>• 客单价：<strong>338元</strong>（上月343元，小幅下降）</p>
            <p>• 转化率：<strong>3.8%</strong>（上月3.5%）</p>
            <p>• 退货率：<strong>6.2%</strong>（上月8.1%，明显改善）</p>
            <p>• 新客占比：<strong>32%</strong>（上月28%）</p>
        </div>

        <div style="padding: var(--space-lg); background: var(--bg-code); border-radius: var(--radius-md); margin: var(--space-md) 0;">
            <p style="font-weight:700; margin-bottom:var(--space-md);">📦 品类销售占比（10月）</p>
            <p>• 服装类：45%</p>
            <p>• 电子配件：28%</p>
            <p>• 家居用品：15%</p>
            <p>• 美妆个护：12%</p>
        </div>

        <div style="padding: var(--space-lg); background: var(--bg-code); border-radius: var(--radius-md); margin: var(--space-md) 0;">
            <p style="font-weight:700; margin-bottom:var(--space-md);">📱 渠道贡献（10月）</p>
            <p>• 直播带货：62%（↑ 比上月增加8个百分点）</p>
            <p>• 平台自然流量：21%</p>
            <p>• 付费广告：11%</p>
            <p>• 其他：6%</p>
        </div>

        <h3>四、汇报中如何描述数据</h3>
        <p>讲数据时，要做到"数据+解读+影响"三步走：</p>

        <h4>示例</h4>
        <p><strong>❌ 只讲数据：</strong>"10月GMV是428万元。"</p>
        <p><strong>✅ 数据+解读+影响：</strong>"10月GMV达到428万元，比上月增长11%，同比去年10月增长23%。这主要得益于双十一预热活动的带动，也说明我们的直播策略调整起到了效果。按照这个趋势，双十一当月GMV有望突破600万元。"</p>

        <div class="tip-box tip-warning">
            <strong>⚠️ 汇报常见失误</strong><br>
            1. <strong>只念数字，不给解读</strong>：听众知道数字，不知道意义<br>
            2. <strong>把所有数据都放进PPT</strong>：信息过载，听众不知道关注什么<br>
            3. <strong>不提原因</strong>：数据好了/差了，为什么？没有原因分析等于没有汇报<br>
            4. <strong>没有结论和建议</strong>：汇报完让听众自己判断，不够专业
        </div>
    `,

    steps: `
        <p>接下来，按照以下步骤独立完成月度汇报PPT的制作。这是一个完整的综合实战，全程运用你前24课所学的技能。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">规划内容大纲（10分钟）</div>
            <div class="step-card-desc">
                <p>在纸上或新建文档中，先写出PPT的大纲：</p>
                <ol>
                    <li>封面：月度数据汇报 | 汇报人：XXX | 2024年11月</li>
                    <li>核心KPI速览：GMV、订单量、转化率、退货率（4个指标一页）</li>
                    <li>销售趋势分析：本月GMV同比增长23%（折线图）</li>
                    <li>品类销售占比（饼图）</li>
                    <li>渠道贡献分析：直播占比超60%（柱状图）</li>
                    <li>亮点与问题分析（文字分析页）</li>
                    <li>11月工作计划（重点目标和行动）</li>
                    <li>结尾：感谢/提问</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">选择或应用模板（10分钟）</div>
            <div class="step-card-desc">
                <p>两种方式选其一：</p>
                <ul>
                    <li><strong>方式A：使用上节课制作的公司母版模板</strong>（推荐）从.potx模板新建</li>
                    <li><strong>方式B：从稻壳儿选择商务数据风格模板</strong>搜索关键词："数据汇报 商务 蓝色"</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">制作封面和KPI概览页（15分钟）</div>
            <div class="step-card-desc">
                <p>KPI概览页要求：</p>
                <ul>
                    <li>4个核心指标：GMV 428万、订单 12640单、转化率 3.8%、退货率 6.2%</li>
                    <li>每个指标下方标注同比/环比变化（如"↑23%" 用绿色）</li>
                    <li>用4个等大的色块或卡片布局，整齐排列</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">制作数据图表（20分钟）</div>
            <div class="step-card-desc">
                <p>制作以下3个图表：</p>
                <ol>
                    <li><strong>月GMV趋势折线图</strong>：展示7-10月的GMV变化（可以虚构1-9月数据）</li>
                    <li><strong>品类饼图/环形图</strong>：服装45%、电子28%、家居15%、美妆12%</li>
                    <li><strong>渠道柱状图</strong>：直播62%、自然流量21%、付费广告11%、其他6%</li>
                </ol>
                <p>要点：图表要有标题（结论句）、颜色与PPT主色调一致、图表内数字清晰可读。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">制作分析和计划页（15分钟）</div>
            <div class="step-card-desc">
                <p>亮点与问题分析页：</p>
                <ul>
                    <li>✅ 亮点：退货率明显改善（-1.9%）；直播渠道快速增长；新客比例提升</li>
                    <li>⚠️ 问题：客单价小幅下降；部分品类增速放缓</li>
                    <li>💡 建议：加大直播投入；提升电子配件品类推广</li>
                </ul>
                <p>11月工作计划页：目标GMV 550万（冲双十一）+ 3项重点策略</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">添加动画和切换效果（10分钟）</div>
            <div class="step-card-desc">
                <ul>
                    <li>全局切换：淡出，0.5秒</li>
                    <li>KPI数字：缩放进入动画（单击时触发，依次出现）</li>
                    <li>图表：淡入进入（单击时触发）</li>
                    <li>分析要点：逐条浮入（上一动画之后，延迟0.2秒）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">添加备注，进行排练计时（10分钟）</div>
            <div class="step-card-desc">
                <ul>
                    <li>每页备注：写2-3条提词要点和过渡语</li>
                    <li>使用排练计时功能进行一次完整排练</li>
                    <li>确认总时长在12-15分钟内</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">导出备份并最终检查</div>
            <div class="step-card-desc">
                <ul>
                    <li>全屏放映，检查所有页面效果</li>
                    <li>检查：有无错别字？图表颜色统一吗？动画顺序正确吗？</li>
                    <li>导出PDF版本作为备份</li>
                    <li>保存到云文档（可选）</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-success">
            <strong>🌟 月度汇报PPT的专业加分项</strong><br>
            • <strong>封面加汇报日期</strong>（不只是年月，要有具体日期）<br>
            • <strong>图表都有数据来源标注</strong>（即使是内部数据，也写"来源：运营系统"）<br>
            • <strong>核心数字超大字号</strong>（KPI卡片上的数字要比正文大3倍以上）<br>
            • <strong>颜色编码一致</strong>（增长用绿色，下降用红色，整份PPT中保持一致）<br>
            • <strong>结论页有"下一步行动"</strong>（汇报结束要有具体的行动计划，不能只谈问题）
        </div>

        <div class="tip-box tip-info">
            <strong>💡 如何处理"数据不好看"的情况</strong><br>
            数据有时候不好看，但汇报时不能逃避。专业的处理方法：<br>
            1. <strong>正视问题</strong>：坦承数据没有达到目标<br>
            2. <strong>给出原因</strong>：是外部环境影响，还是内部执行问题？<br>
            3. <strong>展示行动</strong>：你已经采取了/计划采取什么措施？<br>
            4. <strong>给出预期</strong>：什么时候能恢复正轨？<br><br>
            能清晰分析坏数据并提出改进方案，才是真正的专业运营人员。
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 汇报前30分钟做什么？</strong><br>
            1. 打印一份备注页（以防设备出问题）<br>
            2. 把文件发邮件给自己（云端备份）<br>
            3. 在目标电脑上打开测试一遍<br>
            4. 关闭手机通知，设置免打扰<br>
            5. 喝点水，做深呼吸<br>
            6. 准备好可能被问到的问题的答案
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '月度数据汇报PPT，核心KPI页面的正确设计方式是：',
            options: ['把所有数据都列在一个表格里', '用大字号展示3-5个最重要的指标，标注同比变化', '用密密麻麻的文字描述数据', '只展示达标的好数据'],
            answer: 1,
            explanation: 'KPI概览页应该用大字号突出展示3-5个最重要的关键指标，配合同比/环比变化箭头，让听众一眼就能看懂关键数据。不应该堆砌所有数据，也不应该逃避问题数据。'
        },
        {
            type: 'single',
            question: '展示不同渠道的销售贡献占比，最合适的图表类型是：',
            options: ['折线图', '散点图', '饼图或柱状图', '气泡图'],
            answer: 2,
            explanation: '展示占比关系适合用饼图（直观看出各部分的相对大小）或柱状图（便于精确比较各渠道的百分比数值）。折线图适合展示趋势变化，不适合展示静态占比。'
        },
        {
            type: 'judge',
            question: 'PPT汇报标题应该写话题词（如"销售数据"），而不是结论句。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！专业的汇报标题应该写结论句，如"10月销售额同比增长23%，超额完成目标"，而不是"销售数据"。结论句让听众在看图表之前就明白了重点，大幅提升沟通效率。'
        },
        {
            type: 'multiple',
            question: '数据汇报中讲解一个指标，完整的表述应包括哪些要素？（多选）',
            options: ['数字本身', '同比/环比变化', '数据背后的原因', '对未来的影响或建议'],
            answer: [0, 1, 2, 3],
            explanation: '完整的数据解读应包括：数字本身（是什么）、变化情况（比上次好或差）、原因分析（为什么）、影响和建议（接下来怎么做）。只念数字而不给解读，是汇报中最常见的失误。'
        },
        {
            type: 'single',
            question: '一份15分钟的月度汇报PPT，最合适的页数是多少？',
            options: ['5页以内', '8-12页', '20-25页', '30页以上'],
            answer: 1,
            explanation: '15分钟的汇报，包含演讲时间，适合8-12页。平均每页1-2分钟（核心内容页2分钟，过渡页和封面/结尾页各30秒）。页数太少内容不够，太多讲不完或每页太匆忙。'
        },
        {
            type: 'single',
            question: '当月数据不好看（未达目标）时，汇报时应该：',
            options: ['只展示达标的数据，略过不好看的指标', '正视问题，分析原因，展示改进措施', '把PPT做得特别复杂，让人看不出哪里没达标', '取消汇报，等数据好了再汇报'],
            answer: 1,
            explanation: '数据不好看时，专业的做法是正视问题、给出原因分析（外部环境/内部执行问题）、展示已采取或计划采取的改进措施。逃避或掩盖问题只会失去信任。'
        },
        {
            type: 'judge',
            question: '图表颜色可以随意搭配，多彩更好看。',
            options: ['对', '错'],
            answer: 1,
            explanation: '错误！图表颜色应该与PPT整体配色一致，并保持编码统一（如增长用绿色，下降用红色）。多彩随意的图表会显得混乱，观众难以快速理解数据的含义。'
        },
        {
            type: 'single',
            question: '月度汇报PPT的结尾页应该包含什么？',
            options: ['只有"谢谢"两个字', '总结本次汇报要点、下步行动计划，以及致谢', '把所有数据再重复一遍', '什么都不放，直接结束'],
            answer: 1,
            explanation: '专业的汇报结尾应该包含：总结本次汇报的核心要点、明确下一步的行动计划，以及致谢和开放问答环节。只有"谢谢"两个字显得仓促，没有帮助听众记住要点。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 综合实战任务：独立完成月度数据汇报PPT
            </div>
            <div class="practice-task-body">
                <p>使用本课提供的数据，独立制作一份完整的月度汇报PPT，要求如下：</p>

                <p><strong>基础要求（必做）：</strong></p>
                <ol>
                    <li>总页数8-12页，结构完整（封面、数据、分析、计划、结尾）</li>
                    <li>包含至少3个数据图表（折线图、饼图、柱状图各一个）</li>
                    <li>标题使用结论句而非话题词</li>
                    <li>核心KPI用大字号突出显示，标注同比变化</li>
                    <li>使用统一的色彩方案（不超过3种颜色）</li>
                    <li>全程添加适量动画（切换+元素动画）</li>
                    <li>每页有备注提词</li>
                    <li>排练计时控制在12-15分钟内</li>
                </ol>

                <p><strong>进阶要求（加分项）：</strong></p>
                <ul>
                    <li>使用公司母版模板（第24课制作的）</li>
                    <li>包含一张SWOT分析或问题分析页</li>
                    <li>导出PDF和视频两个版本</li>
                    <li>保存到云文档并生成分享链接</li>
                    <li>找同学模拟听众，进行一次完整的演讲排练</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 评分标准（满分100分）</strong><br>
            • 结构完整：20分<br>
            • 数据可视化（图表）：25分<br>
            • 设计美观统一：20分<br>
            • 动画合理流畅：15分<br>
            • 内容表述专业：20分<br><br>
            完成这道实战题，你已经具备了职场中独立制作数据汇报PPT的能力！
        </div>
    `
};
