import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Info, BookOpen, Zap, CheckCircle, Download, ArrowRight } from "lucide-react"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { downloadFont } from "@/app/lib/font-download"
import { FontCard } from "@/components/font-card"
import { BLOG_LINKS } from "@/lib/content-links"

export const metadata: Metadata = {
  title: "Arabic Font Collection | Browse 17+ Calligraphy Fonts",
  description: "Browse our curated Arabic font collection featuring Traditional Naskh, Kufi, Diwani, Modern & Display fonts. Complete font library for your calligraphy projects.",
  keywords: "Arabic font collection, Arabic fonts library, calligraphy fonts, Naskh fonts, Kufi fonts, Diwani fonts, Arabic typography fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts",
  },
  openGraph: {
    title: "Explore Arabic Calligraphy Fonts: Naskh, Kufi, Diwani & More",
    description: "Your ultimate library of Arabic fonts for calligraphy, Islamic art, and modern typography. Find usage guides and inspiration.",
    url: "https://arabic-calligraphy-generator.com/fonts",
    siteName: "Arabic Calligraphy Generator",
    locale: "en_US",
    type: "website",
  },
}

// 定义字体对象的类型
interface Font {
  name: string;
  slug: string;
  description: string; // This will be used for the short tagline on the card
  story?: string; // Full story is on the detail page
}

// 定义字体分类数据结构
interface FontCategoryData {
  categoryDescription: string;
  categoryApplications?: string[];
  categoryCoreFeatures?: string; // Example for future iteration
  categoryRecommendations?: string[]; // Example for future iteration
  fonts: Font[];
}

