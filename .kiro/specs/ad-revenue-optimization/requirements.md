# Requirements Document

## Introduction

本项目旨在通过在阿拉伯书法生成器网站中添加手动广告位来优化广告收益，同时保持优秀的用户体验。当前网站使用Google Auto Ads，但Auto Ads无法识别动态生成的内容区域（生成器预览区），导致最高价值的用户注意力区域没有广告展示。通过在关键位置手动插入广告，预期可以将In-page Active View从36%提升到80%+，整体收益提升7-10%。

## Glossary

- **Generator Component**: 阿拉伯书法生成器组件，包含文本输入、字体选择、预览区域和控制面板
- **Preview Card**: 生成器中显示用户生成的书法预览的卡片组件
- **Templates Card**: 生成器中显示4个特色设计模板的卡片组件
- **AdSlot Component**: 自定义的广告位组件，负责懒加载和展示AdSense广告
- **Auto Ads**: Google AdSense的自动广告功能，自动选择广告位置
- **Multiplex Ad**: Google AdSense的原生广告格式，显示多个广告内容，RPM较高
- **Active View**: 广告可见性指标，表示广告实际被用户看到的比例
- **In-page Ad**: 页面内嵌广告，区别于Anchor（固定底部）和Side-rail（侧边栏）
- **CLS (Cumulative Layout Shift)**: 累积布局偏移，衡量页面视觉稳定性的指标
- **RPM (Revenue Per Mille)**: 每千次展示收益

## Requirements

### Requirement 1

**User Story:** 作为网站所有者，我希望在生成器预览区下方添加高可见性的广告位，以便提升广告收益而不影响用户体验

#### Acceptance Criteria

1. WHEN 用户完成书法生成并查看预览后，THE AdSlot Component SHALL 在Preview Card和Templates Card之间展示一个Multiplex广告
2. THE AdSlot Component SHALL 使用与其他Card相同的视觉样式（border-amber-200, bg-white/80, backdrop-blur-sm），以保持布局一致性
3. THE AdSlot Component SHALL 在广告上方显示"Sponsored"和"Support Us"标签，让用户明确识别这是广告内容
4. THE AdSlot Component SHALL 使用IntersectionObserver实现懒加载，仅在广告进入视口时加载
5. THE AdSlot Component SHALL 在广告加载前显示骨架屏占位，避免CLS超过0.05

### Requirement 2

**User Story:** 作为网站所有者，我希望广告位能够自动追踪展示数据，以便评估广告效果和优化策略

#### Acceptance Criteria

1. WHEN AdSlot Component进入用户视口并开始加载广告时，THE System SHALL 调用trackCalligraphyEvent函数记录'Ad_Slot_View'事件
2. THE 'Ad_Slot_View'事件 SHALL 包含slotId、format、device和page等属性
3. THE AdSlot Component SHALL 在广告加载失败时记录错误日志到console
4. THE System SHALL 在AdSense后台配置CSS选择器排除规则，防止Auto Ads与手动广告位冲突
5. WHEN 用户访问首页时，THE System SHALL 能够在AdSense报表中区分手动广告位和Auto Ads的数据

### Requirement 3

**User Story:** 作为网站所有者，我希望广告位在桌面端和移动端都能正常显示，以便覆盖所有用户设备

#### Acceptance Criteria

1. THE AdSlot Component SHALL 在桌面端（width >= 1024px）和移动端（width < 1024px）都能正常渲染
2. THE AdSlot Component SHALL 使用responsive广告格式，自动适应不同屏幕宽度
3. WHEN 在移动端显示时，THE AdSlot Component SHALL 保持最小高度280px以确保广告完整显示
4. THE AdSlot Component SHALL 在生成器组件的右侧预览区域内渲染，不影响左侧控制面板布局
5. THE AdSlot Component SHALL 在移动端保持与Preview Card和Templates Card相同的间距（space-y-6）

### Requirement 4

**User Story:** 作为频繁使用的用户，我希望广告不会打断我的工作流程，以便我能快速完成书法生成任务

#### Acceptance Criteria

1. THE AdSlot Component SHALL 位于Preview Card下方，不阻挡预览内容和下载按钮
2. THE AdSlot Component SHALL 位于Templates Card上方，不影响新用户浏览模板
3. WHEN 用户点击下载按钮后，THE System SHALL 不显示任何强制性的广告页面或弹窗
4. THE AdSlot Component SHALL 不影响生成器的核心功能（文本输入、字体选择、样式调整、下载）
5. THE System SHALL 保持页面跳出率低于5%，停留时间不低于3分钟

### Requirement 5

**User Story:** 作为网站所有者，我希望能够轻松监控广告效果并在必要时回滚，以便控制风险

#### Acceptance Criteria

1. THE System SHALL 每日记录In-page Active View、跳出率、停留时间、CLS和下载转化率等关键指标
2. WHEN In-page Active View达到60%或以上时，THE System SHALL 被视为达到优化目标
3. WHEN 跳出率上升超过3%或停留时间下降超过1分钟时，THE System SHALL 触发警报
4. THE AdSlot Component SHALL 能够通过注释代码的方式快速禁用，无需复杂的配置更改
5. THE System SHALL 在实施后7天内生成数据报告，对比实施前后的关键指标变化

### Requirement 6

**User Story:** 作为网站所有者，我希望在首页生成器外部添加可选的第二个广告位，以便在第一阶段成功后进一步提升收益

#### Acceptance Criteria

1. THE System SHALL 在首页的DynamicCalligraphyGenerator组件下方预留广告位位置
2. THE 第二个广告位 SHALL 默认不启用，仅在第一阶段测试成功后手动启用
3. WHEN 第一个广告位的Active View达到80%且用户体验指标未恶化时，THE System SHALL 允许启用第二个广告位
4. THE 第二个广告位 SHALL 使用与第一个广告位相同的AdSlot Component和配置
5. THE 第二个广告位 SHALL 位于"How to Use"section之前，与生成器组件保持12个单位的间距（mb-12）

### Requirement 7

**User Story:** 作为多语言用户，我希望广告位的标签文本能够显示我的语言，以便更好地理解广告内容

#### Acceptance Criteria

1. THE AdSlot Component SHALL 使用next-intl的useTranslations hook获取翻译文本
2. THE System SHALL 在messages文件中提供'ads.sponsored'和'ads.supportUs'的翻译
3. THE System SHALL 至少支持英语（en）、阿拉伯语（ar）、法语（fr）和德语（de）的广告标签翻译
4. WHEN 用户切换语言时，THE AdSlot Component SHALL 自动更新标签文本为对应语言
5. THE 翻译文本 SHALL 保持简洁（不超过15个字符），以适应移动端小屏幕显示

### Requirement 8

**User Story:** 作为网站所有者，我希望AdSense配置正确，以便手动广告位和Auto Ads能够和谐共存

#### Acceptance Criteria

1. THE System SHALL 在AdSense后台的Auto ads高级设置中添加CSS选择器排除规则：'.ad-slot-container'和'[data-ad-slot]'
2. THE System SHALL 保留Auto Ads的Anchor、Side-rail和Vignette格式，仅排除手动广告位区域
3. THE System SHALL 为每个手动广告位分配唯一的data-ad-slot属性值
4. THE System SHALL 使用正确的AdSense Publisher ID（ca-pub-YOUR_PUBLISHER_ID需要替换为实际ID）
5. THE System SHALL 确保Multiplex广告使用data-ad-format="autorelaxed"和data-full-width-responsive="true"
