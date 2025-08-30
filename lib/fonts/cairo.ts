import type { FontDetails } from './types';

export const cairo_DETAILS: FontDetails = {
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
  };

export default cairo_DETAILS;
