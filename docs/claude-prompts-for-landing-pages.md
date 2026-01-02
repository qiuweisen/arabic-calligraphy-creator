# Claude 提示词 - 落地页生成

> 用于离线生成各个场景落地页的详细提示词

---

## 提示词 1: AI Arabic Calligraphy Generator 页面

```
我需要创建一个 Next.js 页面组件,用于 Arabic Calligraphy Generator 项目。

**页面路径:** app/ai-arabic-calligraphy-generator/page.tsx

**项目技术栈:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

**复用模板参考:**
项目中已有 app/use-cases/wedding-arabic-calligraphy/page.tsx,请参考其结构:
- 使用 StaticNavbar 和 Footer 组件
- 使用 Breadcrumb 组件
- Card, Button 等 UI 组件
- Metadata 导出
- 结构化数据 (Schema.org)

**页面 SEO 要求:**
- Title: "AI Arabic Calligraphy Generator - Smart Design Assistant 2025"
- Description: "Generate Arabic calligraphy with AI. Smart prompt suggestions, style recommendations, and intelligent font matching. Free online AI tool for designers."
- H1: "How AI Transforms Arabic Calligraphy Design"
- Keywords: ai arabic calligraphy, ai calligraphy generator, smart design tool, ai arabic text
- Canonical: https://arabic-calligraphy-generator.com/ai-arabic-calligraphy-generator

**页面内容结构 (800-1000词):**

1. **Hero Section**
   - H1: "How AI Transforms Arabic Calligraphy Design"
   - 副标题: "Experience intelligent design assistance with AI-powered Arabic calligraphy creation"
   - 2个 CTA 按钮:
     * 主按钮: "Try AI Generator Now" (链接: /?source=ai-landing)
     * 次按钮: "Learn More" (页内锚点跳转)

2. **AI 功能介绍卡片 (3个)**
   - 智能 Prompt 建议: 根据场景推荐文案(婚礼、品牌、节日等)
   - 字体智能匹配: AI 分析文本内容推荐最适合字体
   - 风格自动调整: 根据用途智能调整颜色、大小、效果

3. **AI Prompt 示例库**
   标题: "AI Prompt Examples for Every Occasion"
   展示 10+ 场景提示词(每个带一句描述):
   - Wedding: "Create elegant Arabic wedding invitation with gold accents"
   - Business: "Professional Arabic logo for tech startup, modern style"
   - Religious: "Quranic verse with traditional Thuluth calligraphy"
   - Social Media: "Instagram-ready Arabic quote with minimalist design"
   - Ramadan: "Ramadan Kareem greeting with crescent moon motif"
   - Birthday: "Happy Birthday in Arabic with colorful celebration theme"
   - Brand Identity: "Restaurant name in Arabic, warm Mediterranean style"
   - Certificate: "Formal certificate text, classic Naskh font"
   - Wall Art: "Islamic phrase for home decor, large format"
   - Greeting Card: "Thank you message in Arabic, floral background"

4. **AI vs 传统设计对比表**
   使用表格对比:
   | 功能 | 传统方式 | AI 辅助方式 |
   | 字体选择 | 手动尝试 17+ 字体 | AI 推荐 3 个最佳选项 |
   | 配色方案 | 自己搭配颜色 | 智能生成配色板 |
   | 设计时间 | 15-30 分钟 | 2-5 分钟 |
   | 专业程度 | 依赖个人经验 | 基于数千设计案例 |

5. **HowTo Section (Schema.org HowTo)**
   标题: "How to Use AI Arabic Calligraphy Generator"
   4个步骤(每步带图标和描述):
   - Step 1: 输入 AI Prompt 或直接输入阿拉伯文本
   - Step 2: AI 自动推荐字体和风格方案
   - Step 3: 微调 AI 建议或手动调整参数
   - Step 4: 导出高清 PNG/SVG 文件

6. **使用场景示例 (3个 Card)**
   - 场景1: 社交媒体内容创作
     * Prompt: "Instagram post about coffee, modern Arabic font"
     * 结果描述: AI 推荐 Cairo 字体,棕色渐变,咖啡豆背景
   - 场景2: 商业品牌设计
     * Prompt: "Luxury hotel name in Arabic, elegant gold style"
     * 结果描述: AI 选择 Amiri 字体,金色效果,对称布局
   - 场景3: 宗教/文化内容
     * Prompt: "Islamic dua for protection, traditional calligraphy"
     * 结果描述: AI 使用 Scheherazade 字体,绿色调,装饰边框

7. **FAQ Section (Schema.org FAQ)**
   10个问题:
   - What is AI Arabic Calligraphy Generator?
   - How does the AI choose fonts?
   - Is the AI generator free to use?
   - Can I customize AI suggestions?
   - What AI model powers this tool?
   - Does AI replace professional calligraphers?
   - How accurate are AI font recommendations?
   - Can I save my AI prompts?
   - Is my data used to train AI?
   - What languages does the AI support?

8. **CTA Section (底部)**
   - 大标题: "Ready to Create with AI?"
   - 按钮: "Start Creating Now →" (链接: /?source=ai-landing)
   - 辅助文字: "No signup required. 100% free forever."

**Schema.org 结构化数据:**
1. HowTo Schema (4步骤)
2. FAQ Schema (10个问题)
3. BreadcrumbList

**设计要求:**
- 使用 amber/orange 色系(与首页一致)
- AI 功能卡片使用 gradient 背景
- Prompt 示例用 code block 样式展示
- 响应式设计,移动端友好
- Icon 使用 lucide-react (Sparkles, Zap, Brain 等 AI 相关图标)

**注意事项:**
- 不要在页面上放置生成器组件(只放 CTA 引导链接)
- 所有外链用 target="_blank" rel="noopener noreferrer"
- 图片使用占位符或 next/image 优化
- 使用 TypeScript 类型安全

请生成完整的 page.tsx 文件代码。
```