const FONT_DATA: Record<string, FontCategoryData> = {
  "Traditional": {
    categoryDescription: "Rooted in centuries of history, traditional Arabic scripts like Naskh and Thuluth are renowned for their elegance, readability, and widespread use in classical texts, religious manuscripts (especially the Quran), and formal documents. They typically feature balanced proportions and meticulous calligraphic rules. These fonts are cornerstones of Arabic calligraphic art, carrying profound cultural and religious significance.",
    categoryApplications: [
      "Quranic verses and religious texts",
      "Formal documents and official correspondence",
      "Classic literary works and poetry collections",
      "Educational materials and book body text requiring high clarity",
      "Traditional artworks and decorative designs"
    ],
    fonts: [
      { name: "Amiri", slug: "amiri", description: "An elegant revival of Naskh, excellent for body text.", story: "Amiri is a revival of the beautiful Naskh typeface used in the Bulaq Press edition of the Quran (1924), initiated by Dr. Khaled Hosny. It aims to preserve the aesthetic of traditional Naskh while being highly functional for modern digital use." },
      { name: "Scheherazade", slug: "scheherazade", description: "Traditional Naskh style with excellent readability, ideal for extended reading." },
      { name: "Noto Naskh Arabic", slug: "noto-naskh-arabic", description: "Part of Google's Noto family, this Naskh offers clarity for UI and text, optimized for screens." },
      { name: "El Messiri", slug: "el-messiri", description: "Modern Naskh-inspired with a distinctive style, suitable for headings and short texts." },
      { name: "Markazi Text", slug: "markazi-text", description: "A classic Naskh typeface optimized for text readability, particularly in print." },
    ]
  },
  "Kufi": {
    categoryDescription: "Kufi is one of the oldest Arabic scripts, characterized by its angular, geometric forms. It was initially used for stone inscriptions and early Quranic manuscripts. Modern Kufi fonts range from classic to highly stylized, often employed for logos, titles, and decorative purposes, conveying strength and modernity.",
    categoryApplications: [
      "Logos and branding requiring a strong, geometric look",
      "Architectural inscriptions, signage, and monuments",
      "Modern art pieces and graphic design projects",
      "Decorative headlines for books, posters, and covers"
    ],
    fonts: [
      { name: "Reem Kufi", slug: "reem-kufi", description: "A modern Kufi typeface with geometric precision, great for branding and headlines." },
    ]
  },
  "Diwani": {
    categoryDescription: "Developed during the Ottoman era, Diwani script is known for its elaborate, flowing, and highly decorative style. Its letters are often interconnected in complex ways, making it popular for calligraphic art, official decrees, and ornamental designs, exuding dynamism and artistic beauty.",
    categoryApplications: [
      "Artistic calligraphy pieces and posters",
      "Wedding invitations and greeting cards",
      "Ornate certificates and awards",
      "Branding and visual design for cultural events"
    ],
    fonts: [
      { name: "Aref Ruqaa", slug: "aref-ruqaa", description: "An ornate typeface inspired by Ottoman Diwani and Ruq'ah calligraphy." },
    ]
  },
  "Nastaliq": {
    categoryDescription: "Nastaliq, also known as Farsi script, is a cursive style developed in Persia. It is characterized by its sweeping descenders and a distinct slant from right to left. Nastaliq is widely used for Persian, Urdu, and Pashto, often for poetry and literary works, showcasing an elegant, flowing aesthetic.",
    categoryApplications: [
      "Persian, Urdu, and Pashto poetry and literature",
      "Book covers and literary publications",
      "Cultural and artistic expressions",
      "Elegant branding for niche markets"
    ],
    fonts: [
      { name: "Lateef", slug: "lateef", description: "A flowing font with Nastaliq influences, perfect for poetry and literary texts." },
      { name: "Mirza", slug: "mirza", description: "A contemporary take on the Persian-influenced Nastaliq style, balancing tradition and modernity." },
    ]
  },
  "Modern": {
    categoryDescription: "Modern Arabic fonts are designed with contemporary aesthetics and digital usability in mind. They often draw inspiration from traditional scripts but adapt them for clarity on screens, in branding, and for a wide range of applications. Sans-serif styles are common, emphasizing simplicity and functionality.",
    categoryApplications: [
      "Website user interfaces (UI) and mobile applications (Apps)",
      "Digital advertisements and social media graphics",
      "Corporate branding and presentations",
      "Informational signage and wayfinding systems"
    ],
    fonts: [
      { name: "Cairo", slug: "cairo", description: "A contemporary Arabic & Latin sans-serif, clean and modern, ideal for web and UI." },
      { name: "Harmattan", slug: "harmattan", description: "A simplified modern Arabic typeface with excellent legibility, especially for smaller sizes." },
      { name: "Mada", slug: "mada", description: "A geometric sans-serif with a minimalist aesthetic, suitable for branding and digital content." },
      { name: "Tajawal", slug: "tajawal", description: "A versatile modern font designed for digital interfaces and multi-script applications." },
      { name: "Lemonada", slug: "lemonada", description: "A rounded and friendly sans-serif font suitable for various uses, adding a touch of warmth." },
    ]
  },
  "Display": {
    categoryDescription: "Display fonts are crafted for impact and visual appeal, typically used for headlines, titles, logos, and other short, prominent texts. They often feature unique, stylized, or decorative elements that capture attention, making them excellent choices for creative expression.",
    categoryApplications: [
      "Large headlines for posters and banners",
      "Logos requiring a unique typographic identity",
      "Social media graphics and promotional materials",
      "Creative titles for books and magazines"
    ],
    fonts: [
      { name: "Jomhuria", slug: "jomhuria", description: "A bold display font with strong visual impact, ideal for large headlines." },
      { name: "Rakkas", slug: "rakkas", description: "A decorative display font with distinctive character, adding a unique flair to designs." },
      { name: "Marhey", slug: "marhey", description: "A playful and energetic display font, perfect for informal and creative projects." },
    ]
  },
};

// Helper function to create a concise tagline from a longer description
function createTagline(description: string, maxLength = 100): string {
  if (description.length <= maxLength) {
    return description;
  }
  // Try to split by sentence, take the first one if it's short enough
  const sentences = description.split(/[.!?。！？]/);
  if (sentences[0] && sentences[0].length <= maxLength) {
    return sentences[0].trim() + '.';
  }
  // Otherwise, truncate
  return description.substring(0, maxLength - 3) + "...";
}

