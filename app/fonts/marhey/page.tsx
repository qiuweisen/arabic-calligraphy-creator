import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, PlayCircle, Sparkles, Palette, Type, Layers, Gift, Music2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Marhey Font: Playful & Energetic Arabic Typeface | Arabic Calligraphy",
  description: "Explore Marhey, a lively and energetic Arabic display font with a playful character. Perfect for fun branding, children's content, and eye-catching designs.",
  keywords: "Marhey font, playful Arabic font, energetic Arabic font, fun Arabic typeface, Arabic display font, children's Arabic font, Arabic calligraphy, creative Arabic font",
  openGraph: {
    title: "Marhey Font: Inject Fun & Energy into Your Designs | Arabic Calligraphy Generator",
    description: "Discover Marhey, a uniquely playful and dynamic Arabic font ideal for projects that need a burst of energy and a touch of whimsy.",
    url: "https://arabic-calligraphy-generator.com/fonts/marhey",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",  },
}

const TEXT_EXAMPLES = [
  {
    id: "kids-event-title",
    text: "مهرجان الألعاب", // Mahrajan al-Al'ab
    translation: "Games Festival",
    context: "A fun and inviting title for a children's event, perfectly matching Marhey's playful style."
  },
  {
    id: "candy-packaging",
    text: "حلويات لذيذة", // Halawiyat Ladheetha
    translation: "Delicious Sweets",
    context: "Text for candy packaging or a dessert brand, where Marhey adds a joyful and appealing touch."
  },
  {
    id: "youtube-thumbnail-text",
    text: "مرح بلا حدود!", // Marah bila hudood!
    translation: "Fun Without Limits!",
    context: "Eye-catching text for a YouTube thumbnail or a social media post aimed at a young audience."
  },
  {
    id: "comic-book-onomatopoeia",
    text: "بووم! طاخ!", // Boom! Takh!
    translation: "Boom! Whack!",
    context: "Onomatopoeic words in a comic strip, where Marhey's dynamic feel enhances the action."
  }
];

const FONT_FEATURES = [
  {
    icon: <PlayCircle className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Playful & Energetic",
    description: "Characterized by its dynamic and unconventional letterforms that exude a sense of fun and energy."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Unique & Distinctive Style",
    description: "Offers a truly unique aesthetic that stands out from traditional Arabic scripts, making designs memorable."
  },
  {
    icon: <Gift className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Ideal for Children's Content",
    description: "Its approachable and lively nature makes it perfectly suited for children's books, games, and branding."
  },
  {
    icon: <Music2 className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Dynamic & Rhythmic",
    description: "The letterforms often have a bouncy or dancing quality, creating a sense of movement and rhythm."
  },
  {
    icon: <Palette className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Great for Creative Expression",
    description: "Provides a fantastic tool for designers looking to inject personality and creative flair into their work."
  },
  {
    icon: <Type className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Display-Oriented",
    description: "Best used at larger sizes for headlines, titles, and short bursts of text where its character can shine."
  }
];

const IDEAL_USE_CASES = [
  {
    title: "Children's Books, Games & Apps",
    description: "Brings stories and interactive experiences to life with its fun and engaging character.",
    icon: <Gift className="h-5 w-5 text-purple-700" />
  },
  {
    title: "Toy & Candy Packaging",
    description: "Makes product packaging for fun items more appealing and eye-catching to a young audience.",
    icon: <Sparkles className="h-5 w-5 text-purple-700" />
  },
  {
    title: "Fun Event Posters & Invitations",
    description: "Perfect for birthday parties, festivals, and any event that needs a dose of playful energy.",
    icon: <PlayCircle className="h-5 w-5 text-purple-700" />
  },
  {
    title: "Animated Content & YouTube Channels",
    description: "Adds a dynamic and youthful touch to video titles, thumbnails, and in-video graphics.",
    icon: <Music2 className="h-5 w-5 text-purple-700" />
  },
  {
    title: "Quirky Branding & Logos",
    description: "Creates memorable and distinctive brand identities for businesses with a playful or creative focus.",
    icon: <Palette className="h-5 w-5 text-purple-700" />
  },
  {
    title: "Social Media Campaigns for Young Audiences",
    description: "Captures attention and conveys a fun-loving spirit in social media posts and advertisements.",
    icon: <Type className="h-5 w-5 text-purple-700" />
  }
];

