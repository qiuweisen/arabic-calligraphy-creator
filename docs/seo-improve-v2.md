项目改造需求文档：arabic-calligraphy-generator.com 网站结构与UX优化 (最终版 v3.0)
1.0 项目背景与目标 (Project Background & Goal)
当前问题 (Current Problem):
本网站 (arabic-calligraphy-generator.com) 目前存在严重的SEO权威性碎片化和关键词蚕食问题。网站的权重被分散到十几个URL上（首页 /、字体列表页 /fonts、以及13个独立的字体详情页 /fonts/{font-name}），导致没有任何一个页面能获得理想的搜索引擎排名。
最终方案 (The Final Solution):
我们将采用一种对用户体验最友好、开发成本最低的方案，对首页现有的“Explore Our Arabic Font Collection”模块进行交互式升级，使其成为承载所有字体详情内容的“终极字体百科”。同时，通过301重定向，将所有旧页面的SEO权重，无损地聚合到主页上。
核心目标 (Primary Goal):
将网站重塑为一个结构健康、权重集中的“单页MVP”模型。主页上半部分为高效的“创作区”，下半部分为内容丰富的“探索区”，从而在最大化SEO效果的同时，提供无缝、流畅的用户体验。
2.0 改造核心思路 (Core Strategy)
交互升级 (Interaction Upgrade): 对“Explore”模块进行改造，使其支持在不跳转页面的情况下，通过折叠面板 (Accordion) 展示字体详情。
内容大合并 (Content Consolidation): 将所有分散在13个字体详情页上的内容，全部迁移并整合到升级后的“Explore”模块中。
功能联动 (Feature Linking): 建立“探索区”与顶部“创作区”之间的交互联动，实现快速字体切换。
URL权重转移 (Link Equity Transfer): 通过设置永久性301重定向，将所有旧页面的SEO权重，无损地转移到主页及其对应的锚点上。
3.0 详细操作指令 (Step-by-Step Instructions)
请按照以下步骤，对网站代码进行改造：
需求描述:
这是整个改造的核心。我们需要将这个静态的展示模块，升级为一个功能性的、可交互的“动态百科全书”。
A. 升级左侧“Featured Arabic Fonts”列表:
修改交互行为:
主点击区 (字体名称/描述): 当用户点击列表项的主要区域时，触发一个JavaScript函数。该函数应：
a. 平滑滚动到页面顶部的“创作区”。
b. 自动更新左侧边栏的字体选择器，使其选中被点击的字体（例如，点击“Amiri Font”，顶部的字体选择器就自动切换到“Amiri”）。
详情触发区 (原→箭头): 将每个列表项右侧的 → 箭头图标，替换为一个更明确的 Details ▾ 按钮或一个带圈的 (i) 图标。
实现折叠面板 (Accordion) 功能:
当用户点击新的 Details ▾ 按钮时，该列表项的下方应原地平滑展开一个面板。这个面板就是用来展示该字体详细信息的地方。
这个展开的面板可以是全宽的，或者就在该列表项下方。确保UI设计美观、不突兀。
确保一次只能展开一个详情面板，或者允许多个展开但要处理好布局。
B. 升级右侧“Browse by Style”分类:
修改字体标签行为:
当用户点击分类中的任何一个字体标签时（如在"Traditional Calligraphy"下点击"Amiri"），其行为应与“Featured”列表的主点击行为完全一致：平滑滚动到顶部，并自动在创作区的字体选择器中选中该字体。
C. 为模块和列表项添加HTML id (用于锚链接):
模块根id: 给整个“Explore Our Arabic Font Collection”模块的根元素（可能是<section>或<div>），添加一个ID：id="font-collection"。
字体项id: 在“Featured Arabic Fonts”列表中，为每一个列表项的根元素，添加一个与字体名称对应的ID。例如，"Amiri Font"的列表项应有 id="amiri"。
需求描述:
将所有旧字体详情页的内容，填充到刚刚创建的折叠面板中。
具体实现:
定位内容源： 找到 /fonts/{font-name} 这些旧的字体详情页面的源代码或内容数据库。
迁移内容： 将每个字体详情页上的“字体特点”、“设计历史”、“使用演示”等所有文本和图片内容，原封不动地复制到“Featured Arabic Fonts”列表中，对应字体项下方的、默认隐藏的折叠面板HTML结构内部。
不要丢弃任何有价值的内容。 所有内容都存在于主页的源代码中，对SEO至关重要。
需求描述:
这是SEO的关键一步。我们需要将所有旧的、即将废弃的URL，通过服务器配置，永久重定向到新的目标位置。
具体实现:
请在您的服务器配置文件（如 .htaccess for Apache, 或 nginx.conf for Nginx）或您的网站托管平台/框架的重定向设置中，添加以下规则：
重定向字体列表页：
源URL: https://arabic-calligraphy-generator.com/fonts
目标URL: https://arabic-calligraphy-generator.com/#font-collection (指向新的探索模块)
类型: 301 (Permanent Redirect)
重定向所有字体详情页 (使用锚点):
源URL: https://arabic-calligraphy-generator.com/fonts/amiri
目标URL: https://arabic-calligraphy-generator.com/#amiri
类型: 301 (Permanent Redirect)
...对所有13个字体详情页，重复此操作，确保id与URL路径名匹配。
博客页面处理：
特别注意： 不要为任何 /blog/... 的URL设置重定向。
需求描述:
完成上述步骤后，进行最后的清理和验证工作。
具体实现:
移除/更新旧链接： 检查全站，确保所有指向旧的 /fonts 或 /fonts/{font-name} 页面的内部链接都已被移除或更新。特别是“Featured Arabic Fonts”下方的“View All Fonts”按钮，现在应该改为一个指向#font-collection的锚链接，或者直接移除。
测试重定向： 使用浏览器的隐身模式，手动访问几个旧的URL（包括/fonts和几个详情页），验证它们是否能正确地301重定向到主页的新锚点位置。
更新站点地图： 从您的 sitemap.xml 文件中，移除所有被重定向的旧URL。确保站点地图只包含您希望Google索引的有效页面。
4.0 预期结果 (Expected Outcome)
网站结构简化为以主页为核心，博客为辅助的健康模型。
所有SEO权重和内容都聚合到主页，显著提升其主题权威性。
旧的 /fonts 页面功能被一个体验更优的、集成的“探索”模块所取代，该模块同时具备目录、详情展示和快速切换功能。
用户体验流程清晰：上半部分专注创作，下半部分专注探索，两者之间通过功能联动无缝衔接。
在Google重新抓取和评估后，主页的曝光量和排名有望得到显著提升。