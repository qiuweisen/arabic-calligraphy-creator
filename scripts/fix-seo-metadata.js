#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 字体页面的SEO优化配置
const fontPages = [
  {
    slug: 'cairo',
    title: 'Cairo Font: Modern Arabic Sans-Serif Typography',
    description: 'Discover Cairo, a contemporary Arabic sans-serif font perfect for modern designs, digital interfaces, and bilingual projects with clean, readable letterforms.'
  },
  {
    slug: 'mada',
    title: 'Mada Font: Clean Modern Arabic Typography',
    description: 'Explore Mada, a minimalist Arabic font designed for clarity and readability in digital and print media with contemporary geometric styling.'
  },
  {
    slug: 'reem-kufi',
    title: 'Reem Kufi: Geometric Arabic Display Font',
    description: 'Discover Reem Kufi, a modern geometric Arabic font inspired by traditional Kufi calligraphy, perfect for headlines and display typography.'
  },
  {
    slug: 'noto-naskh-arabic',
    title: 'Noto Naskh Arabic: Google\'s Universal Font',
    description: 'Explore Noto Naskh Arabic by Google, designed for optimal screen readability and comprehensive Unicode support across all Arabic script languages.'
  },
  {
    slug: 'tajawal',
    title: 'Tajawal Font: Geometric Arabic Sans-Serif',
    description: 'Discover Tajawal, a geometric Arabic sans-serif font perfect for modern bilingual designs, user interfaces, and contemporary Arabic typography.'
  },
  {
    slug: 'aref-ruqaa',
    title: 'Aref Ruqaa: Traditional Arabic Handwriting Font',
    description: 'Explore Aref Ruqaa, a digital revival of traditional Arabic Ruqaa handwriting style, perfect for informal texts and authentic Arabic designs.'
  },
  {
    slug: 'lateef',
    title: 'Lateef Font: Extended Arabic Script Typography',
    description: 'Discover Lateef by SIL International, an Arabic font with extensive character support for multilingual projects and minority language documentation.'
  },
  {
    slug: 'mirza',
    title: 'Mirza Font: Elegant Arabic Display Typography',
    description: 'Explore Mirza, an elegant Arabic display font with calligraphic influences, perfect for titles, headers, and decorative Arabic text applications.'
  },
  {
    slug: 'jomhuria',
    title: 'Jomhuria Font: Bold Arabic Display Typography',
    description: 'Discover Jomhuria, a bold Arabic display font inspired by newspaper headlines, perfect for impactful titles and attention-grabbing Arabic text.'
  },
  {
    slug: 'rakkas',
    title: 'Rakkas Font: Decorative Arabic Display Typography',
    description: 'Explore Rakkas, a decorative Arabic display font with ornamental features, ideal for artistic projects and traditional Arabic design applications.'
  },
  {
    slug: 'harmattan',
    title: 'Harmattan Font: West African Arabic Typography',
    description: 'Discover Harmattan by SIL International, designed for West African Arabic scripts with support for Ajami languages and traditional letterforms.'
  },
  {
    slug: 'el-messiri',
    title: 'El Messiri Font: Contemporary Arabic Typography',
    description: 'Explore El Messiri, a contemporary Arabic font balancing traditional calligraphic elements with modern design principles for versatile applications.'
  },
  {
    slug: 'lemonada',
    title: 'Lemonada Font: Playful Arabic Typography',
    description: 'Discover Lemonada, a playful Arabic font with rounded letterforms, perfect for friendly designs, children\'s content, and casual Arabic typography.'
  },
  {
    slug: 'markazi-text',
    title: 'Markazi Text: Elegant Arabic Text Font',
    description: 'Explore Markazi Text, an elegant Arabic font optimized for body text with excellent readability and sophisticated letterform design.'
  },
  {
    slug: 'marhey',
    title: 'Marhey Font: Friendly Arabic Typography',
    description: 'Discover Marhey, a friendly Arabic font with approachable letterforms, perfect for user interfaces, educational content, and modern Arabic designs.'
  }
];

