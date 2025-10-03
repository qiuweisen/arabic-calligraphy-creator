# MkSaaS集成 - 快速启动指南

> 这是一个快速参考文档，帮助你在新对话中继续集成工作

---

## 核心文档位置

1. **集成技术方案**: `docs/payment-system-integration-plan.md`
   - 完整的技术方案，包含业务需求、架构设计、实现细节
   
2. **ChatGPT Review修正清单**: `docs/payment-system-integration-corrections-chatgpt-review.md`
   - 所有关键问题的详细修正说明
   - 6大类修正（路径、配置、API参数、权限分离、路由、组件用法）
   
3. **集成状态报告**: `docs/INTEGRATION_STATUS.md` ⭐ **最重要**
   - 当前进度清单
   - 待办事项（7个Phase，40+任务）
   - 快速修复脚本
   - 推荐实施顺序

---

## 已迁移的核心文件

### 配置 (config/)
- `website.tsx` - 全局配置（认证、支付、计划）
- `price-config.tsx` - 定价UI配置（多语言）

### 认证 (lib/)
- `auth.ts` - better-auth服务端配置
- `auth-client.ts` - 客户端认证hooks
- `subscription.ts` - 订阅状态检查（服务端）
- `urls/urls.ts` - URL工具函数
- `price-plan.ts` - 价格计划工具

### 数据库 (db/)
- `index.ts` - 数据库连接（Neon）
- `schema.ts` - 表结构定义
- `drizzle.config.ts` - Drizzle配置

### 支付 (payment/)
- `index.ts` - 支付接口
- `types.ts` - 类型定义
- `provider/stripe.ts` - Stripe实现

### Hooks (hooks/)
- `use-subscription.ts` - 客户端订阅状态hook

### API路由 (app/api/)
- `auth/[...all]/route.ts` - 认证API
- `payment/checkout/route.ts` - 创建checkout
- `payment/webhook/route.ts` - Stripe webhook
- `payment/portal/route.ts` - 客户门户
- `subscription/status/route.ts` - 订阅状态查询

### 积分系统 (credits/) - 预留
- 整个目录已复制但未启用

---

## 关键待办事项（优先级排序）

### ⚠️ 立即需要（阻塞项）

1. **配置环境变量** (.env.local)
   ```bash
   DATABASE_URL="postgresql://..."  # Neon连接字符串
   BETTER_AUTH_SECRET=""  # openssl rand -base64 32
   STRIPE_SECRET_KEY=""
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
   STRIPE_WEBHOOK_SECRET=""
   NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY=""
   ```

2. **执行数据库迁移**
   ```bash
   npx drizzle-kit generate
   npx drizzle-kit migrate
   ```

3. **修复TypeScript错误** (4处，简单)
   - hooks/use-subscription.ts: 添加类型断言
   - app/api/payment/checkout/route.ts: 定义请求体类型
   - app/api/payment/portal/route.ts: 从数据库查询customerId
   - config/price-config.tsx: 添加翻译文件
   
   详见: `docs/INTEGRATION_STATUS.md` → "待处理的问题"

### 📋 后续任务

4. **复制UI组件** (一条命令)
   ```bash
   cp -r mksaas_template-cloudflare/src/components/auth/* components/auth/
   cp -r mksaas_template-cloudflare/src/components/pricing/* components/payment/
   find components/auth components/payment -type f -name "*.tsx" -exec sed -i '' 's|@/src/|@/|g' {} +
   ```

5. **添加多语言翻译**
   - messages/en.json: 添加PricePlans, Auth, Dashboard, Pricing节
   - 模板已在 `docs/INTEGRATION_STATUS.md` 中提供

6. **创建页面路由**
   - app/[locale]/(auth)/login/page.tsx
   - app/[locale]/pricing/page.tsx
   - app/[locale]/dashboard/page.tsx
   - 等...

7. **修改现有组件**
   - components/calligraphy-generator.tsx: SVG权限检查、PNG水印
   - components/navbar.tsx: 登录/注册按钮、用户菜单

8. **配置Stripe**
   - 创建产品: Pro ($29.99/年)
   - 配置webhook
   - 测试支付流程

---

## 关键技术要点

### 1. 目录结构
- ✅ 项目使用根目录结构（无src/）
- ✅ tsconfig.json: `@/*` 映射到 `./`
- ⚠️ 所有导入路径使用 `@/xxx`，不要 `@/src/xxx`

### 2. 订阅计划配置
- ✅ 数据在 `config/website.tsx` 的 `price.plans` 对象
- ✅ UI文案在 `config/price-config.tsx` 的 `getPricePlans()` 函数
- ⚠️ 必须符合 `PricePlan` 接口（prices[], isFree, isLifetime）

