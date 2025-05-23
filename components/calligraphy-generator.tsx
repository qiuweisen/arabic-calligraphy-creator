"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import {
  Download,
  Share2,
  Copy,
  RefreshCw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Palette,
  Type,
  Sliders,
  Info,
  ImageIcon,
  Bookmark,
  Menu,
  BookOpen,
  HelpCircle,
  ChevronRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMobile } from "@/hooks/use-mobile"
import { ArabicKeyboard } from "@/components/arabic-keyboard"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { TemplateBrowser } from "@/components/template-browser"
import { Drawer, DrawerContent } from "@/components/ui/drawer"
import { FontPreview } from "@/components/font-preview"
import { MobileFab } from "@/components/mobile-fab"

const ARABIC_FONTS = [
  { name: "Amiri", value: "'Amiri', serif", category: "Traditional" },
  { name: "Scheherazade", value: "'Scheherazade New', serif", category: "Traditional" },
  { name: "Noto Naskh Arabic", value: "'Noto Naskh Arabic', serif", category: "Traditional" },
  { name: "Aref Ruqaa", value: "'Aref Ruqaa', serif", category: "Diwani" },
  { name: "Reem Kufi", value: "'Reem Kufi', sans-serif", category: "Kufi" },
  { name: "Lateef", value: "'Lateef', cursive", category: "Nastaliq" },
  { name: "Mirza", value: "'Mirza', cursive", category: "Nastaliq" },
  { name: "Cairo", value: "'Cairo', sans-serif", category: "Modern" },
  { name: "Jomhuria", value: "'Jomhuria', display", category: "Display" },
  { name: "Rakkas", value: "'Rakkas', display", category: "Display" },
  { name: "Harmattan", value: "'Harmattan', sans-serif", category: "Modern" },
  { name: "Mada", value: "'Mada', sans-serif", category: "Modern" },
  { name: "Tajawal", value: "'Tajawal', sans-serif", category: "Modern" },
]

const BACKGROUND_PATTERNS = [
  { name: "None", value: "none" },
  {
    name: "Geometric",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    name: "Arabesque",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    name: "Islamic Patterns",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fillOpacity='0.05' fillRule='evenodd'/%3E%3C/svg%3E\")",
  },
  {
    name: "Dots",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fillOpacity='0.05' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
  },
]

// Common Arabic phrases for templates
const COMMON_PHRASES = [
  { text: "بسم الله الرحمن الرحيم", translation: "In the name of God, the Most Gracious, the Most Merciful" },
  { text: "الحمد لله", translation: "Praise be to God" },
  { text: "ما شاء الله", translation: "God has willed it" },
  { text: "سبحان الله", translation: "Glory be to God" },
  { text: "الله أكبر", translation: "God is Greater" },
  { text: "لا إله إلا الله", translation: "There is no deity but God" },
  { text: "استغفر الله", translation: "I seek forgiveness from God" },
  { text: "اللهم صل على محمد", translation: "O God, bless Muhammad" },
]

const DEFAULT_TEXT = "بسم الله الرحمن الرحيم"

