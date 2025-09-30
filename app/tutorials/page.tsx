import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Book, Lightbulb, Palette, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Tutorials – Download SVG Fonts & Illustrator Guides",
  description: "Learn how to create Islamic calligraphy, export free SVG files, and use Arabic fonts in Illustrator with step-by-step tutorials and design tips.",
  keywords: "arabic calligraphy tutorial svg, illustrator arabic font guide, free islamic design tutorial, download arabic calligraphy svg, arabic calligraphy design tips",
}

const BEGINNER_TUTORIALS = [
  {
    title: "How to Create Arabic Calligraphy Online",
    description: "Master the complete process of creating professional Arabic calligraphy online. Learn to craft beautiful Arabic text art from scratch using our browser-based tool.",
    icon: <PlayCircle className="h-6 w-6 text-amber-600" />,
    duration: "10 min",
    slug: "how-to-create-arabic-calligraphy-online",
    link: "/tutorials/how-to-create-arabic-calligraphy-online"
  },
  {
    title: "Arabic Font Selection Guide",
    description: "Professional Arabic font selection guide covering 17 curated fonts with characteristics, use cases, and pairing recommendations.",
    icon: <Book className="h-6 w-6 text-amber-600" />,
    duration: "15 min",
    slug: "arabic-font-selection-guide",
    link: "/tutorials/arabic-font-selection-guide"
  },
  {
    title: "Download and Use Arabic Fonts",
    description: "Comprehensive guide on downloading, installing, and using Arabic fonts across different platforms and applications.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "12 min",
    slug: "download-and-use-arabic-fonts",
    link: "/tutorials/download-and-use-arabic-fonts"
  },
]

const INTERMEDIATE_TUTORIALS = [
  {
    title: "Arabic Calligraphy Design Tips",
    description: "Elevate your Arabic calligraphy with professional design techniques. Learn composition principles, color theory, typography hierarchy, and cultural considerations.",
    icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
    duration: "18 min",
    slug: "arabic-calligraphy-design-tips",
    link: "/tutorials/arabic-calligraphy-design-tips"
  },
  {
    title: "Wedding Arabic Calligraphy",
    description: "Create breathtaking Arabic calligraphy for your special day. From elegant wedding invitations to beautiful ceremony decorations.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "12 min",
    slug: "wedding-arabic-calligraphy",
    link: "/use-cases/wedding-arabic-calligraphy"
  },
  {
    title: "Business Logo Arabic Fonts",
    description: "Elevate your brand with professional Arabic typography. Create powerful business logos and corporate identities.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "15 min",
    slug: "business-logo-arabic-fonts",
    link: "/use-cases/business-logo-arabic-fonts"
  },
]

const ADVANCED_TUTORIALS = [
  {
    title: "Social Media Arabic Typography",
    description: "Transform your social media presence with captivating Arabic typography. Create viral content for Instagram, TikTok, Facebook, and Twitter.",
    icon: <Lightbulb className="h-6 w-6 text-amber-600" />,
    duration: "20 min",
    slug: "social-media-arabic-typography",
    link: "/use-cases/social-media-arabic-typography"
  },
  {
    title: "Religious Arabic Calligraphy",
    description: "Honor the sacred beauty of Islamic art with authentic Arabic calligraphy. Create reverent designs for Quranic verses and mosque decorations.",
    icon: <Palette className="h-6 w-6 text-amber-600" />,
    duration: "25 min",
    slug: "religious-arabic-calligraphy",
    link: "/use-cases/religious-arabic-calligraphy"
  },
  {
    title: "Professional Typography Techniques",
    description: "Master advanced Arabic typography techniques for professional design projects and commercial applications.",
    icon: <Book className="h-6 w-6 text-amber-600" />,
    duration: "22 min",
    slug: "professional-techniques",
    link: "/blog/modern-arabic-typography"
  },
]