---

## 提示词 2: Arabic Logo Maker 页面

```
我需要创建一个 Next.js 页面组件,用于 Arabic Calligraphy Generator 项目。

**页面路径:** app/arabic-calligraphy-logo-maker/page.tsx

**项目技术栈:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

**复用模板参考:**
项目中已有 app/use-cases/wedding-arabic-calligraphy/page.tsx,请参考其结构和组件。

**页面 SEO 要求:**
- Title: "Arabic Logo Maker - Professional Business Branding Tool"
- Description: "Create professional Arabic logos for your business. Commercial-use fonts, SVG export, brand identity design. Perfect for startups, restaurants, and agencies."
- H1: "Design Professional Arabic Logos in Minutes"
- Keywords: arabic logo maker, business arabic fonts, commercial calligraphy, arabic brand identity
- Canonical: https://arabic-calligraphy-generator.com/arabic-calligraphy-logo-maker

**页面内容结构 (1000-1200词):**

1. **Hero Section**
   - H1: "Design Professional Arabic Logos in Minutes"
   - 副标题: "Create stunning Arabic brand identities with commercial-use fonts and professional export formats"
   - 2个 CTA 按钮:
     * 主按钮: "Create Your Logo →" (链接: /?source=logo-landing)
     * 次按钮: "View Examples" (页内锚点)

2. **为什么选择阿拉伯书法标志 (Why Section)**
   150-200词段落,包含:
   - 文化认同: 在阿拉伯/穆斯林市场建立信任
   - 视觉独特性: 书法艺术的美学优势
   - 双语品牌: 同时服务阿语和英语客户
   - 专业形象: 传统与现代结合

3. **行业案例画廊 (4个行业)**
   每个行业展示 2个 Logo 示例:
   
   **餐饮业 (Restaurant & Cafe)**
   - 案例1: "بيت الشاورما" (Shawarma House)
     * 字体: Amiri
     * 风格: 传统+现代融合
     * 配色: 红色+金色
     * 适用: 中东餐厅、咖啡馆
   - 案例2: "قهوة عربية" (Arabic Coffee)
     * 字体: Reem Kufi
     * 风格: 极简现代
     * 配色: 棕色单色
     * 适用: 精品咖啡店

   **时尚/美容 (Fashion & Beauty)**
   - 案例1: "أناقة" (Elegance)
     * 字体: Lateef
     * 风格: 优雅线条
     * 配色: 玫瑰金渐变
     * 适用: 时装品牌、珠宝店
   - 案例2: "حناء" (Henna)
     * 字体: Scheherazade
     * 风格: 装饰性强
     * 配色: 深绿+金色
     * 适用: 美容院、婚礼服务

   **科技/初创 (Tech & Startups)**
   - 案例1: "تقنية" (Technology)
     * 字体: Cairo
     * 风格: 现代几何
     * 配色: 蓝色渐变
     * 适用: 科技公司、App
   - 案例2: "ابتكار" (Innovation)
     * 字体: Tajawal
     * 风格: 简洁粗体
     * 配色: 橙色+灰色
     * 适用: 创业公司、咨询

   **教育/文化 (Education & Culture)**
   - 案例1: "مدرسة" (School)
     * 字体: Noto Naskh Arabic
     * 风格: 经典正式
     * 配色: 深蓝+白色
     * 适用: 学校、教育机构
   - 案例2: "مكتبة" (Library)
     * 字体: Aref Ruqaa
     * 风格: 书法传统
     * 配色: 棕色+米色
     * 适用: 图书馆、文化中心

4. **字体选择指南**
   标题: "Choose the Right Font for Your Brand"
   表格对比 3种商业风格:
   | 风格 | 推荐字体 | 适合行业 | 特点 |
   | 传统经典 | Amiri, Scheherazade | 餐饮、文化 | 权威感,文化底蕴 |
   | 现代简约 | Cairo, Tajawal | 科技、时尚 | 干净,易读,国际化 |
   | 装饰艺术 | Lateef, Reem Kufi | 奢侈品、婚礼 | 优雅,独特,高端 |

5. **导出与使用教程**
   标题: "Export Your Logo for Professional Use"
   
   **SVG 导出指南:**
   - 为什么选择 SVG: 无限缩放不失真,文件小
   - 如何在 Illustrator 中打开: File > Open > 选择 SVG
   - 如何在 Figma 中使用: 直接拖放 SVG 文件
   - 如何转换为其他格式: 在线工具或 Adobe 软件

   **PNG 导出设置:**
   - 标志使用: 2000x2000px, 透明背景
   - 网站使用: 500x500px, 透明背景
   - 社交媒体: 1080x1080px
   - 打印使用: 300 DPI, 实际尺寸

   **品牌套件清单:**
   - [ ] 主标志 (全彩版)
   - [ ] 单色版本 (黑白各一)
   - [ ] 小尺寸版本 (简化细节)
   - [ ] 品牌配色代码 (HEX/RGB)
   - [ ] 字体信息记录

6. **商业授权 FAQ**
   标题: "Commercial Use & Licensing"
   6个关键问题:
   - Can I use these fonts for commercial logos?
   - Do I need to credit the font creators?
   - Can I trademark a logo made with your generator?
   - Are there any usage restrictions?
   - Can I use the logo on products for sale?
   - What about font licensing for printed materials?

7. **品牌配色方案建议**
   标题: "Professional Color Palettes for Arabic Brands"
   6个预设色板(每个带名称和用途):
   - 传统奢华: #D4AF37 (金) + #1A1A1A (黑)
   - 现代科技: #0066CC (蓝) + #00CCFF (浅蓝)
   - 自然有机: #2D5016 (深绿) + #8FBC8F (浅绿)
   - 温暖餐饮: #D2691E (橙棕) + #FFE4B5 (米黄)
   - 优雅时尚: #C0C0C0 (银) + #FF69B4 (粉)
   - 文化教育: #000080 (海军蓝) + #F5F5DC (米白)

8. **CTA Section**
   - 标题: "Ready to Build Your Arabic Brand Identity?"
   - 按钮: "Start Designing Now →" (链接: /?source=logo-landing)
   - 特性列表:
     * ✓ Commercial-use fonts
     * ✓ SVG & PNG export
     * ✓ No watermarks
     * ✓ Unlimited downloads

**Schema.org 结构化数据:**
1. Article Schema
2. FAQ Schema (商业授权相关)
3. BreadcrumbList

**设计要求:**
- 使用深蓝/金色配色(商业专业感)
- Logo 案例用 Card 展示,带 hover 效果
- 配色方案用色块+代码展示
- 使用 Badge 组件标注"商业可用"等标签
- Icon: Briefcase, Award, Star, CheckCircle

**注意事项:**
- 强调商业合法性和版权清晰
- 案例 Logo 用占位符或文字描述
- 避免承诺不实际的权利(如"完全免费商用",需说明字体许可)

请生成完整的 page.tsx 文件代码。
```

