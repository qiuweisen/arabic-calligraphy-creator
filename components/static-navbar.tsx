"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function StaticNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: "Generator", href: "/" },
    { name: "Arabic Fonts", href: "/fonts" },
    { 
      name: "Learning Guides", 
      href: "/guides",
      dropdown: [
        { name: "Beginner Guide", href: "/guides/arabic-calligraphy-beginner-guide" },
        { name: "Font Comparison", href: "/guides/arabic-font-comparison" },
        { name: "Typography Trends", href: "/guides/arabic-typography-trends-2025" },
        { name: "Best Fonts 2025", href: "/guides/best-arabic-fonts-2025" }
      ]
    },
    { 
      name: "How-to Tutorials", 
      href: "/tutorials",
      dropdown: [
        { name: "Create Calligraphy Online", href: "/tutorials/how-to-create-arabic-calligraphy-online" },
        { name: "Design Tips", href: "/tutorials/arabic-calligraphy-design-tips" },
        { name: "Font Selection Guide", href: "/tutorials/arabic-font-selection-guide" },
        { name: "Download & Use Fonts", href: "/tutorials/download-and-use-arabic-fonts" }
      ]
    },
    { 
      name: "Free Resources", 
      href: "/resources",
      dropdown: [
        { name: "Free Arabic Fonts", href: "/resources/free-arabic-fonts" }
      ]
    },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ]

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-200",
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm border-amber-200 shadow-sm" 
        : "bg-white border-amber-100"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-amber-800">خط</span>
              <span className="text-xl font-semibold text-amber-700 ml-1">ArabicCalligraphy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="text-amber-800 hover:text-amber-900 hover:bg-amber-50 font-medium"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link 
                          href={subItem.href}
                          className="w-full cursor-pointer text-gray-700 hover:text-amber-800"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-amber-800 hover:text-amber-900 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Language Switcher - Static version */}
          <div className="hidden lg:flex items-center">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-3 text-amber-800 hover:bg-amber-50 hover:text-amber-900"
              >
                🇺🇸 English
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-amber-800">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className="block text-lg font-medium text-amber-800 hover:text-amber-900 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-sm text-gray-600 hover:text-amber-800 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="pt-4 border-t border-gray-200">
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-amber-800 hover:bg-amber-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      🇺🇸 English
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
