import type React from "react"
import "@/app/globals.css"
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arabic-calligraphy-generator.com'
const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arabic Calligraphy Generator - Free Online Tool",
    template: "%s | Arabic Calligraphy Generator"
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
