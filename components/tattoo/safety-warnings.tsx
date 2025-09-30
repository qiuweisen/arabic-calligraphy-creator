"use client"

import { AlertTriangle, Shield, Heart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function TattooSafetyWarnings() {
  const safetyTips = [
    {
      icon: <AlertTriangle className="h-5 w-5 text-orange-600" />,
      title: "Verify Translation Accuracy",
      description: "Always double-check the meaning with native Arabic speakers or certified translators before tattooing."
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-600" />,
      title: "Choose Reputable Artists",
      description: "Select tattoo artists experienced with Arabic script and who understand the cultural significance."
    },
    {
      icon: <Heart className="h-5 w-5 text-red-600" />,
      title: "Consider Cultural Respect",
      description: "Ensure your chosen text is culturally appropriate and doesn't contain religious verses if you're not Muslim."
    },
    {
      icon: <Users className="h-5 w-5 text-green-600" />,
      title: "Research Placement",
      description: "Some Arabic phrases may have specific cultural associations with body placement."
    }
  ]

  return (
    <div className="py-12 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <Alert className="mb-8 border-orange-200 bg-orange-50">
          <AlertTriangle className="h-5 w-5 text-orange-600" />
          <AlertDescription className="text-orange-800 font-medium">
            <strong>Important:</strong> Arabic tattoos are permanent decisions that require careful consideration of translation accuracy and cultural respect.
          </AlertDescription>
        </Alert>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyTips.map((tip, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  {tip.icon}
                  <span className="text-gray-900">{tip.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Our tool helps you design beautiful Arabic calligraphy, but we strongly recommend consulting with 
            Arabic language experts and experienced tattoo artists before making your final decision.
          </p>
        </div>
      </div>
    </div>
  )
}