/**
 * PPT学习站 - 第11课：表格制作与美化
 * 文件路径: js/lessons/lesson11.js
 * 模块：多媒体与表格
 * 任务情境：制作月度销售数据表
 */

window.lessonData = {

    scenario: '月末了，运营主管让你整理本月的销售数据，做成PPT给团队开会时汇报。数据包括各产品的销量、销售额、退货率等。用纯文字罗列数据太乱了，用表格展示才清晰专业。今天我们来学习如何在PPT中制作和美化数据表格！',

    knowledge: `
        <h3>一、PPT中的表格 vs Excel表格</h3>
        <p>首先要理解一个关键区别：</p>

        <table style="width:100%; border-collapse:collapse; margin: var(--space-md) 0;">
            <thead>
                <tr style="background: var(--bg-code);">
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">对比项</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">Excel表格</th>
                    <th style="padding: 10px; border: 1px solid var(--border-color); text-align:left;">PPT表格</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">用途</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据计算和分析</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据展示和汇报</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据量</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">可以有上万行</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">一般不超过10行</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">公式计算</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">强大的公式功能</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">基本不用公式</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">重点</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">数据的完整性和准确性</td>
                    <td style="padding: 10px; border: 1px solid var(--border-color);">⭐ 数据的直观性和美观性</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box tip-info">
            <strong>💡 核心原则：PPT表格要精简！</strong><br>
            PPT表格不是用来展示"所有数据"的，而是展示<strong>"关键数据"</strong>的。<br>
            • Excel里可能有100行数据，PPT上只放最重要的5-8行<br>
            • Excel里有20列字段，PPT上只展示4-6列关键指标<br>
            • 详细数据放在附件里，PPT上只展示总结和亮点
        </div>

        <h3>二、插入表格</h3>

        <h4>方法一：直接插入（最快）</h4>
        <ol>
            <li>点击 <strong>"插入"</strong> 选项卡</li>
            <li>点击 <strong>"表格"</strong> 按钮</li>
            <li>在弹出的网格中<strong>拖动鼠标</strong>选择行数和列数（比如5行×4列）</li>
            <li>松开鼠标，表格立即插入</li>
        </ol>

        <h4>方法二：指定行列数</h4>
        <ol>
            <li>插入 → 表格 → <strong>"插入表格"</strong></li>
            <li>在对话框中输入<strong>行数</strong>和<strong>列数</strong></li>
            <li>点击确定</li>
        </ol>

        <h4>方法三：从Excel复制粘贴</h4>
        <p>这是工作中最常用的方式——直接从Excel复制数据到PPT：</p>
        <ol>
            <li>在Excel中选中要用的数据区域</li>
            <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">C</span> 复制</li>
            <li>切换到PPT → 按 <span class="kbd">Ctrl</span> + <span class="kbd">V</span> 粘贴</li>
            <li>粘贴后会出现"粘贴选项"，可以选择：
                <ul>
                    <li><strong>保留源格式</strong> —— 保持Excel的样式</li>
                    <li><strong>使用目标样式</strong> —— 使用PPT的默认表格样式</li>
                    <li><strong>粘贴为图片</strong> —— 表格变成图片（不能编辑但格式不会乱）</li>
                </ul>
            </li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 从Excel粘贴的实用技巧</strong><br>
            • 在Excel中先<strong>把数据整理好、格式调好</strong>，再复制到PPT<br>
            • 如果粘贴后格式乱了，试试<strong>"粘贴为图片"</strong>，保证样式一致<br>
            • 如果需要在PPT中继续编辑数据，选择<strong>"保留源格式"</strong><br>
            • 只复制需要展示的部分，不要把整个Excel表复制过来
        </div>

        <h3>三、编辑表格内容</h3>

        <h4>1. 输入和修改文字</h4>
        <ul>
            <li>直接<strong>点击单元格</strong>即可输入文字</li>
            <li>按 <span class="kbd">Tab</span> 键跳到下一个单元格</li>
            <li>按 <span class="kbd">Shift</span> + <span class="kbd">Tab</span> 跳到上一个单元格</li>
            <li>按 <span class="kbd">Enter</span> 在同一单元格内换行</li>
        </ul>

        <h4>2. 选择单元格</h4>
        <ul>
            <li><strong>选择一个单元格</strong>：直接点击</li>
            <li><strong>选择一行</strong>：点击表格左边缘（鼠标变成右箭头→时点击）</li>
            <li><strong>选择一列</strong>：点击表格顶部边缘（鼠标变成下箭头↓时点击）</li>
            <li><strong>选择多个单元格</strong>：按住鼠标拖拽选择区域</li>
            <li><strong>选择整个表格</strong>：点击表格边框或 <span class="kbd">Ctrl</span> + <span class="kbd">A</span></li>
        </ul>

        <h4>3. 插入和删除行/列</h4>
        <ul>
            <li>右键点击某个单元格 → 可以选择<strong>"插入行"</strong>（在上方/下方）或<strong>"插入列"</strong>（在左侧/右侧）</li>
            <li>也可以在"表格工具/布局"选项卡中找到这些按钮</li>
            <li>删除行/列：选中行或列 → 右键 → <strong>"删除行"</strong>或<strong>"删除列"</strong></li>
        </ul>

        <h4>4. 合并和拆分单元格</h4>
        <ul>
            <li><strong>合并</strong>：选中多个单元格 → 右键 → <strong>"合并单元格"</strong>（或在"布局"选项卡中操作）</li>
            <li><strong>拆分</strong>：选中一个单元格 → 右键 → <strong>"拆分单元格"</strong> → 输入拆成几行几列</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 合并单元格的常见用法</strong><br>
            • <strong>表头分组</strong>：比如把"1月""2月""3月"上面合并一行写"第一季度"<br>
            • <strong>标题行</strong>：把第一行全部合并，写表格的总标题<br>
            • <strong>分类标记</strong>：左侧列合并多行，表示这些行属于同一类别
        </div>

        <h4>5. 调整行高和列宽</h4>
        <ul>
            <li><strong>拖拽调整</strong>：把鼠标放在行线或列线上，光标变成双向箭头后拖拽</li>
            <li><strong>精确设置</strong>：在"表格工具/布局"选项卡中输入具体的行高和列宽数值</li>
            <li><strong>自动适应</strong>：右键 → 可能有"均匀分布行"或"均匀分布列"选项</li>
        </ul>

        <h3>四、美化表格</h3>
        <p>默认的表格很丑，美化是必须的。WPS提供了快速美化和手动美化两种方式。</p>

        <h4>1. 快速套用表格样式</h4>
        <ol>
            <li>选中表格 → "表格工具/设计"选项卡</li>
            <li>浏览<strong>"表格样式"</strong>区域的预设方案</li>
            <li>直接点击一个你喜欢的样式，表格瞬间变好看</li>
        </ol>

        <div class="tip-box tip-success">
            <strong>🎯 表格样式选择建议</strong><br>
            • <strong>浅色系</strong>（浅蓝、浅灰）：适合数据较多的表格，清晰不花哨<br>
            • <strong>深色系</strong>（深蓝、黑色）：适合数据较少的亮点展示，醒目有冲击力<br>
            • <strong>彩色交替行</strong>：数据行多时，交替颜色让人容易逐行阅读<br>
            • <strong>与PPT主题一致</strong>：表格颜色和PPT整体配色保持统一
        </div>

        <h4>2. 表格样式选项</h4>
        <p>在"设计"选项卡中，可以勾选/取消以下选项来控制样式效果：</p>
        <ul>
            <li><strong>标题行</strong> —— 第一行使用特殊样式（加深/加粗）</li>
            <li><strong>汇总行</strong> —— 最后一行使用特殊样式</li>
            <li><strong>镶边行</strong> —— 奇偶行交替颜色（推荐开启！）</li>
            <li><strong>第一列</strong> —— 第一列使用特殊样式</li>
            <li><strong>最后一列</strong> —— 最后一列使用特殊样式</li>
            <li><strong>镶边列</strong> —— 奇偶列交替颜色</li>
        </ul>

        <h4>3. 手动美化</h4>
        <p>如果预设样式不满意，可以逐项手动调整：</p>

        <p><strong>① 单元格填充色</strong></p>
        <ul>
            <li>选中单元格/行/列 → "设计"选项卡 → <strong>"底纹"</strong>（或"填充"）</li>
            <li>常见用法：标题行深色、数据行浅色、重点数据行用品牌色</li>
        </ul>

        <p><strong>② 边框设置</strong></p>
        <ul>
            <li>选中单元格 → "设计"选项卡 → <strong>"边框"</strong></li>
            <li>可以设置哪些边有框线（上/下/左/右/全部/无）</li>
            <li>可以设置框线的颜色、粗细和样式</li>
        </ul>

        <div class="tip-box tip-info">
            <strong>💡 现代表格设计趋势：少边框</strong><br>
            传统表格全是黑色粗边框，看起来很"古老"。现代设计趋势是：<br>
            • <strong>只保留水平线</strong>，去掉垂直线<br>
            • 边框用<strong>浅灰色细线</strong>（1pt），不要用黑色粗线<br>
            • 标题行下方用<strong>稍粗的线</strong>（2pt）做分隔<br>
            • 或者<strong>完全不要边框</strong>，只用交替行颜色来区分行<br><br>
            这样做出来的表格看起来更简洁、更专业。
        </div>

        <p><strong>③ 文字格式</strong></p>
        <ul>
            <li>表格内的文字格式设置和普通文字一样（字体、字号、颜色、对齐等）</li>
            <li><strong>标题行</strong>：加粗、白色文字（配深色背景）</li>
            <li><strong>数据行</strong>：常规、深灰色文字</li>
            <li><strong>数字列</strong>：右对齐（方便对比大小）</li>
            <li><strong>文字列</strong>：左对齐</li>
        </ul>

        <p><strong>④ 单元格内文字对齐</strong></p>
        <ul>
            <li>选中单元格 → "布局"选项卡 → 设置<strong>水平对齐</strong>和<strong>垂直对齐</strong></li>
            <li>水平：左对齐、居中、右对齐</li>
            <li>垂直：顶端、居中、底端</li>
            <li>通常标题行<strong>居中</strong>，数据行<strong>根据内容选择</strong>（文字左对齐、数字右对齐）</li>
        </ul>

        <h3>五、表格排版的黄金法则</h3>

        <ul>
            <li><strong>行数不超过8行</strong> —— 超过就拆分或精简</li>
            <li><strong>列数不超过6列</strong> —— 超过就选择最重要的列</li>
            <li><strong>数据要有单位</strong> —— 在标题行注明"万元""件""%" 等</li>
            <li><strong>重点数据突出</strong> —— 用颜色、加粗、大字号突出关键数字</li>
            <li><strong>对齐要一致</strong> —— 同一列的内容对齐方式保持统一</li>
            <li><strong>留有内边距</strong> —— 文字不要贴着单元格边缘，留一些呼吸空间</li>
        </ul>

        <div class="tip-box tip-danger">
            <strong>🚫 表格排版的反面教材</strong><br>
            ❌ 把Excel几十行的数据原封不动搬到PPT上（观众根本看不清）<br>
            ❌ 字号太小（低于14pt在投影上几乎看不见）<br>
            ❌ 所有单元格都用粗黑边框（很丑）<br>
            ❌ 数据没有单位（观众不知道"500"是500元还是500件）<br>
            ❌ 所有数字都没有格式化（应该写"12,580"而不是"12580"）
        </div>

        <div class="tip-box tip-success">
            <strong>🎯 让数据更有说服力的技巧</strong><br>
            • <strong>数字加千位分隔符</strong>：12580 → 12,580（更易读）<br>
            • <strong>百分比用颜色</strong>：增长用绿色/红色，下降用红色/绿色（根据指标含义）<br>
            • <strong>最大值/最小值标色</strong>：最高销量标绿色，最低标红色<br>
            • <strong>对比数据并排</strong>：本月 vs 上月，一眼看出变化<br>
            • <strong>添加趋势箭头</strong>：↑ ↓ → 表示涨跌持平，直观有力
        </div>
    `,

    steps: `
        <p>现在我们来制作一份<strong>"月度销售数据汇报"</strong>PPT，实战掌握表格制作与美化。</p>

        <div class="step-card">
            <div class="step-card-number">1</div>
            <div class="step-card-title">新建文件，制作封面</div>
            <div class="step-card-desc">
                <p>新建空白演示 → 保存为 <code>月度销售汇报.pptx</code></p>
                <p>封面页：</p>
                <ul>
                    <li>标题：<strong>"11月销售数据汇报"</strong></li>
                    <li>副标题：<strong>"运营部 · 2024年11月"</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">2</div>
            <div class="step-card-title">第2页：插入产品销量表格</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"各产品销售情况"</strong></p>
                <ol>
                    <li>点击 <strong>插入 → 表格</strong></li>
                    <li>选择 <strong>6行 × 5列</strong>（1行标题 + 5行数据）</li>
                    <li>表格出现在页面上</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">3</div>
            <div class="step-card-title">填写表格数据</div>
            <div class="step-card-desc">
                <p>按 <span class="kbd">Tab</span> 键逐个单元格输入以下数据：</p>
                <table style="width:100%; border-collapse:collapse; margin:var(--space-sm) 0; font-size:var(--text-sm);">
                    <tr style="background:var(--bg-code); font-weight:700;">
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">产品名称</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">销量（件）</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">销售额（元）</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">退货率</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">环比增长</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">无线蓝牙耳机</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">1,280</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">254,720</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">2.3%</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">↑ 15%</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">手机保护壳</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">3,560</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">106,800</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">1.8%</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">↑ 8%</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">USB充电线</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">5,120</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">76,800</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">3.5%</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">↓ 3%</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">智能手表</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">420</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">335,580</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">1.2%</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">↑ 22%</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">便携充电宝</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">890</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">133,500</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">2.8%</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">→ 0%</td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">4</div>
            <div class="step-card-title">套用表格样式</div>
            <div class="step-card-desc">
                <ol>
                    <li>点击表格任意位置选中表格</li>
                    <li>"表格工具/设计"选项卡 → 浏览<strong>"表格样式"</strong></li>
                    <li>选择一个<strong>蓝色/深色标题行 + 浅色数据行</strong>的样式</li>
                    <li>在样式选项中确保勾选了：✅ 标题行 ✅ 镶边行</li>
                </ol>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">5</div>
            <div class="step-card-title">调整文字格式</div>
            <div class="step-card-desc">
                <p>让表格文字更专业：</p>
                <ul>
                    <li>选中<strong>标题行</strong>：字体设为<strong>微软雅黑Bold、14pt、白色、居中</strong></li>
                    <li>选中<strong>所有数据行</strong>：字体设为<strong>微软雅黑、12-14pt、深灰色</strong></li>
                    <li>选中<strong>"产品名称"列</strong>（第一列数据部分）：<strong>左对齐</strong></li>
                    <li>选中<strong>"销量""销售额"列</strong>：<strong>右对齐</strong>（数字右对齐方便对比）</li>
                    <li>选中<strong>"退货率""环比增长"列</strong>：<strong>居中</strong></li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">6</div>
            <div class="step-card-title">突出重点数据</div>
            <div class="step-card-desc">
                <p>让关键数据更醒目：</p>
                <ul>
                    <li>把<strong>"↑"符号</strong>的单元格文字改为<strong>绿色</strong></li>
                    <li>把<strong>"↓"符号</strong>的单元格文字改为<strong>红色</strong></li>
                    <li>把<strong>销售额最高</strong>的那个数字（335,580）改为<strong>加粗</strong></li>
                    <li>把<strong>退货率最高</strong>的（3.5%）改为<strong>红色</strong>提示注意</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">7</div>
            <div class="step-card-title">优化表格边框</div>
            <div class="step-card-desc">
                <p>让表格看起来更现代：</p>
                <ol>
                    <li>选中整个表格</li>
                    <li>"设计"选项卡 → <strong>"边框"</strong> → 选择<strong>"无边框"</strong>（先去掉所有边框）</li>
                    <li>然后只添加需要的线：
                        <ul>
                            <li>标题行下方：添加一条<strong>2pt的深色线</strong></li>
                            <li>数据行之间：添加<strong>1pt浅灰色线</strong></li>
                            <li>最后一行下方：添加一条<strong>2pt的线</strong></li>
                        </ul>
                    </li>
                </ol>
                <p>如果操作太复杂，直接用"只保留水平线"的样式也行。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">8</div>
            <div class="step-card-title">调整表格大小和位置</div>
            <div class="step-card-desc">
                <ul>
                    <li>选中表格边缘 → 拖拽调整到合适大小</li>
                    <li>表格宽度大约占页面的<strong>80-90%</strong></li>
                    <li>放置在标题下方，<strong>水平居中</strong></li>
                    <li>调整行高让内容不太拥挤（每行高度约1-1.5厘米）</li>
                </ul>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">9</div>
            <div class="step-card-title">第3页：制作汇总表格</div>
            <div class="step-card-desc">
                <p>新建一页，标题：<strong>"本月关键指标"</strong></p>
                <p>插入一个简洁的汇总表（3行×4列）：</p>
                <table style="width:100%; border-collapse:collapse; margin:var(--space-sm) 0; font-size:var(--text-sm);">
                    <tr style="background:var(--bg-code); font-weight:700;">
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">指标</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">本月</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">上月</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">变化</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">总销售额</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">¥907,400</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">¥812,000</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">↑ 11.7%</td>
                    </tr>
                    <tr>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">总订单数</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">11,270</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">10,450</td>
                        <td style="padding:6px 10px; border:1px solid var(--border-color);">↑ 7.8%</td>
                    </tr>
                </table>
                <p>这个表格可以用<strong>大字号</strong>（16-18pt）和<strong>更宽松的行高</strong>来展示，突出关键数据。</p>
            </div>
        </div>

        <div class="step-card">
            <div class="step-card-number">10</div>
            <div class="step-card-title">保存并预览</div>
            <div class="step-card-desc">
                <ul>
                    <li>按 <span class="kbd">Ctrl</span> + <span class="kbd">S</span> 保存</li>
                    <li>按 <span class="kbd">F5</span> 全屏放映</li>
                    <li>检查：表格内容是否清晰可读？字号是否足够大？重点数据是否突出？</li>
                    <li>如果投影后字号太小，回去加大字号和行高</li>
                </ul>
            </div>
        </div>
    `,

    tips: `
        <div class="tip-box tip-info">
            <strong>💡 Tab键是表格填写的好帮手</strong><br>
            在表格中输入数据时：<br>
            • <span class="kbd">Tab</span> = 跳到下一个单元格<br>
            • <span class="kbd">Shift</span> + <span class="kbd">Tab</span> = 跳到上一个单元格<br>
            • <span class="kbd">Enter</span> = 在当前单元格内换行（不是跳到下一行！）<br>
            • 在最后一个单元格按 <span class="kbd">Tab</span> = 自动新增一行<br><br>
            用Tab键可以像填表单一样快速输入数据！
        </div>

        <div class="tip-box tip-warning">
            <strong>⚠️ PPT表格 ≠ Excel表格</strong><br>
            很多同学把Excel的大表格直接截图或复制到PPT上，结果字小得根本看不清。记住：<br>
            • PPT表格最多<strong>6-8行</strong>，超过就精简<br>
            • 字号最小<strong>12pt</strong>，推荐<strong>14pt</strong>以上<br>
            • 只展示<strong>关键数据</strong>，详细数据发Excel附件<br>
            • 如果数据确实多，可以<strong>拆成多页</strong>展示
        </div>

        <div class="tip-box tip-success">
            <strong>🌟 表格美化速成公式</strong><br>
            记住这个万能公式，3步做出好看的表格：<br>
            1. <strong>选一个好看的预设样式</strong>（深色标题行 + 交替行颜色）<br>
            2. <strong>去掉竖线和外边框</strong>（只留水平细线）<br>
            3. <strong>标题行加粗居中 + 数字列右对齐</strong><br><br>
            就这么简单！效果立刻从"学生作业"变成"职场汇报"。
        </div>

        <div class="tip-box tip-danger">
            <strong>🚨 数据展示的大忌：没有单位！</strong><br>
            表格中的数字一定要有<strong>单位</strong>，否则观众不知道你在说什么：<br>
            ❌ 销量：1280（1280什么？斤？箱？件？）<br>
            ✅ 销量（件）：1,280<br><br>
            ❌ 销售额：254720<br>
            ✅ 销售额（元）：254,720<br><br>
            单位可以放在<strong>列标题</strong>里（推荐），也可以放在每个数字后面。
        </div>

        <div class="tip-box tip-info">
            <strong>💡 表格也可以变成"卡片"</strong><br>
            如果只有2-4个关键指标，与其做成表格，不如做成<strong>数据卡片</strong>：<br>
            用形状（圆角矩形）+ 大数字 + 小标签，比表格更直观更好看。<br><br>
            比如：<br>
            一个大大的 <strong style="font-size:24px;color:var(--primary);">¥907,400</strong><br>
            下面一行小字 <span style="font-size:12px;color:var(--text-muted);">本月总销售额 ↑11.7%</span><br><br>
            这种"卡片式"数据展示在后面的课程中会进一步学习。
        </div>
    `,

    quiz: [
        {
            type: 'single',
            question: '在PPT表格中，按Tab键的作用是什么？',
            options: ['在单元格内换行', '跳到下一个单元格', '插入一个空格', '选中整行'],
            answer: 1,
            explanation: '在PPT表格中按Tab键会跳到下一个单元格。如果需要在单元格内换行，应该按Enter键。Shift+Tab可以跳到上一个单元格。'
        },
        {
            type: 'single',
            question: 'PPT中一页表格的数据行数建议不超过多少？',
            options: ['3行', '8行', '20行', '不限制'],
            answer: 1,
            explanation: 'PPT表格建议不超过6-8行数据（不含标题行）。行数太多会导致字号变小、内容拥挤，观众看不清。超出部分应该精简或拆到多页。'
        },
        {
            type: 'single',
            question: '以下哪种表格边框设计最符合现代PPT设计趋势？',
            options: [
                '全部使用粗黑色边框',
                '只保留水平浅灰色细线',
                '所有边框都用红色',
                '边框越粗越好'
            ],
            answer: 1,
            explanation: '现代表格设计趋势是简洁——去掉竖线和外边框，只保留水平的浅灰色细线（1pt），标题行下方可以用稍粗的线。这样看起来更清爽专业。'
        },
        {
            type: 'judge',
            question: '表格中的数字列应该使用居中对齐。',
            options: ['对', '错'],
            answer: 1,
            explanation: '数字列建议使用右对齐，这样不同位数的数字（如100和10000）的个位、十位、百位会自动对齐，方便观众比较大小。文字列用左对齐，标题行用居中。'
        },
        {
            type: 'single',
            question: '从Excel复制数据到PPT时，哪种粘贴方式可以保证格式不会乱？',
            options: [
                '保留源格式',
                '使用目标样式',
                '粘贴为图片',
                '只粘贴文字'
            ],
            answer: 2,
            explanation: '"粘贴为图片"会把Excel数据变成一张图片，格式完全保持不变。缺点是粘贴后不能再编辑。如果需要编辑，选"保留源格式"或"使用目标样式"。'
        },
        {
            type: 'multiple',
            question: '以下哪些是PPT表格数据展示的好习惯？（多选）',
            options: [
                '数字加千位分隔符（如12,580）',
                '在列标题注明数据单位',
                '增长数据用绿色↑标记',
                '把Excel所有列都复制到PPT'
            ],
            answer: [0, 1, 2],
            explanation: '千位分隔符让大数字更易读、注明单位避免歧义、颜色标记增长/下降更直观——这些都是好习惯。但不应该把Excel所有列都搬到PPT，只展示关键数据即可。'
        },
        {
            type: 'single',
            question: '合并单元格的常见用途不包括哪个？',
            options: [
                '制作跨列的表头分组',
                '制作表格总标题行',
                '让每个单元格都变成一样大',
                '左侧分类标记'
            ],
            answer: 2,
            explanation: '合并单元格常用于制作跨列的表头分组、总标题行、左侧分类标记等。"让每个单元格都变成一样大"不是合并的用途，调整行高列宽才能达到这个效果。'
        },
        {
            type: 'single',
            question: '以下哪个做法是错误的？',
            options: [
                '标题行使用深色背景+白色加粗文字',
                '数据行使用交替行颜色',
                '表格中所有数字都不标单位',
                '重点数据用颜色突出'
            ],
            answer: 2,
            explanation: '表格中的数字必须标注单位（在列标题中注明或每个数字后加单位），否则观众不知道数字代表什么含义。其他三项都是好的做法。'
        }
    ],

    practice: `
        <div class="practice-task">
            <div class="practice-task-header">
                <span>🎯</span> 实战任务：制作月度销售数据汇报PPT
            </div>
            <div class="practice-task-body">
                <p>请制作一个至少3页的销售数据汇报PPT：</p>
                <ol>
                    <li>
                        <strong>第1页：封面</strong><br>
                        标题："XX月销售数据汇报"，包含部门和日期
                    </li>
                    <li>
                        <strong>第2页：产品销售明细表</strong><br>
                        包含至少5行数据、5列字段的表格（产品名、销量、销售额、退货率、同比增长等）。要求：
                        <ul>
                            <li>套用表格样式并启用标题行和镶边行</li>
                            <li>标题行加粗居中，数字列右对齐</li>
                            <li>增长数据标绿色↑，下降数据标红色↓</li>
                            <li>所有数据列在标题中注明单位</li>
                        </ul>
                    </li>
                    <li>
                        <strong>第3页：关键指标汇总</strong><br>
                        一个简洁的汇总表（3-4行），展示本月总销售额、总订单数等核心指标，与上月对比
                    </li>
                </ol>
                <p><strong>设计要求：</strong></p>
                <ul>
                    <li>边框使用现代简洁风格（浅灰细线或去掉竖线）</li>
                    <li>字号不低于12pt</li>
                    <li>数据行数不超过8行</li>
                    <li>至少一个重点数据使用颜色或加粗突出</li>
                </ul>
                <p><strong>加分项：</strong></p>
                <ul>
                    <li>尝试从Excel复制粘贴数据到PPT</li>
                    <li>尝试合并单元格做表头分组</li>
                    <li>在表格旁边用文本框添加"关键结论"说明</li>
                </ul>
            </div>
        </div>

        <div class="tip-box tip-success">
            <strong>🎉 完成本课后，你已经掌握了：</strong><br>
            ✅ 3种插入表格的方法<br>
            ✅ 表格数据的输入和编辑技巧<br>
            ✅ 插入/删除行列、合并/拆分单元格<br>
            ✅ 套用表格样式快速美化<br>
            ✅ 边框、填充、文字格式的手动调整<br>
            ✅ 数据展示的专业技巧（对齐、单位、颜色标记）<br><br>
            下一课我们将学习<strong>图表插入与编辑</strong>——用图表让数据"说话"，展示店铺运营数据分析！
        </div>
    `
};
