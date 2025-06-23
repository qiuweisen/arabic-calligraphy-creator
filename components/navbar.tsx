"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Arabic Fonts", href: "/fonts" },
    {
      label: "Guides",
      href: "/guides",
      dropdown: [
        { label: "Complete Beginner Guide", href: "/guides/arabic-calligraphy-beginner-guide" },
        { label: "Font Comparison Guide", href: "/guides/arabic-font-comparison" },
        { label: "Best Arabic Fonts 2025", href: "/guides/best-arabic-fonts-2025" },
        { label: "Typography Trends 2025", href: "/guides/arabic-typography-trends-2025" }
      ]
    },
    {
      label: "Tutorials",
      href: "/tutorials",
      dropdown: [
        { label: "Create Calligraphy Online", href: "/tutorials/how-to-create-arabic-calligraphy-online" },
        { label: "Font Selection Guide", href: "/tutorials/arabic-font-selection-guide" },
        { label: "Design Tips", href: "/tutorials/arabic-calligraphy-design-tips" },
        { label: "Download & Use Fonts", href: "/tutorials/download-and-use-arabic-fonts" }
      ]
    },
    {
      label: "Resources",
      href: "/resources",
      dropdown: [
        { label: "Design Inspiration", href: "/resources/design-inspiration" },
        { label: "Design Templates", href: "/resources/design-templates" },
        { label: "Free Arabic Fonts", href: "/resources/free-arabic-fonts" }
      ]
    },
    {
      label: "Tools",
      href: "/tools",
      dropdown: [
        { label: "Color Palette Generator", href: "/tools/color-palette-generator" }
      ]
    },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg">
              خط
            </div>
            <span className="font-bold text-amber-800">ArabicCalligraphy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-amber-800 hover:text-amber-600 hover:bg-amber-50"
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      <DropdownMenuItem key={dropdownIndex} asChild>
                        <Link href={dropdownItem.href} className="w-full">
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={index}
                  variant="ghost"
                  asChild
                  className="text-amber-800 hover:text-amber-600 hover:bg-amber-50"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              )
            ))}
          </nav>

          {/* Mobile Menu Trigger - Increased touch area */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="lg" 
                className="md:hidden p-3 h-auto w-auto touch-manipulation"
              >
                <Menu className="h-6 w-6 text-amber-800" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col h-full py-8">
                <Link href="/" className="flex items-center gap-2 mb-8 px-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold text-lg">
                    خط
                  </div>
                  <span className="font-bold text-amber-800 text-xl">ArabicCalligraphy</span>
                </Link>

                <nav className="flex flex-col">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="px-4 py-4 text-lg text-amber-800 hover:bg-amber-50 active:bg-amber-100 transition-colors rounded-md flex items-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 border-l border-amber-200">
                          {item.dropdown.map((dropdownItem, dropdownIndex) => (
                            <Link
                              key={dropdownIndex}
                              href={dropdownItem.href}
                              className="px-4 py-2 text-sm text-amber-700 hover:bg-amber-50 active:bg-amber-100 transition-colors rounded-md flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
