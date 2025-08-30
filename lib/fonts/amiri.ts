import type { FontDetails } from './types';

export const amiri_DETAILS: FontDetails = {
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
  };

export default amiri_DETAILS;
