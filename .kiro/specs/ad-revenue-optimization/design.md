# Design Document

## Overview

本设计文档描述了如何在阿拉伯书法生成器网站中实现手动广告位优化方案。核心策略是在用户注意力最集中的区域（生成器预览区下方）添加一个高可见性的Multiplex广告位，同时保持与现有设计的视觉一致性。

设计采用渐进式实施策略：
- **阶段1**：在生成器组件内部添加单个广告位（Preview Card和Templates Card之间）
- **阶段2**（可选）：在首页生成器外部添加第二个广告位

关键设计原则：
1. **最小侵入性**：广告位使用与现有Card相同的视觉样式，融入现有布局
2. **高可见性**：广告位于用户完成生成后自然向下滚动的路径上
3. **性能优化**：使用IntersectionObserver懒加载，避免影响首屏加载速度
4. **易于回滚**：组件化设计，可通过简单的代码注释快速禁用

## Architecture

### 系统架构图

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                    │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  app/[locale]/page.tsx (首页)                            │
│  │                                                       │
│  ├─ DynamicCalligraphyGenerator                         │
│  │  │                                                    │
│  │  └─ components/calligraphy-generator.tsx             │
│  │     │                                                 │
│  │     ├─ Preview Card                                  │
│  │     │                                                 │
│  │     ├─ 🎯 Ad Card (新增)                             │
│  │     │  └─ components/ads/ad-slot.tsx                 │
│  │     │     ├─ useIntersectionObserver hook            │
│  │     │     ├─ AdSense Script                          │
│  │     │     └─ Analytics Tracking                      │
│  │     │                                                 │
│  │     └─ Templates Card                                │
│  │                                                       │
│  └─ 🎯 AdSlot (阶段2，可选)                              │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                   Shared Components                      │
│  - components/ads/ad-slot.tsx                            │
│  - hooks/use-intersection-observer.ts                    │
│  - lib/analytics.ts                                      │
├─────────────────────────────────────────────────────────┤
│                   External Services                      │
│  - Google AdSense (Auto Ads + Manual Ads)                │
│  - Plausible Analytics                                   │
│  - Custom Event Tracking (trackCalligraphyEvent)         │
└─────────────────────────────────────────────────────────┘
```

### 数据流

```
用户访问首页
    ↓
加载生成器组件
    ↓
用户生成书法预览
    ↓
用户向下滚动查看预览
    ↓
AdSlot进入视口 (IntersectionObserver触发)
    ↓
加载AdSense脚本
    ↓
推送广告到页面 (adsbygoogle.push)
    ↓
记录Ad_Slot_View事件
    ↓
广告展示给用户
    ↓
AdSense记录展示数据
```

## Components and Interfaces

### 1. AdSlot Component

**文件路径**: `components/ads/ad-slot.tsx`

**职责**:
- 渲染AdSense广告位
- 实现懒加载（IntersectionObserver）
- 显示骨架屏占位
- 追踪广告展示事件
- 处理响应式显示（桌面端/移动端）

**接口定义**:

```typescript
interface AdSlotProps {
  slotId: string              // 广告位唯一标识符，用于AdSense和追踪
  format: 'multiplex' | 'display' | 'in-article'  // 广告格式
  className?: string          // 额外的CSS类名
  desktopOnly?: boolean       // 是否仅在桌面端显示
  mobileOnly?: boolean        // 是否仅在移动端显示
}
```

**状态管理**:

```typescript
const [adLoaded, setAdLoaded] = useState(false)      // 广告是否已加载
const [adPushed, setAdPushed] = useState(false)      // 广告是否已推送到AdSense
const isVisible = useIntersectionObserver(adRef, {   // 广告是否在视口内
  threshold: 0.25,
  rootMargin: '100px 0px'
})
```

**关键方法**:

```typescript
// 判断是否应该显示广告（响应式控制）
const shouldShow = (): boolean => {
  if (typeof window === 'undefined') return true
  const width = window.innerWidth
  if (desktopOnly && width < 1024) return false
  if (mobileOnly && width >= 1024) return false
  return true
}

// 加载广告
const loadAd = (): void => {
  if (window.adsbygoogle && adRef.current) {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
    setAdPushed(true)
    setAdLoaded(true)
    trackAdView()
  }
}

