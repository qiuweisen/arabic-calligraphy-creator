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
  SlidersHorizontal,
  Edit,
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
import { useFontLoader } from "@/hooks/use-font-loader"
import { ArabicKeyboard } from "@/components/arabic-keyboard"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { TemplateBrowser } from "@/components/template-browser"
import { FontPreview } from "@/components/font-preview"
import { MobileFab } from "@/components/mobile-fab"
import { useTranslations } from 'next-intl'

// Helper function to generate canvas from preview
async function generatePreviewCanvas(
  previewElement: HTMLDivElement,
  options: {
    font: string;
    fontSize: number;
    fontWeight: number;
    fontStyle: string;
    textColor: string;
    useGradient: boolean;
    gradientColors: { from: string; to: string };
    shadow: boolean;
    shadowSettings: { x: number; y: number; blur: number; color: string };
    backgroundColor: string;
    backgroundImage: string;
    backgroundPattern: string;
    // Add other relevant style props here
  },
  scaleFactor: number = 2 
): Promise<HTMLCanvasElement | null> {
  if (!previewElement) {
    console.error("generatePreviewCanvas: Preview element is null.");
    return null;
  }

  try {
    const html2canvas = (await import('html2canvas')).default;
    const width = previewElement.offsetWidth;
    const height = previewElement.offsetHeight;
    const pixelRatio = window.devicePixelRatio || 1;

    const tempContainer = document.createElement('div');
    tempContainer.style.position = 'absolute';
    tempContainer.style.top = '-9999px'; // Off-screen
    tempContainer.style.left = '-9999px'; // Off-screen
    tempContainer.style.width = `${width}px`;
    tempContainer.style.height = `${height}px`;
    document.body.appendChild(tempContainer);

    const clone = previewElement.cloneNode(true) as HTMLElement;
    tempContainer.appendChild(clone);

    // Apply styles to the cloned element based on options
    const textElementClone = clone.querySelector('div[dir="rtl"]') as HTMLElement;
    if (textElementClone) {
      textElementClone.style.fontFamily = options.font;
      textElementClone.style.fontSize = `${options.fontSize}px`;
      textElementClone.style.fontWeight = options.fontWeight.toString();
      textElementClone.style.fontStyle = options.fontStyle;

      if (options.useGradient) {
        textElementClone.style.background = `linear-gradient(to right, ${options.gradientColors.from}, ${options.gradientColors.to})`;
        textElementClone.style.webkitBackgroundClip = 'text';
        textElementClone.style.webkitTextFillColor = 'transparent';
        textElementClone.style.backgroundClip = 'text';
        textElementClone.style.color = 'transparent'; // Important for gradient text
      } else {
        textElementClone.style.color = options.textColor;
      }

      if (options.shadow) {
        textElementClone.style.textShadow = `${options.shadowSettings.x}px ${options.shadowSettings.y}px ${options.shadowSettings.blur}px ${options.shadowSettings.color}`;
      }
    }
    
    // Background styles for the main cloned div
    clone.style.backgroundColor = options.backgroundColor;
    if (options.backgroundImage) {
      clone.style.backgroundImage = `url(${options.backgroundImage})`;
      clone.style.backgroundSize = 'cover'; // Ensure cover for uploaded images
      clone.style.backgroundPosition = 'center';
      clone.style.backgroundRepeat = 'no-repeat';
    } else if (options.backgroundPattern && options.backgroundPattern !== 'none') {
      clone.style.backgroundImage = options.backgroundPattern;
      // For patterns, default repeat is usually fine, or set specific repeat if needed
    } else {
      clone.style.backgroundImage = 'none'; // Explicitly remove if no image/pattern
    }


    const canvas = await html2canvas(clone, {
      backgroundColor: null, // Let the cloned element background prevail
      scale: scaleFactor * pixelRatio,
      logging: false,
      useCORS: true,
      allowTaint: true,
      width: width,
      height: height,
    });

    document.body.removeChild(tempContainer);
    return canvas;

  } catch (error) {
    console.error("Error generating canvas:", error);
    toast({ // Add toast here for generateCanvas failure
        title: "Image Generation Failed",
        description: "Could not generate the image. Please try again.",
        variant: "destructive",
    });
    return null;
  }
}

