// Dynamic import configurations for performance optimization
import dynamic from 'next/dynamic'
import React from 'react'
import { CalligraphyGeneratorSkeleton } from '@/components/ui/skeleton/index'

// Main calligraphy generator - lazy loaded for better performance
export const CalligraphyGenerator = dynamic(
  () => import('@/components/calligraphy-generator').then(mod => ({ default: mod.CalligraphyGenerator })),
  {
    loading: () => React.createElement(CalligraphyGeneratorSkeleton),
    ssr: false, // Client-side only for better performance
  }
)

// Use cases section - not critical for initial render
export const UseCasesSection = dynamic(
  () => import('@/components/home/use-cases-section').then((mod) => mod.UseCasesSection),
  {
    loading: () => React.createElement('div', { 
      className: "h-64 animate-pulse bg-gray-100 rounded-lg" 
    }),
    ssr: false,
  }
)