// 追踪广告展示
const trackAdView = (): void => {
  if (window.trackCalligraphyEvent) {
    window.trackCalligraphyEvent('Ad_Slot_View', {
      slotId,
      format,
      device: window.innerWidth >= 1024 ? 'desktop' : 'mobile'
    })
  }
}
```

### 2. useIntersectionObserver Hook

**文件路径**: `hooks/use-intersection-observer.ts`

**职责**:
- 监听元素是否进入视口
- 提供可配置的threshold和rootMargin
- 返回元素可见性状态

**接口定义**:

```typescript
function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean
```

**实现逻辑**:

```typescript
export function useIntersectionObserver(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)  // 只设置一次，避免重复加载
      }
    }, options)

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [ref, options, isVisible])

  return isVisible
}
```

### 3. Ad Card Wrapper (生成器内部)

**位置**: `components/calligraphy-generator.tsx` 内部

**职责**:
- 包裹AdSlot组件
- 提供视觉一致的Card样式
- 显示"Sponsored"和"Support Us"标签

**结构**:

```tsx
<Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
  <CardContent className="p-4">
    {/* 标签区域 */}
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs text-amber-600 uppercase tracking-wide font-medium">
        {t('ads.sponsored')}
      </span>
      <Badge variant="outline" className="text-xs border-amber-200 text-amber-600">
        {t('ads.supportUs')}
      </Badge>
    </div>
    
    {/* 广告位 */}
    <AdSlot 
      slotId="generator-preview-below"
      format="multiplex"
    />
  </CardContent>
</Card>
```

### 4. Analytics Integration

**文件路径**: `lib/analytics.ts` (已存在，需扩展)

**新增事件类型**:

```typescript
enum CalligraphyEvent {
  // ... 现有事件
  AD_SLOT_VIEW = 'Ad_Slot_View',           // 广告位进入视口
  AD_SLOT_LOADED = 'Ad_Slot_Loaded',       // 广告加载成功
  AD_SLOT_ERROR = 'Ad_Slot_Error',         // 广告加载失败
}
```

**事件属性**:

```typescript
interface AdSlotViewProps {
  slotId: string              // 广告位ID
  format: string              // 广告格式
  device: 'desktop' | 'mobile' // 设备类型
  page: string                // 页面路径
  timestamp: number           // 时间戳
}
```

## Data Models

### AdSlot Configuration

```typescript
interface AdSlotConfig {
  slotId: string              // 广告位唯一标识符
  publisherId: string         // AdSense Publisher ID
  format: AdFormat            // 广告格式
  minHeight: number           // 最小高度（px）
  responsive: boolean         // 是否响应式
  lazyLoad: boolean           // 是否懒加载
  threshold: number           // IntersectionObserver threshold
  rootMargin: string          // IntersectionObserver rootMargin
}

type AdFormat = 'multiplex' | 'display' | 'in-article'
```

### Ad Slot Instances

阶段1的广告位配置：

```typescript
const AD_SLOTS: Record<string, AdSlotConfig> = {
  'generator-preview-below': {
    slotId: 'generator-preview-below',
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID',
    format: 'multiplex',
    minHeight: 280,
    responsive: true,
    lazyLoad: true,
    threshold: 0.25,
    rootMargin: '100px 0px'
  }
}
```

阶段2的广告位配置（可选）：

```typescript
const AD_SLOTS: Record<string, AdSlotConfig> = {
  // ... 阶段1配置
  'generator-below-multiplex': {
    slotId: 'generator-below-multiplex',
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID',
    format: 'multiplex',
    minHeight: 280,
    responsive: true,
    lazyLoad: true,
    threshold: 0.25,
    rootMargin: '100px 0px'
  }
}
```

### Translation Keys

需要在`messages/[locale].json`中添加的翻译键：

```json
{
  "ads": {
    "sponsored": "Sponsored",
    "supportUs": "Support Us"
  }
}
```

多语言翻译：

```json
// messages/en.json
{
  "ads": {
    "sponsored": "Sponsored",
    "supportUs": "Support Us"
  }
}

// messages/ar.json
{
  "ads": {
    "sponsored": "برعاية",
    "supportUs": "ادعمنا"
  }
}

// messages/fr.json
{
  "ads": {
    "sponsored": "Sponsorisé",
    "supportUs": "Soutenez-nous"
  }
}