const TECHNICAL_DETAILS = [
  {
    title: "Designer(s)",
    value: "Multiple contributors (often found in open-source font collections)",
    description: "Marhey's design is often attributed to collaborative efforts within the open-source font community, aiming for a unique display style."
  },
  {
    title: "Foundry/Publisher",
    value: "Open Source (e.g., Google Fonts)",
    description: "Primarily distributed as an open-source font, accessible through platforms like Google Fonts."
  },
  {
    title: "Typographic Style",
    value: "Playful Display / Novelty",
    description: "A highly stylized display font characterized by its energetic, unconventional, and often bouncy letterforms."
  },
  {
    title: "Primary Use",
    value: "Headlines, titles, branding for fun/children's products, creative projects.",
    description: "Intended for applications where a strong, playful personality is desired, best at larger sizes."
  },
  {
    title: "Key Characteristics",
    value: "Dynamic baseline, irregular shapes, energetic rhythm, high individuality.",
    description: "These elements combine to give Marhey its distinctive and lively appearance."
  },
  {
    title: "License",
    value: "SIL Open Font License 1.1 (OFL-1.1)",
    description: "Allows for free use, modification, and redistribution, encouraging creative applications."
  }
];

const ARABIC_ALPHABET_MARHEY = "مرح فنون ألعاب ضحك"; // Fun, Arts, Games, Laughter

