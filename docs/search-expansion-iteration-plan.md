# 搜索增长迭代计划（2025 Q4）

## 目标
- 在 8 周内恢复自然流量增长，聚焦 Search Console 中展现高但缺少专页的意图。
- 提升用户体验与变现潜力，通过场景化落地页和模板入口优化广告 RPM。

> 数据来源：`arabic-calligraphy-generator.com-Performance-on-Search-2025-11-12`（GSC 导出）与 Plausible 最近 30 天日志。

## 路线图
| 周期 | 核心主题 | 关键交付物 |
| --- | --- | --- |
| Week 1-2 | 首页定位 + 追踪 | 重写 hero/meta/FAQ，补齐 HowTo schema；`lib/analytics.ts` 埋点生成器输入→字体→导出漏斗；更新 sitemap/hreflang。 |
| Week 3-4 | 高潜落地页（批次一） | `ai-arabic-calligraphy-generator`、`arabic-calligraphy-logo-maker` 上线；生成器支持模板预设一键导入；增加美国市场专属模块（/us 或 Hero 子板块，含美式场景与模板）。 |
| Week 5-6 | 高潜落地页（批次二） | `arabic-calligraphy-wallpaper`、`arabic-calligraphy-tattoo`、加强版 `quran-verse` 教程页；季节性模板库（Ramadan/Eid/Thanksgiving/Christmas）上线，并完成图片 SEO（重命名文件、alt 文本、image sitemap）。 |
| Week 7-8 | 本地化 + 字体深挖 | 印尼/法语/孟加拉/阿语专页；`/fonts/*` 加下载对比表、FAQ schema；模板库邮件订阅/付费提示。 |

## 工作流细化

### 1. 首页定位调整
1. Hero 区改写：突出“在线生成器、实时预览、AI 辅助”，弱化“下载字体”叙述，保证 `arabic calligraphy generator` 语义主导。
2. FAQ/HowTo 文案同步更新，强调步骤体验，减少“download”字样。
3. 更新 SoftwareApplication、WebApplication、FAQ schema，添加新的价值点与 CTA。
4. Analytics：在 `calligraphy-generator.tsx` 中触发 `trackEvent`，记录输入、字体切换、导出次数，区分 locale/设备。

### 2. 新 Landing Pages（批次一）
- **AI Arabic Calligraphy Generator**
  - 模块：AI 功能介绍、推荐提示词、生成示例库、FAQ（模型来源、隐私）。
  - CTA：一键跳转至生成器并加载 AI 预设。
- **Arabic Calligraphy Logo Maker**
  - 模块：品牌案例、导出格式（SVG/PNG/PSD）、商业授权说明、可选付费模板。
  - Schema：FAQ + Product/Service。
- **模板预设系统**
  - 在 `components/calligraphy-generator.tsx` 中新增模板列表（JSON），供各落地页传递 `preset` 参数加载。

### 3. 新 Landing Pages（批次二）
- **Wallpaper/Poster**：展示 4K 壁纸、打印建议、下载按钮，附 HowTo schema。
- **Tattoo/Body Art**：黑白线稿示例、打印尺寸说明、免责声明。
- **Quran Verse 教程升级**：加入经文音译/翻译、逐步操作图、FAQ。
- **季节性模板**：提前 1-2 个月发布 Ramadan/Eid/Thanksgiving/Christmas 等主题模板，并在 landing page 中强调可一键导入生成器。

### 4. 图片 SEO
- 批量重命名高价值图片（模板/示例）为描述性文件名，如 `arabic-wedding-calligraphy-template.png`。
- 为生成器示例、模板卡片补充包含核心关键词的 alt 文本（≤150 字符）。
- 生成独立的 image sitemap 并提交至 GSC；对精选作品添加 `ImageObject` schema。

### 5. 本地化扩展
- 为 ID/FR/BN/AR 创建专属 landing page，使用原生语言 H1/H2 与 FAQ，覆盖常见关键词（如 “kaligrafi arab online gratis”）。
- 提供本地案例截图、针对当地节日/应用场景的 CTA。

### 6. 字体与资源页升级
- `/fonts/*`：新增“字体一览表 + 最佳用途 + 下载来源 + FAQ schema”。
- `/resources/free-arabic-fonts`：
  - 加入在线预览、对比表、常见问题。
  - 每种字体提供“导入生成器”按钮。

### 7. 变现与增长实验
- 导出完成弹窗添加“高分辨率模板/PSD 包”订阅或付费提示。
- 新落地页底部保留 AdSense（非核心区域）测试 RPM。
- 引入邮件订阅，按场景推送模板包。

## 成功指标
- GSC：
  - AI/Logo/Wallpaper 等关键词展现提升 2-3 倍，CTR ≥10%。
  - `arabic calligraphy generator` 排名回到前 5。
- Plausible：
  - 新落地页占自然访次 ≥15%，平均停留 ≥2 分钟。
- RPM：整体提升 ≥10%。
- 模板/订阅：每周新增 ≥100 订阅用户。

## 风险 & 注意事项
- 多语言文本需同步更新 `messages/*.json`。
- 新页上线后立即更新 sitemap + IndexNow。
- 模板参数需在主要浏览器测试兼容性。

---
负责人：Codex（规划支持）+ 站点所有者 · 更新时间：2025-11-12。