export function CalligraphyGenerator() {
  const isMobile = useMobile()
  const [text, setText] = useState(DEFAULT_TEXT)
  const [font, setFont] = useState(ARABIC_FONTS[0].value)
  const [fontSize, setFontSize] = useState(48)
  const [textColor, setTextColor] = useState("#8B5A2B") // Amber brown
  const [useGradient, setUseGradient] = useState(false)
  const [gradientColors, setGradientColors] = useState({
    from: "#8B5A2B",
    to: "#D4AF37",
  })
  const [backgroundColor, setBackgroundColor] = useState("#FFFBF0") // Light cream
  const [backgroundImage, setBackgroundImage] = useState("")
  const [backgroundPattern, setBackgroundPattern] = useState(BACKGROUND_PATTERNS[0].value)
  const [alignment, setAlignment] = useState("center")
  const [letterSpacing, setLetterSpacing] = useState(0)
  const [lineHeight, setLineHeight] = useState(1.5)
  const [shadow, setShadow] = useState(false)
  const [shadowSettings, setShadowSettings] = useState({
    x: 2,
    y: 2,
    blur: 4,
    color: "rgba(0, 0, 0, 0.3)",
  })
  const [border, setBorder] = useState(false)
  const [borderColor, setBorderColor] = useState("#D4AF37") // Gold
  const [borderWidth, setBorderWidth] = useState(2)
  const [borderRadius, setBorderRadius] = useState(8)
  const [padding, setPadding] = useState(40)
  const [kashidaEnabled, setKashidaEnabled] = useState(false)
  const [kashidaLength, setKashidaLength] = useState(3)
  const [fontWeight, setFontWeight] = useState(400)
  const [fontStyle, setFontStyle] = useState("normal")
  const [favorites, setFavorites] = useState<Array<string>>([])
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Toggle keyboard visibility
  const toggleKeyboard = () => {
    setKeyboardVisible(!keyboardVisible)
  }

  // Handle text insertion from virtual keyboard
  const handleKeyPress = (char: string) => {
    setText((prev) => prev + char)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value || DEFAULT_TEXT)
  }

  const handleFontChange = (value: string) => {
    setFont(value)
  }

  const handleAlignmentChange = (value: string) => {
    setAlignment(value)
  }

  const handleBackgroundPatternChange = (value: string) => {
    setBackgroundPattern(value)
    // Clear background image if a pattern is selected
    if (value !== "none") {
      setBackgroundImage("")
    }
  }

  const handleFontWeightChange = (value: string) => {
    setFontWeight(Number.parseInt(value))
  }

  const handleFontStyleChange = (value: string) => {
    setFontStyle(value)
  }

  const toggleFavorite = (fontValue: string) => {
    setFavorites((prev) => {
      if (prev.includes(fontValue)) {
        return prev.filter((f) => f !== fontValue)
      } else {
        return [...prev, fontValue]
      }
    })
  }

  const handleBackgroundImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setBackgroundImage(e.target.result as string)
          // Clear pattern when image is uploaded
          setBackgroundPattern("none")
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleTemplateSelect = (template: { text: string; font?: string; color?: string; bg?: string }) => {
    setText(template.text)
    if (template.font) setFont(template.font)
    if (template.color) setTextColor(template.color)
    if (template.bg) setBackgroundColor(template.bg)
    setIsTemplateDialogOpen(false)

    toast({
      title: "Template Applied",
      description: "The selected template has been applied to your canvas.",
    })
  }

  const handleDownloadPNG = async () => {
    if (!previewRef.current) return

    try {
      toast({
        title: "Download Started",
        description: "Preparing your Arabic calligraphy as PNG...",
      })

      // Use html2canvas to convert DOM element to canvas
      const html2canvas = (await import('html2canvas')).default

      // Get the preview element
      const previewElement = previewRef.current

      // Get element dimensions
      const width = previewElement.offsetWidth
      const height = previewElement.offsetHeight

      // Set higher scale ratio for clearer image
      const pixelRatio = window.devicePixelRatio || 1
      const scaleFactor = 4 // Use high scale factor to ensure high resolution

      // Create temporary container to ensure styles are correctly applied
      const tempContainer = document.createElement('div')
      tempContainer.style.position = 'absolute'
      tempContainer.style.top = '-9999px'
      tempContainer.style.left = '-9999px'
      tempContainer.style.width = `${width}px`
      tempContainer.style.height = `${height}px`
      document.body.appendChild(tempContainer)

      // Clone preview element to temporary container
      const clone = previewElement.cloneNode(true) as HTMLElement
      tempContainer.appendChild(clone)

      // Ensure all styles are correctly applied to the cloned element
      const textElement = clone.querySelector('div[dir="rtl"]') as HTMLElement
      if (textElement) {
        textElement.style.fontFamily = font
        textElement.style.fontSize = `${fontSize}px`
        textElement.style.fontWeight = fontWeight.toString()
        textElement.style.fontStyle = fontStyle
        
        // Apply color or gradient
        if (useGradient) {
          textElement.style.background = `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`
          textElement.style.webkitBackgroundClip = 'text'
          textElement.style.webkitTextFillColor = 'transparent'
          textElement.style.backgroundClip = 'text'
        } else {
          textElement.style.color = textColor
        }

        // Apply text shadow (if enabled)
        if (shadow) {
          textElement.style.textShadow = `${shadowSettings.x}px ${shadowSettings.y}px ${shadowSettings.blur}px ${shadowSettings.color}`
        }
      }

      // Apply background styles
      clone.style.background = previewElement.style.background
      clone.style.backgroundColor = backgroundColor
      clone.style.backgroundImage = backgroundPattern !== 'none' ? backgroundPattern : ''
      if (backgroundImage) {
        clone.style.backgroundImage = `url(${backgroundImage})`
        clone.style.backgroundSize = 'cover'
        clone.style.backgroundPosition = 'center'
      }

      // Render high-resolution canvas
      const canvas = await html2canvas(clone, {
        backgroundColor: backgroundColor,
        scale: scaleFactor * pixelRatio, // Combine device pixel ratio for best results
        logging: false,
        useCORS: true,
        allowTaint: true,
        width: width,
        height: height,
      })

      // Clean up temporary element
      document.body.removeChild(tempContainer)

      // Convert canvas to PNG data URL with highest quality
      const dataUrl = canvas.toDataURL('image/png', 1.0)

      // Create download link
      const link = document.createElement('a')
      link.download = `arabic-calligraphy-${new Date().getTime()}.png`
      link.href = dataUrl
      link.click()

      toast({
        title: "Download Complete",
        description: "Your Arabic calligraphy has been downloaded as PNG.",
      })
    } catch (error) {
      console.error('PNG download failed:', error)
      toast({
        title: "Download Failed",
        description: "There was an error downloading your calligraphy. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDownloadSVG = async () => {
    if (!previewRef.current) return

    try {
      toast({
        title: "Download Started",
        description: "Preparing your Arabic calligraphy as SVG...",
      })

      // Get the preview element
      const previewElement = previewRef.current
      
      // Use html2canvas to capture the exact rendering of the preview element
      const html2canvas = (await import('html2canvas')).default
      
      // Set high resolution for the capture
      const pixelRatio = window.devicePixelRatio || 1
      const scaleFactor = 4 // Higher scale factor for better quality
      
      // Capture the preview with high resolution
      const canvas = await html2canvas(previewElement, {
        backgroundColor: backgroundColor,
        scale: scaleFactor * pixelRatio,
        logging: false,
        useCORS: true,
        allowTaint: true,
      })
      
      // Get dimensions
      const width = previewElement.offsetWidth
      const height = previewElement.offsetHeight
      
      // Create SVG namespace
      const svgNS = "http://www.w3.org/2000/svg"
      const xlinkNS = "http://www.w3.org/1999/xlink"
      
      // Create a new SVG document
      const svg = document.createElementNS(svgNS, "svg")
      svg.setAttribute("xmlns", svgNS)
      svg.setAttribute("width", width.toString())
      svg.setAttribute("height", height.toString())
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`)
      svg.setAttribute("xmlns:xlink", xlinkNS)
      
      // Create background rectangle
      const rect = document.createElementNS(svgNS, "rect")
      rect.setAttribute("width", "100%")
      rect.setAttribute("height", "100%")
      rect.setAttribute("fill", backgroundColor)
      svg.appendChild(rect)
      
      // Add the captured image to the SVG
      const image = document.createElementNS(svgNS, "image")
      image.setAttribute("width", "100%")
      image.setAttribute("height", "100%")
      image.setAttribute("xlink:href", canvas.toDataURL('image/png', 1.0))
      image.setAttribute("preserveAspectRatio", "none")
      svg.appendChild(image)
      
      // Add hidden text for accessibility and searchability
      const textElement = previewElement.querySelector('div[dir="rtl"]')
      if (textElement) {
        const metadata = document.createElementNS(svgNS, "metadata")
        metadata.textContent = `Arabic Calligraphy: ${textElement.textContent || ''}`
        svg.appendChild(metadata)
        
        // Add hidden text element with the actual text content
        const hiddenText = document.createElementNS(svgNS, "text")
        hiddenText.setAttribute("font-size", "0")
        hiddenText.setAttribute("visibility", "hidden")
        hiddenText.textContent = textElement.textContent || ''
        svg.appendChild(hiddenText)
      }
      
      // Convert SVG to string with proper XML declaration
      const serializer = new XMLSerializer()
      let svgString = serializer.serializeToString(svg)
      
      // Add XML declaration if not present
      if (!svgString.startsWith('<?xml')) {
        svgString = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgString
      }
      
      // Create Blob object with UTF-8 encoding
      const blob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'})
      
      // Create download link
      const link = document.createElement('a')
      link.download = `arabic-calligraphy-${new Date().getTime()}.svg`
      link.href = URL.createObjectURL(blob)
      link.click()
      
      // Clean up URL object
      setTimeout(() => URL.revokeObjectURL(link.href), 100)

      toast({
        title: "Download Complete",
        description: "Your Arabic calligraphy has been downloaded as SVG.",
      })
    } catch (error) {
      console.error('SVG download failed:', error)
      toast({
        title: "Download Failed",
        description: "There was an error downloading your calligraphy. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied to Clipboard",
        description: "Your text has been copied to clipboard.",
      })
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "There was an error copying to clipboard.",
        variant: "destructive",
      })
    }
  }

  const handleShare = async () => {
    if (!navigator.share) {
      toast({
        title: "Sharing Not Available",
        description: "Your browser doesn't support the Web Share API.",
        variant: "destructive",
      })
      return
    }

    try {
      await navigator.share({
        title: "Arabic Calligraphy",
        text: "Check out this beautiful Arabic calligraphy I created!",
      })
      toast({
        title: "Shared Successfully",
        description: "Your calligraphy has been shared.",
      })
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        toast({
          title: "Share Failed",
          description: "There was an error sharing your calligraphy.",
          variant: "destructive",
        })
      }
    }
  }

  const resetToDefaults = () => {
    setText(DEFAULT_TEXT)
    setFont(ARABIC_FONTS[0].value)
    setFontSize(48)
    setTextColor("#8B5A2B")
    setUseGradient(false)
    setGradientColors({ from: "#8B5A2B", to: "#D4AF37" })
    setBackgroundColor("#FFFBF0")
    setBackgroundImage("")
    setBackgroundPattern(BACKGROUND_PATTERNS[0].value)
    setAlignment("center")
    setLetterSpacing(0)
    setLineHeight(1.5)
    setShadow(false)
    setShadowSettings({ x: 2, y: 2, blur: 4, color: "rgba(0, 0, 0, 0.3)" })
    setBorder(false)
    setBorderColor("#D4AF37")
    setBorderWidth(2)
    setBorderRadius(8)
    setPadding(40)
    setKashidaEnabled(false)
    setKashidaLength(3)
    setFontWeight(400)
    setFontStyle("normal")

    toast({
      title: "Reset Complete",
      description: "All settings have been reset to defaults.",
    })
  }

  // Get text color style based on whether gradient is enabled
  const getTextColorStyle = () => {
    if (useGradient) {
      return {
        background: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        color: "transparent",
      }
    } else {
      return { color: textColor }
    }
  }

  // Get text shadow style
  const getTextShadowStyle = () => {
    if (shadow) {
      return `${shadowSettings.x}px ${shadowSettings.y}px ${shadowSettings.blur}px ${shadowSettings.color}`
    }
    return "none"
  }

  // Get background style based on pattern or image
  const getBackgroundStyle = () => {
    if (backgroundImage) {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    } else {
      return {
        backgroundColor,
        backgroundImage: backgroundPattern,
      }
    }
  }

  // Apply Kashida to text
  const getTextWithKashida = (inputText: string) => {
    if (!kashidaEnabled) return inputText

    // This is a simplified implementation of Kashida
    // In a real application, you would need a more sophisticated algorithm
    // that understands Arabic letter connectivity and proper placement
    return inputText.replace(/(\s)/g, (match) => {
      return match + "\u0640".repeat(kashidaLength)
    })
  }

  // Mobile UI Components
  const MobileControls = () => (
    <div className="flex items-center justify-between mb-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <div className="h-full py-4">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">Calligraphy Controls</h2>
            <Tabs defaultValue="text" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  <span>Text</span>
                </TabsTrigger>
                <TabsTrigger value="style" className="flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  <span>Style</span>
                </TabsTrigger>
                <TabsTrigger value="advanced" className="flex items-center gap-2">
                  <Sliders className="h-4 w-4" />
                  <span>Advanced</span>
                </TabsTrigger>
              </TabsList>

              <ScrollArea className="h-[calc(100vh-180px)]">
                {/* Tab content - reuse the desktop tab content */}
                <TabsContent value="text" className="space-y-4">
                  <TextTabContent />
                </TabsContent>

                <TabsContent value="style" className="space-y-4">
                  <StyleTabContent />
                </TabsContent>

                <TabsContent value="advanced" className="space-y-4">
                  <AdvancedTabContent />
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex gap-2">
        <Button variant="outline" size="icon" onClick={handleCopyToClipboard}>
          <Copy className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleShare}>
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleDownloadPNG} className="bg-amber-50 hover:bg-amber-100">
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  // Tab content components for reuse
  const TextTabContent = () => {
    // 使用useState和useEffect确保组件在客户端渲染时保持一致
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
      setMounted(true)
    }, [])
    
    // 在客户端渲染之前，返回一个简单的占位符
    if (!mounted) {
      return <div className="space-y-4 animate-pulse">
        <div className="h-[100px] bg-gray-100 rounded-md"></div>
        <div className="flex gap-4">
          <div className="h-10 bg-gray-100 rounded-md flex-1"></div>
          <div className="h-10 bg-gray-100 rounded-md flex-1"></div>
        </div>
        <div className="h-10 bg-gray-100 rounded-md"></div>
        <div className="h-10 bg-gray-100 rounded-md"></div>
      </div>
    }
    
    // 客户端渲染后显示完整内容
    return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="arabic-text">Arabic Text</Label>
          <Button variant="ghost" size="sm" onClick={toggleKeyboard} className="h-7 px-2">
            {keyboardVisible ? "Hide Keyboard" : "Show Keyboard"}
          </Button>
        </div>
        <Textarea
          id="arabic-text"
          dir="rtl"
          placeholder="Enter Arabic text here..."
          value={text}
          onChange={handleTextChange}
          className="min-h-[100px] font-arabic text-lg"
        />
        {keyboardVisible && (
          <div className="pt-2">
            <ArabicKeyboard onKeyPress={handleKeyPress} />
          </div>
        )}
      </div>

      <div className="flex justify-between gap-4">
        <Button
          variant="outline"
          className="flex-1 border-amber-200 hover:bg-amber-50"
          onClick={() => setIsTemplateDialogOpen(true)}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Templates
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-amber-200 hover:bg-amber-50"
          onClick={() => setText(DEFAULT_TEXT)}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Reset Text
        </Button>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="font-select">Font</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-7 px-2">
                Preview
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <FontPreview fonts={ARABIC_FONTS} sampleText={text || DEFAULT_TEXT} />
            </PopoverContent>
          </Popover>
        </div>
        <Select value={font} onValueChange={handleFontChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select font" />
          </SelectTrigger>
          <SelectContent>
            <div className="mb-2">
              <div className="px-2 py-1.5 text-sm font-medium text-amber-800">Categories</div>
              {Array.from(new Set(ARABIC_FONTS.map((font) => font.category))).map((category) => (
                <div key={category} className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{category}</div>
                  {ARABIC_FONTS.filter((font) => font.category === category).map((font) => (
                    <SelectItem key={font.name} value={font.value} className="py-1.5 flex justify-between">
                      <span>{font.name}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(font.value)
                        }}
                        className="text-amber-500 hover:text-amber-600"
                      >
                        {favorites.includes(font.value) ? (
                          <Bookmark className="h-4 w-4 fill-current" />
                        ) : (
                          <Bookmark className="h-4 w-4" />
                        )}
                      </button>
                    </SelectItem>
                  ))}
                </div>
              ))}

              {favorites.length > 0 && (
                <div className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">Favorites</div>
                  {ARABIC_FONTS.filter((font) => favorites.includes(font.value)).map((font) => (
                    <SelectItem key={`fav-${font.name}`} value={font.value}>
                      {font.name}
                    </SelectItem>
                  ))}
                </div>
              )}
            </div>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Font Size: {fontSize}px</Label>
        </div>
        <Slider
          value={[fontSize]}
          min={12}
          max={120}
          step={1}
          onValueChange={(value) => setFontSize(value[0])}
          className="[&>[role=slider]]:h-5 [&>[role=slider]]:w-5"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Font Weight</Label>
          <Select value={fontWeight.toString()} onValueChange={handleFontWeightChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="300">Light</SelectItem>
              <SelectItem value="400">Regular</SelectItem>
              <SelectItem value="500">Medium</SelectItem>
              <SelectItem value="700">Bold</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Font Style</Label>
          <Select value={fontStyle} onValueChange={handleFontStyleChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal">Normal</SelectItem>
              <SelectItem value="italic">Italic</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Alignment</Label>
        <div className="flex gap-2">
          <Button
            variant={alignment === "right" ? "default" : "outline"}
            size="icon"
            onClick={() => handleAlignmentChange("right")}
            className={alignment === "right" ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            <AlignRight className="h-4 w-4" />
          </Button>
          <Button
            variant={alignment === "center" ? "default" : "outline"}
            size="icon"
            onClick={() => handleAlignmentChange("center")}
            className={alignment === "center" ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant={alignment === "left" ? "default" : "outline"}
            size="icon"
            onClick={() => handleAlignmentChange("left")}
            className={alignment === "left" ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
  }

  const StyleTabContent = () => {
    // 使用useState和useEffect确保组件在客户端渲染时保持一致
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
      setMounted(true)
    }, [])
    
    // 在客户端渲染之前，返回一个简单的占位符
    if (!mounted) {
      return <div className="space-y-4 animate-pulse">
        <div className="h-10 bg-gray-100 rounded-md"></div>
        <div className="h-20 bg-gray-100 rounded-md"></div>
        <div className="h-10 bg-gray-100 rounded-md"></div>
        <div className="h-20 bg-gray-100 rounded-md"></div>
      </div>
    }
    
    // 客户端渲染后显示完整内容
    return (
    <>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="text-color">Text Color</Label>
          <div className="flex items-center gap-2">
            <Label htmlFor="use-gradient" className="text-sm font-normal">
              Gradient
            </Label>
            <Switch id="use-gradient" checked={useGradient} onCheckedChange={setUseGradient} />
          </div>
        </div>

        {!useGradient ? (
          <div className="flex gap-2">
            <input
              id="text-color"
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="w-10 h-10 rounded border border-input"
            />
            <input
              type="text"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="flex-1 px-3 py-2 border border-input rounded-md text-sm"
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="space-y-1 flex-1">
                <Label htmlFor="gradient-from" className="text-xs">
                  From
                </Label>
                <div className="flex gap-2">
                  <input
                    id="gradient-from"
                    type="color"
                    value={gradientColors.from}
                    onChange={(e) => setGradientColors((prev) => ({ ...prev, from: e.target.value }))}
                    className="w-6 h-6 rounded border border-input"
                  />
                  <input
                    type="text"
                    value={gradientColors.from}
                    onChange={(e) => setGradientColors((prev) => ({ ...prev, from: e.target.value }))}
                    className="flex-1 px-2 py-1 text-xs border border-input rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-1 flex-1">
                <Label htmlFor="gradient-to" className="text-xs">
                  To
                </Label>
                <div className="flex gap-2">
                  <input
                    id="gradient-to"
                    type="color"
                    value={gradientColors.to}
                    onChange={(e) => setGradientColors((prev) => ({ ...prev, to: e.target.value }))}
                    className="w-6 h-6 rounded border border-input"
                  />
                  <input
                    type="text"
                    value={gradientColors.to}
                    onChange={(e) => setGradientColors((prev) => ({ ...prev, to: e.target.value }))}
                    className="flex-1 px-2 py-1 text-xs border border-input rounded-md"
                  />
                </div>
              </div>
            </div>
            <div
              className="h-6 w-full rounded-md"
              style={{
                background: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.to})`,
              }}
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="background-color">Background</Label>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="background-color" className="text-xs">
              Color
            </Label>
            <div className="flex gap-2">
              <input
                id="background-color"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-8 h-8 rounded border border-input"
              />
              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 px-2 py-1 text-xs border border-input rounded-md"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Image / Pattern</Label>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={triggerFileInput} className="text-xs h-8 w-full">
                <ImageIcon className="h-3 w-3 mr-1" />
                Upload
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleBackgroundImageUpload}
                className="hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Background Pattern</Label>
        <Select value={backgroundPattern} onValueChange={handleBackgroundPatternChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select pattern" />
          </SelectTrigger>
          <SelectContent>
            {BACKGROUND_PATTERNS.map((pattern) => (
              <SelectItem key={pattern.name} value={pattern.value}>
                {pattern.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="text-shadow">Text Shadow</Label>
          <Switch id="text-shadow" checked={shadow} onCheckedChange={setShadow} />
        </div>
        {shadow && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="space-y-1">
              <Label className="text-xs">Horizontal</Label>
              <Slider
                value={[shadowSettings.x]}
                min={-10}
                max={10}
                step={1}
                onValueChange={(value) => setShadowSettings((prev) => ({ ...prev, x: value[0] }))}
              />
              <div className="text-xs text-center">{shadowSettings.x}px</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Vertical</Label>
              <Slider
                value={[shadowSettings.y]}
                min={-10}
                max={10}
                step={1}
                onValueChange={(value) => setShadowSettings((prev) => ({ ...prev, y: value[0] }))}
              />
              <div className="text-xs text-center">{shadowSettings.y}px</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Blur</Label>
              <Slider
                value={[shadowSettings.blur]}
                min={0}
                max={20}
                step={1}
                onValueChange={(value) => setShadowSettings((prev) => ({ ...prev, blur: value[0] }))}
              />
              <div className="text-xs text-center">{shadowSettings.blur}px</div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs">Color</Label>
              <div className="flex gap-1">
                <input
                  type="color"
                  value={shadowSettings.color.startsWith("rgba") ? "#000000" : shadowSettings.color}
                  onChange={(e) => {
                    // Convert hex to rgba
                    const hex = e.target.value
                    const r = Number.parseInt(hex.slice(1, 3), 16)
                    const g = Number.parseInt(hex.slice(3, 5), 16)
                    const b = Number.parseInt(hex.slice(5, 7), 16)
                    setShadowSettings((prev) => ({ ...prev, color: `rgba(${r}, ${g}, ${b}, 0.3)` }))
                  }}
                  className="w-8 h-8 rounded border border-input"
                />
                <Slider
                  value={[Number.parseFloat(shadowSettings.color.match(/[\d.]+\)$/)?.[0]?.replace(")", "") || "0.3")]}
                  min={0}
                  max={1}
                  step={0.1}
                  onValueChange={(value) => {
                    const opacity = value[0]
                    const colorMatch = shadowSettings.color.match(/rgba\((\d+),\s*(\d+),\s*(\d+)/)
                    if (colorMatch) {
                      const [, r, g, b] = colorMatch
                      setShadowSettings((prev) => ({
                        ...prev,
                        color: `rgba(${r}, ${g}, ${b}, ${opacity})`,
                      }))
                    }
                  }}
                  className="flex-1"
                />
              </div>
              <div className="text-xs text-center">
                Opacity:{" "}
                {Math.round(
                  Number.parseFloat(shadowSettings.color.match(/[\d.]+\)$/)?.[0]?.replace(")", "") || "0.3") * 100,
                )}
                %
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
  }

  const AdvancedTabContent = () => (
    <>
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Letter Spacing: {letterSpacing}px</Label>
        </div>
        <Slider
          value={[letterSpacing]}
          min={-5}
          max={20}
          step={0.5}
          onValueChange={(value) => setLetterSpacing(value[0])}
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Line Height: {lineHeight}</Label>
        </div>
        <Slider value={[lineHeight]} min={0.8} max={3} step={0.1} onValueChange={(value) => setLineHeight(value[0])} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="kashida-toggle">Kashida (Elongation)</Label>
          <Switch id="kashida-toggle" checked={kashidaEnabled} onCheckedChange={setKashidaEnabled} />
        </div>
        {kashidaEnabled && (
          <div className="pt-2">
            <Label className="text-xs">Length: {kashidaLength}</Label>
            <Slider
              value={[kashidaLength]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setKashidaLength(value[0])}
            />
            <div className="mt-2 p-2 bg-amber-50 rounded-md border border-amber-100">
              <p className="text-xs text-amber-800">
                Kashida adds elongation to certain Arabic letters, enhancing the aesthetic quality of text.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="border-toggle">Border</Label>
        <Switch id="border-toggle" checked={border} onCheckedChange={setBorder} />
      </div>

      {border && (
        <>
          <div className="space-y-2">
            <Label htmlFor="border-color">Border Color</Label>
            <div className="flex gap-2">
              <input
                id="border-color"
                type="color"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                className="w-10 h-10 rounded border border-input"
              />
              <input
                type="text"
                value={borderColor}
                onChange={(e) => setBorderColor(e.target.value)}
                className="flex-1 px-3 py-2 border border-input rounded-md text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Border Width: {borderWidth}px</Label>
            </div>
            <Slider
              value={[borderWidth]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setBorderWidth(value[0])}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Border Radius: {borderRadius}px</Label>
            </div>
            <Slider
              value={[borderRadius]}
              min={0}
              max={50}
              step={1}
              onValueChange={(value) => setBorderRadius(value[0])}
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Padding: {padding}px</Label>
        </div>
        <Slider value={[padding]} min={0} max={100} step={5} onValueChange={(value) => setPadding(value[0])} />
      </div>
    </>
  )

  // Mobile UI Component for Templates
  const MobileTemplateDrawer = () => (
    <Drawer open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
      <DrawerContent>
        <div className="px-4 py-6">
          <h2 className="text-xl font-semibold text-amber-800 mb-4 text-center">Featured Templates</h2>
          <div className="grid grid-cols-1 gap-4 max-h-[60vh] overflow-y-auto pb-6">
            {COMMON_PHRASES.map((phrase, index) => (
              <div
                key={index}
                className="p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow border border-amber-100 bg-gradient-to-r from-amber-50 to-white"
                onClick={() => handleTemplateSelect({ text: phrase.text })}
              >
                <div
                  dir="rtl"
                  className="text-center py-2 font-arabic"
                  style={{
                    fontFamily: ARABIC_FONTS[index % ARABIC_FONTS.length].value,
                    fontSize: "24px",
                    color: "#8B5A2B",
                  }}
                >
                  {phrase.text}
                </div>
                <div className="text-xs text-center text-amber-700 mt-2">{phrase.translation}</div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )

  return (
    <>
      {/* Desktop Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side panel - Controls */}
        <div className={cn("lg:col-span-1 space-y-6", isMobile && "hidden")}>
          <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="text" className="flex items-center gap-2">
                    <Type className="h-4 w-4" />
                    <span>Text</span>
                  </TabsTrigger>
                  <TabsTrigger value="style" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span>Style</span>
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="flex items-center gap-2">
                    <Sliders className="h-4 w-4" />
                    <span>Advanced</span>
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="h-[calc(100vh-320px)] min-h-[400px]">
                  <TabsContent value="text" className="space-y-4">
                    <TextTabContent />
                  </TabsContent>

                  <TabsContent value="style" className="space-y-4">
                    <StyleTabContent />
                  </TabsContent>

                  <TabsContent value="advanced" className="space-y-4">
                    <AdvancedTabContent />
                  </TabsContent>
                </ScrollArea>
              </Tabs>

              <div className="flex justify-between mt-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" onClick={resetToDefaults}>
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Reset to defaults</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Info className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="space-y-3">
                      <h3 className="font-medium">About Arabic Calligraphy</h3>
                      <p className="text-sm text-muted-foreground">
                        Arabic calligraphy (خط عربي) is the artistic practice of handwriting and calligraphy based on
                        the Arabic alphabet. It is known in Arabic as khatt, derived from the word 'line', 'design', or
                        'construction'.
                      </p>
                      <Separator />
                      <div className="pt-2 flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1 text-amber-600" />
                        <a
                          href="/blog/history-of-arabic-calligraphy"
                          className="text-sm text-amber-600 hover:underline"
                        >
                          Read more about Arabic calligraphy history
                        </a>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1 text-amber-600" />
                        <a href="/fonts" className="text-sm text-amber-600 hover:underline">
                          Explore our font collection
                        </a>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links for Desktop */}
          <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start border-amber-200" asChild>
                  <a href="/blog">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Blog
                  </a>
                </Button>
                <Button variant="outline" className="justify-start border-amber-200" asChild>
                  <a href="/faq">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    FAQ
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Preview Area */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* Mobile Controls */}
            {isMobile && <MobileControls />}

            {/* Preview Card */}
            <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-amber-800">Preview</h2>
                  {!isMobile && (
                    <div className="flex gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleCopyToClipboard}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy text</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleShare}>
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Share</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  )}
                </div>

                <div
                  ref={previewRef}
                  className="relative overflow-hidden transition-all duration-300 ease-in-out animate-in fade-in"
                  style={{
                    ...getBackgroundStyle(),
                    borderRadius: `${borderRadius}px`,
                    border: border ? `${borderWidth}px solid ${borderColor}` : "none",
                    padding: `${padding}px`,
                    minHeight: "200px",
                  }}
                >
                  <div
                    dir="rtl"
                    className={cn("transition-all duration-300 ease-in-out break-words")}
                    style={{
                      fontFamily: font,
                      fontSize: `${fontSize}px`,
                      fontWeight,
                      fontStyle,
                      ...getTextColorStyle(),
                      textAlign: alignment as "right" | "center" | "left",
                      letterSpacing: `${letterSpacing}px`,
                      lineHeight: lineHeight,
                      textShadow: getTextShadowStyle(),
                    }}
                  >
                    {getTextWithKashida(text || DEFAULT_TEXT)}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <Button onClick={handleDownloadPNG} className="bg-amber-600 hover:bg-amber-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG
                  </Button>
                  <Button
                    onClick={handleDownloadSVG}
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download SVG
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Templates Card */}
            <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-amber-800">Featured Designs</h2>
                  <Badge variant="outline" className="border-amber-200 text-amber-800">
                    Top Picks
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      text: "بسم الله الرحمن الرحيم",
                      font: ARABIC_FONTS[0].value,
                      color: "#8B4513",
                      bg: "#FFF8E1",
                    },
                    {
                      text: "الحمد لله",
                      font: ARABIC_FONTS[1].value,
                      color: "#006400",
                      bg: "#F0FFF0",
                    },
                    {
                      text: "سبحان الله",
                      font: ARABIC_FONTS[5].value,
                      color: "#4B0082",
                      bg: "#F8F4FF",
                    },
                    {
                      text: "الله أكبر",
                      font: ARABIC_FONTS[0].value,
                      color: "#800000",
                      bg: "#FFF0F0",
                    },
                  ].map((design, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow border border-amber-100"
                      style={{ backgroundColor: design.bg }}
                      onClick={() => {
                        setText(design.text)
                        setFont(design.font)
                        setTextColor(design.color)
                        setBackgroundColor(design.bg)
                        setUseGradient(false)

                        toast({
                          title: "Design Applied",
                          description: "The featured design has been applied to your canvas.",
                        })
                      }}
                    >
                      <div
                        dir="rtl"
                        className="text-center py-4"
                        style={{
                          fontFamily: design.font,
                          fontSize: "32px",
                          color: design.color,
                        }}
                      >
                        {design.text}
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="link" className="mt-4 text-amber-600 hover:text-amber-700" asChild>
                  <a href="#features">View All Templates</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* 移动端专用浮动操作按钮 */}
      {isMobile && (
        <MobileFab 
          onDownload={handleDownloadPNG}
          onCopy={handleCopyToClipboard}
          onShare={handleShare}
        />
      )}

      {/* Template Browser Dialog (Mobile) */}
      {isMobile && <MobileTemplateDrawer />}

      {/* Template Browser (Desktop) */}
      {!isMobile && (
        <TemplateBrowser
          isOpen={isTemplateDialogOpen}
          onClose={() => setIsTemplateDialogOpen(false)}
          onSelect={handleTemplateSelect}
          templates={COMMON_PHRASES.map((phrase, index) => ({
            text: phrase.text,
            translation: phrase.translation,
            font: ARABIC_FONTS[index % ARABIC_FONTS.length].value,
            color: ["#8B4513", "#006400", "#4B0082", "#800000", "#8B5A2B"][index % 5],
            bg: ["#FFF8E1", "#F0FFF0", "#F8F4FF", "#FFF0F0", "#FFFBF0"][index % 5],
          }))}
        />
      )}
    </>
  )
}
