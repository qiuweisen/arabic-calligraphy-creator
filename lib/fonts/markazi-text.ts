import type { FontDetails } from './types';

export const markazi_text_DETAILS: FontDetails = {
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
  };

export default markazi_text_DETAILS;