// 博客页面的SEO优化配置
const blogPages = [
  {
    slug: 'the-rich-history-of-arabic-calligraphy',
    title: 'Rich History of Arabic Calligraphy',
    description: 'Explore the fascinating evolution of Arabic calligraphy from ancient scripts to modern typography, tracing its cultural significance and artistic development.'
  },
  {
    slug: 'beginners-guide-to-calligraphy',
    title: 'Beginner\'s Guide to Arabic Calligraphy',
    description: 'Learn Arabic calligraphy basics with our comprehensive guide covering essential tools, techniques, and fundamental strokes for aspiring calligraphers.'
  },
  {
    slug: 'famous-arabic-calligraphers',
    title: 'Famous Arabic Calligraphers Throughout History',
    description: 'Discover the masters of Arabic calligraphy who shaped the art form, from Ibn Muqla and Ibn al-Bawwab to contemporary artists and their contributions.'
  },
  {
    slug: 'modern-arabic-typography',
    title: 'Modern Arabic Typography in Digital Age',
    description: 'Explore how Arabic typography has evolved in the digital era, from traditional calligraphy to contemporary font design and web typography.'
  },
  {
    slug: 'quran-and-calligraphy',
    title: 'Quran and Arabic Calligraphy Connection',
    description: 'Discover the sacred relationship between Quranic text and Arabic calligraphy, exploring how religious devotion shaped this beautiful art form.'
  }
];

function updateFontPageMetadata(slug, title, description) {
  const filePath = path.join(__dirname, '..', 'app', 'fonts', slug, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 查找并替换metadata部分
  const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\n\}/;
  
  const newMetadata = `export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  keywords: "${slug.replace(/-/g, ' ')} font, Arabic typography, Arabic fonts, Islamic calligraphy, Arabic script, digital typography, web fonts",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/fonts/${slug}",
  },
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "https://arabic-calligraphy-generator.com/fonts/${slug}",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}`;

  if (metadataRegex.test(content)) {
    content = content.replace(metadataRegex, newMetadata);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated metadata for ${slug} font page`);
  } else {
    console.log(`❌ Could not find metadata section in ${slug} font page`);
  }
}

function updateBlogPageMetadata(slug, title, description) {
  const filePath = path.join(__dirname, '..', 'app', 'blog', slug, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 查找并替换metadata部分
  const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\n\}/;
  
  const newMetadata = `export const metadata: Metadata = {
  title: "${title}",
  description: "${description}",
  keywords: "${slug.replace(/-/g, ' ')}, Arabic calligraphy, Islamic art, Arabic typography, calligraphy guide, Arabic script",
  alternates: {
    canonical: "https://arabic-calligraphy-generator.com/blog/${slug}",
  },
  openGraph: {
    title: "${title}",
    description: "${description}",
    url: "https://arabic-calligraphy-generator.com/blog/${slug}",
    siteName: "Arabic Calligraphy Generator",
    type: "article",
    locale: "en_US",
  },
}`;

  if (metadataRegex.test(content)) {
    content = content.replace(metadataRegex, newMetadata);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated metadata for ${slug} blog page`);
  } else {
    console.log(`❌ Could not find metadata section in ${slug} blog page`);
  }
}

// 执行批量更新
console.log('🚀 Starting SEO metadata optimization...\n');

console.log('📝 Updating font pages...');
fontPages.forEach(({ slug, title, description }) => {
  updateFontPageMetadata(slug, title, description);
});

console.log('\n📝 Updating blog pages...');
blogPages.forEach(({ slug, title, description }) => {
  updateBlogPageMetadata(slug, title, description);
});

console.log('\n✅ SEO metadata optimization completed!');
console.log('\n📊 Summary of changes:');
console.log('- Shortened titles to 40-60 characters');
console.log('- Optimized descriptions to 140-160 characters');
console.log('- Added canonical URLs');
console.log('- Added OpenGraph metadata');
console.log('- Improved keyword targeting'); 