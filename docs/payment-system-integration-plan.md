# 阿拉伯书法生成器 - 支付系统集成技术方案

> **项目目标**: 将MkSaaS模板的认证和支付功能集成到现有项目,实现VIP订阅付费模式  
> **创建日期**: 2025-01-02  
> **状态**: 待实施

---

## 📋 目录

1. [业务需求](#业务需求)
2. [技术架构](#技术架构)
3. [文件迁移清单](#文件迁移清单)
4. [数据库设计](#数据库设计)
5. [核心功能实现](#核心功能实现)
6. [实施步骤](#实施步骤)
7. [测试计划](#测试计划)
8. [上线检查](#上线检查)

---

## 业务需求

### 用户分层

#### Free用户
- ✅ 无限PNG下载 (有水印)
- ✅ 基础字体 (5-8个)
- ✅ 基础样式选项
- ⚠️ 低分辨率 (72 DPI)

#### Pro用户 ($29.99/年)
- ✅ 无限PNG/SVG下载
- ✅ 所有字体 (17+个)
- ✅ 高级样式选项
- ✅ 高分辨率 (300 DPI)
- ✅ 无水印
- ✅ 商用授权

#### Ultra用户 (预留,未来实现)
- ✅ Pro所有功能
- ✅ API访问
- ✅ 批量处理
- ✅ 专属字体
- ✅ 优先支持

### 核心功能

1. **用户认证**
   - Email + Password登录/注册
   - OAuth (Google, GitHub) - 可选
   - Session管理
   - 密码重置

2. **订阅管理**
   - Stripe Checkout集成
   - 订阅创建/取消/续费
   - Webhook处理
   - 订单历史查询

3. **权限控制**
   - SVG下载权限检查
   - 字体访问控制
   - 分辨率限制
   - 水印添加/移除

4. **用户中心**
   - 订阅状态显示
   - 发票下载
   - 账号设置
   - 取消/续订管理

5. **积分系统** (预留)
   - 积分余额查询
   - 积分消耗记录
   - 积分购买(一次性)
   - 积分过期处理

---

## 技术架构

### 技术栈

- **框架**: Next.js 14 (App Router)
- **认证**: better-auth
- **支付**: Stripe
- **数据库**: PostgreSQL (Neon/Supabase)
- **ORM**: Drizzle ORM
- **部署**: Cloudflare Pages
- **样式**: Tailwind CSS + shadcn/ui
- **国际化**: next-intl (已有)

### 目录结构

⚠️ **重要**: 项目使用根目录结构,tsconfig.json中 `@/*` 映射到 `./`  
所有导入路径使用 `@/lib/...` 而非 `@/src/lib/...`

```
arabic-calligraphy-creator/
├── lib/                   # 工具函数和配置
│   ├── auth.ts            # ✅ 从 mksaas/src/lib/auth.ts 复制 - better-auth服务端配置
│   ├── auth-client.ts     # ✅ 从 mksaas/src/lib/auth-client.ts 复制 - 客户端hooks
│   ├── price-plan.ts      # ✅ 从 mksaas/src/lib/price-plan.ts 复制 - 价格计划工具
│   ├── subscription.ts    # ✅ 新建 - 订阅状态检查(server-only,参考mksaas类似逻辑)
│   └── urls/              # ✅ 从 mksaas/src/lib/urls/ 复制整个目录 - URL工具
│       └── urls.ts
│
├── config/                # 配置文件
│   ├── website.tsx        # ✅ 从 mksaas/src/config/website.tsx 复制 - 全局配置(含price.plans)
│   └── price-config.tsx   # ✅ 从 mksaas/src/config/price-config.tsx 复制 - 定价UI文案(多语言)
│
├── payment/               # 支付模块 (从 mksaas/src/payment/ 整个目录复制)
│   ├── index.ts           # 支付提供商统一接口
│   ├── types.ts           # 类型定义(PricePlan, CreateCheckoutParams等)
│   └── provider/
│       └── stripe.ts      # Stripe实现(createCheckout/createCustomerPortal/webhook)
│
├── credits/               # 积分系统 (从 mksaas/src/credits/ 整个目录复制,暂不启用)
│   ├── credits.ts         # 积分逻辑
│   ├── server.ts          # 服务端API
│   ├── client.ts          # 客户端hooks
│   ├── distribute.ts      # 积分分发
│   └── types.ts           # 积分类型定义
│
├── db/                    # 数据库 (从 mksaas/src/db/ 整个目录复制)
│   ├── index.ts           # 数据库连接(Neon/Supabase PostgreSQL)
│   ├── schema.ts          # 表结构定义(user, payment, credits等)
│   └── migrations/        # Drizzle迁移脚本
│
├── hooks/                 # 自定义hooks
│   └── use-subscription.ts  # ✅ 新建 - 客户端订阅状态hook(通过API获取)
│
├── app/
│   ├── api/
│   │   ├── auth/          # 认证API (better-auth自动生成)
│   │   │   └── [...all]/route.ts
│   │   ├── payment/       # 支付API
│   │   │   ├── checkout/route.ts      # 创建checkout session
│   │   │   ├── webhook/route.ts       # Stripe webhook处理
│   │   │   └── portal/route.ts        # 客户门户跳转
│   │   └── subscription/  # 订阅查询API
│   │       └── status/route.ts        # 获取当前用户订阅状态(含计划ID)
│   │
│   ├── [locale]/          # next-intl多语言路由 (现有结构)
│   │   ├── (auth)/        # 认证页面组
│   │   │   ├── login/page.tsx
│   │   │   ├── register/page.tsx
│   │   │   └── forgot-password/page.tsx
│   │   ├── pricing/       # 定价页
│   │   │   └── page.tsx
│   │   ├── dashboard/     # 用户中心
│   │   │   ├── page.tsx            # 概览
│   │   │   ├── subscription/page.tsx  # 订阅管理
│   │   │   └── settings/page.tsx      # 账号设置
│   │   └── checkout/      # 支付结果页
│   │       ├── success/page.tsx
│   │       └── cancel/page.tsx
│   │
│   └── ... (其他现有页面)
│
├── components/
│   ├── auth/              # 认证组件 (从mksaas参考或使用better-auth官方UI)
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── payment/           # 支付交互组件 (从 mksaas/src/components/pricing/ 复制)
│   │   ├── pricing-card.tsx             # 定价卡片(props: plan, interval)
│   │   ├── pricing-table.tsx            # 定价表格
│   │   ├── create-checkout-button.tsx   # 创建checkout按钮
│   │   └── customer-portal-button.tsx   # 客户门户按钮
│   └── ... (其他现有组件)
│
├── messages/              # 国际化消息 (现有,需扩展)
│   ├── en.json            # 新增: PricePlans, Dashboard, Payment相关文案
│   └── ar.json
│
└── .env.local             # 环境变量(Stripe密钥,数据库连接等)
```

---

## 文件迁移清单

⚠️ **关键路径规则**:
- mksaas源路径: `mksaas_template-cloudflare/src/xxx`
- 目标路径: `arabic-calligraphy-creator/xxx` (无src目录)
- 所有导入路径: `@/xxx` (因 tsconfig.json 中 `@/*` 映射到 `./`)

### 第一优先级: 核心功能 (必须)

#### 1. 认证系统 (better-auth)

**源路径**: `mksaas_template-cloudflare/src/lib/`
**目标路径**: `arabic-calligraphy-creator/lib/`

```bash
# 复制认证核心文件
lib/
├── auth.ts               # ✅ 必须 - better-auth服务端配置
├── auth-client.ts        # ✅ 必须 - 客户端hooks和authClient实例
└── urls/
    └── urls.ts           # ✅ 必须 - URL工具函数(auth依赖)
```

**配置文件**: `mksaas_template-cloudflare/src/config/`

```bash
config/
└── website.tsx           # ✅ 必须 - 完整复制,包含auth/payment/credits配置
```

**修正后的导入路径规则**:
```typescript
// ✅ 正确 - 所有导入使用 @/ (无src)
import { auth } from '@/lib/auth';
import { websiteConfig } from '@/config/website';
import { createCheckout } from '@/payment';

// ❌ 错误 - 不要使用 @/src/
import { auth } from '@/src/lib/auth'; // 错误!
```

**说明**:
- `lib/auth.ts`: 服务端better-auth配置,导出 `auth` 实例,包含emailAndPassword、OAuth、session等
- `lib/auth-client.ts`: 客户端authClient实例,用于React组件,导出 `authClient` 和 hooks
- `config/website.tsx`: 全局配置对象 `websiteConfig`,包含 auth/payment/price/features 等

#### 2. 支付系统 (Stripe)

**源路径**: `mksaas_template-cloudflare/src/payment/`
**目标路径**: `arabic-calligraphy-creator/payment/`

```bash
# 复制整个payment目录
cp -r mksaas_template-cloudflare/src/payment/ arabic-calligraphy-creator/payment/

# 目录结构
payment/
├── index.ts              # ✅ 导出统一接口: createCheckout, createCustomerPortal, handleWebhookEvent
├── types.ts              # ✅ 类型定义: PricePlan, CreateCheckoutParams, Subscription等
├── README.md             # 文档
└── provider/
    └── stripe.ts         # ✅ StripeProvider类实现,包含webhook处理
```

**相关配置和工具文件**:

```bash
# 价格计划配置
config/
├── website.tsx           # ✅ 必须 - 包含 price.plans 对象(严格符合PricePlan接口)
└── price-config.tsx      # ✅ 必须 - getPricePlans()函数,客户端使用,返回带翻译的计划

# 价格计划工具函数
lib/
└── price-plan.ts         # ✅ 必须 - getAllPricePlans, findPlanByPriceId, findPriceInPlan等
```

**关键类型和函数**:
```typescript
// payment/types.ts 中的核心接口
export interface PricePlan {
  id: string;
  name?: string;
  description?: string;
  features?: string[];
  limits?: string[];
  prices: Price[];       // 必须!可为空数组(free计划)
  isFree: boolean;
  isLifetime: boolean;
  popular?: boolean;
  disabled?: boolean;
  credits?: Credits;
}

export interface CreateCheckoutParams {
  planId: string;
  priceId: string;
  customerEmail: string;
  successUrl?: string;
  cancelUrl?: string;
  metadata?: Record<string, string>;
  locale?: Locale;      // ⚠️ 重要!传递给Stripe
}

// payment/index.ts 导出的统一API
export const createCheckout = async (params: CreateCheckoutParams): Promise<CheckoutResult>
export const createCustomerPortal = async (params: CreatePortalParams): Promise<PortalResult>
```

**说明**:
- `config/website.tsx` 的 `price.plans` 对象必须严格符合 `PricePlan` 接口,不包含UI文案
- `config/price-config.tsx` 的 `getPricePlans()` 在客户端使用,合并 `website.tsx` 配置和 i18n 翻译文案
- `lib/price-plan.ts` 提供服务端查询工具,直接读取 `website.tsx` 配置
- 所有导入路径: `@/payment`, `@/config/website`, `@/lib/price-plan`

#### 3. 数据库

**源路径**: `mksaas_template-cloudflare/src/db/`

```bash
db/                       # ✅ 整个目录复制
├── index.ts              # 数据库连接
├── schema.ts             # 表结构(需要调整以适配项目)
└── migrations/           # 迁移脚本(执行后生成)
    └── 0000_*.sql
```

**依赖包**:

```bash
# 需要安装的npm包
npm install drizzle-orm drizzle-kit @neondatabase/serverless postgres
```

**⚠️ 重要**: 
- `db/schema.ts`需要保留mksaas的所有表结构
- 如果项目已有其他表,需要合并到同一个schema文件
- 迁移脚本通过`drizzle-kit generate`生成

### 第二优先级: 积分系统 (预留)

**源路径**: `mksaas_template-cloudflare/src/credits/`

```bash
credits/                  # ✅ 整个目录复制
├── credits.ts            # 核心逻辑(FIFO积分消耗、过期处理)
├── server.ts             # 服务端API
├── client.ts             # 客户端hooks
├── distribute.ts         # 积分分发(注册奖励、月度奖励等)
├── types.ts              # 类型定义
└── README.md             # 文档
```

**配置文件**:

```bash
config/
└── credits-config.tsx    # ⚠️ 可选 - 积分包定价配置
```

**说明**: 
- 当前不用积分,但**强烈建议复制**,因为:
  1. 数据库schema已包含积分表
  2. 未来可能需要积分购买、API计费等
  3. 复制成本低,不影响现有功能
- 不需要实现UI,保留代码即可

### 第三优先级: UI组件

#### 认证组件

**源路径**: `mksaas_template-cloudflare/src/components/auth/`

```bash
components/auth/
├── login-form.tsx            # ✅ 登录表单
├── register-form.tsx         # ✅ 注册表单
├── forgot-password-form.tsx  # ⚠️ 可选
├── reset-password-form.tsx   # ⚠️ 可选
├── social-login-button.tsx   # ⚠️ 可选(OAuth按钮)
└── login-wrapper.tsx         # ⚠️ 可选(统一布局)
```

#### 定价/支付组件

**源路径**: `mksaas_template-cloudflare/src/components/pricing/`

```bash
components/pricing/
├── create-checkout-button.tsx    # ✅ Stripe checkout触发按钮
├── customer-portal-button.tsx    # ✅ Stripe客户门户入口
├── pricing-card.tsx              # ✅ 定价卡片展示
└── pricing-table.tsx             # ⚠️ 可选 - 表格样式定价展示
```

### 配置文件清单

#### 环境变量 (.env.local)

```bash
# ====================================
# 数据库
# ====================================
DATABASE_URL="postgresql://..."

# ====================================
# Better Auth
# ====================================
BETTER_AUTH_SECRET="random-secret-string"
BETTER_AUTH_URL="http://localhost:3000" # 开发环境
# BETTER_AUTH_URL="https://arabic-calligraphy-generator.com" # 生产环境

# ====================================
# OAuth (可选)
# ====================================
# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# GitHub OAuth
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# ====================================
# Stripe
# ====================================
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Stripe价格ID (在Stripe Dashboard创建后填入)
STRIPE_PRICE_ID_PRO_MONTHLY="price_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."

# ====================================
# 邮件 (可选 - 用于密码重置等)
# ====================================
RESEND_API_KEY="re_..."
EMAIL_FROM="noreply@arabic-calligraphy-generator.com"
```

#### package.json依赖

需要添加的依赖:

```json
{
  "dependencies": {
    "better-auth": "^0.x.x",
    "drizzle-orm": "^0.x.x",
    "stripe": "^14.x.x",
    "@neondatabase/serverless": "^0.x.x",
    "date-fns": "^3.x.x",
    "resend": "^3.x.x"
  },
  "devDependencies": {
    "drizzle-kit": "^0.x.x"
  }
}
```

---

## 数据库设计

### Schema定义

**文件**: `db/schema.ts` (从mksaas复制并调整)

```typescript
import { boolean, integer, pgTable, text, timestamp, index } from "drizzle-orm/pg-core";

// ====================================
// 用户表
// ====================================
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  role: text('role'), // 'user' | 'admin'
  banned: boolean('banned'),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
  customerId: text('customer_id'), // Stripe customer ID
}, (table) => ({
  userIdIdx: index("user_id_idx").on(table.id),
  userCustomerIdIdx: index("user_customer_id_idx").on(table.customerId),
  userEmailIdx: index("user_email_idx").on(table.email),
}));

// ====================================
// 会话表
// ====================================
export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
}, (table) => ({
  sessionTokenIdx: index("session_token_idx").on(table.token),
  sessionUserIdIdx: index("session_user_id_idx").on(table.userId),
}));

// ====================================
// OAuth账号表
// ====================================
export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(), // 'google' | 'github' | 'credential'
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'), // 密码哈希
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at').notNull()
}, (table) => ({
  accountUserIdIdx: index("account_user_id_idx").on(table.userId),
  accountProviderIdIdx: index("account_provider_id_idx").on(table.providerId),
}));

// ====================================
// 验证码表 (用于邮箱验证、密码重置)
// ====================================
export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text('identifier').notNull(), // email
  value: text('value').notNull(), // code
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at'),
  updatedAt: timestamp('updated_at')
});

// ====================================
// 支付/订阅表
// ====================================
export const payment = pgTable("payment", {
  id: text("id").primaryKey(),
  priceId: text('price_id').notNull(), // Stripe price ID
  type: text('type').notNull(), // 'subscription' | 'one_time'
  interval: text('interval'), // 'month' | 'year' | null
  userId: text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
  customerId: text('customer_id').notNull(), // Stripe customer ID
  subscriptionId: text('subscription_id'), // Stripe subscription ID
  sessionId: text('session_id'), // Stripe checkout session ID
  status: text('status').notNull(), // 'active' | 'canceled' | 'past_due' | 'incomplete'
  periodStart: timestamp('period_start'),
  periodEnd: timestamp('period_end'),
  cancelAtPeriodEnd: boolean('cancel_at_period_end'),
  trialStart: timestamp('trial_start'),
  trialEnd: timestamp('trial_end'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
}, (table) => ({
  paymentTypeIdx: index("payment_type_idx").on(table.type),
  paymentUserIdIdx: index("payment_user_id_idx").on(table.userId),
  paymentStatusIdx: index("payment_status_idx").on(table.status),
  paymentSubscriptionIdIdx: index("payment_subscription_id_idx").on(table.subscriptionId),
}));

// ====================================
// 积分表 (预留)
// ====================================
export const userCredit = pgTable("user_credit", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: 'cascade' }),
  currentCredits: integer("current_credits").notNull().default(0),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => ({
  userCreditUserIdIdx: index("user_credit_user_id_idx").on(table.userId),
}));

// ====================================
// 积分交易记录表 (预留)
// ====================================
export const creditTransaction = pgTable("credit_transaction", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => user.id, { onDelete: 'cascade' }),
  type: text("type").notNull(), // 'earn' | 'spend'
  description: text("description"),
  amount: integer("amount").notNull(), // 正数=获得, 负数=消耗
  remainingAmount: integer("remaining_amount"),
  paymentId: text("payment_id"),
  expirationDate: timestamp("expiration_date"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
}, (table) => ({
  creditTransactionUserIdIdx: index("credit_transaction_user_id_idx").on(table.userId),
  creditTransactionTypeIdx: index("credit_transaction_type_idx").on(table.type),
}));
```

### 数据库迁移

```bash
# 1. 安装依赖
npm install drizzle-orm drizzle-kit @neondatabase/serverless

# 2. 创建drizzle.config.ts
echo "
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
" > drizzle.config.ts

# 3. 生成迁移
npx drizzle-kit generate

# 4. 执行迁移
npx drizzle-kit migrate

# 5. 查看数据库
npx drizzle-kit studio
```

---

## 核心功能实现

### 1. 认证系统

#### better-auth配置

⚠️ **路径修正**: 使用 `lib/auth.ts` 而不是 `src/auth/index.ts`

**文件**: `lib/auth.ts` (从mksaas复制,已包含完整配置)

这个文件已经包含:
- ✅ Drizzle adapter配置
- ✅ Email/Password认证
- ✅ OAuth (Google, GitHub)  
- ✅ 邮箱验证
- ✅ Session管理
- ✅ 国际化支持
- ✅ 新用户注册奖励(积分)

**无需修改**,直接复制使用。

#### 客户端Hooks

**文件**: `lib/auth-client.ts` (从mksaas复制)

```typescript
import { createAuthClient } from 'better-auth/react';
import { getBaseUrl } from './urls/urls';

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
});
```

**使用方式**:
```typescript
// 在React组件中
import { authClient } from '@/lib/auth-client';

const { data: session } = authClient.useSession();
const { signOut } = authClient;
```

#### API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

⚠️ **注意**: 导入路径改为 `@/lib/auth`

### 2. 支付系统

#### Stripe配置

**文件**: `payment/provider/stripe.ts` (从mksaas复制)

主要实现:
- `createCheckout()` - 创建订阅checkout
- `handleWebhookEvent()` - 处理webhook
- `createCustomerPortal()` - 客户管理门户
- `cancelSubscription()` - 取消订阅

#### 订阅计划配置

⚠️ **路径修正**: 订阅计划配置在 `config/website.tsx` 的 `price.plans` 对象中,不是独立文件

**文件**: `config/website.tsx` (从mksaas复制后调整)

```typescript
import { PaymentTypes, PlanIntervals } from '@/payment/types';
import type { WebsiteConfig } from '@/types';

export const websiteConfig: WebsiteConfig = {
  // ... 其他配置 ...
  
  price: {
    plans: {
      // Free计划 - 必须包含isFree和prices属性
      free: {
        id: 'free',
        prices: [],                    // Free计划prices为空数组
        isFree: true,
        isLifetime: false,
        credits: {                     // 预留积分配置
          enable: false,               // 当前不启用
          amount: 0,
          expireDays: 30,
        },
      },
      
      // Pro计划 - 年付主推
      pro: {
        id: 'pro',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO_YEARLY!,
            amount: 2999,              // $29.99 = 2999 cents
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        popular: true,                 // 在UI上标记为推荐
        credits: {
          enable: false,               // 当前不启用
          amount: 0,
          expireDays: 30,
        },
      },
      
      // Ultra计划 (预留,可暂时disabled)
      ultra: {
        id: 'ultra',
        prices: [
          {
            type: PaymentTypes.SUBSCRIPTION,
            priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ULTRA_YEARLY || '',
            amount: 4999,              // $49.99
            currency: 'USD',
            interval: PlanIntervals.YEAR,
          },
        ],
        isFree: false,
        isLifetime: false,
        disabled: true,                // 暂不启用
        credits: {
          enable: false,
          amount: 0,
          expireDays: 30,
        },
      },
    },
  },
  
  },
};
```

**UI文案配置**: `config/price-config.tsx` (从mksaas复制后调整)

```typescript
'use client';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';
import type { PricePlan } from '@/payment/types';

/**
 * 获取带翻译的价格计划(仅用于客户端组件)
 * 服务端请使用 lib/price-plan.ts 的 getAllPricePlans()
 */
export function getPricePlans(): Record<string, PricePlan> {
  const t = useTranslations('PricePlans');
  const priceConfig = websiteConfig.price;
  const plans: Record<string, PricePlan> = {};

  // Free计划
  if (priceConfig.plans.free) {
    plans.free = {
      ...priceConfig.plans.free,
      name: t('free.name'),
      description: t('free.description'),
      features: [
        t('free.features.unlimited-png'),
        t('free.features.basic-fonts'),
        t('free.features.watermark'),
      ],
      limits: [
        t('free.limits.no-svg'),
        t('free.limits.low-resolution'),
      ],
    };
  }

  // Pro计划
  if (priceConfig.plans.pro) {
    plans.pro = {
      ...priceConfig.plans.pro,
      name: t('pro.name'),
      description: t('pro.description'),
      features: [
        t('pro.features.unlimited-downloads'),
        t('pro.features.all-fonts'),
        t('pro.features.high-resolution'),
        t('pro.features.no-watermark'),
        t('pro.features.commercial-use'),
      ],
    };
  }

  return plans;
}
```

**i18n消息示例** (messages/en.json):
```json
{
  "PricePlans": {
    "free": {
      "name": "Free",
      "description": "Perfect for personal projects",
      "features": {
        "unlimited-png": "Unlimited PNG downloads",
        "basic-fonts": "5-8 basic fonts",
        "watermark": "Watermarked outputs"
      },
      "limits": {
        "no-svg": "No SVG export",
        "low-resolution": "72 DPI only"
      }
    },
    "pro": {
      "name": "Pro",
      "description": "For professional & commercial use",
      "features": {
        "unlimited-downloads": "Unlimited PNG & SVG downloads",
        "all-fonts": "Access to all 17+ fonts",
        "high-resolution": "High-resolution (300 DPI)",
        "no-watermark": "No watermarks",
        "commercial-use": "Commercial use license"
      }
    }
  }
}
```

#### API路由实现

**文件**: `app/api/payment/checkout/route.ts`

⚠️ **关键修正**: 
1. 导入路径改为 `@/lib/auth`
2. **补齐必需参数 `planId` 和 `customerEmail`**
3. 支持next-intl的locale,传递给Stripe和返回URL

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createCheckout } from '@/payment';
import { auth } from '@/lib/auth';
import { findPlanByPriceId } from '@/lib/price-plan';

export async function POST(req: NextRequest) {
  try {
    // 验证用户登录
    const session = await auth.api.getSession({ 
      headers: req.headers 
    });
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { priceId } = await req.json();
    
    // 根据priceId查找对应的planId (⚠️ 必需!)
    const plan = findPlanByPriceId(priceId);
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid price ID' },
        { status: 400 }
      );
    }

    // 获取当前locale(用于返回URL和Stripe UI)
    const locale = req.headers.get('x-locale') || 'en';

    // 创建checkout session - 补齐所有必需参数
    const result = await createCheckout({
      planId: plan.id,                    // ✅ 必需!传metadata到Stripe
      priceId,
      customerEmail: session.user.email,   // ✅ 必需!用于查找/创建Stripe customer
      locale,                              // ✅ 传递给Stripe UI(支付页面语言)
      successUrl: `${req.nextUrl.origin}/${locale}/checkout/success`, // ✅ 带locale前缀
      cancelUrl: `${req.nextUrl.origin}/${locale}/pricing`,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**文件**: `app/api/payment/webhook/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { handleWebhookEvent } from '@/payment';

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;

    await handleWebhookEvent(body, signature);

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 400 }
    );
  }
}
```

**文件**: `app/api/payment/portal/route.ts` (客户门户跳转)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { createCustomerPortal } from '@/payment';
import { auth } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ 
      headers: req.headers 
    });
    
    if (!session?.user?.customerId) {
      return NextResponse.json(
        { error: 'No customer found' },
        { status: 400 }
      );
    }

    const locale = req.headers.get('x-locale') || 'en';

    const result = await createCustomerPortal({
      customerId: session.user.customerId,
      returnUrl: `${req.nextUrl.origin}/${locale}/dashboard/subscription`, // ✅ 带locale
      locale,  // ✅ 客户门户UI语言
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Portal error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### 3. 权限控制

#### 服务端订阅状态检查

⚠️ **关键修正**: 
1. **这些函数只能在服务端(Server Component/API Route/Server Action)使用**
2. **客户端组件不能直接调用**,需通过API endpoint或hook

**文件**: `lib/subscription.ts` (新建,服务端专用)

```typescript
'use server';

import { getDb } from '@/db';
import { payment } from '@/db/schema';
import { and, eq } from 'drizzle-orm';

/**
 * 检查用户是否有Pro订阅
 * @server-only - 只能在服务端调用
 */
export async function hasProSubscription(userId: string): Promise<boolean> {
  const db = await getDb();
  
  const subscription = await db
    .select()
    .from(payment)
    .where(
      and(
        eq(payment.userId, userId),
        eq(payment.type, 'subscription'),
        eq(payment.status, 'active')
      )
    )
    .limit(1);
    
  return subscription.length > 0;
}

/**
 * 获取用户订阅信息
 * @server-only - 只能在服务端调用
 */
export async function getUserSubscription(userId: string) {
  const db = await getDb();
  
  const subscription = await db
    .select()
    .from(payment)
    .where(
      and(
        eq(payment.userId, userId),
        eq(payment.type, 'subscription'),
        eq(payment.status, 'active')
      )
    )
    .limit(1);
    
  return subscription[0] || null;
}

/**
 * 获取用户订阅状态 (供客户端使用的API)
 * 客户端通过fetch调用这个API
 */
export async function getSubscriptionStatus(userId: string) {
  const subscription = await getUserSubscription(userId);
  return {
    isPro: !!subscription,
    subscription: subscription ? {
      status: subscription.status,
      periodEnd: subscription.periodEnd,
      cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
    } : null,
  };
}
```

**客户端使用方式** (通过API):

**文件**: `app/api/subscription/status/route.ts` (新建)

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { getSubscriptionStatus } from '@/lib/subscription';

export async function GET(req: NextRequest) {
  try {
    const session = await auth.api.getSession({ 
      headers: req.headers 
    });
    
    if (!session?.user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const status = await getSubscriptionStatus(session.user.id);
    return NextResponse.json(status);
  } catch (error) {
    console.error('Get subscription status error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

**客户端使用 - 自定义Hook**:

**文件**: `hooks/use-subscription.ts` (新建)

```typescript
'use client';

import { useState, useEffect } from 'react';
import { authClient } from '@/lib/auth-client';

export interface SubscriptionStatus {
  isPro: boolean;
  planId?: string;
  subscription?: {
    status: string;
    periodEnd?: Date;
    cancelAtPeriodEnd?: boolean;
  } | null;
}

/**
 * 客户端订阅状态hook - 通过API获取
 */
export function useSubscriptionStatus() {
  const [status, setStatus] = useState<SubscriptionStatus>({
    isPro: false,
    subscription: null,
  });
  const [loading, setLoading] = useState(true);
  
  const { data: session } = authClient.useSession();

  useEffect(() => {
    async function fetchStatus() {
      if (!session?.user) {
        setStatus({ isPro: false, subscription: null });
        setLoading(false);
        return;
      }
      
      try {
        const res = await fetch('/api/subscription/status');
        if (res.ok) {
          const data = await res.json();
          setStatus(data);
        }
      } catch (error) {
        console.error('Failed to fetch subscription status:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchStatus();
  }, [session]);

  return { ...status, loading };
}
```

#### SVG下载改造

⚠️ **关键修正**: 
1. 导入路径改为 `@/lib/auth-client`
2. 使用 `useSubscriptionStatus` hook (通过API)
3. 使用 next-intl 的路由

**文件**: `components/calligraphy-generator.tsx` (修改现有文件)

```typescript
'use client';

// 在现有文件顶部添加导入
import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription'; // 自定义hook
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export function CalligraphyGenerator({ ... }) {
  // 使用authClient的hooks
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const locale = useLocale();
  
  // 获取订阅状态
  const { isPro, loading: subscriptionLoading } = useSubscriptionStatus();
  
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleDownloadSVG = async () => {
    // 1. 检查登录状态
    if (!session?.user) {
      toast({
        title: t('toasts.loginRequired'),
        description: t('toasts.loginRequiredDesc'),
      });
      
      // ✅ 使用next-intl Link和当前locale跳转
      const currentPath = window.location.pathname;
      router.push(`/${locale}/login?redirect=${encodeURIComponent(currentPath)}`);
      return;
    }

    // 2. 检查Pro订阅 (从hook获取)
    if (!isPro) {
      setShowUpgradeModal(true);
      return;
    }

    // 3. Pro用户,执行SVG下载
    try {
      toast({
        title: t('toasts.downloadStarted'),
        description: t('toasts.preparingSVG'),
      });

      // ... 原有SVG生成和下载逻辑 ...

      toast({
        title: t('toasts.downloadComplete'),
        description: t('toasts.downloadCompleteSVG'),
      });
    } catch (error) {
      console.error('SVG download failed:', error);
      toast({
        title: t('toasts.downloadFailed'),
        description: t('toasts.downloadError'),
        variant: "destructive",
      });
    }
  };

  // 升级提示弹窗
  const renderUpgradeModal = () => (
    <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('upgrade.title')}</DialogTitle>
          <DialogDescription>
            {t('upgrade.description')}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
            {t('upgrade.cancel')}
          </Button>
          <Button onClick={() => router.push(`/${locale}/pricing`)}>
            {t('upgrade.viewPricing')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div>
      {/* 原有UI */}
      {renderUpgradeModal()}
    <>
      {/* 原有组件内容 */}
      
      {/* 升级提示Modal */}
      {showUpgradeModal && (
        <Dialog open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>升级到Pro解锁SVG下载</DialogTitle>
              <DialogDescription>
                SVG格式支持无限缩放,适合专业设计和打印
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Pro会员特权</h4>
                <ul className="space-y-2 text-sm">
                  <li>✅ 无限SVG/PNG下载</li>
                  <li>✅ 所有17+字体</li>
                  <li>✅ 高清300 DPI</li>
                  <li>✅ 无水印</li>
                  <li>✅ 商用授权</li>
                </ul>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">
                  $29.99/年
                </p>
                <p className="text-sm text-gray-500">
                  仅$2.5/月,随时取消
                </p>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowUpgradeModal(false)}>
                继续使用免费版
              </Button>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/pricing">
                  升级到Pro
                </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
```

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-calligraphy-generator.com', canvas.width / 2, canvas.height - 30);
      ctx.globalAlpha = 1.0;
    }
  }
  
  // 下载
  const dataUrl = canvas.toDataURL('image/png', 1.0);
  // ...
};
```

---

## 实施步骤

### Phase 1: 环境准备 (1天)

#### 1.1 数据库配置

```bash
# 1. 注册Neon账号: https://neon.tech
# 2. 创建新项目: arabic-calligraphy-generator
# 3. 获取连接字符串
# 4. 添加到.env.local

DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

#### 1.2 安装依赖

```bash
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 安装核心依赖
npm install better-auth drizzle-orm @neondatabase/serverless stripe date-fns

# 安装开发依赖
npm install -D drizzle-kit
```

#### 1.3 配置Stripe

```bash
# 1. 登录Stripe Dashboard: https://dashboard.stripe.com
# 2. 创建产品: Pro Subscription
# 3. 创建价格: $29.99/year
# 4. 获取API密钥和Price ID
# 5. 配置Webhook endpoint: https://your-domain.com/api/payment/webhook
# 6. 添加到.env.local

STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
STRIPE_PRICE_ID_PRO_YEARLY="price_..."
```

### Phase 2: 文件迁移 (1-2天)

#### 2.1 复制核心模块

⚠️ **重要**: 使用正确的目录结构,保持与现有项目一致

```bash
# 从mksaas复制到当前项目
cd /Users/qiuweisen/CascadeProjects/arabic-calligraphy-creator

# 1. 复制认证模块 (lib/auth*)
cp mksaas_template-cloudflare/src/lib/auth.ts lib/
cp mksaas_template-cloudflare/src/lib/auth-client.ts lib/

# 2. 复制URL工具 (auth依赖)
mkdir -p lib/urls
cp mksaas_template-cloudflare/src/lib/urls/urls.ts lib/urls/

# 3. 复制支付模块 (整个目录)
cp -r mksaas_template-cloudflare/src/payment ./

# 4. 复制积分模块(预留,整个目录)
cp -r mksaas_template-cloudflare/src/credits ./

# 5. 复制数据库模块
cp -r mksaas_template-cloudflare/src/db ./

# 6. 复制配置文件
cp mksaas_template-cloudflare/src/config/website.tsx config/
cp mksaas_template-cloudflare/src/config/price-config.tsx config/
cp mksaas_template-cloudflare/src/config/credits-config.tsx config/ # 可选

# 7. 复制工具函数
cp mksaas_template-cloudflare/src/lib/price-plan.ts lib/

# 8. 复制邮件模块(auth的邮箱验证需要)
mkdir -p mail
cp -r mksaas_template-cloudflare/src/mail/* mail/
```

**复制后的目录结构验证**:
```bash
# 验证关键文件是否存在
ls -la lib/auth.ts lib/auth-client.ts
ls -la payment/index.ts payment/provider/stripe.ts
ls -la db/index.ts db/schema.ts
ls -la config/website.tsx config/price-config.tsx
```

#### 2.2 创建配置文件

**文件**: `config/subscription.ts`

```typescript
// 前面已定义,参考"订阅计划配置"部分
```

**文件**: `drizzle.config.ts`

```typescript
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### 2.3 调整导入路径

⚠️ **关键步骤**: 由于mksaas使用 `src/` 结构,需要批量调整导入路径

```bash
# 在所有复制的文件中,将导入路径调整为项目的根目录结构
# 不需要改tsconfig,因为@/*已经指向./

# 示例: lib/auth.ts 中的导入需要从
# import { websiteConfig } from '@/config/website';
# 保持不变(因为@/已经指向根目录)

# 但是mksaas中可能有 import from '@/src/...'
# 需要去掉 /src 部分

# 使用VS Code全局搜索替换:
# 搜索: from '@/src/
# 替换为: from '@/

# 或者使用命令行批量替换
find . -type f \( -name "*.ts" -o -name "*.tsx" \) \
  -not -path "./node_modules/*" \
  -not -path "./mksaas_template-cloudflare/*" \
  -exec sed -i '' 's/@\/src\//@\//g' {} +
```

**验证导入路径**:
```bash
# 检查是否还有错误的导入路径
grep -r "@/src/" --include="*.ts" --include="*.tsx" \
  --exclude-dir=node_modules \
  --exclude-dir=mksaas_template-cloudflare
# 应该没有输出,如果有则需要手动修正
```

### Phase 3: 数据库初始化 (0.5天)

```bash
# 1. 生成迁移文件
npx drizzle-kit generate

# 2. 查看生成的SQL
cat db/migrations/0000_*.sql

# 3. 执行迁移
npx drizzle-kit migrate

# 4. 验证表结构
npx drizzle-kit studio
# 在浏览器打开 https://local.drizzle.studio
```

### Phase 4: 认证功能实现 (2天)

#### 4.1 创建API路由

**文件**: `app/api/auth/[...all]/route.ts`

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

#### 4.2 创建认证页面

**登录页**: `app/(auth)/login/page.tsx`

```typescript
import { LoginForm } from '@/components/auth/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 to-white">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            登录到阿拉伯书法生成器
          </h1>
          <p className="text-gray-600">
            使用你的账号继续使用
          </p>
        </div>
        
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          还没有账号?{' '}
          <a href="/register" className="text-amber-600 hover:text-amber-700">
            立即注册
          </a>
        </p>
      </div>
    </div>
  );
}
```

**注册页**: `app/(auth)/register/page.tsx` (类似结构)

#### 4.3 创建认证组件

**文件**: `components/auth/login-form.tsx` (从mksaas复制并调整)

主要功能:
- Email + Password登录
- OAuth登录按钮
- 错误处理
- 加载状态
- 重定向处理

#### 导航栏集成

⚠️ **关键修正**: 使用next-intl的Link和useLocale,不写死路径

**文件**: `components/navbar.tsx` (修改现有文件)

```typescript
'use client';

import { authClient } from '@/lib/auth-client';
import { useSubscriptionStatus } from '@/hooks/use-subscription';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export function Navbar() {
  const { data: session } = authClient.useSession();
  const { isPro } = useSubscriptionStatus();
  const locale = useLocale();

  return (
    <nav>
      {/* Logo */}
      <Link href={`/${locale}/`}>...</Link>
      
      {/* 导航链接 */}
      <Link href={`/${locale}/pricing`}>
        {t('nav.pricing')}
      </Link>
      
      {/* 用户菜单 */}
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={`/${locale}/dashboard`}>
                {t('nav.dashboard')}
              </Link>
            </DropdownMenuItem>
            {!isPro && (
              <DropdownMenuItem>
                <Link href={`/${locale}/pricing`} className="text-amber-600 font-semibold">
                  ⚡ {t('nav.upgradeToPro')}
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem onClick={() => authClient.signOut()}>
              {t('nav.signOut')}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="flex gap-2">
          <Button variant="ghost" asChild>
            <Link href={`/${locale}/login`}>{t('nav.login')}</Link>
          </Button>
          <Button asChild>
            <Link href={`/${locale}/register`}>{t('nav.register')}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
```

### 2. 定价页面组件

⚠️ **PricingCard组件用法修正**: 参考mksaas实际props

**文件**: `app/[locale]/pricing/page.tsx` (新建)

```typescript
import { getPricePlans } from '@/config/price-config';
import { PricingCard } from '@/components/payment/pricing-card';
import { PlanIntervals, PaymentTypes } from '@/payment/types';

export default function PricingPage() {
  // 从配置获取计划(客户端组件)
  const plans = getPricePlans();

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Choose Your Plan
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free计划 */}
        <PricingCard
          plan={plans.free}
          // Free计划不需要interval参数
        />
        
        {/* Pro计划 - ⚠️ 只传plan和interval */}
        <PricingCard
          plan={plans.pro}
          interval={PlanIntervals.YEAR}
          // paymentType会自动识别为SUBSCRIPTION
        />
      </div>
    </div>
  );
}
```

**说明**:
- `PricingCard` 组件props: `plan: PricePlan`, `interval?: PlanInterval`, `paymentType?: PaymentType`, `metadata?: Record<string, string>`, `className?: string`, `isCurrentPlan?: boolean`
- 不要传 `planId`/`priceId` 等单独参数,所有信息从 `plan` 对象获取
- UI文案(name/description/features)通过 `getPricePlans()` 自动注入多语言
- `interval` 用于在多个价格选项中选择(如月付/年付),Pro年付传 `PlanIntervals.YEAR`

#### PNG下载 - 添加水印

⚠️ **关键**: 使用hook获取的订阅状态,不在客户端直接调用数据库函数

**文件**: `components/calligraphy-generator.tsx` (修改)

```typescript
const handleDownloadPNG = async () => {
  // ✅ 从hook获取订阅状态(已经在组件中定义)
  // const { isPro } = useSubscriptionStatus();
  
  // 生成canvas
  const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4);
  
  // 如果不是Pro用户,添加水印
  if (!isPro) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // 添加半透明水印
      ctx.globalAlpha = 0.3;
      ctx.font = '24px Arial';
      ctx.fillStyle = '#666666';
      ctx.textAlign = 'center';
      ctx.fillText('arabic-call