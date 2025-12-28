"use client"

import dynamic from "next/dynamic"

const DynamicCalligraphyGenerator = dynamic(
  () => import("@/components/calligraphy-generator").then((mod) => ({ default: mod.CalligraphyGenerator })),
  {
    loading: () => (
      <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4 mx-auto"></div>
        </div>
      </div>
    ),
    ssr: false,
  }
)

type ToolGeneratorClientProps = {
  initialFont?: string
}

export function ToolGeneratorClient({ initialFont }: ToolGeneratorClientProps) {
  return <DynamicCalligraphyGenerator initialFont={initialFont} />
}
