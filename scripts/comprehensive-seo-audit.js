/**
 * 全面SEO审查和优化脚本
 */

const http = require('http');

const BASE_URL = 'http://localhost:3001';

// 需要检查的所有页面
const ALL_PAGES = [
  // 核心页面
  '/',
  '/fonts',
  '/guides',
  '/tutorials',
  '/resources',
  '/tools',
  '/use-cases',
  '/blog',
  '/faq',
  '/contact',
  
  // 新增页面
  '/guides/arabic-calligraphy-beginner-guide',
  '/guides/arabic-font-comparison',
  '/guides/best-arabic-fonts-2025',
  '/guides/arabic-typography-trends-2025',
  '/tutorials/how-to-create-arabic-calligraphy-online',
  '/tutorials/arabic-font-selection-guide',
  '/tutorials/arabic-calligraphy-design-tips',
  '/tutorials/download-and-use-arabic-fonts',
  '/resources/design-inspiration',
  '/resources/design-templates',
  '/resources/free-arabic-fonts',
  '/use-cases/wedding-arabic-calligraphy',
  '/use-cases/business-logo-arabic-fonts',
  '/use-cases/social-media-arabic-typography',
  '/use-cases/religious-arabic-calligraphy',
  '/tools/color-palette-generator',
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
    
    req.setTimeout(15000, () => {
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

function extractSEOData(html) {
  if (!html) return null;
  
  // 提取基本SEO元素
  const titleMatch = html.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : '';
  
  const descMatch = html.match(/name="description"\s+content="([^"]*?)"/);
  const description = descMatch ? descMatch[1].trim() : '';
  
  const keywordsMatch = html.match(/name="keywords"\s+content="([^"]*?)"/);
  const keywords = keywordsMatch ? keywordsMatch[1].trim() : '';
  
  const canonicalMatch = html.match(/rel="canonical"\s+href="([^"]*?)"/);
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : '';
  
  // Open Graph
  const ogTitleMatch = html.match(/property="og:title"\s+content="([^"]*?)"/);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : '';
  
  const ogDescMatch = html.match(/property="og:description"\s+content="([^"]*?)"/);
  const ogDescription = ogDescMatch ? ogDescMatch[1].trim() : '';
  
  const ogUrlMatch = html.match(/property="og:url"\s+content="([^"]*?)"/);
  const ogUrl = ogUrlMatch ? ogUrlMatch[1].trim() : '';
  
  const ogTypeMatch = html.match(/property="og:type"\s+content="([^"]*?)"/);
  const ogType = ogTypeMatch ? ogTypeMatch[1].trim() : '';
  
  // Twitter Cards
  const twitterCardMatch = html.match(/name="twitter:card"\s+content="([^"]*?)"/);
  const twitterCard = twitterCardMatch ? twitterCardMatch[1].trim() : '';
  
  const twitterTitleMatch = html.match(/name="twitter:title"\s+content="([^"]*?)"/);
  const twitterTitle = twitterTitleMatch ? twitterTitleMatch[1].trim() : '';
  
  const twitterDescMatch = html.match(/name="twitter:description"\s+content="([^"]*?)"/);
  const twitterDescription = twitterDescMatch ? twitterDescMatch[1].trim() : '';
  
  // 结构化数据
  const hasStructuredData = html.includes('application/ld+json');
  
  // 内容分析
  const h1Matches = html.match(/<h1[^>]*>(.*?)<\/h1>/g);
  const h1Count = h1Matches ? h1Matches.length : 0;
  const h1Text = h1Matches ? h1Matches[0].replace(/<[^>]*>/g, '').trim() : '';
  
  const h2Count = (html.match(/<h2[^>]*>/g) || []).length;
  const h3Count = (html.match(/<h3[^>]*>/g) || []).length;
  
  const imgCount = (html.match(/<img[^>]*>/g) || []).length;
  const imgWithAltCount = (html.match(/<img[^>]*alt="[^"]*"[^>]*>/g) || []).length;
  
  const internalLinksCount = (html.match(/href="\/[^"]*"/g) || []).length;
  const externalLinksCount = (html.match(/href="https?:\/\/[^"]*"/g) || []).length;
  
  const hasBreadcrumbs = html.includes('breadcrumb') || html.includes('Breadcrumb');
  
  return {
    basic: {
      title,
      titleLength: title.length,
      description,
      descriptionLength: description.length,
      keywords,
      canonical
    },
    openGraph: {
      ogTitle,
      ogDescription,
      ogUrl,
      ogType
    },
    twitter: {
      twitterCard,
      twitterTitle,
      twitterDescription
    },
    structured: {
      hasStructuredData
    },
    content: {
      h1Count,
      h1Text,
      h2Count,
      h3Count,
      imgCount,
      imgWithAltCount,
      internalLinksCount,
      externalLinksCount,
      hasBreadcrumbs
    }
  };
}

function evaluateSEO(seoData) {
  const issues = [];
  const warnings = [];
  const suggestions = [];
  let score = 0;
  
  // 标题检查 (20分)
  if (!seoData.basic.title) {
    issues.push('缺少页面标题');
  } else {
    score += 10;
    if (seoData.basic.titleLength < 30) {
      warnings.push(`标题过短: ${seoData.basic.titleLength}字符 (建议30-60)`);
    } else if (seoData.basic.titleLength > 60) {
      warnings.push(`标题过长: ${seoData.basic.titleLength}字符 (建议30-60)`);
    } else {
      score += 10;
    }
  }
  
  // 描述检查 (20分)
  if (!seoData.basic.description) {
    issues.push('缺少meta description');
  } else {
    score += 10;
    if (seoData.basic.descriptionLength < 120) {
      warnings.push(`描述过短: ${seoData.basic.descriptionLength}字符 (建议120-160)`);
    } else if (seoData.basic.descriptionLength > 160) {
      warnings.push(`描述过长: ${seoData.basic.descriptionLength}字符 (建议120-160)`);
    } else {
      score += 10;
    }
  }
  
  // 关键词检查 (5分)
  if (seoData.basic.keywords) {
    score += 5;
  } else {
    warnings.push('缺少meta keywords');
  }
  
  // Canonical URL检查 (10分)
  if (seoData.basic.canonical) {
    score += 10;
  } else {
    issues.push('缺少canonical URL');
  }
  
  // Open Graph检查 (20分)
  if (seoData.openGraph.ogTitle) score += 5;
  else warnings.push('缺少og:title');
  
  if (seoData.openGraph.ogDescription) score += 5;
  else warnings.push('缺少og:description');
  
  if (seoData.openGraph.ogUrl) score += 5;
  else warnings.push('缺少og:url');
  
  if (seoData.openGraph.ogType) score += 5;
  else warnings.push('缺少og:type');
  
  // Twitter Cards检查 (5分)
  if (seoData.twitter.twitterCard) score += 5;
  else warnings.push('缺少twitter:card');
  
  // 结构化数据检查 (10分)
  if (seoData.structured.hasStructuredData) {
    score += 10;
  } else {
    issues.push('缺少结构化数据');
  }
  
  // 内容结构检查 (10分)
  if (seoData.content.h1Count === 0) {
    issues.push('缺少H1标题');
  } else if (seoData.content.h1Count > 1) {
    warnings.push(`多个H1标题: ${seoData.content.h1Count}个 (建议只有1个)`);
    score += 5;
  } else {
    score += 10;
  }
  
  if (seoData.content.h2Count === 0) {
    suggestions.push('建议添加H2标题以改善内容结构');
  }
  
  // 图片优化检查
  if (seoData.content.imgCount > 0 && seoData.content.imgWithAltCount < seoData.content.imgCount) {
    warnings.push(`${seoData.content.imgCount - seoData.content.imgWithAltCount}个图片缺少alt属性`);
  }
  
  // 面包屑检查
  if (!seoData.content.hasBreadcrumbs) {
    suggestions.push('建议添加面包屑导航');
  }
  
  return { score, issues, warnings, suggestions };
}

async function comprehensiveSEOAudit() {
  console.log('🔍 开始全面SEO审查...\n');
  
  const results = [];
  let totalScore = 0;
  let totalIssues = 0;
  let totalWarnings = 0;
  let totalSuggestions = 0;
  
  for (const url of ALL_PAGES) {
    console.log(`📋 检查页面: ${url}`);
    
    const pageData = await fetchPageContent(url);
    
    if (!pageData.success) {
      console.log(`❌ 无法访问: ${pageData.status}`);
      continue;
    }
    
    const seoData = extractSEOData(pageData.html);
    const evaluation = evaluateSEO(seoData);
    
    results.push({
      url: url,
      seoData: seoData,
      evaluation: evaluation
    });
    
    totalScore += evaluation.score;
    totalIssues += evaluation.issues.length;
    totalWarnings += evaluation.warnings.length;
    totalSuggestions += evaluation.suggestions.length;
    
    // 显示结果
    const scoreColor = evaluation.score >= 80 ? '🟢' : evaluation.score >= 60 ? '🟡' : '🔴';
    console.log(`${scoreColor} SEO得分: ${evaluation.score}/100`);
    
    if (evaluation.issues.length > 0) {
      console.log(`   ❌ 严重问题 (${evaluation.issues.length}): ${evaluation.issues.join(', ')}`);
    }
    if (evaluation.warnings.length > 0) {
      console.log(`   ⚠️  警告 (${evaluation.warnings.length}): ${evaluation.warnings.join(', ')}`);
    }
    if (evaluation.suggestions.length > 0) {
      console.log(`   💡 建议 (${evaluation.suggestions.length}): ${evaluation.suggestions.join(', ')}`);
    }
    
    console.log('');
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  // 生成汇总报告
  const avgScore = Math.round(totalScore / results.length);
  console.log('📊 SEO审查汇总报告:');
  console.log(`检查页面数: ${ALL_PAGES.length}`);
  console.log(`平均SEO得分: ${avgScore}/100`);
  console.log(`严重问题总数: ${totalIssues}`);
  console.log(`警告总数: ${totalWarnings}`);
  console.log(`改进建议总数: ${totalSuggestions}`);
  
  const excellentPages = results.filter(r => r.evaluation.score >= 80).length;
  const goodPages = results.filter(r => r.evaluation.score >= 60 && r.evaluation.score < 80).length;
  const poorPages = results.filter(r => r.evaluation.score < 60).length;
  
  console.log(`🟢 优秀页面 (80+分): ${excellentPages}`);
  console.log(`🟡 良好页面 (60-79分): ${goodPages}`);
  console.log(`🔴 需改进页面 (<60分): ${poorPages}`);
  
  // 生成需要修复的页面列表
  const pagesToFix = results.filter(r => r.evaluation.issues.length > 0);
  if (pagesToFix.length > 0) {
    console.log('\n🔧 需要修复的页面:');
    pagesToFix.forEach(page => {
      console.log(`  ${page.url}: ${page.evaluation.issues.join(', ')}`);
    });
  }
  
  if (avgScore >= 80) {
    console.log('\n🎉 SEO优化优秀，可以上线！');
  } else if (avgScore >= 60) {
    console.log('\n⚠️  SEO优化良好，建议修复严重问题后上线');
  } else {
    console.log('\n❌ SEO优化不足，需要修复后上线');
  }
  
  return { avgScore, results, pagesToFix };
}

// 运行审查
if (require.main === module) {
  comprehensiveSEOAudit().then(result => {
    process.exit(result.avgScore >= 60 ? 0 : 1);
  });
}

module.exports = { comprehensiveSEOAudit };
