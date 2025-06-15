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


export const metadata: Metadata = {
  title: "Arabic Calligraphy Generator | Online Arabic Art Creator",
  description:
    "Create beautiful Arabic calligraphy online. Customize fonts, styles, and colors. Download designs for social media, print, or web. Free and easy to use!",
  keywords:
    "Arabic calligraphy, calligraphy generator, Arabic fonts, Islamic art, online design tool",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isProduction = process.env.NODE_ENV === 'production'

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${amiri.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes" />
        <link rel="icon" href="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/favicon.ico" sizes="any" />
        {/* Google Fonts <link> tags removed as next/font handles this */}
      </head>
      <body className={`${inter.className} font-sans`}>
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
              window.plausible = window.plausible || function() { 
                (window.plausible.q = window.plausible.q || []).push(arguments) 
              }
              
              if (${process.env.NODE_ENV === 'development'}) {
                console.log('Analytics scripts (GA, Plausible) are in DEVELOPMENT mode or NOT loaded.')
                console.log('Plausible Analytics would be initialized for domain: arabic-calligraphy-generator.com if in production.')
              }
              
              window.trackCalligraphyEvent = function(eventName, props) {
                const isProd = ${isProduction}
                if (isProd) {
                  // Send to Plausible if in production
                  if (typeof window.plausible === 'function') {
                    window.plausible(eventName, { props: props })
                  }
                  
                  // Send to Google Analytics if in production
                  if (typeof gtag === 'function') {
                    gtag('event', eventName, {
                      event_category: 'Calligraphy_Generator',
                      ...props
                    })
                  }
                } else {
                  console.log('[DEV MODE] Event: ' + eventName + ', Props:', props)
                }
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
