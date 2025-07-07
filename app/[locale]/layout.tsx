import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { headers } from 'next/headers';
import { DesktopSEOTracker } from '@/components/desktop-optimization/desktop-seo-tracker';
import type { Metadata } from 'next'

// 生成metadata
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  const baseUrl = 'https://arabic-calligraphy-generator.com';

  // 桌面端检测 - 仅对英文用户应用优化
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  const isDesktop = !(/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));

  // 根据设备类型和语言选择描述
  const description = (isDesktop && locale === 'en')
    ? t('description_desktop')
    : t('description');

  return {
    title: t('title'),
    description,
    keywords: t('keywords'),
    alternates: {
      canonical: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        'en': baseUrl,
        'ar': `${baseUrl}/ar`,
        'ur': `${baseUrl}/ur`,
        'bn': `${baseUrl}/bn`,
        'ms': `${baseUrl}/ms`,
        'id': `${baseUrl}/id`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: t('title'),
      description,
      locale: locale === 'en' ? 'en_US' : 'ar_SA',
      alternateLocale: locale === 'en' ? 'ar_SA' : 'en_US',
      type: 'website',
      url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // 等待 params
  const { locale } = await params;

  // 验证语言是否支持
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // 获取翻译消息
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <DesktopSEOTracker locale={locale} />
      {children}
    </NextIntlClientProvider>
  );
}
