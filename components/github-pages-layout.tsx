import Link from "next/link"
import { Github, ExternalLink, Star, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GitHubPagesLayoutProps {
  children: React.ReactNode
}

export function GitHubPagesLayout({ children }: GitHubPagesLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* GitHub Pages 专用导航 - 精美升级版 */}
      <header className="relative bg-white/95 backdrop-blur-lg shadow-lg border-b border-amber-200/50">
        {/* 装饰性背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>

        <div className="relative container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo 区域 - 升级版 */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  خط
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
              </div>
              <div>
                <h1 className="font-bold text-amber-900 text-xl">Arabic Calligraphy Generator</h1>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-amber-600 font-medium">Open Source Demo</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA 按钮组 - 升级版 */}
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300" asChild>
                <Link href="https://github.com/qiuweisen/arabic-calligraphy-creator" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Link>
              </Button>

              <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="https://arabic-calligraphy-generator.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Full Version
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main>{children}</main>

      {/* GitHub Pages 专用页脚 */}
      <footer className="bg-amber-900 text-amber-100 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 项目信息 */}
            <div>
              <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" />
                Open Source Project
              </h3>
              <p className="text-amber-200 mb-4 text-sm leading-relaxed">
                Professional Arabic Calligraphy Generator built with Next.js. 
                Create beautiful Arabic typography with advanced customization options.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://github.com/qiuweisen/arabic-calligraphy-creator" 
                  className="text-amber-200 hover:text-white transition-colors flex items-center gap-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Star className="w-4 h-4" />
                  Star on GitHub
                </Link>
              </div>
            </div>

            {/* 核心功能 */}
            <div>
              <h3 className="font-bold text-white mb-4">Core Features</h3>
              <ul className="space-y-2 text-sm text-amber-200">
                <li>• 13+ Premium Arabic Fonts</li>
                <li>• Real-time Preview</li>
                <li>• Advanced Customization</li>
                <li>• High-Quality Export</li>
                <li>• Mobile Responsive</li>
                <li>• Free & Open Source</li>
              </ul>
            </div>

            {/* 主站链接 */}
            <div>
              <h3 className="font-bold text-white mb-4">Get Full Experience</h3>
              <p className="text-amber-200 mb-4 text-sm">
                Access the complete Arabic Calligraphy Generator with all features:
              </p>
              <Button className="bg-amber-600 hover:bg-amber-500 text-white" asChild>
                <Link href="https://arabic-calligraphy-generator.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit arabic-calligraphy-generator.com
                </Link>
              </Button>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="mt-8 pt-6 border-t border-amber-800 text-center">
            <p className="text-amber-300 text-sm">
              © 2024 Arabic Calligraphy Generator. Open source under MIT License.
            </p>
            <p className="text-amber-400 text-xs mt-2">
              Professional Arabic Typography Tool • Free Online Arabic Font Creator
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
