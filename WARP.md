# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## 项目概述 | Project Overview

Arabic Calligraphy Generator（阿拉伯书法生成器）是一个基于Next.js 15的现代Web应用程序，提供免费的在线阿拉伯书法创作工具。用户可以输入阿拉伯文本，选择不同的字体样式，自定义颜色、背景和效果，并导出为PNG或SVG格式。

### 核心功能
- 🎨 **17+种阿拉伯字体** - 传统Naskh、Kufi、Thuluth等风格
- ⚡ **实时预览** - 所见即所得的编辑体验
- 📱 **响应式设计** - 完美支持桌面和移动设备
- 💾 **高质量导出** - PNG/SVG格式下载
- ⌨️ **虚拟键盘** - 内置阿拉伯语输入支持
- 🌍 **多语言支持** - 英语、阿拉伯语、中文等

### 在线演示
- **主站**: https://arabic-calligraphy-generator.com
- **仓库**: GitHub上的开源项目

## 快速开始 | Quick Start

### 环境要求
- **Node.js**: 18.17+ 或 20.0+
- **包管理器**: npm 或 yarn
- **Cloudflare账号**: 用于生产部署（可选）

### 本地开发启动

```bash
# 1. 克隆项目
git clone https://github.com/your-username/arabic-calligraphy-creator.git
cd arabic-calligraphy-creator

# 2. 安装依赖
npm install

# 3. 配置环境变量（可选）
cp .env.example .env.local
# 编辑 .env.local 添加分析和服务密钥

# 4. 启动开发服务器
npm run dev

# 5. 访问应用
# 打开浏览器访问 http://localhost:3000
```

## 开发命令 | Development Commands

### 日常开发
```bash
# 启动开发服务器（热重载）
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

### 构建分析
```bash
# 包大小分析（生成可视化报告）
npm run analyze
```

### 部署相关
```bash
# 构建Cloudflare Workers版本
npm run cf:build

# 部署到测试环境
npm run cf:deploy:staging

# 部署到生产环境
npm run cf:deploy:prod

# 部署前检查
npm run pre-deploy
```

### SEO和优化工具
```bash
# SEO配置验证
npm run verify-seo

# 提交索引到搜索引擎
npm run submit-indexnow
```

## 项目架构 | Project Architecture

### 目录结构
```
arabic-calligraphy-creator/
├── app/                           # Next.js 15 App Router
│   ├── [locale]/                  # 多语言路由
│   │   ├── page.tsx               # 主页面
│   │   ├── blog/[slug]/page.tsx   # 动态博客页面
│   │   └── faq/page.tsx           # FAQ页面
│   ├── layout.tsx                 # 根布局组件
│   ├── globals.css                # 全局样式
│   └── sitemap.ts                 # 网站地图生成
├── components/                    # React组件库
│   ├── ui/                        # shadcn/ui基础组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── select.tsx
│   │   └── ...
│   ├── calligraphy-generator.tsx  # 核心生成器组件
│   ├── arabic-keyboard.tsx        # 虚拟阿拉伯键盘
│   ├── font-preview.tsx           # 字体预览组件
│   ├── template-browser.tsx       # 模板浏览器
│   └── navbar.tsx                 # 导航栏
├── lib/                           # 工具函数和业务逻辑
│   ├── utils.ts                   # 通用工具函数
│   ├── font-details-data.ts       # 字体详情数据
│   └── content-links.ts           # 内容链接管理
├── hooks/                         # 自定义React Hooks
│   ├── use-mobile.tsx             # 移动设备检测
│   ├── use-toast.ts               # Toast通知
│   └── use-font-loader.tsx        # 字体加载器
├── messages/                      # 国际化翻译文件
│   ├── en.json                    # 英语
│   ├── ar.json                    # 阿拉伯语
│   └── zh.json                    # 中文
├── public/                        # 静态资源
├── scripts/                       # 构建和部署脚本
└── docs/                          # 项目文档
```

### 核心组件说明

#### `calligraphy-generator.tsx`
项目的核心组件，包含：
- 文本输入和编辑功能
- 字体选择和样式控制
- 颜色、渐变、阴影设置
- 背景自定义（颜色、图片、图案）
- PNG/SVG导出功能
- 社交分享功能

#### `arabic-keyboard.tsx`
虚拟阿拉伯键盘：
- 完整的阿拉伯字符集
- 特殊字符和标点符号
- 从右到左文本支持

#### `font-preview.tsx`
字体预览系统：
- 实时字体预览
- 字体分类展示
- 字体详情信息

## 技术栈 | Technology Stack

### 前端框架
- **Next.js 15.2.4** - React全栈框架，App Router模式
- **React 19** - UI库，支持最新React特性
- **TypeScript 5.0+** - 类型安全的JavaScript

### 样式和UI
- **Tailwind CSS 3.4+** - 原子化CSS框架
- **shadcn/ui** - 现代React组件库（基于Radix UI）
- **Lucide React** - 图标库
- **next-themes** - 深色/浅色主题支持

### 功能库
- **html2canvas** - 画布生成和图片导出
- **next-intl** - 国际化支持
- **react-hook-form** - 表单处理
- **zod** - 数据验证
- **sonner** - Toast通知

### 部署和基础设施
- **Cloudflare Workers** - 边缘计算部署
- **@opennextjs/cloudflare** - Next.js Cloudflare适配器
- **Wrangler CLI** - Cloudflare部署工具

### 关键配置文件

#### `next.config.mjs`
- 国际化路由配置
- 图片优化设置
- Bundle分析器配置
- 模块导入优化

#### `tailwind.config.ts`
- 自定义主题配置
- 阿拉伯文字体设置
- 响应式断点
- 动画配置

#### `i18n.ts`
- 多语言路由设置
- 语言检测配置
- 文本方向（RTL/LTR）控制

## 开发最佳实践 | Development Best Practices

### 组件开发
```typescript
// 使用TypeScript定义组件Props
interface ComponentProps {
  title: string
  onAction?: () => void
  className?: string
}

