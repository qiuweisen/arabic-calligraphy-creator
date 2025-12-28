import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { StaticNavbar } from "@/components/static-navbar"
import { StaticFooter } from "@/components/static-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { RelatedContent } from "@/components/related-content"
import { getContentSpecificLinks } from "@/lib/content-links"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Famous Arabic Calligraphers Throughout History",
  description: "Discover the masters of Arabic calligraphy who shaped the art form, from Ibn Muqla and Ibn al-Bawwab to contemporary artists and their contributions.",
  keywords: "famous arabic calligraphers, Arabic calligraphy, Islamic art, Arabic typography, calligraphy guide, Arabic script",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/blog/famous-arabic-calligraphers",
  },
  openGraph: {
    title: "Famous Arabic Calligraphers Throughout History",
    description: "Discover the masters of Arabic calligraphy who shaped the art form, from Ibn Muqla and Ibn al-Bawwab to contemporary artists and their contributions.",
    url: "https://arabic-calligraphy-generator.com/blog/famous-arabic-calligraphers",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}

export default function FamousArabicCalligraphersPage() {
  return (
    <>
      <StaticNavbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Navigation */}
            <Breadcrumb 
              items={[
                { name: "Home", href: "/" },
                { name: "Blog", href: "/blog" },
                { name: "Famous Arabic Calligraphers", href: "/blog/famous-arabic-calligraphers" }
              ]}
              className="mb-6"
            />

            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Artists</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-6">10 Famous Arabic Calligraphers You Should Know</h1>
            <p className="text-sm text-muted-foreground mb-8">Published on August 28, 2023</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="relative mb-8 overflow-hidden rounded-lg border border-amber-200 h-[300px] md:h-[400px]">
                <Image 
                  src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/arabic-calligraphy-artistic-collage.png" 
                  alt="Collage of famous Arabic calligraphy works from different masters" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
              <p className="lead text-lg text-amber-700">
                For over a millennium, Arabic calligraphers have elevated writing to an exquisite art form, combining technical precision with spiritual devotion. This article highlights ten influential masters whose innovations and artistic achievements have shaped <Link href="/blog/the-rich-history-of-arabic-calligraphy" className="text-amber-600 hover:text-amber-800 underline">the tradition of Arabic calligraphy</Link> from its classical foundations to contemporary expressions.
              </p>
              
              <h2 id="classical-masters">Classical Masters (8th-14th Centuries)</h2>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/ibn-muqla-calligraphy-close-up.png" 
                          alt="Portrait or representation of Ibn Muqla" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Ibn Muqla</h3>
                      <p className="text-sm text-amber-600 mb-2">886-940 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">The Geometric Innovator</h4>
                      <p className="mb-4">
                        Abu Ali Muhammad ibn Ali ibn Muqla, born in Baghdad, is widely regarded as one of the most important figures in the development of Arabic calligraphy. As a vizier (high-ranking official) under the Abbasid Caliphate, he used his position to elevate calligraphy to new heights.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Developed the "Six Pens" system (al-aqlam al-sitta), establishing the first set of proportional rules for Arabic script</li>
                        <li>Created a revolutionary geometric system based on dots, circles, and alifs as measurement units</li>
                        <li>Refined and systematized <Link href="/blog/six-major-calligraphy-styles" className="text-amber-600 hover:text-amber-800 underline">the four major scripts</Link> of his time: Thuluth, Naskh, Reyhan, and Muhaqqaq</li>
                        <li>Established the principles that would influence all subsequent calligraphic development</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Ibn Muqla gave Arabic calligraphy its scientific foundations, transforming it from a craft into a precise art."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/ibn-al-bawwab-quran-manuscript.png" 
                          alt="Manuscript by Ibn al-Bawwab" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Ibn al-Bawwab</h3>
                      <p className="text-sm text-amber-600 mb-2">Died 1022 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">The Elegant Perfectionist</h4>
                      <p className="mb-4">
                        Abu al-Hasan Ali ibn Hilal, known as Ibn al-Bawwab ("son of the doorkeeper"), took Ibn Muqla's principles and elevated them to new artistic heights. He was born in Baghdad and is known to have copied 64 complete manuscripts of the Quran in his lifetime.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Perfected and refined the Naskh style, making it more elegant and fluid</li>
                        <li>Added greater beauty and harmony to the proportional system established by Ibn Muqla</li>
                        <li>Created a more rounded, flowing aesthetic that became widely adopted</li>
                        <li>His Quran manuscript in the Chester Beatty Library (Dublin) is one of the oldest surviving examples of refined Naskh script</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "If Ibn Muqla established the rules, Ibn al-Bawwab added the soul and artistic spirit to Arabic calligraphy."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/calligraphy-by-yaqut-al-mustasimi.png" 
                          alt="Calligraphy by Yaqut al-Musta\'simi" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Yaqut al-Musta'simi</h3>
                      <p className="text-sm text-amber-600 mb-2">Died 1298 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">The Master of the Six Scripts</h4>
                      <p className="mb-4">
                        Yaqut al-Musta'simi was the librarian and secretary to the last Abbasid caliph, Al-Musta'sim. Of Byzantine or Armenian origin, he was born in Amasya (in modern Turkey) and later moved to Baghdad, where he became the most celebrated calligrapher of his age.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Perfected all six major scripts of his time</li>
                        <li>Innovated the cutting of the reed pen (qalam) at an angle, allowing for thicker and thinner strokes</li>
                        <li>Established the Baghdad School of calligraphy, which trained many subsequent masters</li>
                        <li>Created a more dynamic and rhythmic style of writing</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Yaqut's innovation with the angled cut of the pen created a revolution in calligraphic expression, introducing a new level of dynamics and rhythm."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="ottoman-era">Ottoman Era Masters (15th-19th Centuries)</h2>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/calligraphy-by-sheikh-hamdullah.png" 
                          alt="Calligraphy by Sheikh Hamdullah" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Sheikh Hamdullah</h3>
                      <p className="text-sm text-amber-600 mb-2">1436-1520 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">Father of Ottoman Calligraphy</h4>
                      <p className="mb-4">
                        Sheikh Hamdullah ibn Mustafa Dede was born in Amasya, Turkey, and later moved to Istanbul. He studied under the guidance of Hayreddin Mar'ashi and became the calligraphy teacher to Sultan Bayezid II.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Founded the Ottoman school of calligraphy, establishing Istanbul as a new center for the art</li>
                        <li>Developed a distinctive Ottoman style for the six scripts</li>
                        <li>Created a more balanced, harmonious, and aesthetic approach</li>
                        <li>Transcribed numerous Qurans, many of which are still preserved in Turkish museums</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Sheikh Hamdullah's work marks the transition from the Abbasid to the Ottoman aesthetic, creating a distinctively Turkish interpretation of the classical scripts."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/calligraphy-by-hafiz-osman.png" 
                          alt="Calligraphy by Hafiz Osman" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Hafiz Osman</h3>
                      <p className="text-sm text-amber-600 mb-2">1642-1698 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">The Golden Age Perfectionist</h4>
                      <p className="mb-4">
                        Hafiz Osman, born in Istanbul, served as calligraphy teacher to four Ottoman sultans. His exceptional talent and innovative approach earned him the nickname "Qibla of Calligraphers" (the direction to which all calligraphers turn).
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Refined and perfected the Ottoman style of calligraphy</li>
                        <li>Known for exceptional precision and consistency in his work</li>
                        <li>Created hilye panels (decorative descriptions of the Prophet Muhammad), establishing a new calligraphic format</li>
                        <li>Produced numerous copies of the Quran that were widely distributed</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Hafiz Osman's work represents the peak of Ottoman calligraphic refinement, combining precision with spiritual devotion."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/calligraphy-by-mustafa-rakim.png" 
                          alt="Calligraphy by Mustafa Rakim" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Mustafa Rakim</h3>
                      <p className="text-sm text-amber-600 mb-2">1757-1826 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">Revolutionary of the Jali Style</h4>
                      <p className="mb-4">
                        Mustafa Rakim was born in Unye, Turkey, and later moved to Istanbul. He is considered the greatest Ottoman calligrapher of the Thuluth and Jali (large) Thuluth styles, bringing a new aesthetic understanding to calligraphy.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Revolutionized the Jali (large) Thuluth style, creating monumental inscriptions</li>
                        <li>Developed new proportional rules that enhanced the beauty of large-scale calligraphy</li>
                        <li>Created the tughra (imperial signature) for Sultan Mahmud II</li>
                        <li>His monumental inscriptions can still be seen on numerous mosques and buildings in Istanbul</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Rakim's innovations in large-scale calligraphy brought a new dimension to the art, allowing it to serve as monumental architectural expression."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="modern-masters">Modern and Contemporary Masters (20th-21st Centuries)</h2>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/calligraphy-by-hamid-aytac.png" 
                          alt="Calligraphy by Hamid Aytac" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Hamid Aytac</h3>
                      <p className="text-sm text-amber-600 mb-2">1891-1982 CE</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">Bridge Between Classical and Modern</h4>
                      <p className="mb-4">
                        Hamid Aytac (also known as Hamid Al-Amidi) was born in Diyarbakir, Turkey. He learned calligraphy from masters of the late Ottoman tradition and became the last great representative of the classical Ottoman school.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Preserved classical Ottoman calligraphy during a period of modernization and alphabet reform in Turkey</li>
                        <li>Mastered multiple scripts, particularly excelling in Thuluth and Naskh</li>
                        <li>Trained many important 20th-century calligraphers</li>
                        <li>Created inscriptions for numerous mosques in Turkey and beyond</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Aytac stood as the guardian of classical tradition during a time of rapid change, ensuring that the knowledge of centuries would not be lost."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/artwork-by-hassan-massoudy.png" 
                          alt="Artwork by Hassan Massoudy" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Hassan Massoudy</h3>
                      <p className="text-sm text-amber-600 mb-2">Born 1944</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">The Contemporary Innovator</h4>
                      <p className="mb-4">
                        Hassan Massoudy was born in Najaf, Iraq, and moved to France in 1969. After studying at the École des Beaux-Arts in Paris, he developed a unique style that bridges traditional calligraphy with contemporary art.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Created a new expressionist approach to calligraphy that incorporates vibrant colors and abstract forms</li>
                        <li>Pioneered the use of large-scale calligraphy in performance art</li>
                        <li>Combines traditional techniques with contemporary Western influences</li>
                        <li>Has exhibited his work in major museums worldwide</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Massoudy's work demonstrates that calligraphy can evolve beyond its traditional boundaries while maintaining its essential spirit."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/artwork-by-hasan-celebi.png" 
                          alt="Artwork by Hasan Celebi" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">Hasan Çelebi</h3>
                      <p className="text-sm text-amber-600 mb-2">Born 1937</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">Guardian of Ottoman Tradition</h4>
                      <p className="mb-4">
                        Hasan Çelebi was born in Erzurum, Turkey, and studied calligraphy under Hamid Aytac. He is considered one of the most important calligraphers in the traditional Ottoman style living today.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Preserved and continues to teach the classical Ottoman techniques</li>
                        <li>Created calligraphy for numerous mosques internationally, including the Prophet's Mosque in Medina</li>
                        <li>Trained hundreds of students from around the world</li>
                        <li>Awarded the UNESCO Award for his contributions to Islamic calligraphy</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "Çelebi has ensured that the traditional art of calligraphy will continue to thrive in the 21st century through his dedicated teaching."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-amber-200 mb-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="relative rounded-lg overflow-hidden border border-amber-200 mb-4 aspect-square">
                        <Image 
                          src="https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev/artwork-by-el-seed.png" 
                          alt="Artwork by eL Seed" 
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg"
                          sizes="(max-width: 768px) 33vw, 250px"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-amber-800 mb-1">eL Seed</h3>
                      <p className="text-sm text-amber-600 mb-2">Born 1981</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-bold text-amber-700 mb-2">The Calligraffiti Pioneer</h4>
                      <p className="mb-4">
                        eL Seed, born in Paris to Tunisian parents, creates art that combines Arabic calligraphy with graffiti, a style he calls "calligraffiti." His work addresses issues of identity, perception, and cultural understanding.
                      </p>
                      
                      <h5 className="font-semibold text-amber-700 mb-1">Major Contributions:</h5>
                      <ul className="list-disc pl-5 mb-4">
                        <li>Pioneered the fusion of traditional Arabic calligraphy with contemporary street art</li>
                        <li>Created large-scale public installations worldwide, including in Cairo's "Garbage City" and across buildings in Tunisia</li>
                        <li>Uses calligraphy as a tool for social commentary and to bridge cultural divides</li>
                        <li>Brings Arabic calligraphy to new audiences and contexts</li>
                      </ul>
                      
                      <p className="text-sm italic">
                        "eL Seed represents the newest evolution of calligraphy, taking it from sacred spaces to urban environments and addressing contemporary social issues."
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <h2 id="legacy-and-influence">Legacy and Continuing Influence</h2>
              <p>
                These ten masters represent the evolution of Arabic calligraphy across different periods and regions. From Ibn Muqla's mathematical precision to eL Seed's urban installations, each calligrapher has contributed to keeping this art form relevant and vibrant.
              </p>
              <p>
                What unites them all is a profound respect for tradition combined with the courage to innovate. Even the most contemporary artists in this list maintain connections to the techniques and spiritual values established over a thousand years ago.
              </p>
              <p>
                Today, new generations of calligraphers continue to explore the possibilities of Arabic script, ensuring that this magnificent art form will continue to evolve while honoring its rich heritage. Digital tools, including our <Link href="/" className="text-amber-600 hover:text-amber-800">Arabic Calligraphy Generator</Link>, represent the newest chapter in this ongoing story, making the beauty of Arabic calligraphy accessible to everyone.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <Button asChild variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/blog">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Read More Articles
                  </Link>
                </Button>
                
                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/">Try Our Calligraphy Generator</Link>
                </Button>
              </div>
            </div>

            {/* Related Content */}
            <RelatedContent 
              links={getContentSpecificLinks('blog', 'famous-arabic-calligraphers')}
              title="Related Articles"
              className="mt-12"
            />
          </div>
        </div>
      </main>
      <StaticFooter />
    </>
  )
} 