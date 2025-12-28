import type { Metadata } from "next"
import Link from "next/link"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowRight, Star, Clock, Users, GraduationCap, Target } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"
import { GeneratorCTA } from "@/components/generator-cta"

export const metadata: Metadata = {
  title: "Arabic Calligraphy Learning Guides | Comprehensive Study Path",
  description: "Comprehensive learning guides for mastering Arabic calligraphy, understanding font characteristics, typography trends, and design principles. Structured learning path from beginner to advanced.",
  keywords: "arabic calligraphy learning, calligraphy study guide, arabic typography learning, font comparison guide, calligraphy education resources",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/guides",
  },
}

const GUIDES = [
  {
    title: "Complete Beginner Guide",
    description: "Start your Arabic calligraphy journey with our comprehensive beginner guide covering fundamentals, tools, and step-by-step learning path.",
    href: "/blog/beginners-guide-to-calligraphy",
    difficulty: "Beginner",
    duration: "2-3 weeks",
    popular: true,
    category: "Getting Started"
  },
  {
    title: "Arabic Font Comparison",
    description: "Compare different Arabic fonts side-by-side with detailed analysis of characteristics, use cases, and design applications.",
    href: "/fonts", 
    difficulty: "Intermediate",
    duration: "1 week",
    popular: false,
    category: "Typography"
  },
  {
    title: "Best Arabic Fonts 2025",
    description: "Discover the top Arabic fonts for 2025 with expert recommendations for different design needs and applications.",
    href: "/fonts",
    difficulty: "Beginner",
    duration: "2-3 days",
    popular: true,
    category: "Typography"
  },
  {
    title: "Typography Trends 2025",
    description: "Stay ahead with the latest Arabic typography trends, emerging styles, and design innovations for 2025.",
    href: "/blog",
    difficulty: "Advanced",
    duration: "1 week",
    popular: false,
    category: "Advanced"
  },
  {
    title: "Calligraphy Tools & Techniques",
    description: "Learn about traditional and digital tools for Arabic calligraphy, from qalam to modern software solutions.",
    href: "/blog",
    difficulty: "Intermediate",
    duration: "1-2 weeks",
    popular: true,
    category: "Techniques"
  },
  {
    title: "Design Principles for Arabic Text",
    description: "Master the fundamental design principles specifically for Arabic typography and calligraphy layouts.",
    href: "/blog",
    difficulty: "Advanced",
    duration: "2 weeks",
    popular: false,
    category: "Design"
  }
]

const categories = ["All", "Getting Started", "Typography", "Techniques", "Design", "Advanced"]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "bg-green-100 text-green-800"
    case "Intermediate": return "bg-yellow-100 text-yellow-800"
    case "Advanced": return "bg-red-100 text-red-800"
    default: return "bg-gray-100 text-gray-800"
  }
}

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Arabic Calligraphy Learning Guides",
      "description": "Comprehensive learning guides for mastering Arabic calligraphy, understanding font characteristics, typography trends, and design principles.",
      "url": "https://arabic-calligraphy-generator.com/guides"
}) }}
      />
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { href: "/", name: "Home" },
              { href: "/guides", name: "Guides" }
            ]} 
          />

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              Learn & Master
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-amber-600 mb-4">
              Arabic Calligraphy Learning Guides
            </h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Comprehensive guides to master Arabic calligraphy, from beginner basics to advanced typography techniques.
            </p>
          </header>

          {/* Learning Path Overview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-2">Beginner Friendly</h3>
              <p className="text-sm text-green-700 mb-4">Start from scratch with step-by-step guidance</p>
              <div className="text-2xl font-bold text-green-600">3+</div>
              <div className="text-sm text-green-600">Beginner Guides</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Comprehensive Content</h3>
              <p className="text-sm text-blue-700 mb-4">Detailed guides covering all aspects</p>
              <div className="text-2xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-blue-600">Learning Topics</div>
            </Card>
            
            <Card className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-2">Expert Insights</h3>
              <p className="text-sm text-purple-700 mb-4">Learn from calligraphy experts and masters</p>
              <div className="text-2xl font-bold text-purple-600">Pro</div>
              <div className="text-sm text-purple-600">Level Content</div>
            </Card>
          </div>

          {/* Popular Guides */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <Star className="h-6 w-6" />
                Popular Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {GUIDES.filter(guide => guide.popular).map((guide, index) => (
                  <Card key={index} className="border border-amber-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                            {guide.difficulty}
                          </span>
                          <span className="px-2 py-1 bg-amber-200 text-amber-900 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-amber-600 text-sm">
                          <Clock className="h-4 w-4" />
                          {guide.duration}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-amber-800 mb-2">{guide.title}</h3>
                      <p className="text-amber-700 text-sm mb-4">{guide.description}</p>
                      
                      <Button asChild size="sm" className="bg-amber-600 hover:bg-amber-700">
                        <Link href={guide.href} className="flex items-center gap-1">
                          Start Learning
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* All Guides by Category */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                All Learning Guides
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {GUIDES.map((guide, index) => (
                  <Card key={index} className="border border-amber-200 hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-amber-800">{guide.title}</h3>
                            {guide.popular && (
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            )}
                          </div>
                          <p className="text-amber-700 text-sm mb-3">{guide.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(guide.difficulty)}`}>
                              {guide.difficulty}
                            </span>
                            <span className="flex items-center gap-1 text-amber-600">
                              <Clock className="h-3 w-3" />
                              {guide.duration}
                            </span>
                            <span className="text-amber-600">{guide.category}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <Button asChild size="sm" variant="outline">
                            <Link href={guide.href} className="flex items-center gap-1">
                              Read Guide
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Recommendations */}
          <Card className="border-amber-200 bg-gradient-to-r from-blue-50 to-blue-100 mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">
                Recommended Learning Path
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                  <h4 className="font-semibold text-blue-800 mb-2">Start with Basics</h4>
                  <p className="text-blue-700 text-sm">Begin with our Complete Beginner Guide to understand fundamentals</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                  <h4 className="font-semibold text-blue-800 mb-2">Practice with Tools</h4>
                  <p className="text-blue-700 text-sm">Use our generator to practice and experiment with different styles</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                  <h4 className="font-semibold text-blue-800 mb-2">Master Advanced Techniques</h4>
                  <p className="text-blue-700 text-sm">Explore typography trends and design principles for professional work</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <GeneratorCTA variant="featured" className="mb-8" />

          {/* Additional Resources */}
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Explore More Resources
              </h3>
              <p className="text-amber-700 mb-6 max-w-md mx-auto">
                Complement your learning with our other educational resources and community content.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild variant="outline">
                  <Link href="/blog">Blog Articles</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/faq">FAQ</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/templates">Templates</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <StaticFooter />
    </>
  )
}
