import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { getFullUrl } from "@/lib/utils"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  // 生成结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": getFullUrl(item.href)
    }))
  }

  return (
    <>
      {/* 结构化数据 */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* 可视化面包屑导航 */}
      <nav className={`flex items-center space-x-2 text-sm text-amber-600 mb-6 ${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-amber-400" />
              )}
              {index === 0 && (
                <Home className="h-4 w-4 mr-2 text-amber-500" />
              )}
              {index === items.length - 1 ? (
                <span className="font-medium text-amber-800" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-amber-800 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
} 