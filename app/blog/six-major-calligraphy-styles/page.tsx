import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Understanding the Six Major Arabic Calligraphy Styles | Arabic Calligraphy Guide",
  description: "Explore the unique characteristics and applications of Naskh, Thuluth, Diwani, Kufi, Riq'a, and Nastaliq - the six major styles of Arabic calligraphy.",
  keywords: "Arabic calligraphy styles, Naskh, Thuluth, Diwani, Kufi, Riq'a, Nastaliq, Islamic calligraphy, Arabic script types",
}

export default function SixMajorCalligraphyStylesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-4 text-amber-600 hover:text-amber-800 hover:bg-amber-50">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            
            <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full">Styles</span>
            <h1 className="text-3xl md:text-4xl font-bold text-amber-800 mt-4 mb-6">Understanding the Six Major Arabic Calligraphy Styles</h1>
            <p className="text-sm text-muted-foreground mb-8">Published on June 3, 2023</p>
            
            <div className="prose prose-amber max-w-none">
              <div className="relative mb-8 overflow-hidden rounded-lg border border-amber-200 h-[300px] md:h-[400px]">
                <Image 
                  src="/placeholder.svg" 
                  alt="Six major Arabic calligraphy styles displayed in a decorative arrangement" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              
              <p className="lead text-lg text-amber-700">
                Arabic calligraphy stands as one of the most important art forms in Islamic culture, blending exceptional craftsmanship with profound spiritual meaning. Throughout its development, various calligraphic styles emerged, each with distinct characteristics and purposes. This article explores the six major Arabic calligraphy styles, helping you understand their features, historical context, and practical applications.
              </p>
              
              <Tabs defaultValue="naskh" className="w-full mt-8">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                  <TabsTrigger value="naskh">Naskh</TabsTrigger>
                  <TabsTrigger value="thuluth">Thuluth</TabsTrigger>
                  <TabsTrigger value="diwani">Diwani</TabsTrigger>
                  <TabsTrigger value="kufi">Kufi</TabsTrigger>
                  <TabsTrigger value="riqa">Riq'a</TabsTrigger>
                  <TabsTrigger value="nastaliq">Nastaliq</TabsTrigger>
                </TabsList>
                
                <TabsContent value="naskh" className="mt-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-4 mb-2">Naskh Style (النسخ)</h3>
                        <p className="text-amber-600 italic">The Foundation of Arabic Typography</p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex justify-center">
                          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex items-center justify-center h-[200px] w-full">
                            <p className="text-4xl text-amber-800 font-arabic text-right" style={{fontFamily: "'Noto Naskh Arabic', serif"}}>
                              بسم الله الرحمن الرحيم
                            </p>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-amber-700 mb-2">Historical Background</h4>
                          <p className="mb-4">
                            Naskh emerged in the 10th century, developed by the master calligrapher Ibn Muqla and further perfected by Ibn al-Bawwab. The term "Naskh" derives from the Arabic word for "copying," reflecting its original purpose of transcribing the Quran and important documents.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Style Characteristics</h4>
                          <p className="mb-4">
                            Naskh is characterized by its clarity, fluidity, and readability. Letters have rounded, balanced shapes with relatively uniform strokes, short horizontal lines, and elongated vertical ones. It's a highly practical script, ideal for lengthy texts.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Applications</h4>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Standard script for Quranic texts and religious manuscripts</li>
                            <li>Book and document transcription</li>
                            <li>Modern printing and digital media's most common font</li>
                            <li>Official documents and everyday writing</li>
                          </ul>
                          
                          <p>
                            Due to its excellent readability and clean aesthetic, Naskh remains one of the most widely used Arabic scripts today and forms the basis of modern Arabic typography in print and digital formats.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="thuluth" className="mt-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-4 mb-2">Thuluth Style (الثلث)</h3>
                        <p className="text-amber-600 italic">The Majestic Script of Kings</p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex justify-center">
                          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex items-center justify-center h-[200px] w-full">
                            <p className="text-4xl text-amber-800 font-arabic text-right" style={{fontFamily: "'Amiri', serif"}}>
                              الحمد لله رب العالمين
                            </p>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-amber-700 mb-2">Historical Background</h4>
                          <p className="mb-4">
                            Thuluth was developed by Ibn Muqla in the 10th century. The name "Thuluth" means "one-third," possibly referring to the proportion of the pen nib width used. This style reached artistic perfection during the Abbasid and Ottoman periods.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Style Characteristics</h4>
                          <p className="mb-4">
                            Thuluth is known for its elegant grandeur and is often called the "king of calligraphy." It features flowing curves, harmonious proportions, and meticulously designed letter connections. Vertical strokes are gracefully elongated, horizontal strokes are balanced and powerful, and often include complex decorative extensions.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Applications</h4>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Decorative titles and important texts</li>
                            <li>Mosque and religious building decorations</li>
                            <li>Artistic works and monuments</li>
                            <li>Ornamental writing of Quranic verses</li>
                          </ul>
                          
                          <p>
                            Thuluth is considered one of the most challenging Arabic calligraphy styles due to its artistic demands. Mastering this script is seen as the highest demonstration of a calligrapher's skill.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="diwani" className="mt-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-4 mb-2">Diwani Style (الديواني)</h3>
                        <p className="text-amber-600 italic">The Elegant Script of the Ottoman Court</p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex justify-center">
                          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex items-center justify-center h-[200px] w-full">
                            <p className="text-4xl text-amber-800 font-arabic text-right" style={{fontFamily: "'Aref Ruqaa', serif"}}>
                              سبحان الله وبحمده
                            </p>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-amber-700 mb-2">Historical Background</h4>
                          <p className="mb-4">
                            Diwani originated in the 16th century Ottoman court, created by Ibrahim Munif. The term "Diwani" comes from "diwan" (council or office), reflecting its initial use as the script for official documents in the Ottoman government.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Style Characteristics</h4>
                          <p className="mb-4">
                            Diwani is highly ornamental with elegant curves. Letters connect tightly with virtually no spacing, creating continuous flowing lines. Its characteristics include rounded curves, compact layout, and carefully designed letter connections, often with dot-like decorations beneath letters.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Applications</h4>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Ottoman Empire's official documents and royal correspondence</li>
                            <li>Decorative texts and artistic works</li>
                            <li>Titles and short phrases</li>
                            <li>Decorative elements in modern design</li>
                          </ul>
                          
                          <p>
                            Diwani has two main variants: regular Diwani and Jali Diwani, with the latter being more ornamental and including additional decorative dots and marks. Its elaborate nature makes it particularly suitable for ceremonial and artistic applications.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="kufi" className="mt-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-4 mb-2">Kufi Style (الكوفي)</h3>
                        <p className="text-amber-600 italic">The Ancient Geometric Script</p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex justify-center">
                          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex items-center justify-center h-[200px] w-full">
                            <p className="text-4xl text-amber-800 font-arabic text-right" style={{fontFamily: "'Reem Kufi', sans-serif"}}>
                              لا إله إلا الله
                            </p>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-amber-700 mb-2">Historical Background</h4>
                          <p className="mb-4">
                            Kufi is one of the oldest Arabic calligraphy styles, named after the city of Kufa in Iraq. It developed between the 7th and 10th centuries and was the primary script for early Quranic manuscripts.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Style Characteristics</h4>
                          <p className="mb-4">
                            Kufi is distinguished by its geometric shapes and angular features. Letters have square forms, heavy horizontal lines, and simple, strong vertical strokes. This script emphasizes structure and order, often using a grid system as the foundation for writing.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Applications</h4>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Early Quranic manuscripts</li>
                            <li>Architectural decorations and inscriptions</li>
                            <li>Coins and official seals</li>
                            <li>Modern graphic design and logos</li>
                          </ul>
                          
                          <p>
                            Kufi has several variants, including Foliated Kufi (with floral elements), Ornamental Kufi, and Square Kufi. In contemporary design, Kufi is favored for its geometric properties and bold presence.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="riqa" className="mt-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-4 mb-2">Riq'a Style (الرقعة)</h3>
                        <p className="text-amber-600 italic">The Practical Everyday Script</p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex justify-center">
                          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex items-center justify-center h-[200px] w-full">
                            <p className="text-4xl text-amber-800 font-arabic text-right" style={{fontFamily: "'Cairo', sans-serif"}}>
                              العلم نور
                            </p>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-amber-700 mb-2">Historical Background</h4>
                          <p className="mb-4">
                            Riq'a was perfected during the Ottoman period (18th century) and systematized by calligrapher Mumtaz Bey. The term "Riq'a" in Arabic refers to a small piece of paper or note, suggesting its function for everyday writing.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Style Characteristics</h4>
                          <p className="mb-4">
                            Riq'a is a simplified, practical writing style. Letters have simplified forms, smooth connections, and take up minimal space. It avoids complex ornamentation, emphasizing clarity and efficiency, making it ideal for rapid writing.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Applications</h4>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Everyday writing and correspondence</li>
                            <li>Official documents and records</li>
                            <li>Educational systems for teaching handwriting</li>
                            <li>Newspapers and practical printed materials</li>
                          </ul>
                          
                          <p>
                            Due to its practicality and ease of learning, Riq'a became the standard handwriting taught in school systems across Arab countries and forms the basis of modern Arabic handwriting.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="nastaliq" className="mt-6">
                  <Card className="border-amber-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-amber-800 mt-4 mb-2">Nastaliq Style (النستعليق)</h3>
                        <p className="text-amber-600 italic">The Poetic Persian-Arabic Script</p>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3 flex justify-center">
                          <div className="border border-amber-200 rounded-lg p-4 bg-amber-50 flex items-center justify-center h-[200px] w-full">
                            <p className="text-4xl text-amber-800 font-arabic text-right" style={{fontFamily: "'Mirza', cursive"}}>
                              كل عام وأنتم بخير
                            </p>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3">
                          <h4 className="font-bold text-amber-700 mb-2">Historical Background</h4>
                          <p className="mb-4">
                            Nastaliq originated in 14th-century Persia (modern Iran), created by Mir Ali Tabrizi. Its name combines "Naskh" and "Ta'liq" (hanging), reflecting the influence of both styles.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Style Characteristics</h4>
                          <p className="mb-4">
                            Nastaliq is known for its beautiful slanted appearance and flowing lines. Letter connections create a distinctive hanging effect, sloping from top right to bottom left, creating rhythm and dynamic beauty. Each word's letters connect tightly, while words themselves have clear spacing.
                          </p>
                          
                          <h4 className="font-bold text-amber-700 mb-2">Applications</h4>
                          <ul className="list-disc pl-5 mb-4">
                            <li>Persian and Urdu poetry writing</li>
                            <li>Literary and artistic works</li>
                            <li>Decorative titles and inscriptions</li>
                            <li>Traditional documents in Iran, Pakistan, and India</li>
                          </ul>
                          
                          <p>
                            While originally used for Persian, Nastaliq later became widely used for Urdu and other languages using the Arabic script, becoming the most popular calligraphic style in South and Central Asia.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
              
              <h2 id="practical-applications" className="text-amber-800 mt-12">Practical Applications of Arabic Calligraphy Styles</h2>
              <p>
                After understanding the characteristics of these calligraphy styles, you can select the appropriate style based on different applications:
              </p>
              <ul>
                <li><strong>Religious Texts</strong>: Naskh is the preferred choice for Quranic texts and religious documents due to its clarity and readability.</li>
                <li><strong>Decorative Art</strong>: Thuluth and Diwani, with their elegant curves and ornamental features, are ideal for artistic works and decorative purposes.</li>
                <li><strong>Modern Design</strong>: Kufi's geometric properties make it perfect for contemporary logos and design applications.</li>
                <li><strong>Everyday Writing</strong>: Riq'a's simplicity and practicality make it suitable for daily use and education.</li>
                <li><strong>Poetry and Literature</strong>: Nastaliq's flowing nature and elegance make it the ideal choice for poetry and literary works.</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Evolution of Calligraphic Styles: A Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-amber-600 font-bold w-24 flex-shrink-0">7th Century</div>
                    <div>Early Kufic script emerges as the first formal Arabic calligraphy style</div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 font-bold w-24 flex-shrink-0">10th Century</div>
                    <div>Ibn Muqla develops the "Six Pens" system, including Naskh and Thuluth</div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 font-bold w-24 flex-shrink-0">11th Century</div>
                    <div>Ibn al-Bawwab perfects the Naskh style for Quranic transcription</div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 font-bold w-24 flex-shrink-0">14th Century</div>
                    <div>Nastaliq style develops in Persia, blending Persian and Arabic calligraphic traditions</div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 font-bold w-24 flex-shrink-0">16th Century</div>
                    <div>Ottoman court develops Diwani style for official correspondence</div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-amber-600 font-bold w-24 flex-shrink-0">18th Century</div>
                    <div>Riq'a style is systematized for everyday writing and administrative use</div>
                  </div>
                </div>
              </div>
              
              <h2 id="conclusion" className="text-amber-800">Conclusion</h2>
              <p>
                The diversity of Arabic calligraphy styles reflects the rich cultural and historical development of Islamic civilization. Each style has its unique aesthetic value and practical applications, collectively forming the treasure of Arabic calligraphic art. Through our Arabic Calligraphy Generator, you can experiment with these different styles to create beautiful works that suit your specific needs.
              </p>
              <p>
                Whether you're an art enthusiast with a deep interest in Arabic calligraphy or a professional seeking inspiration for design projects, understanding these styles will help you better appreciate and apply this beautiful and ancient art form.
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 