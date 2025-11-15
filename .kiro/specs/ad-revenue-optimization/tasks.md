# Implementation Plan

## 阶段1：核心广告位实现（生成器内部）

- [ ] 1. 创建基础广告组件和Hook
  - 创建`components/ads/ad-slot.tsx`组件，实现广告位渲染、懒加载和事件追踪
  - 创建`hooks/use-intersection-observer.ts` Hook，实现视口检测功能
  - 添加TypeScript类型定义和接口
  - _Requirements: 1.1, 1.4, 1.5, 2.1_

- [ ] 1.1 实现AdSlot组件核心功能
  - 定义AdSlotProps接口（slotId, format, className, desktopOnly, mobileOnly）
  - 实现状态管理（adLoaded, adPushed）
  - 实现shouldShow方法处理响应式显示逻辑
  - 实现loadAd方法调用adsbygoogle.push
  - 实现trackAdView方法记录Ad_Slot_View事件
  - _Requirements: 1.1, 1.4, 2.1, 3.1, 3.2_

- [ ] 1.2 实现骨架屏占位组件
  - 创建ad-skeleton样式，设置minHeight为280px
  - 添加"Advertisement"文本提示
  - 确保骨架屏在广告加载前显示，加载后隐藏
  - 使用overflow-hidden防止布局抖动
  - _Requirements: 1.5, 3.3_

- [ ] 1.3 实现useIntersectionObserver Hook
  - 接收ref和options参数
  - 创建IntersectionObserver实例，监听元素可见性
  - 当元素进入视口时设置isVisible为true（只触发一次）
  - 组件卸载时清理observer
  - 处理旧浏览器不支持IntersectionObserver的降级方案
  - _Requirements: 1.4, 2.1_

- [ ] 1.4 实现懒加载逻辑
  - 使用useIntersectionObserver Hook监听广告位可见性
  - 设置threshold为0.25，rootMargin为'100px 0px'
  - 仅在isVisible为true且adPushed为false时加载广告
  - 延迟100ms执行loadAd，避免阻塞主线程
  - _Requirements: 1.4, 2.1_

- [ ] 1.5 实现错误处理
  - 使用try-catch捕获adsbygoogle.push错误
  - 检查window.adsbygoogle是否存在，不存在时记录错误
  - 防止多次push导致的错误（使用adPushed状态）
  - 错误时保持骨架屏显示，不影响布局
  - _Requirements: 2.3_

- [ ] 2. 添加多语言翻译文本
  - 在`messages/en.json`中添加ads.sponsored和ads.supportUs翻译
  - 在`messages/ar.json`中添加阿拉伯语翻译
  - 在`messages/fr.json`中添加法语翻译
  - 在`messages/de.json`中添加德语翻译
  - 确保翻译文本简洁（不超过15个字符）
  - _Requirements: 7.1, 7.2, 7.3, 7.5_

- [x] 3. 集成广告位到生成器组件
  - 在`components/calligraphy-generator.tsx`中导入AdSlot组件
  - 在Preview Card和Templates Card之间插入Ad Card
  - 使用Card组件包裹AdSlot，保持视觉一致性
  - 添加"Sponsored"和"Support Us"标签，使用useTranslations获取翻译
  - 设置Ad Card的padding为p-4（比其他Card的p-6稍小）
  - _Requirements: 1.1, 1.2, 1.3, 3.4, 7.1, 7.4_

- [ ] 3.1 创建Ad Card结构
  - 使用Card组件，className为"overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm"
  - CardContent的padding设置为p-4
  - 创建标签区域，使用flex布局，justify-between对齐
  - 左侧显示"Sponsored"文本，样式为text-xs text-amber-600 uppercase tracking-wide font-medium
  - 右侧显示"Support Us" Badge，variant为outline，样式为text-xs border-amber-200 text-amber-600
  - _Requirements: 1.2, 1.3, 7.1_

- [ ] 3.2 插入AdSlot组件
  - 在标签区域下方插入AdSlot组件
  - 设置slotId为"generator-preview-below"
  - 设置format为"multiplex"
  - 不添加额外的className（使用默认样式）
  - _Requirements: 1.1, 3.4_

- [ ] 3.3 确保布局一致性
  - 验证Ad Card与Preview Card和Templates Card的间距一致（space-y-6）
  - 验证Ad Card的边框颜色、背景色、圆角与其他Card一致
  - 验证移动端和桌面端布局正确
  - _Requirements: 1.2, 3.1, 3.5_

