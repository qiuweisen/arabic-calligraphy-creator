import type { FontDetails } from './types';

export const harmattan_DETAILS: FontDetails = {
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
  };

export default harmattan_DETAILS;
