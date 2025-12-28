// 共享样式常量，确保多语言和单语言页面的视觉一致性

export const SHARED_STYLES = {
  // 导航栏样式
  navbar: {
    container: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    scrolled: "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50",
    transparent: "bg-transparent",
    inner: "container mx-auto px-4",
    content: "flex items-center justify-between h-16",
  },

  // Logo样式
  logo: {
    container: "flex items-center space-x-2",
    icon: "w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center",
    iconText: "text-white font-bold text-sm",
    text: "font-bold text-xl text-gray-900",
  },

  // 导航项样式
  navigation: {
    desktop: "hidden md:flex items-center space-x-8",
    link: "text-gray-700 hover:text-blue-600 transition-colors font-medium",
    dropdown: "flex items-center space-x-1",
    dropdownContent: "w-64",
  },

  // Footer样式
  footer: {
    container: "bg-amber-900 text-amber-100 py-8",
    inner: "container mx-auto px-4",
    grid: "grid grid-cols-1 md:grid-cols-4 gap-8",
    logoContainer: "flex items-center gap-2 mb-4",
    logoIcon: "w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-900 font-bold text-lg",
    logoText: "font-bold text-amber-100",
    description: "text-amber-200 mb-4 text-sm",
    sectionTitle: "font-semibold text-amber-100 mb-4",
    linkList: "space-y-2",
    link: "text-amber-200 hover:text-white transition-colors text-sm",
    divider: "border-t border-amber-800 mt-8 pt-8 text-center",
    copyright: "text-amber-200 text-sm",
  },

  // 移动端菜单样式
  mobile: {
    trigger: "md:hidden",
    content: "w-80",
    menu: "flex flex-col space-y-4 mt-8",
    link: "block py-2 text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors",
    submenu: "ml-4 mt-2 space-y-2",
    submenuLink: "block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors",
    languageSwitcher: "pt-4 border-t",
  }
}

// 共享导航数据结构
export const NAVIGATION_ITEMS = {
  // 英语导航项（用于单语言页面）
  en: [
    { label: "Generator", href: "/" },
    { label: "Arabic Fonts", href: "/fonts" },
    {
      label: "Learning Guides",
      href: "/guides",
      dropdown: [
        { label: "Beginner's Guide to Arabic Calligraphy", href: "/guides/arabic-calligraphy-beginner-guide" },
        { label: "Arabic Font Comparison Guide", href: "/guides/arabic-font-comparison" },
        { label: "Best Arabic Fonts for 2025", href: "/guides/best-arabic-fonts-2025" },
        { label: "Arabic Typography Trends 2025", href: "/guides/arabic-typography-trends-2025" },
      ]
    },
    {
      label: "Tutorials",
      href: "/tutorials",
      dropdown: [
        { label: "How to Create Arabic Calligraphy Online", href: "/tutorials/how-to-create-arabic-calligraphy-online" },
        { label: "Arabic Font Selection Guide", href: "/tutorials/arabic-font-selection-guide" },
        { label: "Arabic Calligraphy Design Tips", href: "/tutorials/arabic-calligraphy-design-tips" },
        { label: "Download and Use Arabic Fonts", href: "/tutorials/download-and-use-arabic-fonts" },
      ]
    },
    {
      label: "Use Cases",
      href: "/use-cases",
      dropdown: [
        { label: "Business Logo with Arabic Fonts", href: "/use-cases/business-logo-arabic-fonts" },
        { label: "Social Media Arabic Typography", href: "/use-cases/social-media-arabic-typography" },
        { label: "Wedding Arabic Calligraphy", href: "/use-cases/wedding-arabic-calligraphy" },
        { label: "Religious Arabic Calligraphy", href: "/use-cases/religious-arabic-calligraphy" },
      ]
    },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ]
}

// 共享Footer数据
export const FOOTER_DATA = {
  logo: {
    icon: "خط",
    text: "ArabicCalligraphy"
  },
  description: "Create stunning Arabic calligraphy with our free online generator. Perfect for logos, invitations, and artistic projects.",
  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "Generator", href: "/" },
        { label: "Arabic Fonts", href: "/fonts" },
        { label: "Learning Guides", href: "/guides" },
        { label: "Tutorials", href: "/tutorials" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Use Cases", href: "/use-cases" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact", href: "/contact" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ]
    },
    {
      title: "More Tools",
      links: [
        { label: "AI Image Enhancer", href: "https://imgenhance.com" },
      ]
    }
  ],
  copyright: "© 2024 Arabic Calligraphy Generator. All rights reserved."
}
