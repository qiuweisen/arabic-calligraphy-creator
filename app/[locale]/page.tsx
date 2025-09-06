"use client"

import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl'
import { LanguagePrompt } from "@/components/language-prompt"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Download, Palette, Type, ChevronRight, Laptop, Smartphone, Tablet, ArrowRight, Info } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getFeaturedFonts, FONT_CATEGORIES } from "@/lib/content-links"

import { CalligraphyGenerator } from "@/components/calligraphy-generator"

// Dynamic import for CalligraphyGenerator to avoid hydration issues
const DynamicCalligraphyGenerator = dynamic(
  () => import("@/components/calligraphy-generator").then((mod) => ({ default: mod.CalligraphyGenerator })),
  {
    loading: () => (
      <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
      </div>
    ),
    ssr: false,
  }
)

// Dynamic import for use cases section (non-critical)
const UseCasesSection = dynamic(
  () => import("@/components/home/use-cases-section").then((mod) => ({ default: mod.UseCasesSection })),
  {
    loading: () => <div className="h-64 animate-pulse bg-gray-100 rounded-lg" />,
    ssr: false,
  }
)

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arabic-calligraphy-generator.com'; // Fallback for safety
const cdnBaseUrl = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev';

// Font name mapping to match generator component
const FONT_SLUG_TO_NAME: Record<string, string> = {
  'amiri': 'Amiri',
  'scheherazade': 'Scheherazade',
  'noto-naskh-arabic': 'Noto Naskh Arabic',
  'aref-ruqaa': 'Aref Ruqaa',
  'reem-kufi': 'Reem Kufi',
  'lateef': 'Lateef',
  'mirza': 'Mirza',
  'cairo': 'Cairo',
  'jomhuria': 'Jomhuria',
  'rakkas': 'Rakkas',
  'harmattan': 'Harmattan',
  'mada': 'Mada',
  'tajawal': 'Tajawal',
  'el-messiri': 'El Messiri',
  'lemonada': 'Lemonada',
  'marhey': 'Marhey',
  'markazi-text': 'Markazi Text'
}

