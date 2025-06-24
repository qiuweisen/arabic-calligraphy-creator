# Bing IndexNow 使用指南

## 🎯 概述

IndexNow是Microsoft Bing推出的快速收录协议，允许网站主动通知搜索引擎内容更新，大幅加快收录速度。

## ✅ 当前配置状态

### 已完成配置
- ✅ **验证文件**: `/public/546621d08c3644b2b136f9819638abee.txt`
- ✅ **API端点**: `/api/indexnow`
- ✅ **提交脚本**: `scripts/submit-to-indexnow.js`
- ✅ **客户端工具**: `lib/indexnow.ts`
- ✅ **Sitemap同步**: 所有51个页面完全覆盖

### 支持的搜索引擎
- **Bing**: 主要目标，快速收录
- **IndexNow通用端点**: 支持多个搜索引擎

### 页面覆盖统计
- **核心页面**: 10个（首页、字体、博客等主要入口）
- **静态页面**: 5个（联系我们、隐私政策等）
- **博客文章**: 6个（所有已发布文章）
- **字体页面**: 17个（所有字体详情页）
- **指南页面**: 4个（用户指南）
- **教程页面**: 4个（使用教程）
- **资源页面**: 1个（免费资源）
- **用例页面**: 4个（应用场景）
- **总计**: **51个页面**（与sitemap.xml完全同步）

## 🚀 使用方法

### 1. 命令行快速提交

```bash
# 查看所有可用命令和统计信息
npm run submit-indexnow

# 提交所有页面（推荐 - 51个页面）
npm run submit-indexnow all

# 分类提交
npm run submit-indexnow core       # 核心页面（10个）
npm run submit-indexnow static     # 静态页面（5个）
npm run submit-indexnow blog       # 博客文章（6个）
npm run submit-indexnow fonts      # 字体页面（17个）
npm run submit-indexnow guides     # 指南页面（4个）
npm run submit-indexnow tutorials  # 教程页面（4个）
npm run submit-indexnow resources  # 资源页面（1个）
npm run submit-indexnow use-cases  # 用例页面（4个）

# 提交自定义页面
npm run submit-indexnow custom /new-page /updated-page
```

### 2. API直接调用

```bash
# 使用curl提交URL
curl -X POST https://arabic-calligraphy-generator.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{
    "urls": [
      "https://arabic-calligraphy-generator.com/",
      "https://arabic-calligraphy-generator.com/fonts"
    ]
  }'
```

### 3. 程序化提交

```typescript
import { submitToIndexNow, submitCurrentPage } from '@/lib/indexnow';

// 提交当前页面
await submitCurrentPage();

// 提交特定URL
await submitToIndexNow('/new-blog-post');

// 批量提交
await submitToIndexNow([
  '/page1',
  '/page2',
  '/page3'
]);
```

## 📋 使用场景

### 立即提交的情况
1. **新内容发布**: 新博客文章、新字体页面
2. **重要更新**: 首页内容更新、功能改进
3. **SEO优化**: 页面标题、描述、结构化数据更新
4. **错误修复**: 404页面修复、重定向更新

### 定期提交的情况
1. **每周维护**: 提交所有重要页面
2. **内容审核**: 确保所有页面都被正确收录
3. **新功能上线**: 批量提交相关页面

## ⚡ 快速开始

### 立即提交今天的更新
```bash
# 提交所有重要页面到Bing
npm run submit-indexnow all
```

### 验证配置
```bash
# 检查API配置
curl https://arabic-calligraphy-generator.com/api/indexnow
```

## 📊 预期效果

### 收录时间对比
- **传统方式**: 几天到几周
- **IndexNow**: 几分钟到几小时

### 最佳实践
1. **不要过度提交**: 每个URL每天最多提交一次
2. **批量提交**: 一次提交多个URL更高效
3. **监控结果**: 通过Bing Webmaster Tools查看收录状态

## 🔧 故障排除

### 常见问题

**Q: 提交后多久能看到效果？**
A: 通常几分钟到几小时，最多24小时

**Q: 可以提交多少个URL？**
A: 每次最多10个URL，每天每个URL最多提交一次

**Q: 如何验证是否成功？**
A: 查看API返回结果，或在Bing Webmaster Tools中监控

### 错误代码
- **200/202**: 成功提交
- **400**: 请求格式错误
- **403**: 验证失败
- **429**: 请求过于频繁

## 📈 监控建议

1. **Bing Webmaster Tools**: 监控收录状态
2. **Google Search Console**: 对比收录差异
3. **网站分析**: 观察搜索流量变化

## 🎯 下一步行动

### 立即执行
```bash
# 1. 提交所有重要页面
npm run submit-indexnow all

# 2. 验证提交结果
curl https://arabic-calligraphy-generator.com/api/indexnow
```

### 定期维护
- **每周一次**: 提交所有页面
- **内容更新后**: 立即提交相关页面
- **新功能上线**: 批量提交相关页面

---

💡 **提示**: IndexNow是免费服务，建议充分利用来加快Bing收录速度！
