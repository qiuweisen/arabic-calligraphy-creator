# AdSense配置清单

## ✅ 已完成的配置

### 1. AdSense广告单元信息

```
Publisher ID: ca-pub-4575951448621910
广告单元ID: 6388230820
广告单元名称: Generator Preview Below (推测)
广告格式: Multiplex (autorelaxed)
布局方向: Horizontal (横向)
```

### 2. 代码配置

#### ✅ AdSlot组件 (`components/ads/ad-slot.tsx`)
```typescript
const DEFAULT_CLIENT_ID = "ca-pub-4575951448621910" ✅
```

#### ✅ 生成器组件 (`components/calligraphy-generator.tsx`)
```tsx
<AdSlotCard slotId="6388230820" format="multiplex" /> ✅
```

#### ✅ AdSlotCard组件 (`components/ads/ad-slot-card.tsx`)
```tsx
// 已正确配置，使用useTranslations获取翻译
```

#### ✅ 翻译文件 (`messages/*.json`)
```json
{
  "ads": {
    "sponsored": "Sponsored",
    "supportUs": "Support Us"
  }
}
```

---

## 🔄 待完成的配置

### 3. AdSense后台配置

#### ⚠️ 配置Auto Ads排除规则

**步骤：**
1. 登录AdSense后台：https://www.google.com/adsense/
2. 进入：广告 → Auto ads → 高级设置
3. 添加CSS选择器排除规则：
   - `.ad-slot-container`
   - `[data-slot-id]`
4. 保存设置

**为什么需要这个？**
- 防止Auto Ads在手动广告位区域显示广告
- 避免广告重叠或冲突

---

### 4. 环境变量配置（可选）

如果你想使用环境变量管理Publisher ID：

**创建 `.env.local` 文件：**
```bash
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-4575951448621910
```

**优点：**
- 更安全（不在代码中硬编码）
- 方便切换不同环境的Publisher ID

**当前状态：**
- 代码中已经支持环境变量
- 如果不设置，会使用默认值（已经是正确的）

---

## 🧪 测试清单

### 本地测试

- [ ] 运行 `npm run dev`
- [ ] 访问 http://localhost:3000
- [ ] 滚动到生成器预览区域
- [ ] 检查广告位是否显示（可能显示骨架屏或实际广告）
- [ ] 打开浏览器控制台，检查是否有错误

**预期行为：**
- 广告位应该显示"Advertisement"骨架屏
- 滚动到广告位时，应该加载广告
- 控制台应该记录 `Ad_Slot_View` 事件

**注意：**
- 本地开发环境可能看不到实际广告（AdSense识别为测试环境）
- 你的IP可能被识别为网站所有者，不会显示广告
- 这是正常的，部署到生产环境后会正常显示

---

### 生产环境测试

- [ ] 部署到生产环境
- [ ] 等待24小时（AdSense需要时间审核和填充广告）
- [ ] 使用不同设备访问网站（手机、平板、电脑）
- [ ] 检查广告是否正常显示
- [ ] 检查AdSense报表是否有数据

---

## 📊 监控指标

### AdSense报表（24小时后检查）

**路径：** AdSense后台 → 报表 → 按广告单元

**关键指标：**
- **展示次数（Impressions）**: 广告被展示的次数
- **Active View**: 广告可见性百分比（目标：80%+）
- **RPM**: 每千次展示收益（预期：$1.30左右）
- **收益（Earnings）**: 实际收益

---

### Plausible Analytics

**关键指标：**
- **跳出率**: 应保持在5%以下（当前2%）
- **停留时间**: 应保持在3分钟以上（当前4m37s）
- **Ad_Slot_View事件**: 广告位曝光次数

---

### Google Search Console

**关键指标：**
- **CLS**: 应保持在0.05以下
- **LCP**: 应保持在2.5s以下
- **FID**: 应保持在100ms以下

---

## 🚨 故障排查

### 问题1：广告不显示

**可能原因：**
1. 广告单元还在审核中（等待24-48小时）
2. 你的IP被识别为网站所有者
3. 广告拦截器启用
4. 代码配置错误

**解决方法：**
1. 等待24小时后再检查
2. 使用无痕模式或不同设备访问
3. 禁用广告拦截器
4. 检查浏览器控制台是否有错误

---

### 问题2：控制台报错

**常见错误：**
```
adsbygoogle.push() error: No slot size for availableWidth=0
```

**解决方法：**
- 检查广告位容器是否有宽度
- 确保广告位不是隐藏的（display: none）

---

### 问题3：CLS超标

**解决方法：**
- 增加广告位容器的minHeight
- 确保骨架屏占位正确
- 检查广告加载是否导致布局抖动

---

## 📝 下一步行动

### 立即执行：

1. **配置AdSense排除规则**（5分钟）
   - 登录AdSense后台
   - 添加CSS选择器排除规则

2. **本地测试**（10分钟）
   - 运行 `npm run dev`
   - 检查广告位是否正确渲染
   - 检查控制台是否有错误

3. **部署到生产环境**（30分钟）
   - 提交代码到Git
   - 部署到Vercel/Netlify
   - 验证生产环境广告位显示

### 24小时后：

4. **检查AdSense报表**
   - 查看展示次数
   - 查看Active View
   - 查看收益数据

5. **监控用户体验指标**
   - 检查Plausible跳出率
   - 检查停留时间
   - 检查Google Search Console的CLS

### 7天后：

6. **评估效果**
   - 对比实施前后的收益
   - 对比实施前后的用户体验指标
   - 决定是否继续阶段2（添加第二个广告位）

---

## ✅ 配置完成确认

当你完成以下所有步骤后，配置就完成了：

- [x] AdSense广告单元已创建
- [x] 代码中的slotId已更新为 `6388230820`
- [x] Publisher ID已配置为 `ca-pub-4575951448621910`
- [ ] AdSense后台已配置排除规则
- [ ] 本地测试通过
- [ ] 已部署到生产环境
- [ ] 24小时后AdSense报表有数据

---

## 🎉 恭喜！

你已经完成了广告优化方案的核心配置！现在只需要：
1. 配置AdSense排除规则
2. 部署到生产环境
3. 等待24小时查看效果

**预期效果：**
- In-page Active View从36%提升到80%+
- 日收益提升7-10%（从$11.55提升到$12.35-12.75）
- 用户体验保持良好（跳出率<5%，停留时间>3分钟）

祝你成功！🚀
