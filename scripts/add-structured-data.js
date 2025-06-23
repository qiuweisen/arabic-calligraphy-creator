/**
 * 批量为页面添加结构化数据
 */

const fs = require('fs');
const path = require('path');

// 需要添加结构化数据的页面配置
const PAGES_CONFIG = [
  {
    file: 'app/use-cases/page.tsx',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Arabic Calligraphy Use Cases",
      "description": "Discover practical applications of Arabic calligraphy for weddings, business, social media, and religious purposes with professional examples and tutorials.",
      "url": "https://arabic-calligraphy-generator.com/use-cases"
    }
  },
  {
    file: 'app/blog/page.tsx',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Arabic Calligraphy Blog",
      "description": "Explore the rich world of Arabic calligraphy through our comprehensive blog covering history, techniques, famous calligraphers, and modern applications.",
      "url": "https://arabic-calligraphy-generator.com/blog"
    }
  },
  {
    file: 'app/faq/page.tsx',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "name": "Arabic Calligraphy FAQ",
      "description": "Frequently asked questions about Arabic calligraphy, our generator tool, fonts, and design techniques. Get expert answers to common questions.",
      "url": "https://arabic-calligraphy-generator.com/faq"
    }
  },
  {
    file: 'app/contact/page.tsx',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Us",
      "description": "Get in touch with our Arabic calligraphy experts. Contact us for support, feedback, or collaboration opportunities.",
      "url": "https://arabic-calligraphy-generator.com/contact"
    }
  }
];

function addStructuredDataToFile(filePath, structuredData) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`❌ 文件不存在: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // 检查是否已经有结构化数据
    if (content.includes('application/ld+json')) {
      console.log(`⚠️  ${filePath} 已有结构化数据，跳过`);
      return true;
    }
    
    // 查找export default function的位置
    const functionMatch = content.match(/export default function \w+\(\) \{[\s\S]*?return \(\s*<>/);
    
    if (!functionMatch) {
      console.log(`❌ 无法找到函数返回结构: ${filePath}`);
      return false;
    }
    
    // 在return (<>之后添加结构化数据
    const insertPoint = functionMatch.index + functionMatch[0].length;
    
    const structuredDataScript = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(structuredData, null, 6)}) }}
      />`;
    
    const newContent = content.slice(0, insertPoint) + structuredDataScript + content.slice(insertPoint);
    
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`✅ 已为 ${filePath} 添加结构化数据`);
    return true;
    
  } catch (error) {
    console.log(`❌ 处理 ${filePath} 时出错: ${error.message}`);
    return false;
  }
}

function addStructuredDataBatch() {
  console.log('🔧 开始批量添加结构化数据...\n');
  
  let successCount = 0;
  let totalCount = PAGES_CONFIG.length;
  
  for (const config of PAGES_CONFIG) {
    if (addStructuredDataToFile(config.file, config.structuredData)) {
      successCount++;
    }
  }
  
  console.log(`\n📊 批量处理完成:`);
  console.log(`成功: ${successCount}/${totalCount}`);
  console.log(`失败: ${totalCount - successCount}/${totalCount}`);
  
  if (successCount === totalCount) {
    console.log('\n🎉 所有页面都已成功添加结构化数据！');
  } else {
    console.log('\n⚠️  部分页面处理失败，请手动检查');
  }
  
  return successCount === totalCount;
}

// 运行批量处理
if (require.main === module) {
  const success = addStructuredDataBatch();
  process.exit(success ? 0 : 1);
}

module.exports = { addStructuredDataBatch };