// Font definitions with category keys for translation
// 混合多样性排序：让用户在前几个选择中看到不同风格，提供更好的选择体验
const ARABIC_FONTS = [
  // 第1轮：经典热门字体，不同风格混合
  { name: "Amiri", value: "'Amiri', serif", category: "Traditional" },        // 传统经典
  { name: "Cairo", value: "'Cairo', sans-serif", category: "Modern" },        // 现代简洁
  { name: "Reem Kufi", value: "'Reem Kufi', sans-serif", category: "Kufi" },  // Kufi特色
  { name: "Jomhuria", value: "'Jomhuria', display", category: "Display" },    // 装饰醒目

  // 第2轮：优质备选，继续保持风格多样性
  { name: "Scheherazade", value: "'Scheherazade New', serif", category: "Traditional" }, // 传统优雅
  { name: "Tajawal", value: "'Tajawal', sans-serif", category: "Modern" },              // 现代清晰
  { name: "Aref Ruqaa", value: "'Aref Ruqaa', serif", category: "Diwani" },             // Diwani风格
  { name: "Rakkas", value: "'Rakkas', display", category: "Display" },                  // 装饰粗体

  // 第3轮：专业选择
  { name: "Noto Naskh Arabic", value: "'Noto Naskh Arabic', serif", category: "Traditional" }, // 传统标准
  { name: "Mada", value: "'Mada', sans-serif", category: "Modern" },                          // 现代实用
  { name: "Mirza", value: "'Mirza', cursive", category: "Nastaliq" },                         // Nastaliq风格
  { name: "Lemonada", value: "'Lemonada', display", category: "Display" },                    // 装饰圆润

  // 其他实用字体
  { name: "El Messiri", value: "'El Messiri', sans-serif", category: "Modern" },
  { name: "Harmattan", value: "'Harmattan', sans-serif", category: "Modern" },
  { name: "Lateef", value: "'Lateef', cursive", category: "Traditional" },
  { name: "Markazi Text", value: "'Markazi Text', serif", category: "Traditional" },
  { name: "Marhey", value: "'Marhey', display", category: "Display" },
]