export default function FontsPage() {
  // 面包屑结构化数据
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://arabic-calligraphy-generator.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Arabic Fonts",
        "item": "https://arabic-calligraphy-generator.com/fonts"
      }
    ]
  };

  // 字体集合结构化数据
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Arabic Calligraphy Fonts Collection",
    "description": "Comprehensive collection of Arabic calligraphy fonts including Traditional Naskh, Kufi, Diwani, Modern and Display styles for digital typography and Islamic art.",
    "url": "https://arabic-calligraphy-generator.com/fonts",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": Object.values(FONT_DATA).reduce((total, category) => total + category.fonts.length, 0),
      "itemListElement": Object.entries(FONT_DATA).flatMap(([categoryName, categoryData], categoryIndex) =>
        categoryData.fonts.map((font, fontIndex) => ({
          "@type": "ListItem",
          "position": categoryIndex * 10 + fontIndex + 1,
          "item": {
            "@type": "CreativeWork",
            "name": font.name,
            "description": font.description,
            "url": `https://arabic-calligraphy-generator.com/fonts/${font.slug}`,
            "genre": "Typography"
          }
        }))
      )
    }
  };

  return (
    <>
      {/* 结构化数据 */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Page Introduction and Quick Tips */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Explore the World of Arabic Calligraphy Fonts</h1>
              <p className="text-lg text-amber-700 leading-relaxed max-w-3xl mx-auto">
                Welcome to our Arabic font library! Discover and learn about various styles of Arabic calligraphy fonts to find the perfect inspiration for your creative projects, artistic designs, or academic research.
              </p>
            </div>

            <section className="mb-12 p-6 bg-sky-100/30 border border-sky-200 rounded-lg shadow">
              <h2 className="text-2xl font-semibold text-amber-800 mb-4 flex items-center">
                <Info className="h-6 w-6 mr-3 text-amber-700" />
                How to Choose the Right Arabic Font?
              </h2>
              <div className="space-y-3 text-amber-700">
                <p className="mb-1">Selecting the right Arabic font is crucial for conveying the desired tone and ensuring readability. Consider these points:</p>
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  <li><strong>Define Your Purpose:</strong> Are you choosing a font for formal documents, artistic creations, website UI, or brand logos? For instance, traditional Naskh suits formal texts, while Kufi or Diwani are better for art and logos.</li>
                  <li><strong>Focus on Readability:</strong> For long passages or user interface elements, prioritize clear and legible fonts (like most Naskh or modern sans-serifs). Fonts for display purposes can be more expressive.</li>
                  <li><strong>Explore Different Styles:</strong> Arabic calligraphy boasts diverse styles like Naskh, Kufi, and Diwani, each with its unique history, visual appeal, and typical applications.</li>
                </ul>
              </div>
            </section>

            {/* Font Categories Display */}
            <div className="space-y-16">
              {Object.entries(FONT_DATA).map(([categoryName, categoryData]) => (
                <div key={categoryName} className="space-y-6">
                  {/* Category Header and Description */}
                  <div className="p-4 border-l-4 border-amber-500 bg-amber-50/50 rounded-r-lg">
                    <h2 className="text-3xl font-bold text-amber-800 mb-3">
                      {categoryName} Styles
                    </h2>
                    <p className="text-amber-700 text-base leading-relaxed mb-3">
                      {categoryData.categoryDescription}
                    </p>
                    {categoryData.categoryApplications && categoryData.categoryApplications.length > 0 && (
                      <div className="mb-2">
                        <h4 className="font-semibold text-amber-700 mb-1.5 text-md flex items-center">
                          <CheckCircle className="h-5 w-5 mr-2 text-emerald-600" />
                          Common Applications:
                        </h4>
                        <ul className="list-disc list-inside text-amber-600 text-sm space-y-1 pl-5">
                          {categoryData.categoryApplications.map(app => <li key={app}>{app}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Fonts within this category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categoryData.fonts.map((font) => {
                      const fontInfo = getFontInfoBySlug(font.slug);
                      return (
                        <FontCard
                          key={font.slug}
                          name={font.name}
                          slug={font.slug}
                          description={createTagline(font.description, 75)}
                          zipFileName={fontInfo?.zipFileName}
                          displayName={fontInfo?.displayName}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Section for "Tips for Using Arabic Fonts Effectively" - Kept from previous changes */}
            <section className="mt-16 mb-12 p-6 bg-green-100/40 border border-green-200 rounded-lg shadow">
              <h2 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-emerald-600" /> 
                Diving Deeper into Arabic Typography
              </h2>
              <div className="space-y-3 text-emerald-600">
                <p>
                  Want to further enhance your Arabic typography designs? These tips might inspire you:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-2">
                  <li>
                    <strong>Backgrounds & Contrast:</strong> Ensure sufficient contrast between Arabic text and its background for readability. Light text on dark backgrounds or vice-versa usually works best. Avoid busy backgrounds that can obscure the intricate details of Arabic letterforms.
                  </li>
                  <li>
                    <strong>Effective Font Combinations:</strong>
                    <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                      <li>Try pairing a legible traditional Naskh for body text with a geometric Kufi or a flowing Diwani for impactful headlines.</li>
                      <li>For a modern feel, if your design is bilingual (e.g., Arabic and Latin), pair a clean Arabic sans-serif (like Cairo) with a complementary Latin sans-serif.</li>
                      <li>Avoid using too many different font styles on one page; 2-3 distinct fonts are usually sufficient.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Starting Points for Beginners:</strong>
                    <ul className="list-circle list-inside pl-4 mt-1 space-y-1">
                      <li><strong>Amiri or Noto Naskh Arabic:</strong> Excellent for beginners due to their clarity, traditional Naskh forms, and wide application in texts.</li>
                      <li><strong>Reem Kufi:</strong> A good introduction to Kufic styles, with its clear geometric shapes, suitable for titles or simple branding.</li>
                      <li><strong>Cairo:</strong> If you prefer a modern, clean look, Cairo is a versatile sans-serif that's easy to work with for digital content.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Considering Diacritics (Tashkeel):</strong> For texts requiring full vocalization (like Quranic verses or educational material), ensure your chosen font has good support for all diacritical marks and that they are clearly rendered.
                  </li>
                  <li>
                    <strong>Line Height & Spacing:</strong> Arabic scripts often benefit from slightly more generous line height (leading) compared to Latin scripts to comfortably accommodate ascenders, descenders, and diacritics, improving overall readability.
                  </li>
                </ul>
                <p className="mt-4">
                  Experimentation is key! Feel free to use our <Link href="/" className="text-emerald-600 hover:text-emerald-600 underline font-semibold">Calligraphy Generator</Link> to preview how these fonts look with your text and styles.
                </p>
              </div>
            </section>

            {/* Related Blog Articles Section */}
            <section className="mt-16 mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Learn More About Arabic Calligraphy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  BLOG_LINKS.historyOfCalligraphy,
                  BLOG_LINKS.sixMajorStyles,
                  BLOG_LINKS.modernTypography,
                  BLOG_LINKS.beginnersGuide
                ].map((blog) => (
                  <Card key={blog.href} className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Link href={blog.href} className="group">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-amber-800 group-hover:text-amber-800 mb-2">
                              {blog.title}
                            </h3>
                            <p className="text-amber-600 text-sm mb-3">
                              {blog.description}
                            </p>
                            <div className="flex items-center text-amber-600 group-hover:text-amber-800 text-sm font-medium">
                              <span>Read Article</span>
                              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/blog">View All Articles</Link>
                </Button>
              </div>
            </section>

            {/* Final CTA */}
            <div className="mt-16 text-center"> {/* Increased top margin for final CTA */}
              <p className="mb-6 text-lg text-amber-700">
                Ready to create stunning Arabic calligraphy with these exquisite fonts?
              </p>
              <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6">
                <Link href="/">Try Our Calligraphy Generator Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <StaticFooter />
    </>
  )
} 