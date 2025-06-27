import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
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

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
      languages: {
        'en': baseUrl,
        'ar': `${baseUrl}/ar`,
        'ur': `${baseUrl}/ur`,
        'bn': `${baseUrl}/bn`,
        'x-default': baseUrl,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      locale: locale === 'en' ? 'en_US' : 'ar_SA',
      alternateLocale: locale === 'en' ? 'ar_SA' : 'en_US',
      type: 'website',
      url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
      siteName: 'Arabic Calligraphy Generator',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
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
      {children}
    </NextIntlClientProvider>
  );
}
