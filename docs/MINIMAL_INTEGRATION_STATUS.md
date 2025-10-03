# 极简版 MkSaaS 集成状态

> **版本**: 简化版  
> **更新时间**: 2025-01-02  
> **集成范围**: 认证 + 支付 + 订阅状态检查

---

## ✅ 已完成

### 1. 核心功能代码（保留自 MkSaaS）

```
✅ lib/auth.ts - Better Auth 服务端
✅ lib/auth-client.ts - 客户端认证 hooks
✅ lib/subscription.ts - hasProSubscription()
✅ payment/ - Stripe 支付实现
✅ db/ - 数据库 schema（包含多余表，无需删除）
✅ hooks/use-subscription.ts - 客户端订阅状态
✅ config/website.tsx - 配置（Free/Pro/Ultra，Ultra已禁用）
```

### 2. API 路由

```
✅ app/api/auth/[...all]/route.ts - Better Auth
✅ app/api/payment/checkout/route.ts - 创建支付
✅ app/api/payment/webhook/route.ts - Stripe webhook
✅ app/api/subscription/status/route.ts - 订阅状态查询
⚠️ app/api/payment/portal/route.ts - 保留但不在 UI 中使用
```

### 3. UI 组件（从 MkSaaS 复制）

```
✅ components/auth/login-form.tsx
✅ components/auth/register-form.tsx
✅ components/auth/auth-card.tsx
✅ components/auth/bottom-link.tsx
✅ components/auth/divider-with-text.tsx
✅ components/payment/pricing-card.tsx
✅ components/payment/pricing-table.tsx
✅ components/payment/create-checkout-button.tsx
⚠️ components/payment/customer-portal-button.tsx - 保留但不使用
```

### 4. 页面路由

```
✅ app/[locale]/(auth)/login/page.tsx
✅ app/[locale]/(auth)/register/page.tsx
✅ app/[locale]/pricing/page.tsx
✅ app/[locale]/checkout/success/page.tsx
✅ app/[locale]/checkout/cancel/page.tsx
```

### 5. 类型错误修复

```
✅ hooks/use-subscription.ts - 添加类型断言
✅ app/api/payment/checkout/route.ts - 定义 CheckoutRequest 接口
```

---

## ❌ 极简版不需要的功能

我们**不创建**以下功能（保持极简）：

```
❌ Dashboard 页面
❌ 订阅管理页面
❌ 账单历史页面
❌ Customer Portal 集成（API 保留但 UI 不使用）
❌ 忘记密码页面（可后期添加）
❌ 邮箱验证（可后期添加）
❌ OAuth 登录（可后期添加）
❌ 积分系统 UI（代码已保留，但不启用）
```

---

## 🎯 用户流程（极简版）

### 免费用户
```
访问网站 → 使用生成器 → 下载 PNG（带水印）
```

### 升级 Pro
```
想要无水印/SVG → 点击 Upgrade → 登录/注册 → Stripe 支付 → 成功 → 无水印下载
```

### Pro 用户
```
登录 → 自动识别 Pro → 无水印 PNG/SVG
```

---

## 📋 剩余待办事项

### Phase 1: 环境配置（必需）⭐

```bash
# 1. 创建 Neon 数据库
https://neon.tech → 创建项目 → 获取 DATABASE_URL

# 2. 配置 .env.local
DATABASE_URL="postgresql://..."
BETTER_AUTH_SECRET="生成: openssl rand -base64 32"
BETTER_AUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY="price_..."

# 3. 执行数据库迁移
npx drizzle-kit generate
npx drizzle-kit migrate
```

### Phase 2: 集成到现有组件（30分钟）

**A. 修改 `components/navbar.tsx`**:
```typescript
import { authClient } from '@/lib/auth-client';

// 显示:
// - 未登录: Login / Register 按钮
// - 已登录: 用户邮箱 + Logout 按钮
```

**B. 修改 `components/calligraphy-generator.tsx`**:
```typescript
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import { authClient } from '@/lib/auth-client';

// PNG 下载:
// - 免费用户: 添加水印
// - Pro 用户: 无水印

// SVG 下载:
// - 免费用户: 显示 "Upgrade to Pro" 按钮
// - Pro 用户: 正常下载
```

