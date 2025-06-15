// 定义链接类型
export interface ContentLink {
  title: string
  description: string
  href: string
  type: 'blog' | 'font' | 'tool'
}

// 博客文章链接
export const BLOG_LINKS: Record<string, ContentLink> = {
  historyOfCalligraphy: {
    title: "The Rich History of Arabic Calligraphy",
    description: "Explore the origins and evolution of this sacred art form",
    href: "/blog/the-rich-history-of-arabic-calligraphy",
    type: "blog"
  },
  sixMajorStyles: {
    title: "Six Major Calligraphy Styles",
    description: "Understanding the distinctive characteristics of each style",
    href: "/blog/six-major-calligraphy-styles",
    type: "blog"
  },
  beginnersGuide: {
    title: "Beginner's Guide to Arabic Calligraphy",
    description: "Essential tools and techniques for starting your journey",
    href: "/blog/beginners-guide-to-calligraphy",
    type: "blog"
  },
  famousCalligraphers: {
    title: "10 Famous Arabic Calligraphers",
    description: "Masters who shaped the art from classical to contemporary",
    href: "/blog/famous-arabic-calligraphers",
    type: "blog"
  },
  modernTypography: {
    title: "Modern Arabic Typography",
    description: "How traditional calligraphy influences digital design",
    href: "/blog/modern-arabic-typography",
    type: "blog"
  },
  quranCalligraphy: {
    title: "The Quran and Arabic Calligraphy",
    description: "Exploring the sacred connection between text and art",
    href: "/blog/quran-and-calligraphy",
    type: "blog"
  }
}

// 字体链接 - 包含所有字体页面
export const FONT_LINKS: Record<string, ContentLink> = {
  amiri: {
    title: "Amiri Font",
    description: "An elegant typeface inspired by classical Arabic typography",
    href: "/fonts/amiri",
    type: "font"
  },
  scheherazade: {
    title: "Scheherazade Font",
    description: "A traditional Naskh style with excellent readability",
    href: "/fonts/scheherazade",
    type: "font"
  },
  notoNaskhArabic: {
    title: "Noto Naskh Arabic Font",
    description: "A clean, versatile font optimized for digital screens",
    href: "/fonts/noto-naskh-arabic",
    type: "font"
  },
  reemKufi: {
    title: "Reem Kufi Font",
    description: "A modern Kufi typeface with geometric precision",
    href: "/fonts/reem-kufi",
    type: "font"
  },
  arefRuqaa: {
    title: "Aref Ruqaa Font",
    description: "An ornate typeface inspired by Ottoman Diwani calligraphy",
    href: "/fonts/aref-ruqaa",
    type: "font"
  },
  cairo: {
    title: "Cairo Font",
    description: "A contemporary sans-serif for clean, modern designs",
    href: "/fonts/cairo",
    type: "font"
  },
  tajawal: {
    title: "Tajawal Font",
    description: "A modern Arabic sans-serif with excellent legibility",
    href: "/fonts/tajawal",
    type: "font"
  },
  mada: {
    title: "Mada Font",
    description: "A geometric sans-serif with clean, contemporary lines",
    href: "/fonts/mada",
    type: "font"
  },
  elMessiri: {
    title: "El Messiri Font",
    description: "A modern Arabic typeface with Latin script harmony",
    href: "/fonts/el-messiri",
    type: "font"
  },
  markaziText: {
    title: "Markazi Text Font",
    description: "A text typeface suitable for publications and long reading",
    href: "/fonts/markazi-text",
    type: "font"
  },
  lateef: {
    title: "Lateef Font",
    description: "An extended Arabic typeface based on traditional Naskh",
    href: "/fonts/lateef",
    type: "font"
  },
  mirza: {
    title: "Mirza Font",
    description: "A distinguished Nastaliq typeface for Persian and Urdu",
    href: "/fonts/mirza",
    type: "font"
  },
  harmattan: {
    title: "Harmattan Font",
    description: "A simplified modern Arabic typeface with excellent legibility",
    href: "/fonts/harmattan",
    type: "font"
  },
  lemonada: {
    title: "Lemonada Font",
    description: "A modern and friendly Arabic typeface with rounded letterforms",
    href: "/fonts/lemonada",
    type: "font"
  },
  marhey: {
    title: "Marhey Font",
    description: "A vibrant and energetic Arabic display font with playful character",
    href: "/fonts/marhey",
    type: "font"
  },
  jomhuria: {
    title: "Jomhuria Font",
    description: "A powerful Arabic display font with bold Kufi-inspired letterforms",
    href: "/fonts/jomhuria",
    type: "font"
  },
  rakkas: {
    title: "Rakkas Font",
    description: "A decorative display font with distinctive handwritten character",
    href: "/fonts/rakkas",
    type: "font"
  }
}