// messages/de.json
{
  "ads": {
    "sponsored": "Gesponsert",
    "supportUs": "Unterstützen"
  }
}
```

## Error Handling

### 1. AdSense Script加载失败

**场景**: AdSense脚本被广告拦截器阻止或网络错误

**处理策略**:
```typescript
try {
  if (window.adsbygoogle) {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  } else {
    throw new Error('AdSense script not loaded')
  }
} catch (error) {
  console.error('AdSlot load error:', error)
  // 不显示错误给用户，静默失败
  // 骨架屏会保持显示，不影响布局
}
```

### 2. 广告填充失败

**场景**: AdSense没有合适的广告填充

**处理策略**:
- 保持骨架屏显示，不显示空白区域
- 不影响页面布局（已预留固定高度）
- 在AdSense后台监控填充率

### 3. IntersectionObserver不支持

**场景**: 旧浏览器不支持IntersectionObserver API

**处理策略**:
```typescript
useEffect(() => {
  if (!('IntersectionObserver' in window)) {
    // 降级方案：直接加载广告，不使用懒加载
    loadAd()
    return
  }
  
  // 正常的IntersectionObserver逻辑
  // ...
}, [])
```

### 4. 多次push错误

**场景**: 组件重新渲染导致多次调用adsbygoogle.push

**处理策略**:
```typescript
const [adPushed, setAdPushed] = useState(false)

useEffect(() => {
  if (!isVisible || adPushed) return  // 防止重复push
  
  loadAd()
  setAdPushed(true)
}, [isVisible, adPushed])
```

### 5. CLS超标

**场景**: 广告加载导致布局偏移

**处理策略**:
- 使用固定高度容器（minHeight: 280px）
- 骨架屏占位，确保空间预留
- 使用`overflow: hidden`防止内容溢出

```tsx
<div 
  className="ad-skeleton"
  style={{ minHeight: '280px', overflow: 'hidden' }}
>
  {/* 骨架屏内容 */}
</div>
```

## Testing Strategy

### 1. 单元测试

**测试文件**: `components/ads/__tests__/ad-slot.test.tsx`

**测试用例**:
```typescript
describe('AdSlot Component', () => {
  it('should render skeleton when ad is not loaded', () => {
    // 测试骨架屏渲染
  })
  
  it('should call trackCalligraphyEvent when ad becomes visible', () => {
    // 测试事件追踪
  })
  
  it('should not render on mobile when desktopOnly is true', () => {
    // 测试响应式显示
  })
  
  it('should handle adsbygoogle.push errors gracefully', () => {
    // 测试错误处理
  })
})
```

### 2. 集成测试

**测试场景**:
1. 生成器组件加载 → AdSlot渲染 → 广告展示
2. 用户滚动到广告位 → IntersectionObserver触发 → 广告加载
3. 广告加载成功 → 事件追踪 → AdSense记录展示

**测试工具**: Playwright或Cypress

### 3. 视觉回归测试

**测试内容**:
- 桌面端布局（1920x1080, 1366x768）
- 移动端布局（375x667, 414x896）
- 广告加载前后的布局一致性
- 不同语言的标签显示

**工具**: Percy或Chromatic

### 4. 性能测试

**测试指标**:
- CLS < 0.05
- LCP < 2.5s
- FID < 100ms
- 广告加载不影响首屏渲染

**工具**: Lighthouse, WebPageTest

### 5. A/B测试

**测试方案**:
- 对照组：不显示广告（当前状态）
- 实验组：显示广告（新方案）
- 分流比例：50/50
- 测试时长：7天
- 关键指标：跳出率、停留时间、下载转化率、广告收益

### 6. 手动测试清单

**桌面端测试**:
- [ ] Chrome浏览器正常显示
- [ ] Firefox浏览器正常显示
- [ ] Safari浏览器正常显示
- [ ] 广告位视觉样式与其他Card一致
- [ ] "Sponsored"和"Support Us"标签正确显示
- [ ] 广告懒加载正常工作
- [ ] 骨架屏正确显示

**移动端测试**:
- [ ] iOS Safari正常显示
- [ ] Android Chrome正常显示
- [ ] 响应式布局正确
- [ ] 触摸滚动流畅
- [ ] 广告不遮挡内容

**广告拦截器测试**:
- [ ] AdBlock启用时不影响布局
- [ ] uBlock Origin启用时不影响布局
- [ ] 骨架屏保持显示，不显示错误

**多语言测试**:
- [ ] 英语标签正确显示
- [ ] 阿拉伯语标签正确显示（RTL）
- [ ] 法语标签正确显示
- [ ] 德语标签正确显示

## Performance Considerations

### 1. 懒加载策略

**目标**: 不影响首屏加载速度

**实现**:
- 使用IntersectionObserver，只在广告进入视口时加载
- rootMargin设置为100px，提前加载以确保用户看到时已准备好
- threshold设置为0.25，广告25%可见时触发加载

### 2. 脚本加载优化

**AdSense脚本加载**:
```html
<!-- 在layout.tsx中异步加载 -->
<script 
  async 
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
  crossOrigin="anonymous"
