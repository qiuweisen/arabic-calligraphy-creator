import type React from "react"
import "@/app/globals.css"
import { Inter, Noto_Naskh_Arabic, Amiri, Aref_Ruqaa, Cairo, Harmattan, Jomhuria, Lateef, Mada, Mirza, Rakkas, Reem_Kufi, Scheherazade_New, Tajawal } from "next/font/google"
import Script from "next/script"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: "--font-inter" })
const notoNaskhArabic = Noto_Naskh_Arabic({ display: 'swap', weight: ["400", "700"], variable: "--font-noto-naskh-arabic", preload: false })
const amiri = Amiri({ display: 'swap', weight: ["400", "700"], variable: "--font-amiri", preload: false })
const arefRuqaa = Aref_Ruqaa({ display: 'swap', weight: ["400", "700"], variable: "--font-aref-ruqaa", preload: false })
const cairo = Cairo({ display: 'swap', weight: ["400", "700"], variable: "--font-cairo", preload: false })
const harmattan = Harmattan({ display: 'swap', weight: ["400", "700"], variable: "--font-harmattan", preload: false })
const jomhuria = Jomhuria({ display: 'swap', weight: ["400"], variable: "--font-jomhuria", preload: false })
const lateef = Lateef({ display: 'swap', weight: ["200", "300", "400", "500", "600", "700", "800"], variable: "--font-lateef", preload: false })
const mada = Mada({ display: 'swap', weight: ["400", "700"], variable: "--font-mada", preload: false })
const mirza = Mirza({ display: 'swap', weight: ["400", "700"], variable: "--font-mirza", preload: false })
const rakkas = Rakkas({ display: 'swap', weight: ["400"], variable: "--font-rakkas", preload: false })
const reemKufi = Reem_Kufi({ display: 'swap', weight: ["400", "700"], variable: "--font-reem-kufi", preload: false })
const scheherazadeNew = Scheherazade_New({ display: 'swap', weight: ["400", "700"], variable: "--font-scheherazade-new", preload: false })
const tajawal = Tajawal({ display: 'swap', weight: ["400", "700"], variable: "--font-tajawal", preload: false })


export const metadata = {
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
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${notoNaskhArabic.variable} ${amiri.variable} ${arefRuqaa.variable} ${cairo.variable} ${harmattan.variable} ${jomhuria.variable} ${lateef.variable} ${mada.variable} ${mirza.variable} ${rakkas.variable} ${reemKufi.variable} ${scheherazadeNew.variable} ${tajawal.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        {/* Google Fonts <link> tags removed */}
      </head>
      <body className={`${inter.className} ${notoNaskhArabic.className} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-33BV8X0BYE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-33BV8X0BYE');
            `,
          }}
        />
      </body>
    </html>
  )
}