// 工具链接
export const TOOL_LINKS: Record<string, ContentLink> = {
  calligraphyGenerator: {
    title: "Arabic Calligraphy Generator",
    description: "Create beautiful Arabic calligraphy with customizable options",
    href: "/",
    type: "tool"
  },
  fontLibrary: {
    title: "Arabic Font Library",
    description: "Explore our complete collection of Arabic fonts",
    href: "/fonts",
    type: "tool"
  },
  faq: {
    title: "Calligraphy FAQ",
    description: "Answers to common questions about Arabic calligraphy",
    href: "/faq",
    type: "tool"
  }
}

// 根据内容类型获取相关链接
export function getRelatedLinks(
  currentPage: string,
  currentType: 'blog' | 'font' | 'tool',
  options: { 
    includeSameType?: boolean,
    includeBlogs?: boolean,
    includeFonts?: boolean, 
    includeTools?: boolean, 
    maxPerType?: number
  } = {}
): ContentLink[] {
  const {
    includeSameType = false,
    includeBlogs = true,
    includeFonts = true,
    includeTools = true,
    maxPerType = 2
  } = options
  
  let result: ContentLink[] = []
  
  // 添加博客链接
  if (includeBlogs && (includeSameType || currentType !== 'blog')) {
    const blogLinks = Object.values(BLOG_LINKS)
      .filter(link => link.href !== currentPage)
      .slice(0, maxPerType)
    result = [...result, ...blogLinks]
  }
  
  // 添加字体链接
  if (includeFonts && (includeSameType || currentType !== 'font')) {
    const fontLinks = Object.values(FONT_LINKS)
      .filter(link => link.href !== currentPage)
      .slice(0, maxPerType)
    result = [...result, ...fontLinks]
  }
  
  // 添加工具链接
  if (includeTools && (includeSameType || currentType !== 'tool')) {
    const toolLinks = Object.values(TOOL_LINKS)
      .filter(link => link.href !== currentPage)
      .slice(0, maxPerType)
    result = [...result, ...toolLinks]
  }
  
  return result
}

