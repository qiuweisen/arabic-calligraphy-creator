"use client"

import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { useTranslations } from 'next-intl'
import { LanguagePrompt } from "@/components/language-prompt"
import { CalligraphyGenerator } from "@/components/calligraphy-generator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Download, Palette, Type, ChevronRight, Laptop, Smartphone, Tablet, ArrowRight, Info } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getFeaturedFonts, FONT_CATEGORIES } from "@/lib/content-links"
import { getFontDetails } from "@/lib/font-details-data"

const UseCasesSection = dynamic(() => 
  import("@/components/home/use-cases-section").then((mod) => mod.UseCasesSection)
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

// Font details loading function (used by both featured and browse sections)
function loadFontDetails(fontSlug: string, panelElement: Element) {
  const fontDetails = getFontDetails(fontSlug);
  
  if (!fontDetails) {
    panelElement.innerHTML = `
      <div class="text-sm text-amber-700">
        <p class="text-amber-600">Font details not available for this font yet.</p>
      </div>
    `;
    return;
  }

  // Create detailed font information panel
  panelElement.innerHTML = `
    <div class="space-y-6">
      <!-- Font Overview -->
      <div>
        <h5 class="font-semibold text-amber-900 mb-2">${fontDetails.name} Font</h5>
        <p class="text-sm text-amber-700 mb-2">${fontDetails.fullDescription}</p>
        <div class="flex gap-4 text-xs text-amber-600">
          <span><strong>Category:</strong> ${fontDetails.category}</span>
          <span><strong>Designer:</strong> ${fontDetails.designer}</span>
        </div>
      </div>

      <!-- Key Features -->
      <div>
        <h6 class="font-medium text-amber-900 mb-2">Key Features</h6>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${fontDetails.features.slice(0, 4).map(feature => `
            <div class="flex items-start gap-2 text-xs">
              <div class="w-1 h-1 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span class="font-medium text-amber-800">${feature.title}:</span>
                <span class="text-amber-700">${feature.description}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Ideal Use Cases -->
      <div>
        <h6 class="font-medium text-amber-900 mb-2">Best Used For</h6>
        <div class="space-y-1">
          ${fontDetails.useCases.slice(0, 3).map(useCase => `
            <div class="text-xs">
              <span class="font-medium text-amber-800">${useCase.title}:</span>
              <span class="text-amber-700">${useCase.description}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Text Examples -->
      ${fontDetails.textExamples.length > 0 ? `
        <div>
          <h6 class="font-medium text-amber-900 mb-2">Text Examples</h6>
          <div class="space-y-2">
            ${fontDetails.textExamples.slice(0, 2).map(example => `
              <div class="bg-amber-50 p-2 rounded text-xs">
                <div class="text-lg text-amber-900 font-arabic mb-1" dir="rtl">${example.text}</div>
                <div class="text-amber-600 text-xs">${example.translation}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Try Font Button -->
      <div class="pt-2 border-t border-amber-200">
        <button 
          data-font-slug="${fontSlug}" 
          class="try-font-button w-full px-3 py-2 bg-amber-600 text-white rounded text-xs hover:bg-amber-700 transition-colors"
        >
          Try ${fontDetails.name} in Generator
        </button>
      </div>
    </div>
  `;
}

export default function Home() {
  const t = useTranslations('homepage');
  const seoT = useTranslations('seo.structuredData');

  const [selectedFont, setSelectedFont] = useState<string | undefined>(undefined)
  
  // 分离左右两边的状态管理
  const [featuredIsAllExpanded, setFeaturedIsAllExpanded] = useState(false)
  const [featuredExpandedIds, setFeaturedExpandedIds] = useState<Set<string>>(new Set())
  
  const [browseExpandedCategories, setBrowseExpandedCategories] = useState<Set<string>>(new Set())
  const [browseExpandedFonts, setBrowseExpandedFonts] = useState<Set<string>>(new Set())
  const [showAllFeaturedFonts, setShowAllFeaturedFonts] = useState(false)

  // Handle URL parameter for font selection
  useEffect(() => {
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

  // Featured字体详情切换 - 只控制Featured部分
  const toggleFeaturedFontDetails = (fontSlug: string | undefined) => {
    if (!fontSlug) return
    
    const isCurrentlyExpanded = featuredExpandedIds.has(fontSlug)
    
    if (isCurrentlyExpanded) {
      // 收缩这个字体
      setFeaturedExpandedIds(prev => {
        const newSet = new Set(prev)
        newSet.delete(fontSlug)
        return newSet
      })
      
      const panelElement = document.getElementById(`featured-${fontSlug}-details`)
      if (panelElement) {
        panelElement.classList.add('hidden')
      }
      
      // 如果是最后一个展开的字体，退出"全部展开"模式
      if (featuredIsAllExpanded && featuredExpandedIds.size === 1) {
        setFeaturedIsAllExpanded(false)
      }
    } else {
      // 展开这个字体
      setFeaturedExpandedIds(prev => {
        const newSet = new Set(prev)
        newSet.add(fontSlug)
        return newSet
      })
      
      const panelElement = document.getElementById(`featured-${fontSlug}-details`)
      if (panelElement) {
        panelElement.classList.remove('hidden')
        loadFontDetails(fontSlug, panelElement)
      }
    }
  }

  // Browse字体详情切换 - 只控制Browse部分
  const toggleBrowseFontDetails = (fontSlug: string | undefined) => {
    if (!fontSlug) return
    
    const isCurrentlyExpanded = browseExpandedFonts.has(fontSlug)
    
    if (isCurrentlyExpanded) {
      // 收缩这个字体
      setBrowseExpandedFonts(prev => {
        const newSet = new Set(prev)
        newSet.delete(fontSlug)
        return newSet
      })
      
      const panelElement = document.getElementById(`browse-${fontSlug}-details`)
      if (panelElement) {
        panelElement.classList.add('hidden')
      }
    } else {
      // 展开这个字体
      setBrowseExpandedFonts(prev => {
        const newSet = new Set(prev)
        newSet.add(fontSlug)
        return newSet
      })
      
      const panelElement = document.getElementById(`browse-${fontSlug}-details`)
      if (panelElement) {
        panelElement.classList.remove('hidden')
        loadFontDetails(fontSlug, panelElement)
      }
    }
  }



  // 结构化数据 - SoftwareApplication Schema (多语言支持)
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": t('title'),
    "description": t('intro'),
    "url": "https://arabic-calligraphy-generator.com",
    "applicationCategory": seoT('applicationCategory'),
    "operatingSystem": seoT('operatingSystem'),
    "browserRequirements": seoT('browserRequirements'),
    "softwareVersion": "2.0",
    "fileFormat": ["PNG", "SVG"],
    "featureList": seoT.raw('featureList'),
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250",
      "bestRating": "5"
    },
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

      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl text-amber-800 font-semibold mt-2" lang="ar">{t('subtitle')}</p>
            <p className="text-xl md:text-2xl text-amber-900 font-medium mt-1">{t('description')}</p>
            <p className="mt-4 text-amber-700 max-w-2xl mx-auto">
              {t('intro')}
            </p>

            {/* Social Proof */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-amber-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{t('socialProof.designsCreated')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t('socialProof.premiumFonts')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{t('socialProof.freeForever')}</span>
              </div>
            </div>
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

            <CalligraphyGenerator
              initialFont={selectedFont}
              onFontChange={handleGeneratorFontChange}
            />
          </div>

          {/* Quick Start Guide - Simplified */}
          <section className="mb-8">
            <div className="text-center">
              <p className="text-amber-700 mb-4">
                <span className="font-semibold">{t('quickStart.title')}</span> {t('quickStart.steps')}
              </p>
            </div>
          </section>

          {/* Key Features Section - Enhanced */}
          <section id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('features.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                    <Type className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">{t('features.fontLibrary.title')}</h3>
                  <p className="text-amber-700 mb-3">
                    {t('features.fontLibrary.description')}
                  </p>
                  <ul className="text-xs text-amber-600 text-left space-y-1">
                    <li>• {t('features.fontLibrary.items.0')}</li>
                    <li>• {t('features.fontLibrary.items.1')}</li>
                    <li>• {t('features.fontLibrary.items.2')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                    <Palette className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">{t('features.customization.title')}</h3>
                  <p className="text-amber-700 mb-3">
                    {t('features.customization.description')}
                  </p>
                  <ul className="text-xs text-amber-600 text-left space-y-1">
                    <li>• {t('features.customization.items.0')}</li>
                    <li>• {t('features.customization.items.1')}</li>
                    <li>• {t('features.customization.items.2')}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                    <Download className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-800 mb-2">{t('features.export.title')}</h3>
                  <p className="text-amber-700 mb-3">
                    {t('features.export.description')}
                  </p>
                  <ul className="text-xs text-amber-600 text-left space-y-1">
                    <li>• {t('features.export.items.0')}</li>
                    <li>• {t('features.export.items.1')}</li>
                    <li>• {t('features.export.items.2')}</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>





          {/* Technical Capabilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('technicalFeatures.title')}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-4">{t('technicalFeatures.fontCollection.title')}</h3>
                  <div className="space-y-3 text-sm text-amber-700">
                    <div><strong>{t('technicalFeatures.fontCollection.traditional')}</strong></div>
                    <div><strong>{t('technicalFeatures.fontCollection.decorative')}</strong></div>
                    <div><strong>{t('technicalFeatures.fontCollection.modern')}</strong></div>
                    <div><strong>{t('technicalFeatures.fontCollection.specialized')}</strong></div>
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                      <p className="text-xs text-amber-600">{t('technicalFeatures.fontCollection.note')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-4">{t('technicalFeatures.export.title')}</h3>
                  <div className="space-y-3 text-sm text-amber-700">
                    <div><strong>{t('technicalFeatures.export.formats')}</strong></div>
                    <div><strong>{t('technicalFeatures.export.quality')}</strong></div>
                    <div><strong>{t('technicalFeatures.export.browsers')}</strong></div>
                    <div><strong>{t('technicalFeatures.export.devices')}</strong></div>
                    <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                      <p className="text-xs text-amber-600">{t('technicalFeatures.export.note')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Use Cases Section - Now dynamically loaded */}
          <UseCasesSection />

          {/* Professional Use Cases */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('professionalUse.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-4">{t('professionalUse.business.title')}</h3>
                  <div className="space-y-3 text-amber-700">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">{t('professionalUse.business.logo.title')}</p>
                        <p className="text-sm text-amber-600">{t('professionalUse.business.logo.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">{t('professionalUse.business.restaurant.title')}</p>
                        <p className="text-sm text-amber-600">{t('professionalUse.business.restaurant.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">{t('professionalUse.business.marketing.title')}</p>
                        <p className="text-sm text-amber-600">{t('professionalUse.business.marketing.description')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-amber-800 mb-4">{t('professionalUse.personal.title')}</h3>
                  <div className="space-y-3 text-amber-700">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">{t('professionalUse.personal.wedding.title')}</p>
                        <p className="text-sm text-amber-600">{t('professionalUse.personal.wedding.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">{t('professionalUse.personal.islamic.title')}</p>
                        <p className="text-sm text-amber-600">{t('professionalUse.personal.islamic.description')}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium">{t('professionalUse.personal.social.title')}</p>
                        <p className="text-sm text-amber-600">{t('professionalUse.personal.social.description')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section - Comprehensive but User-Friendly */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">{t('detailedFaq.title')}</h2>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {t.raw('detailedFaq.questions').map((faq: any, index: number) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-amber-700">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-4 text-center">
                  <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Link href="/faq">{t('detailedFaq.viewAll')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section - Simplified */}
          <section className="mb-12">
            <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold text-amber-800 mb-4">{t('cta.title')}</h2>
                <p className="text-lg text-amber-700 mb-6 max-w-2xl mx-auto">
                  {t('cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
