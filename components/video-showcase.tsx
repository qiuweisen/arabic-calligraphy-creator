"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl border border-amber-200">
      {!isPlaying ? (
        <div className="relative">
          <img
            src="/placeholder.svg?height=600&width=1000"
            alt="Arabic Calligraphy Generator Tutorial"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <Button
              onClick={() => setIsPlaying(true)}
              className="w-16 h-16 rounded-full bg-amber-600 hover:bg-amber-700 flex items-center justify-center"
            >
              <Play className="h-8 w-8 text-white" fill="white" />
            </Button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl md:text-2xl font-bold">
              See How to Create Beautiful Arabic Calligraphy in 2 Minutes
            </h3>
            <p className="text-amber-100 mt-2">
              Watch our quick tutorial to learn all the features of our calligraphy generator
            </p>
          </div>
        </div>
      ) : (
        <div className="aspect-video bg-black">
          <div className="w-full h-full flex items-center justify-center text-white">
            {/* In a real implementation, this would be an iframe with a YouTube or Vimeo video */}
            <p className="text-center p-8">
              Video player would be embedded here. <br />
              In a real implementation, this would play the tutorial video.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
