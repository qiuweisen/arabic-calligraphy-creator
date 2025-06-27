'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';
import { locales, localeConfig, type Locale } from '@/i18n';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 安全地获取翻译和当前语言
  let t: any;
  let currentLocale: Locale = 'en';

  try {
    t = useTranslations('languageSwitcher');
    currentLocale = useLocale() as Locale;
  } catch (error) {
    // 如果不在多语言路由下，使用默认值
    t = (key: string) => {
      const fallbacks: Record<string, string> = {
        'selectLanguage': 'Select Language',
        'currentLanguage': 'Current Language'
      };
      return fallbacks[key] || key;
    };
    currentLocale = 'en';
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    if (!mounted) return;

    // 记录用户主动选择（最高优先级）
    localStorage.setItem('user-language-choice', newLocale);
    document.cookie = `user-language-choice=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // 构建新的路径
    let newPath = pathname;

    // 移除当前语言前缀（如果存在）
    const currentLocalePrefix = `/${currentLocale}`;
    if (pathname.startsWith(currentLocalePrefix)) {
      newPath = pathname.slice(currentLocalePrefix.length) || '/';
    }

    // 添加新语言前缀（如果不是默认语言）
    if (newLocale !== 'en') {
      newPath = `/${newLocale}${newPath}`;
    }

    // 导航到新路径
    router.push(newPath);
    setIsOpen(false);
  };

  const currentConfig = localeConfig[currentLocale];

  // 防止服务端渲染不匹配
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="h-9 px-3 text-amber-800 hover:bg-amber-50 hover:text-amber-900"
        disabled
      >
        <Globe className="h-4 w-4 mr-2" />
        <span className="hidden sm:inline mr-1">
          🇺🇸 English
        </span>
        <span className="sm:hidden mr-1">
          🇺🇸
        </span>
        <ChevronDown className="h-3 w-3" />
      </Button>
    );
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 px-3 text-amber-800 hover:bg-amber-50 hover:text-amber-900"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline mr-1">
            {currentConfig.flag} {currentConfig.nativeName}
          </span>
          <span className="sm:hidden mr-1">
            {currentConfig.flag}
          </span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {locales.map((locale) => {
          const config = localeConfig[locale];
          const isActive = locale === currentLocale;
          
          return (
            <DropdownMenuItem
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`cursor-pointer ${
                isActive 
                  ? 'bg-amber-50 text-amber-900 font-medium' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="mr-3 text-lg">{config.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{config.nativeName}</span>
                <span className="text-xs text-gray-500">{config.name}</span>
              </div>
              {isActive && (
                <span className="ml-auto text-amber-600">✓</span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