- [ ] 4. 配置AdSense设置
  - 登录AdSense后台，进入"广告" → "Auto ads" → "高级设置"
  - 添加CSS选择器排除规则：'.ad-slot-container'
  - 添加CSS选择器排除规则：'[data-ad-slot]'
  - 验证Auto Ads的Anchor、Side-rail、Vignette格式仍然启用
  - 在AdSlot组件中替换'ca-pub-YOUR_PUBLISHER_ID'为实际的Publisher ID
  - _Requirements: 2.4, 8.1, 8.2, 8.4_

- [ ] 5. 扩展Analytics追踪
  - 在`lib/analytics.ts`中添加AD_SLOT_VIEW事件类型到CalligraphyEvent枚举
  - 定义AdSlotViewProps接口（slotId, format, device, page, timestamp）
  - 验证trackCalligraphyEvent函数能够正确记录Ad_Slot_View事件
  - 在AdSlot组件的trackAdView方法中传递正确的事件属性
  - _Requirements: 2.1, 2.2, 2.5_

- [ ] 6. 测试和验证
  - 在本地开发环境测试广告位渲染
  - 验证骨架屏在广告加载前显示
  - 验证IntersectionObserver懒加载正常工作
  - 验证Ad_Slot_View事件正确追踪
  - 验证桌面端和移动端布局正确
  - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [ ] 6.1 桌面端测试
  - 在Chrome浏览器（1920x1080）测试广告位显示
  - 在Firefox浏览器（1366x768）测试广告位显示
  - 在Safari浏览器测试广告位显示
  - 验证Ad Card的视觉样式与Preview Card和Templates Card一致
  - 验证"Sponsored"和"Support Us"标签正确显示
  - 验证广告懒加载：滚动到广告位时才加载
  - _Requirements: 3.1, 3.2_

- [ ] 6.2 移动端测试
  - 在iOS Safari（375x667）测试广告位显示
  - 在Android Chrome（414x896）测试广告位显示
  - 验证响应式布局正确，广告宽度适应屏幕
  - 验证触摸滚动流畅，无卡顿
  - 验证广告不遮挡Preview Card和Templates Card内容
  - _Requirements: 3.1, 3.2, 3.3, 3.5_

- [ ] 6.3 广告拦截器测试
  - 启用AdBlock，验证页面布局不受影响
  - 启用uBlock Origin，验证页面布局不受影响
  - 验证骨架屏保持显示，不显示错误信息
  - 验证其他功能（生成器、下载）正常工作
  - _Requirements: 4.4_

- [ ] 6.4 多语言测试
  - 切换到英语（en），验证"Sponsored"和"Support Us"显示正确
  - 切换到阿拉伯语（ar），验证"برعاية"和"ادعمنا"显示正确，RTL布局正确
  - 切换到法语（fr），验证"Sponsorisé"和"Soutenez-nous"显示正确
  - 切换到德语（de），验证"Gesponsert"和"Unterstützen"显示正确
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 6.5 性能测试
  - 使用Lighthouse测试CLS指标，确保<0.05
  - 使用Lighthouse测试LCP指标，确保<2.5s
  - 使用Lighthouse测试FID指标，确保<100ms
  - 验证广告懒加载不影响首屏渲染速度
  - 使用Chrome DevTools的Performance面板验证无长任务阻塞
  - _Requirements: 1.5, 4.4_

- [ ] 7. 部署到生产环境
  - 提交代码到Git仓库，创建Pull Request
  - 代码审查通过后合并到主分支
  - 部署到生产环境
  - 验证生产环境广告位正常显示
  - 验证AdSense报表开始记录新广告位的数据
  - _Requirements: 2.5, 5.1_

- [ ] 8. 监控和数据收集（7天）
  - 每日检查AdSense报表的In-page Active View指标（目标：80%+）
  - 每日检查Plausible Analytics的跳出率（警戒线：5%）
  - 每日检查Plausible Analytics的停留时间（警戒线：3分钟）
  - 每日检查Google Search Console的CLS指标（警戒线：0.10）
  - 每日检查下载转化率（警戒线：-10%）
  - 每日检查广告收益（目标：+7-10%）
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 8.1 创建监控仪表板
  - 在Google Sheets或类似工具中创建数据收集表格
  - 每日记录关键指标：Active View, 跳出率, 停留时间, CLS, 收益
  - 创建图表可视化指标变化趋势
  - 设置警报规则，指标超过警戒线时发送通知
  - _Requirements: 5.1, 5.3_

- [ ] 8.2 分析Ad_Slot_View事件数据
  - 在Plausible或自定义分析工具中查看Ad_Slot_View事件数
  - 对比Ad_Slot_View事件数与AdSense报表的展示数
  - 分析桌面端和移动端的广告可见性差异
  - 分析不同页面（首页、多语言页面）的广告表现
  - _Requirements: 2.1, 2.2, 2.5_

