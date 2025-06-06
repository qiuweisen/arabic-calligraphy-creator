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

// 字体链接
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
  
  // 针对字体页面的特定相关链接
  const fontSpecificLinks: Record<string, ContentLink[]> = {
    'amiri': [
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.sixMajorStyles,
      TOOL_LINKS.calligraphyGenerator
    ],
    'scheherazade': [
      BLOG_LINKS.quranCalligraphy,
      BLOG_LINKS.historyOfCalligraphy,
      TOOL_LINKS.calligraphyGenerator
    ],
    'reem-kufi': [
      BLOG_LINKS.sixMajorStyles,
      BLOG_LINKS.modernTypography,
      TOOL_LINKS.calligraphyGenerator
    ]
  }
  
  // 针对博客页面的特定相关链接
  const blogSpecificLinks: Record<string, ContentLink[]> = {
    'the-rich-history-of-arabic-calligraphy': [
      FONT_LINKS.amiri,
      FONT_LINKS.scheherazade,
      BLOG_LINKS.famousCalligraphers
    ],
    'six-major-calligraphy-styles': [
      FONT_LINKS.amiri,
      FONT_LINKS.reemKufi,
      FONT_LINKS.arefRuqaa
    ],
    'beginners-guide-to-calligraphy': [
      TOOL_LINKS.calligraphyGenerator,
      BLOG_LINKS.sixMajorStyles,
      FONT_LINKS.notoNaskhArabic
    ],
    'famous-arabic-calligraphers': [
      BLOG_LINKS.historyOfCalligraphy,
      BLOG_LINKS.quranCalligraphy,
      TOOL_LINKS.calligraphyGenerator
    ],
    'modern-arabic-typography': [
      FONT_LINKS.cairo,
      BLOG_LINKS.historyOfCalligraphy,
      TOOL_LINKS.calligraphyGenerator
    ],
    'quran-and-calligraphy': [
      BLOG_LINKS.historyOfCalligraphy,
      FONT_LINKS.scheherazade,
      TOOL_LINKS.calligraphyGenerator
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