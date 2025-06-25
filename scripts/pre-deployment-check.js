#!/usr/bin/env node

/**
 * 上线前完整检查脚本
 * 确保网站没有基础错误，所有关键功能正常
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DOMAIN = 'arabic-calligraphy-generator.com';
const BASE_URL = `https://${DOMAIN}`;

// 需要检查的关键页面（手动定义，避免动态路由问题）
const STATIC_PAGES_TO_CHECK = [
  '/',
  '/fonts',
  '/guides',
  '/tutorials',
  '/resources',
  '/use-cases',
  '/blog',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/about-us',
  '/features',
  '/about/arabic-calligraphy-history'
];

// 动态页面示例（用于测试动态路由是否工作）
const DYNAMIC_PAGES_TO_CHECK = [
  '/blog/beginners-guide-to-calligraphy',
  '/fonts/amiri',
  '/guides/arabic-calligraphy-beginner-guide',
  '/tutorials/how-to-create-arabic-calligraphy-online',
  '/resources/free-arabic-fonts',
  '/use-cases/wedding-arabic-calligraphy'
];

console.log('🚀 上线前完整检查开始...\n');

// 1. 检查文件系统中对应的页面文件
async function checkFileSystemPages() {
  console.log('📁 第1步：验证页面文件是否存在...');

  const appDir = path.join(__dirname, '../app');
  const missingPages = [];

  for (const url of STATIC_PAGES_TO_CHECK) {
    const pagePath = url === '/' ?
      path.join(appDir, 'page.tsx') :
      path.join(appDir, url, 'page.tsx');

    if (!fs.existsSync(pagePath)) {
      missingPages.push({ url, expectedPath: pagePath });
      console.log(`❌ 缺失页面: ${url} (期望路径: ${pagePath})`);
    } else {
      console.log(`✅ 页面存在: ${url}`);
    }
  }

  if (missingPages.length > 0) {
    console.log(`\n🚨 发现 ${missingPages.length} 个缺失页面！`);
    return false;
  }

  console.log('✅ 所有静态页面文件都存在');
  return true;
}

// 3. HTTP状态检查
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const req = client.request(url, { 
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Pre-deployment-checker/1.0'
      }
    }, (res) => {
      resolve({
        statusCode: res.statusCode,
        location: res.headers.location,
        headers: res.headers
      });
    });
    
    req.on('error', reject);
    req.on('timeout', () => reject(new Error('Request timeout')));
    req.setTimeout(10000);
    req.end();
  });
}

async function checkHttpStatus() {
  console.log('\n🌐 第2步：检查静态页面HTTP状态码...');

  let hasErrors = false;
  const allUrls = [...STATIC_PAGES_TO_CHECK, ...DYNAMIC_PAGES_TO_CHECK];

  for (const url of allUrls) {
    const fullUrl = `${BASE_URL}${url}`;

    try {
      const response = await makeRequest(fullUrl);
      const status = response.statusCode;

      if (status === 200) {
        console.log(`✅ ${url} (${status})`);
      } else if (status >= 300 && status < 400) {
        console.log(`⚠️  ${url} (${status}) → ${response.location}`);
      } else {
        console.log(`❌ ${url} (${status})`);
        hasErrors = true;
      }
    } catch (error) {
      console.log(`❌ ${url} (ERROR: ${error.message})`);
      hasErrors = true;
    }

    // 避免请求过快
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  return hasErrors;
}

// 3. 关键功能检查
async function checkCriticalFeatures() {
  console.log('\n⚙️ 第3步：检查关键功能...');

  const checks = [
    { name: 'Sitemap XML', url: '/sitemap.xml' },
    { name: 'Robots.txt', url: '/robots.txt' },
    { name: 'IndexNow API', url: '/api/indexnow' }
  ];

  let allPassed = true;

  for (const check of checks) {
    try {
      const response = await makeRequest(`${BASE_URL}${check.url}`);
      if (response.statusCode === 200) {
        console.log(`✅ ${check.name}: 正常`);
      } else {
        console.log(`❌ ${check.name}: HTTP ${response.statusCode}`);
        allPassed = false;
      }
    } catch (error) {
      console.log(`❌ ${check.name}: ${error.message}`);
      allPassed = false;
    }
  }

  return allPassed;
}

// 主检查流程
async function runPreDeploymentCheck() {
  try {
    // 第1步：检查文件系统
    const filesExist = await checkFileSystemPages();

    // 第2步：HTTP状态检查
    const hasHttpErrors = await checkHttpStatus();

    // 第3步：关键功能检查
    const featuresWork = await checkCriticalFeatures();

    // 总结
    console.log('\n' + '='.repeat(50));
    console.log('📊 上线前检查总结');
    console.log('='.repeat(50));

    if (filesExist && !hasHttpErrors && featuresWork) {
      console.log('🎉 所有检查通过！网站可以安全上线。');
      console.log(`✅ 检查了 ${STATIC_PAGES_TO_CHECK.length} 个静态页面`);
      console.log(`✅ 检查了 ${DYNAMIC_PAGES_TO_CHECK.length} 个动态页面示例`);
      process.exit(0);
    } else {
      console.log('🚨 发现问题，请修复后再上线：');
      if (!filesExist) console.log('   - 存在缺失的页面文件');
      if (hasHttpErrors) console.log('   - 存在HTTP错误');
      if (!featuresWork) console.log('   - 关键功能异常');
      process.exit(1);
    }

  } catch (error) {
    console.error('❌ 检查过程中发生错误:', error.message);
    process.exit(1);
  }
}

// 运行检查
runPreDeploymentCheck();
