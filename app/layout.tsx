import type React from "react"
import "@/app/globals.css"
import { Inter, Amiri } from "next/font/google"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CssLoader } from "@/components/css-loader"
import { localeConfig } from "@/i18n"
import { headers } from "next/headers"
import type { Metadata } from 'next'

// 字体配置
const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-inter", preload: true })
const amiri = Amiri({ subsets: ["latin"], display: 'swap', weight: ["400", "700"], variable: "--font-amiri", preload: true })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arabic-calligraphy-generator.com'
const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Arabic Calligraphy Generator - Free Online Tool",
  description: "Create stunning Arabic calligraphy instantly with our free online generator. Choose from 13+ beautiful fonts, download PNG/SVG formats. No signup required - start creating now!",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Arabic Calligraphy Generator - Free Online Tool",
    description: "Create stunning Arabic calligraphy instantly with our free online generator. Choose from 13+ beautiful fonts, download PNG/SVG formats. No signup required - start creating now!",
    url: siteUrl,
    siteName: 'Arabic Calligraphy Generator',
    images: [
      {
        url: `${cdnBaseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Arabic Calligraphy Generator - Online Tool for Arabic Script Art',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arabic Calligraphy Generator - Free Online Tool",
    description: "Create stunning Arabic calligraphy instantly with our free online generator. Choose from 13+ beautiful fonts, download PNG/SVG formats. No signup required!",
    images: [`${cdnBaseUrl}/twitter-image.png`],
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
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = process.env.NODE_ENV === 'production'

  // 从headers中获取当前路径
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';

  // 从URL路径中提取语言代码
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // 检查第一个段是否是支持的语言代码
  let locale: keyof typeof localeConfig = 'en';
  if (firstSegment && Object.keys(localeConfig).includes(firstSegment)) {
    locale = firstSegment as keyof typeof localeConfig;
  }

  // 获取当前语言的文本方向
  const dir = localeConfig[locale]?.dir || 'ltr';

  return (
    <html className={`${inter.variable} ${amiri.variable}`} dir={dir} suppressHydrationWarning>
      <body className={`${inter.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
          <ScrollToTop />
          <CssLoader />
        </ThemeProvider>

        {isProduction && (
          <>
            {/* Google AdSense */}
            <Script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4575951448621910"
              crossOrigin="anonymous"
              strategy="afterInteractive"
            />

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
  )
}
