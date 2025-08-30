# CLS (Cumulative Layout Shift) 测试验证指南

## 🎯 测试目标
验证字体加载优化是否有效降低CLS，从当前的0.7+降至0.1以下

## 📊 测试方法

### 1. Chrome DevTools Performance 面板测试

#### 步骤：
1. 打开 Chrome DevTools (F12)
2. 切换到 **Performance** 面板
3. 勾选 **Web Vitals** 选项
4. 点击录制按钮 🔴
5. 刷新页面或导航到首页
6. 等待页面完全加载（包括字体）
7. 停止录制

#### 查看结果：
- 在时间线中查看 **Layout Shift** 事件
- 查看 **CLS** 数值（目标：< 0.1）
- 分析字体加载时刻的布局变化

### 2. Lighthouse 评测

#### 在线测试：
```bash
# 使用 npm 全局安装 lighthouse
npm install -g lighthouse

# 测试本地开发服务器
lighthouse http://localhost:3000 --view

# 或测试生产环境
lighthouse https://arabic-calligraphy-generator.com --view
```

#### Chrome 内置 Lighthouse：
1. 打开 DevTools -> **Lighthouse** 面板
2. 选择 **Performance** 类别
3. 点击 **Analyze page load**
4. 查看 **Cumulative Layout Shift** 得分

### 3. Web Vitals 扩展测试

#### 安装步骤：
1. 安装 [Web Vitals Chrome Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)
2. 访问网站页面
3. 扩展会实时显示 CLS、LCP、FID 数值

### 4. PageSpeed Insights 在线测试

访问：https://pagespeed.web.dev/
输入网站URL，查看移动端和桌面端的CLS评分

## 🧪 测试场景

### 场景1：首次访问（冷缓存）
```bash
# 清除浏览器缓存，模拟首次访问
# Chrome -> Settings -> Privacy -> Clear browsing data
```

### 场景2：字体切换测试
1. 页面加载完成后
2. 切换不同的阿拉伯字体
3. 观察预览区域是否发生布局偏移

### 场景3：移动端测试
使用 Chrome DevTools 设备仿真：
- iPhone SE (低性能设备)
- iPad (平板)
- 慢速3G网络条件

## 📋 测试检查清单

### 优化前基线测试
- [ ] 记录当前 CLS 数值
- [ ] 截图字体加载过程
- [ ] 记录字体切换时的布局变化

### 优化后验证测试
- [ ] CLS < 0.1 ✅
- [ ] 字体加载时无明显跳跃 ✅
- [ ] 预览区域高度固定 ✅
- [ ] 兜底字体视觉匹配度高 ✅
- [ ] Loading状态指示清晰 ✅

## 🔧 调试工具

### 1. CLS调试代码
在浏览器控制台运行以下代码：

```javascript
// 监听 layout-shift 事件
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.hadRecentInput) continue; // 忽略用户交互导致的偏移
    console.log('Layout Shift:', entry.value, entry);
  }
}).observe({type: 'layout-shift', buffered: true});

// 获取当前CLS值
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('CLS:', entry.value);
  }
}).observe({type: 'layout-shift', buffered: true});
```

### 2. 字体加载状态监控
```javascript
// 监控字体加载状态
document.fonts.ready.then(() => {
  console.log('All fonts loaded');
  console.log('Loaded fonts:', [...document.fonts].map(f => f.family));
});

// 监听单个字体加载
document.fonts.load("48px 'Amiri'").then(() => {
  console.log('Amiri font loaded');
});
```

## 📈 期望的测试结果

### 优化前（基线）
- CLS: 0.7+ (Poor)
- 字体切换时有明显布局跳跃
- 预览区域高度不固定

### 优化后（目标）
- CLS: < 0.1 (Good) 🎯
- 字体切换平滑无跳跃
- 预览区域保持固定高度
- Loading状态用户友好

## 🚀 持续监控

### 设置 Core Web Vitals 监控
可以使用以下服务持续监控：
1. Google Search Console
2. Chrome User Experience Report
3. New Relic / DataDog 等 APM 工具

### 自动化测试集成
```bash
# 在 CI/CD 中集成性能测试
npm install --save-dev @lhci/cli

# lighthouse CI 配置
echo '{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.9}],
        "cumulative-layout-shift": ["error", {"maxNumericValue": 0.1}]
      }
    }
  }
}' > lighthouserc.js
```

## 🛠️ 问题排查

如果CLS仍然较高，检查：
1. 字体是否正确预加载
2. CSS兜底字体是否匹配
3. 预览区域最小高度是否足够
4. 图片或其他资源是否导致布局偏移

## 📝 测试报告模板

### CLS优化测试报告
- **测试日期**: [日期]
- **测试环境**: Chrome [版本], 设备: [设备信息]
- **优化前CLS**: [数值]
- **优化后CLS**: [数值]
- **改进幅度**: [百分比]
- **用户体验评估**: [主观评价]
- **建议**: [进一步优化建议]
