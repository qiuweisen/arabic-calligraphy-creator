"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface UseCaseGalleryProps {
  category: string
  title: string
  description: string
}

export function UseCaseGallery({ category, title, description }: UseCaseGalleryProps) {
  // Sample use cases for each category
  const useCases = {
    social: [
      {
        title: "Instagram Posts",
        description: "Create eye-catching Arabic typography for your Instagram feed.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Facebook Cover Photos",
        description: "Design beautiful Arabic text for your social media headers.",
        image: "/placeholder.svg?height=300&width=600",
      },
      {
        title: "Twitter Graphics",
        description: "Stand out with elegant Arabic quotes and messages.",
        image: "/placeholder.svg?height=300&width=600",
      },
      {
        title: "Profile Pictures",
        description: "Create monogram-style Arabic initials for your profile.",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
    print: [
      {
        title: "Business Cards",
        description: "Add a touch of elegance with Arabic typography on your cards.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Wedding Invitations",
        description: "Create beautiful bilingual invitations with Arabic calligraphy.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Posters & Flyers",
        description: "Design eye-catching promotional materials with Arabic text.",
        image: "/placeholder.svg?height=300&width=500",
      },
      {
        title: "Greeting Cards",
        description: "Personalize your cards with beautiful Arabic messages.",
        image: "/placeholder.svg?height=300&width=500",
      },
    ],
    web: [
      {
        title: "Website Headers",
        description: "Create stunning Arabic typography for your website banners.",
        image: "/placeholder.svg?height=300&width=600",
      },
      {
        title: "Logos & Branding",
        description: "Design unique Arabic text logos for your business.",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        title: "Email Signatures",
        description: "Add a professional touch with Arabic typography.",
        image: "/placeholder.svg?height=300&width=600",
      },
      {
        title: "Blog Graphics",
        description: "Enhance your content with beautiful Arabic pull quotes.",
        image: "/placeholder.svg?height=300&width=600",
      },
    ],
    art: [
      {
        title: "Wall Art",
        description: "Create beautiful Arabic calligraphy prints for your home.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Custom Gifts",
        description: "Design personalized items with meaningful Arabic phrases.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "T-Shirt Designs",
        description: "Create unique Arabic typography for clothing and merchandise.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Digital Wallpapers",
        description: "Design beautiful Arabic backgrounds for your devices.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  }

  const currentUseCases = useCases[category as keyof typeof useCases] || useCases.social

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-amber-800 mb-2">{title}</h3>
        <p className="text-amber-700 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentUseCases.map((useCase, index) => (
          <Card key={index} className="overflow-hidden border-amber-200 hover:shadow-md transition-shadow">
            <img src={useCase.image || "/placeholder.svg"} alt={useCase.title} className="w-full h-48 object-cover" />
            <CardContent className="p-4">
              <h4 className="font-bold text-amber-800 mb-1">{useCase.title}</h4>
              <p className="text-sm text-amber-700 mb-3">{useCase.description}</p>
              <Button variant="link" className="p-0 h-auto text-amber-600 hover:text-amber-800">
                See examples <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
