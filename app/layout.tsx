import type React from "react"
import "@/app/globals.css"
import { Inter, Amiri } from "next/font/google"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CssLoader } from "@/components/css-loader"
import type { Metadata } from 'next'
import { Toaster as SonnerToaster } from 'sonner'

// 只预加载必要的字体以提升首次加载性能
const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-inter", preload: true })
const amiri = Amiri({ subsets: ["latin"], display: 'swap', weight: ["400", "700"], variable: "--font-amiri", preload: true })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arabic-calligraphy-generator.com'
const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arabic Calligraphy Generator - Free Tool | الخط العربي",
    template: "%s | Arabic Calligraphy Generator"
  },
  description: "🎨 FREE Arabic Calligraphy Generator | Create stunning Islamic art online instantly! 13+ fonts, instant download PNG/SVG. No signup required ✨",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Free Arabic Calligraphy Generator - Online Islamic Art Tool | الخط العربي",
    description: "🎨 Create stunning Arabic calligraphy instantly! FREE online generator with 13+ fonts. Download PNG/SVG in seconds. No signup needed ✨",
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
    title: "Free Arabic Calligraphy Generator - Create Islamic Script Online | الخط العربي",
    description: "🎨 FREE Arabic Calligraphy Generator! Create beautiful Islamic art online instantly. 13+ fonts, instant PNG/SVG download. Try now! ✨",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <link rel="icon" href="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/favicon.ico" sizes="any" />

        {/* 预加载关键资源 */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap" as="style" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;700&display=swap" as="style" />

        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev" />

        {/* Google Fonts <link> tags removed as next/font handles this */}
      </head>
      <ThemeProvider attribute="class" defaultTheme="system">
        {children}
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
      </>
    )
}
