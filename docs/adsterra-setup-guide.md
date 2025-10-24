# Adsterra广告配置说明

## 环境变量控制

Adsterra广告根据环境自动控制：
- **生产环境**: 默认启用
- **开发环境**: 默认禁用

可通过环境变量覆盖默认行为：

```bash
# 强制启用（开发环境也显示广告）
NEXT_PUBLIC_ADSTERRA_ENABLED=true

# 强制禁用（生产环境也不显示广告）
NEXT_PUBLIC_ADSTERRA_ENABLED=false
```

## 广告商切换策略

### Google AdSense + Adsterra 混合策略

1. **当前阶段（AdSense被限制）**：
   - Google AdSense：通过Google后台关闭
   - Adsterra：生产环境自动启用

2. **AdSense恢复后**：
   - Google AdSense：通过Google后台开启
   - Adsterra：设置 `NEXT_PUBLIC_ADSTERRA_ENABLED=false` 来禁用

3. **开发调试**：
   - 开发环境默认不显示广告，保持界面清洁
   - 如需测试广告显示：设置 `NEXT_PUBLIC_ADSTERRA_ENABLED=true`

## 广告位置

当前实施的3个广告位：

1. **桌面端顶部横幅 (728×90)**
   - 位置：主页顶部，Hero区域下方
   - 响应式：只在桌面端显示

2. **移动端横幅 (320×50)**
   - 位置：移动端顶部
   - 响应式：只在移动端显示

3. **中等矩形广告 (300×250)**
   - 位置：书法生成工具下方
   - 响应式：所有设备显示

## 性能优化特性

- ✅ **懒加载**：广告接近视口时才加载
- ✅ **错误处理**：加载失败时显示fallback
- ✅ **DNS预连接**：优化加载速度
- ✅ **Analytics集成**：追踪广告展示和错误
- ✅ **加载状态**：显示加载动画
- ✅ **防止CLS**：预留广告容器高度

## 环境变量设置

### 默认行为（推荐）
无需任何配置：
- 开发环境：广告不显示，界面清洁
- 生产环境：广告自动显示

### 手动控制
如需覆盖默认行为，创建 `.env.local` 文件：

```bash
# 开发环境也显示广告（测试用）
echo "NEXT_PUBLIC_ADSTERRA_ENABLED=true" > .env.local

# 或者生产环境也不显示广告
echo "NEXT_PUBLIC_ADSTERRA_ENABLED=false" > .env.local
```

重启开发服务器使配置生效：

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

## 监控和分析

广告事件会自动发送到现有的Analytics系统：

- `ad_loaded`: 广告成功加载
- `ad_error`: 广告加载失败

可以在Google Analytics和Plausible中查看相关数据。
