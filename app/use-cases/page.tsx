import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Building, Share2, ArrowRight, Star, Users, Sparkles, Church } from "lucide-react"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Ideas - Wedding, Business, Social Media Examples",
  description: "Discover amazing Arabic calligraphy ideas! Perfect for weddings, business logos, Instagram posts & religious art. Free examples & templates.",
  keywords: "Arabic calligraphy ideas, wedding Arabic fonts, business Arabic logos, Instagram Arabic posts, Arabic calligraphy examples, free Arabic designs",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/use-cases",
  },
}

const USE_CASES = [
  {
    title: "Wedding Arabic Calligraphy",
    description: "Create breathtaking Arabic calligraphy for your special day. From elegant wedding invitations to beautiful ceremony decorations, discover how Arabic typography can add cultural richness and spiritual meaning to your Islamic wedding celebration.",
    icon: <Heart className="h-8 w-8 text-gray-600" />,
    color: "rose",
    features: ["Wedding Invitations", "Ceremony Decorations", "Save the Date", "Programs & Menus"],
    link: "/use-cases/wedding-arabic-calligraphy",
    popular: true
  },
  {
    title: "Business Logo Arabic Fonts",
    description: "Elevate your brand with professional Arabic typography. Create powerful business logos, corporate identities, and brand materials that resonate with Arabic-speaking markets while maintaining global appeal and professional credibility.",
    icon: <Building className="h-8 w-8 text-amber-700" />,
    color: "blue",
    features: ["Company Logos", "Corporate Materials", "Digital Presence", "Brand Recognition"],
    link: "/use-cases/business-logo-arabic-fonts",
    popular: false
  },
  {
    title: "Social Media Arabic Typography",
    description: "Transform your social media presence with captivating Arabic typography. Create viral content, boost engagement, and connect with Arabic-speaking audiences across Instagram, TikTok, Facebook, and Twitter with culturally authentic designs.",
    icon: <Share2 className="h-8 w-8 text-amber-700" />,
    color: "purple",
    features: ["Instagram Posts", "TikTok Content", "Facebook Posts", "Twitter Graphics"],
    link: "/use-cases/social-media-arabic-typography",
    popular: true
  },
  {
    title: "Religious Arabic Calligraphy",
    description: "Honor the sacred beauty of Islamic art with authentic Arabic calligraphy. Create reverent designs for Quranic verses, mosque decorations, religious education, and spiritual content that reflects the divine beauty and cultural heritage of Islamic typography.",
    icon: <Church className="h-8 w-8 text-emerald-600" />,
    color: "emerald",
    features: ["Quranic Verses", "Mosque Decoration", "Islamic Art", "Spiritual Content"],
    link: "/use-cases/religious-arabic-calligraphy",
    popular: false
  }
]

export default function UseCasesPage() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      rose: {
        border: "border-rose-200",
        hoverBorder: "hover:border-rose-400",
        text: "text-gray-900",
        subtext: "text-gray-900",
        badge: "bg-rose-100 text-gray-900",
        link: "text-gray-600 hover:text-gray-900"
      },
      blue: {
        border: "border-blue-200",
        hoverBorder: "hover:border-blue-400",
        text: "text-amber-800",
        subtext: "text-amber-700",
        badge: "bg-blue-100 text-amber-800",
        link: "text-amber-700 hover:text-amber-800"
      },
      purple: {
        border: "border-purple-200",
        hoverBorder: "hover:border-purple-400",
        text: "text-amber-800",
        subtext: "text-amber-700",
        badge: "bg-purple-100 text-amber-800",
        link: "text-amber-700 hover:text-amber-800"
      },
      emerald: {
        border: "border-emerald-200",
        hoverBorder: "hover:border-emerald-400",
        text: "text-emerald-600",
        subtext: "text-emerald-600",
        badge: "bg-emerald-100 text-emerald-600",
        link: "text-emerald-600 hover:text-emerald-600"
      }
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  const renderUseCaseCard = (useCase: any) => {
    const colors = getColorClasses(useCase.color)
    
    return (
      <Card className={`${colors.border} ${colors.hoverBorder} hover:shadow-lg transition-all relative`}>
        {useCase.popular && (
          <div className="absolute -top-2 -right-2 z-10">
            <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </div>
          </div>
        )}
        <CardContent className="p-6">
          <div className="flex items-start space-x-4 mb-4">
            <div className="mt-1">{useCase.icon}</div>
            <div className="flex-1">
              <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{useCase.title}</h3>
              <p className={`${colors.subtext} text-sm mb-4 leading-relaxed`}>{useCase.description}</p>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className={`text-sm font-semibold ${colors.text} mb-2`}>Key Applications:</h4>
            <div className="flex flex-wrap gap-2">
              {useCase.features.map((feature: string, index: number) => (
                <span key={index} className={`text-xs px-2 py-1 rounded-full ${colors.badge}`}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-600">
              <Users className="h-3 w-3 mr-1" />
              Comprehensive Guide
            </div>
            <Link 
              href={useCase.link}
              className={`text-sm font-medium ${colors.link} flex items-center`}
            >
              Explore Use Case
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Arabic Calligraphy Use Cases",
      "description": "Discover practical applications of Arabic calligraphy for weddings, business, social media, and religious purposes with professional examples and tutorials.",
      "url": "https://arabic-calligraphy-generator.com/use-cases"
}) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                Arabic Calligraphy Use Cases
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
                Discover practical applications of Arabic calligraphy across different industries and occasions. 
                From personal celebrations to professional branding, explore how Arabic typography can enhance 
                your projects with cultural authenticity and visual impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
                  <Link href="/tools/arabic-text-generator">Start Creating Now</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/tutorials">View Tutorials</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-50">
                  <Link href="/tools/arabic-font-generator">Preview Fonts</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {USE_CASES.map((useCase, index) => (
                <div key={index}>
                  {renderUseCaseCard(useCase)}
                </div>
              ))}
            </div>

            {/* Featured Benefits Section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-amber-800 mb-4">Why Choose Arabic Calligraphy?</h2>
                <p className="text-amber-700 max-w-2xl mx-auto">
                  Arabic calligraphy offers unique advantages for connecting with Arabic-speaking audiences 
                  and adding cultural depth to your designs.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-amber-800 mb-2">Cultural Authenticity</h3>
                  <p className="text-sm text-amber-700">Connect with Arabic-speaking audiences through culturally authentic and respectful design choices.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-amber-800 mb-2">Visual Impact</h3>
                  <p className="text-sm text-amber-700">Create stunning designs that stand out with the inherent beauty and elegance of Arabic typography.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-amber-800 mb-2">Market Reach</h3>
                  <p className="text-sm text-amber-700">Expand your reach to the 400+ million Arabic speakers worldwide with professional Arabic designs.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Create Your Arabic Calligraphy?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Start with our free online Arabic calligraphy generator. No registration required, 
                no downloads needed - create beautiful Arabic typography in minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="/">Create Calligraphy Now</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white border-amber-600">
                  <Link href="/fonts">Browse Font Library</Link>
                </Button>
              </div>
            </div>

            {/* Related Resources */}
            <div className="mt-12 text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Related Resources</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/tutorials/arabic-font-selection-guide">Font Selection Guide</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/tutorials/arabic-calligraphy-design-tips">Design Tips</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/tutorials/how-to-create-arabic-calligraphy-online">Creation Tutorial</Link>
                </Button>
                <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/blog">Blog & Insights</Link>
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
