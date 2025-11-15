# 首页广告收益强化方案（2025-11）

## 1. 背景 & 目标
- **现状数据**（11月8-14日 AdSense 报表）  
  - 每日估算收益 ~$11.55，总 Impression 15,783，Impression RPM $0.73  
  - In-page Active View 仅 36.23%，远低于 Anchor/Side-rail（85%+）  
  - Multiplex RPM 达到 $1.30，但目前依赖 Auto ads，展示量不足  
- **用户行为**（Plausible 最近 7 天）  
  - `/`、`/ar`、`/fr` 平均停留 4-7 分钟，生成器区域为核心交互区  
  - `/fonts` 系列和资源页停留较短，适合维持轻广告体验  
- **目标（7-14 天）**  
  1. 将长停留页（`/`, `/ar`, `/fr`, `/de`, `/tr`, `/id`, `/fonts/[slug]`）每会话可见广告数提升到 3-4  
  2. In-page Active View ≥ 60%，整体 Page RPM 提升到 $2.3-$3.0  
  3. 保持生成体验流畅，CLS < 0.05，确保 Side-rail/Anchor 照常触发

## 2. 手动广告位设计

| Slot | 类型 | 位置 | 目的 | 样式要点 |
| --- | --- | --- | --- | --- |
| Slot A | Display Responsive（In-page） | 生成器输出卡片后、说明模块前（距首屏 600-900px） | 用户完成一次生成后自然看到，补足首屏曝光 | 容器高度 280-320px，淡色骨架占位，避免 CLS |
| Slot A'（高 RPM 语言） | Display Responsive | `/fr`、`/de` 的控制面板底部（桌面端可见） | 法语/德语 RPM 高，桌面停留时间长 | 仅桌面显示，min-height 250px |
| Slot B | Multiplex（Auto relaxed） | “示例/FAQ/推荐”区块前 | 用户滚到底部必见，多条内容吸睛 | 容器 min-height 250px，配引导文案 |
| Download Bridge | Multiplex | `/fonts/[slug]/download-ready` 过桥页 | 字体下载点击后展示一次 Multiplex，再跳回实际下载 | 显示 1 秒后自动跳转，附带进度提示 |

其他页面维持 Auto ads（Anchor、Side-rail、Vignette）。通过 AdSense 排除列表把 `/fonts*`、`/resources*` 从 Vignette 中移除，避免流程受阻。

## 3. 技术实现

1. **AdSlot 组件**  
   - 新建 `components/ads/ad-slot.tsx`，负责加载一次 `adsbygoogle.js`。  
   - 使用 `IntersectionObserver`（`threshold: 0.25`, `rootMargin: '100px 0px'`）延迟 push，组件内部先渲染骨架。  
   - Props：`slotId`, `adFormat`, `style`, `lazy`, `viewportOnly` 等。  
   - 首次 push 成功后发自定义事件，供 analytics 使用。

2. **页面集成**  
   - `app/[locale]/page.tsx`：生成器模块后插 Slot A，示例区前插 Slot B；针对 `/fr`、`/de` 额外插 Slot A'。  
   - `app/[locale]/fonts/[name]/page.tsx`（字体详情）：生成器后 Slot A，FAQ 前 Slot B；下载按钮指向新的 `download-ready` Route。  
   - 其他长停留页（`/ar`, `/tr`, `/id` 等）同样结构，复用组件。  
   - Layout 调整：桌面宽度 ≥1200px 时主体宽度限制在 960px，左右留白让 Side-rail 出现。

3. **Download Ready 页面**  
   - 新增 `app/fonts/[slug]/download-ready/page.tsx`：显示一个加载状态 + Multiplex slot + 1 秒计时，超时后自动跳转至真实下载 URL。  
   - 在页面中记录 `trackCalligraphyEvent('Download_Bridge_View', {slug})` 以统计额外曝光。

4. **Analytics & 监控**  
   - 在 `AdSlot` 组件 observer 触发时调用 `trackCalligraphyEvent('Ad_Slot_View', { slotId, page, device })`，与 AdSense Active View 报表对比。  
   - 在 GA4 中创建自定义事件 `ad_slot_click`（若页面可监听 `window.addEventListener('message', ...)` 获取点击，可选项）。  
   - 每日导出 AdSense 报表，记录 Slot A/B 的 RPM、Active View、点击数，7 天后评估调整位置高度。

## 4. 排期建议

| Day | 任务 | 产出 |
| --- | --- | --- |
| Day 1 | 实现 `AdSlot` 组件、全局脚本控制、事件上报；首页添加 Slot A/B | PR #1（组件 + 首页） |
| Day 2 | 扩展到 `/ar`、`/fr`、`/de`、`/tr`、`/id`；实现 Slot A' | PR #2（多语言页） |
| Day 3 | 字体详情页 + `download-ready` 页面，整合 Multiplex | PR #3（字体体系） |
| Day 4 | 验证桌面 Side-rail 触发、移动端 Anchor 体验；Edge cases（无脚本、AdBlock） | QA 报告 |
| Day 5-7 | 观察 AdSense Active View / RPM，必要时上移 Slot A 或增加骨架高度 | 监控记录 |

## 5. 风险 & 回退
- **CLS 超标**：若 AdSlot 带来布局抖动，增加固定高度容器 + `overflow-hidden`，或在首屏前端加 Skeleton。  
- **加载失败**：若 `adsbygoogle` 未加载成功，多次 push 会报错，需在组件中捕获并记录 `window.adsbygoogle?.failureCount`。  
- **用户反馈**：若生成器区域广告过密，可以在移动端隐藏 Slot A'，或给会员/回访用户增加“隐藏广告”提示。

## 6. 验收指标
- In-page Active View ≥ 60%（AdSense 报表）  
- 日均 Multiplex 收益 ≥ $4（取代当前 $1.87）  
- Page RPM ≥ $2.3（首页、/ar、/fr）  
- 每会话可见广告数 ≥ 3（结合 `Ad_Slot_View` 事件 + Anchor/Side-rail impression）  
- 下载/分享行为未显著下降（Plausible `Download` 事件波动 <10%）

---

完成以上部署后，可在 7 天内评估收益增幅，并根据 Locale RPM（`/fr`、`/de` 高、`/id` 中、`/tr` 低）决定是否进一步增加本地化落地页或放大 Multiplex 数量。欢迎 Claude 复核实现细节或提出补充。