/>
```

**延迟push**:
```typescript
// 延迟100ms，避免阻塞主线程
const timer = setTimeout(loadAd, 100)
return () => clearTimeout(timer)
```

### 3. CLS优化

**固定高度容器**:
```tsx
<div style={{ minHeight: '280px' }}>
  {/* 广告内容 */}
</div>
```

**骨架屏占位**:
```tsx
{!adLoaded && (
  <div className="ad-skeleton" style={{ minHeight: '280px' }}>
    <div className="text-amber-400 text-sm">Advertisement</div>
  </div>
)}
```

### 4. 内存管理

**清理IntersectionObserver**:
```typescript
useEffect(() => {
  const observer = new IntersectionObserver(/* ... */)
  observer.observe(element)
  
  return () => {
    observer.disconnect()  // 组件卸载时清理
  }
}, [])
```

### 5. 渲染优化

**避免不必要的重新渲染**:
```typescript
// 使用React.memo包裹AdSlot组件
export const AdSlot = React.memo(({ slotId, format, className }: AdSlotProps) => {
  // ...
})
```

## Deployment Strategy

### 阶段1：生成器内部广告位

**部署步骤**:
1. 创建AdSlot组件和useIntersectionObserver hook
2. 添加翻译文本到messages文件
3. 修改calligraphy-generator.tsx，在Preview Card和Templates Card之间插入Ad Card
4. 配置AdSense排除规则
5. 部署到生产环境
6. 监控7天数据

**回滚计划**:
- 如果跳出率上升>3%，立即注释Ad Card代码并重新部署
- 如果CLS超过0.10，调整容器高度或禁用广告
- 如果用户投诉增加，评估是否继续

### 阶段2：首页外部广告位（可选）

**前置条件**:
- 阶段1的Active View达到80%+
- 跳出率未上升
- 停留时间未下降
- 用户反馈正面

**部署步骤**:
1. 在app/[locale]/page.tsx中添加第二个AdSlot
2. 配置新的广告位ID
3. 部署到生产环境
4. 监控7天数据

### 监控指标

**每日检查**:
- In-page Active View（目标：80%+）
- 跳出率（警戒线：5%）
- 停留时间（警戒线：3分钟）
- CLS（警戒线：0.10）
- 下载转化率（警戒线：-10%）
- 日收益（目标：+7-10%）

**数据来源**:
- AdSense报表：Active View, RPM, 展示数, 收益
- Plausible Analytics：跳出率, 停留时间
- Google Search Console：CLS, LCP, FID
- 自定义事件追踪：Ad_Slot_View事件数

## Security Considerations

### 1. AdSense Publisher ID保护

**问题**: Publisher ID暴露在客户端代码中

**缓解措施**:
- Publisher ID本身不是敏感信息，AdSense设计为客户端使用
- 在AdSense后台配置域名白名单，防止其他网站盗用
- 定期检查AdSense报表，发现异常流量立即报告

### 2. XSS防护

**问题**: 广告内容可能包含恶意脚本

**缓解措施**:
- 使用Google AdSense官方脚本，已经过安全审查
- 不自定义广告内容，完全依赖AdSense
- 使用Content Security Policy (CSP)限制脚本来源

### 3. 点击欺诈防护

**问题**: 恶意点击广告导致账号被封

**缓解措施**:
- 不鼓励用户点击广告
- 不在广告附近放置误导性内容
- 监控AdSense的无效点击报告
- 遵守AdSense政策，不进行任何点击激励

### 4. 隐私保护

**问题**: AdSense使用Cookie追踪用户

**缓解措施**:
- 在隐私政策中说明使用AdSense
- 提供Cookie同意横幅（如果适用）
- 遵守GDPR和其他隐私法规

## AdSense Configuration

### Auto Ads排除规则

**步骤**:
1. 登录AdSense后台
2. 进入"广告" → "Auto ads" → "高级设置"
3. 添加CSS选择器排除规则：
   ```
   .ad-slot-container
   [data-ad-slot]
   ```
4. 保存设置

### 手动广告位配置

**广告位1（阶段1）**:
- 名称：Generator Preview Below
- 广告单元ID：generator-preview-below
- 广告类型：Multiplex
- 尺寸：响应式
- 位置：生成器预览区下方

**广告位2（阶段2，可选）**:
- 名称：Generator Below
- 广告单元ID：generator-below-multiplex
- 广告类型：Multiplex
- 尺寸：响应式
- 位置：生成器组件外部

### 广告格式设置

**Multiplex广告**:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
     data-ad-slot="SLOT_ID"
     data-full-width-responsive="true">
</ins>
```

