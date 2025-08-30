import type { FontDetails } from './types';

export const scheherazade_DETAILS: FontDetails = {
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
  };

export default scheherazade_DETAILS;
