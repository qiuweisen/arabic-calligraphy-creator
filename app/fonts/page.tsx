import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Fonts | Complete Font Library for Islamic Typography",
  description: "Explore our extensive collection of Arabic calligraphy fonts, including Traditional Naskh, Kufi, Diwani, Nastaliq, Modern, and Display styles for all your Islamic art and typography projects.",
  keywords: "Arabic fonts, Arabic calligraphy styles, Islamic typography, Arabic typography, Arabic font library, Naskh font, Thuluth font, Kufi font, Diwani font, Nastaliq font, digital Arabic fonts",
  alternates: {
    canonical: "https://arabiccalligraphygenerator.site/fonts",
  },
  openGraph: {
    title: "Arabic Calligraphy Fonts | Complete Font Library",
    description: "Discover beautiful Arabic fonts for your calligraphy projects",
    url: "https://arabiccalligraphygenerator.site/fonts",
    siteName: "Arabic Calligraphy Creator",
    locale: "en_US",
    type: "website",
  },
}

// 所有字体的数据
const FONT_CATEGORIES = {
  "Traditional": [
    { name: "Amiri", slug: "amiri", description: "An elegant typeface inspired by classical Arabic typography" },
    { name: "Scheherazade", slug: "scheherazade", description: "A traditional Naskh style typeface with excellent readability" },
    { name: "Noto Naskh Arabic", slug: "noto-naskh-arabic", description: "A clean and versatile Naskh font optimized for digital screens" },
    { name: "El Messiri", slug: "el-messiri", description: "A modern Naskh-inspired typeface with a distinctive style" },
    { name: "Markazi Text", slug: "markazi-text", description: "A classic Naskh typeface optimized for text and readability" },
  ],
  "Kufi": [
    { name: "Reem Kufi", slug: "reem-kufi", description: "A modern Kufi typeface with geometric precision" },
  ],
  "Diwani": [
    { name: "Aref Ruqaa", slug: "aref-ruqaa", description: "An ornate typeface inspired by Ottoman Diwani calligraphy" },
  ],
  "Nastaliq": [
    { name: "Lateef", slug: "lateef", description: "A flowing font with Nastaliq influences, perfect for poetry" },
    { name: "Mirza", slug: "mirza", description: "A contemporary take on the Persian-influenced Nastaliq style" },
  ],
  "Modern": [
    { name: "Cairo", slug: "cairo", description: "A contemporary sans-serif Arabic font for clean, modern designs" },
    { name: "Harmattan", slug: "harmattan", description: "A simplified modern Arabic typeface with excellent legibility" },
    { name: "Mada", slug: "mada", description: "A geometric sans-serif with a minimalist aesthetic" },
    { name: "Tajawal", slug: "tajawal", description: "A versatile modern font designed for digital interfaces" },
    { name: "Lemonada", slug: "lemonada", description: "A rounded and friendly sans-serif font suitable for various uses" },
  ],
  "Display": [
    { name: "Jomhuria", slug: "jomhuria", description: "A bold display font with strong visual impact" },
    { name: "Rakkas", slug: "rakkas", description: "A decorative display font with distinctive character" },
    { name: "Marhey", slug: "marhey", description: "A playful and energetic display font" },
  ],
}

export default function FontsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-3">Arabic Calligraphy Fonts</h1>
              <p className="text-lg text-amber-700">
                Explore our complete collection of Arabic calligraphy fonts for your creative projects
              </p>
            </div>

            <div className="space-y-12">
              {Object.entries(FONT_CATEGORIES).map(([category, fonts]) => (
                <div key={category} className="space-y-4">
                  <h2 className="text-2xl font-bold text-amber-800 border-b border-amber-200 pb-2">
                    {category} Styles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fonts.map((font) => (
                      <Link href={`/fonts/${font.slug}`} key={font.slug}>
                        <Card className="border-amber-200 hover:border-amber-400 transition-all hover:shadow-md">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="text-xl font-bold text-amber-800 mb-1">{font.name}</h3>
                                <p className="text-amber-600 text-sm mb-3">{font.description}</p>
                              </div>
                              <ChevronRight className="h-5 w-5 text-amber-400" />
                            </div>
                            <div 
                              className="mt-4 p-3 bg-amber-50 border border-amber-100 rounded-md text-center"
                              style={{ 
                                fontFamily: font.name === "Scheherazade" ? "'Scheherazade New', serif" : `'${font.name}', sans-serif`,
                                fontSize: "28px",
                                direction: "rtl"
                              }}
                            >
                              بسم الله الرحمن الرحيم
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="mb-6 text-amber-700">
                Ready to create beautiful Arabic calligraphy with these fonts?
              </p>
              <Button asChild className="bg-amber-600 hover:bg-amber-700">
                <Link href="/">Try Our Calligraphy Generator</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 