---

## 提示词 3: Arabic Calligraphy Wallpaper 页面

```
我需要创建一个 Next.js 页面组件,用于 Arabic Calligraphy Generator 项目。

**页面路径:** app/arabic-calligraphy-wallpaper/page.tsx

**项目技术栈:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

**复用模板参考:**
项目中已有 app/use-cases/wedding-arabic-calligraphy/page.tsx,请参考其结构。

**页面 SEO 要求:**
- Title: "Arabic Calligraphy Wallpaper - 4K HD Islamic Art Backgrounds"
- Description: "Download stunning Arabic calligraphy wallpapers in 4K. Free Islamic art backgrounds for desktop, phone, and tablet. High-resolution prints available."
- H1: "Download Stunning Arabic Calligraphy Wallpapers"
- Keywords: arabic wallpaper, islamic wallpaper 4k, calligraphy background, arabic phone wallpaper
- Canonical: https://arabic-calligraphy-generator.com/arabic-calligraphy-wallpaper

**页面内容结构 (600-1000词):**

1. **Hero Section**
   - H1: "Download Stunning Arabic Calligraphy Wallpapers"
   - 副标题: "Create custom 4K wallpapers with beautiful Arabic calligraphy for any device"
   - 2个按钮:
     * 主按钮: "Create Custom Wallpaper →" (链接: /?source=wallpaper-landing)
     * 次按钮: "View Gallery" (页内锚点)

2. **设备尺寸导航 (3个 Tab)**
   使用 Tabs 组件切换:
   - 桌面壁纸 (Desktop)
   - 手机壁纸 (Mobile)
   - 平板壁纸 (Tablet)

3. **壁纸示例画廊 (8个)**
   每个设备类型展示 2-3 个示例:
   
   **桌面壁纸 (Desktop Wallpapers):**
   - 示例1: "Ayat Al-Kursi" - 深蓝渐变背景,金色文字
     * 分辨率: 3840x2160 (4K)
     * 风格: 居中对称布局
     * 字体: Amiri
   - 示例2: "Bismillah" - 极简黑白
     * 分辨率: 2560x1440 (2K)
     * 风格: 左对齐现代
     * 字体: Cairo
   - 示例3: "Alhamdulillah" - 温暖渐变(橙→粉)
     * 分辨率: 1920x1080 (FHD)
     * 风格: 装饰性边框
     * 字体: Scheherazade

   **手机壁纸 (Mobile Wallpapers):**
   - 示例1: "Mashallah" - 星空背景
     * 分辨率: 1080x2400
     * 风格: 竖版居中
     * 字体: Lateef
   - 示例2: "Sabr" (耐心) - 简约浅色
     * 分辨率: 1170x2532 (iPhone)
     * 风格: 顶部文字
     * 字体: Tajawal
   
   **平板壁纸 (Tablet Wallpapers):**
   - 示例1: "Baraka" (祝福) - 自然绿色
     * 分辨率: 2048x2732 (iPad)
     * 风格: 横向布局
     * 字体: Reem Kufi

4. **分辨率选择指南**
   标题: "Choose the Right Resolution for Your Device"
   
   表格对比:
   | 设备类型 | 推荐分辨率 | 纵横比 | 文件大小 |
   | 台式机/笔记本 | 3840x2160 (4K) | 16:9 | 2-5 MB |
   | MacBook Pro | 2880x1800 | 16:10 | 1-3 MB |
   | iPhone 15 Pro | 1179x2556 | 19.5:9 | 500 KB-1 MB |
   | iPad Pro | 2048x2732 | 4:3 | 1-2 MB |
   | Android 手机 | 1080x2400 | 20:9 | 500 KB-1 MB |
   | 4K 显示器 | 3840x2160 | 16:9 | 2-5 MB |

   **如何查看设备分辨率:**
   - Windows: 设置 > 系统 > 显示
   - macOS: 关于本机 > 显示器
   - iPhone: 设置 > 通用 > 关于本机
   - Android: 设置 > 显示 > 高级

5. **打印设置教程**
   标题: "Print Your Arabic Calligraphy as Wall Art"
   
   **海报尺寸指南:**
   - A4: 210x297mm @ 300 DPI = 2480x3508 px
   - A3: 297x420mm @ 300 DPI = 3508x4961 px
   - 24x36英寸: @ 300 DPI = 7200x10800 px
   
   **打印设置建议:**
   1. 分辨率: 最低 300 DPI (专业级)
   2. 颜色模式: CMYK (打印) vs RGB (屏幕)
   3. 文件格式: PDF 或高质量 PNG
   4. 纸张选择: 哑光纸用于书法艺术
   
   **在线打印服务推荐:**
   - Vistaprint (国际)
   - Printful (自定义)
   - 本地打印店 (最佳质量)

6. **配色方案选择器**
   标题: "Popular Color Themes for Arabic Wallpapers"
   
   8个预设主题(每个带预览描述):
   - 深色模式 (Dark Mode): 黑色背景+金色文字
   - 浅色模式 (Light Mode): 白色背景+深灰文字
   - 星空主题 (Starry Night): 深蓝渐变+星点
   - 日落渐变 (Sunset): 橙→紫渐变
   - 自然绿 (Natural Green): 薄荷绿+白色
   - 奢华金 (Luxury Gold): 深棕+金色
   - 极简黑白 (Minimalist): 纯黑白对比
   - 海洋蓝 (Ocean Blue): 渐变蓝+白色

7. **HowTo Section**
   标题: "How to Create Your Custom Wallpaper"
   4个步骤:
   - Step 1: 选择阿拉伯短语或经文
   - Step 2: 选择适合你设备的分辨率
   - Step 3: 自定义字体、颜色、背景
   - Step 4: 下载并设置为壁纸

8. **热门阿拉伯短语推荐**
   标题: "Popular Arabic Phrases for Wallpapers"
   列表 12 个短语:
   - بسم الله (Bismillah) - In the name of Allah
   - ما شاء الله (Mashallah) - What Allah wills
   - الحمد لله (Alhamdulillah) - Praise be to Allah
   - صبر (Sabr) - Patience
   - أمل (Amal) - Hope
   - سلام (Salam) - Peace
   - حب (Hubb) - Love
   - قوة (Quwwah) - Strength
   - آية الكرسي (Ayat Al-Kursi) - The Throne Verse
   - إن شاء الله (Inshallah) - If Allah wills
   - جزاك الله خيرا (Jazakallah) - May Allah reward you
   - توكل على الله (Tawakkul) - Trust in Allah

9. **CTA Section**
   - 标题: "Create Your Perfect Wallpaper"
   - 按钮: "Start Designing →" (链接: /?source=wallpaper-landing)
   - 特性:
     * ✓ Any resolution
     * ✓ Print-ready quality
     * ✓ No watermarks
     * ✓ Free download

**Schema.org 结构化数据:**
1. ImageGallery Schema
2. HowTo Schema (4步骤)
3. BreadcrumbList

**设计要求:**
- 使用渐变色背景(blue → purple)
- 壁纸示例用大图卡片展示
- 分辨率表格用 Table 组件
- 配色方案用色块预览
- Icon: Monitor, Smartphone, Tablet, Download

**注意事项:**
- 示例壁纸用占位符图片或描述
- 提供实际可用的分辨率参数
- 打印指南要技术准确

请生成完整的 page.tsx 文件代码。
```

