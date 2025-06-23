import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Play, CheckCircle, Star, Users, Clock, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arabic Calligraphy Beginner Guide 2025 - Complete Tutorial for Beginners | Learn Islamic Art',
  description: 'Complete beginner guide to Arabic calligraphy and Islamic art. Learn basic techniques, tools, fonts, and design principles. Start your calligraphy journey today.',
  keywords: 'arabic calligraphy beginner guide,learn arabic calligraphy,islamic art tutorial,arabic writing tutorial,calligraphy for beginners,arabic typography basics',
  openGraph: {
    title: 'Arabic Calligraphy Beginner Guide 2025 - Complete Tutorial for Beginners',
    description: 'Complete beginner guide to Arabic calligraphy and Islamic art. Learn basic techniques, tools, fonts, and design principles.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/guides/arabic-calligraphy-beginner-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arabic Calligraphy Beginner Guide 2025 - Complete Tutorial for Beginners',
    description: 'Complete beginner guide to Arabic calligraphy and Islamic art. Learn basic techniques and design principles.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/guides/arabic-calligraphy-beginner-guide',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Guides', href: '/guides' },
  { name: 'Beginner Guide', href: '/guides/arabic-calligraphy-beginner-guide' },
]

export default function ArabicCalligraphyBeginnerGuidePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Arabic Calligraphy Beginner Guide 2025 - Complete Tutorial for Beginners",
    "description": "Comprehensive beginner guide to Arabic calligraphy covering basic techniques, tools, fonts, design principles, and step-by-step tutorials",
    "image": "https://arabic-calligraphy-creator.com/beginner-guide-og.png",
    "author": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Arabic Calligraphy Creator",
      "logo": {
        "@type": "ImageObject",
        "url": "https://arabic-calligraphy-creator.com/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arabic-calligraphy-creator.com/guides/arabic-calligraphy-beginner-guide"
    }
  }

  const learningPath = [
    {
      step: 1,
      title: "Understanding Arabic Script",
      duration: "1-2 weeks",
      description: "Learn the basics of Arabic alphabet, letter forms, and writing direction",
      topics: ["28 Arabic letters", "Letter connections", "Right-to-left writing", "Diacritical marks"],
      difficulty: "Beginner"
    },
    {
      step: 2,
      title: "Basic Calligraphy Styles",
      duration: "2-3 weeks",
      description: "Explore fundamental calligraphy styles and their characteristics",
      topics: ["Naskh script", "Thuluth basics", "Ruq'ah style", "Style comparison"],
      difficulty: "Beginner"
    },
    {
      step: 3,
      title: "Digital Tools & Fonts",
      duration: "1 week",
      description: "Master digital calligraphy tools and font selection",
      topics: ["Font selection", "Digital tools", "Online generators", "Software basics"],
      difficulty: "Beginner"
    },
    {
      step: 4,
      title: "Design Principles",
      duration: "2-3 weeks",
      description: "Learn composition, balance, and aesthetic principles",
      topics: ["Layout design", "Color theory", "Typography rules", "Cultural sensitivity"],
      difficulty: "Intermediate"
    },
    {
      step: 5,
      title: "Practice Projects",
      duration: "Ongoing",
      description: "Apply your skills with guided practice projects",
      topics: ["Simple phrases", "Decorative designs", "Personal projects", "Portfolio building"],
      difficulty: "Intermediate"
    }
  ]

  const essentialConcepts = [
    {
      concept: "Arabic Script Direction",
      explanation: "Arabic is written from right to left (RTL), opposite to English. This affects design layout and text flow.",
      example: "مرحبا بكم (Welcome) - starts from the right",
      importance: "Critical for proper text layout and design"
    },
    {
      concept: "Letter Connections",
      explanation: "Arabic letters connect to each other within words, changing their shape based on position.",
      example: "ب changes form: بـ ـبـ ـب (initial, medial, final)",
      importance: "Essential for readable Arabic text"
    },
    {
      concept: "Calligraphy Styles",
      explanation: "Different Arabic scripts serve different purposes, from formal documents to decorative art.",
      example: "Naskh for reading, Thuluth for decoration",
      importance: "Choosing the right style for your purpose"
    },
    {
      concept: "Cultural Respect",
      explanation: "Arabic calligraphy has deep cultural and religious significance that must be respected.",
      example: "Religious texts require special consideration",
      importance: "Ensures appropriate and respectful design"
    }
  ]

  const foundationSteps = [
    {
      title: "Understand Arabic Script Basics",
      description: "Learn the fundamental structure of Arabic writing system",
      action: "Study the 28 letters and their connecting forms",
      time: "1-2 days"
    },
    {
      title: "Explore Calligraphy History",
      description: "Understand the cultural and religious significance",
      action: "Read about Islamic art traditions and regional styles",
      time: "2-3 days"
    },
    {
      title: "Study Different Scripts",
      description: "Learn to identify and appreciate various calligraphy styles",
      action: "Compare Naskh, Thuluth, Kufic, and modern styles",
      time: "1 week"
    },
    {
      title: "Develop Cultural Awareness",
      description: "Understand appropriate usage and cultural sensitivity",
      action: "Learn about religious contexts and regional preferences",
      time: "Ongoing"
    },
    {
      title: "Build Design Foundation",
      description: "Master composition, balance, and aesthetic principles",
      action: "Study traditional and modern design principles",
      time: "2-3 weeks"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Arabic Calligraphy Beginner Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start your journey into the beautiful world of Arabic calligraphy. This comprehensive guide 
              will take you from complete beginner to confident creator, covering everything you need to 
              know about Arabic typography, design principles, and cultural considerations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                  Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resources/free-arabic-fonts">
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3">
                  View Examples
                </Button>
              </Link>
            </div>
          </div>

          {/* Course Overview */}
          <Card className="mb-12 border-emerald-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-100 to-teal-100">
              <CardTitle className="text-2xl text-emerald-800">
                📚 What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Arabic Basics</h3>
                  <p className="text-sm text-gray-600">Alphabet, letter forms, and writing fundamentals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Calligraphy Styles</h3>
                  <p className="text-sm text-gray-600">Traditional and modern Arabic scripts</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Digital Tools</h3>
                  <p className="text-sm text-gray-600">Software, fonts, and online generators</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Design Principles</h3>
                  <p className="text-sm text-gray-600">Composition, color, and cultural awareness</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Foundation Building */}
          <Card className="mb-12 border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                🏗️ Building Your Foundation (First Month)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Before jumping into creating designs, it's essential to build a solid foundation in Arabic
                  script understanding and cultural awareness. This foundation will make your learning journey
                  more meaningful and your designs more authentic.
                </p>

                <div className="space-y-6">
                  {foundationSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white border border-emerald-200 rounded-lg">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-700 text-sm mb-2">{step.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-emerald-700 text-sm font-medium">{step.action}</p>
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-8">
                  <h4 className="font-semibold text-emerald-800 mb-4">🎯 Foundation Complete</h4>
                  <p className="text-emerald-700 mb-4">
                    After building this foundation, you'll be ready to start practical creation with confidence
                    and cultural awareness. Your designs will be more meaningful and authentic.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/tutorials/how-to-create-arabic-calligraphy-online">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Start Creating <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/about/arabic-calligraphy-history">
                      <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        Learn History
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Complete Learning Path
            </h2>

            <div className="space-y-6">
              {learningPath.map((phase, index) => (
                <Card key={index} className="border-emerald-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      {/* Step Number */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-xl font-bold">{phase.step}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm font-medium text-gray-900">{phase.duration}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            phase.difficulty === 'Beginner' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {phase.difficulty}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 space-y-3">
                        <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-gray-700">{phase.description}</p>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.topics.map((topic, topicIndex) => (
                              <span 
                                key={topicIndex}
                                className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="text-center">
                        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white mb-2">
                          Start Step {phase.step}
                        </Button>
                        <div className="text-xs text-gray-500">
                          Interactive lessons<br />
                          Practice exercises<br />
                          Progress tracking
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Essential Concepts */}
          <Card className="mt-12 border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                💡 Essential Concepts Every Beginner Should Know
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Before diving into practice, understanding these fundamental concepts will give you 
                  a solid foundation and help you avoid common beginner mistakes.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {essentialConcepts.map((concept, index) => (
                    <div key={index} className="bg-white border border-emerald-200 rounded-lg p-6">
                      <h4 className="font-semibold text-emerald-800 text-lg mb-3">{concept.concept}</h4>
                      <p className="text-gray-700 text-sm mb-3">{concept.explanation}</p>
                      <div className="bg-emerald-50 border border-emerald-200 rounded p-3 mb-3">
                        <h5 className="font-semibold text-emerald-700 text-xs mb-1">Example:</h5>
                        <p className="text-emerald-600 text-sm">{concept.example}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <h5 className="font-semibold text-blue-700 text-xs mb-1">Why It Matters:</h5>
                        <p className="text-blue-600 text-sm">{concept.importance}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Tracking */}
          <Card className="mt-12 border-emerald-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-800">
                📈 Track Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-6">
                  Learning Arabic calligraphy is a journey. Here's how to measure your progress and 
                  stay motivated throughout your learning experience.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-4">Week 1-2: Foundation</h4>
                    <ul className="text-sm text-green-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Recognize all Arabic letters
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Understand RTL writing direction
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Create first simple design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Use online generator confidently
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-800 mb-4">Week 3-6: Development</h4>
                    <ul className="text-sm text-yellow-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Distinguish between calligraphy styles
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Apply basic design principles
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Choose appropriate colors
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Complete 5+ practice projects
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-4">Month 2+: Mastery</h4>
                    <ul className="text-sm text-blue-600 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Create original compositions
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Understand cultural context
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Help other beginners
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Build a design portfolio
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-emerald-700 mb-6 max-w-2xl mx-auto">
                  You now have everything you need to start learning Arabic calligraphy. 
                  Take the first step and create your first design today!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                      Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/tutorials">
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg">
                      Browse Tutorials
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Resources */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Free Arabic Fonts</h3>
                <p className="text-sm text-gray-600 mb-4">Download beginner-friendly fonts to start practicing</p>
                <Link href="/resources/free-arabic-fonts">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Download Fonts <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Free Arabic Fonts</h3>
                <p className="text-sm text-gray-600 mb-4">Download high-quality Arabic fonts for practice</p>
                <Link href="/resources/free-arabic-fonts">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Download Fonts <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Practice Online</h3>
                <p className="text-sm text-gray-600 mb-4">Start practicing with our online calligraphy generator</p>
                <Link href="/">
                  <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Start Creating <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
