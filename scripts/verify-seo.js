#!/usr/bin/env node

/**
 * SEO验证脚本
 * 检查URL重定向、sitemap正确性和其他SEO最佳实践
 */

const https = require('https');
const http = require('http');

const DOMAIN = 'arabic-calligraphy-generator.com';
const BASE_URL = `https://${DOMAIN}`;

// 需要测试的重定向
const REDIRECTS_TO_TEST = [
  {
    from: '/blog/beginners-guide-to-arabic-calligraphy',
    to: '/blog/beginners-guide-to-calligraphy',
    expectedStatus: 301
  }
];

// 需要检查的关键页面
const PAGES_TO_CHECK = [
  '/',
  '/blog',
  '/blog/beginners-guide-to-calligraphy',
  '/fonts',
  '/guides',
  '/tutorials',
  '/resources',
  '/use-cases',
  '/templates',
  '/faq',
  '/contact',
  '/features',
  '/about-us',
  '/privacy-policy',
  '/terms-of-service',
  '/sitemap.xml'
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const req = client.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        statusCode: res.statusCode,
        location: res.headers.location,
        headers: res.headers
      });
    });
    
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
    req.end();
  });
}

async function testRedirect(redirect) {
  try {
    console.log(`\n🔄 Testing redirect: ${redirect.from}`);
    const response = await makeRequest(`${BASE_URL}${redirect.from}`);
    
    if (response.statusCode === redirect.expectedStatus) {
      if (response.location && response.location.includes(redirect.to)) {
        console.log(`✅ SUCCESS: ${redirect.from} → ${redirect.to} (${response.statusCode})`);
        return true;
      } else {
        console.log(`❌ FAILED: Wrong destination. Expected: ${redirect.to}, Got: ${response.location}`);
        return false;
      }
    } else {
      console.log(`❌ FAILED: Wrong status code. Expected: ${redirect.expectedStatus}, Got: ${response.statusCode}`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ERROR: ${error.message}`);
    return false;
  }
}

async function checkPage(path) {
  try {
    console.log(`\n📄 Checking page: ${path}`);
    const response = await makeRequest(`${BASE_URL}${path}`);
    
    if (response.statusCode === 200) {
      console.log(`✅ SUCCESS: ${path} (${response.statusCode})`);
      return true;
    } else {
      console.log(`❌ FAILED: ${path} (${response.statusCode})`);
      return false;
    }
  } catch (error) {
    console.log(`❌ ERROR: ${path} - ${error.message}`);
    return false;
  }
}

async function main() {
  console.log(`🔍 SEO Verification for ${DOMAIN}\n`);
  console.log('='.repeat(50));
  
  let allPassed = true;
  
  // Test redirects
  console.log('\n📊 TESTING REDIRECTS');
  console.log('-'.repeat(30));
  for (const redirect of REDIRECTS_TO_TEST) {
    const passed = await testRedirect(redirect);
    if (!passed) allPassed = false;
  }
  
  // Check pages
  console.log('\n📊 CHECKING PAGES');
  console.log('-'.repeat(30));
  for (const page of PAGES_TO_CHECK) {
    const passed = await checkPage(page);
    if (!passed) allPassed = false;
  }
  
  // Summary
  console.log('\n' + '='.repeat(50));
  if (allPassed) {
    console.log('🎉 ALL TESTS PASSED! SEO setup looks good.');
  } else {
    console.log('⚠️  SOME TESTS FAILED. Please check the issues above.');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { makeRequest, testRedirect, checkPage }; 