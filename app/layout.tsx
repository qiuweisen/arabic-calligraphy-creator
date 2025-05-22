import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Arabic Calligraphy Generator | Create Beautiful Arabic Art",
  description:
    "Create stunning Arabic calligraphy with our elegant generator. Customize fonts, styles, colors and download your designs. Perfect for social media, print, and web projects.",
  keywords:
    "Arabic calligraphy, Arabic font generator, Islamic art, Arabic typography, الخط العربي, Arabic design tool, Arabic text generator",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Cairo:wght@400;700&family=Harmattan:wght@400;700&family=Jomhuria&family=Lateef&family=Mada:wght@400;700&family=Mirza:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&family=Rakkas&family=Reem+Kufi:wght@400;700&family=Scheherazade+New:wght@400;700&family=Tajawal:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