### 3. API参数
- ✅ createCheckout需要: planId, priceId, customerEmail, locale
- ✅ createCustomerPortal需要: customerId, returnUrl (带locale), locale
- ⚠️ 所有successUrl/cancelUrl/returnUrl必须带locale前缀

### 4. 权限检查
- ✅ 服务端: `hasProSubscription(userId)` 直接查数据库
- ✅ 客户端: `useSubscriptionStatus()` hook通过API获取
- ⚠️ 不要在客户端直接调用服务端数据库函数

### 5. 多语言路由
- ✅ 所有Link: `<Link href={`/${locale}/xxx`}>`
- ✅ 所有router.push: `router.push(\`/\${locale}/xxx\`)`
- ✅ 获取locale: `const locale = useLocale()`

### 6. PricingCard组件
- ✅ Props: `plan: PricePlan`, `interval?: PlanInterval`
- ⚠️ 不要传单独的planId/priceId
- ✅ 从 `getPricePlans()` 获取完整plan对象

---

## 批量修正脚本

```bash
# 1. 全局替换错误导入路径（如果有遗漏）
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "*/node_modules/*" \
  -not -path "*/mksaas_template-cloudflare/*" \
  -exec sed -i '' 's|@/src/|@/|g' {} +

# 2. 生成BETTER_AUTH_SECRET
openssl rand -base64 32

# 3. 复制UI组件
cp -r mksaas_template-cloudflare/src/components/auth/* components/auth/
cp -r mksaas_template-cloudflare/src/components/pricing/* components/payment/
find components/auth components/payment -type f -name "*.tsx" -exec sed -i '' 's|@/src/|@/|g' {} +
```

---

## Stripe本地测试

```bash
# 1. 安装Stripe CLI
brew install stripe/stripe-cli/stripe

# 2. 登录
stripe login

# 3. 监听webhook（本地开发）
stripe listen --forward-to localhost:3000/api/payment/webhook

# 4. 使用测试卡
# 卡号: 4242 4242 4242 4242
# 日期: 任意未来日期
# CVC: 任意3位数字
```

---

## 验证清单

完成以下检查确保集成正确:

- [ ] TypeScript编译通过（无错误）
- [ ] 数据库迁移成功（表已创建）
- [ ] 环境变量已配置
- [ ] 可以访问 /api/auth/session（返回JSON）
- [ ] 可以注册新用户
- [ ] 可以登录/登出
- [ ] 可以查看定价页面（/pricing）
- [ ] 可以创建checkout session
- [ ] Webhook接收成功（查看Stripe Dashboard Events）
- [ ] 订阅状态正确更新（/api/subscription/status）
- [ ] SVG下载权限检查生效
- [ ] PNG水印添加正常

---

## 常见问题排查

### 1. 数据库连接失败
- 检查DATABASE_URL格式: `postgresql://user:pass@host/db?sslmode=require`
- 确认Neon数据库已启动
- 检查IP白名单（Neon默认允许所有）

### 2. better-auth 404错误
- 确认 `app/api/auth/[...all]/route.ts` 存在
- 检查BETTER_AUTH_URL是否正确
- 查看浏览器Network面板，确认请求路径

### 3. Stripe webhook失败
- 使用Stripe CLI本地测试
- 检查STRIPE_WEBHOOK_SECRET是否正确
- 查看API日志 `console.error`
- 确认webhook endpoint配置正确

### 4. TypeScript类型错误
- 参考 `docs/INTEGRATION_STATUS.md` 的修复代码
- 运行 `npm run type-check` 查看所有错误
- 逐个文件修复

### 5. 多语言路由404
- 确认middleware.ts配置正确
- 检查 `[locale]` 目录结构
- 使用 `useLocale()` 获取当前locale
- 所有Link/router.push带locale前缀

---

## 推荐实施顺序（再次强调）

1. 配置环境 → 2. 数据库迁移 → 3. 修复TypeScript → 4. 复制UI组件 → 5. 添加英文翻译 → 6. 测试认证 → 7. 配置Stripe → 8. 测试支付 → 9. 集成到生成器 → 10. 添加其他语言

每个步骤都在 `docs/INTEGRATION_STATUS.md` 中有详细说明。

---

## 新对话时说什么

"继续MkSaaS集成，查看 `docs/INTEGRATION_STATUS.md` 了解当前进度，我需要从Phase X开始..."

或

"帮我修复MkSaaS集成的TypeScript错误，参考 `docs/INTEGRATION_STATUS.md` 的待处理问题"

或

"按照 `docs/INTEGRATION_STATUS.md` 的Phase顺序，帮我完成下一步"

---

**所有信息已完整记录在文档中，可以随时继续！** 🎉
