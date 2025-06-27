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

export function LanguagePrompt({ suggestedLocale, countryCode }: LanguagePromptProps = {}) {
  const router = useRouter();
  const pathname = usePathname();

  // 安全地获取翻译和当前语言
  let t: any;
  let currentLocale: Locale = 'en';

  try {
    t = useTranslations('languagePrompt');
    currentLocale = useLocale() as Locale;
  } catch (error) {
    // 如果不在多语言路由下，使用默认值
    t = (key: string) => {
      const fallbacks: Record<string, string> = {
        'title': 'Welcome! We offer our site in your language',
        'subtitle': 'Would you like to switch to {language}?',
        'useLanguage': 'Use {language}',
        'continueEnglish': 'Continue in English',
        'dontShowAgain': 'Don\'t show again'
      };
      return fallbacks[key] || key;
    };
    currentLocale = 'en';
  }
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const [detectedSuggestedLocale, setDetectedSuggestedLocale] = useState<Locale | undefined>(suggestedLocale);
  const [detectedCountryCode, setDetectedCountryCode] = useState<string | undefined>(countryCode);

  useEffect(() => {
    // 客户端语言检测
    if (!suggestedLocale) {
      const browserLang = navigator.language.split('-')[0];
      const fullLang = navigator.language;

      // 检测支持的语言
      if (browserLang === 'ar') {
        setDetectedSuggestedLocale('ar');
        setDetectedCountryCode('SA');
      } else if (browserLang === 'ur') {
        setDetectedSuggestedLocale('ur');
        setDetectedCountryCode('PK');
      } else if (browserLang === 'bn') {
        setDetectedSuggestedLocale('bn');
        setDetectedCountryCode('BD');
      } else if (fullLang.includes('IN')) {
        // 印度用户可能使用多种语言，根据地区判断
        if (fullLang.includes('ur') || fullLang.includes('Urdu')) {
          setDetectedSuggestedLocale('ur');
          setDetectedCountryCode('IN');
        } else if (fullLang.includes('bn') || fullLang.includes('Bengali')) {
          setDetectedSuggestedLocale('bn');
          setDetectedCountryCode('IN');
        }
      }
    }
  }, [suggestedLocale]);

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
      const finalSuggestedLocale = detectedSuggestedLocale || suggestedLocale;
      if (!finalSuggestedLocale || finalSuggestedLocale === currentLocale) {
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

        // 分析事件：弹窗显示
        if (typeof window !== 'undefined' && (window as any).plausible) {
          (window as any).plausible('Language Prompt Show', {
            props: {
              current_language: currentLocale,
              suggested_language: detectedSuggestedLocale || suggestedLocale,
              country_code: detectedCountryCode || 'unknown',
              detection_method: suggestedLocale ? 'server' : 'client'
            }
          });
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [detectedSuggestedLocale, suggestedLocale, currentLocale]);

  const handleAcceptLanguage = () => {
    const finalSuggestedLocale = detectedSuggestedLocale || suggestedLocale;
    if (!finalSuggestedLocale) return;

    // 分析事件：用户接受语言建议
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Language Prompt Accept', {
        props: {
          from_language: currentLocale,
          to_language: finalSuggestedLocale,
          country_code: detectedCountryCode || 'unknown',
          detection_method: suggestedLocale ? 'server' : 'client'
        }
      });
    }

    // 记录用户选择
    localStorage.setItem('prompt-language-choice', finalSuggestedLocale);
    document.cookie = `prompt-language-choice=${finalSuggestedLocale}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // 构建新路径
    let newPath = pathname;
    if (finalSuggestedLocale !== 'en') {
      newPath = `/${finalSuggestedLocale}${pathname}`;
    }

    // 导航到新语言版本
    router.push(newPath);
    setIsVisible(false);
  };

  const handleContinueEnglish = () => {
    // 分析事件：用户选择继续使用英语
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Language Prompt Decline', {
        props: {
          current_language: currentLocale,
          suggested_language: finalSuggestedLocale,
          country_code: detectedCountryCode || 'unknown',
          detection_method: suggestedLocale ? 'server' : 'client'
        }
      });
    }

    // 记录用户选择继续使用英语
    localStorage.setItem('prompt-language-choice', 'en');
    document.cookie = `prompt-language-choice=en; path=/; max-age=${365 * 24 * 60 * 60}`;
    setIsVisible(false);
  };

  const handleDismiss = () => {
    // 分析事件：用户关闭弹窗
    if (typeof window !== 'undefined' && (window as any).plausible) {
      (window as any).plausible('Language Prompt Dismiss', {
        props: {
          current_language: currentLocale,
          suggested_language: finalSuggestedLocale,
          country_code: detectedCountryCode || 'unknown',
          detection_method: suggestedLocale ? 'server' : 'client'
        }
      });
    }

    // 记录用户关闭弹窗，但不记录语言选择
    localStorage.setItem('language-prompt-dismissed', 'true');
    setIsVisible(false);
  };

  const finalSuggestedLocale = detectedSuggestedLocale || suggestedLocale;

  if (!shouldShow || !isVisible || !finalSuggestedLocale) {
    return null;
  }

  const suggestedConfig = localeConfig[finalSuggestedLocale];
  const currentConfig = localeConfig[currentLocale];

  // 根据建议语言显示不同的文案
  const getLocalizedContent = () => {
    switch (finalSuggestedLocale) {
      case 'ar':
        return {
          title: 'مرحباً! نحن نوفر موقعنا باللغة العربية',
          subtitle: 'Hello! We offer our site in Arabic',
          useLanguage: 'استخدم العربية',
          continueEnglish: 'Continue in English'
        };
      case 'ur':
        return {
          title: 'ہیلو! ہم اپنی ویب سائٹ اردو میں فراہم کرتے ہیں',
          subtitle: 'Hello! We offer our site in Urdu',
          useLanguage: 'اردو استعمال کریں',
          continueEnglish: 'Continue in English'
        };
      case 'bn':
        return {
          title: 'হ্যালো! আমরা আমাদের সাইট বাংলায় অফার করি',
          subtitle: 'Hello! We offer our site in Bengali',
          useLanguage: 'বাংলা ব্যবহার করুন',
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