export default function MarheyFontPage() {
  // Structured data for the font
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "Marhey Font",
    "description": "A vibrant and energetic Arabic display font that bursts with playful character. Features unique, unconventional letterforms perfect for children's content, lively branding, and eye-catching designs.",
    "creator": {
      "@type": "Organization",
      "name": "Open Source Community",
      "description": "Collaborative effort within the open-source font community for unique display typography"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Google Fonts",
      "url": "https://fonts.google.com"
    },
    "datePublished": "2025",
    "license": "https://scripts.sil.org/OFL",
    "keywords": ["Arabic font", "Playful display", "Children's content", "Energetic typography", "Creative branding", "Novelty font"],
    "genre": "Typography",
    "inLanguage": "ar",
    "audience": {
      "@type": "Audience",
      "audienceType": "Children and Creative Professionals"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.1",
      "ratingCount": "42",
      "bestRating": "5"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-4 text-purple-600 hover:text-purple-800 hover:bg-purple-50">
              <Link href="/fonts">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Fonts
              </Link>
            </Button>

            <Card className="mb-8 border-purple-200 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="w-full md:w-1/3 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 p-6 aspect-square">
                    <div style={{ fontFamily: "'Marhey', cursive", fontSize: "clamp(3.5rem, 16vw, 6rem)", color: "#7e22ce", lineHeight: 1.2, direction: 'rtl' }}>
                      مرح!
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <span className="text-xs text-purple-600 font-medium px-2 py-1 bg-purple-50 rounded-full mb-2 inline-block">Playful Display</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mt-1 mb-3">Marhey Font</h1>
                    <p className="text-lg text-purple-700 mb-6 leading-relaxed">
                      Marhey is a vibrant and energetic Arabic display font that bursts with playful character. Its unique, unconventional letterforms are perfect for adding a touch of fun and whimsy to children's content, lively branding, and eye-catching designs.
                    </p>
                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Link href="/?font=Marhey">Try Marhey in Our Generator</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-purple max-w-none">
              <h2 id="distinctive-features" className="text-3xl font-bold text-purple-800 mt-12 mb-6">Distinctive Features of Marhey</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {FONT_FEATURES.map((feature) => (
                  <Card key={feature.title} className="border-purple-200 flex flex-col bg-white">
                    <CardHeader className="items-center text-center">
                      {feature.icon}
                      <CardTitle className="text-xl text-purple-800">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center flex-grow">
                      <p className="text-purple-700 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="design-philosophy" className="text-3xl font-bold text-purple-800 mt-12 mb-6">Design Philosophy: Unbridled Fun & Energy</h2>
              <Card className="border-purple-200 mb-12 bg-white">
                <CardContent className="p-6 md:p-8 space-y-4 text-purple-700 leading-relaxed">
                  <p>
                    Marhey (مرحي, often conveying a sense of joy or playfulness) is a typeface that deliberately breaks away from traditional Arabic typographic conventions to deliver an experience حروف of pure fun and boundless energy. Its design is characterized by <strong className="text-purple-800">dynamic, often irregular letterforms</strong> that seem to dance across the baseline.
                  </p>
                  <p>
                    The core philosophy behind Marhey is to provide a typographic voice that is unmistakably cheerful, spirited, and youthful. It avoids rigid structures and embraces a more organic, almost hand-drawn feel, though typically with clean digital execution. This makes it an excellent choice for projects aimed at children, or for brands and campaigns that want to project an image of lightheartedness, creativity, and approachability.
                  </p>
                  <p>
                    While not intended for long passages of text due to its highly stylized nature, Marhey excels in display settings, transforming simple words into captivating visual statements that are full of life and personality.
                  </p>
                </CardContent>
              </Card>

              <h2 id="alphabet-showcase" className="text-3xl font-bold text-purple-800 mt-12 mb-6">Marhey Showcase: Words of Joy</h2>
              <Card className="border-purple-200 mb-12 bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-purple-800">Lively & Unconventional Letterforms</CardTitle>
                  <CardDescription className="text-purple-600">Observe the playful, energetic, and distinctive style of Marhey.</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div
                    className="text-center leading-normal"
                    style={{ fontFamily: "'Marhey', cursive", fontSize: "clamp(2.5rem, 15vw, 5rem)", direction: "rtl" }}
                  >
                    {ARABIC_ALPHABET_MARHEY}
                  </div>
                  <p className="text-sm text-purple-600 mt-4 text-center">Marhey brings a burst of energy and fun to every letter.</p>
                </CardContent>
              </Card>

              <h2 id="text-examples" className="text-3xl font-bold text-purple-800 mt-12 mb-6">Marhey in Action: Playful Examples</h2>
              <Tabs defaultValue={TEXT_EXAMPLES[0].id} className="w-full mb-12">
                <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${TEXT_EXAMPLES.length}, 1fr)` }}>
                  {TEXT_EXAMPLES.map((example, index) => (
                    <TabsTrigger key={example.id} value={example.id} className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                      Example {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {TEXT_EXAMPLES.map((example) => (
                  <TabsContent key={example.id} value={example.id}>
                    <Card className="border-purple-200 bg-white">
                      <CardContent className="p-6">
                        <div
                          className="mb-4 text-center whitespace-pre-line"
                          style={{ fontFamily: "'Marhey', cursive", fontSize: "clamp(2rem, 8vw, 3rem)", direction: "rtl", lineHeight: 1.7 }}
                        >
                          {example.text}
                        </div>
                        <p className="text-center font-medium text-purple-700 mb-2">{example.translation}</p>
                        <p className="text-center text-sm text-purple-600">{example.context}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>

              <h2 id="use-cases" className="text-3xl font-bold text-purple-800 mt-12 mb-6">Ideal Use Cases for Marhey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {IDEAL_USE_CASES.map((useCase) => (
                  <Card key={useCase.title} className="border-purple-200 flex bg-white">
                    <div className="p-6 pr-0 flex items-center">{useCase.icon}</div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-purple-800 mb-1">{useCase.title}</h3>
                      <p className="text-purple-700 text-sm">{useCase.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 id="technical-details" className="text-3xl font-bold text-purple-800 mt-12 mb-6">Technical Specifications</h2>
              <div className="space-y-6 mb-12">
                {TECHNICAL_DETAILS.map((detail) => (
                  <Card key={detail.title} className="border-purple-200 bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-800">{detail.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-purple-700 mb-1">{detail.value}</p>
                      {detail.description && <p className="text-sm text-purple-600">{detail.description}</p>}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center p-6 bg-purple-50 rounded-lg border border-purple-200">
                 <h3 className="text-2xl font-semibold text-purple-800 text-center sm:text-left">Unleash the Fun with Marhey!</h3>
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Link href="/?font=Marhey">Use Marhey in Calligraphy Generator</Link>
                </Button>
              </div>

              <RelatedContent
                title="Explore Other Playful & Display Fonts"
                links={getContentSpecificLinks('font', 'marhey')}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 