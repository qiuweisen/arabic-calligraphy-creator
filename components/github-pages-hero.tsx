import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, Palette, Type, Zap, Heart } from "lucide-react"

export function GitHubPagesHero() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen">
      <div className="relative py-20">
        <section className="container mx-auto px-4 text-center mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                Open Source • Free Forever
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
                Professional Arabic
                <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Calligraphy Generator
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-amber-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Create stunning Arabic typography with our advanced, open-source calligraphy generator. 
                <span className="font-semibold">13+ premium fonts</span>, real-time preview, and professional export quality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="https://arabic-calligraphy-generator.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Try Full Version Free
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white px-10 py-4 text-lg font-semibold transition-all duration-300" asChild>
                <Link href="https://github.com/qiuweisen/arabic-calligraphy-creator" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  View Source Code
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-200/50 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Live Preview
                  </span>
                </div>
                
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-amber-200/30">
                  <div className="text-center">
                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-800 mb-4 leading-tight" style={{fontFamily: 'serif'}}>
                      خط عربي جميل
                    </div>
                    <p className="text-amber-600 text-lg md:text-xl font-medium">Beautiful Arabic Calligraphy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">13+</div>
                <div className="text-amber-600 font-medium">Premium Arabic Fonts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">100K+</div>
                <div className="text-amber-600 font-medium">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">100%</div>
                <div className="text-amber-600 font-medium">Free & Open Source</div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              Why Choose Our Arabic Calligraphy Generator?
            </h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Professional-grade features designed for designers, artists, and Arabic typography enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Type className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4 text-center">13+ Premium Fonts</h3>
                <p className="text-amber-700 leading-relaxed text-center">
                  Professional Arabic fonts including traditional Naskh, decorative Kufic, elegant Thuluth, and modern styles.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4 text-center">Advanced Customization</h3>
                <p className="text-amber-700 leading-relaxed text-center">
                  Complete control over colors, gradients, shadows, sizes, spacing, and alignment for perfect typography.
                </p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-amber-200/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-4 text-center">Real-time Preview</h3>
                <p className="text-amber-700 leading-relaxed text-center">
                  Instant visual feedback as you type and customize. Watch your Arabic calligraphy transform in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-3xl"></div>
            
            <div className="relative p-12 md:p-16 text-center text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Ready to Create Beautiful
                  <span className="block">Arabic Calligraphy?</span>
                </h2>
                
                <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of designers, artists, and Arabic typography enthusiasts using our professional generator.
                </p>
                
                <Button size="lg" className="bg-white text-amber-700 hover:bg-amber-50 px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="https://arabic-calligraphy-generator.com" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-5 h-5 mr-2" />
                    Start Creating for Free
                  </Link>
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-amber-100 text-sm mt-8">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    No registration required
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Instant access
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    Professional results
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
