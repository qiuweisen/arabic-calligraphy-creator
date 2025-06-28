import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, getSuggestedLocale } from './i18n';

// 定义需要多语言支持的路径
const multilingualPaths = [
  '/', // 主页
  // 未来可以添加更多页面，如：
  // '/contact',
  // '/about',
];

// 判断是否为多语言路径
function isMultilingualPath(pathname: string): boolean {
  // 检查是否是根路径或语言前缀路径
  if (pathname === '/') return true;

  // 检查是否是语言前缀路径 (如 /ar, /ar/contact)
  for (const locale of locales) {
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      // 提取去掉语言前缀的路径
      const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
      return multilingualPaths.includes(pathWithoutLocale);
    }
  }

  // 检查是否在多语言路径列表中
  return multilingualPaths.includes(pathname);
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

  // 判断是否需要多语言处理
  if (isMultilingualPath(pathname)) {
    // 获取用户语言偏好信息（仅用于客户端建议，不做重定向）
    const countryCode = request.headers.get('CF-IPCountry') || undefined;
    const acceptLanguage = request.headers.get('Accept-Language') || undefined;
    const suggestedLocale = getSuggestedLocale(countryCode, acceptLanguage);

    // 使用 next-intl 中间件处理多语言路由
    const response = intlMiddleware(request);

    // 添加语言建议信息到响应头，供客户端使用（不做重定向）
    if (response) {
      response.headers.set('X-Suggested-Locale', suggestedLocale);
      response.headers.set('X-Country-Code', countryCode || 'unknown');
      response.headers.set('x-pathname', pathname);
    }

    return response;
  } else {
    // 单语言页面，直接放行，无i18n处理开销
    return NextResponse.next();
  }
}

export const config = {
  // 匹配所有路径，除了 API 路由、静态文件等
  matcher: [
    // 匹配所有路径
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // 匹配根路径
    '/'
  ]
};
