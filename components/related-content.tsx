"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, BookOpen, Type, Wrench } from "lucide-react"
import { ContentLink } from "@/lib/content-links"

interface RelatedContentProps {
  title?: string
  links: ContentLink[]
  maxItems?: number
  showIcons?: boolean
}

export function RelatedContent({ 
  title = "Related Content", 
  links, 
  maxItems = 3,
  showIcons = true 
}: RelatedContentProps) {
  // 如果maxItems设置了数值，则只显示指定数量的链接
  const displayLinks = maxItems ? links.slice(0, maxItems) : links

  // 获取类型对应的图标
  const getTypeIcon = (type: ContentLink['type']) => {
    switch (type) {
      case 'blog':
        return <BookOpen className="h-4 w-4" />
      case 'font':
        return <Type className="h-4 w-4" />
      case 'tool':
        return <Wrench className="h-4 w-4" />
      default:
        return null
    }
  }

  // 获取类型对应的标签文本
  const getTypeLabel = (type: ContentLink['type']) => {
    switch (type) {
      case 'blog':
        return 'Article'
      case 'font':
        return 'Font'
      case 'tool':
        return 'Tool'
      default:
        return 'Content'
    }
  }

  if (displayLinks.length === 0) {
    return null
  }

  return (
    <div className="mt-8 mb-10">
      <h3 className="text-xl font-bold text-amber-800 mb-4">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {displayLinks.map((link, index) => (
          <Link href={link.href} key={index} className="group">
            <Card className="border-amber-200 hover:border-amber-400 transition-all hover:shadow-md h-full">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full inline-flex items-center gap-1">
                        {showIcons && getTypeIcon(link.type)}
                        {getTypeLabel(link.type)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-amber-800 mb-1 group-hover:text-amber-600 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-amber-700 line-clamp-2">{link.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-amber-400 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 