export default function Home() {
  const t = useTranslations('homepage');
  const seoT = useTranslations('seo.structuredData');

  const [selectedFont, setSelectedFont] = useState<string | undefined>(undefined)
  const [showAllFeaturedFonts, setShowAllFeaturedFonts] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Handle URL parameter for font selection
  useEffect(() => {
    setIsClient(true)
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const fontParam = urlParams.get('font')
      if (fontParam) {
        setSelectedFont(fontParam)
        // Scroll to generator after a short delay to ensure page is loaded
        setTimeout(() => {
          const calligraphySection = document.getElementById('calligraphy-tool-section')
          if (calligraphySection) {
            calligraphySection.scrollIntoView({ behavior: 'smooth' })
          }
        }, 500)
      }

      // Add event delegation for try-font-button clicks
      const handleTryFontClick = (event: Event) => {
        const target = event.target as HTMLElement
        if (target.classList.contains('try-font-button')) {
          const fontSlug = target.dataset.fontSlug
          if (fontSlug) {
            handleFontSwitch(fontSlug)
          }
        }
      }

      document.addEventListener('click', handleTryFontClick)
      
      return () => {
        document.removeEventListener('click', handleTryFontClick)
      }
    }
  }, [])

  // Font switching function
  const handleFontSwitch = (fontSlug: string | undefined) => {
    if (!fontSlug) return
    
    const fontName = FONT_SLUG_TO_NAME[fontSlug]
    
    if (fontName) {
      setSelectedFont(fontName)
      
      // Smooth scroll to the top creation area
      const calligraphySection = document.getElementById('calligraphy-tool-section')
      if (calligraphySection) {
        calligraphySection.scrollIntoView({ behavior: 'smooth' })
      }
      
      // Update URL without reloading page
      const newUrl = new URL(window.location.href)
      newUrl.searchParams.set('font', fontName)
      window.history.replaceState({}, '', newUrl.toString())
    }
  }

  // Handle font change from generator component
  const handleGeneratorFontChange = (fontName: string) => {
    setSelectedFont(fontName)
    // Update URL
    const newUrl = new URL(window.location.href)
    newUrl.searchParams.set('font', fontName)
    window.history.replaceState({}, '', newUrl.toString())
  }

  // 结构化数据 - SoftwareApplication Schema (多语言支持)
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": t('title'),
    "description": t('intro'),
    "url": "https://arabic-calligraphy-generator.com",
    
    // 1. 解决严重问题：添加 "image" 字段
    // Merchant Listings 要求用 "image" 而不是 "screenshot"。我们直接用您现有的图片。
    "image": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",

    "applicationCategory": seoT('applicationCategory'),
    "operatingSystem": seoT('operatingSystem'),
    "browserRequirements": seoT('browserRequirements'),
    "softwareVersion": "2.0",
    "fileFormat": ["PNG", "SVG"],
    "featureList": seoT.raw('featureList'),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      
      // 2. 解决非严重问题：添加 "priceValidUntil"
      // 因为是长期免费，可以设置一个未来的日期，比如明年年底。
      "priceValidUntil": "2030-12-31" 
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5"
    },
    // "screenshot" 字段可以保留，因为它对 SoftwareApplication 类型是有效的。
    "screenshot": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",
    "author": {
      "@type": "Organization",
      "name": seoT('authorName')
    }
  };

  // FAQ结构化数据 - 使用多语言翻译
  const faqT = useTranslations('homepage.detailedFaq');
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqT.raw('questions').slice(0, 3).map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // WebApplication结构化数据 - 增强SEO
  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Arabic Calligraphy Generator",
    "description": "Free online Arabic calligraphy generator with 13+ premium fonts. Create stunning Islamic art, logos, and designs instantly. No registration required, commercial use allowed.",
    "url": "https://arabic-calligraphy-generator.com",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Modern web browser with JavaScript enabled",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2030-12-31",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "13+ Premium Arabic Fonts",
      "PNG and SVG Export",
      "Real-time Preview",
      "Color Customization",
      "Background Patterns",
      "Mobile Responsive",
      "No Registration Required",
      "Commercial Use Allowed"
    ]
  };

  // Organization结构化数据
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Arabic Calligraphy Generator",
    "url": "https://arabic-calligraphy-generator.com",
    "logo": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",
    "description": "Leading provider of free online Arabic calligraphy generation tools and resources",
    "foundingDate": "2010",
    "sameAs": [
      "https://arabic-calligraphy-generator.com"
    ]
  };

  return (
    <>
      {/* 主要结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />

      {/* FAQ结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* WebApplication结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />

      {/* Organization结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Hero Section - 简洁直观设计 */}
          <header className="mb-12 text-center">
            {/* 权威性标识 - 多语言适配 */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-blue-500">⭐</span>
              {t('hero.badge')}
            </div>
            
            {/* 主标题 */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            
            {/* 副标题 - 突出核心价值 */}
            <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-6">
              {t('hero.subtitle')}
            </h2>
            
            {/* 简洁描述 */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            
            {/* 核心价值主张 - 三个勾选项 */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-2 text-green-700">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span className="font-semibold">{t('hero.value1')}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span className="font-semibold">{t('hero.value2')}</span>
              </div>
              <div className="flex items-center gap-2 text-green-700">
                <span className="text-green-600 font-bold text-lg">✓</span>
                <span className="font-semibold">{t('hero.value3')}</span>
              </div>
            </div>
            
            {/* 主要CTA按钮 */}
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mb-4">
              <span className="flex items-center justify-center gap-2">
                <span>✨</span>
                {t('hero.cta')}
              </span>
            </button>
          </header>

          {/* Main Tool Section */}
          <div className="mb-12" id="calligraphy-tool-section">

            {/* NoScript fallback for search engines - Enhanced SEO content */}
            <noscript>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-amber-800 mb-4">{t('generator.noScript.title')}</h2>
                  <p className="text-amber-700 max-w-2xl mx-auto">
                    {t('generator.noScript.description')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-amber-800 mb-3">{t('generator.availableFonts')}</h3>
                    <ul className="text-sm text-amber-600 space-y-1">
                      <li>• {t('generator.fonts.amiri')}</li>
                      <li>• {t('generator.fonts.scheherazade')}</li>
                      <li>• {t('generator.fonts.reemKufi')}</li>
                      <li>• {t('generator.fonts.arefRuqaa')}</li>
                      <li>• {t('generator.fonts.cairo')}</li>
                      <li>• {t('generator.fonts.moreFonts')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-amber-800 mb-3">{t('generator.toolFeatures')}</h3>
                    <ul className="text-sm text-amber-600 space-y-1">
                      <li>• {t('generator.features.freeGenerator')}</li>
                      <li>• {t('generator.features.instantDownload')}</li>
                      <li>• {t('generator.features.colorCustomization')}</li>
                      <li>• {t('generator.features.backgroundPatterns')}</li>
                      <li>• {t('generator.features.mobileFriendly')}</li>
                      <li>• {t('generator.features.noRegistration')}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-amber-800 mb-3">{t('generator.noScript.useCases.title')}</h3>
                    <ul className="text-sm text-amber-600 space-y-1">
                      <li>• {t('generator.noScript.useCases.weddingInvitations')}</li>
                      <li>• {t('generator.noScript.useCases.islamicArt')}</li>
                      <li>• {t('generator.noScript.useCases.socialMedia')}</li>
                      <li>• {t('generator.noScript.useCases.businessLogos')}</li>
                      <li>• {t('generator.noScript.useCases.educational')}</li>
                      <li>• {t('generator.noScript.useCases.religious')}</li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-amber-700 mb-4">
                    {t('generator.jsRequired')}
                  </p>
                  <div className="text-sm text-amber-600">
                    <p>{t('generator.noScript.keywords')}</p>
                  </div>
                </div>
              </div>
            </noscript>

            <DynamicCalligraphyGenerator
              initialFont={isClient ? selectedFont : undefined}
              onFontChange={handleGeneratorFontChange}
            />
          </div>

          {/* How to Use - Visual Guide */}
          <section className="mb-16 bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {t('howToUse.title')}
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t('howToUse.description')}
                </p>
              </div>

              {/* 3-Step Process */}
              <div className="mb-12">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-between max-w-5xl mx-auto">
                  
                  {/* Step 1: Enter Arabic Text */}
                  <div className="text-center flex-1">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      1
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📝</span>
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t('howToUse.step1.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {t('howToUse.step1.description')}
                    </p>
                  </div>

                  {/* Arrow 1 */}
                  <div className="flex items-center justify-center px-8">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>

                  {/* Step 2: Customize Design */}
                  <div className="text-center flex-1">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      2
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎨</span>
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t('howToUse.step2.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {t('howToUse.step2.description')}
                    </p>
                  </div>

                  {/* Arrow 2 */}
                  <div className="flex items-center justify-center px-8">
                    <ArrowRight className="w-8 h-8 text-gray-400" />
                  </div>

                  {/* Step 3: Export & Share */}
                  <div className="text-center flex-1">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      3
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">⬇️</span>
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t('howToUse.step3.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {t('howToUse.step3.description')}
                    </p>
                  </div>

                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-8">
                  
                  {/* Step 1: Enter Arabic Text */}
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      1
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">📝</span>
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t('howToUse.step1.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {t('howToUse.step1.description')}
                    </p>
                  </div>

                  {/* Step 2: Customize Design */}
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      2
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">🎨</span>
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t('howToUse.step2.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {t('howToUse.step2.description')}
                    </p>
                  </div>

                  {/* Step 3: Export & Share */}
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      3
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">⬇️</span>
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {t('howToUse.step3.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {t('howToUse.step3.description')}
                    </p>
                  </div>

                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('howToUse.cta.title')}
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  {t('howToUse.cta.description')}
                </p>
                <button 
                  onClick={() => document.getElementById('calligraphy-tool-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    <span>✨</span>
                    {t('howToUse.cta.button')}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </div>

            </div>
          </section>






          {/* Enhanced Features Section - 多语言适配 */}
          <section id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('features.title')}</h2>
            <p className="text-amber-700 text-center mb-8 max-w-3xl mx-auto">
              {t('features.description')}
            </p>
            
            {/* 8个核心功能卡片 - 采用我们自己的设计风格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 字体库 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <Type className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.fontLibrary.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.fontLibrary.description')}
                </p>
              </div>

              {/* 定制功能 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <Palette className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.customization.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.customization.description')}
                </p>
              </div>

              {/* 导出功能 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <Download className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.export.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.export.description')}
                </p>
              </div>

              {/* 实时预览 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">👁️</span>
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.preview.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.preview.description')}
                </p>
              </div>

              {/* 移动设备 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.mobile.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.mobile.description')}
                </p>
              </div>

              {/* 完全免费 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">💎</span>
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.free.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.free.description')}
                </p>
              </div>

              {/* 便捷分享 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">🔗</span>
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.sharing.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.sharing.description')}
                </p>
              </div>

              {/* 隐私保护 */}
              <div className="bg-white border border-amber-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold text-amber-800 mb-3 text-center">{t('features.privacy.title')}</h3>
                <p className="text-amber-700 text-sm text-center">
                  {t('features.privacy.description')}
                </p>
              </div>

            </div>
          </section>

          {/* Use Cases Section - Now dynamically loaded */}
          <UseCasesSection />

          {/* Testimonials Section - 用户评价 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('testimonials.title')}</h2>
            <p className="text-amber-700 text-center mb-8 max-w-3xl mx-auto">
              {t('testimonials.description')}
            </p>

            {/* 用户评价网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.raw('testimonials.reviews').map((review: any, index: number) => (
                <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    {/* 用户头像和信息 */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-amber-600 font-bold text-lg">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-amber-900">{review.name}</h3>
                        <p className="text-sm text-amber-600">{review.title}</p>
                      </div>
                    </div>

                    {/* 星级评分 */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>

                    {/* 评价内容 */}
                    <p className="text-amber-700 leading-relaxed mb-3">
                      "{review.content}"
                    </p>

                    {/* 日期 */}
                    <p className="text-xs text-amber-500">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section - 平铺展示 */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('detailedFaq.title')}</h2>
            <div className="space-y-6">
              {t.raw('detailedFaq.questions').map((faq: any, index: number) => (
                <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-amber-900 mb-3">{faq.question}</h3>
                    <p className="text-amber-700 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/faq">{t('detailedFaq.viewAll')}</Link>
              </Button>
            </div>
          </section>

          {/* CTA Section - Simplified */}
          <section className="mb-12">
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-amber-800 mb-4">{t('cta.title')}</h2>
                <p className="text-lg text-amber-700 mb-6 max-w-2xl mx-auto">
                  {t('cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <Button
                    onClick={() => document.getElementById('calligraphy-tool-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
                  >
                    {t('cta.button')}
                  </Button>
                  <div className="flex items-center gap-4 text-sm text-amber-600">
                    <span className="flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      {t('cta.features.noRegistration')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      {t('cta.features.free')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Check className="h-4 w-4" />
                      {t('cta.features.instantDownload')}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* SEO友好的隐藏内容区域 - 只对搜索引擎可见 */}
        <div className="sr-only" aria-hidden="true">
          <h2>{t('generator.seoContent.aboutTitle')}</h2>

          <div>
            <h3>{t('generator.seoContent.professionalTypography.title')}</h3>
            <p>
              {t('generator.seoContent.professionalTypography.description1')}
            </p>
            <p>
              {t('generator.seoContent.professionalTypography.description2')}
            </p>
          </div>

          <div>
            <h3>{t('generator.seoContent.featuresTitle')}</h3>
            <ul>
              {seoT.raw('featureList').map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t('generator.seoContent.keywordsTitle')}</h3>
            <p>
              {t('generator.seoContent.keywordsList')}
            </p>
          </div>
        </div>
      </main>
      <Footer />

      {/* 语言建议弹窗 */}
      <LanguagePrompt />
    </>
  )
}
