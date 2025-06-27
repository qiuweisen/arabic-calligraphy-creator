import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Inter, Amiri } from "next/font/google"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CssLoader } from "@/components/css-loader"
import type { Metadata } from 'next'

// 字体配置
const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-inter", preload: true })
const amiri = Amiri({ subsets: ["latin"], display: 'swap', weight: ["400", "700"], variable: "--font-amiri", preload: true })

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
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning className={`${inter.variable} ${amiri.variable}`}>
      <body className={`${inter.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
          <Toaster />
          <ScrollToTop />
          <CssLoader />
        </ThemeProvider>

        {isProduction && (
          <>
            {/* Google Analytics 4 */}
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-8M8QKWNMRY"
            />
            <Script
              id="google-analytics-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-8M8QKWNMRY', {
                    debug_mode: false,
                    send_page_view: true
                  });
                `,
              }}
            />

            {/* Plausible Analytics */}
            <Script
              defer
              data-domain="arabic-calligraphy-generator.com"
              src="https://plausible.myklink.xyz:8443/js/script.file-downloads.hash.outbound-links.pageview-props.revenue.tagged-events.js"
              strategy="afterInteractive"
            />
          </>
        )}

        {/* Common Analytics Event Tracking Function and Plausible Dev Init */}
        <Script
          id="analytics-functions"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              // 初始化 Plausible 函数（确保总是可用）
              window.plausible = window.plausible || function() {
                (window.plausible.q = window.plausible.q || []).push(arguments)
              }

              // 开发模式日志
              if (${process.env.NODE_ENV === 'development'}) {
                console.log('Analytics scripts (GA, Plausible) are in DEVELOPMENT mode or NOT loaded.')
                console.log('Plausible Analytics would be initialized for domain: arabic-calligraphy-generator.com if in production.')
                console.log('Plausible server: https://plausible.myklink.xyz:8443')
              }

              // 统一事件追踪函数
              window.trackCalligraphyEvent = function(eventName, props) {
                const isProd = ${isProduction}

                if (isProd) {
                  // 发送到 Plausible
                  try {
                    if (typeof window.plausible === 'function') {
                      window.plausible(eventName, { props: props })
                      console.log('Event sent to Plausible:', eventName, props)
                    } else {
                      console.warn('Plausible function not available')
                    }
                  } catch (error) {
                    console.error('Error sending event to Plausible:', error)
                  }

                  // 发送到 Google Analytics
                  try {
                    if (typeof gtag === 'function') {
                      gtag('event', eventName, {
                        event_category: 'Calligraphy_Generator',
                        ...props
                      })
                      console.log('Event sent to GA:', eventName, props)
                    } else {
                      console.warn('Google Analytics gtag function not available')
                    }
                  } catch (error) {
                    console.error('Error sending event to GA:', error)
                  }
                } else {
                  console.log('[DEV MODE] Event: ' + eventName + ', Props:', props)
                }
              }

              // Plausible 连接测试
              if (${isProduction}) {
                setTimeout(() => {
                  fetch('https://plausible.myklink.xyz:8443/api/health', {
                    mode: 'no-cors',
                    method: 'GET'
                  })
                  .then(() => {
                    console.log('Plausible server is reachable')
                  })
                  .catch((error) => {
                    console.error('Cannot reach Plausible server:', error)
                  })
                }, 2000)
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