## Rollback Plan

### 触发条件

**立即回滚**:
- 跳出率上升超过5%
- CLS超过0.15
- 大量用户投诉
- AdSense账号收到警告

**评估后回滚**:
- 跳出率上升3-5%
- 停留时间下降超过1分钟
- 下载转化率下降超过10%
- 收益未提升

### 回滚步骤

**快速回滚（5分钟内）**:
1. 注释Ad Card代码：
   ```tsx
   {/* <Card className="...">
     <CardContent className="p-4">
       <AdSlot slotId="generator-preview-below" format="multiplex" />
     </CardContent>
   </Card> */}
   ```
2. 提交代码并部署
3. 验证广告不再显示

**完全回滚（1小时内）**:
1. 删除AdSlot组件文件
2. 删除useIntersectionObserver hook
3. 删除翻译文本
4. 恢复AdSense Auto Ads设置
5. 提交代码并部署

### 回滚后分析

**数据收集**:
- 回滚前后的关键指标对比
- 用户反馈汇总
- AdSense数据分析

**改进方案**:
- 调整广告位置
- 减少广告高度
- 更换广告格式
- 优化视觉设计

## Future Enhancements

### 1. 高RPM语言优化

**目标**: 针对法语（FR）和德语（DE）用户添加额外广告位

**实现**:
```tsx
{(locale === 'fr' || locale === 'de') && (
  <AdSlot 
    slotId="generator-sidebar-display"
    format="display"
    desktopOnly
  />
)}
```

### 2. 用户偏好设置

**目标**: 允许用户隐藏广告（存储到localStorage）

**实现**:
```tsx
const [adHidden, setAdHidden] = useState(() => {
  return localStorage.getItem('hideAds') === 'true'
})

const hideAd = () => {
  localStorage.setItem('hideAds', 'true')
  setAdHidden(true)
}
```

### 3. 广告位A/B测试

**目标**: 测试不同广告位置和格式的效果

**实现**:
- 使用feature flag控制广告位显示
- 随机分配用户到不同实验组
- 收集数据并分析最优方案

### 4. 原生广告样式定制

**目标**: 让广告更好地融入页面设计

**实现**:
- 使用AdSense的原生广告样式API
- 自定义广告的字体、颜色、间距
- 确保广告与页面风格一致

### 5. 智能广告加载

**目标**: 根据用户行为动态调整广告加载策略

**实现**:
- 追踪用户滚动速度和停留时间
- 对快速滚动的用户延迟加载广告
- 对长时间停留的用户优先加载广告

## Conclusion

本设计文档详细描述了广告收益优化方案的技术实现。核心策略是在用户注意力最集中的区域（生成器预览区下方）添加一个高可见性的Multiplex广告位，同时通过精心的视觉设计和性能优化，确保不影响用户体验。

设计采用渐进式实施策略，先在生成器内部添加单个广告位，验证效果后再考虑扩展。所有关键指标都有明确的目标和警戒线，确保可以及时发现问题并回滚。

预期效果：
- In-page Active View从36%提升到80%+
- 日收益提升7-10%（从$11.55提升到$12.35-12.75）
- 保持跳出率<5%，停留时间>3分钟
- CLS保持<0.05

下一步将创建详细的任务列表，指导具体的代码实现。