- [ ] 8.3 评估阶段1效果
  - 7天后汇总所有监控数据
  - 对比实施前后的关键指标变化
  - 计算实际收益提升百分比
  - 评估是否达到预期目标（Active View 80%+, 收益+7-10%）
  - 决定是否继续阶段2或需要调整方案
  - _Requirements: 5.2, 5.5_

## 阶段2：首页外部广告位（可选，仅在阶段1成功后执行）

- [ ] 9. 评估阶段1结果，决定是否继续
  - 验证阶段1的Active View达到80%+
  - 验证跳出率未上升超过3%
  - 验证停留时间未下降超过1分钟
  - 验证CLS保持在0.05以下
  - 验证用户反馈正面，无大量投诉
  - _Requirements: 5.2, 6.3_

- [ ] 10. 在首页添加第二个广告位
  - 在`app/[locale]/page.tsx`中导入AdSlot组件
  - 在DynamicCalligraphyGenerator组件下方插入AdSlot
  - 设置slotId为"generator-below-multiplex"
  - 设置format为"multiplex"
  - 设置className为"mb-12"以保持与其他section的间距
  - _Requirements: 6.1, 6.2, 6.4, 6.5_

- [ ] 11. 配置第二个广告位的AdSense设置
  - 在AdSense后台创建新的广告单元"Generator Below"
  - 获取新的广告单元ID
  - 在AdSlot组件中使用新的slotId
  - 验证Auto Ads排除规则包含新的广告位
  - _Requirements: 6.4, 8.1, 8.2_

- [ ] 12. 测试第二个广告位
  - 验证第二个广告位在首页正确显示
  - 验证两个广告位之间的间距合理（不会太密集）
  - 验证懒加载正常工作
  - 验证Ad_Slot_View事件正确追踪两个广告位
  - 验证桌面端和移动端布局正确
  - _Requirements: 6.1, 6.2, 6.5_

- [ ] 13. 部署第二个广告位到生产环境
  - 提交代码到Git仓库，创建Pull Request
  - 代码审查通过后合并到主分支
  - 部署到生产环境
  - 验证生产环境两个广告位都正常显示
  - 验证AdSense报表记录两个广告位的数据
  - _Requirements: 6.1, 6.2_

- [ ] 14. 监控第二个广告位效果（7天）
  - 每日检查两个广告位的Active View
  - 每日检查整体跳出率和停留时间
  - 每日检查CLS指标
  - 每日检查总收益变化
  - 对比只有一个广告位和两个广告位的效果差异
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 15. 最终评估和优化
  - 汇总阶段1和阶段2的所有数据
  - 计算总收益提升百分比
  - 分析哪个广告位表现更好
  - 决定是否保留两个广告位或只保留一个
  - 编写最终报告，总结优化效果和经验教训
  - _Requirements: 5.5_

## 回滚计划（如果需要）

- [ ] 16. 快速回滚（如果指标恶化）
  - 注释Ad Card代码，禁用广告位显示
  - 提交代码并立即部署到生产环境
  - 验证广告不再显示，页面恢复原状
  - 监控回滚后的指标变化
  - _Requirements: 5.3, 5.4_

- [ ] 17. 完全回滚（如果需要彻底移除）
  - 删除AdSlot组件文件（components/ads/ad-slot.tsx）
  - 删除useIntersectionObserver Hook文件
  - 删除翻译文本（messages文件中的ads部分）
  - 恢复AdSense Auto Ads设置（移除排除规则）
  - 提交代码并部署到生产环境
  - _Requirements: 5.4_

- [ ] 18. 回滚后分析
  - 收集回滚前后的关键指标对比数据
  - 汇总用户反馈和投诉内容
  - 分析AdSense数据，找出问题原因
  - 制定改进方案（调整位置、格式、高度等）
  - 决定是否重新尝试或放弃优化
  - _Requirements: 5.5_

## 未来增强（可选）

- [ ] 19. 高RPM语言优化（FR/DE）
  - 在生成器组件中检测当前语言（locale）
  - 当locale为'fr'或'de'时，在桌面端侧边栏添加额外广告位
  - 设置desktopOnly为true，仅在桌面端显示
  - 监控FR/DE页面的广告表现
  - _Requirements: 6.1, 6.2_

- [ ] 20. 用户偏好设置
  - 添加"隐藏广告"按钮到Ad Card
  - 使用localStorage存储用户偏好
  - 当用户选择隐藏广告时，不显示Ad Card
  - 提供"显示广告以支持我们"的提示
  - _Requirements: 4.1, 4.2, 4.3_

- [ ] 21. A/B测试框架
  - 实现feature flag系统，控制广告位显示
  - 随机分配用户到对照组和实验组
  - 收集两组用户的关键指标数据
  - 分析A/B测试结果，选择最优方案
  - _Requirements: 5.1, 5.5_