---

## 提示词 4: Arabic Calligraphy Tattoo 页面

```
我需要创建一个 Next.js 页面组件,用于 Arabic Calligraphy Generator 项目。

**页面路径:** app/arabic-calligraphy-tattoo/page.tsx

**项目技术栈:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

**复用模板参考:**
项目中已有 app/use-cases/wedding-arabic-calligraphy/page.tsx,请参考其结构。

**⚠️ 重要文化提示:**
此页面涉及敏感文化话题,需要包含免责声明和文化尊重提示。

**页面 SEO 要求:**
- Title: "Arabic Calligraphy Tattoo - Design Meaningful Body Art"
- Description: "Design Arabic tattoos with cultural respect. Learn meanings, avoid mistakes, get printable stencils. Professional calligraphy for meaningful body art."
- H1: "Arabic Tattoo Design Guide: Culture, Meaning & Safety"
- Keywords: arabic tattoo, calligraphy tattoo design, islamic body art, arabic name tattoo
- Canonical: https://arabic-calligraphy-generator.com/arabic-calligraphy-tattoo

**页面内容结构 (1000-1500词):**

1. **Hero Section**
   - H1: "Arabic Tattoo Design Guide: Culture, Meaning & Safety"
   - 副标题: "Design meaningful Arabic tattoos with proper translations and cultural understanding"
   - ⚠️ 重要提示框: "Please read our cultural guidelines before proceeding"
   - 2个按钮:
     * 主按钮: "Design Your Tattoo →" (链接: /?source=tattoo-landing)
     * 次按钮: "Cultural Guidelines" (页内锚点)

2. **文化尊重与伊斯兰观点 (500词)**
   标题: "Understanding Arabic Calligraphy Tattoos: Cultural & Religious Context"
   
   **伊斯兰观点:**
   - 多数伊斯兰学者认为纹身是 Haram (禁止的)
   - 引用: "纹身改变真主的创造"
   - 不同教派观点略有差异
   - 永久纹身 vs 临时海娜纹身的区别
   
   **文化敏感性:**
   - 宗教文字(如古兰经经文)不适合纹身
   - 真主(Allah)、先知名字需谨慎使用
   - 阿拉伯文化中纹身的历史和现代观念
   
   **替代方案:**
   - 临时海娜纹身(Henna)
   - 可移除贴纸
   - 艺术品展示而非身体纹身
   
   **免责声明:**
   ```
   ⚠️ Important Disclaimer:
   - This tool is for design purposes only
   - We encourage cultural respect and religious awareness
   - Consult religious scholars if you have faith concerns
   - Always verify translations with native speakers
   - We are not responsible for tattoo decisions
   ```

3. **适合纹身的短语推荐**
   标题: "Meaningful Arabic Phrases for Tattoos"
   
   **个人意义类 (Personal Meaning):**
   - حب (Love)
   - قوة (Strength)
   - أمل (Hope)
   - إيمان (Faith)
   - حرية (Freedom)
   - شجاعة (Courage)
   
   **家庭/名字类 (Family & Names):**
   - أمي (My Mother)
   - أبي (My Father)
   - عائلة (Family)
   - (自定义名字转写指南)
   
   **励志短语 (Inspirational):**
   - هذا أيضا سيمر (This too shall pass)
   - لا تستسلم أبدا (Never give up)
   - كن نفسك (Be yourself)
   
   **⚠️ 避免使用 (NOT Recommended):**
   - ❌ 古兰经经文
   - ❌ الله (Allah) 单独使用
   - ❌ 先知名字
   - ❌ 清真寺/宗教建筑
   - ❌ 带宗教仪式意义的符号

4. **常见翻译错误警示**
   标题: "Avoid These Common Arabic Tattoo Mistakes"
   
   **真实案例错误 (匿名化):**
   - 案例1: 想纹"Love",结果纹成"Lover"(حبيب vs حب)
   - 案例2: 想纹"Strength",结果纹成"Strong"(形容词 vs 名词)
   - 案例3: 想纹名字"Sarah",结果纹成"Happiness"(سارة vs سعادة)
   - 案例4: 词序错误导致意思完全相反
   - 案例5: 使用谷歌翻译导致的语法错误
   
   **如何避免错误:**
   1. ✓ 找母语者验证
   2. ✓ 在多个平台交叉验证翻译
   3. ✓ 检查书写方向(阿语从右到左)
   4. ✓ 确认字母连接正确
   5. ✗ 不要依赖机器翻译
   6. ✗ 不要使用不懂的文字

5. **技术设计要点**
   标题: "Technical Design Tips for Arabic Tattoos"
   
   **黑白线条导出:**
   - 纹身师需要清晰的黑色轮廓
   - 去除背景和颜色
   - 线条粗细: 最少 2pt,推荐 3-4pt
   - 避免过细的装饰线条(纹身后会模糊)
   
   **高对比度设置:**
   - 100% 黑色文字 + 白色背景
   - 无灰度/渐变(纹身师需要明确边界)
   - 足够的字母间距(防止融合)
   
   **尺寸考量:**
   - 小纹身 (2-5cm): 选择简单字体(Cairo, Tajawal)
   - 中纹身 (5-10cm): 可用装饰字体(Amiri)
   - 大纹身 (10cm+): 复杂书法风格(Scheherazade)
   
   **打印模板设置:**
   - A4 纸打印: 300 DPI
   - 实际尺寸输出: 1:1 比例
   - 镜像翻转选项(某些转印需要)

6. **纹身位置建议**
   标题: "Popular Placement for Arabic Calligraphy Tattoos"
   
   用图示或列表展示:
   - 前臂 (Forearm): 水平文字,易读
   - 肋骨 (Ribs): 竖向文字,神秘感
   - 后颈 (Neck): 短词,精致
   - 手腕 (Wrist): 小词,常见
   - 肩部 (Shoulder): 装饰性,可隐藏
   - 脚踝 (Ankle): 小巧低调
   
   **文字方向提示:**
   - 阿语从右到左
   - 竖向纹身: 顶部=右,底部=左
   - 确保纹身师理解阿语书写方向

7. **找专业纹身师指南**
   标题: "How to Find a Tattoo Artist for Arabic Script"
   
   **必问问题清单:**
   - ✓ 有无阿拉伯文字纹身经验?
   - ✓ 能否识别书写方向错误?
   - ✓ 是否有类似作品集?
   - ✓ 如何处理字母连接?
   - ✓ 是否建议测试贴纸?
   
   **红旗警示 (Red Flags):**
   - ❌ 从未纹过非拉丁文字
   - ❌ 不愿意参考模板
   - ❌ 声称"所有文字都一样"
   - ❌ 拒绝让你验证设计稿

8. **测试阶段建议**
   标题: "Test Before You Commit"
   
   **临时测试方法:**
   - 海娜纹身 (Henna): 持续 1-2 周
   - 临时纹身贴纸: 持续 3-7 天
   - 可擦除笔画: 当天测试
   
   **观察期问题:**
   - 你还喜欢这个设计吗?
   - 位置和大小合适吗?
   - 有无文化/宗教顾虑?
   - 是否影响职业形象?

9. **FAQ Section**
   8个问题:
   - Is it offensive to get an Arabic tattoo if I'm not Arab?
   - Can I get Quranic verses as tattoos?
   - How do I verify my Arabic translation is correct?
   - What's the difference between Henna and permanent tattoos?
   - Will Arabic tattoos age well?
   - How much does an Arabic tattoo typically cost?
   - Can tattoo removal work on Arabic script?
   - What if I regret my Arabic tattoo?

10. **CTA Section**
   - 标题: "Ready to Design Your Arabic Tattoo Stencil?"
   - 按钮: "Create Printable Design →" (链接: /?source=tattoo-landing)
   - 最后提醒:
     * ⚠️ Verify translations with native speakers
     * ⚠️ Respect cultural and religious sensitivities
     * ⚠️ Choose an experienced tattoo artist
     * ⚠️ Consider temporary options first

**Schema.org 结构化数据:**
1. Article Schema
2. HowTo Schema (设计流程)
3. BreadcrumbList

**设计要求:**
- 使用深色严肃配色(体现严肃性)
- 警示框用红色/橙色背景
- 免责声明放在显眼位置
- 错误案例用 Alert 组件
- Icon: AlertTriangle, Shield, CheckCircle

**注意事项:**
- 必须包含完整免责声明
- 强调文化尊重和宗教敏感性
- 不鼓励宗教文字纹身
- 提供替代方案(Henna)
- 示例用占位符或描述,不要展示真实纹身照片

请生成完整的 page.tsx 文件代码,确保文化敏感性和责任性。
```

