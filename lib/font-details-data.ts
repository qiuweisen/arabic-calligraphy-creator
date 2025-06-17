// Font details data for the main page accordion panels
// This file contains all the detailed information that was previously on separate font pages

export interface FontFeature {
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
}

export interface TechnicalDetail {
  title: string;
  value: string;
  description: string;
}

export interface TextExample {
  id: string;
  text: string;
  translation: string;
  context: string;
}

export interface FontDetails {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: FontFeature[];
  useCases: UseCase[];
  technicalDetails: TechnicalDetail[];
  textExamples: TextExample[];
  category: string;
  designer: string;
  license: string;
}

export const FONT_DETAILS_DATA: Record<string, FontDetails> = {
  amiri: {
    slug: "amiri",
    name: "Amiri",
    shortDescription: "An elegant revival of Naskh, excellent for body text.",
    fullDescription: "A masterpiece of digital Arabic typography, the Amiri font revives the elegance of classical Naskh script. Designed by Dr. Khaled Hosny, inspired by the Bulaq Press typefaces.",
    category: "Traditional",
    designer: "Dr. Khaled Hosny",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "pen-tool",
        title: "Faithful Naskh Revival",
        description: "Meticulously revives the beauty of early 20th-century Naskh typefaces, notably those from the Bulaq Press, ensuring authenticity."
      },
      {
        icon: "book-open",
        title: "Optimized for Readability",
        description: "Designed for extended reading, making it a prime choice for books, academic papers, and religious texts like the Quran."
      },
      {
        icon: "layers",
        title: "Comprehensive Glyph Set",
        description: "Includes a vast range of characters, ligatures, contextual alternates, and diacritics for accurate Arabic and Quranic typesetting."
      },
      {
        icon: "feather",
        title: "Elegant & Balanced",
        description: "Maintains consistent stroke thickness and balanced negative space, reflecting the grace of traditional calligraphy."
      },
      {
        icon: "sparkles",
        title: "Quranic Support",
        description: "Features specific glyphs and OpenType features tailored for rendering Quranic text with accuracy and reverence."
      },
      {
        icon: "type",
        title: "Multiple Weights & Styles",
        description: "Available in Regular, Bold, Slanted, and Bold Slanted, offering versatility for complex typographic hierarchies."
      }
    ],
    useCases: [
      {
        title: "Religious Texts & Quranic Publications",
        description: "Its traditional Naskh forms and dedicated Quranic features make it the gold standard for rendering sacred Islamic texts.",
        icon: "book-open"
      },
      {
        title: "Academic Publishing & Scholarly Works",
        description: "Excellent legibility and formal tone are ideal for books, journals, and research papers in Arabic studies.",
        icon: "feather"
      },
      {
        title: "Formal Documents & Certificates",
        description: "Lends an air of authenticity and gravitas to official documents, diplomas, and invitations.",
        icon: "pen-tool"
      },
      {
        title: "Classical Literature & Poetry",
        description: "The elegant proportions beautifully complement the richness of classical Arabic prose and poetry.",
        icon: "sparkles"
      },
      {
        title: "Projects Requiring Cultural Authenticity",
        description: "Perfect for designs that aim to convey a strong sense of Arabic heritage and tradition.",
        icon: "layers"
      },
      {
        title: "Digital Content with a Traditional Feel",
        description: "Despite its classical roots, Amiri is highly readable on screens for websites and e-books needing a traditional touch.",
        icon: "type"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Dr. Khaled Hosny",
        description: "An Egyptian physician and type designer, renowned for his contributions to Arabic open-source fonts."
      },
      {
        title: "Foundry/Publisher",
        value: "Open Source (The Amiri Project)",
        description: "Amiri is a free and open-source project, encouraging widespread adoption and contributions from the community."
      },
      {
        title: "Release Year",
        value: "2011 (Initial)",
        description: "The font has undergone continuous development and improvement since its first release."
      },
      {
        title: "Key OpenType Features",
        value: "liga, dlig, calt, salt, fina, medi, init, mset, ss01-ssXX, quran",
        description: "Extensive OpenType support allows for precise typographic control and culturally accurate text rendering."
      },
      {
        title: "Supported Scripts",
        value: "Arabic (including extended characters for Persian, Urdu, etc.), Latin",
        description: "Primarily an Arabic typeface but includes basic Latin glyphs for multilingual contexts."
      },
      {
        title: "License",
        value: "SIL Open Font License 1.1",
        description: "Permits free use, modification, and distribution, fostering its use in diverse projects globally."
      }
    ],
    textExamples: [
      {
        id: "bismillah",
        text: "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
        translation: "In the name of God, the Most Gracious, the Most Merciful",
        context: "The Basmala, a ubiquitous phrase in Islamic tradition, opening most chapters of the Quran."
      },
      {
        id: "al-fatiha",
        text: "الْحَمْدُ لِلّٰهِ رَبِّ الْعَالَمِينَ",
        translation: "Praise be to God, Lord of the Worlds",
        context: "The first verse of Surah Al-Fatiha, the opening chapter of the Quran."
      },
      {
        id: "poetry-mutanabbi",
        text: "الخَيْلُ وَاللّيْلُ وَالبَيْداءُ تَعرِفُني \n وَالسّيفُ والرُمحُ والقِرطاسُ والقَلَمُ",
        translation: "The steeds, the night, and the desert know me; \n And the sword, the spear, the paper, and the pen.",
        context: "A famous verse by Al-Mutanabbi (915-965 AD), one of the greatest Arab poets."
      },
      {
        id: "proverb-knowledge",
        text: "اُطْلُبُوا العِلْمَ مِنَ الْمَهْدِ إِلى اللَّحْدِ",
        translation: "Seek knowledge from the cradle to the grave.",
        context: "A well-known Arabic proverb emphasizing the lifelong pursuit of knowledge."
      }
    ]
  },
  
  cairo: {
    slug: "cairo",
    name: "Cairo",
    shortDescription: "A contemporary Arabic & Latin sans-serif, clean and modern, ideal for web and UI.",
    fullDescription: "Cairo is a contemporary Arabic and Latin sans-serif typeface designed for modern digital applications, offering excellent legibility and a clean aesthetic.",
    category: "Modern",
    designer: "Mohamed Gaber",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "monitor",
        title: "Screen Optimized",
        description: "Designed specifically for digital screens with excellent readability at all sizes."
      },
      {
        icon: "layout",
        title: "Clean Sans-Serif Design",
        description: "Modern sans-serif approach that works perfectly for UI elements and contemporary designs."
      },
      {
        icon: "globe",
        title: "Multi-Script Support",
        description: "Supports both Arabic and Latin scripts with consistent design principles."
      },
      {
        icon: "sliders",
        title: "Variable Weight Support",
        description: "Available in multiple weights from Light to Black for comprehensive typographic hierarchies."
      }
    ],
    useCases: [
      {
        title: "Web Interfaces & Mobile Apps",
        description: "Perfect for modern web interfaces, mobile applications, and digital products requiring clean typography.",
        icon: "smartphone"
      },
      {
        title: "Corporate Branding & Marketing",
        description: "Ideal for modern brands seeking a contemporary Arabic typeface for their identity and marketing materials.",
        icon: "briefcase"
      },
      {
        title: "Digital Signage & Wayfinding",
        description: "Excellent legibility makes it perfect for digital displays and navigation systems.",
        icon: "navigation"
      },
      {
        title: "Social Media Graphics",
        description: "Clean design and multiple weights make it ideal for social media content and digital advertising.",
        icon: "share-2"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Mohamed Gaber",
        description: "Egyptian type designer specializing in contemporary Arabic typography."
      },
      {
        title: "Release Year",
        value: "2016",
        description: "Part of the Google Fonts collection since its release."
      },
      {
        title: "Font Weights",
        value: "6 weights (Light to Black)",
        description: "Comprehensive weight range for various design needs."
      },
      {
        title: "Character Set",
        value: "Arabic, Latin, Numerals",
        description: "Full support for Arabic script with basic Latin character support."
      }
    ],
    textExamples: [
      {
        id: "modern-phrase",
        text: "التكنولوجيا الحديثة",
        translation: "Modern Technology",
        context: "A contemporary phrase showcasing Cairo's suitability for modern digital content."
      },
      {
        id: "ui-text",
        text: "مرحباً بك في التطبيق",
        translation: "Welcome to the Application",
        context: "Common UI text demonstrating Cairo's clarity in interface design."
      }
    ]
  },

  "reem-kufi": {
    slug: "reem-kufi",
    name: "Reem Kufi",
    shortDescription: "A modern Kufi typeface with geometric precision, great for branding and headlines.",
    fullDescription: "Reem Kufi is a modern interpretation of the traditional Kufi script, featuring geometric precision and contemporary aesthetics perfect for branding and display purposes.",
    category: "Kufi",
    designer: "Khaled Hosny",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "grid",
        title: "Geometric Precision",
        description: "Features precise geometric forms that maintain the essence of traditional Kufi while being thoroughly modern."
      },
      {
        icon: "trending-up",
        title: "Display Optimized",
        description: "Designed primarily for headlines, logos, and display purposes where impact is important."
      },
      {
        icon: "minimize",
        title: "Clean Minimalist Design",
        description: "Simplified forms that work excellently in contemporary design contexts."
      }
    ],
    useCases: [
      {
        title: "Logo & Brand Design",
        description: "Geometric precision and strong character make it ideal for logos and brand identities.",
        icon: "zap"
      },
      {
        title: "Headlines & Titles",
        description: "Perfect for magazine headlines, book titles, and other display typography needs.",
        icon: "type"
      },
      {
        title: "Architectural Signage",
        description: "Clean geometric forms work well for architectural and environmental signage projects.",
        icon: "building"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Khaled Hosny",
        description: "Renowned Arabic type designer known for both traditional and contemporary typefaces."
      },
      {
        title: "Style",
        value: "Geometric Kufi",
        description: "Modern interpretation of traditional Kufi script with geometric emphasis."
      },
      {
        title: "Best Use",
        value: "Display & Headlines",
        description: "Optimized for large sizes and display applications."
      }
    ],
    textExamples: [
      {
        id: "brand-name",
        text: "العلامة التجارية",
        translation: "Brand Name",
        context: "Example of how Reem Kufi works perfectly for brand names and logos."
      },
      {
        id: "headline",
        text: "عنوان رئيسي",
        translation: "Main Headline",
        context: "Demonstrating the font's impact in headline applications."
      }
    ]
  },

  harmattan: {
    slug: "harmattan",
    name: "Harmattan",
    shortDescription: "A simplified modern Arabic typeface with excellent legibility, ideal for education and reading.",
    fullDescription: "Harmattan is a simplified Arabic typeface designed for clarity and readability, making it perfect for educational materials and extended reading contexts.",
    category: "Modern",
    designer: "SIL International",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "eye",
        title: "High Legibility",
        description: "Optimized for educational contexts with simplified letterforms that enhance readability."
      },
      {
        icon: "book",
        title: "Educational Focus",
        description: "Specifically designed to support literacy and learning applications."
      },
      {
        icon: "globe",
        title: "Unicode Compliant",
        description: "Full Unicode support for comprehensive Arabic text coverage."
      },
      {
        icon: "layers",
        title: "Complete Character Set",
        description: "Includes all necessary Arabic characters and diacritical marks."
      }
    ],
    useCases: [
      {
        title: "Educational Materials",
        description: "Perfect for textbooks, learning materials, and literacy programs.",
        icon: "graduation-cap"
      },
      {
        title: "Children's Books",
        description: "Clear, friendly letterforms ideal for early reading materials.",
        icon: "heart"
      },
      {
        title: "Digital Reading",
        description: "Optimized for on-screen reading with excellent clarity at various sizes.",
        icon: "tablet"
      },
      {
        title: "Language Learning",
        description: "Simplified forms help learners recognize and distinguish Arabic letters.",
        icon: "book-open"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "SIL International",
        description: "A faith-based nonprofit organization serving language communities worldwide."
      },
      {
        title: "Purpose",
        value: "Literacy & Education",
        description: "Specifically designed to support Arabic literacy initiatives."
      },
      {
        title: "Character Support",
        value: "Arabic, Latin, Extended Unicode",
        description: "Comprehensive Unicode support for multilingual educational content."
      }
    ],
    textExamples: [
      {
        id: "education",
        text: "التعليم نور",
        translation: "Education is light",
        context: "A common Arabic phrase emphasizing the value of education."
      },
      {
        id: "reading",
        text: "القراءة غذاء العقل",
        translation: "Reading is food for the mind",
        context: "Proverb about the importance of reading and learning."
      }
    ]
  },

  mada: {
    slug: "mada",
    name: "Mada",
    shortDescription: "A geometric sans-serif with clean, contemporary lines, perfect for modern Arabic design.",
    fullDescription: "Mada is a modernist Arabic typeface characterized by geometric construction and clean lines, making it ideal for contemporary design applications.",
    category: "Modern",
    designer: "Khaled Hosny",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "grid",
        title: "Geometric Construction",
        description: "Based on geometric principles for a clean, mathematical precision."
      },
      {
        icon: "minimize",
        title: "Minimalist Design",
        description: "Stripped-down forms that focus on essential characteristics."
      },
      {
        icon: "sliders",
        title: "Multiple Weights",
        description: "Available in various weights from Light to Black for design flexibility."
      },
      {
        icon: "monitor",
        title: "Digital Optimized",
        description: "Designed to work excellently in digital environments and user interfaces."
      }
    ],
    useCases: [
      {
        title: "Modern Branding",
        description: "Clean geometric forms perfect for contemporary brand identities.",
        icon: "trending-up"
      },
      {
        title: "Web & Mobile UI",
        description: "Excellent readability in user interfaces and digital applications.",
        icon: "smartphone"
      },
      {
        title: "Corporate Communications",
        description: "Professional appearance suitable for business materials.",
        icon: "briefcase"
      },
      {
        title: "Architectural Signage",
        description: "Geometric precision works well for environmental and wayfinding systems.",
        icon: "navigation"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Khaled Hosny",
        description: "Renowned Arabic type designer known for both traditional and modern approaches."
      },
      {
        title: "Style Classification",
        value: "Geometric Sans-serif",
        description: "Modern geometric construction with Arabic script characteristics."
      },
      {
        title: "Weight Range",
        value: "Light to Black (7 weights)",
        description: "Comprehensive weight range for complex typographic hierarchies."
      }
    ],
    textExamples: [
      {
        id: "modern-design",
        text: "التصميم الحديث",
        translation: "Modern Design",
        context: "Showcasing Mada's suitability for contemporary design applications."
      },
      {
        id: "innovation",
        text: "الابتكار والإبداع",
        translation: "Innovation and Creativity",
        context: "Corporate-style text demonstrating the font's professional appearance."
      }
    ]
  },

  tajawal: {
    slug: "tajawal",
    name: "Tajawal",
    shortDescription: "A modern Arabic sans-serif with excellent legibility, ideal for contemporary digital applications.",
    fullDescription: "Tajawal is a contemporary Arabic and Latin typeface designed by Boutros International, offering excellent legibility and modern aesthetics for digital applications.",
    category: "Modern",
    designer: "Boutros International",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "type",
        title: "Modern Sans-serif",
        description: "Clean, contemporary design without traditional serifs for a modern look."
      },
      {
        icon: "eye",
        title: "Excellent Legibility",
        description: "Optimized character forms for superior readability across different sizes."
      },
      {
        icon: "smartphone",
        title: "Digital Native",
        description: "Designed specifically for digital screens and modern applications."
      },
      {
        icon: "globe",
        title: "Bilingual Support",
        description: "Harmonious Arabic and Latin character sets for multilingual content."
      }
    ],
    useCases: [
      {
        title: "Corporate Websites",
        description: "Professional appearance perfect for business and corporate websites.",
        icon: "globe"
      },
      {
        title: "Mobile Applications",
        description: "Excellent screen readability for mobile apps and responsive design.",
        icon: "smartphone"
      },
      {
        title: "E-commerce Platforms",
        description: "Clear, trustworthy appearance ideal for online retail platforms.",
        icon: "shopping-cart"
      },
      {
        title: "Digital Publications",
        description: "Modern aesthetics suitable for online magazines and digital media.",
        icon: "monitor"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Boutros International",
        description: "Leading Arabic type design company with decades of experience."
      },
      {
        title: "Script Support",
        value: "Arabic & Latin",
        description: "Bilingual typeface with consistent design principles across scripts."
      },
      {
        title: "Optimization",
        value: "Digital Screens",
        description: "Specifically optimized for digital display and user interface applications."
      }
    ],
    textExamples: [
      {
        id: "digital-content",
        text: "المحتوى الرقمي",
        translation: "Digital Content",
        context: "Demonstrating Tajawal's suitability for digital applications."
      },
      {
        id: "modern-business",
        text: "الأعمال العصرية",
        translation: "Modern Business",
        context: "Corporate-style text showing professional application."
      }
    ]
  },

  lemonada: {
    slug: "lemonada",
    name: "Lemonada",
    shortDescription: "A modern and friendly Arabic typeface with rounded letterforms, perfect for casual and approachable designs.",
    fullDescription: "Lemonada is a contemporary Arabic typeface characterized by its friendly, rounded letterforms that create a warm and approachable feeling in design applications.",
    category: "Modern",
    designer: "Mohamed Gaber",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "heart",
        title: "Friendly & Approachable",
        description: "Rounded letterforms create a warm, welcoming feeling in text."
      },
      {
        icon: "smile",
        title: "Casual Style",
        description: "Perfect for informal, conversational, and lifestyle content."
      },
      {
        icon: "palette",
        title: "Creative Applications",
        description: "Ideal for creative projects requiring a more personal touch."
      },
      {
        icon: "users",
        title: "Brand Personality",
        description: "Adds character and personality to brand communications."
      }
    ],
    useCases: [
      {
        title: "Lifestyle Brands",
        description: "Perfect for food, fashion, and lifestyle brands seeking a friendly voice.",
        icon: "coffee"
      },
      {
        title: "Children's Products",
        description: "Friendly appearance ideal for kids' products and educational materials.",
        icon: "heart"
      },
      {
        title: "Social Media Content",
        description: "Approachable style perfect for social media posts and casual communications.",
        icon: "message-circle"
      },
      {
        title: "Creative Advertising",
        description: "Distinctive character helps advertising campaigns stand out.",
        icon: "zap"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Mohamed Gaber",
        description: "Egyptian type designer known for contemporary Arabic typefaces."
      },
      {
        title: "Character",
        value: "Friendly & Rounded",
        description: "Distinctive rounded letterforms create approachable personality."
      },
      {
        title: "Application",
        value: "Display & Branding",
        description: "Best suited for headlines, branding, and display applications."
      }
    ],
    textExamples: [
      {
        id: "welcome",
        text: "أهلاً وسهلاً",
        translation: "Welcome!",
        context: "Friendly greeting showcasing Lemonada's warm personality."
      },
      {
        id: "lifestyle",
        text: "الحياة جميلة",
        translation: "Life is beautiful",
        context: "Lifestyle-oriented text demonstrating the font's casual appeal."
      }
    ]
  },

  scheherazade: {
    slug: "scheherazade",
    name: "Scheherazade",
    shortDescription: "A traditional Naskh style typeface with excellent readability, perfect for body text and publications.",
    fullDescription: "Scheherazade is a traditional Arabic typeface in the Naskh style, designed by SIL International for excellent readability in body text and publication contexts.",
    category: "Traditional",
    designer: "SIL International",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "book-open",
        title: "Traditional Naskh",
        description: "Classic Naskh proportions and characteristics for authentic Arabic typography."
      },
      {
        icon: "eye",
        title: "Reading Optimized",
        description: "Specifically designed for extended reading with excellent legibility."
      },
      {
        icon: "layers",
        title: "Complete Unicode Support",
        description: "Comprehensive character support for accurate Arabic text rendering."
      },
      {
        icon: "globe",
        title: "Multi-regional Support",
        description: "Supports various Arabic script extensions for different languages."
      }
    ],
    useCases: [
      {
        title: "Academic Publications",
        description: "Ideal for scholarly works, research papers, and academic journals.",
        icon: "graduation-cap"
      },
      {
        title: "Religious Texts",
        description: "Traditional appearance suitable for Islamic and religious publications.",
        icon: "book"
      },
      {
        title: "Literature & Poetry",
        description: "Classic style perfect for literary works and classical poetry.",
        icon: "feather"
      },
      {
        title: "Educational Materials",
        description: "Clear, readable forms excellent for textbooks and learning materials.",
        icon: "book-open"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "SIL International",
        description: "Nonprofit organization dedicated to language technology and development."
      },
      {
        title: "Script Style",
        value: "Traditional Naskh",
        description: "Based on classical Naskh calligraphy traditions."
      },
      {
        title: "Unicode Coverage",
        value: "Extended Arabic",
        description: "Comprehensive support for Arabic script and its extensions."
      }
    ],
    textExamples: [
      {
        id: "classical-poetry",
        text: "وما نيل المطالب بالتمني ولكن تُؤخذ الدنيا غلابا",
        translation: "Desires are not achieved through wishful thinking, but the world is taken by force",
        context: "Classical Arabic poetry demonstrating traditional typography."
      },
      {
        id: "academic",
        text: "البحث العلمي والدراسات الأكاديمية",
        translation: "Scientific Research and Academic Studies",
        context: "Academic text showing the font's suitability for scholarly work."
      }
    ]
  },

  "noto-naskh-arabic": {
    slug: "noto-naskh-arabic",
    name: "Noto Naskh Arabic",
    shortDescription: "A clean, versatile font optimized for digital screens with traditional Naskh characteristics.",
    fullDescription: "Noto Naskh Arabic is part of Google's Noto font family, offering traditional Naskh characteristics optimized for modern digital applications and global typography needs.",
    category: "Traditional",
    designer: "Google Fonts Team",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "monitor",
        title: "Screen Optimized",
        description: "Designed for excellent readability on digital screens and various devices."
      },
      {
        icon: "globe",
        title: "Part of Noto Family",
        description: "Consistent design language with other Noto fonts for multilingual projects."
      },
      {
        icon: "type",
        title: "Traditional yet Modern",
        description: "Maintains Naskh traditions while being optimized for contemporary use."
      },
      {
        icon: "layers",
        title: "Universal Coverage",
        description: "Comprehensive character support as part of Google's global font initiative."
      }
    ],
    useCases: [
      {
        title: "Web Applications",
        description: "Excellent for websites and web applications requiring Arabic text.",
        icon: "globe"
      },
      {
        title: "Mobile Interfaces",
        description: "Optimized for mobile screens and responsive design applications.",
        icon: "smartphone"
      },
      {
        title: "Multilingual Projects",
        description: "Perfect for projects requiring consistent typography across languages.",
        icon: "languages"
      },
      {
        title: "Digital Documents",
        description: "Ideal for digital documents, e-books, and online publications.",
        icon: "file-text"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Google Fonts Team",
        description: "Developed as part of Google's comprehensive global font initiative."
      },
      {
        title: "Font Family",
        value: "Noto (No Tofu)",
        description: "Part of Google's project to support all languages and eliminate missing character symbols."
      },
      {
        title: "Optimization",
        value: "Cross-platform Digital",
        description: "Optimized for digital use across various platforms and devices."
      }
    ],
    textExamples: [
      {
        id: "web-content",
        text: "المحتوى على الإنترنت",
        translation: "Content on the Internet",
        context: "Web content demonstrating the font's digital optimization."
      },
      {
        id: "global-communication",
        text: "التواصل العالمي",
        translation: "Global Communication",
        context: "International context showing multilingual capabilities."
      }
    ]
  },

  "el-messiri": {
    slug: "el-messiri",
    name: "El Messiri",
    shortDescription: "A modern Arabic typeface with Latin script harmony, ideal for bilingual applications.",
    fullDescription: "El Messiri is a contemporary Arabic typeface designed to work harmoniously with Latin scripts, making it perfect for bilingual and multilingual design projects.",
    category: "Modern",
    designer: "Mohamed Gaber",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "layers",
        title: "Bilingual Harmony",
        description: "Designed to work seamlessly with Latin typefaces for multilingual content."
      },
      {
        icon: "type",
        title: "Contemporary Style",
        description: "Modern Arabic design that fits well in contemporary design contexts."
      },
      {
        icon: "eye",
        title: "High Readability",
        description: "Optimized letterforms for excellent readability in both print and digital media."
      },
      {
        icon: "sliders",
        title: "Variable Weights",
        description: "Multiple weight options for comprehensive typographic hierarchies."
      }
    ],
    useCases: [
      {
        title: "Bilingual Publications",
        description: "Perfect for magazines, books, and materials requiring Arabic-Latin text mixing.",
        icon: "book-open"
      },
      {
        title: "International Brands",
        description: "Ideal for global brands needing consistent typography across languages.",
        icon: "globe"
      },
      {
        title: "Educational Materials",
        description: "Excellent for language learning and bilingual educational content.",
        icon: "graduation-cap"
      },
      {
        title: "Corporate Communications",
        description: "Professional appearance suitable for business materials in multiple languages.",
        icon: "briefcase"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Mohamed Gaber",
        description: "Egyptian type designer specializing in contemporary Arabic typography."
      },
      {
        title: "Script Support",
        value: "Arabic & Latin Harmony",
        description: "Designed specifically for seamless bilingual typography."
      },
      {
        title: "Weight Range",
        value: "Multiple Weights",
        description: "Comprehensive weight range for design flexibility."
      }
    ],
    textExamples: [
      {
        id: "bilingual-content",
        text: "المحتوى ثنائي اللغة",
        translation: "Bilingual Content",
        context: "Demonstrating El Messiri's suitability for multilingual applications."
      },
      {
        id: "international",
        text: "التواصل الدولي",
        translation: "International Communication",
        context: "Global context showing international application potential."
      }
    ]
  },

  "markazi-text": {
    slug: "markazi-text",
    name: "Markazi Text",
    shortDescription: "A text typeface suitable for publications and long reading, with excellent legibility.",
    fullDescription: "Markazi Text is a versatile Arabic typeface optimized for body text and extended reading, offering excellent legibility and traditional proportions.",
    category: "Traditional",
    designer: "Claus Eggers Sørensen",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "book",
        title: "Text Optimized",
        description: "Specifically designed for body text and extended reading applications."
      },
      {
        icon: "eye",
        title: "Superior Legibility",
        description: "Carefully crafted letterforms ensure excellent readability at text sizes."
      },
      {
        icon: "type",
        title: "Traditional Proportions",
        description: "Maintains classical Arabic proportions while being optimized for modern use."
      },
      {
        icon: "layers",
        title: "Complete Character Set",
        description: "Comprehensive Arabic character support for professional typesetting."
      }
    ],
    useCases: [
      {
        title: "Books & Publications",
        description: "Ideal for book publishing, magazines, and other long-form publications.",
        icon: "book"
      },
      {
        title: "Academic Journals",
        description: "Perfect for scholarly publications and academic papers.",
        icon: "graduation-cap"
      },
      {
        title: "Newspapers",
        description: "Excellent for newspaper text and editorial content.",
        icon: "newspaper"
      },
      {
        title: "Digital Reading",
        description: "Optimized for e-books and digital reading applications.",
        icon: "tablet"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Claus Eggers Sørensen",
        description: "Danish type designer known for versatile and functional typefaces."
      },
      {
        title: "Optimization",
        value: "Body Text",
        description: "Specifically optimized for comfortable reading at text sizes."
      },
      {
        title: "Character Support",
        value: "Extended Arabic",
        description: "Comprehensive Unicode support for professional Arabic typesetting."
      }
    ],
    textExamples: [
      {
        id: "body-text",
        text: "النص الأساسي للمقال والكتاب",
        translation: "The main text of articles and books",
        context: "Example of body text showing the font's readability."
      },
      {
        id: "publication",
        text: "المنشورات الأكاديمية والعلمية",
        translation: "Academic and Scientific Publications",
        context: "Academic context demonstrating professional application."
      }
    ]
  },

  lateef: {
    slug: "lateef",
    name: "Lateef",
    shortDescription: "An extended Arabic typeface based on traditional Naskh, with comprehensive character support.",
    fullDescription: "Lateef is a Unicode-compliant Arabic typeface based on traditional Naskh styles, offering extensive character support for various Arabic script languages.",
    category: "Traditional",
    designer: "SIL International",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "globe",
        title: "Extensive Unicode Support",
        description: "Comprehensive character coverage for Arabic, Persian, Urdu, and other Arabic script languages."
      },
      {
        icon: "book-open",
        title: "Traditional Naskh Base",
        description: "Rooted in classical Naskh traditions for authentic Arabic typography."
      },
      {
        icon: "layers",
        title: "Multi-language Support",
        description: "Supports various languages using Arabic script including Persian and Urdu."
      },
      {
        icon: "type",
        title: "Professional Typesetting",
        description: "Designed for professional publishing and high-quality typesetting needs."
      }
    ],
    useCases: [
      {
        title: "Multilingual Publications",
        description: "Perfect for publications in Arabic, Persian, Urdu, and other Arabic script languages.",
        icon: "languages"
      },
      {
        title: "Religious Texts",
        description: "Suitable for Quran, Islamic texts, and other religious publications.",
        icon: "book"
      },
      {
        title: "Academic Research",
        description: "Ideal for scholarly works in Middle Eastern and Islamic studies.",
        icon: "graduation-cap"
      },
      {
        title: "Cultural Projects",
        description: "Perfect for projects preserving and presenting Arabic literary heritage.",
        icon: "heart"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "SIL International",
        description: "Nonprofit organization focused on language technology development."
      },
      {
        title: "Script Coverage",
        value: "Extended Arabic Scripts",
        description: "Supports Arabic, Persian, Urdu, Sindhi, and other Arabic-script languages."
      },
      {
        title: "Unicode Compliance",
        value: "Full Unicode Support",
        description: "Complete Unicode implementation for accurate multilingual text rendering."
      }
    ],
    textExamples: [
      {
        id: "multilingual",
        text: "النصوص متعددة اللغات",
        translation: "Multilingual Texts",
        context: "Demonstrating Lateef's multilingual capabilities."
      },
      {
        id: "cultural-heritage",
        text: "التراث الثقافي العربي",
        translation: "Arabic Cultural Heritage",
        context: "Cultural context showing traditional application."
      }
    ]
  },

  mirza: {
    slug: "mirza",
    name: "Mirza",
    shortDescription: "A distinguished Nastaliq typeface for Persian and Urdu, with elegant calligraphic forms.",
    fullDescription: "Mirza is a sophisticated Nastaliq typeface designed for Persian and Urdu texts, capturing the elegance and flow of traditional Nastaliq calligraphy.",
    category: "Nastaliq",
    designer: "Khaled Hosny",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "feather",
        title: "Authentic Nastaliq",
        description: "True to traditional Nastaliq calligraphy with flowing, cursive characteristics."
      },
      {
        icon: "sparkles",
        title: "Elegant Letterforms",
        description: "Sophisticated character shapes that capture the beauty of classical Persian writing."
      },
      {
        icon: "globe",
        title: "Persian & Urdu Optimized",
        description: "Specifically designed for Persian and Urdu language requirements."
      },
      {
        icon: "art-palette",
        title: "Calligraphic Beauty",
        description: "Maintains the artistic quality of hand-written Nastaliq calligraphy."
      }
    ],
    useCases: [
      {
        title: "Persian Literature",
        description: "Perfect for Persian poetry, classical literature, and literary publications.",
        icon: "feather"
      },
      {
        title: "Urdu Publications",
        description: "Ideal for Urdu books, newspapers, and cultural materials.",
        icon: "book"
      },
      {
        title: "Cultural Events",
        description: "Excellent for invitations, announcements, and cultural event materials.",
        icon: "calendar"
      },
      {
        title: "Artistic Projects",
        description: "Perfect for artistic and decorative applications requiring elegant script.",
        icon: "paintbrush"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Khaled Hosny",
        description: "Master Arabic type designer with expertise in traditional scripts."
      },
      {
        title: "Script Style",
        value: "Nastaliq",
        description: "Traditional Persian/Urdu calligraphic style with flowing characteristics."
      },
      {
        title: "Language Support",
        value: "Persian, Urdu, Arabic",
        description: "Optimized for Persian and Urdu with Arabic script support."
      }
    ],
    textExamples: [
      {
        id: "persian-poetry",
        text: "شعر فارسی کلاسیک",
        translation: "Classical Persian Poetry",
        context: "Persian text showing Mirza's suitability for literary applications."
      },
      {
        id: "cultural-text",
        text: "فرهنگ و ادبیات",
        translation: "Culture and Literature",
        context: "Cultural context demonstrating elegant application."
      }
    ]
  },

  "aref-ruqaa": {
    slug: "aref-ruqaa",
    name: "Aref Ruqaa",
    shortDescription: "An ornate typeface inspired by Ottoman Diwani calligraphy, perfect for decorative applications.",
    fullDescription: "Aref Ruqaa is an ornate Arabic typeface inspired by Ottoman Diwani and Ruqaa scripts, offering decorative elegance for special applications.",
    category: "Diwani",
    designer: "Abdullah Aref",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "crown",
        title: "Ottoman Inspiration",
        description: "Inspired by the ornate calligraphy of the Ottoman Empire's Diwani style."
      },
      {
        icon: "sparkles",
        title: "Decorative Elegance",
        description: "Rich, ornamental letterforms perfect for ceremonial and decorative use."
      },
      {
        icon: "art-palette",
        title: "Artistic Character",
        description: "Maintains the artistic and expressive qualities of traditional Ruqaa script."
      },
      {
        icon: "star",
        title: "Ceremonial Quality",
        description: "Ideal for formal occasions, certificates, and prestigious applications."
      }
    ],
    useCases: [
      {
        title: "Certificates & Awards",
        description: "Perfect for diplomas, certificates, and formal recognition documents.",
        icon: "award"
      },
      {
        title: "Wedding Invitations",
        description: "Elegant choice for wedding invitations and special event announcements.",
        icon: "heart"
      },
      {
        title: "Luxury Branding",
        description: "Ideal for luxury brands and premium product packaging.",
        icon: "diamond"
      },
      {
        title: "Artistic Projects",
        description: "Perfect for artistic posters, book covers, and decorative applications.",
        icon: "paintbrush"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Abdullah Aref",
        description: "Calligrapher and type designer specializing in traditional Arabic scripts."
      },
      {
        title: "Script Tradition",
        value: "Diwani & Ruqaa",
        description: "Based on Ottoman Diwani and traditional Ruqaa calligraphic styles."
      },
      {
        title: "Application",
        value: "Decorative & Ceremonial",
        description: "Best suited for decorative and ceremonial applications."
      }
    ],
    textExamples: [
      {
        id: "ceremony",
        text: "شهادة تقدير",
        translation: "Certificate of Appreciation",
        context: "Ceremonial text showing the font's formal application."
      },
      {
        id: "invitation",
        text: "دعوة كريمة",
        translation: "Generous Invitation",
        context: "Invitation context demonstrating elegant, formal use."
      }
    ]
  },

  jomhuria: {
    slug: "jomhuria",
    name: "Jomhuria",
    shortDescription: "A powerful Arabic display font with bold Kufi-inspired letterforms, ideal for headlines.",
    fullDescription: "Jomhuria is a bold, impactful Arabic display typeface inspired by Kufi traditions, designed for headlines and strong visual statements.",
    category: "Display",
    designer: "Khaled Hosny",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "zap",
        title: "High Impact",
        description: "Bold, powerful letterforms designed to make strong visual statements."
      },
      {
        icon: "grid",
        title: "Kufi Inspiration",
        description: "Based on traditional Kufi script with modern display optimization."
      },
      {
        icon: "trending-up",
        title: "Headline Optimized",
        description: "Specifically designed for headlines, titles, and display applications."
      },
      {
        icon: "eye",
        title: "Strong Presence",
        description: "Commands attention with bold, confident character forms."
      }
    ],
    useCases: [
      {
        title: "Newspaper Headlines",
        description: "Perfect for newspaper headlines and editorial display text.",
        icon: "newspaper"
      },
      {
        title: "Poster Design",
        description: "Ideal for posters, banners, and large-format advertising.",
        icon: "layout"
      },
      {
        title: "Logo Design",
        description: "Strong character makes it suitable for logos and brand marks.",
        icon: "zap"
      },
      {
        title: "Event Signage",
        description: "Excellent for event signage and wayfinding systems.",
        icon: "navigation"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Khaled Hosny",
        description: "Master type designer known for both traditional and contemporary Arabic fonts."
      },
      {
        title: "Classification",
        value: "Display Kufi",
        description: "Bold display typeface with Kufi script characteristics."
      },
      {
        title: "Best Use",
        value: "Headlines & Display",
        description: "Optimized for large sizes and high-impact applications."
      }
    ],
    textExamples: [
      {
        id: "headline",
        text: "عنوان رئيسي",
        translation: "Main Headline",
        context: "Headline text demonstrating the font's impact and boldness."
      },
      {
        id: "announcement",
        text: "إعلان مهم",
        translation: "Important Announcement",
        context: "Announcement context showing strong visual presence."
      }
    ]
  },

  rakkas: {
    slug: "rakkas",
    name: "Rakkas",
    shortDescription: "A decorative display font with distinctive handwritten character, perfect for creative projects.",
    fullDescription: "Rakkas is a unique Arabic display typeface with handwritten characteristics, offering a distinctive and creative approach to Arabic typography.",
    category: "Display",
    designer: "Zeynep Akay",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "brush",
        title: "Handwritten Style",
        description: "Distinctive handwritten characteristics that add personality to designs."
      },
      {
        icon: "sparkles",
        title: "Creative Expression",
        description: "Unique letterforms that encourage creative and artistic applications."
      },
      {
        icon: "heart",
        title: "Playful Character",
        description: "Informal, approachable style perfect for creative projects."
      },
      {
        icon: "palette",
        title: "Artistic Flair",
        description: "Adds artistic and expressive qualities to design projects."
      }
    ],
    useCases: [
      {
        title: "Creative Advertising",
        description: "Perfect for advertising campaigns requiring unique, memorable typography.",
        icon: "megaphone"
      },
      {
        title: "Art Projects",
        description: "Ideal for artistic posters, gallery announcements, and creative materials.",
        icon: "paintbrush"
      },
      {
        title: "Casual Branding",
        description: "Great for informal brands and products targeting creative audiences.",
        icon: "coffee"
      },
      {
        title: "Social Media Graphics",
        description: "Distinctive character perfect for social media posts and digital content.",
        icon: "share-2"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Zeynep Akay",
        description: "Type designer specializing in expressive and creative Arabic typefaces."
      },
      {
        title: "Style",
        value: "Handwritten Display",
        description: "Unique handwritten style with creative character variations."
      },
      {
        title: "Application",
        value: "Creative & Artistic",
        description: "Best suited for creative and artistic display applications."
      }
    ],
    textExamples: [
      {
        id: "creative",
        text: "فن وإبداع",
        translation: "Art and Creativity",
        context: "Creative text showing the font's artistic personality."
      },
      {
        id: "expression",
        text: "تعبير فني",
        translation: "Artistic Expression",
        context: "Artistic context demonstrating expressive qualities."
      }
    ]
  },

  marhey: {
    slug: "marhey",
    name: "Marhey",
    shortDescription: "A vibrant and energetic Arabic display font with playful character, ideal for youth-oriented designs.",
    fullDescription: "Marhey is a vibrant Arabic display typeface with energetic and playful characteristics, perfect for youth-oriented and dynamic design applications.",
    category: "Display",
    designer: "Mousai Studio",
    license: "SIL Open Font License 1.1",
    features: [
      {
        icon: "zap",
        title: "Energetic Design",
        description: "Dynamic letterforms that convey energy and movement."
      },
      {
        icon: "smile",
        title: "Playful Character",
        description: "Fun, approachable style perfect for youth and entertainment contexts."
      },
      {
        icon: "trending-up",
        title: "Modern Appeal",
        description: "Contemporary design that appeals to younger demographics."
      },
      {
        icon: "users",
        title: "Social Media Ready",
        description: "Optimized for digital platforms and social media applications."
      }
    ],
    useCases: [
      {
        title: "Youth Marketing",
        description: "Perfect for brands and campaigns targeting young demographics.",
        icon: "users"
      },
      {
        title: "Entertainment Industry",
        description: "Ideal for music, gaming, and entertainment industry applications.",
        icon: "music"
      },
      {
        title: "Sports Branding",
        description: "Energetic character perfect for sports teams and athletic brands.",
        icon: "activity"
      },
      {
        title: "Event Promotion",
        description: "Great for concerts, festivals, and youth-oriented event promotion.",
        icon: "calendar"
      }
    ],
    technicalDetails: [
      {
        title: "Designer",
        value: "Mousai Studio",
        description: "Design studio specializing in contemporary and youth-oriented typefaces."
      },
      {
        title: "Target Audience",
        value: "Youth & Entertainment",
        description: "Designed specifically for youth markets and entertainment applications."
      },
      {
        title: "Style Classification",
        value: "Energetic Display",
        description: "Vibrant display typeface with dynamic characteristics."
      }
    ],
    textExamples: [
      {
        id: "youth",
        text: "الشباب والطاقة",
        translation: "Youth and Energy",
        context: "Youth-oriented text showing the font's energetic character."
      },
      {
        id: "fun",
        text: "مرح ولعب",
        translation: "Fun and Play",
        context: "Playful context demonstrating the font's entertaining qualities."
      }
    ]
  }

  // Add more fonts as needed - this is a comprehensive set covering most major Arabic fonts
};

export function getFontDetails(slug: string): FontDetails | null {
  return FONT_DETAILS_DATA[slug] || null;
} 