"use client"

import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useEffect, useMemo } from "react"
import { useTranslations } from 'next-intl'
import { LanguagePrompt } from "@/components/language-prompt"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Download, Palette, Type, Laptop, Smartphone, Tablet, ArrowRight, Info, Edit3, Settings, Share2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getFeaturedFonts, FONT_CATEGORIES } from "@/lib/content-links"
import { CalligraphyGenerator } from "@/components/calligraphy-generator"
import { trackLandingFromURL } from "@/lib/analytics"

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
  const whatIsContent = t('whatIsSection.content')
  const whatIsParagraphs = useMemo(() => {
    const content = whatIsContent.trim()
    const match = content.match(/^(.*?[.!?。！？؟۔])\s+(.*)$/)
    if (match) {
      return [match[1], match[2]]
    }
    return [content]
  }, [whatIsContent])

  // Handle URL parameter for font selection
  useEffect(() => {
    setIsClient(true)

    // Track landing page conversion from URL parameters
    trackLandingFromURL()

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
    // Note: aggregateRating 已移除，待收集真实评分数据后再添加
    // "screenshot" 字段可以保留，因为它对 SoftwareApplication 类型是有效的。
    "screenshot": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",
    "author": {
      "@type": "Organization",
      "name": seoT('authorName')
    }
  };

  // FAQ结构化数据 - 使用多语言翻译
  const homepageFaqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'];
  const homepageFaqs = homepageFaqKeys.map((key) =>
    t.raw(`faq.${key}`) as { question: string; answer: string }
  );
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map((faq) => ({
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
    "description": "Free online Arabic calligraphy generator with 17+ premium fonts. Create stunning Islamic art, logos, and designs instantly. No registration required, commercial use allowed.",
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
      "17+ Premium Arabic Fonts",
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
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="text-amber-500">⭐</span>
              {t('hero.badge')}
            </div>

            {/* 主标题 */}
            <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4">
              {t('title')}
            </h1>

            {/* 副标题 - 突出核心价值 */}
            <h2 className="text-2xl md:text-4xl font-bold text-amber-700 mb-6">
              {t('hero.subtitle')}
            </h2>

            {/* 简洁描述 */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>

            {/* 核心价值主张 - 三个勾选项 */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
              <div className="flex items-center gap-2 text-amber-700">
                <span className="text-amber-600 font-bold text-lg">✓</span>
                <span className="font-semibold">{t('hero.value1')}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <span className="text-amber-600 font-bold text-lg">✓</span>
                <span className="font-semibold">{t('hero.value2')}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-700">
                <span className="text-amber-600 font-bold text-lg">✓</span>
                <span className="font-semibold">{t('hero.value3')}</span>
              </div>
            </div>

            {/* 主要CTA按钮 */}
            <button
              onClick={() => document.getElementById('calligraphy-tool-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 mb-4"
            >
              <span className="flex items-center justify-center gap-2">
                <span>✨</span>
                {t('hero.cta')}
              </span>
            </button>
          </header>


          {/* Trust Bar - Desktop Only */}
          <div className="hidden md:block bg-white border-y border-gray-200 py-8 mb-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    100,000+
                  </div>
                  <p className="text-gray-600 text-sm">
                    Designers Worldwide
                  </p>
                </div>

                <div className="text-center border-x border-gray-200">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <span className="text-amber-500 text-2xl">★★★★★</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    4.8/5 User Rating
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    100% Free
                  </div>
                  <p className="text-gray-600 text-sm">
                    No Hidden Costs
                  </p>
                </div>
              </div>
            </div>
          </div>

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

          {/* Intent Sections */}
          <section className="mb-16" id="intent-section">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-3">
                {t('intentSection.title')}
              </h2>
              <p className="text-amber-700 max-w-3xl mx-auto">
                {t('intentSection.subtitle')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { key: 'copyText', icon: '✍️' },
                { key: 'khatStyles', icon: '✒️' },
                { key: 'arabicName', icon: '🪶' },
              ].map((item) => (
                <div
                  key={item.key}
                  id={`intent-${item.key}`}
                  className="bg-white border border-amber-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-xl mb-4">
                    <span aria-hidden="true">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">
                    {t(`intentSection.items.${item.key}.title`)}
                  </h3>
                  <p className="text-amber-700 text-sm mb-4">
                    {t(`intentSection.items.${item.key}.description`)}
                  </p>
                  <button
                    type="button"
                    onClick={() => document.getElementById('calligraphy-tool-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-amber-700 font-semibold inline-flex items-center gap-2 hover:text-amber-900"
                  >
                    {t(`intentSection.items.${item.key}.cta`)}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* What is Arabic Calligraphy Generator - Phase 1 */}
          <section className="mb-16">
            <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 md:p-10 shadow-sm">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">
                  {t('whatIsSection.title')}
                </h2>
                <div className="space-y-4">
                  {whatIsParagraphs.map((paragraph, index) => (
                    <p key={index} className="text-amber-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How to Use - Visual Guide */}
          <section className="mb-16 bg-gradient-to-b from-amber-50 to-white py-16">
            <div className="max-w-6xl mx-auto px-4">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">
                  {t('howToUse.title')}
                </h2>
                <p className="text-lg text-amber-700 max-w-3xl mx-auto">
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
                    <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      1
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Edit3 className="h-8 w-8 text-amber-600" />
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-amber-800 mb-3">
                      {t('howToUse.step1.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-amber-700 leading-relaxed">
                      {t('howToUse.step1.description')}
                    </p>
                  </div>

                  {/* Arrow 1 */}
                  <div className="flex items-center justify-center px-8">
                    <ArrowRight className="w-8 h-8 text-amber-400" />
                  </div>

                  {/* Step 2: Customize Design */}
                  <div className="text-center flex-1">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      2
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8 text-amber-600" />
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-amber-800 mb-3">
                      {t('howToUse.step2.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-amber-700 leading-relaxed">
                      {t('howToUse.step2.description')}
                    </p>
                  </div>

                  {/* Arrow 2 */}
                  <div className="flex items-center justify-center px-8">
                    <ArrowRight className="w-8 h-8 text-amber-400" />
                  </div>

                  {/* Step 3: Export & Share */}
                  <div className="text-center flex-1">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      3
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Share2 className="h-8 w-8 text-amber-600" />
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-amber-800 mb-3">
                      {t('howToUse.step3.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-amber-700 leading-relaxed">
                      {t('howToUse.step3.description')}
                    </p>
                  </div>

                </div>

                {/* Mobile Layout */}
                <div className="md:hidden space-y-8">

                  {/* Step 1: Enter Arabic Text */}
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      1
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Edit3 className="h-8 w-8 text-amber-600" />
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-amber-800 mb-3">
                      {t('howToUse.step1.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-amber-700 leading-relaxed">
                      {t('howToUse.step1.description')}
                    </p>
                  </div>

                  {/* Step 2: Customize Design */}
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      2
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Settings className="h-8 w-8 text-amber-600" />
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-amber-800 mb-3">
                      {t('howToUse.step2.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-amber-700 leading-relaxed">
                      {t('howToUse.step2.description')}
                    </p>
                  </div>

                  {/* Step 3: Export & Share */}
                  <div className="text-center">
                    {/* Step Number Circle */}
                    <div className="w-20 h-20 bg-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                      3
                    </div>
                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Share2 className="h-8 w-8 text-amber-600" />
                    </div>
                    {/* Step Title */}
                    <h3 className="text-xl font-bold text-amber-800 mb-3">
                      {t('howToUse.step3.title')}
                    </h3>
                    {/* Step Description */}
                    <p className="text-amber-700 leading-relaxed">
                      {t('howToUse.step3.description')}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Ready to Create CTA Section - 独立分离 */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                {t('howToUse.cta.title')}
              </h3>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                {t('howToUse.cta.description')}
              </p>
              <button
                onClick={() => document.getElementById('calligraphy-tool-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>✨</span>
                  {t('howToUse.cta.button')}
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
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
              {t.raw('testimonials.reviews').map((review: any, index: number) => {
                // 使用客户端组件来处理头像加载
                const AvatarComponent = () => {
                  const [imageError, setImageError] = useState(false);
                  const [imageLoaded, setImageLoaded] = useState(false);
                  const [clientReady, setClientReady] = useState(false);

                  useEffect(() => {
                    // 延迟一点时间再切换到真实头像，避免闪烁
                    const timer = setTimeout(() => setClientReady(true), 100);
                    return () => clearTimeout(timer);
                  }, []);

                  // 使用可靠的真人头像源
                  const avatars = [
                    'https://randomuser.me/api/portraits/women/44.jpg',
                    'https://randomuser.me/api/portraits/men/32.jpg',
                    'https://randomuser.me/api/portraits/women/68.jpg',
                    'https://randomuser.me/api/portraits/men/46.jpg',
                    'https://randomuser.me/api/portraits/women/55.jpg',
                    'https://randomuser.me/api/portraits/men/73.jpg'
                  ];
                  const avatarUrl = avatars[index % avatars.length];

                  // 显示首字母头像的情况：未就绪、加载错误、或图片未加载完成
                  if (!clientReady || imageError || !imageLoaded) {
                    return (
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center border-2 border-amber-200">
                        <span className="text-amber-600 font-bold text-lg">{review.name.charAt(0)}</span>
                        {/* 隐藏预加载图片 */}
                        {clientReady && !imageError && (
                          <img
                            src={avatarUrl}
                            alt=""
                            className="hidden"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                          />
                        )}
                      </div>
                    );
                  }

                  return (
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-200 bg-gray-100">
                      <img
                        src={avatarUrl}
                        alt={`${review.name} avatar`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={() => setImageError(true)}
                      />
                    </div>
                  );
                };

                return (
                  <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      {/* 用户头像和信息 */}
                      <div className="flex items-center gap-3 mb-4">
                        <AvatarComponent />
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
                );
              })}
            </div>
          </section>

          {/* FAQ Section - 平铺展示 */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('faq.title')}</h2>
            <div className="space-y-6">
              {homepageFaqs.map((faq, index) => (
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