// Background patterns with translation keys
const BACKGROUND_PATTERNS = [
  { nameKey: "None", value: "none" },
  {
    nameKey: "Geometric",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    nameKey: "Arabesque",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
  },
  {
    nameKey: "Islamic Patterns",
    value:
      "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fillOpacity='0.05' fillRule='evenodd'/%3E%3C/svg%3E\")",
  },
  {
    nameKey: "Dots",
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

// Sample text for font preview in selector
const FONT_PREVIEW_TEXT = "بسم الله"

// Font name mapping for external integration
const FONT_NAME_MAP: Record<string, string> = {
  'Amiri': "'Amiri', serif",
  'Scheherazade': "'Scheherazade New', serif", 
  'Scheherazade New': "'Scheherazade New', serif",
  'Noto Naskh Arabic': "'Noto Naskh Arabic', serif",
  'Aref Ruqaa': "'Aref Ruqaa', serif",
  'Reem Kufi': "'Reem Kufi', sans-serif",
  'Lateef': "'Lateef', cursive",
  'Mirza': "'Mirza', cursive",
  'Cairo': "'Cairo', sans-serif",
  'Jomhuria': "'Jomhuria', display",
  'Rakkas': "'Rakkas', display",
  'Harmattan': "'Harmattan', sans-serif",
  'Mada': "'Mada', sans-serif",
  'Tajawal': "'Tajawal', sans-serif",
  'El Messiri': "'El Messiri', sans-serif",
  'Lemonada': "'Lemonada', display",
  'Marhey': "'Marhey', display",
  'Markazi Text': "'Markazi Text', serif"
}

interface CalligraphyGeneratorProps {
  initialFont?: string
  onFontChange?: (fontName: string) => void
}

export function CalligraphyGenerator({ initialFont, onFontChange }: CalligraphyGeneratorProps = {}) {
  const t = useTranslations('generator')
  const isMobile = useMobile()
  const { loadFont, isFontLoaded, isFontLoading } = useFontLoader()
  const [text, setText] = useState(DEFAULT_TEXT)
  
  // Initialize font based on initialFont prop or default
  const getInitialFont = () => {
    if (initialFont && FONT_NAME_MAP[initialFont]) {
      return FONT_NAME_MAP[initialFont]
    }
    return ARABIC_FONTS[0].value
  }
  
  const [font, setFont] = useState(() => getInitialFont())
  const [fontSize, setFontSize] = useState(48)
  const [textColor, setTextColor] = useState("#8B5A2B") // Amber brown
  const [useGradient, setUseGradient] = useState(false)
  const [gradientColors, setGradientColors] = useState({
    from: "#8B5A2B",
    to: "#D4AF37",
  })
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF") // Light cream -> Default to white
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
  const [isControlsSheetOpen, setIsControlsSheetOpen] = useState(false)

  // 追踪用户是否已开始编辑（避免重复追踪）
  const [hasStartedEditing, setHasStartedEditing] = useState(false)
  const [hasOpenedActions, setHasOpenedActions] = useState(false)

  const previewRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // 页面访问和工具初始化追踪，预加载默认字体
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
      (window as any).trackCalligraphyEvent('Tool_Initialized', {
        step: '0_page_access',
        user_agent: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop',
        initial_load: true
      });
    }

    // 暂时禁用预加载，只在用户选择字体时才加载
    // 这样可以避免页面加载时的字体错误
    console.log('Font loader initialized, fonts will load on demand')
  }, [loadFont])



  // Handle external font changes
  useEffect(() => {
    if (initialFont && FONT_NAME_MAP[initialFont]) {
      const fontValue = FONT_NAME_MAP[initialFont]
      
      if (fontValue !== font) {
        setFont(fontValue)
        // Load the font asynchronously
        loadFont(fontValue).catch(error => {
          console.error('Failed to load external font:', error)
        })
      }
    }
  }, [initialFont, font, loadFont])

  // Toggle keyboard visibility
  const toggleKeyboard = () => {
    setKeyboardVisible(!keyboardVisible)
  }

  // Handle text insertion from virtual keyboard
  const handleKeyPress = (char: string) => {
    setText((prev) => prev + char)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value || DEFAULT_TEXT
    setText(newText)
    
    // 追踪文本输入事件
    if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
      (window as any).trackCalligraphyEvent('Text_Input', {
        step: '1_text_customization',
        text_length: newText.length,
        is_default: newText === DEFAULT_TEXT,
        has_content: newText.trim().length > 0
      });
    }
  }

  const handleFontChange = async (value: string) => {
    // 立即更新字体状态，使用fallback字体显示
    setFont(value)

    // 异步加载字体
    try {
      await loadFont(value)
    } catch (error) {
      console.error('Failed to load font:', error)
    }

    // Notify parent component of font change
    if (onFontChange) {
      const fontName = Object.keys(FONT_NAME_MAP).find(key => FONT_NAME_MAP[key] === value)
      if (fontName) {
        onFontChange(fontName)
      }
    }

    // 追踪字体选择事件
    if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
      const selectedFont = ARABIC_FONTS.find(f => f.value === value)
      ;(window as any).trackCalligraphyEvent('Font_Selected', {
        step: '2_font_selection',
        font_name: selectedFont?.name || 'Unknown',
        font_category: selectedFont?.category || 'Unknown',
        is_favorite: favorites.includes(value)
      });
    }
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

    // 增强模板使用事件追踪
    if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
      // 获取字体信息
      let fontName = 'Unknown'
      let fontCategory = 'Unknown'

      if (template.font) {
        const fontInfo = ARABIC_FONTS.find(f => f.value === template.font)
        if (fontInfo) {
          fontName = fontInfo.name
          fontCategory = fontInfo.category
        }
      }

      (window as any).trackCalligraphyEvent('Template_Used', {
        templateText: template.text.substring(0, 20), // 前20个字符
        templateFont: template.font || 'default',
        font_name: fontName,
        font_category: fontCategory,
        selection_method: 'featured_template',
        previous_font: font, // 用户之前选择的字体
        device_type: window.innerWidth >= 1024 ? 'desktop' : 'mobile'
      });
    }

    toast({
      title: t('toasts.templateApplied'),
      description: t('toasts.templateAppliedDesc'),
    })
  }

  const handleDownloadPNG = async () => {
    if (!previewRef.current) return;

    const currentOptions = {
      font, fontSize, fontWeight, fontStyle, textColor, useGradient, gradientColors,
      shadow, shadowSettings, backgroundColor, backgroundImage, backgroundPattern,
    };

    try {
      toast({
        title: t('toasts.downloadStarted'),
        description: t('toasts.preparingPNG'),
      });

      const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4); // Higher scale for download

      if (!canvas) {
        // Toast for canvas generation failure is handled in generatePreviewCanvas
        return;
      }

      const dataUrl = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.download = `arabic-calligraphy-${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();

      // 追踪下载事件
      if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
        (window as any).trackCalligraphyEvent('Download', {
          step: '5_conversion_download',
          format: 'PNG',
          font: font,
          fontSize: fontSize,
          hasGradient: useGradient,
          hasBackground: backgroundImage ? 'image' : backgroundPattern !== 'none' ? 'pattern' : 'color',
          conversion_type: 'download_png'
        });
      }

      toast({
        title: t('toasts.downloadComplete'),
        description: t('toasts.downloadCompletePNG'),
      });
    } catch (error) {
      console.error('PNG download failed:', error);
      // General error if canvas generation was successful but subsequent steps failed
      if (!(error instanceof Error && error.message.includes("generatePreviewCanvas"))) {
      toast({
        title: t('toasts.downloadFailed'),
        description: t('toasts.downloadError'),
        variant: "destructive",
          });
    }
  }
  };

  const handleDownloadSVG = async () => {
    if (!previewRef.current) return;
    
    const currentOptions = {
      font, fontSize, fontWeight, fontStyle, textColor, useGradient, gradientColors,
      shadow, shadowSettings, backgroundColor, backgroundImage, backgroundPattern,
    };

    try {
      toast({
        title: t('toasts.downloadStarted'),
        description: t('toasts.preparingSVG'),
      });

      const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 4); // Higher scale for embedded image

      if (!canvas) {
        return;
      }
      
      const width = previewRef.current.offsetWidth;
      const height = previewRef.current.offsetHeight;
      const svgNS = "http://www.w3.org/2000/svg";
      const xlinkNS = "http://www.w3.org/1999/xlink";
      
      const svg = document.createElementNS(svgNS, "svg");
      svg.setAttribute("xmlns", svgNS);
      svg.setAttribute("width", width.toString());
      svg.setAttribute("height", height.toString());
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
      svg.setAttribute("xmlns:xlink", xlinkNS);
      
      const rect = document.createElementNS(svgNS, "rect");
      rect.setAttribute("width", "100%");
      rect.setAttribute("height", "100%");
      // Use the actual background color from state for SVG background
      rect.setAttribute("fill", backgroundColor); 
      // If background image/pattern, it will be part of the embedded PNG from canvas
      svg.appendChild(rect);
      
      const image = document.createElementNS(svgNS, "image");
      image.setAttribute("width", "100%");
      image.setAttribute("height", "100%");
      image.setAttribute("xlink:href", canvas.toDataURL('image/png', 1.0));
      image.setAttribute("preserveAspectRatio", "none");
      svg.appendChild(image);
      
      const textContentForMeta = previewRef.current.querySelector('div[dir="rtl"]')?.textContent || text || DEFAULT_TEXT;
      const metadata = document.createElementNS(svgNS, "metadata");
      metadata.textContent = `Arabic Calligraphy: ${textContentForMeta}`;
      svg.appendChild(metadata);
      
      const hiddenText = document.createElementNS(svgNS, "text");
      hiddenText.setAttribute("font-size", "0"); // Make text invisible but selectable
      hiddenText.setAttribute("visibility", "hidden"); // Ensure it's not rendered visually
      hiddenText.textContent = textContentForMeta;
      svg.appendChild(hiddenText);
      
      const serializer = new XMLSerializer();
      let svgString = serializer.serializeToString(svg);
      if (!svgString.startsWith('<?xml')) {
        svgString = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n' + svgString
      }
      
      const blob = new Blob([svgString], {type: 'image/svg+xml;charset=utf-8'});
      const link = document.createElement('a');
      link.download = `arabic-calligraphy-${new Date().getTime()}.svg`;
      link.href = URL.createObjectURL(blob);
      link.click();
      setTimeout(() => URL.revokeObjectURL(link.href), 100);

      // 追踪SVG下载事件
      if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
        (window as any).trackCalligraphyEvent('Download', {
          step: '5_conversion_download',
          format: 'SVG',
          font: font,
          fontSize: fontSize,
          hasGradient: useGradient,
          hasBackground: backgroundImage ? 'image' : backgroundPattern !== 'none' ? 'pattern' : 'color',
          conversion_type: 'download_svg'
        });
      }

      toast({
        title: t('toasts.downloadComplete'),
        description: t('toasts.downloadCompleteSVG'),
      });
    } catch (error) {
      console.error('SVG download failed:', error);
      if (!(error instanceof Error && error.message.includes("generatePreviewCanvas"))) {
      toast({
        title: t('toasts.downloadFailed'),
        description: t('toasts.downloadError'),
        variant: "destructive",
          });
    }
  }
  };

  const handleCopyToClipboardImage = async () => {
    if (!previewRef.current) {
      toast({
        title: t('toasts.error'),
        description: t('toasts.previewNotFound'),
        variant: "destructive",
      });
      return;
    }

    const currentOptions = {
      font, fontSize, fontWeight, fontStyle, textColor, useGradient, gradientColors,
      shadow, shadowSettings, backgroundColor, backgroundImage, backgroundPattern,
    };

    try {
      toast({
        title: t('toasts.copyingImage'),
        description: t('toasts.copyingImageDesc'),
      });

      const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 2); // Moderate scale for clipboard

      if (!canvas) {
        return;
      }

      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            toast({
              title: t('toasts.imageCopied'),
              description: t('toasts.imageCopiedDesc'),
            });
          } catch (clipboardError) {
            console.error('Failed to copy image to clipboard:', clipboardError);
            toast({
              title: t('toasts.copyFailed'),
              description: t('toasts.copyFailedDesc'),
              variant: "destructive",
            });
          }
        } else {
          // This case should ideally be caught by generatePreviewCanvas returning null
          console.error("Image copy failed: Canvas toBlob produced null.");
          toast({
            title: t('toasts.copyError'),
            description: t('toasts.copyErrorDesc'),
            variant: "destructive",
          });
        }
      }, 'image/png', 0.95);

    } catch (error) {
      console.error('Image copy failed:', error);
      if (!(error instanceof Error && error.message.includes("generatePreviewCanvas"))) {
          toast({
            title: t('toasts.copyError'),
            description: t('toasts.copyErrorUnexpected'),
            variant: "destructive",
          });
      }
    }
  };

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: t('toasts.copiedToClipboard'),
        description: t('toasts.copiedToClipboardDesc'),
      })
    } catch (error) {
      toast({
        title: t('toasts.copyFailed'),
        description: t('toasts.copyFailedText'),
        variant: "destructive",
      })
    }
  }

  const handleShare = async () => {
    if (!previewRef.current) {
      toast({
        title: t('toasts.error'),
        description: t('toasts.previewNotFoundShare'),
        variant: "destructive",
      });
      return;
    }

    if (!navigator.share) {
      toast({
        title: t('toasts.sharingNotAvailable'),
        description: t('toasts.sharingNotAvailableDesc'),
        variant: "destructive",
      });
      return;
    }

    try {
      toast({
        title: t('toasts.preparingImage'),
        description: t('toasts.generatingImage'),
      });

      const currentOptions = {
        font, fontSize, fontWeight, fontStyle, textColor, useGradient, gradientColors,
        shadow, shadowSettings, backgroundColor, backgroundImage, backgroundPattern,
      };
      const canvas = await generatePreviewCanvas(previewRef.current, currentOptions, 2); // Moderate scale for sharing

      if (!canvas) {
        return;
      }
      
      canvas.toBlob(async (blob) => {
        if (blob) {
          const fileName = `arabic-calligraphy-${new Date().getTime()}.png`;
          const imageFile = new File([blob], fileName, { type: 'image/png' });
          const shareData: ShareData = {
            title: t('toasts.shareTitle'),
        text: t('toasts.shareText'),
            files: [imageFile],
          };

          // Check if files can be shared
          if (navigator.canShare && navigator.canShare({ files: [imageFile] })) {
            shareData.files = [imageFile];
          } else {
            // If files cannot be shared, we can share the URL if we had one, or just text. 
            // For now, we'll just proceed without files if not shareable, the OS might still pick up the text/title.
            toast({
              title: t('toasts.imageShareNotSupported'),
              description: t('toasts.imageShareNotSupportedDesc'),
              variant: "default", // Use default variant, not destructive
              duration: 5000,
            });
          }

          await navigator.share(shareData);
      toast({
        title: t('toasts.sharedSuccessfully'),
        description: t('toasts.sharedSuccessfullyDesc'),
          });
          
          // 追踪分享事件
          if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
            (window as any).trackCalligraphyEvent('Share', {
              step: '5_conversion_share',
              method: 'native',
              font: font,
              hasImage: !!shareData.files,
              conversion_type: 'share'
            });
          }
        } else {
          throw new Error('Canvas toBlob failed for sharing.');
        }
      }, 'image/png', 0.95);

    } catch (error) {
      // Check if user cancelled the share operation
      if ((error as Error).name === "AbortError" || 
          (error as Error).message?.includes("canceled") || 
          (error as Error).message?.includes("cancelled")) {
        // User cancelled share, no error toast needed
        console.log('User cancelled share operation');
        return;
      }
      
      console.error('Share failed:', error);
        toast({
          title: t('toasts.shareFailed'),
        description: t('toasts.shareFailedDesc'),
          variant: "destructive",
      });
      }
  };

  const resetToDefaults = () => {
    setText(DEFAULT_TEXT)
    setFont(ARABIC_FONTS[0].value)
    setFontSize(48)
    setTextColor("#8B5A2B")
    setUseGradient(false)
    setGradientColors({ from: "#8B5A2B", to: "#D4AF37" })
    setBackgroundColor("#FFFFFF") // Light cream -> Default to white
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
      title: t('toasts.resetComplete'),
      description: t('toasts.resetCompleteDesc'),
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
    <>
      <Drawer open={isControlsSheetOpen} onOpenChange={setIsControlsSheetOpen}>
        <DrawerContent className="h-[85vh] md:hidden">
          <div className="h-full flex flex-col">
            <DrawerHeader className="border-b border-amber-200">
              <DrawerTitle className="text-xl font-semibold text-amber-800 text-center">{t('ui.calligraphyControls')}</DrawerTitle>
            </DrawerHeader>
            <Tabs defaultValue="text" className="w-full flex-grow flex flex-col">
              <TabsList className="grid grid-cols-3 m-4 mb-0">
                <TabsTrigger value="text" className="flex items-center gap-2"><Type className="h-4 w-4" /><span>{t('ui.text')}</span></TabsTrigger>
                <TabsTrigger value="style" className="flex items-center gap-2"><Palette className="h-4 w-4" /><span>{t('ui.style')}</span></TabsTrigger>
                <TabsTrigger value="advanced" className="flex items-center gap-2"><Sliders className="h-4 w-4" /><span>{t('ui.advanced')}</span></TabsTrigger>
              </TabsList>
              <ScrollArea className="flex-grow p-4">
                <TabsContent value="text" className="space-y-6 mt-0"><TextTabContent /></TabsContent>
                <TabsContent value="style" className="space-y-6 mt-0"><StyleTabContent /></TabsContent>
                <TabsContent value="advanced" className="space-y-6 mt-0"><AdvancedTabContent /></TabsContent>
              </ScrollArea>
            </Tabs>
          </div>
        </DrawerContent>
      </Drawer>
    </>
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
      return <div className="space-y-6 animate-pulse">
        <div className="h-[100px] bg-gray-100 rounded-md"></div>
        <div className="flex gap-4">
          <div className="h-12 bg-gray-100 rounded-md flex-1"></div>
          <div className="h-12 bg-gray-100 rounded-md flex-1"></div>
        </div>
        <div className="h-12 bg-gray-100 rounded-md"></div>
        <div className="h-12 bg-gray-100 rounded-md"></div>
      </div>
    }
    
    // 客户端渲染后显示完整内容
    return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="arabic-text" className="text-base font-medium">{t('textTab.arabicText')}</Label>
          <Button variant="ghost" size="sm" onClick={toggleKeyboard} className="h-8 px-3 text-sm">
            {keyboardVisible ? t('textTab.hideKeyboard') : t('textTab.showKeyboard')}
          </Button>
        </div>
        <Textarea
          id="arabic-text"
          dir="rtl"
          placeholder={t('textTab.placeholder')}
          value={text}
          onChange={handleTextChange}
          className="min-h-[120px] font-arabic text-lg p-4 touch-manipulation"
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
          className="flex-1 h-12 border-amber-200 hover:bg-amber-50 touch-manipulation"
          onClick={() => setIsTemplateDialogOpen(true)}
        >
          <Sparkles className="mr-2 h-5 w-5" />
          {t('textTab.templates')}
        </Button>
        <Button
          variant="outline"
          className="flex-1 h-12 border-amber-200 hover:bg-amber-50 touch-manipulation"
          onClick={() => setText(DEFAULT_TEXT)}
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          {t('textTab.resetText')}
        </Button>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label htmlFor="font-select" className="text-base font-medium">{t('textTab.font')}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 px-3 text-sm">
                {t('textTab.preview')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80" align="end">
              <FontPreview fonts={ARABIC_FONTS} sampleText={text || DEFAULT_TEXT} />
            </PopoverContent>
          </Popover>
        </div>
        <Select value={font} onValueChange={handleFontChange}>
          <SelectTrigger className="w-full h-12 touch-manipulation">
            <SelectValue placeholder={t('textTab.selectFont')} />
          </SelectTrigger>
          <SelectContent>
            <div className="mb-2">
              <div className="px-2 py-1.5 text-sm font-medium text-amber-800">{t('textTab.categories')}</div>
              {Array.from(new Set(ARABIC_FONTS.map((font) => font.category))).map((category) => (
                <div key={category} className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{t(`fontCategories.${category}`)}</div>
                  {ARABIC_FONTS.filter((font) => font.category === category).map((font) => (
                    <SelectItem key={font.name} value={font.value} className="py-4 min-h-[70px]">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col gap-1 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">{font.name}</span>
                            {isFontLoading(font.value) && (
                              <div className="w-3 h-3 border border-amber-600 border-t-transparent rounded-full animate-spin" />
                            )}
                            {isFontLoaded(font.value) && !isFontLoading(font.value) && (
                              <div className="w-2 h-2 bg-green-500 rounded-full" />
                            )}
                          </div>
                          <div
                            style={{
                              fontFamily: font.value,
                              fontSize: '18px',
                              lineHeight: '1.2'
                            }}
                            dir="rtl"
                            className="text-amber-800 font-medium"
                          >
                            {FONT_PREVIEW_TEXT}
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(font.value)
                          }}
                          className="text-amber-500 hover:text-amber-600 p-1 ml-2"
                        >
                          {favorites.includes(font.value) ? (
                            <Bookmark className="h-4 w-4 fill-current" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </SelectItem>
                  ))}
                </div>
              ))}

              {favorites.length > 0 && (
                <div className="px-2 py-1">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">{t('ui.favorites')}</div>
                  {ARABIC_FONTS.filter((font) => favorites.includes(font.value)).map((font) => (
                    <SelectItem key={`fav-${font.name}`} value={font.value} className="py-4 min-h-[70px]">
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-gray-700">{font.name}</span>
                          {isFontLoading(font.value) && (
                            <div className="w-3 h-3 border border-amber-600 border-t-transparent rounded-full animate-spin" />
                          )}
                          {isFontLoaded(font.value) && !isFontLoading(font.value) && (
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                          )}
                        </div>
                        <div
                          style={{
                            fontFamily: font.value,
                            fontSize: '18px',
                            lineHeight: '1.2'
                          }}
                          dir="rtl"
                          className="text-amber-800 font-medium"
                        >
                          {FONT_PREVIEW_TEXT}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </div>
              )}
            </div>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label className="text-base font-medium">{t('textTab.fontSize')}: {fontSize}px</Label>
        </div>
        <div className="px-2">
        <Slider
          value={[fontSize]}
          min={12}
          max={120}
          step={1}
            onValueChange={(value) => handleFontSizeChange(value[0])}
            className="[&>[role=slider]]:h-6 [&>[role=slider]]:w-6 [&>[role=slider]]:touch-manipulation"
        />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label className="text-base font-medium">{t('ui.fontWeight')}</Label>
          <Select value={fontWeight.toString()} onValueChange={handleFontWeightChange}>
            <SelectTrigger className="h-12 touch-manipulation">
              <SelectValue placeholder={t('ui.selectWeight')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="300" className="py-3 min-h-[44px]">{t('ui.light')}</SelectItem>
              <SelectItem value="400" className="py-3 min-h-[44px]">{t('ui.regular')}</SelectItem>
              <SelectItem value="500" className="py-3 min-h-[44px]">{t('ui.medium')}</SelectItem>
              <SelectItem value="700" className="py-3 min-h-[44px]">{t('ui.bold')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label className="text-base font-medium">{t('ui.fontStyle')}</Label>
          <Select value={fontStyle} onValueChange={handleFontStyleChange}>
            <SelectTrigger className="h-12 touch-manipulation">
              <SelectValue placeholder={t('ui.selectStyle')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="normal" className="py-3 min-h-[44px]">{t('ui.normal')}</SelectItem>
              <SelectItem value="italic" className="py-3 min-h-[44px]">{t('ui.italic')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-base font-medium">{t('ui.alignment')}</Label>
        <div className="flex gap-2">
          <Button
            variant={alignment === "right" ? "default" : "outline"}
            size="lg"
            onClick={() => handleAlignmentChange("right")}
            className={cn("flex-1 h-12 touch-manipulation", alignment === "right" ? "bg-amber-600 hover:bg-amber-700" : "")}
          >
            <AlignRight className="h-5 w-5" />
          </Button>
          <Button
            variant={alignment === "center" ? "default" : "outline"}
            size="lg"
            onClick={() => handleAlignmentChange("center")}
            className={cn("flex-1 h-12 touch-manipulation", alignment === "center" ? "bg-amber-600 hover:bg-amber-700" : "")}
          >
            <AlignCenter className="h-5 w-5" />
          </Button>
          <Button
            variant={alignment === "left" ? "default" : "outline"}
            size="lg"
            onClick={() => handleAlignmentChange("left")}
            className={cn("flex-1 h-12 touch-manipulation", alignment === "left" ? "bg-amber-600 hover:bg-amber-700" : "")}
          >
            <AlignLeft className="h-5 w-5" />
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
          <Label htmlFor="text-color">{t('ui.textColor')}</Label>
          <div className="flex items-center gap-2">
            <Label htmlFor="use-gradient" className="text-sm font-normal">
              {t('ui.gradient')}
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
              onChange={(e) => handleTextColorChange(e.target.value)}
              className="w-10 h-10 rounded border border-input"
            />
            <input
              type="text"
              value={textColor}
              onChange={(e) => handleTextColorChange(e.target.value)}
              className="flex-1 px-3 py-2 border border-input rounded-md text-sm"
            />
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex gap-2">
              <div className="space-y-1 flex-1">
                <Label htmlFor="gradient-from" className="text-xs">
                  {t('ui.from')}
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
                  {t('ui.to')}
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
        <Label htmlFor="background-color">{t('ui.background')}</Label>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label htmlFor="background-color" className="text-xs">
              {t('ui.color')}
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
            <Label className="text-xs">{t('ui.image')} / {t('ui.pattern')}</Label>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={triggerFileInput} className="text-xs h-8 w-full">
                <ImageIcon className="h-3 w-3 mr-1" />
                {t('ui.upload')}
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
        <Label>{t('ui.backgroundPattern')}</Label>
        <Select value={backgroundPattern} onValueChange={handleBackgroundPatternChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={t('ui.selectPattern')} />
          </SelectTrigger>
          <SelectContent>
            {BACKGROUND_PATTERNS.map((pattern) => (
              <SelectItem key={pattern.nameKey} value={pattern.value}>
                {t(`backgroundPatterns.${pattern.nameKey}`)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="text-shadow">{t('ui.textShadow')}</Label>
          <Switch id="text-shadow" checked={shadow} onCheckedChange={setShadow} />
        </div>
        {shadow && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="space-y-1">
              <Label className="text-xs">{t('ui.horizontal')}</Label>
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
              <Label className="text-xs">{t('ui.vertical')}</Label>
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
              <Label className="text-xs">{t('ui.blur')}</Label>
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
              <Label className="text-xs">{t('ui.color')}</Label>
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
                {t('ui.opacity')}:{" "}
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
          <Label>{t('ui.letterSpacing')}: {letterSpacing}px</Label>
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
          <Label>{t('ui.lineHeight')}: {lineHeight}</Label>
        </div>
        <Slider value={[lineHeight]} min={0.8} max={3} step={0.1} onValueChange={(value) => setLineHeight(value[0])} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="kashida-toggle">{t('ui.kashida')}</Label>
          <Switch id="kashida-toggle" checked={kashidaEnabled} onCheckedChange={setKashidaEnabled} />
        </div>
        {kashidaEnabled && (
          <div className="pt-2">
            <Label className="text-xs">{t('ui.length')}: {kashidaLength}</Label>
            <Slider
              value={[kashidaLength]}
              min={1}
              max={10}
              step={1}
              onValueChange={(value) => setKashidaLength(value[0])}
            />
            <div className="mt-2 p-2 bg-amber-50 rounded-md border border-amber-100">
              <p className="text-xs text-amber-800">
                {t('ui.kashidaDesc')}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="border-toggle">{t('ui.border')}</Label>
        <Switch id="border-toggle" checked={border} onCheckedChange={setBorder} />
      </div>

      {border && (
        <>
          <div className="space-y-2">
            <Label htmlFor="border-color">{t('ui.borderColor')}</Label>
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
              <Label>{t('ui.borderWidth')}: {borderWidth}px</Label>
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
              <Label>{t('ui.borderRadius')}: {borderRadius}px</Label>
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
          <Label>{t('ui.padding')}: {padding}px</Label>
        </div>
        <Slider value={[padding]} min={0} max={100} step={5} onValueChange={(value) => setPadding(value[0])} />
      </div>
    </>
  )

  // Mobile UI Component for Templates
  const MobileTemplateDrawer = () => (
    <Drawer open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-semibold text-amber-800 text-center">{t('ui.featuredTemplates')}</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-6">
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
                <div className="text-xs text-center text-amber-700 mt-2">
                  {t(`commonPhrases.${['bismillah', 'alhamdulillah', 'mashallah', 'subhanallah', 'allahuakbar', 'lailahaillallah', 'astaghfirullah', 'allahummasalli'][index]}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )

  // 处理编辑开始事件
  const handleEditStart = () => {
    setIsControlsSheetOpen(true)
    
    // 首次点击编辑时追踪
    if (!hasStartedEditing && typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
      (window as any).trackCalligraphyEvent('Edit_Start', {
        step: '1_edit_button_clicked',
        first_interaction: true
      });
      setHasStartedEditing(true)
    }
  }

  const handleStyleChange = (changeType: string, value: any) => {
    // 追踪样式调整事件
    if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
      (window as any).trackCalligraphyEvent('Style_Adjusted', {
        step: '3_style_customization',
        change_type: changeType,
        new_value: value
      });
    }
  }

  // 扩展现有的处理函数
  const handleFontSizeChange = (value: number) => {
    setFontSize(value)
    handleStyleChange('font_size', value)
  }

  const handleTextColorChange = (color: string) => {
    setTextColor(color)
    handleStyleChange('text_color', color)
  }

  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color)
    handleStyleChange('background_color', color)
  }

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
                    <span>{t('tabs.text')}</span>
                  </TabsTrigger>
                  <TabsTrigger value="style" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span>{t('tabs.style')}</span>
                  </TabsTrigger>
                  <TabsTrigger value="advanced" className="flex items-center gap-2">
                    <Sliders className="h-4 w-4" />
                    <span>{t('tabs.advanced')}</span>
                  </TabsTrigger>
                </TabsList>

                <ScrollArea className="h-[600px] lg:h-[calc(100vh-320px)] lg:min-h-[500px]">
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
                      <h3 className="font-medium">{t('ui.aboutArabicCalligraphy')}</h3>
                      <p className="text-sm text-muted-foreground">
                        {t('ui.aboutArabicCalligraphyDesc')}
                      </p>
                      <Separator />
                      <div className="pt-2 flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1 text-amber-600" />
                        <a
                          href="/blog/the-rich-history-of-arabic-calligraphy"
                          className="text-sm text-amber-600 hover:underline"
                        >
                          {t('ui.readMoreHistory')}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-1 text-amber-600" />
                        <a href="/fonts" className="text-sm text-amber-600 hover:underline">
                          {t('ui.exploreFonts')}
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
              <h3 className="text-lg font-semibold text-amber-800 mb-3">{t('quickLinks.title')}</h3>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start border-amber-200" asChild>
                  <a href="/blog">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {t('quickLinks.blog')}
                  </a>
                </Button>
                <Button variant="outline" className="justify-start border-amber-200" asChild>
                  <a href="/faq">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    {t('quickLinks.faq')}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right side - Preview Area */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {/* MobileControls component now renders the mobile control drawer */}
            {isMobile && <MobileControls />}

            {/* Preview Card */}
            <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-amber-800">{t('preview.title')}</h2>
                  {!isMobile && (
                    <div className="flex gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleCopyToClipboardImage}>
                              <Copy className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent><p>Copy text</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline" size="icon" onClick={handleShare}>
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent><p>Share</p></TooltipContent>
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
                    {t('preview.downloadPNG')}
                  </Button>
                  <Button
                    onClick={handleDownloadSVG}
                    variant="outline"
                    className="border-amber-600 text-amber-600 hover:bg-amber-50"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    {t('preview.downloadSVG')}
                  </Button>
                  <Button
                    onClick={() => {
                      window.open('https://www.buymeacoffee.com/arabiccalligraphy', '_blank')
                      // 追踪赞助点击事件
                      if (typeof window !== 'undefined' && (window as any).trackCalligraphyEvent) {
                        (window as any).trackCalligraphyEvent('Support_Click', {
                          action: 'sponsor_button_click',
                          source: 'download_section'
                        })
                      }
                    }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {t('sponsor.supportButton')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Templates Card */}
            <Card className="overflow-hidden border-amber-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-amber-800">{t('featuredDesigns.title')}</h2>
                  <Badge variant="outline" className="border-amber-200 text-amber-800">
                    {t('featuredDesigns.topPicks')}
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      text: "بسم الله الرحمن الرحيم",
                      font: ARABIC_FONTS[0].value, // Amiri (Traditional)
                      color: "#8B4513",
                      bg: "#FFF8E1",
                    },
                    {
                      text: "الحمد لله",
                      font: ARABIC_FONTS[7].value, // Cairo (Modern)
                      color: "#006400",
                      bg: "#F0FFF0",
                    },
                    {
                      text: "سبحان الله",
                      font: ARABIC_FONTS[4].value, // Reem Kufi (Kufi)
                      color: "#4B0082",
                      bg: "#F8F4FF",
                    },
                    {
                      text: "الله أكبر",
                      font: ARABIC_FONTS[3].value, // Aref Ruqaa (Diwani)
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
                          title: t('toasts.designApplied'),
                          description: t('toasts.designAppliedDesc'),
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
                  <a href="#features">{t('ui.viewAllTemplates')}</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit controls button - fixed bottom left for mobile */}
      {isMobile && (
        <Button
          size="icon"
          className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full shadow-lg bg-amber-600 hover:bg-amber-700 text-white md:hidden"
          onClick={handleEditStart}
          aria-label="Open Edit Panel"
        >
          <Edit className="h-6 w-6" />
        </Button>
      )}

      {/* MobileFab for quick actions - fixed bottom right for mobile */}
      {isMobile && (
        <MobileFab 
          onDownload={handleDownloadPNG}
          onCopy={handleCopyToClipboardImage}
          onShare={handleShare}
        />
      )}

      {/* Template Browser Dialogs/Drawers */}
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
