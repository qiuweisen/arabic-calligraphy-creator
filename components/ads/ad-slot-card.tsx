"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AdSlot } from "@/components/ads/ad-slot"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

interface AdSlotCardProps {
  slotId: string
  format?: "multiplex" | "display"
  className?: string
  minHeight?: number
}

export function AdSlotCard({ slotId, format = "multiplex", className, minHeight }: AdSlotCardProps) {
  const t = useTranslations("ads")

  return (
    <Card className={cn("overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm", className)}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-amber-600 uppercase tracking-wide font-semibold">
            {t("sponsored")}
          </span>
          <Badge variant="outline" className="text-xs border-amber-200 text-amber-600">
            {t("supportUs")}
          </Badge>
        </div>
        <AdSlot slotId={slotId} format={format} minHeight={minHeight} />
      </CardContent>
    </Card>
  )
}