### Phase 3: Stripe 配置（30分钟）

```
1. 登录 Stripe Dashboard
2. Products → Add Product
   - Name: "Pro Yearly"
   - Price: $29.99/year
   - 复制 Price ID → NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY

3. Webhooks → Add endpoint
   - URL: https://your-domain.com/api/payment/webhook
   - Events:
     • checkout.session.completed
     • customer.subscription.created
     • customer.subscription.updated
     • customer.subscription.deleted
   - 复制 Webhook Secret → STRIPE_WEBHOOK_SECRET
```

### Phase 4: 测试（1小时）

```
✅ 注册新账号
✅ 登录/登出
✅ 查看定价页面
✅ 点击 Upgrade → Stripe Checkout
✅ 使用测试卡 4242 4242 4242 4242
✅ 支付成功 → 跳转到 success 页面
✅ 验证订阅状态 API 返回 isPro: true
✅ 验证生成器可以无水印下载 PNG/SVG
```

---

## 🚀 快速启动脚本

### 1. 安装依赖（如果未安装）

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator
pnpm install
```

### 2. 生成 BETTER_AUTH_SECRET

```bash
openssl rand -base64 32
```

### 3. 配置环境变量

复制 `.env.example` → `.env.local`，填入上述值

### 4. 执行数据库迁移

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 5. 启动开发服务器

```bash
pnpm dev
```

### 6. 测试页面

```
http://localhost:3000/en/login
http://localhost:3000/en/register
http://localhost:3000/en/pricing
```

---

## 📝 极简版的优势

1. ✅ **代码量少** - 只保留核心功能
2. ✅ **维护简单** - 没有复杂的后台和管理界面
3. ✅ **快速上线** - 2-3小时即可完成集成
4. ✅ **经过验证** - 使用 MkSaaS 模板的成熟组件
5. ✅ **易于扩展** - 未来需要时可以轻松添加功能

---

## 🔄 未来可选功能（按需添加）

```
□ 忘记密码功能
□ 邮箱验证
□ OAuth 登录（Google/GitHub）
□ Customer Portal（用户自主管理订阅）
□ Dashboard（查看使用统计）
□ 积分系统（按量计费）
□ 多个订阅计划（月付/年付）
□ 团队/企业计划
```

---

## ⚠️ 注意事项

1. **数据库表** - 包含多余的积分表，但不影响功能，无需删除
2. **Customer Portal** - API 已保留，如需启用只需在 UI 中添加按钮
3. **多语言** - 页面暂时使用英文，未来可以添加翻译
4. **测试模式** - Stripe 使用测试模式，避免真实扣款
5. **Webhook 本地测试** - 使用 `stripe listen --forward-to localhost:3000/api/payment/webhook`

---

## 📞 问题排查

### 数据库连接失败
```
检查 DATABASE_URL 是否正确
确保 Neon 数据库已创建
运行 npx drizzle-kit studio 查看数据库
```

### Stripe 支付失败
```
检查 STRIPE_SECRET_KEY 是否正确
检查 NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY 是否正确
检查 Price ID 是否匹配
使用测试卡: 4242 4242 4242 4242
```

### 订阅状态不更新
```
检查 Webhook 是否配置正确
检查 STRIPE_WEBHOOK_SECRET 是否正确
查看 Stripe Dashboard → Webhooks 的日志
本地测试使用 stripe listen
```

---

## ✅ 完成清单

- [x] 复制核心代码和组件
- [x] 修复类型错误
- [x] 创建登录/注册页面
- [x] 创建定价页面
- [x] 创建支付成功/取消页面
- [x] 集成到 navbar（登录/登出/用户菜单）
- [x] 集成到 generator（PNG 水印、SVG Pro 限制）
- [ ] 配置环境变量
- [ ] 执行数据库迁移
- [ ] 配置 Stripe
- [ ] 端到端测试

---

**当前进度**: 约 85% 完成  
**预估剩余时间**: 1-2 小时  
**下一步**: 配置环境变量并执行数据库迁移
