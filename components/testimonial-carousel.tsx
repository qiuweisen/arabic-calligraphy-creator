"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Graphic Designer",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "This calligraphy generator has transformed my design workflow. The variety of fonts and customization options are unmatched. I use it for all my Arabic typography needs now.",
      rating: 5,
    },
    {
      name: "Fatima Al-Zahra",
      role: "Wedding Planner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Creating beautiful invitations with Arabic text used to be a challenge. This tool makes it so easy! My clients love the elegant designs I can create in minutes.",
      rating: 5,
    },
    {
      name: "Mohammed Khalid",
      role: "Social Media Manager",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "I manage several Arabic-language social accounts, and this tool has been a game-changer. The templates are beautiful, and the export options are perfect for different platforms.",
      rating: 4,
    },
    {
      name: "Layla Ibrahim",
      role: "Art Teacher",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "I use this with my students to teach them about Arabic calligraphy. The interface is intuitive enough for beginners, but offers enough depth for more advanced projects.",
      rating: 5,
    },
    {
      name: "Omar Farooq",
      role: "Web Developer",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "The SVG export feature is fantastic for web projects. I can create beautiful Arabic typography and integrate it seamlessly into my clients' websites.",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, activeIndex])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-amber-100">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-4 w-4",
                              i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300",
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-amber-700 mb-4 italic">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-bold text-amber-800">{testimonial.name}</h4>
                        <p className="text-sm text-amber-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-amber-300 text-amber-800 hover:bg-amber-100"
          onClick={prevSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === activeIndex ? "bg-amber-600 w-4" : "bg-amber-300",
              )}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-amber-300 text-amber-800 hover:bg-amber-100"
          onClick={nextSlide}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
