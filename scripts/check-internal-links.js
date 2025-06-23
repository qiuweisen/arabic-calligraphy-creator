/**
 * 内链检查脚本 - 验证导航栏和Footer中的所有内链是否有效
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';

// 从导航栏和Footer提取的所有内链
const INTERNAL_LINKS = [
  // 主导航
  '/',
  '/fonts',
  '/guides',
  '/tutorials',
  '/resources',
  '/use-cases',
  '/blog',
  '/faq',
  '/contact',
  
  // Guides 下拉菜单
  '/guides/arabic-calligraphy-beginner-guide',
  '/guides/arabic-font-comparison',
  '/guides/best-arabic-fonts-2025',
  '/guides/arabic-typography-trends-2025',
  
  // Tutorials 下拉菜单
  '/tutorials/how-to-create-arabic-calligraphy-online',
  '/tutorials/arabic-font-selection-guide',
  '/tutorials/arabic-calligraphy-design-tips',
  '/tutorials/download-and-use-arabic-fonts',
  
  // Resources 下拉菜单
  '/resources/free-arabic-fonts'
  
  // Footer 链接
  '/features',
  '/privacy-policy',
  '/terms-of-service',
  '/fonts/amiri',
  '/fonts/cairo',
  '/use-cases/wedding-arabic-calligraphy',
  '/use-cases/business-logo-arabic-fonts',
  
  // 其他重要页面
  '/about-us',
  '/templates'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = `${BASE_URL}${url}`;
    
    const req = http.get(fullUrl, (res) => {
      resolve({
        url: url,
        status: res.statusCode,
        success: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url: url,
        status: 'ERROR',
        success: false,
        error: err.message
      });
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve({
        url: url,
        status: 'TIMEOUT',
        success: false,
        error: 'Request timeout'
      });
    });
  });
}

async function checkAllLinks() {
  console.log('🔍 开始检查内链...\n');
  
  const results = [];
  const failed = [];
  
  for (const link of INTERNAL_LINKS) {
    const result = await checkUrl(link);
    results.push(result);
    
    if (result.success) {
      console.log(`✅ ${result.url} - ${result.status}`);
    } else {
      console.log(`❌ ${result.url} - ${result.status} ${result.error ? `(${result.error})` : ''}`);
      failed.push(result);
    }
  }
  
  console.log('\n📊 检查结果汇总:');
  console.log(`总链接数: ${results.length}`);
  console.log(`成功: ${results.filter(r => r.success).length}`);
  console.log(`失败: ${failed.length}`);
  
  if (failed.length > 0) {
    console.log('\n❌ 失败的链接:');
    failed.forEach(f => {
      console.log(`  - ${f.url}: ${f.status} ${f.error ? `(${f.error})` : ''}`);
    });
  } else {
    console.log('\n🎉 所有内链检查通过！');
  }
  
  // 保存结果到文件
  const reportPath = path.join(__dirname, '../link-check-report.json');
  fs.writeFileSync(reportPath, JSON.stringify({
    timestamp: new Date().toISOString(),
    total: results.length,
    success: results.filter(r => r.success).length,
    failed: failed.length,
    results: results
  }, null, 2));
  
  console.log(`\n📄 详细报告已保存到: ${reportPath}`);
  
  return failed.length === 0;
}

// 运行检查
if (require.main === module) {
  checkAllLinks().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = { checkAllLinks, INTERNAL_LINKS };
