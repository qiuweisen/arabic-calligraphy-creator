import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

interface GeneratorCTAProps {
  variant?: "default" | "compact" | "featured"
  className?: string
}

export function GeneratorCTA({ variant = "default", className = "" }: GeneratorCTAProps) {
  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-4 border border-amber-200 ${className}`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-amber-800 text-sm">Try Our Arabic Calligraphy Generator</h3>
            <p className="text-amber-700 text-xs mt-1">Create beautiful calligraphy instantly</p>
          </div>
          <Link 
            href="/" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1"
          >
            Create Now
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    )
  }

  if (variant === "featured") {
    return (
      <div className={`bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl p-6 text-white ${className}`}>
        <div className="flex items-start gap-4">
          <div className="bg-white/20 rounded-lg p-3">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2">Ready to Create Arabic Calligraphy?</h3>
            <p className="text-amber-600 mb-4">
              Use our free online Arabic calligraphy generator with 17+ beautiful fonts. 
              No signup required - start creating instantly!
            </p>
            <Link 
              href="/" 
              className="bg-white text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Start Creating Arabic Calligraphy
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Default variant
  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-lg p-6 ${className}`}>
      <div className="text-center">
        <h3 className="font-bold text-amber-800 text-lg mb-2">
          Try Our Free Arabic Calligraphy Generator
        </h3>
        <p className="text-amber-700 mb-4">
          Create stunning Arabic calligraphy with our easy-to-use online tool. 
          Choose from 17+ beautiful fonts and download instantly.
        </p>
        <Link 
          href="/" 
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
        >
          Use Arabic Calligraphy Generator
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