// 根据内容获取特定相关链接
export function getContentSpecificLinks(
  contentType: 'blog' | 'font',
  contentSlug: string
): ContentLink[] {
  // 根据内容类型和slug返回特定的相关链接
  
  // 针对字体页面的特定相关链接 - 基于风格、用途和特征的智能推荐
  const fontSpecificLinks: Record<string, ContentLink[]> = {
    // 传统书法风格字体
    'amiri': [
      FONT_LINKS.scheherazade, // 同为传统Naskh风格
      FONT_LINKS.lateef, // 同为传统风格
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.sixMajorStyles
    ],
    'scheherazade': [
      FONT_LINKS.amiri, // 同为传统Naskh风格
      FONT_LINKS.notoNaskhArabic, // 同为Naskh风格
      BLOG_LINKS.quranCalligraphy,
      BLOG_LINKS.historyOfCalligraphy
    ],
    'lateef': [
      FONT_LINKS.amiri, // 同为传统风格
      FONT_LINKS.scheherazade, // 同为Naskh风格
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.quranCalligraphy
    ],
    
    // 现代Naskh风格字体
    'noto-naskh-arabic': [
      FONT_LINKS.scheherazade, // 同为Naskh风格
      FONT_LINKS.harmattan, // 同为现代简洁风格
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ],
    'harmattan': [
      FONT_LINKS.notoNaskhArabic, // 同为现代简洁风格
      FONT_LINKS.markaziText, // 同为文本阅读优化
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ],
    'markazi-text': [
      FONT_LINKS.harmattan, // 同为文本阅读优化
      FONT_LINKS.lateef, // 同为文本用途
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ],
    
    // 现代无衬线字体
    'cairo': [
      FONT_LINKS.tajawal, // 同为现代sans-serif
      FONT_LINKS.mada, // 同为几何sans-serif
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.sixMajorStyles
    ],
    'tajawal': [
      FONT_LINKS.cairo, // 同为现代sans-serif
      FONT_LINKS.elMessiri, // 同为现代设计
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ],
    'mada': [
      FONT_LINKS.cairo, // 同为几何sans-serif
      FONT_LINKS.tajawal, // 同为现代sans-serif
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.sixMajorStyles
    ],
    'el-messiri': [
      FONT_LINKS.tajawal, // 同为现代设计
      FONT_LINKS.lemonada, // 同为友好现代风格
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ],
    
    // Kufi风格字体
    'reem-kufi': [
      FONT_LINKS.jomhuria, // 同为Kufi风格
      FONT_LINKS.mada, // 同为几何风格
      BLOG_LINKS.sixMajorStyles,
      BLOG_LINKS.historyOfCalligraphy
    ],
    'jomhuria': [
      FONT_LINKS.reemKufi, // 同为Kufi风格
      FONT_LINKS.rakkas, // 同为display字体
      BLOG_LINKS.sixMajorStyles,
      BLOG_LINKS.famousCalligraphers
    ],
    
    // 装饰性/Display字体
    'aref-ruqaa': [
      FONT_LINKS.rakkas, // 同为装饰性字体
      FONT_LINKS.marhey, // 同为display字体
      BLOG_LINKS.sixMajorStyles,
      BLOG_LINKS.famousCalligraphers
    ],
    'rakkas': [
      FONT_LINKS.arefRuqaa, // 同为装饰性字体
      FONT_LINKS.jomhuria, // 同为display字体
      BLOG_LINKS.sixMajorStyles,
      BLOG_LINKS.historyOfCalligraphy
    ],
    'marhey': [
      FONT_LINKS.lemonada, // 同为友好风格
      FONT_LINKS.arefRuqaa, // 同为display字体
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ],
    
    // 特殊风格字体
    'mirza': [
      FONT_LINKS.arefRuqaa, // 同为传统装饰风格
      FONT_LINKS.amiri, // 同为传统风格
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.famousCalligraphers
    ],
    'lemonada': [
      FONT_LINKS.marhey, // 同为友好风格
      FONT_LINKS.elMessiri, // 同为现代友好设计
      BLOG_LINKS.modernTypography,
      BLOG_LINKS.beginnersGuide
    ]
  }
  
  // 针对博客页面的特定相关链接 - 增强字体页面链接
  const blogSpecificLinks: Record<string, ContentLink[]> = {
    'the-rich-history-of-arabic-calligraphy': [
      FONT_LINKS.amiri, // 传统书法风格
      FONT_LINKS.scheherazade, // 传统Naskh
      FONT_LINKS.reemKufi, // 历史Kufi风格
      BLOG_LINKS.famousCalligraphers,
      BLOG_LINKS.sixMajorStyles
    ],
    'six-major-calligraphy-styles': [
      FONT_LINKS.amiri, // Naskh风格代表
      FONT_LINKS.reemKufi, // Kufi风格代表
      FONT_LINKS.arefRuqaa, // Diwani风格代表
      FONT_LINKS.mirza, // Nastaliq风格代表
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.famousCalligraphers
    ],
    'beginners-guide-to-calligraphy': [
      FONT_LINKS.notoNaskhArabic, // 初学者友好
      FONT_LINKS.scheherazade, // 清晰易读
      FONT_LINKS.harmattan, // 简洁现代
      TOOL_LINKS.calligraphyGenerator,
      BLOG_LINKS.sixMajorStyles
    ],
    'famous-arabic-calligraphers': [
      FONT_LINKS.amiri, // 传统大师风格
      FONT_LINKS.scheherazade, // 经典风格
      FONT_LINKS.arefRuqaa, // 奥斯曼风格
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.quranCalligraphy
    ],
    'modern-arabic-typography': [
      FONT_LINKS.cairo, // 现代sans-serif
      FONT_LINKS.tajawal, // 现代设计
      FONT_LINKS.mada, // 几何现代
      FONT_LINKS.lemonada, // 现代友好
      BLOG_LINKS.historyOfCalligraphy,
      TOOL_LINKS.calligraphyGenerator
    ],
    'quran-and-calligraphy': [
      FONT_LINKS.scheherazade, // 宗教文本优化
      FONT_LINKS.amiri, // 传统书法
      FONT_LINKS.lateef, // 宗教文本用途
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.famousCalligraphers
    ]
  }
  
  if (contentType === 'font' && fontSpecificLinks[contentSlug]) {
    return fontSpecificLinks[contentSlug]
  } else if (contentType === 'blog' && blogSpecificLinks[contentSlug]) {
    return blogSpecificLinks[contentSlug]
  }
  
  // 如果没有特定链接，返回通用链接
  return getRelatedLinks(
    contentType === 'font' ? `/fonts/${contentSlug}` : `/blog/${contentSlug}`,
    contentType
  )
}

