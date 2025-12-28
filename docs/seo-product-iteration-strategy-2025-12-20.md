# Arabic Calligraphy Generator：产品 × SEO 系统性迭代方案（基于 GSC 2025-12-20）

> 目标：从“一个首页型工具站”升级为“可持续扩展的搜索驱动产品”，在不牺牲核心体验（生成器首屏可用）的前提下，建立可复制的增长引擎。  
> 受众：产品经理 / SEO / 前端。供你后续交给 Claude 做 review。

---

## 0. 一句话结论（TL;DR）

目前流量还远没到顶：你已经证明了“工具 + 多语言”能拿到稳定自然流量，但增长瓶颈来自 **意图覆盖不足（缺少关键落地页）**、**CTR 机会未吃到（部分页面排名不错但点击极低）**、以及 **主题集群/内链不足（权重被分散）**。下一阶段应以“产品化落地页 + 模板/场景闭环 + 可测量的迭代节奏”三件事为主线推进。

补充（基于页面级数据的“P0 发现”）：
- 印尼版本 `/id` CTR `22.84%` 且 clicks `3419`，是当前**最明确的高 ROI 市场信号**，建议与英文主线并行推进（而不是后置）。
- 存在“高曝光零点击”页面：`/faq`（2142 impr / 0 click）、`/blog`（2136 / 0）、`/contact`（507 / 0）。这更像是**意图错配/承接落点不对**的信号：优先用“工具页”把对应意图承接住，再决定这些页面是做轻量改造、重定位，还是后续不重点投入。

---

## 1. 数据来源与口径

### 1.1 数据源
- Google Search Console 导出：`arabic-calligraphy-generator.com-Performance-on-Search-2025-12-20`

### 1.2 口径
- Search type：Web
- Date：Last 28 days

---

## 2. 现状快照（你现在站点“长什么样”）

### 2.1 近 28 天总体表现（2025-12-20 导出）
- Clicks：`19,836`
- Impressions：`275,528`
- CTR：`7.20%`
- Avg position（按 impressions 加权）：`7.60`

### 2.2 趋势（同口径历史导出，均为 Last 28 days / Web）

| 导出日期 | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| 2025-08-02 | 6,487 | 78,299 | 8.28% | 9.43 |
| 2025-08-24 | 11,945 | 158,904 | 7.52% | 11.50 |
| 2025-09-20 | 14,225 | 226,707 | 6.27% | 10.96 |
| 2025-10-06 | 14,990 | 239,459 | 6.26% | 8.11 |
| 2025-11-12 | 16,835 | 259,628 | 6.48% | 6.85 |
| 2025-12-20 | 19,836 | 275,528 | 7.20% | 7.60 |

解读：
- Clicks 在增长（8→12 月持续上行），说明 **不是“自然流量见顶”**，更像“覆盖面逐步扩张”。
- 11→12 月 Avg position 变差但 clicks 仍增长，常见原因是：站点开始拿到更多新 query（排名更靠后），导致平均排名拉低；这反而意味着“可优化空间变大”。

### 2.3 流量集中度（Top pages，2025-12-20）
主要流量集中在少数页面：
- `/`：`5217` clicks / `77518` impr / pos `9.63`
- `/fonts`：`4393` clicks / `85819` impr / pos `7.51`
- `/ar`：`3593` clicks / `61987` impr / pos `7.22`
- `/id`：`3419` clicks / `14970` impr / pos `5.22`
- `/fr`：`1740` clicks / `15159` impr / pos `5.98`

这意味着：只要把“核心意图页”做起来，整体上限会明显上移（现在权重都压在首页/字体页上了）。

### 2.4 国家与设备结构（2025-12-20）
- 国家 Top：Indonesia（`4117` clicks）、India（`1309`）、Bangladesh（`1108`）、Pakistan（`1008`）
- 设备：Mobile（`10642` clicks / pos `6.62`）明显强于 Desktop（`8925` / pos `8.58`）

解读：
- 你的强势市场非常明确：东南亚 + 南亚。
- Desktop 排名更差，通常是：竞争对手在桌面 SERP 的标题/摘要更“产品化”、或你页面可读内容/结构化数据不足导致富结果占比低。

