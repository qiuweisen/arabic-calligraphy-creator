"use client"

import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
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



  // 结构化数据 - SoftwareApplication Schema
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Arabic Calligraphy Generator",
    "description": "Free online Arabic calligraphy generator tool to create stunning Arabic script art. Features 13+ authentic fonts, customization options, and high-quality downloads.",
    "url": "https://arabic-calligraphy-generator.com",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "13+ Arabic fonts including Naskh, Kufi, Diwani styles",
      "Real-time text preview",
      "Color and gradient customization",
      "PNG and SVG export formats",
      "Arabic virtual keyboard support",
      "Social media sharing",
      "Free unlimited usage"
    ],
    "screenshot": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Generator"
    }
  };

  return (
    <>
      {/* 结构化数据 */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              Arabic Calligraphy Generator
            </h1>
            <p className="text-2xl md:text-3xl text-amber-800 font-semibold mt-2" lang="ar">الخط العربي</p>
            <p className="text-xl md:text-2xl text-amber-900 font-medium mt-1">Create Stunning Arabic Script Art Online with Our Free Tool</p>
            <p className="mt-4 text-amber-700 max-w-2xl mx-auto">
              Transform ordinary text into extraordinary art with our elegant free online Arabic calligraphy generator. Explore the beauty of Arabic script, discover a wide array of fonts, and create truly custom designs with this powerful tool.
            </p>
          </header>

          {/* Main Tool Section */}
          <div className="mb-12" id="calligraphy-tool-section">
            <CalligraphyGenerator 
              initialFont={selectedFont} 
              onFontChange={handleGeneratorFontChange}
            />
          </div>

          {/* Key Features Section */}
          <section id="features" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Features of Our Arabic Calligraphy Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Type className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Extensive Arabic Font Library</h3>
                    <p className="text-amber-700">
                      Our platform provides an extensive font library for your designs, featuring various fonts including traditional Kufic and Naskh, modern, and decorative styles, allowing for diverse creative expression.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>13 high-quality Arabic fonts</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Font categorization by style (Kufic, Naskh, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Visual font preview</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Palette className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">Advanced Customization Options</h3>
                    <p className="text-amber-700">
                      This tool for custom Arabic calligraphy generation allows deep personalization. Adjust colors, sizes, and alignments to craft the perfect Arabic script art.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Gradient text effects</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Custom backgrounds & patterns</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Advanced typography controls</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Download className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800 mb-2">High-Quality Export Formats</h3>
                    <p className="text-amber-700">
                      Download your creations in high-quality PNG and SVG. Our easy Arabic calligraphy generator ensures your designs are ready for any application, digital or print.
                    </p>
                    <ul className="mt-4 text-sm text-amber-700 text-left space-y-1">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>PNG with transparency</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>SVG for vector graphics</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-amber-600 mr-2 mt-0.5" />
                        <span>Direct social media sharing</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How to Use Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">How to Use This Arabic Calligraphy Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Type className="h-6 w-6 text-amber-600" />,
                  title: "1. Enter Your Arabic Text",
                  description:
                    "Begin by typing or pasting your Arabic text into our online Arabic calligraphy generator. Utilize the virtual keyboard or copy-paste for convenience.",
                },
                {
                  icon: <Palette className="h-6 w-6 text-amber-600" />,
                  title: "2. Customize Your Design",
                  description:
                    "Choose from 13+ premium fonts and adjust styles. This versatile Arabic calligraphy art generator offers many options to perfect your script.",
                },
                {
                  icon: <Download className="h-6 w-6 text-amber-600" />,
                  title: "3. Download and Share",
                  description:
                    "Export your final design as a PNG or SVG. Our Arabic calligraphy generator makes it simple to save or share your unique artwork.",
                },
              ].map((step, index) => (
                <Card key={index} className="border-amber-200 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-800 font-bold text-xl">
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-amber-800 mb-2">{step.title}</h3>
                      <p className="text-amber-700">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Use Cases Section - Now dynamically loaded */}
          <UseCasesSection />

          {/* Featured Fonts Section - Moved to better position after use cases */}
          <section className="mb-12" id="font-collection">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Explore Our Arabic Font Collection</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Fonts */}
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">Featured Arabic Fonts</h3>
                  <div className="space-y-3">
                    {(showAllFeaturedFonts ? getFeaturedFonts() : getFeaturedFonts().slice(0, 5)).map((font) => (
                      <div 
                        key={font.href} 
                        id={font.href.split('/').pop()}
                        className="rounded-lg border border-amber-100 hover:border-amber-300 transition-colors"
                      >
                        {/* Main clickable area */}
                        <div 
                          onClick={() => handleFontSwitch(font.href.split('/').pop())}
                          className="flex items-center justify-between p-3 hover:bg-amber-50 transition-colors group cursor-pointer"
                        >
                          <div>
                            <h4 className="font-semibold text-amber-800 group-hover:text-amber-900">{font.title}</h4>
                            <p className="text-sm text-amber-600">{font.description}</p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFeaturedFontDetails(font.href.split('/').pop());
                            }}
                            className="flex items-center gap-1 px-2 py-1 text-xs text-amber-600 hover:text-amber-800 border border-amber-200 rounded hover:bg-amber-100 transition-colors"
                          >
                            <Info className="h-3 w-3" />
                            Details
                          </button>
                        </div>
                        
                        {/* Collapsible details panel */}
                        <div 
                          id={`featured-${font.href.split('/').pop()}-details`}
                          className="hidden font-details-panel border-t border-amber-100 p-4 bg-amber-25"
                        >
                          <div className="text-sm text-amber-700">
                            <p className="mb-2">Click to view comprehensive information about this typeface...</p>
                            {/* Font details will be populated here */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button 
                      variant="outline" 
                      className="border-amber-600 text-amber-600 hover:bg-amber-50"
                      onClick={() => {
                        const newShowAll = !showAllFeaturedFonts
                        setShowAllFeaturedFonts(newShowAll)
                        
                        // 如果要收缩到5个字体，需要隐藏超出范围的字体详情面板
                        if (!newShowAll) {
                          const fontsToHide = getFeaturedFonts().slice(5)
                          fontsToHide.forEach(font => {
                            const fontSlug = font.href.split('/').pop()
                            if (fontSlug) {
                              const panelElement = document.getElementById(`featured-${fontSlug}-details`)
                              if (panelElement) {
                                panelElement.classList.add('hidden')
                              }
                              // 从展开状态中移除
                              setFeaturedExpandedIds(prev => {
                                const newSet = new Set(prev)
                                newSet.delete(fontSlug)
                                return newSet
                              })
                            }
                          })
                        }
                      }}
                    >
                      {showAllFeaturedFonts ? 'Show Less Fonts' : 'Explore All Fonts'}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Font Categories */}
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 mb-4">Browse by Style</h3>
                  <div className="space-y-3">
                    {Object.entries(FONT_CATEGORIES).slice(0, 4).map(([key, category]) => (
                      <div key={key} className="rounded-lg border border-amber-100 hover:border-amber-300 transition-colors">
                        <div className="p-3 hover:bg-amber-50 transition-colors">
                          <h4 className="font-semibold text-amber-800 mb-1">{category.title}</h4>
                          <p className="text-sm text-amber-600 mb-2">{category.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {category.fonts.slice(0, 3).map((font) => (
                              <div key={font.href} className="flex items-center gap-1">
                                <button
                                  onClick={() => handleFontSwitch(font.href.split('/').pop())}
                                  className="text-xs px-2 py-1 bg-amber-100 text-amber-700 rounded hover:bg-amber-200 transition-colors cursor-pointer"
                                >
                                  {font.title.replace(' Font', '')}
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleBrowseFontDetails(font.href.split('/').pop());
                                  }}
                                  className="text-xs px-1 py-1 text-amber-600 hover:text-amber-800 border border-amber-200 rounded hover:bg-amber-100 transition-colors"
                                  title="View Details"
                                >
                                  <Info className="h-3 w-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Collapsible details panels for browse fonts */}
                        {category.fonts.slice(0, 3).map((font) => (
                          <div 
                            key={`${font.href}-browse-details`}
                            id={`browse-${font.href.split('/').pop()}-details`}
                            className="hidden font-details-panel border-t border-amber-100 p-4 bg-amber-25"
                          >
                            <div className="text-sm text-amber-700">
                              <p className="mb-2">Discover features and usage examples for this Arabic font...</p>
                              {/* Font details will be populated here */}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Your Arabic Calligraphy Generator Questions Answered</h2>
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What is an Arabic calligraphy generator?",
                      answer:
                        "An Arabic calligraphy generator is an online tool that transforms standard Arabic text into various artistic calligraphy styles. It allows users to customize fonts, colors, sizes, and other elements to create beautiful, stylized Arabic script art without needing manual calligraphy skills. Our platform is a user-friendly tool for creating Arabic calligraphy.",
                    },
                    {
                      question: "Is this Arabic calligraphy generator free to use?",
                      answer:
                        "Yes, our online Arabic calligraphy generator is completely free for all users. All core features, including access to various fonts, customization tools, and standard downloads (PNG, SVG), are available at no cost. We aim to provide an accessible free tool for Arabic calligraphy creation.",
                    },
                    {
                      question: "What types of Arabic fonts are available?",
                      answer:
                        "Our Arabic calligraphy generator includes over 13 premium Arabic fonts. These span traditional styles like Kufic, Naskh, Thuluth, and Diwani, as well as modern and decorative script options to suit various artistic preferences for your calligraphy work.",
                    },
                    {
                      question: "Can I use the generated calligraphy for commercial projects?",
                      answer:
                        "Generally, yes. The calligraphy designs you create with our Arabic calligraphy generator can typically be used for both personal and commercial projects. However, always check the license terms for any specific premium fonts you choose, as some may have their own usage restrictions independent of our generator tool.",
                    },
                    {
                      question: "How can I create a name with this Arabic calligraphy generator?",
                      answer:
                        "To create name art, simply type the desired name into the text input field of our Arabic calligraphy generator. Then, experiment with different fonts—like Diwani or Thuluth for flowing name designs—adjust sizes, and add colors or effects until you achieve the perfect artistic representation of the name. This is a popular use for an Arabic calligraphy generator for names.",
                    },
                    {
                      question: "Does this tool support Arabic text with Harakat (vowel marks)?",
                      answer:
                        "Yes, our Arabic calligraphy generator generally supports text with Harakat (اعراب). You can type or paste Arabic text that includes these vowel marks, and the generator will render them along with the letters according to the chosen font's capabilities. Font support for Harakat can vary, so previewing is recommended.",
                    },
                    {
                      question: "What makes this a good Kufic Arabic calligraphy generator?",
                      answer:
                        "Our tool serves as an excellent Kufic Arabic calligraphy generator because it includes authentic Kufic style fonts and provides customization options that allow you to refine the geometric and angular aesthetics characteristic of Kufic script. You can adjust letter spacing and size to perfect your Kufic designs.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-lg font-medium text-amber-900">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-amber-700">
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-4 text-center">
                  <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    <Link href="/faq">View All FAQs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h2 className="text-2xl font-bold text-amber-800 mb-4">Create Arabic Calligraphy On Any Device</h2>
                    <p className="text-amber-700 mb-6">
                      Our online Arabic calligraphy maker works seamlessly on all platforms and devices, offering a versatile app-like experience. Create beautiful Arabic script art anywhere with this accessible Arabic calligraphy generator.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Laptop className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">Desktop</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tablet className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">Tablet</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">Mobile</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-amber-600" />
                        <span className="text-amber-700">All Browsers</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3 bg-amber-50 p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-amber-800 mb-4">Learn More</h3>
                    <div className="space-y-3">
                      <Link href="/tutorials" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Learn with our comprehensive Arabic calligraphy tutorials</span>
                      </Link>
                      <Link href="/use-cases" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Discover real-world applications and use cases</span>
                      </Link>
                      <Link href="/blog" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Explore our blog for tips and cultural insights</span>
                      </Link>
                      <Link href="/#font-collection" className="flex items-center text-amber-600 hover:text-amber-800">
                        <ChevronRight className="h-4 w-4 mr-1" />
                        <span>Browse our extensive Arabic font collection</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
