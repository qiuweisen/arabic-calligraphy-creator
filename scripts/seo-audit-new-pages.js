/**
 * 新增页面SEO规范全面审查
 */

const http = require('http');
const cheerio = require('cheerio');

const BASE_URL = 'http://localhost:3000';

// 新增的页面列表
const NEW_PAGES = [
  // 指南页面
  '/guides/arabic-calligraphy-beginner-guide',
  '/guides/arabic-font-comparison', 
  '/guides/best-arabic-fonts-2025',
  '/guides/arabic-typography-trends-2025',
  
  // 教程页面
  '/tutorials/how-to-create-arabic-calligraphy-online',
  '/tutorials/arabic-font-selection-guide',
  '/tutorials/arabic-calligraphy-design-tips',
  '/tutorials/download-and-use-arabic-fonts',
  
  // 资源页面
  '/resources/free-arabic-fonts',

  // 用例页面
  '/use-cases/wedding-arabic-calligraphy',
  '/use-cases/business-logo-arabic-fonts',
  '/use-cases/social-media-arabic-typography',
  '/use-cases/religious-arabic-calligraphy',
  
  // About页面
  '/about/arabic-calligraphy-history'
];

function fetchPageContent(url) {
  return new Promise((resolve) => {
    const fullUrl = `${BASE_URL}${url}`;
    
    const req = http.get(fullUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url: url,
          status: res.statusCode,
          success: res.statusCode >= 200 && res.statusCode < 400,
          html: data
        });
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url: url,
        status: 'ERROR',
        success: false,
        error: err.message,
        html: ''
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url: url,
        status: 'TIMEOUT',
        success: false,
        error: 'Request timeout',
        html: ''
      });
    });
  });
}

function analyzeSEO(url, html) {
  if (!html) return null;
  
  const $ = cheerio.load(html);
  
  // 基本SEO元素
  const title = $('title').text().trim();
  const metaDescription = $('meta[name="description"]').attr('content') || '';
  const metaKeywords = $('meta[name="keywords"]').attr('content') || '';
  const canonical = $('link[rel="canonical"]').attr('href') || '';
  
  // Open Graph
  const ogTitle = $('meta[property="og:title"]').attr('content') || '';
  const ogDescription = $('meta[property="og:description"]').attr('content') || '';
  const ogUrl = $('meta[property="og:url"]').attr('content') || '';
  const ogType = $('meta[property="og:type"]').attr('content') || '';
  
  // Twitter Cards
  const twitterCard = $('meta[name="twitter:card"]').attr('content') || '';
  const twitterTitle = $('meta[name="twitter:title"]').attr('content') || '';
  const twitterDescription = $('meta[name="twitter:description"]').attr('content') || '';
  
  // 结构化数据
  const structuredData = $('script[type="application/ld+json"]').length > 0;
  const structuredDataContent = $('script[type="application/ld+json"]').html();
  
  // 内容分析
  const h1Count = $('h1').length;
  const h1Text = $('h1').first().text().trim();
  const h2Count = $('h2').length;
  const h3Count = $('h3').length;
  const imgCount = $('img').length;
  const imgWithAlt = $('img[alt]').length;
  const internalLinks = $('a[href^="/"]').length;
  const externalLinks = $('a[href^="http"]').length;
  
  // 面包屑导航
  const breadcrumbs = $('.breadcrumb, [aria-label="breadcrumb"]').length > 0;
  
  return {
    url,
    basic: {
      title: title,
      titleLength: title.length,
      metaDescription: metaDescription,
      descriptionLength: metaDescription.length,
      metaKeywords: metaKeywords,
      canonical: canonical
    },
    openGraph: {
      ogTitle: ogTitle,
      ogDescription: ogDescription,
      ogUrl: ogUrl,
      ogType: ogType
    },
    twitter: {
      twitterCard: twitterCard,
      twitterTitle: twitterTitle,
      twitterDescription: twitterDescription
    },
    structured: {
      hasStructuredData: structuredData,
      structuredDataValid: structuredDataContent ? true : false
    },
    content: {
      h1Count: h1Count,
      h1Text: h1Text,
      h2Count: h2Count,
      h3Count: h3Count,
      imgCount: imgCount,
      imgWithAlt: imgWithAlt,
      internalLinks: internalLinks,
      externalLinks: externalLinks,
      hasBreadcrumbs: breadcrumbs
    }
  };
}