### 2.5 关键异常：高曝光但零点击/极低点击页面（P0）
（来源：Pages.csv，Last 28 days）

| 页面 | Impressions | Clicks | CTR | Avg position | 可能问题 |
|---|---:|---:|---:|---:|---|
| `/faq` | 2,142 | 0 | 0.00% | 6.46 | Snippet/意图不匹配，或被首页“分流” |
| `/blog` | 2,136 | 0 | 0.00% | 6.39 | 同上；列表页 SERP 价值表达不足 |
| `/use-cases` | 2,156 | 1 | 0.05% | 6.39 | 列表页弱于“具体场景页”；需要更强的价值主张/内链 |
| `/contact` | 507 | 0 | 0.00% | 7.31 | 常见为品牌/导航型展示，可能无需强求点击；先查该页触发 query |

建议动作（先做诊断再改文案）：
1) 在 GSC 里分别筛选 Page=`/faq`、`/blog`、`/use-cases` 导出 Queries，确认它们具体在被哪些词触发（避免“盲改标题”）。  
2) 对确实有价值的 query：优先创建/强化对应“工具页”来承接；`/faq`、`/blog` 只做“辅助定位”（例如作为帮助中心/知识库，负责解释与内链，不承担主转化）。  
3) 若确认是低价值/误触发 query：可以选择“弱化展示”（例如更明确的标题表述）或后续考虑 noindex（谨慎，需基于 query 明细做决定）。  

---

## 3. 需求与意图分析（用户到底在搜什么）

### 3.1 Top queries（按点击）
你已经在几个高价值“泛意图”上获得大量点击：
- `arabic font free download`（293 clicks / 4264 impr / pos 7.46）
- `arabic calligraphy fonts`（270 / 2497 / pos 6.30）
- `arabic calligraphy generator`（267 / 3090 / pos 9.62）
- `arabic fonts free download`（161 / 2273 / pos 7.73）
- 印尼语系 `kaligrafi online`（255 / 393 / pos 1.46，强势）

### 3.2 “最容易突破”的机会：Striking distance queries（pos 8–20 + impressions≥500）
这些词一旦从 8–10 推到 3–5，点击会显著放大：
- `arabic calligraphy generator`（3090 impr / pos 9.62）
- `arabic font generator`（1374 / pos 8.79）
- `arabic text generator`（1025 / pos 9.30，CTR 仅 1.7%）
- 阿语 `خط عربي`（1805 / pos 8.40，CTR 仅 2.7%）

### 3.3 意图簇占比（基于 Top 1000 queries 的粗分）
（注意：这是 top queries 的采样，非全量；但足够指导优先级）

| 意图簇 | clicks（top1000） | impressions（top1000） | 代表词 |
|---|---:|---:|---|
| Fonts（找字体/风格） | 3830 | 48749 | arabic calligraphy fonts / arabic font style |
| Generator（在线生成/转换） | 3744 | 28818 | arabic calligraphy generator / arabic text generator |
| Download（免费下载） | 1857 | 20545 | arabic font free download / free arabic fonts |
| Name（写名字/个性化） | 300 | 4793 | write your name / اكتب اسمك… |
| Logo（品牌/标志） | 67 | 426 | arabic calligraphy logo generator |
| PNG/SVG（导出格式） | 25 | 108 | arabic text png generator / arabic text to svg |

结论：
- “Fonts + Download + Generator” 是最大盘。
- “Name / Logo / PNG-SVG” 盘子不大但 **转化意图强**，适合做“产品闭环页”（更容易触发下载/分享/回访）。

### 3.4 语言/脚本结构（top1000 queries）
- Latin/Other：`79,559` impressions（主战场）
- Arabic script：`26,954` impressions（第二战场）
- Bengali script：`4,785` impressions（长尾但可做）

策略含义：
- 先把 **英文（Latin）意图页** 做强，能覆盖最大盘；后续再挑 1–2 个 locale 做深（建议从印尼或阿语开始）。

---

## 4. 站点能力盘点（你现在能承接什么）

