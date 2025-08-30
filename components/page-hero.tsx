import { GeneratorCTA } from "@/components/generator-cta"

interface PageHeroProps {
  title: string
  description: string
  showCTA?: boolean
  ctaText?: string
  backgroundPattern?: boolean
}

export function PageHero({ 
  title, 
  description, 
  showCTA = true,
  ctaText = '立即开始',
  backgroundPattern = true 
}: PageHeroProps) {
  return (
    <div className={`relative py-12 px-6 text-center ${backgroundPattern ? 'bg-gradient-to-br from-orange-50 to-red-50' : ''}`}>
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
      )}
      
      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {description}
        </p>
        
        {showCTA && (
          <div className="flex justify-center">
            <GeneratorCTA variant="featured" />
          </div>
        )}
      </div>
    </div>
  )
}
