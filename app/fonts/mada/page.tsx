import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Type, Layers, CheckCircle, MonitorPlay, Settings, Zap, FileText } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { getFontInfoBySlug } from "@/app/lib/font-data"
import { DownloadButton } from "@/components/download-button"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Mada Arabic Font Download - Clean Minimalist Typography for Modern Design | Free Font",
  description: "Download Mada Arabic font free - clean, minimalist typeface with contemporary geometric styling. Perfect for modern websites, magazines, and digital media. Multiple weights available. Create elegant Arabic typography instantly.",
  keywords: "mada arabic font download, minimalist arabic fonts, clean arabic typography, modern arabic design, geometric arabic fonts, contemporary arabic fonts, readable arabic typeface, digital arabic fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/mada",
  },
  openGraph: {
    title: "Mada Arabic Font Download - Clean Minimalist Typography for Modern Design | Free Font",
    description: "Download Mada Arabic font free - clean, minimalist typeface with contemporary geometric styling. Perfect for modern websites, magazines, and digital media. Multiple weights available. Create elegant Arabic typography instantly.",
    url: "https://arabic-calligraphy-generator.com/fonts/mada",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: "https://arabic-calligraphy-generator.com/og-mada-font.png",
        width: 1200,
        height: 630,
        alt: "Mada Arabic Font - Clean Minimalist Typography Sample"
      }
    ],
  },
}

const TEXT_EXAMPLES = [
  {
    id: "ui-text-label",
    text: "إعدادات الحساب", // I'dadat al-Hisab
    translation: "Account Settings",
    context: "A common label in a user interface, where Mada's clarity is beneficial."
  },
  {
    id: "website-paragraph",
    text: "مرحبًا بكم في موقعنا الجديد. نحن نقدم مجموعة واسعة من الخدمات لتلبية احتياجاتكم.", // Marhaban bikum fi mawqi'ina al-jadeed. Nahnu nuqaddimu majmoo'a wasi'a min al-khadamat litalbiyat ihtiyaajaatikum.
    translation: "Welcome to our new website. We offer a wide range of services to meet your needs.",
    context: "Paragraph text on a website, demonstrating Mada's readability for body copy."
  },
  {
    id: "app-notification",
    text: "لديك رسالة جديدة", // Ladayka risala jadeeda
    translation: "You have a new message",
    context: "Notification text in an application, requiring quick and easy comprehension."
  },
  {
    id: "instructional-text",
    text: "اتبع الخطوات التالية لإكمال التسجيل.", // Ittabi' al-khutuwaat at-taaliya li-ikmaal at-tasjeel.
    translation: "Follow the next steps to complete registration.",
    context: "Clear instructional text, where Mada's legibility aids understanding."
  }
];

const FONT_FEATURES = [
  {
    icon: <CheckCircle className="h-8 w-8 text-amber-700 mb-2" />,
    title: "High Clarity & Legibility",
    description: "Engineered for excellent readability across various sizes, especially in digital screen environments."
  },
  {
    icon: <Type className="h-8 w-8 text-amber-700 mb-2" />,
    title: "Modern Sans-Serif Design",
    description: "Features a clean, contemporary sans-serif aesthetic with balanced proportions and open forms."
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-700 mb-2" />,
    title: "Versatile Weights",
    description: "Often available in a range of weights (e.g., Light, Regular, Medium, Bold, Black), suitable for diverse typographic needs."
  },
  {
    icon: <Zap className="h-8 w-8 text-amber-700 mb-2" />,
    title: "Neutral & Professional Tone",
    description: "Its unobtrusive style lends a professional and neutral tone, making it suitable for corporate and informational content."
  },
  {
    icon: <MonitorPlay className="h-8 w-8 text-amber-700 mb-2" />,
    title: "Optimized for UI/UX",
    description: "Well-suited for user interfaces, web content, and applications where clear communication is key."
  },
  {
    icon: <FileText className="h-8 w-8 text-amber-700 mb-2" />,
    title: "Good for Body Text",
    description: "Maintains readability in smaller sizes, making it a solid choice for paragraphs and longer text passages."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "User Interfaces (Web & Mobile)",
    description: "Excels in UI elements like buttons, menus, labels, and informational text due to its clarity.",
    icon: <MonitorPlay className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Website Body Content & Articles",
    description: "Provides a comfortable reading experience for longer articles and website text.",
    icon: <FileText className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Corporate & Business Communications",
    description: "Its professional and neutral tone is ideal for reports, presentations, and business websites.",
    icon: <Zap className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Educational Materials & E-Learning",
    description: "Ensures clear and legible text for educational content and online learning platforms.",
    icon: <Type className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Application Design",
    description: "A reliable choice for text within software applications, ensuring a clean and user-friendly experience.",
    icon: <Settings className="h-5 w-5 text-amber-700" />
  },
  {
    title: "Informational Signage",
    description: "Works well for clear and concise signage where readability is paramount.",
    icon: <CheckCircle className="h-5 w-5 text-amber-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer(s)",
    value: "Multiple contributors (often an open-source project, e.g. Noaman Kareem for the Google Fonts version)",
    description: "Mada is typically the result of collaborative efforts in the open-source font community to create a highly legible modern Arabic sans-serif."
  },
  {
    title: "Foundry/Publisher",
    value: "Open Source (e.g., Google Fonts)",
    description: "Widely distributed via open-source platforms, making it freely accessible for various projects."
  },
  {
    title: "Typographic Style",
    value: "Modern Sans-Serif (Humanist influences)",
    description: "A clean sans-serif with open counters and balanced proportions, sometimes showing subtle humanist characteristics for improved readability."
  },
  {
    title: "Key Strengths",
    value: "Readability, neutrality, versatility across weights, strong UI/UX performance.",
    description: "These attributes make Mada a dependable workhorse font for modern Arabic digital typography."
  },
  {
    title: "Supported Scripts",
    value: "Arabic (often with extended character sets for broader language support). Some versions might pair with a Latin counterpart.",
    description: "Primarily focused on providing excellent Arabic script rendering."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows free use, modification, and distribution, fostering its global adoption."
  }
];