### 4.1 已有的“可承接搜索”的资产
（从代码结构 + GSC top pages 观察）
- 生成器首页：`/` 与 `/<locale>`（目前只有首页多语言）
- Fonts Hub：`/fonts` + `/fonts/{font}`（有实际流量）
- Guides/Tutorials/Blog：内容资产已在（但需要更强的“搜索意图映射”）
- Use cases：`/use-cases/*`（意图正确，但 CTR/点击偏低，说明承接方式需要强化）
- Templates：`/templates`（存在但尚未成为流量入口）
- Resources：`/resources/free-arabic-fonts`（有流量苗头但很小）

### 4.2 当前明显缺口
1) **缺少关键意图落地页（工具页）**：  
`arabic text generator` / `khat converter` / `arabic font generator` / `write your name...` / `arabic logo generator` 等，搜索意图非常明确，但站点没有“一眼命中”的页面。

2) **CTR 未被系统性优化**：  
例如部分页面在 pos≈5–7 但 CTR 极低，属于“标题/摘要/富结果/首屏承诺”问题，不是排名问题。

3) **主题集群（Topic cluster）不够强**：  
目前权重集中在首页与 fonts，其他页面像“孤岛”，难以持续吃长尾。

4) **多语言策略未进入“可复制”状态**：  
你已覆盖很多 locale 的首页，但尚未把“高价值意图页”国际化（或用更轻量方式承接本地语言意图）。

---

## 5. 下一阶段的总体策略：Product-led SEO（产品化的 SEO）

把 SEO 当成产品迭代，而不是“写内容”：

### 5.1 策略支柱 A：意图落地页（Landing pages）= 新的“产品入口”
目标：让 Google 和用户都能明确：这个页面就是为这个 query 设计的。

建议优先做 8–12 个页面（先少后多），每个页面对应一个意图簇的“冠军关键词 + 3–10 个近义长尾”。

页面类型建议：
- 工具页：`/arabic-text-generator`、`/arabic-font-generator`、`/khat-converter`
- 个性化页：`/write-your-name-in-arabic-calligraphy`
- 导出页：`/arabic-text-to-svg`、`/arabic-text-png-generator`
- 品牌页：`/arabic-calligraphy-logo-generator`

> 关键点：这些页不是“文章”，而是“带预填入口的工具页”，把用户直接导入生成器并触发下载/分享。

### 5.2 策略支柱 B：Templates & Use cases = 上下游扩展 + 内链增压器
你提的“拓展上下游/行业场景”非常对，但要产品化：

- Templates：从“列表页”升级为“可索引的模板详情页”（每个模板一个 URL，带预览图、适用场景、推荐字体、FAQ、一键套用生成器）。
- Use cases：每个场景页必须包含：
  - 典型案例展示（至少 3–6 个）
  - 一键套用（模板/预填）
  - 导出建议（PNG/SVG/印刷尺寸）
  - “推荐字体组合”并强内链到 `/fonts/*`

这样会形成：意图页 → 模板/场景 → 字体 → 回到生成器 的闭环，同时提升可抓取文本密度与语义覆盖。

### 5.3 策略支柱 C：Fonts & Download = 最大盘的“可赢战场”
你现在已经天然在吃字体相关词，但要把“下载意图”做得更明确：
- 让 `/fonts` 不只是“浏览”，而是：筛选/对比/试用/下载的入口。
- 强化 `/resources/free-arabic-fonts`：把它做成“下载型内容中心”（安装指南、授权说明、格式说明、推荐组合、FAQ）。

### 5.4 策略支柱 D：可测量的迭代节奏（没有数据就没有增长）
你要把每次改动都变成可验证的实验：
- SEO 指标：每个意图页的 impression/CTR/position 变化（按 query group）
- 产品指标：进入生成器后的激活率、导出率、分享率（按 landing page 来源分组）

### 5.5 市场策略修订：英文主线 × 印尼并行（按目标选择）
你站点当前并不是“只能选一个市场做深耕”，更合理的是 **双轨并行**：

- 若你的目标优先级是“纯流量/规模”：  
  印尼（以及 `ms/de/tr/fr` 等高 CTR locale）是更快的增长杠杆，建议把 **25%–40% 的迭代产能**投到印尼关键词承接上（详见第 11 节）。