// 使用forwardRef处理DOM引用
const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ title, onAction, className }, ref) => {
    return (
      <div ref={ref} className={cn("base-styles", className)}>
        {title}
      </div>
    )
  }
)
```

### 状态管理
- 使用`useState`管理组件局部状态
- 通过URL参数同步重要状态（如字体选择）
- 使用`useEffect`处理副作用和外部状态更新

### 性能优化策略
1. **字体加载优化**
   - 使用`use-font-loader` Hook按需加载字体
   - Google Fonts预连接和预加载
   - 字体显示策略：`display: swap`

2. **图片和资源优化**
   - Cloudflare R2 CDN存储静态资源
   - Next.js Image组件优化
   - 延迟加载非关键资源

3. **代码分割**
   - 动态导入大型组件
   - 路由级别的代码分割
   - Bundle分析和优化

### SEO优化
- 结构化数据（JSON-LD）
- 动态元标签生成
- 多语言sitemap
- Open Graph和Twitter Cards
- Core Web Vitals优化

### 错误处理
```typescript
// 使用Toast显示用户友好错误
const handleError = (error: Error) => {
  console.error('Operation failed:', error)
  toast({
    title: t('error.title'),
    description: t('error.description'),
    variant: "destructive",
  })
}

// Canvas生成错误处理
const generateCanvas = async () => {
  try {
    const canvas = await html2canvas(element)
    return canvas
  } catch (error) {
    handleError(error)
    return null
  }
}
```

## Cloudflare部署指南 | Cloudflare Deployment Guide

### 前置要求
1. **Cloudflare账号** - 注册免费或付费账号
2. **Wrangler CLI** - 全局安装Cloudflare部署工具
   ```bash
   npm install -g wrangler
   ```
3. **认证配置** - 登录Cloudflare账号
   ```bash
   wrangler login
   ```

### 配置文件
项目包含两个Wrangler配置文件：
- `wrangler.jsonc` - 生产环境配置
- `wrangler.staging.jsonc` - 测试环境配置

### 部署步骤

#### 1. 首次部署准备
```bash
# 构建Cloudflare Workers版本
npm run cf:build

# 检查构建产物
ls -la .open-next/
```

#### 2. 测试环境部署
```bash
# 部署到staging环境
npm run cf:deploy:staging

# 验证部署结果
curl https://your-staging-domain.com
```

#### 3. 生产环境部署
```bash
# 运行部署前检查
npm run pre-deploy

# 部署到生产环境
npm run cf:deploy:prod

# 验证生产部署
curl https://arabic-calligraphy-generator.com
```

### 环境变量配置
在Cloudflare Dashboard中配置以下环境变量：
```bash
# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
PLAUSIBLE_DOMAIN=your-domain.com

# CDN
NEXT_PUBLIC_CDN_BASE_URL=https://your-r2-bucket.com

# 其他服务密钥
API_KEY=your-api-key
```

### 自定义域名
1. 在Cloudflare Dashboard中添加域名
2. 配置DNS记录指向Workers
3. 设置SSL/TLS加密模式为"Full (strict)"

## 故障排除 | Troubleshooting

### 常见构建问题

#### 字体加载失败
```bash
# 问题：Google Fonts加载超时
# 解决：检查网络连接，或使用本地字体文件

# 问题：字体CSS解析错误
# 解决：验证字体名称拼写，检查font-family配置
```

#### TypeScript类型错误
```bash
# 运行类型检查
npx tsc --noEmit

# 常见错误：缺少类型定义
npm install @types/package-name
```

### Cloudflare部署问题

#### 部署失败
```bash
# 检查Wrangler版本
wrangler --version

# 更新到最新版本
npm install -g wrangler@latest

# 清理并重新部署
rm -rf .open-next/
npm run cf:build
npm run cf:deploy:staging
```

#### 运行时错误
- 检查环境变量配置
- 验证依赖包兼容性
- 查看Cloudflare Workers日志

### 性能问题

#### 字体加载慢
1. 启用字体预连接和预加载
2. 使用字体显示策略优化
3. 考虑使用本地字体文件

#### 图片生成慢
1. 减小Canvas分辨率
2. 优化html2canvas选项
3. 使用Web Workers处理（高级）

## 开发资源 | Development Resources

### 官方文档
- [Next.js 15 文档](https://nextjs.org/docs)
- [React 19 文档](https://react.dev/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### 组件和工具
- [shadcn/ui 组件](https://ui.shadcn.com/)
- [Radix UI 文档](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [html2canvas 文档](https://html2canvas.hertzen.com/)

### 阿拉伯字体资源
- [Google Fonts Arabic](https://fonts.google.com/?subset=arabic)
- [Arabic Typography](https://arabictypography.com/)
- [Khtt Foundation](https://www.khtt.net/)

### 项目相关
- [项目仓库](https://github.com/your-username/arabic-calligraphy-creator)
- [在线演示](https://arabic-calligraphy-generator.com)
- [贡献指南](./CONTRIBUTING.md)
- [变更日志](./CHANGELOG.md)

---

## 重要提示 | Important Notes

1. **字体版权**: 确保使用的字体具有适当的许可证
2. **性能监控**: 定期检查Core Web Vitals指标
3. **安全性**: 不在代码中硬编码API密钥
4. **用户体验**: 优先考虑移动设备体验
5. **国际化**: 新功能需要考虑多语言支持

如需更多帮助，请参考项目文档或创建GitHub Issue。
