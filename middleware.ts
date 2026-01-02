import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, getSuggestedLocale } from './i18n';

// 定义需要多语言支持的路径（使用Set提高查找效率）
const MULTILINGUAL_PATHS = new Set([
  '/', // 主页
  // 未来可以添加更多页面，如：
  // '/contact',
  // '/about',
]);

// 语言代码Set，避免每次循环查找
const LOCALE_SET = new Set(locales);

// 优化后的多语言路径判断函数 - O(1)复杂度
function isMultilingualPath(pathname: string): boolean {
  // 快速检查：根路径
  if (pathname === '/') return true;

  // 对于带语言前缀的路径，使用更高效的解析
  if (pathname.length > 1 && pathname[1] !== '/') {
    const firstSlash = pathname.indexOf('/', 1);
    const localeCandidate = firstSlash === -1
      ? pathname.slice(1)
      : pathname.slice(1, firstSlash);

    if (LOCALE_SET.has(localeCandidate as any)) {
      // 提取去掉语言前缀的路径
      const pathWithoutLocale = firstSlash === -1 ? '/' : pathname.slice(firstSlash) || '/';
      return MULTILINGUAL_PATHS.has(pathWithoutLocale);
    }
  }

  // 检查是否在多语言路径列表中
  return MULTILINGUAL_PATHS.has(pathname);
}

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // 默认语言不显示前缀
  localeDetection: false // 禁用自动语言检测和重定向
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Phase 0: Block staging subdomain from indexing
  if (hostname.includes('staging.') || hostname.startsWith('staging-')) {
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // 判断是否需要多语言处理
  if (isMultilingualPath(pathname)) {
    // 快速路径：检查已缓存的用户语言偏好
    const savedLocale = request.cookies.get('prompt-language-choice')?.value;

    // 如果有有效缓存，直接使用，跳过语言检测逻辑（大幅减少CPU消耗）
    if (savedLocale && LOCALE_SET.has(savedLocale as any)) {
      const response = intlMiddleware(request);
      if (response) {
        response.headers.set('X-Suggested-Locale', savedLocale);
      }
      return response;
    }

    // 首次访问或无有效缓存时，执行完整语言检测
    const suggestedLocale = getSuggestedLocale(
      request.headers.get('CF-IPCountry') || undefined,
      request.headers.get('Accept-Language') || undefined
    );

    // 使用 next-intl 中间件处理多语言路由
    const response = intlMiddleware(request);

    // 添加语言建议信息到响应头，供客户端使用
    if (response) {
      response.headers.set('X-Suggested-Locale', suggestedLocale);

      // 设置Cookie缓存，为后续访问启用快速路径
      response.cookies.set('prompt-language-choice', suggestedLocale, {
        maxAge: 365 * 24 * 60 * 60, // 1年
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
      });
    }

    return response;
  } else {
    // 单语言页面，直接放行，无i18n处理开销
    return NextResponse.next();
  }
}

export const config = {
  // 精确匹配：排除API、静态文件、字体、图标等，减少无效middleware执行
  matcher: [
    // 排除更多静态资源类型，提升性能
    '/((?!api|_next|_vercel|.*\\.[a-zA-Z]+$|favicon\\.ico|robots\\.txt|sitemap\\.xml).*)',
    // 确保根路径始终匹配
    '/'
  ]
};