- 若你的目标优先级是“广告 RPM/商业化”：  
  英语市场通常更值钱，但竞争更激烈；策略是“英文意图页 + 更强的产品化 Snippet + 内链集群”稳步推进，同时保持印尼侧的低成本增量。

实现上（重要）：当前你的多语言路由只覆盖首页（`middleware.ts` 的 `MULTILINGUAL_PATHS` 仅包含 `'/'`）。  
因此“印尼深耕”采用 **统一的多语言工具路径**（固定 `/tools/` 结构）：
- **扩 i18n 路由（确定方案）**：把“工具路径”加入 `MULTILINGUAL_PATHS`（`/tools/*`），再做 `/{locale}/tools/...`（如 `/id/tools/kaligrafi-online`）。  
这样 URL 结构统一、hreflang 清晰，未来扩阿语/土语不会混乱，避免后期重构成本。

---

## 6. 具体落地：页面模板（可复制的“标准作业”）

### 6.1 意图落地页（Tool Landing Page）推荐结构
以 `/arabic-text-generator` 为例（同模板复制到其它意图页）：
1) H1：直接命中 query（不玩花活）
2) 1–2 句价值主张：免费 / 无需注册 / 支持 PNG+SVG
3) 生成器组件入口（预填示例 + CTA）
4) 3–6 个示例（图片/可复制文本）
5) How-to（3–6 步）
6) 推荐字体（内链到 `/fonts/*`）
7) 场景内链（到 `/use-cases/*`、`/templates`）
8) FAQ（含 FAQPage schema）

### 6.2 Templates 详情页（建议新建）
每个模板页的 SEO 价值来自：
- 标题中包含场景 + 输出格式（例如 “Wedding Arabic Calligraphy Template (PNG/SVG)”）
- 页面主体是“可复用的作品 + 参数”，让用户愿意分享
- 内链：模板 → 场景 → 字体 → 生成器

### 6.3 内链与主题集群（建议固定规则）
建议把站点组织成 3 个 Hub：
- Hub 1：`/`（生成器入口）
- Hub 2：`/fonts`（字体选择/下载）
- Hub 3：`/templates` + `/use-cases`（场景与灵感）

Spokes（辐射页）：
- 意图页（text generator / name / logo / export）
- font detail
- use-case detail
- template detail

内链的“硬规则”：
- 每个 Spoke 至少链接回一个 Hub（避免孤岛）
- 每个 Hub 至少链接到 8–12 个 Spoke（分发权重）
- **所有工具页首屏必须有“指向首页”的锚文本链接**（锚文本使用 “Arabic Calligraphy Generator”），确保首页继续承接主词权重。
- **首页建议在 Hero/Feature 中显式出现 “Free Online Arabic Calligraphy Generator”**（可用 H2/H3），强化主词相关性。

---

## 7. 技术 SEO 关键项（建议最少集）

### 7.1 已完成的快速修复（本次已落地）
- 避免全站继承错误 canonical/hreflang（移除 root layout 中的 alternates，交由首页的 `generateMetadata` 控制）：`app/layout.tsx`
- 补齐核心栏目页 canonical（blog/guides/tutorials/use-cases 等）：相关页面的 `metadata.alternates.canonical`
- sitemap 覆盖所有 locale 首页，并补上 `/templates`：`app/sitemap.ts`

### 7.2 下一步建议（不一定要一次做完）
- 给“意图落地页”统一加结构化数据（SoftwareApplication / FAQPage / BreadcrumbList）
- 确保所有可索引页面都有 canonical
- 建立“sitemap 分片”（当页面数上来后再做即可）

### 7.3 Title/Description 优化模板（CTR Quick Wins，可直接套用）
> 目标：在不改变排名的情况下先吃 CTR 红利；优先覆盖第 2.5 节的异常页面与核心 font/guide 页。

#### 7.3.1 Title 模板（通用公式）
- 工具/意图页：`[Core Keyword] - Free Online, No Signup | PNG & SVG Export`
- 字体下载页：`[Font Name] Arabic Font - Free Download (TTF/OTF) | Preview & Use Online`
- 列表/栏目页：`[Topic] - Tutorials, Examples & Downloads | Arabic Calligraphy Generator`

