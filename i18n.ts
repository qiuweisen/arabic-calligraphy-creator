import { getRequestConfig } from 'next-intl/server';

// 支持的语言配置
export const locales = ['en', 'ar', 'ur', 'bn'] as const;
export type Locale = (typeof locales)[number];

// 默认语言
export const defaultLocale: Locale = 'en';

// 语言配置信息
export const localeConfig = {
  en: {
    name: 'English',
    nativeName: 'English',
    dir: 'ltr' as const,
    flag: '🇺🇸',
    country: 'US'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl' as const,
    flag: '🇸🇦',
    country: 'SA'
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
    dir: 'rtl' as const,
    flag: '🇵🇰',
    country: 'PK'
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
    dir: 'ltr' as const,
    flag: '🇧🇩',
    country: 'BD'
  }
} as const;

// 根据国家代码建议语言
export const countryToLocaleMap: Record<string, Locale> = {
  // 阿拉伯语国家
  'SA': 'ar', // 沙特阿拉伯
  'AE': 'ar', // 阿联酋
  'QA': 'ar', // 卡塔尔
  'KW': 'ar', // 科威特
  'BH': 'ar', // 巴林
  'OM': 'ar', // 阿曼
  'LB': 'ar', // 黎巴嫩
  'JO': 'ar', // 约旦
  'TN': 'ar', // 突尼斯
  'MA': 'ar', // 摩洛哥
  'DZ': 'ar', // 阿尔及利亚
  'EG': 'ar', // 埃及
  'SY': 'ar', // 叙利亚
  'IQ': 'ar', // 伊拉克
  'YE': 'ar', // 也门
  'LY': 'ar', // 利比亚
  'SD': 'ar', // 苏丹
  // 乌尔都语国家
  'PK': 'ur', // 巴基斯坦
  // 孟加拉语国家
  'BD': 'bn', // 孟加拉国
  'IN': 'bn', // 印度（西孟加拉邦等）
  // 其他国家默认英语
};

// 获取建议的语言
export function getSuggestedLocale(countryCode?: string, acceptLanguage?: string): Locale {
  // 1. 基于国家代码
  if (countryCode && countryToLocaleMap[countryCode]) {
    return countryToLocaleMap[countryCode];
  }
  
  // 2. 基于浏览器语言
  if (acceptLanguage) {
    const browserLang = acceptLanguage.split(',')[0].split('-')[0];
    if (locales.includes(browserLang as Locale)) {
      return browserLang as Locale;
    }
  }
  
  // 3. 默认英语
  return defaultLocale;
}

// next-intl 配置
export default getRequestConfig(async ({ locale }) => {
  // 确保locale是有效的
  const validLocale = (locales.includes(locale as Locale) ? locale : defaultLocale) as Locale;

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default
  };
});
