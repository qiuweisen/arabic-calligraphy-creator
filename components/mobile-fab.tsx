"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Share2, Download, Copy, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface MobileFabProps {
  onDownload: () => void
  onCopy: () => void
  onShare: () => void
}

export function MobileFab({ onDownload, onCopy, onShare }: MobileFabProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  // 如果不是移动设备，不显示FAB
  if (!isMobile) return null

  return (
    <div className="fixed bottom-20 right-6 z-50 flex flex-col-reverse items-center gap-3">
      {/* 子按钮，当FAB打开时显示 */}
      <div
        className={cn(
          "flex flex-col gap-3 transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 hover:bg-amber-100 rounded-full shadow-md"
          onClick={() => {
            onDownload()
            setIsOpen(false)
          }}
          aria-label="Download"
        >
          <Download className="h-5 w-5 text-amber-800" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 hover:bg-amber-100 rounded-full shadow-md"
          onClick={() => {
            onCopy()
            setIsOpen(false)
          }}
          aria-label="Copy"
        >
          <Copy className="h-5 w-5 text-amber-800" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-50 border-amber-200 hover:bg-amber-100 rounded-full shadow-md"
          onClick={() => {
            onShare()
            setIsOpen(false)
          }}
          aria-label="Share"
        >
          <Share2 className="h-5 w-5 text-amber-800" />
        </Button>
      </div>
      
      {/* 主FAB按钮 */}
      <Button
        size="icon"
        className={cn(
          "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
          isOpen ? "bg-red-500 hover:bg-red-600" : "bg-amber-600 hover:bg-amber-700"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Plus className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
} 