#### 7.3.2 Meta Description 模板（155 字符内）
- 工具/意图页：  
  `Create [what] online for free. Choose from [feature], export as PNG/SVG, no signup. Start now.`
- 字体下载页：  
  `Download [Font] for free. [Style/use case]. Formats: TTF/OTF/WOFF2. Preview online and use instantly.`
- 栏目页：  
  `Explore [topic] with practical guides, examples, and font recommendations. Start creating with our free generator.`

#### 7.3.3 针对“零点击/极低点击页面”的标题方向（建议先 A/B）
（注意：你代码里 `/faq`、`/blog` 的 title 已比“FAQ|Blog”更具体，但数据仍为 0 clicks；因此更建议先做 query 诊断，再做标题实验。）

- `/faq` 方向（示例）：  
  `Arabic Calligraphy FAQ - Fonts, Download, PNG/SVG Export (50+ Answers)`
- `/blog` 方向（示例）：  
  `Arabic Calligraphy Blog - Tutorials, History & Font Guides (Updated Weekly)`
- `/use-cases` 方向（示例）：  
  `Arabic Calligraphy Ideas & Examples - Wedding, Logo, Instagram + Free Templates`

#### 7.3.4 需要优先处理的“低 CTR 但排名不错”页面
（来自 Pages.csv）
- `/guides/best-arabic-fonts-2025`：pos `4.90` / CTR `0.88%`（典型“标题/摘要不匹配意图”）
- `/fonts/cairo`：pos `6.46` / CTR `0.50%`
- `/fonts/tajawal`：pos `6.73` / CTR `0.25%`

建议策略：标题中明确“Free Download / Formats / Use case”，并在描述中给出“预览 + 在线生成 + 导出”三连承诺。

### 7.4 结构化数据实施清单（落地指导）
> 原则：只使用“你能证明为真”的字段（不要写虚假评分/下载量），并用页面类型匹配的 schema，避免误用导致 rich result 受限。

#### 7.4.1 推荐 schema（按页面类型）
- 首页/工具页：`SoftwareApplication` 或 `WebApplication` + `Offer(price=0)` +（可选）`FAQPage`
- FAQ：`FAQPage`
- 字体详情页：`CreativeWork`（含 `license`、可选 `isBasedOn`）+ `BreadcrumbList` +（可选）`FAQPage`
- 文章/教程：`Article` + `BreadcrumbList`
- 模板集合页：`CollectionPage` + `ItemList`（你已有雏形）
- 模板详情页（若新增）：`CreativeWork`/`ImageObject` + `isPartOf`（指向集合页）