function evaluateSEOIssues(seoData) {
  const issues = [];
  const warnings = [];
  
  // 标题检查
  if (!seoData.basic.title) {
    issues.push('缺少页面标题');
  } else if (seoData.basic.titleLength < 30) {
    warnings.push('标题过短（建议30-60字符）');
  } else if (seoData.basic.titleLength > 60) {
    warnings.push('标题过长（建议30-60字符）');
  }
  
  // 描述检查
  if (!seoData.basic.metaDescription) {
    issues.push('缺少meta description');
  } else if (seoData.basic.descriptionLength < 120) {
    warnings.push('描述过短（建议120-160字符）');
  } else if (seoData.basic.descriptionLength > 160) {
    warnings.push('描述过长（建议120-160字符）');
  }
  
  // 关键词检查
  if (!seoData.basic.metaKeywords) {
    warnings.push('缺少meta keywords');
  }
  
  // Canonical URL检查
  if (!seoData.basic.canonical) {
    issues.push('缺少canonical URL');
  }
  
  // Open Graph检查
  if (!seoData.openGraph.ogTitle) {
    warnings.push('缺少og:title');
  }
  if (!seoData.openGraph.ogDescription) {
    warnings.push('缺少og:description');
  }
  if (!seoData.openGraph.ogUrl) {
    warnings.push('缺少og:url');
  }
  if (!seoData.openGraph.ogType) {
    warnings.push('缺少og:type');
  }
  
  // Twitter Cards检查
  if (!seoData.twitter.twitterCard) {
    warnings.push('缺少twitter:card');
  }
  
  // 结构化数据检查
  if (!seoData.structured.hasStructuredData) {
    issues.push('缺少结构化数据');
  }
  
  // 内容结构检查
  if (seoData.content.h1Count === 0) {
    issues.push('缺少H1标题');
  } else if (seoData.content.h1Count > 1) {
    warnings.push('多个H1标题（建议只有一个）');
  }
  
  if (seoData.content.h2Count === 0) {
    warnings.push('缺少H2标题（建议有层级结构）');
  }
  
  // 图片检查
  if (seoData.content.imgCount > 0 && seoData.content.imgWithAlt < seoData.content.imgCount) {
    warnings.push(`${seoData.content.imgCount - seoData.content.imgWithAlt}个图片缺少alt属性`);
  }
  
  // 面包屑检查
  if (!seoData.content.hasBreadcrumbs) {
    warnings.push('缺少面包屑导航');
  }
  
  return { issues, warnings };
}

async function auditNewPagesSEO() {
  console.log('🔍 开始新增页面SEO规范全面审查...\n');
  
  const results = [];
  let totalIssues = 0;
  let totalWarnings = 0;
  
  for (const url of NEW_PAGES) {
    console.log(`📋 检查页面: ${url}`);
    
    const pageData = await fetchPageContent(url);
    
    if (!pageData.success) {
      console.log(`❌ 无法访问页面: ${pageData.status}`);
      continue;
    }
    
    const seoData = analyzeSEO(url, pageData.html);
    const evaluation = evaluateSEOIssues(seoData);
    
    results.push({
      url: url,
      seoData: seoData,
      issues: evaluation.issues,
      warnings: evaluation.warnings
    });
    
    totalIssues += evaluation.issues.length;
    totalWarnings += evaluation.warnings.length;
    
    // 显示结果
    if (evaluation.issues.length === 0 && evaluation.warnings.length === 0) {
      console.log(`✅ SEO规范良好`);
    } else {
      if (evaluation.issues.length > 0) {
        console.log(`❌ 严重问题 (${evaluation.issues.length}):`);
        evaluation.issues.forEach(issue => console.log(`   - ${issue}`));
      }
      if (evaluation.warnings.length > 0) {
        console.log(`⚠️  改进建议 (${evaluation.warnings.length}):`);
        evaluation.warnings.forEach(warning => console.log(`   - ${warning}`));
      }
    }
    
    console.log('');
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // 生成汇总报告
  console.log('📊 SEO审查汇总报告:');
  console.log(`检查页面数: ${NEW_PAGES.length}`);
  console.log(`严重问题总数: ${totalIssues}`);
  console.log(`改进建议总数: ${totalWarnings}`);
  
  const perfectPages = results.filter(r => r.issues.length === 0 && r.warnings.length === 0).length;
  const issuePages = results.filter(r => r.issues.length > 0).length;
  
  console.log(`SEO完美页面: ${perfectPages}`);
  console.log(`需要修复页面: ${issuePages}`);
  
  if (totalIssues === 0) {
    console.log('\n🎉 所有页面SEO规范检查通过！');
  } else {
    console.log('\n⚠️  发现SEO问题，建议修复后上线');
  }
  
  return totalIssues === 0;
}

// 运行审查
if (require.main === module) {
  auditNewPagesSEO().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = { auditNewPagesSEO };