---

## 提示词 5: Quran Verse Calligraphy 页面

```
我需要创建一个 Next.js 页面组件,用于 Arabic Calligraphy Generator 项目。

**页面路径:** app/quran-verse-calligraphy/page.tsx

**项目技术栈:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

**复用模板参考:**
项目中已有 app/use-cases/wedding-arabic-calligraphy/page.tsx,请参考其结构。

**⚠️ 重要宗教提示:**
此页面涉及神圣文本,需要展现最高敬意和文化尊重。

**页面 SEO 要求:**
- Title: "Quran Verse Calligraphy - Beautiful Islamic Quranic Art"
- Description: "Create beautiful Quran verse calligraphy. 15+ popular ayahs with translations. Respectful Islamic art for home decor, gifts, and meditation spaces."
- H1: "Create Beautiful Quran Verse Calligraphy"
- Keywords: quran calligraphy, quran verse art, islamic calligraphy verses, ayat calligraphy
- Canonical: https://arabic-calligraphy-generator.com/quran-verse-calligraphy

**页面内容结构 (1000-1200词):**

1. **Hero Section**
   - H1: "Create Beautiful Quran Verse Calligraphy"
   - 副标题: "Transform sacred Quranic verses into stunning Islamic art with proper respect and understanding"
   - 🌙 宗教符号装饰
   - 2个按钮:
     * 主按钮: "Browse Quran Verses →" (页内锚点)
     * 次按钮: "Create Calligraphy" (链接: /?source=quran-landing)

2. **文化尊重指南 (200词)**
   标题: "Respectful Display of Quranic Text"
   
   **尊重原则:**
   - 保持 Wudu (净身)虽非必须,但建议心怀敬意
   - 将书法挂在干净、尊贵的位置
   - 避免挂在厕所、地面或脚下位置
   - 不要展示在不敬的场合
   
   **展示建议:**
   - ✓ 客厅、书房、祈祷室
   - ✓ 高于腰部的墙面位置
   - ✓ 干净整洁的环境
   - ✗ 卧室(有不同观点)
   - ✗ 浴室、厨房
   - ✗ 地毯或地面装饰

3. **热门古兰经文列表 (15个)**
   标题: "Popular Quran Verses for Calligraphy"
   
   每个经文包含:
   - 阿拉伯原文
   - 音译 (Transliteration)
   - 英文翻译
   - 经文出处 (Surah:Ayah)
   - 主题/意义
   - "Create This →" 按钮(链接到生成器,预填文本)

   **列表内容:**
   
   **1. Ayat Al-Kursi (The Throne Verse)**
   - 出处: Surah Al-Baqarah (2:255)
   - 阿拉伯文: اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ
   - 音译: Allahu la ilaha illa Huwa, Al-Hayyul-Qayyum
   - 翻译: Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence
   - 意义: 保护与力量,最著名的经文之一
   
   **2. Surah Al-Fatiha (The Opening)**
   - 出处: Surah Al-Fatiha (1:1-7)
   - 阿拉伯文: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
   - 音译: Bismillahir Rahmanir Raheem
   - 翻译: In the name of Allah, the Most Gracious, the Most Merciful
   - 意义: 古兰经开篇,每日祈祷必读
   
   **3. Surah Al-Ikhlas (The Sincerity)**
   - 出处: Surah Al-Ikhlas (112:1-4)
   - 阿拉伯文: قُلْ هُوَ اللَّهُ أَحَدٌ
   - 音译: Qul Huwa Allahu Ahad
   - 翻译: Say: He is Allah, the One
   - 意义: 真主的独一性,简短有力
   
   **4. Surah Al-Falaq (The Daybreak)**
   - 出处: Surah Al-Falaq (113:1)
   - 阿拉伯文: قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ
   - 音译: Qul A'udhu bi Rabbil Falaq
   - 翻译: Say: I seek refuge in the Lord of daybreak
   - 意义: 寻求保护免受邪恶
   
   **5. Surah An-Nas (Mankind)**
   - 出处: Surah An-Nas (114:1)
   - 阿拉伯文: قُلْ أَعُوذُ بِرَبِّ النَّاسِ
   - 音译: Qul A'udhu bi Rabbin-Nas
   - 翻译: Say: I seek refuge in the Lord of mankind
   - 意义: 保护免受 Shaytan 的低语
   
   **6. "Allah is the Light" (An-Nur)**
   - 出处: Surah An-Nur (24:35)
   - 阿拉伯文: اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ
   - 音译: Allahu nurus samawati wal ard
   - 翻译: Allah is the Light of the heavens and the earth
   - 意义: 真主的光辉与指引
   
   **7. "Verily with hardship comes ease"**
   - 出处: Surah Ash-Sharh (94:5-6)
   - 阿拉伯文: فَإِنَّ مَعَ الْعُسْرِ يُسْرًا
   - 音译: Fa inna ma'al usri yusra
   - 翻译: For indeed, with hardship [will be] ease
   - 意义: 困难后必有容易,励志经文
   
   **8. "Allah does not burden a soul"**
   - 出处: Surah Al-Baqarah (2:286)
   - 阿拉伯文: لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا
   - 音译: La yukallifullahu nafsan illa wus'aha
   - 翻译: Allah does not burden a soul beyond what it can bear
   - 意义: 真主的仁慈与理解
   
   **9. "He is with you wherever you are"**
   - 出处: Surah Al-Hadid (57:4)
   - 阿拉伯文: وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ
   - 音译: Wa Huwa ma'akum ayna ma kuntum
   - 翻译: And He is with you wherever you are
   - 意义: 真主的同在与监护
   
   **10. "So remember Me, I will remember you"**
   - 出处: Surah Al-Baqarah (2:152)
   - 阿拉伯文: فَاذْكُرُونِي أَذْكُرْكُمْ
   - 音译: Fadhkurooni adhkurkum
   - 翻译: So remember Me; I will remember you
   - 意义: Dhikr 的重要性
   
   **11. Basmala (In the name of Allah)**
   - 出处: 每章开头(除Surah 9)
   - 阿拉伯文: بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
   - 音译: Bismillahir Rahmanir Raheem
   - 翻译: In the name of Allah, the Most Gracious, the Most Merciful
   - 意义: 行动前的祈求祝福
   
   **12. "And He is the Hearing, the Knowing"**
   - 出处: Surah Al-Baqarah (2:127)
   - 阿拉伯文: وَأَنتَ السَّمِيعُ الْعَلِيمُ
   - 音译: Wa Antas-Sami'ul-'Aleem
   - 翻译: And You are the Hearing, the Knowing
   - 意义: 真主的属性 - 全听全知
   
   **13. "My Lord, increase me in knowledge"**
   - 出处: Surah Ta-Ha (20:114)
   - 阿拉伯文: رَبِّ زِدْنِي عِلْمًا
   - 音译: Rabbi zidni 'ilma
   - 翻译: My Lord, increase me in knowledge
   - 意义: 求知的祈祷
   
   **14. "Indeed, Allah is with the patient"**
   - 出处: Surah Al-Baqarah (2:153)
   - 阿拉伯文: إِنَّ اللَّهَ مَعَ الصَّابِرِينَ
   - 音译: Innallaha ma'as-sabireen
   - 翻译: Indeed, Allah is with the patient
   - 意义: 耐心的美德
   
   **15. "Our Lord, accept [this] from us"**
   - 出处: Surah Al-Baqarah (2:127)
   - 阿拉伯文: رَبَّنَا تَقَبَّلْ مِنَّا
   - 音译: Rabbana taqabbal minna
   - 翻译: Our Lord, accept [this] from us
   - 意义: 祈求接受善功

4. **使用场景展示**
   标题: "Where to Display Quran Calligraphy"
   
   6个场景 Card:
   - 家居装饰: 客厅墙面艺术
   - 祈祷室: 专用 Musalla 装饰
   - 礼物赠送: 开斋节、朝觐礼物
   - 办公空间: 提醒与激励
   - 学习区: 伊斯兰教育环境
   - 冥想空间: Dhikr 与沉思

5. **HowTo Section**
   标题: "How to Create Quran Verse Calligraphy"
   
   4个步骤(带 Schema.org HowTo):
   - Step 1: 从上方列表选择经文
   - Step 2: 选择传统书法字体(Amiri, Scheherazade)
   - Step 3: 自定义颜色和背景(建议绿色、金色)
   - Step 4: 下载高质量图片并敬重展示

6. **字体推荐**
   标题: "Best Fonts for Quranic Calligraphy"
   
   表格对比:
   | 字体 | 风格 | 适合经文类型 |
   | Amiri | 传统 Naskh | 长经文,易读 |
   | Scheherazade | 装饰性 Naskh | 短经文,艺术性强 |
   | Noto Naskh Arabic | 现代清晰 | 教育展示 |
   | Lateef | 优雅 | Ayat Al-Kursi 等名篇 |

7. **FAQ Section**
   8个问题:
   - Is it permissible to use Quran verses as wall art?
   - Can I use Quran calligraphy as phone wallpaper?
   - Do I need to be in Wudu to create Quran calligraphy?
   - Can I sell Quran verse artwork?
   - What's the best way to dispose of old Quran prints?
   - Can I mix Quran verses with decorative elements?
   - Is it okay to give Quran calligraphy as gifts?
   - Should I include translation alongside Arabic text?

8. **CTA Section**
   - 标题: "Create Your Quranic Artwork with Respect"
   - 按钮: "Browse Verses & Create →" (链接: /?source=quran-landing)
   - 提醒:
     * 🌙 Display with highest respect
     * 🌙 Suitable for home and prayer spaces
     * 🌙 Perfect for gifts and reflection

**Schema.org 结构化数据:**
1. HowTo Schema (4步骤)
2. ItemList Schema (15个经文列表)
3. BreadcrumbList

**设计要求:**
- 使用深绿/金色配色(伊斯兰传统色)
- 经文卡片用优雅边框
- 阿拉伯文用大号清晰字体
- 尊重提示用温和的提示框
- Icon: Moon, Star, Book, Heart

**注意事项:**
- 必须确保经文文本准确无误
- 翻译使用权威英译(Sahih International 等)
- 强调敬重展示的重要性
- 避免商业化语言
- 不鼓励用于不敬场合(如纹身,已在 tattoo 页说明)

请生成完整的 page.tsx 文件代码,确保宗教敬意和文本准确性。
```

---

## 使用说明

**对于用户(项目所有者):**
1. 将每个提示词复制到 Claude 对话中
2. Claude 会生成完整的 TypeScript 页面组件
3. 保存生成的代码到对应路径
4. 根据需要调整内容和样式

**生成后需要做的调整:**
- 替换占位符图片为实际 CDN 图片
- 验证所有链接和路由
- 检查响应式布局
- 添加实际的经文/案例数据
- 测试 Schema 结构化数据

**估计每个页面生成耗时:** 5-10分钟(Claude 生成) + 15-30分钟(人工调整)

---

**创建时间:** 2025-11-12  
**适用于:** Arabic Calligraphy Generator 项目 v2.0 路线图
