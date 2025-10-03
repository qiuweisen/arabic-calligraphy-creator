"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Menu, ChevronDown, User, LogOut, Crown } from "lucide-react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "@/components/language-switcher"
import { SharedLogo } from "@/components/shared/logo"
import { useTranslations } from 'next-intl'
import { authClient } from "@/lib/auth-client"
import { useSubscriptionStatus } from "@/hooks/use-subscription"

export function Navbar() {
  const t = useTranslations('navigation')
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  // Auth state
  const { data: session } = authClient.useSession()
  const { isPro, loading: isSubscriptionLoading } = useSubscriptionStatus()

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    await authClient.signOut()
    router.refresh()
  }

  const navItems = [
    { label: t('generator'), href: "/" },
    { label: t('arabicFonts'), href: "/fonts" },
    {
      label: t('learningGuides'),
      href: "/guides",
      dropdown: [
        { label: t('dropdown.completeBeginner'), href: "/guides/arabic-calligraphy-beginner-guide" },
        { label: t('dropdown.fontComparison'), href: "/guides/arabic-font-comparison" },
        { label: t('dropdown.bestFonts2025'), href: "/guides/best-arabic-fonts-2025" },
        { label: t('dropdown.typographyTrends'), href: "/guides/arabic-typography-trends-2025" }
      ]
    },
    {
      label: t('howToTutorials'),
      href: "/tutorials",
      dropdown: [
        { label: t('dropdown.createOnline'), href: "/tutorials/how-to-create-arabic-calligraphy-online" },
        { label: t('dropdown.fontSelection'), href: "/tutorials/arabic-font-selection-guide" },
        { label: t('dropdown.designTips'), href: "/tutorials/arabic-calligraphy-design-tips" },
        { label: t('dropdown.downloadFonts'), href: "/tutorials/download-and-use-arabic-fonts" }
      ]
    },
    {
      label: t('freeResources'),
      href: "/resources",
      dropdown: [
        { label: t('dropdown.freeArabicFonts'), href: "/resources/free-arabic-fonts" }
      ]
    },
    { label: t('useCases'), href: "/use-cases" },
    { label: t('blog'), href: "/blog" },
    { label: t('faq'), href: "/faq" },
    { label: t('contact'), href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isClient && isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <SharedLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1">
              {navItems.map((item, index) => (
                item.dropdown ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-amber-800 hover:text-amber-600 hover:bg-amber-50"
                      >
                        {item.label}
                        <ChevronDown className="ml-1 h-3 w-3 navbar-chevron" />
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

            {/* Language Switcher */}
            <div className="ml-2 pl-2 border-l border-amber-200 navbar-language-container">
              <LanguageSwitcher />
            </div>

            {/* Auth Buttons */}
            <div className="ml-2 pl-2 border-l border-amber-200 flex items-center gap-2">
              {session?.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-amber-800 hover:text-amber-600 hover:bg-amber-50">
                      <User className="h-4 w-4 mr-2" />
                      {session.user.email}
                      {isPro && <Crown className="h-4 w-4 ml-2 text-yellow-600" />}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/pricing" className="w-full">
                        {isPro ? 'Manage Subscription' : 'Upgrade to Pro'}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="ghost" asChild className="text-amber-800 hover:text-amber-600 hover:bg-amber-50">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

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
                <div className="mb-8 px-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <SharedLogo />
                </div>

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
                        <div className="ms-4 border-s border-amber-200">
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

                {/* Mobile Auth Section */}
                <div className="mt-6 pt-6 border-t border-amber-200">
                  {session?.user ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 text-sm text-amber-800 flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {session.user.email}
                        {isPro && <Crown className="h-4 w-4 ml-2 text-yellow-600" />}
                      </div>
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full justify-start text-amber-800 hover:bg-amber-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href="/pricing">
                          {isPro ? 'Manage Subscription' : 'Upgrade to Pro'}
                        </Link>
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          handleLogout()
                          setIsMobileMenuOpen(false)
                        }}
                        className="w-full justify-start text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        asChild
                        className="w-full text-amber-800 hover:bg-amber-50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href="/login">Login</Link>
                      </Button>
                      <Button
                        asChild
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Link href="/register">Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </div>

                {/* Mobile Language Switcher */}
                <div className="mt-6 pt-6 border-t border-amber-200">
                  <div className="px-4 mb-3">
                    <span className="text-sm font-medium text-amber-800">Language / اللغة</span>
                  </div>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