// Font categorization system - for homepage and font library deep linking
export const FONT_CATEGORIES = {
  traditional: {
    title: "Traditional Calligraphy",
    description: "Digital revival of classical Arabic calligraphy traditions",
    fonts: [FONT_LINKS.amiri, FONT_LINKS.scheherazade, FONT_LINKS.lateef, FONT_LINKS.mirza]
  },
  modern: {
    title: "Modern Design Fonts", 
    description: "Contemporary Arabic fonts for modern design needs",
    fonts: [FONT_LINKS.cairo, FONT_LINKS.tajawal, FONT_LINKS.mada, FONT_LINKS.elMessiri]
  },
  display: {
    title: "Decorative Display Fonts",
    description: "Eye-catching fonts perfect for headlines and decorative purposes",
    fonts: [FONT_LINKS.arefRuqaa, FONT_LINKS.rakkas, FONT_LINKS.jomhuria, FONT_LINKS.marhey]
  },
  text: {
    title: "Text Reading Fonts",
    description: "Clear fonts optimized for long-form text reading experience",
    fonts: [FONT_LINKS.notoNaskhArabic, FONT_LINKS.harmattan, FONT_LINKS.markaziText, FONT_LINKS.lemonada]
  },
  kufi: {
    title: "Kufi Style Fonts",
    description: "Geometric fonts based on historical Kufi calligraphy",
    fonts: [FONT_LINKS.reemKufi, FONT_LINKS.jomhuria]
  }
}

// 获取特定分类的字体链接
export function getFontsByCategory(category: keyof typeof FONT_CATEGORIES): ContentLink[] {
  return FONT_CATEGORIES[category]?.fonts || []
}

// 获取热门/推荐字体 - 用于主页展示
export function getFeaturedFonts(): ContentLink[] {
  return [
    FONT_LINKS.amiri,
    FONT_LINKS.cairo, 
    FONT_LINKS.scheherazade,
    FONT_LINKS.reemKufi,
    FONT_LINKS.arefRuqaa,
    FONT_LINKS.tajawal
  ]
}

// 获取基于用途的字体推荐
export function getFontsByUsage(usage: 'headlines' | 'body-text' | 'decorative' | 'web-ui'): ContentLink[] {
  const usageMap = {
    'headlines': [FONT_LINKS.jomhuria, FONT_LINKS.arefRuqaa, FONT_LINKS.rakkas, FONT_LINKS.marhey],
    'body-text': [FONT_LINKS.notoNaskhArabic, FONT_LINKS.harmattan, FONT_LINKS.markaziText, FONT_LINKS.lateef],
    'decorative': [FONT_LINKS.arefRuqaa, FONT_LINKS.rakkas, FONT_LINKS.mirza, FONT_LINKS.marhey],
    'web-ui': [FONT_LINKS.cairo, FONT_LINKS.tajawal, FONT_LINKS.mada, FONT_LINKS.lemonada]
  }
  return usageMap[usage] || []
}

// Hub页面链接生成 - 为主页和字体库页面提供丰富的内部链接
export function getHubPageLinks(pageType: 'homepage' | 'font-library'): {
  featuredFonts: ContentLink[],
  categories: typeof FONT_CATEGORIES,
  recentBlogs: ContentLink[],
  tools: ContentLink[]
} {
  const recentBlogs = [
    BLOG_LINKS.historyOfCalligraphy,
    BLOG_LINKS.sixMajorStyles,
    BLOG_LINKS.modernTypography,
    BLOG_LINKS.beginnersGuide
  ]
  
  return {
    featuredFonts: getFeaturedFonts(),
    categories: FONT_CATEGORIES,
    recentBlogs,
    tools: Object.values(TOOL_LINKS)
  }
} 