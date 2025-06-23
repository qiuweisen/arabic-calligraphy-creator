import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PlayCircle, Book, Lightbulb, Palette, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Tutorials | Complete Learning Guide 2024",
  description: "Master Arabic calligraphy with our comprehensive tutorials and use cases. From beginner guides to advanced techniques, learn font selection, design tips, and real-world applications.",
  keywords: "Arabic calligraphy tutorial, how to create Arabic typography, Arabic calligraphy generator guide, learn Arabic calligraphy, Arabic font tutorial, Arabic design tips",
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
              <span className="text-xs text-amber-500">{tutorial.duration} read</span>
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
      <Navbar />
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