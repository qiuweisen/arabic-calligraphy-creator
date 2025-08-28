# 🚀 Cloudflare 部署指南

## 📋 快速开始

### 本地开发（保持不变）
```bash
pnpm dev      # 本地开发
pnpm build    # 构建测试  
pnpm start    # 本地预览
```

### Cloudflare 部署

#### 1. 一次性设置
```bash
# 安装 wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler auth login
```

#### 2. 部署命令
```bash
# 部署到灰度环境
pnpm cf:deploy:staging

# 部署到正式环境
pnpm cf:deploy:prod
```

## 🌐 域名配置

- **正式环境**: `arabic-calligraphy-generator.com`
- **灰度环境**: `staging.arabic-calligraphy-generator.com`

## 🔄 GitHub Actions（可选）

如果需要自动部署，在 GitHub 仓库中配置以下 Secrets：
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

推送到不同分支会自动部署到对应环境：
- `main` 分支 → 正式环境
- `staging` 分支 → 灰度环境

## 🔧 环境切换

### 切换到 Cloudflare
1. 部署到 Cloudflare：`pnpm cf:deploy:prod`
2. 更新 DNS 记录指向 Cloudflare Workers

### 切换回 Vercel
1. 在 Vercel 重新部署
2. 更新 DNS 记录指向 Vercel

## 📄 配置文件说明

- `wrangler.jsonc` - 正式环境配置
- `wrangler.staging.jsonc` - 灰度环境配置
- `open-next.config.ts` - OpenNext.js 适配器配置
- `.github/workflows/cloudflare-deploy.yml` - GitHub Actions 配置（可选）
