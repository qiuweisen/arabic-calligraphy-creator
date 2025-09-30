"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const placementGuide = [
  {
    area: "Forearm",
    size: "Medium to Large",
    considerations: "Highly visible, great for longer phrases or decorative scripts",
    painLevel: "Low to Moderate",
    healing: "Easy to care for",
    image: "/tattoo-placements/forearm.svg",
    popular: true
  },
  {
    area: "Wrist",
    size: "Small to Medium", 
    considerations: "Perfect for single words or short phrases, very visible",
    painLevel: "Moderate",
    healing: "Requires careful movement during healing",
    image: "/tattoo-placements/wrist.svg",
    popular: true
  },
  {
    area: "Shoulder/Upper Arm",
    size: "Large",
    considerations: "Excellent for elaborate calligraphy, can be easily concealed",
    painLevel: "Low",
    healing: "Easy to keep covered and clean",
    image: "/tattoo-placements/shoulder.svg",
    popular: false
  },
  {
    area: "Back/Spine",
    size: "Medium to Large",
    considerations: "Great for vertical Arabic text, very striking placement",
    painLevel: "Moderate to High",
    healing: "Harder to care for, avoid tight clothing",
    image: "/tattoo-placements/back.svg",
    popular: false
  },
  {
    area: "Ribcage",
    size: "Medium",
    considerations: "Intimate placement, follows natural body curves beautifully",
    painLevel: "High",
    healing: "Challenging due to movement and clothing friction",
    image: "/tattoo-placements/ribs.svg",
    popular: false
  },
  {
    area: "Behind Ear",
    size: "Small",
    considerations: "Subtle and delicate, perfect for single meaningful words",
    painLevel: "Moderate",
    healing: "Easy to keep clean, minimal clothing interference",
    image: "/tattoo-placements/ear.svg",
    popular: true
  }
]

export function TattooPlacementGuide() {
  const [selectedPlacement, setSelectedPlacement] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          Placement Guide for Arabic Tattoos
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose the right location for your Arabic calligraphy based on size, visibility, and personal comfort. 
          Click on any placement to learn more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placementGuide.map((placement, index) => (
          <Card 
            key={index} 
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
              selectedPlacement === index ? 'ring-2 ring-amber-500 shadow-lg' : ''
            } ${placement.popular ? 'border-amber-300' : 'border-gray-200'}`}
            onClick={() => setSelectedPlacement(selectedPlacement === index ? null : index)}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {placement.area}
                </h4>
                {placement.popular && (
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    Popular
                  </Badge>
                )}
              </div>
              
              {/* Placeholder for placement illustration */}
              <div className="w-full h-32 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-amber-600 text-4xl">
                  📍
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Size:</span> {placement.size}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Pain Level:</span> {placement.painLevel}
                </div>
              </div>
              
              {selectedPlacement === index && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Considerations:</h5>
                    <p className="text-sm text-gray-600">{placement.considerations}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">Healing Notes:</h5>
                    <p className="text-sm text-gray-600">{placement.healing}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-semibold text-blue-800 mb-2">
          💡 Pro Tip: Arabic Script Direction
        </h4>
        <p className="text-sm text-blue-700">
          Arabic reads from right to left, so consider how this affects the visual flow on your chosen body placement. 
          Horizontal placements (like forearms) work well with the natural direction of Arabic script.
        </p>
      </div>
    </div>
  )
}