const ARABIC_ALPHABET_MADA = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي";

export default function MadaFontPage() {
  // Get font info for the current page
  const fontInfo = getFontInfoBySlug('mada');

  // Structured data for Mada font - emphasizing UI/UX focus
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://arabic-calligraphy-generator.com/fonts/mada",
    "name": "Mada Font",
    "description": "Mada is a contemporary Arabic sans-serif typeface celebrated for exceptional clarity and balanced proportions. Excels in user interfaces, web content, and applications demanding high readability.",
    "creator": {
      "@type": "Person",
      "name": "Noaman Kareem"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Open Source Typography Community"
    },
    "dateCreated": "2016",
    "license": "https://scripts.sil.org/OFL",
    "inLanguage": ["ar", "en"],
    "keywords": ["Mada font", "Arabic sans-serif", "UI typography", "Web font", "Modern Arabic", "Legible font", "Interface design"],
    "about": {
      "@type": "Thing",
      "name": "Arabic Typography",
      "description": "Modern Arabic typeface design for digital applications"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": ["Designers", "Developers", "UI/UX Professionals", "Web Developers"]
    },
    "usageInfo": {
      "@type": "CreativeWork",
      "name": "Usage Guidelines",
      "text": "Ideal for user interfaces, web content, corporate communications, and digital applications requiring clear Arabic text rendering"
    },
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "Mada Typeface",
      "genre": "Typography"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 面包屑导航 */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Arabic Fonts", href: "/fonts" },
                { name: "Mada", href: "/fonts/mada" }
              ]}
            />
            
            <Button asChild variant="ghost" className="mb-4 text-amber-700 hover:text-amber-800 hover:bg-teal-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-teal-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-teal-100 to-teal-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Mada', sans-serif", fontSize: "clamp(3.5rem, 18vw, 7rem)", color: "#0d9488", lineHeight: 1.1, direction: 'rtl' }}>
                      مدى
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-amber-700 font-medium px-2 py-1 bg-teal-50 rounded-full mb-2 inline-block">Modern Sans-Serif</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mt-1 mb-3">Mada Font</h1>
                    <p className="text-lg text-amber-700 mb-6 leading-relaxed">
                      Mada is a contemporary Arabic sans-serif typeface celebrated for its exceptional clarity and balanced proportions. It excels in user interfaces, web content, and any application demanding high readability and a clean, modern aesthetic.
                    </p>
                    <div className="flex gap-4">
                      {fontInfo && (
                        <DownloadButton 
                          zipFileName={fontInfo.zipFileName}
                          displayName={fontInfo.displayName}
                        />
                      )}
                      <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                        <Link href="/?font=Mada">Try Mada in Our Generator</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-teal max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Distinctive Features of Mada</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-teal-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-amber-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-amber-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Design Philosophy: Clarity and Versatility</h2>
              <Card className="border-teal-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-amber-700 leading-relaxed">
                  <p>
                    Mada (مدى, meaning "range" or "extent") is a modern Arabic sans-serif typeface designed with a primary focus on <strong className="text-amber-800">clarity, legibility, and versatility</strong>. It serves as a robust workhorse font, particularly well-suited for digital environments where on-screen readability is crucial.
                  </p>
                  <p>
                    The design of Mada features clean lines, open counters, and well-balanced letterforms. It avoids excessive stylization, aiming for a neutral yet professional appearance. This makes it an excellent choice for user interfaces, body text on websites, corporate communications, and any context where information needs to be conveyed clearly and efficiently. The humanist influences often seen in its design contribute to its comfortable reading rhythm.
                  </p>
                  <p>
                    Often available in a comprehensive range of weights, Mada provides designers with the flexibility to create effective typographic hierarchies. Its unobtrusive nature allows content to take center stage, making it a reliable and highly functional choice for contemporary Arabic typography.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Mada Alphabet Showcase</h2>
              <Card className="border-teal-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-800">Clean & Legible Sans-Serif Forms</CardTitle>
                  <CardDescription className="text-amber-700">Observe the clear, balanced, and open letterforms of Mada.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div
                    className="text-center leading-relaxed"
                    style={{ fontFamily: "'Mada', sans-serif", fontSize: "32px", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_MADA}
                  </div>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Mada in Action: Text Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-teal-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-left whitespace-pre-line md:text-center"
                          style={{ fontFamily: "'Mada', sans-serif", fontSize: "22px", direction: "rtl", lineHeight: 1.8 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-amber-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-amber-700">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Ideal Use Cases for Mada</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-teal-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-amber-800 mb-1">{useCase.title}</h3>
                      <p className="text-amber-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-amber-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-teal-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-amber-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-amber-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-amber-700">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-teal-50 rounded-lg border border-teal-200">
                 <h3 className="text-2xl font-semibold text-amber-800 text-center sm:text-left">Design with Mada's Clarity</h3>
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/?font=Mada">Use Mada in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Clear & Modern Sans-Serifs"
                links={getContentSpecificLinks('font', 'mada')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}