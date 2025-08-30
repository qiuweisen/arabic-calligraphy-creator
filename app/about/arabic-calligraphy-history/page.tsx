import type { Metadata } from 'next'
import { StaticNavbar } from '@/components/static-navbar'
import { Footer } from '@/components/footer'
import { Breadcrumb } from '@/components/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Crown, Scroll, Star, Globe, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'History of Arabic Calligraphy - Cultural Heritage & Evolution | Islamic Art Timeline',
  description: 'Explore the rich history and cultural significance of Arabic calligraphy from its origins to modern times. Discover the evolution of Islamic art, calligraphy styles, and cultural impact.',
  keywords: 'arabic calligraphy history,islamic art history,arabic script evolution,calligraphy cultural significance,islamic typography heritage,arabic writing history',
  openGraph: {
    title: 'History of Arabic Calligraphy - Cultural Heritage & Evolution',
    description: 'Explore the rich history and cultural significance of Arabic calligraphy from its origins to modern times. Discover the evolution of Islamic art and calligraphy styles.',
    type: 'article',
    url: 'https://arabic-calligraphy-creator.com/about/arabic-calligraphy-history',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'History of Arabic Calligraphy - Cultural Heritage & Evolution',
    description: 'Explore the rich history and cultural significance of Arabic calligraphy from its origins to modern times.',
  },
  alternates: {
    canonical: 'https://arabic-calligraphy-creator.com/about/arabic-calligraphy-history',
  },
}

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Arabic Calligraphy History', href: '/about/arabic-calligraphy-history' },
]

export default function ArabicCalligraphyHistoryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "History of Arabic Calligraphy - Cultural Heritage & Evolution",
    "description": "Comprehensive exploration of Arabic calligraphy history, from its origins to modern evolution, covering cultural significance and artistic development",
    "image": "https://arabic-calligraphy-creator.com/history-og.png",
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
    "datePublished": "2024-01-01",
    "dateModified": "2024-01-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://arabic-calligraphy-creator.com/about/arabic-calligraphy-history"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <StaticNavbar />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              History of Arabic Calligraphy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Journey through the magnificent evolution of Arabic calligraphy, from its humble beginnings 
              to its status as one of the world's most revered art forms. Discover how this sacred art 
              has shaped Islamic culture and continues to inspire artists worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3">
                  Create Your Calligraphy <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/tutorials">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3">
                  Learn Techniques
                </Button>
              </Link>
            </div>
          </div>

          {/* Timeline Overview */}
          <Card className="mb-12 border-amber-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
              <CardTitle className="text-2xl text-amber-800">
                📜 Historical Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">7th Century</h3>
                  <p className="text-sm text-gray-600">Origins with the Quran and early Islamic expansion</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">8th-10th Century</h3>
                  <p className="text-sm text-gray-600">Abbasid Golden Age and script development</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">11th-15th Century</h3>
                  <p className="text-sm text-gray-600">Classical period and regional variations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Modern Era</h3>
                  <p className="text-sm text-gray-600">Revival and digital transformation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Origins and Early Development */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <BookOpen className="h-6 w-6 mr-3" />
                  Origins and Early Development (7th-8th Century)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Arabic calligraphy emerged in the 7th century alongside the revelation of the Quran and the rapid 
                    expansion of Islam. What began as a practical writing system quickly evolved into a sacred art form, 
                    deeply intertwined with Islamic spirituality and cultural identity.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                        <h4 className="font-semibold text-amber-800 mb-4">The Sacred Beginning</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Quranic Revelation</h5>
                            <p className="text-sm text-amber-600">
                              The Quran's revelation in Arabic elevated the language and its script to sacred status. 
                              The need to preserve and transmit the holy text accurately drove the development of 
                              sophisticated writing techniques.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Early Scripts</h5>
                            <p className="text-sm text-amber-600">
                              The earliest Arabic scripts, including Hijazi and early Kufic, were angular and 
                              geometric. These scripts reflected the practical needs of early Muslim scribes 
                              while establishing the foundation for artistic development.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h4 className="font-semibold text-amber-800 mb-4">Cultural Significance</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Divine Connection</h5>
                            <p className="text-sm text-amber-700">
                              In Islamic belief, Arabic is the language of divine revelation. This sacred 
                              association transformed calligraphy from mere writing into a spiritual practice, 
                              where beauty in script reflected divine beauty.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Artistic Expression</h5>
                            <p className="text-sm text-amber-700">
                              As Islamic art developed its distinctive character, avoiding figurative 
                              representation in religious contexts, calligraphy became a primary means 
                              of artistic and spiritual expression.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">📚 Key Historical Developments</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">632 CE</h5>
                        <p className="text-sm text-amber-700">Compilation of the Quran under Caliph Abu Bakr, standardizing Arabic script</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">650 CE</h5>
                        <p className="text-sm text-amber-700">Uthman's standardized Quranic text distributed throughout the Islamic world</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">8th Century</h5>
                        <p className="text-sm text-amber-700">Development of diacritical marks to ensure accurate Quranic recitation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Golden Age Development */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Crown className="h-6 w-6 mr-3" />
                  The Abbasid Golden Age (8th-10th Century)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    The Abbasid period marked the golden age of Arabic calligraphy, when the art form reached 
                    unprecedented heights of sophistication and beauty. This era saw the systematization of 
                    calligraphic styles and the emergence of master calligraphers whose influence continues today.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-amber-800 mb-4">Ibn Muqla's Revolution</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">The Master Calligrapher (886-940 CE)</h5>
                            <p className="text-sm text-amber-700">
                              Abu Ali Muhammad ibn Muqla revolutionized Arabic calligraphy by establishing 
                              mathematical principles for letter proportions. His system, based on geometric 
                              relationships, created the foundation for classical Arabic scripts.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">The Six Classical Scripts</h5>
                            <p className="text-sm text-amber-700">
                              Ibn Muqla systematized six fundamental scripts: Thuluth, Naskh, Muhaqqaq, 
                              Rayhan, Tawqi, and Riqa. These became the classical foundation of Arabic 
                              calligraphy, each with specific proportions and applications.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-emerald-600 mb-4">Cultural Flourishing</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">House of Wisdom</h5>
                            <p className="text-sm text-emerald-600">
                              Baghdad's House of Wisdom became a center of learning where calligraphers, 
                              scholars, and artists collaborated. This intellectual environment fostered 
                              innovation in both content and artistic presentation.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Patronage System</h5>
                            <p className="text-sm text-emerald-600">
                              Abbasid caliphs and nobles became patrons of calligraphy, commissioning 
                              magnificent Qurans and literary works. This patronage elevated calligraphy's 
                              status and encouraged artistic excellence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">🎨 Artistic Innovations</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Geometric Principles</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Mathematical proportions based on the circle and square</li>
                          <li>• Standardized letter heights and widths</li>
                          <li>• Consistent spacing and alignment systems</li>
                          <li>• Harmonious relationships between different scripts</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Aesthetic Developments</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Refined letter forms with elegant curves</li>
                          <li>• Sophisticated use of positive and negative space</li>
                          <li>• Integration of calligraphy with geometric patterns</li>
                          <li>• Development of illumination and decoration techniques</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Classical Period and Regional Variations */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Star className="h-6 w-6 mr-3" />
                  Classical Period and Regional Variations (11th-15th Century)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    The classical period witnessed the spread of Arabic calligraphy across the Islamic world,
                    leading to the development of distinct regional styles while maintaining core aesthetic principles.
                    This era saw the emergence of master calligraphers who refined and perfected the art form.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-800 mb-4">Mamluk Period (1250-1517)</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Architectural Integration</h5>
                          <p className="text-sm text-amber-700">
                            Mamluk rulers commissioned magnificent mosques and madrasas featuring
                            monumental calligraphic inscriptions. The integration of calligraphy
                            with architecture reached new heights of sophistication.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Thuluth Mastery</h5>
                          <p className="text-sm text-amber-700">
                            The Thuluth script achieved its classical form during this period,
                            becoming the preferred choice for monumental inscriptions and
                            ceremonial manuscripts.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                      <h4 className="font-semibold text-amber-800 mb-4">Ottoman Empire (1299-1922)</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Diwani Script</h5>
                          <p className="text-sm text-amber-700">
                            The Ottomans developed the ornate Diwani script for official
                            correspondence, characterized by its flowing curves and
                            intricate letter connections.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-amber-700 mb-2">Imperial Patronage</h5>
                          <p className="text-sm text-amber-700">
                            Ottoman sultans were great patrons of calligraphy, establishing
                            schools and workshops that produced master calligraphers whose
                            influence spread throughout the empire.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Safavid Persia (1501-1736)</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Nastaliq Excellence</h5>
                          <p className="text-sm text-gray-600">
                            Persian calligraphers perfected the Nastaliq script, creating
                            a flowing, elegant style that became synonymous with Persian
                            poetry and literature.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Manuscript Illumination</h5>
                          <p className="text-sm text-gray-600">
                            The integration of calligraphy with miniature painting and
                            illumination reached extraordinary levels of artistic achievement
                            in Safavid manuscripts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">🌍 Regional Characteristics</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-600 mb-2">Maghrebi Style (North Africa & Spain)</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Distinctive rounded letter forms</li>
                          <li>• Unique pointing system below the baseline</li>
                          <li>• Influence of Berber and Andalusian traditions</li>
                          <li>• Preserved in Quranic manuscripts and architecture</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-600 mb-2">Eastern Styles (Central Asia & India)</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Bihari script for Quranic texts</li>
                          <li>• Shikasta for rapid writing</li>
                          <li>• Integration with local artistic traditions</li>
                          <li>• Adaptation to local languages and scripts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modern Revival and Digital Age */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800 flex items-center">
                  <Globe className="h-6 w-6 mr-3" />
                  Modern Revival and Digital Transformation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    The 20th and 21st centuries have witnessed a remarkable revival of Arabic calligraphy,
                    driven by cultural renaissance movements, technological advances, and global appreciation
                    for Islamic art. This modern era has seen both preservation of traditional techniques
                    and innovative adaptations for contemporary applications.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-semibold text-amber-800 mb-4">20th Century Renaissance</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Cultural Awakening</h5>
                            <p className="text-sm text-amber-700">
                              The Arab cultural renaissance (Nahda) of the late 19th and early 20th
                              centuries sparked renewed interest in Arabic calligraphy as a symbol
                              of cultural identity and artistic heritage.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Modern Masters</h5>
                            <p className="text-sm text-amber-700">
                              Calligraphers like Hashim al-Baghdadi, Hamid al-Amidi, and Mohamed Zakariya
                              revitalized traditional techniques while developing contemporary approaches
                              to the ancient art form.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-amber-700 mb-2">Educational Institutions</h5>
                            <p className="text-sm text-amber-700">
                              Formal calligraphy schools and programs were established in major
                              Islamic centers, ensuring the transmission of traditional knowledge
                              to new generations of artists.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="font-semibold text-emerald-600 mb-4">Digital Revolution</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Typography Development</h5>
                            <p className="text-sm text-emerald-600">
                              The development of Arabic digital fonts has made calligraphy accessible
                              to millions, enabling the creation of beautiful Arabic text in digital
                              media while preserving traditional aesthetics.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Online Tools & Platforms</h5>
                            <p className="text-sm text-emerald-600">
                              Web-based calligraphy generators and design tools have democratized
                              access to Arabic typography, allowing users worldwide to create
                              professional-quality calligraphic designs.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Global Community</h5>
                            <p className="text-sm text-emerald-600">
                              Social media and online platforms have created a global community
                              of calligraphy enthusiasts, fostering knowledge sharing and
                              collaborative learning across cultural boundaries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-amber-800 mb-4">🚀 Contemporary Innovations</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Digital Art</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Vector-based calligraphy design</li>
                          <li>• Interactive and animated typography</li>
                          <li>• 3D calligraphic sculptures</li>
                          <li>• Augmented reality applications</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Cross-Cultural Fusion</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Integration with contemporary art movements</li>
                          <li>• Collaboration with international artists</li>
                          <li>• Adaptation to modern design principles</li>
                          <li>• Global exhibition and recognition</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Educational Technology</h5>
                        <ul className="text-sm text-amber-700 space-y-1">
                          <li>• Online learning platforms</li>
                          <li>• Mobile apps for practice</li>
                          <li>• Virtual reality training</li>
                          <li>• AI-assisted learning tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">📈 Future Prospects</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Technological Integration</h5>
                        <p className="text-sm text-amber-700">
                          Emerging technologies like AI, machine learning, and advanced typography engines
                          promise to further enhance the accessibility and creative possibilities of
                          Arabic calligraphy while preserving its traditional essence.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-amber-700 mb-2">Cultural Preservation</h5>
                        <p className="text-sm text-amber-700">
                          Digital archives, virtual museums, and online educational resources ensure
                          that the rich heritage of Arabic calligraphy will be preserved and transmitted
                          to future generations worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Impact and Significance */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">
                  🎨 Cultural Impact and Global Significance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Arabic calligraphy's influence extends far beyond the Islamic world, inspiring artists,
                    designers, and cultural movements globally. Its principles of harmony, proportion, and
                    spiritual expression continue to resonate with contemporary audiences seeking meaning
                    and beauty in visual communication.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Spiritual Dimensions</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Meditative Practice</h5>
                            <p className="text-sm text-gray-600">
                              The practice of calligraphy is considered a form of meditation and
                              spiritual discipline, requiring patience, concentration, and devotion
                              that cultivates inner peace and mindfulness.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2">Sacred Geometry</h5>
                            <p className="text-sm text-gray-600">
                              The mathematical principles underlying Arabic calligraphy reflect
                              Islamic concepts of divine order and cosmic harmony, making each
                              well-executed piece a reflection of spiritual truth.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                        <h4 className="font-semibold text-emerald-600 mb-4">Contemporary Relevance</h4>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Design Influence</h5>
                            <p className="text-sm text-emerald-600">
                              Modern graphic designers and typographers draw inspiration from
                              Arabic calligraphy's principles of balance, rhythm, and visual
                              hierarchy in creating contemporary visual communications.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-emerald-600 mb-2">Cultural Bridge</h5>
                            <p className="text-sm text-emerald-600">
                              Arabic calligraphy serves as a cultural bridge, fostering
                              understanding and appreciation between different communities
                              through the universal language of beauty and artistic expression.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">🌟 Legacy and Continuation</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-700 mb-1">1400+</div>
                        <p className="text-sm text-amber-700">Years of continuous artistic tradition</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-700 mb-1">400M+</div>
                        <p className="text-sm text-amber-700">Arabic speakers worldwide</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-700 mb-1">Global</div>
                        <p className="text-sm text-amber-700">Recognition as UNESCO cultural heritage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cultural Impact and Significance */}
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-800">
                  🎨 Cultural Impact and Global Significance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    Arabic calligraphy's influence extends far beyond the Islamic world, inspiring artists,
                    designers, and cultural movements globally. Its principles of harmony, proportion, and
                    spiritual expression continue to resonate with contemporary audiences.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Spiritual Dimensions</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Meditative Practice</h5>
                          <p className="text-sm text-gray-600">
                            The practice of calligraphy is considered a form of meditation and
                            spiritual discipline, requiring patience, concentration, and devotion.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Sacred Geometry</h5>
                          <p className="text-sm text-gray-600">
                            The mathematical principles underlying Arabic calligraphy reflect
                            Islamic concepts of divine order and cosmic harmony.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                      <h4 className="font-semibold text-emerald-600 mb-4">Contemporary Relevance</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-emerald-600 mb-2">Design Influence</h5>
                          <p className="text-sm text-emerald-600">
                            Modern graphic designers draw inspiration from Arabic calligraphy's
                            principles of balance, rhythm, and visual hierarchy.
                          </p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-emerald-600 mb-2">Cultural Bridge</h5>
                          <p className="text-sm text-emerald-600">
                            Arabic calligraphy serves as a cultural bridge, fostering
                            understanding between different communities through beauty.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="font-semibold text-amber-800 mb-4">🌟 Legacy Statistics</h4>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-700 mb-1">1400+</div>
                        <p className="text-sm text-amber-700">Years of continuous tradition</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-700 mb-1">400M+</div>
                        <p className="text-sm text-amber-700">Arabic speakers worldwide</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-700 mb-1">Global</div>
                        <p className="text-sm text-amber-700">UNESCO cultural heritage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-12">
            <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-200">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-3xl font-bold text-amber-800 mb-4">
                  Continue the Legacy
                </h2>
                <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                  Be part of the continuing story of Arabic calligraphy. Create your own beautiful 
                  designs that honor this magnificent artistic tradition while embracing modern possibilities.
                </p>
                <Link href="/">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Related Links */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Learn Techniques</h3>
                <p className="text-sm text-gray-600 mb-4">Master the art with our comprehensive tutorials</p>
                <Link href="/tutorials">
                  <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    View Tutorials <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Explore Fonts</h3>
                <p className="text-sm text-gray-600 mb-4">Discover our collection of traditional and modern Arabic fonts</p>
                <Link href="/fonts">
                  <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Font Library <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-gray-900 mb-2">Use Cases</h3>
                <p className="text-sm text-gray-600 mb-4">See how Arabic calligraphy is used in modern applications</p>
                <Link href="/use-cases">
                  <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Explore Uses <ArrowRight className="ml-1 h-3 w-3" />
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
