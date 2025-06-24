/**
 * IndexNow 客户端工具
 * 用于在内容更新时自动提交到搜索引擎
 */

const SITE_URL = 'https://arabic-calligraphy-generator.com';

/**
 * 提交单个或多个URL到IndexNow
 */
export async function submitToIndexNow(urls: string | string[]): Promise<{
  success: boolean;
  submitted: number;
  error?: string;
}> {
  try {
    const urlArray = Array.isArray(urls) ? urls : [urls];
    
    // 确保URL是完整的
    const fullUrls = urlArray.map(url => {
      if (url.startsWith('http')) {
        return url;
      }
      return `${SITE_URL}${url.startsWith('/') ? url : '/' + url}`;
    });

    const response = await fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        urls: fullUrls,
        immediate: true
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      success: result.success,
      submitted: result.submitted,
    };

  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return {
      success: false,
      submitted: 0,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * 提交当前页面到IndexNow
 */
export async function submitCurrentPage(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  const currentUrl = window.location.href;
  const result = await submitToIndexNow(currentUrl);
  return result.success;
}

/**
 * 批量提交多个页面
 */
export async function submitBatch(paths: string[]): Promise<{
  total: number;
  successful: number;
  failed: number;
}> {
  const batchSize = 10; // 每批最多10个URL
  let successful = 0;
  let failed = 0;

  for (let i = 0; i < paths.length; i += batchSize) {
    const batch = paths.slice(i, i + batchSize);
    const result = await submitToIndexNow(batch);
    
    if (result.success) {
      successful += result.submitted;
    } else {
      failed += batch.length;
    }

    // 批次间延迟，避免过于频繁的请求
    if (i + batchSize < paths.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  return {
    total: paths.length,
    successful,
    failed
  };
}

/**
 * 预定义的重要页面路径（与sitemap同步）
 */
export const ALL_PAGES = [
  // 核心页面
  '/',
  '/fonts',
  '/blog',
  '/faq',
  '/tutorials',
  '/guides',
  '/use-cases',
  '/resources',
  '/tools',
  '/features',

  // 静态页面
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/about-us',
  '/about/arabic-calligraphy-history',

  // 博客文章
  '/blog/beginners-guide-to-calligraphy',
  '/blog/six-major-calligraphy-styles',
  '/blog/the-rich-history-of-arabic-calligraphy',
  '/blog/famous-arabic-calligraphers',
  '/blog/modern-arabic-typography',
  '/blog/quran-and-calligraphy',

  // 字体页面
  '/fonts/amiri',
  '/fonts/aref-ruqaa',
  '/fonts/scheherazade',
  '/fonts/noto-naskh-arabic',
  '/fonts/lateef',
  '/fonts/markazi-text',
  '/fonts/reem-kufi',
  '/fonts/cairo',
  '/fonts/harmattan',
  '/fonts/mada',
  '/fonts/tajawal',
  '/fonts/lemonada',
  '/fonts/el-messiri',
  '/fonts/jomhuria',
  '/fonts/rakkas',
  '/fonts/mirza',
  '/fonts/marhey',

  // 指南页面
  '/guides/arabic-calligraphy-beginner-guide',
  '/guides/arabic-font-comparison',
  '/guides/best-arabic-fonts-2025',
  '/guides/arabic-typography-trends-2025',

  // 教程页面
  '/tutorials/how-to-create-arabic-calligraphy-online',
  '/tutorials/arabic-font-selection-guide',
  '/tutorials/arabic-calligraphy-design-tips',
  '/tutorials/download-and-use-arabic-fonts',

  // 资源页面
  '/resources/free-arabic-fonts',

  // 用例页面
  '/use-cases/wedding-arabic-calligraphy',
  '/use-cases/business-logo-arabic-fonts',
  '/use-cases/social-media-arabic-typography',
  '/use-cases/religious-arabic-calligraphy'
];

// 向后兼容
export const IMPORTANT_PAGES = ALL_PAGES;

/**
 * 提交所有重要页面
 */
export async function submitImportantPages() {
  return await submitBatch(IMPORTANT_PAGES);
}

/**
 * 提交所有页面（与sitemap同步）
 */
export async function submitAllPages() {
  return await submitBatch(ALL_PAGES);
}
