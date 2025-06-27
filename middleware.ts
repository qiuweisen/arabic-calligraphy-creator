import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, getSuggestedLocale } from './i18n';

// 创建 next-intl 中间件
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // 默认语言不显示前缀
  localeDetection: false // 禁用自动语言检测和重定向
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 获取用户语言偏好信息（仅用于客户端建议，不做重定向）
  const countryCode = request.headers.get('CF-IPCountry') || undefined;
  const acceptLanguage = request.headers.get('Accept-Language') || undefined;
  const suggestedLocale = getSuggestedLocale(countryCode, acceptLanguage);

  // 使用 next-intl 中间件处理路由
  const response = intlMiddleware(request);

  // 添加语言建议信息到响应头，供客户端使用（不做重定向）
  if (response) {
    response.headers.set('X-Suggested-Locale', suggestedLocale);
    response.headers.set('X-Country-Code', countryCode || 'unknown');
  }

  return response;
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