#### 7.4.2 Next.js 实现方式（最稳妥）
在具体 page 组件中输出 JSON-LD：
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```
并确保：
- `url`、`name`、`description` 与页面内容一致
- `license` 真实可追溯（字体页已展示 license，可复用）

### 7.5 Technical Vitals（CWV）检查项（必须加入执行）
> 原则：意图页如果在移动端 LCP > 2.5s，将显著削弱排名与 CTR 的提升效果。

建议动作：
- Week 1 即加入移动端 LCP 检测（PageSpeed 或 Lighthouse），优先监测：首页 + 新工具页。
- 若 LCP 超标：  
  1) 生成器首屏用静态占位（或 skeleton），点击后再加载重 JS；  
  2) 延迟加载非关键组件（Use Cases、模板、图表）；  
  3) 减少首屏字体/图片阻塞（预加载关键资源）。  

目标线：移动端 LCP < 2.5s，CLS < 0.1。

### 7.6 商业化补充（低风险、可并行试验）
> 目标：不影响 SEO 与主转化的前提下，提升字体页的收益效率。

建议做法：
- 在 font 详情页的 “Free Download” 旁边 **低调**加入 “Premium Fonts / Get Premium Version” 的 Affiliate 推荐（不遮挡主 CTA）。
- 明确标注为推荐/赞助链接，并加 `rel="sponsored"`（避免 SEO 风险）。
- 仅在流量较高的 font 页试点（如 `/fonts/amiri`、`/fonts/noto-naskh-arabic`），先测 2–4 周再扩展。
- 维持“免费可用”的主承诺不变，避免降低转化与信任。

---

## 8. 指标体系与实验方法（把增长变成工程）

### 8.1 建议的 KPI 分层
SEO 层（结果）：
- Total clicks / impressions / CTR / avg position
- 每个意图页的：Top queries 覆盖数、Striking distance 词数量

产品层（过程）：
- 激活率：进入生成器 → 发生一次生成（或输入变更）
- 转化率：生成 → 下载（PNG/SVG）
- 分享率：下载后分享/复制链接（如果后续做 share page）

商业层（可选）：
- 广告 RPM、每千会话收益（按来源/国家分组）

### 8.2 实验设计建议
- 先做“SEO × 产品”联动实验，而不是单纯改文案：
  - 例如：意图页上线后，观察该页的查询 CTR 提升 + 站内下载率提升是否同步
- 迭代节奏建议：每两周一个小版本（2–4 个页面/模块），每次只验证 1–2 个核心假设

---

## 9. 风险与护栏（避免“越做越差”）

1) 避免薄页/泛滥 programmatic：  
先 10–20 个高质量页跑通模型，再扩张。

2) 避免关键词互相蚕食（cannibalization）：  
每个意图簇只设一个“主落地页”，其它页面做辅助长尾并内链回主页。

3) 多语言不要一次性全站国际化，但要“数据驱动并行”：  
避免把所有 locale 一次性铺开；更合理的是 **英文主线 + 一个高 ROI 市场并行**（当前数据最支持印尼），其余语言保持维护即可。

4) 不要破坏“首屏即工具”：  
任何新增内容都应该放在生成器之后（你现有体验是优势）。

5) 多语言 URL 结构不要分裂：  
若同时存在 `/id/...` 和无前缀的印尼页，将导致 hreflang 混乱、权重分散、维护成本上升。  
建议统一走 `/locale/`，工具路径通过 `MULTILINGUAL_PATHS` 放行。

---

## 10. 建议的“下一步选择题”（你来定方向）

为了最快看到突破，我建议你从下面三条里选一条做 4–6 周冲刺：

### 方向 A（最大盘）：Fonts × Download
目标：拿下 `arabic font free download` 等下载型词的更靠前排名与更高 CTR；同时提升 font detail 页点击。

### 方向 B（最容易打穿）：Text/Name 工具意图
目标：做 6–8 个意图页，专打 pos 8–10 的“striking distance”词，把平均排名与 clicks 拉升一档。

### 方向 C（产品化增长）：Templates × Use cases
目标：把模板做成“可分享作品页”，用内容资产 + 分享带来自然外链与品牌搜索增长。

> 修订建议（吸收 Review 反馈）：不管选 A/B/C 哪条主线，都应先用 1–2 周处理第 2.5 节的“零点击/极低点击”页面，这是最快可见的 Quick Wins。

---

## 11. 推荐的 8 周执行优先级（可直接照着做）

### Week 1–2：工具页优先（Quick Wins，先把“承接”做对）
- 目标：先用 2 个“高意图工具页”把核心需求承接住（并把内链/结构化数据打通），再回头处理“零点击页面”的定位问题。
- 交付（建议 P0 两个）：
  - `/tools/arabic-text-generator`（解决 `arabic text generator` CTR 异常低的问题）
  - `/tools/arabic-font-generator`（承接“font generator / font style”意图，并反哺 `/fonts`）
- 同步小修（只做与工具流量强相关的页面）：
  - `/guides/best-arabic-fonts-2025`（pos `4.90` 但 CTR `0.88%`，优先改 title/description + 补面包屑/FAQ）
  - 低 CTR font 页（如 `/fonts/tajawal`、`/fonts/cairo`）：标题中强化“Free Download / Formats / Use case”
- `/faq`、`/blog`、`/use-cases`：只做“最低成本的重定位”
  - 确认它们在 GSC 触发的 queries；在页面正文显著位置加“去工具页”的内链（把流量导走），不把它们当作主增长引擎。
  - 若 4–8 周后依然为 0 clicks，可考虑拆散 FAQ 到工具页或首页底部，`/faq` 转为 Help Center/Support；必要时评估 noindex（需基于 query 明细）。
- 验收建议（2–4 周内）：
  - 新工具页开始获得 impressions（即便初期 clicks 不高也正常）
  - `arabic text generator` 的 CTR/落点更符合预期（从 1.66% 往 3%+ 走）
  - `/guides/best-arabic-fonts-2025` CTR 至少翻倍（0.88% → 1.8%+）

### Week 3–4：印尼并行（高 ROI 增长轨）
- 基于你已强势的印尼 query 簇（如 `kaligrafi online`、`buat kaligrafi arab online`、`kaligrafi nama sendiri online`）
- 统一路径：使用 `/id/tools/...` 承接（示例：`/id/tools/kaligrafi-online`、`/id/tools/kaligrafi-nama`）
- 重点不是“翻译英文”，而是：用印尼语直接命中意图，并强导入生成器（预填 + CTA）

### Week 5–6：核心意图页建设（英文主战）
- 建议优先 4 个：`/tools/arabic-text-generator`、`/tools/arabic-font-generator`、`/tools/write-your-name-in-arabic-calligraphy`、`/tools/arabic-calligraphy-logo-generator`
- 每页按第 6.1 的产品化模板做全（示例/步骤/推荐字体/FAQ/内链）

### Week 7–8：下载意图强化（Fonts × Download）
- 强化 `/resources/free-arabic-fonts`：增加安装/授权/格式/推荐组合，并把它从“文章页”变成“下载中心”
- 统一 font 页的“下载/授权”区块表达：格式、License、适用场景、与生成器的联动 CTA
- （可选试点）在 2–3 个高流量 font 页加入 Affiliate 推荐位，观察点击与 RPM 的变化

---

## 12. 需要补充采集的数据（避免盲改）
- 为 `/faq`、`/blog`、`/use-cases` 分别导出 Queries（GSC：Search results → Pages → 选页面 → Queries → Export）
- 为 `/fonts/tajawal`、`/fonts/cairo` 导出 Queries，确认用户到底在搜“下载”还是“字体介绍/预览”
- 对 `arabic text generator`（CTR 1.66%）导出“Query → Pages”确认当前排名页面是否正确（避免落错页导致 CTR 低）

---

## 附录 A：优先级候选页面清单（第一批 8–12 个）

| 优先级 | 建议 URL | 主关键词 | 目的 | 主要内链到 |
|---:|---|---|---|---|
| P0 | `/arabic-calligraphy-generator`（可选，或保持首页） | arabic calligraphy generator | 推排名 9→5 | `/` `/fonts` |
| P0 | `/tools/arabic-text-generator` | arabic text generator | 抢明确工具意图 | `/` `/fonts` |
| P0 | `/tools/arabic-font-generator` | arabic font generator | 连接 fonts 与工具 | `/fonts` |
| P0 | `/tools/khat-converter` | khat converter | 抢近义词流量 | `/` |
| P0 | `/tools/write-your-name-in-arabic-calligraphy` | write name in arabic calligraphy | 强转化意图 | `/templates` `/use-cases/*` |
| P1 | `/tools/arabic-calligraphy-logo-generator` | arabic calligraphy logo generator | 场景落地 | `/use-cases/business-logo-arabic-fonts` |
| P1 | `/tools/arabic-text-to-svg` | arabic text to svg | 导出意图 | `/` |
| P1 | `/tools/arabic-text-png-generator` | arabic text png generator | 导出意图 | `/` |
| P1 | `/tools/free-arabic-fonts-download`（或强化 `/resources/free-arabic-fonts`） | free arabic fonts | 下载意图 | `/fonts` |

> 注：URL 命名可以再统一风格，但先用“直白可读”的英文短横线，避免过度优化。

---

## 附录 B：给 Claude Review 的检查清单
- 是否同意“先 10–20 个高质量意图页再扩张”的节奏？
- 意图页模板是否足够“产品化”（而不是文章化）？
- 内链/主题集群是否能形成权重循环，避免孤岛？
- 是否存在明显的关键词蚕食风险？如何改映射？
- 多语言策略是否合理（先英文后单市场深耕）？
- 对 CTR 低但排名好的页面，title/description 的改法建议是什么？
