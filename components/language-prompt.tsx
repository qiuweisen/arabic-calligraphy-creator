'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { X } from 'lucide-react';
import { localeConfig, getSuggestedLocale, type Locale } from '@/i18n';

interface LanguagePromptProps {
  suggestedLocale?: Locale;
  countryCode?: string;
}

export function LanguagePrompt({ suggestedLocale, countryCode }: LanguagePromptProps) {
  const t = useTranslations('languagePrompt');
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // 检查是否应该显示弹窗
    const checkShouldShow = () => {
      // 1. 检查用户是否已经做过选择
      const userChoice = localStorage.getItem('user-language-choice');
      const promptChoice = localStorage.getItem('prompt-language-choice');
      const promptDismissed = localStorage.getItem('language-prompt-dismissed');
      
      if (userChoice || promptChoice || promptDismissed) {
        return false;
      }
      
      // 2. 检查是否有建议的语言且不同于当前语言
      if (!suggestedLocale || suggestedLocale === currentLocale) {
        return false;
      }
      
      // 3. 检查是否是首次访问或者访问次数少于3次
      const visitCount = parseInt(localStorage.getItem('language-prompt-visits') || '0');
      if (visitCount >= 3) {
        return false;
      }
      
      // 增加访问计数
      localStorage.setItem('language-prompt-visits', (visitCount + 1).toString());
      
      return true;
    };

    if (checkShouldShow()) {
      setShouldShow(true);
      // 延迟显示弹窗，让页面先加载完成
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [suggestedLocale, currentLocale]);

  const handleAcceptLanguage = () => {
    if (!suggestedLocale) return;
    
    // 记录用户选择
    localStorage.setItem('prompt-language-choice', suggestedLocale);
    document.cookie = `prompt-language-choice=${suggestedLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;
    
    // 构建新路径
    let newPath = pathname;
    if (suggestedLocale !== 'en') {
      newPath = `/${suggestedLocale}${pathname}`;
    }
    
    // 导航到新语言版本
    router.push(newPath);
    setIsVisible(false);
  };

  const handleContinueEnglish = () => {
    // 记录用户选择继续使用英语
    localStorage.setItem('prompt-language-choice', 'en');
    document.cookie = `prompt-language-choice=en; path=/; max-age=${365 * 24 * 60 * 60}`;
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // 记录用户关闭弹窗，但不记录语言选择
    localStorage.setItem('language-prompt-dismissed', 'true');
    setIsVisible(false);
  };

  if (!shouldShow || !isVisible || !suggestedLocale) {
    return null;
  }

  const suggestedConfig = localeConfig[suggestedLocale];
  const currentConfig = localeConfig[currentLocale];

  // 根据建议语言显示不同的文案
  const getLocalizedContent = () => {
    switch (suggestedLocale) {
      case 'ar':
        return {
          title: 'مرحباً! نحن نوفر موقعنا باللغة العربية',
          subtitle: 'Hello! We offer our site in Arabic',
          useLanguage: 'استخدم العربية',
          continueEnglish: 'Continue in English'
        };
      default:
        return {
          title: t('title'),
          subtitle: t('subtitle', { language: suggestedConfig.nativeName }),
          useLanguage: t('useLanguage', { language: suggestedConfig.nativeName }),
          continueEnglish: t('continueEnglish')
        };
    }
  };

  const content = getLocalizedContent();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pointer-events-none">
      <Card className="w-full max-w-sm mt-16 mr-4 pointer-events-auto animate-in slide-in-from-right-5 duration-300 shadow-lg border-amber-200 bg-white/95 backdrop-blur-sm">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{suggestedConfig.flag}</span>
              <div>
                <h3 className="font-semibold text-amber-900 text-sm leading-tight">
                  {content.title}
                </h3>
                <p className="text-xs text-amber-700 mt-1">
                  {content.subtitle}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDismiss}
              className="h-6 w-6 p-0 text-amber-600 hover:text-amber-800 hover:bg-amber-50"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          <Button
            onClick={handleAcceptLanguage}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm h-8"
          >
            {content.useLanguage}
          </Button>
          <Button
            onClick={handleContinueEnglish}
            variant="outline"
            className="w-full border-amber-200 text-amber-800 hover:bg-amber-50 text-sm h-8"
          >
            {content.continueEnglish}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
