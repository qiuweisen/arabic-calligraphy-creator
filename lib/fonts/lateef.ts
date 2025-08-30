import type { FontDetails } from './types';

export const lateef_DETAILS: FontDetails = {
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
  };

export default lateef_DETAILS;
