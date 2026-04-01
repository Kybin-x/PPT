/**
 * PPT学习站 - 第15课：使用与自制模板
 * 文件路径: js/lessons/lesson15.js
 * 模块：母版与模板
 * 任务情境：制作可复用的周报模板
 */

window.lessonData = {

    scenario: '运营主管说："每周五大家都要交周报PPT，但每个人做出来的格式五花八门，有人用了10分钟就做好了，有人折腾了2个小时还在调排版。你能不能做一个周报模板，大家每周只需要填数据就行？"模板是PPT效率的终极武器——做好一次，复用一百次！',

    knowledge: `
        <h3>一、什么是PPT模板？</h3>
        <p>PPT模板就是一个<strong>预先设计好格式和布局的PPT文件</strong>，使用时只需要替换内容即可。</p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:var(--space-md); margin:var(--space-md) 0;">
            <div style="padding:var(--space-md); background:var(--error-light); border-radius:var(--radius-md); border:1px solid var(--error);">
                <p style="font-size:var(--text-sm); color:var(--error); font-weight:700; margin-bottom:var(--space-sm);">❌ 没有模板</p>
                <p style="font-size:var(--text-sm); margin:0; color:var(--text-secondary);">每次做PPT都要从零开始——设背景、调字体、放Logo、画色带、排版式……重复劳动2小时</p>
            </div>
            <div style="padding:var(--space-md); background:var(--success-light); border-radius:var(--radius-md); border:1px solid var(--success);">
                <p style="font-size:var(--text-sm); color:var(--success); font-weight:700; margin-bottom:var(--space-sm);">✅ 有模板</p>
                <p style="font-size:var(--text-sm); margin:0; color:var(--text-secondary);">打开模板 → 填写数据 → 完成！只需要30分钟，而且格式统一、质量稳定</p>
            </div>
        </div>

        <p>模板的本质就是<strong>"母版 + 预设版式 + 示例页面"</strong>的组合体。上两节课学的母版和配色，就是制作模板的基础！</p>

        <h3>二、模板的两种形式</h3>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">形式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">文件格式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">使用方式</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>模板文件</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.potx</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">打开时自动创建新文件，不会覆盖原模板</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐双击打开 → 自动新建</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>普通PPT文件</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">.pptx</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">打开后需要"另存为"新文件来使用</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">打开 → 另存为新文件 → 修改</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 .potx vs .pptx 的区别</strong><br>
            • <strong>.potx（模板文件）</strong>：双击打开时会<strong>自动创建一个新的.pptx文件</strong>，原模板不会被修改。就像一个"印章"——盖完章原章不变。<br>
            • <strong>.pptx（普通文件）</strong>：双击打开就是编辑原文件。当模板用的话，需要手动"另存为"新文件，否则会覆盖模板。<br><br>
            正式的团队模板建议用 .potx 格式，防止有人不小心改了模板。日常个人用 .pptx 也行。
        </div>

        <h3>三、获取PPT模板的途径</h3>

        <h4>1. WPS自带模板</h4>
        <p>WPS演示启动页有大量免费和付费模板：</p>
        <ol>
            <li>打开WPS演示 → 在启动页看到<strong>"模板推荐"</strong></li>
            <li>可以按分类浏览：工作汇报、教育培训、商务计划、电商等</li>
            <li>也可以搜索关键词：如"周报""数据分析""产品介绍"</li>
            <li>选中一个模板 → 点击使用 → 自动基于该模板新建PPT</li>
        </ol>

        <h4>2. WPS稻壳商城</h4>
        <p>WPS官方的模板商城，有更多精品模板：</p>
        <ul>
            <li>访问：<strong>chn.docer.com</strong> 或在WPS内搜索</li>
            <li>有免费和付费模板</li>
            <li>质量比较高，分类也很全</li>
        </ul>

        <h4>3. 第三方模板网站</h4>
        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">网站</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">特点</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">价格</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>优品PPT</strong>（ypppt.com）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">大量免费精品模板</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐免费</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>叮当设计</strong>（dingdangsheji.com）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">免费下载，质量不错</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">免费</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>51PPT</strong>（51ppt.com.cn）</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">分类齐全</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">部分免费</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);"><strong>OfficePlus</strong></td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">微软官方模板库</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">免费</td>
                </tr>
            </tbody>
        </table>

        <h4>4. 自己制作模板</h4>
        <p>这是<strong>最高级也是最实用的方式</strong>——根据公司需求自己定制专属模板。今天的重点就是学这个！</p>

        <div class="tip-box tip-warning">
            <strong>⚠️ 使用下载模板的注意事项</strong><br>
            1. <strong>字体问题</strong>：模板用的字体你电脑上可能没有 → 打开后会自动替换为默认字体，排版可能变乱。解决方案：安装缺失字体或在母版中换字体。<br>
            2. <strong>版权问题</strong>：免费模板用于学习和个人无所谓，但<strong>商用需注意版权</strong><br>
            3. <strong>内容替换</strong>：模板只是框架，一定要把<strong>示例内容全部替换</strong>为你自己的内容。曾经有人把模板里的示例文字原封不动交上去当工作报告……
        </div>

        <h3>四、自制模板的完整流程</h3>
        <p>自制模板的流程就是把前面学的知识串在一起：</p>

        <ol>
            <li><strong>确定需求</strong>：模板要用在什么场景？（周报/月报/产品介绍/述职？）</li>
            <li><strong>确定配色</strong>：选择配色方案（参考上节课）</li>
            <li><strong>设计母版</strong>：Logo、色带、页脚、默认字体（参考第13课）</li>
            <li><strong>设计版式</strong>：封面版式、内容版式、数据版式、结尾版式</li>
            <li><strong>制作示例页</strong>：每种版式做一个示例页面，填写示例内容</li>
            <li><strong>添加使用说明</strong>：告诉使用者哪里需要替换</li>
            <li><strong>保存为 .potx</strong>：另存为模板格式</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 好模板的标准</strong><br>
            ✅ <strong>开箱即用</strong>：替换文字和数据就能直接使用<br>
            ✅ <strong>风格统一</strong>：配色、字体、排版在每一页都一致<br>
            ✅ <strong>灵活适配</strong>：有多种版式可选，适应不同的内容<br>
            ✅ <strong>有示例引导</strong>：示例内容告诉使用者"这里应该放什么"<br>
            ✅ <strong>不怕修改</strong>：使用者调整内容后排版不会崩掉
        </div>

        <h3>五、周报模板的页面规划</h3>
        <p>以电商运营周报为例，一个完整的周报模板通常包含以下页面：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">页码</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">页面类型</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">版式</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">内容</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">1</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">封面</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题幻灯片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">周报标题 + 部门 + 日期 + 汇报人</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">2</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">目录</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题和内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">本周概览 / 数据分析 / 问题总结 / 下周计划</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">3</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据概览</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">自定义</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">4个数据卡片（销售额、订单数、转化率、客单价）</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">4</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据图表</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题和内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">本周销售趋势图表</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">5</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">工作总结</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题和内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">本周完成的工作列表</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">6</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">问题与对策</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">两栏内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">左：问题列表 / 右：对策方案</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">7</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">下周计划</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题和内容</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">下周工作计划列表</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">8</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">结尾</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">标题幻灯片</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">感谢 / Q&A</td>
                </tr>
            </tbody>
        </table>

        <h3>六、模板中的占位符技巧</h3>
        <p>好的模板会用<strong>"占位提示文字"</strong>告诉使用者每个区域应该填什么内容：</p>
        <ul>
            <li>标题区域：<strong>【在此输入周报标题】</strong></li>
            <li>数据区域：<strong>【替换为本周销售额】</strong></li>
            <li>列表区域：<strong>【列出本周完成的3-5项工作】</strong></li>
            <li>图表区域：<strong>【双击图表编辑本周数据】</strong></li>
        </ul>
        <p>使用中括号【】或其他显眼的标记，让使用者一眼就知道哪些内容需要替换。</p>

        <div class="tip-box tip-info">
            <strong>💡 占位文字的颜色提示</strong><br>
            可以把占位提示文字设为<strong>浅灰色</strong>或<strong>红色</strong>，和正式内容区分开。使用者替换内容后改回正常颜色即可。<br><br>
            例如：<br>
            <span style="color:#999;">【在此输入本周总结，建议3-5条要点】</span><br><br>
            这样使用者不会忘记替换，也不会误以为占位文字就是正式内容。
        </div>

        <h3>七、使用模板的正确流程</h3>
        <ol>
            <li><strong>打开模板</strong>：双击 .potx 文件（自动新建）或打开 .pptx 后另存为新文件</li>
            <li><strong>替换内容</strong>：逐页替换占位文字和示例数据</li>
            <li><strong>调整页面</strong>：根据实际内容增减页面
                <ul>
                    <li>需要更多页？复制已有页面然后修改内容</li>
                    <li>某页不需要？直接删除</li>
                </ul>
            </li>
            <li><strong>更新图表</strong>：双击图表编辑数据</li>
            <li><strong>检查格式</strong>：确保替换内容后排版没有乱</li>
            <li><strong>另存为新文件</strong>：保存为 .pptx，文件名包含日期和项目名</li>
        </ol>

        <div class="tip-box tip-warning">
            <strong>⚠️ 使用模板的常见错误</strong><br>
            1. <strong>忘记替换示例内容</strong>：交出去的PPT上还写着"在此输入标题"…… 💀<br>
            2. <strong>直接改模板文件</strong>：在.pptx模板上直接编辑没有另存为，下次再用模板就没了<br>
            3. <strong>强行塞太多内容</strong>：模板设计的空间有限，内容太多排版会崩<br>
            4. <strong>改了字体和颜色</strong>：破坏了统一的品牌风格
        </div>
    `,

    steps: `
        <p>现在我们来<strong>自制一个电商运营周报模板</strong>，综合运用前面学的所有技能。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">从上节课的模板文件开始</div>
            <div class="step-card-desc">
                <p>打开上节课保存的公司品牌模板文件（已有母版+配色），或者新建空白文件后快速设置：</p>
                <ul>
                    <li>母版：底部品牌色带 + 右上角Logo</li>
                    <li>配色：使用你上节课设好的主题颜色</li>
                    <li>字体：微软雅黑</li>
                </ul>
                <p>保存为 <code>电商周报模板.pptx</code></p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">第1页：封面</div>
            <div class="step-card-desc">
                <p>使用"标题幻灯片"版式，设计封面：</p>
                <ul>
                    <li>标题：<strong>【第X周 运营周报】</strong>（36pt，品牌色/深色，居中）</li>
                    <li>副标题区域包含四行信息：
                        <ul>
                            <li><strong>【部门名称】</strong></li>
                            <li><strong>【汇报人：XXX】</strong></li>
                            <li><strong>【日期：2024.XX.XX - XX.XX】</strong></li>
                        </ul>
                    </li>
                    <li>所有占位文字用<strong>浅灰色</strong>，提示使用者需要替换</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">第2页：目录</div>
            <div class="step-card-desc">
                <p>标题：<strong>"本周汇报目录"</strong></p>
                <p>用4个带编号的圆角矩形做目录导航：</p>
                <ol>
                    <li>画4个同样大小的圆角矩形，排成2×2网格或一行</li>
                    <li>分别写上：<strong>01 数据概览</strong>、<strong>02 工作总结</strong>、<strong>03 问题分析</strong>、<strong>04 下周计划</strong></li>
                    <li>矩形填充为<strong>浅色</strong>（品牌色的20%透明度），文字用深色</li>
                    <li>对齐排列整齐</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">第3页：数据概览（数据卡片）</div>
            <div class="step-card-desc">
                <p>标题：<strong>"本周数据概览"</strong></p>
                <p>用4个数据卡片展示关键指标：</p>
                <ol>
                    <li>画4个<strong>圆角矩形</strong>（白色填充+阴影），排成一行</li>
                    <li>每个卡片内放：
                        <ul>
                            <li>上方小字标签：<strong>【本周销售额】</strong>（12pt，灰色）</li>
                            <li>中间大数字：<strong>【¥0,000】</strong>（36pt，品牌色，加粗）</li>
                            <li>下方趋势：<strong>【↑ 0% vs上周】</strong>（12pt，绿色）</li>
                        </ul>
                    </li>
                    <li>四个卡片分别是：销售额、订单数、转化率、客单价</li>
                    <li>用对齐工具让4个卡片<strong>顶端对齐 + 横向分布</strong></li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">第4页：数据图表</div>
            <div class="step-card-desc">
                <p>标题：<strong>"本周销售趋势"</strong></p>
                <ol>
                    <li>插入一个<strong>折线图</strong></li>
                    <li>在数据表格中填入7天的示例数据（周一到周日）</li>
                    <li>美化图表：品牌色线条、数据标签、清晰标题</li>
                    <li>在图表旁边添加一个文本框：<strong>【在此写数据分析结论】</strong></li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">第5页：工作总结</div>
            <div class="step-card-desc">
                <p>标题：<strong>"本周工作总结"</strong></p>
                <p>内容区域使用编号列表：</p>
                <ul>
                    <li>1. 【完成了XXX工作，达成了XXX效果】</li>
                    <li>2. 【完成了XXX工作，达成了XXX效果】</li>
                    <li>3. 【完成了XXX工作，达成了XXX效果】</li>
                    <li>4. 【完成了XXX工作，达成了XXX效果】</li>
                    <li>5. 【如有更多可继续添加】</li>
                </ul>
                <p>占位文字用灰色，格式设为20pt、1.3倍行距。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">第6页：问题与对策</div>
            <div class="step-card-desc">
                <p>标题：<strong>"问题与对策"</strong></p>
                <p>使用左右两栏布局：</p>
                <ul>
                    <li><strong>左栏标题</strong>："⚠️ 存在问题"（红色标题）</li>
                    <li>左栏内容：3个问题的占位列表</li>
                    <li><strong>右栏标题</strong>："✅ 解决对策"（绿色标题）</li>
                    <li>右栏内容：3个对策的占位列表</li>
                    <li>中间用一条<strong>垂直细线</strong>做分隔</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">第7页：下周计划</div>
            <div class="step-card-desc">
                <p>标题：<strong>"下周工作计划"</strong></p>
                <p>可以做成表格式或列表式：</p>

                <p><strong>方案A：表格式</strong></p>
                <p>插入一个3列×5行的表格：</p>
                <ul>
                    <li>列标题：序号 | 工作内容 | 预计完成时间</li>
                    <li>数据行填写占位文字</li>
                    <li>美化表格样式</li>
                </ul>

                <p><strong>方案B：列表式</strong></p>
                <p>用编号列表列出计划项，和工作总结页类似。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">第8页：结尾页</div>
            <div class="step-card-desc">
                <p>使用"标题幻灯片"版式：</p>
                <ul>
                    <li>标题：<strong>"感谢聆听"</strong>（或"Thanks / Q&A"）</li>
                    <li>副标题：<strong>【汇报人：XXX | 联系方式：XXX】</strong></li>
                    <li>可以加一个品牌色的装饰形状</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存为模板文件</div>
            <div class="step-card-desc">
                <ol>
                    <li>先按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 正常保存一份 .pptx</li>
                    <li>然后 <strong>文件 → 另存为</strong></li>
                    <li>文件类型选择 <strong>".potx"</strong>（WPS演示模板）</li>
                    <li>文件名：<strong>"电商运营周报模板"</strong></li>
                    <li>保存位置选择方便找到的文件夹</li>
                    <li>点击保存</li>
                </ol>
                <p>现在你有了两个文件：.pptx（可编辑版本）和 .potx（模板文件）。</p>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-success">
            <strong>🌟 模板制作的高级技巧</strong><br>
            1. <strong>多留空间少放内容</strong>：模板的内容区域留足够空间，使用者可能比你预设的内容更多<br>
            2. <strong>可复制的模块</strong>：数据卡片、列表页等如果使用者需要更多，应该能方便地复制页面<br>
            3. <strong>写使用说明</strong>：在模板的最后加一页"使用指南"，说明如何使用模板（发布前删掉这页）<br>
            4. <strong>测试替换</strong>：自己尝试用模板做一份真正的周报，看看流程是否顺畅<br>
            5. <strong>征求反馈</strong>：让团队成员试用后提出改进意见
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ 分享模板给同事的注意事项</strong><br>
            • 确保模板中<strong>没有敏感/机密数据</strong>（示例数据要用虚拟数据）<br>
            • 如果用了<strong>特殊字体</strong>，提前告知同事安装，或嵌入字体<br>
            • <strong>.potx 比 .pptx 更安全</strong>——不会被误修改<br>
            • 最好<strong>配一个简短的使用说明</strong>（文字文档或邮件说明）
        </div>

        <div class="tip-box tip-info">
            <strong>💡 模板的迭代更新</strong><br>
            模板不是做一次就完事了，应该不断优化：<br>
            • 每使用几次后<strong>收集反馈</strong>：哪些页面最常用？哪些页面多余？<br>
            • <strong>添加新版式</strong>：团队出现新的汇报需求时增加对应版式<br>
            • <strong>更新配色</strong>：公司品牌色升级时同步更新模板<br>
            • <strong>版本管理</strong>：模板文件名加版本号，如"周报模板_v2.potx"
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 使用模板的终极提醒</strong><br>
            模板使用完毕交付之前，做最后一次<strong>"全篇检查"</strong>：<br>
            ☐ 所有占位文字【XXX】都已替换为真实内容？<br>
            ☐ 图表数据已更新为最新数据？<br>
            ☐ 日期、姓名、部门信息是否正确？<br>
            ☐ 字体和颜色没有被意外修改？<br>
            ☐ 全屏放映一遍确认没有错误？<br><br>
            <strong>特别注意第一条——忘记替换占位文字是最尴尬的失误！</strong>
        </div>

        <div class="tip-box tip-info">
            <strong>💡 团队模板管理的最佳实践</strong><br>
            如果你是团队中负责模板的人，建议：<br>
            • 把模板存放在<strong>共享文件夹或云盘</strong>中，大家都能访问<br>
            • 用<strong>WPS云文档</strong>共享，随时更新大家自动同步<br>
            • 建立一个<strong>"模板素材库"</strong>文件夹，包含：
                <ul>
                    <li>周报模板.potx</li>
                    <li>月报模板.potx</li>
                    <li>产品介绍模板.potx</li>
                    <li>述职报告模板.potx</li>
                    <li>使用说明.docx</li>
                </ul>
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '.potx 和 .pptx 文件的主要区别是什么？',
            options: [
                '.potx 文件更小',
                '.potx 打开时自动创建新文件，原模板不会被修改',
                '.potx 只能查看不能编辑',
                '两者没有区别'
            ],
            answer: 1,
            explanation: '.potx 是模板文件格式，双击打开时会自动基于该模板创建一个新的.pptx文件，原模板保持不变。.pptx 打开就是编辑原文件，容易被覆盖。'
        },
        {
            type: 'single',
            question: '自制PPT模板的正确流程顺序是？',
            options: [
                '写内容 → 设计母版 → 选配色',
                '确定需求 → 选配色 → 设计母版 → 设计版式 → 制作示例页 → 保存为模板',
                '随便做一个PPT然后改名为模板',
                '下载别人的模板直接用'
            ],
            answer: 1,
            explanation: '正确流程是：先确定模板用途和需求 → 选择配色方案 → 设计母版（Logo、色带、字体）→ 设计各种版式 → 制作示例页面 → 保存为.potx模板文件。'
        },
        {
            type: 'single',
            question: '模板中使用【在此输入标题】这样的占位文字，目的是什么？',
            options: [
                '让模板看起来更复杂',
                '提示使用者这里需要替换为自己的内容',
                '作为正式内容直接使用',
                '测试字体效果'
            ],
            answer: 1,
            explanation: '占位文字用于提示使用者"这里应该填什么内容"，使用时必须替换为真实内容。建议用灰色或红色显示占位文字，和正式内容区分。'
        },
        {
            type: 'judge',
            question: '使用别人的PPT模板时，可以直接提交而不需要替换示例内容。',
            options: ['对', '错'],
            answer: 1,
            explanation: '绝对错误！模板中的示例内容（文字、数据、图片）必须全部替换为你自己的真实内容。提交包含示例内容的PPT是非常严重的失误。'
        },
        {
            type: 'multiple',
            question: '以下哪些是好模板应该具备的特点？（多选）',
            options: [
                '开箱即用，替换内容即可',
                '风格统一，配色字体一致',
                '页面固定不能增减',
                '有占位文字引导使用者'
            ],
            answer: [0, 1, 3],
            explanation: '好的模板应该开箱即用、风格统一、有占位引导。但不应该限制使用者增减页面——使用者应该能根据实际需要灵活复制或删除页面。'
        },
        {
            type: 'single',
            question: '团队模板更新后，最好的分发方式是？',
            options: [
                '每次都用U盘拷给每个人',
                '存放在共享文件夹或云盘中，大家自行获取',
                '打印出来发给大家',
                '只自己用不分享'
            ],
            answer: 1,
            explanation: '最好的方式是将模板存放在共享文件夹或WPS云文档中。模板更新后大家自动获取最新版本，不需要每次手动分发。'
        },
        {
            type: 'single',
            question: '使用下载的PPT模板后发现字体显示异常，最可能的原因是？',
            options: [
                'PPT文件损坏了',
                '模板使用的字体你的电脑上没有安装',
                '电脑屏幕分辨率不对',
                'WPS版本太旧'
            ],
            answer: 1,
            explanation: '字体异常最常见的原因是模板使用了你电脑上没有安装的字体。解决方法：安装缺失的字体，或在母版中将字体替换为系统自带字体（如微软雅黑）。'
        },
        {
            type: 'single',
            question: '电商运营周报模板通常不需要包含以下哪个页面？',
            options: [
                '封面页',
                '数据概览页',
                '公司历史介绍页',
                '下周计划页'
            ],
            answer: 2,
            explanation: '周报是周期性的工作汇报，需要封面、数据概览、工作总结、问题分析、下周计划等。"公司历史介绍"不是周报内容，更适合放在公司介绍PPT中。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作电商运营周报模板
            </div>
            <div class="practice-task-body">
                <p>请制作一个完整的周报PPT模板（至少7页），要求：</p>
                <ol>
                    <li>
                        <strong>基础设置</strong>
                        <ul>
                            <li>使用你设计的母版（Logo、色带、页脚、页码）</li>
                            <li>使用你设计的配色方案</li>
                            <li>统一字体（微软雅黑）</li>
                        </ul>
                    </li>
                    <li>
                        <strong>必须包含的页面</strong>
                        <ul>
                            <li>封面页（标题+部门+日期+汇报人）</li>
                            <li>目录页（至少4个章节）</li>
                            <li>数据概览页（至少3个数据卡片）</li>
                            <li>图表页（包含一个可编辑的图表）</li>
                            <li>工作总结页（编号列表）</li>
                            <li>下周计划页（列表或表格）</li>
                            <li>结尾页</li>
                        </ul>
                    </li>
                    <li>
                        <strong>模板规范</strong>
                        <ul>
                            <li>所有需要使用者替换的内容用【】标记并设为灰色</li>
                            <li>页面风格统一（配色、字体、排版一致）</li>
                            <li>保存为 .potx 模板文件</li>
                        </ul>
                    </li>
                </ol>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>增加一个"问题与对策"的左右分栏页面</li>
                    <li>在模板最后添加一页"使用说明"</li>
                    <li>用这个模板做一份真正的周报验证可用性</li>
                    <li>分享给同学让他们试用并给反馈</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 恭喜！"母版与模板"模块全部完成！</strong><br>
            经过第13-15课的学习，你已经掌握了：<br>
            ✅ 幻灯片母版的概念和编辑<br>
            ✅ 在母版中添加Logo、色带、页脚等公共元素<br>
            ✅ 配色方案的选择和自定义主题颜色<br>
            ✅ 取色器和配色工具的使用<br>
            ✅ PPT模板的获取和使用<br>
            ✅ 从零自制专业PPT模板<br><br>
            下一模块我们将进入<strong>"动画与切换"</strong>，第16课将学习<strong>幻灯片切换效果</strong>——让你的PPT演示更流畅更有节奏感！
        </div>
    `
};