export default function TutorialsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Arabic Calligraphy Tutorials",
    "description": "Master Arabic calligraphy with our comprehensive tutorials and use cases. From beginner guides to advanced techniques, learn font selection, design tips, and real-world applications.",
    "url": "https://arabic-calligraphy-generator.com/tutorials",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        ...BEGINNER_TUTORIALS.map((tutorial, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "HowTo",
            "name": tutorial.title,
            "description": tutorial.description,
            "url": `https://arabic-calligraphy-generator.com${tutorial.link}`,
            "totalTime": tutorial.duration,
            "skillLevel": "Beginner"
          }
        })),
        ...INTERMEDIATE_TUTORIALS.map((tutorial, index) => ({
          "@type": "ListItem",
          "position": BEGINNER_TUTORIALS.length + index + 1,
          "item": {
            "@type": "HowTo",
            "name": tutorial.title,
            "description": tutorial.description,
            "url": `https://arabic-calligraphy-generator.com${tutorial.link}`,
            "totalTime": tutorial.duration,
            "skillLevel": "Intermediate"
          }
        })),
        ...ADVANCED_TUTORIALS.map((tutorial, index) => ({
          "@type": "ListItem",
          "position": BEGINNER_TUTORIALS.length + INTERMEDIATE_TUTORIALS.length + index + 1,
          "item": {
            "@type": "HowTo",
            "name": tutorial.title,
            "description": tutorial.description,
            "url": `https://arabic-calligraphy-generator.com${tutorial.link}`,
            "totalTime": tutorial.duration,
            "skillLevel": "Advanced"
          }
        }))
      ]
    },
    "breadcrumb": {
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
          "name": "Tutorials",
          "item": "https://arabic-calligraphy-generator.com/tutorials"
        }
      ]
    }
  }

  const howToSteps = [
    {
      title: "Pick a tutorial that matches your skill level",
      description: "Start with beginner guides to learn the generator basics, then progress to intermediate and advanced lessons as you gain confidence."
    },
    {
      title: "Follow the step-by-step instructions",
      description: "Each tutorial includes actionable tips for font selection, layout, and exporting SVG or PNG files for Illustrator or Cricut."
    },
    {
      title: "Apply the techniques inside the generator",
      description: "Use the Arabic Calligraphy Generator to recreate lessons, customize colors, and download final artwork for your projects."
    }
  ]

  const faqItems = [
    {
      question: "Do I need prior design experience to follow these tutorials?",
      answer: "No. The beginner lessons cover the fundamentals of Arabic calligraphy design, so you can create professional artwork even if you're new to design software."
    },
    {
      question: "Can I export SVG files for Adobe Illustrator or Cricut?",
      answer: "Yes. Every tutorial highlights how to export SVG files from the generator so you can use them in Illustrator, Cricut Design Space, or other creative tools."
    },
    {
      question: "Are the tutorials free to access?",
      answer: "All tutorials on this page are free. You can view detailed walkthroughs, download resources, and practice using the generator without paying anything."
    }
  ]

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Arabic Calligraphy Generator",
    "description": "Free Arabic calligraphy generator with SVG and PNG export plus 30+ Islamic fonts for tutorials and design projects.",
    "url": "https://arabic-calligraphy-generator.com",
    "image": "https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/og-image.png",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Modern web browser with JavaScript enabled",
    "softwareVersion": "2.0",
    "fileFormat": ["PNG", "SVG"],
    "featureList": [
      "Step-by-step tutorials for Arabic calligraphy",
      "Instant SVG and PNG export",
      "Commercial use allowed",
      "No registration required"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "priceValidUntil": "2030-12-31"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to use Arabic calligraphy tutorials",
    "description": "Follow these steps to learn Arabic calligraphy online, practice inside the generator, and export SVG designs.",
    "step": howToSteps.map((step) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.description
    }))
  }

  // 修改为使用每个教程项中预定义的link属性，而不是构建可能不存在的链接
  const getTutorialLink = (tutorial: any) => {
    return tutorial.link || "/"; // 如果没有指定链接，则返回首页
  };

  const renderTutorialCard = (tutorial: any) => (
    <Card className="border-amber-200 hover:border-amber-400 hover:shadow-md transition-all">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="mt-1">{tutorial.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">{tutorial.title}</h3>
            <p className="text-amber-700 text-sm mb-3">{tutorial.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-600">{tutorial.duration} read</span>
              <Link 
                href={getTutorialLink(tutorial)}
                className="text-sm font-medium text-amber-600 hover:text-amber-800 flex items-center"
              >
                View Tutorial
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Arabic Calligraphy Tutorials & Use Cases</h1>
              <p className="text-amber-700 text-lg max-w-3xl mx-auto">
                Master Arabic calligraphy with our comprehensive tutorials and real-world use cases.
                From beginner guides to advanced techniques, learn font selection, design principles,
                and practical applications for weddings, business, social media, and religious purposes.
              </p>
            </div>

            <section className="bg-white border border-amber-200 rounded-xl shadow-sm p-8 mb-12">
              <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">How to Use These Tutorials</h2>
              <ol className="space-y-6">
                {howToSteps.map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-white text-lg font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">{step.title}</h3>
                      <p className="text-amber-700 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-2">Beginner Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {BEGINNER_TUTORIALS.map((tutorial, index) => (
                    <div key={index}>
                      {renderTutorialCard(tutorial)}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-2">Intermediate Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {INTERMEDIATE_TUTORIALS.map((tutorial, index) => (
                    <div key={index}>
                      {renderTutorialCard(tutorial)}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-amber-800 mb-6 border-b border-amber-200 pb-2">Advanced Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  {ADVANCED_TUTORIALS.map((tutorial, index) => (
                    <div key={index}>
                      {renderTutorialCard(tutorial)}
                    </div>
                  ))}
                </div>
              </section>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Ready to Apply What You've Learned?</h2>
                <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                  Put your new skills into practice with our Arabic Calligraphy Generator. Create beautiful designs with just a few clicks!
                </p>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-6 py-2">
                  <Link href="/">Try the Calligraphy Generator</Link>
                </Button>
              </div>

              <section className="mt-12">
                <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {faqItems.map((item) => (
                    <Card key={item.question} className="border-amber-200">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-amber-800 mb-3">{item.question}</h3>
                        <p className="text-sm text-amber-700 leading-relaxed">{item.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold text-amber-800 mb-4">Explore More Resources</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/use-cases">Use Cases & Examples</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/fonts">Font Gallery</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/blog">Blog & Insights</Link>
                </Button>
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/features">Features & Tools</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 