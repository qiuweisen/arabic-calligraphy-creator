"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

// 定义链接类型
interface ContentLink {
  title: string
  description: string
  href: string
  type: 'blog' | 'font' | 'tool'
}

interface RelatedContentProps {
  title?: string
  links: ContentLink[]
  maxItems?: number
}

export function RelatedContent({ title = "Related Content", links, maxItems = 3 }: RelatedContentProps) {
  // 如果maxItems设置了数值，则只显示指定数量的链接
  const displayLinks = maxItems ? links.slice(0, maxItems) : links

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
                    <span className="text-xs text-amber-600 font-medium px-2 py-1 bg-amber-50 rounded-full mb-2 inline-block">
                      {link.type === 'blog' ? 'Article' : link.type === 'font' ? 'Font' : 'Tool'}
                    </span>
                    <h4 className="font-semibold text-amber-800 mb-1 group-hover:text-amber-600 transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-amber-700">{link.description}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-amber-400 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
} 