#!/usr/bin/env node

/**
 * IndexNow 提交脚本
 * 用于快速提交URL到Bing等搜索引擎进行收录
 */

const https = require('https');

const SITE_URL = 'https://arabic-calligraphy-generator.com';
const API_ENDPOINT = `${SITE_URL}/api/indexnow`;

// 核心静态页面
const CORE_PAGES = [
  '/',
  '/fonts',
  '/blog',
  '/faq',
  '/tutorials',
  '/guides',
  '/use-cases',
  '/resources',
  '/tools',
  '/features'
];

// 其他静态页面
const STATIC_PAGES = [
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/about-us',
  '/about/arabic-calligraphy-history'
];

// 博客文章（与sitemap同步）
const BLOG_POSTS = [
  '/blog/beginners-guide-to-calligraphy',
  '/blog/six-major-calligraphy-styles',
  '/blog/the-rich-history-of-arabic-calligraphy',
  '/blog/famous-arabic-calligraphers',
  '/blog/modern-arabic-typography',
  '/blog/quran-and-calligraphy'
];

// 字体页面（与sitemap同步）
const FONT_PAGES = [
  '/fonts/amiri',
  '/fonts/aref-ruqaa',
  '/fonts/scheherazade',
  '/fonts/noto-naskh-arabic',
  '/fonts/lateef',
  '/fonts/markazi-text',
  '/fonts/reem-kufi',
  '/fonts/cairo',
  '/fonts/harmattan',
  '/fonts/mada',
  '/fonts/tajawal',
  '/fonts/lemonada',
  '/fonts/el-messiri',
  '/fonts/jomhuria',
  '/fonts/rakkas',
  '/fonts/mirza',
  '/fonts/marhey'
];

// Guides页面
const GUIDES_PAGES = [
  '/guides/arabic-calligraphy-beginner-guide',
  '/guides/arabic-font-comparison',
  '/guides/best-arabic-fonts-2025',
  '/guides/arabic-typography-trends-2025'
];

// Tutorials页面
const TUTORIALS_PAGES = [
  '/tutorials/how-to-create-arabic-calligraphy-online',
  '/tutorials/arabic-font-selection-guide',
  '/tutorials/arabic-calligraphy-design-tips',
  '/tutorials/download-and-use-arabic-fonts'
];

// Resources页面
const RESOURCES_PAGES = [
  '/resources/free-arabic-fonts'
];

// Use Cases页面
const USE_CASES_PAGES = [
  '/use-cases/wedding-arabic-calligraphy',
  '/use-cases/business-logo-arabic-fonts',
  '/use-cases/social-media-arabic-typography',
  '/use-cases/religious-arabic-calligraphy'
];

/**
 * 发送HTTP POST请求
 */
function makeRequest(data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    
    const options = {
      hostname: 'arabic-calligraphy-generator.com',
      port: 443,
      path: '/api/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
        'User-Agent': 'IndexNow-Submission-Script/1.0'
      }
    };

    const req = https.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          resolve({ status: res.statusCode, data: result });
        } catch (error) {
          resolve({ status: res.statusCode, data: responseData });
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

/**
 * 提交URL列表到IndexNow
 */
async function submitUrls(urls, description = '') {
  console.log(`📤 提交${description}: ${urls.length}个URL`);
  
  try {
    const fullUrls = urls.map(path => `${SITE_URL}${path}`);
    const response = await makeRequest({ urls: fullUrls });
    
    if (response.status === 200 && response.data.success) {
      console.log(`✅ 成功提交 ${response.data.submitted} 个URL`);
      console.log(`📊 结果:`, response.data.results.map(r => 
        `${r.engine}: ${r.success ? '✅' : '❌'} (${r.status})`
      ).join(', '));
    } else {
      console.log(`❌ 提交失败:`, response.data);
    }
    
    return response.data;
  } catch (error) {
    console.error(`❌ 请求错误:`, error.message);
    return null;
  }
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  
  console.log('🚀 IndexNow 快速收录提交工具\n');
  
  if (args.length === 0) {
    console.log('📋 可用命令:');
    console.log('  npm run submit-indexnow all        # 提交所有页面（推荐）');
    console.log('  npm run submit-indexnow core       # 提交核心页面');
    console.log('  npm run submit-indexnow static     # 提交静态页面');
    console.log('  npm run submit-indexnow blog       # 提交博客文章');
    console.log('  npm run submit-indexnow fonts      # 提交字体页面');
    console.log('  npm run submit-indexnow guides     # 提交指南页面');
    console.log('  npm run submit-indexnow tutorials  # 提交教程页面');
    console.log('  npm run submit-indexnow resources  # 提交资源页面');
    console.log('  npm run submit-indexnow use-cases  # 提交用例页面');
    console.log('  npm run submit-indexnow custom <url1> <url2>  # 提交自定义URL');
    console.log('\n💡 示例:');
    console.log('  npm run submit-indexnow custom /new-page /updated-page');
    console.log('\n📊 统计信息:');
    console.log(`  核心页面: ${CORE_PAGES.length}个`);
    console.log(`  静态页面: ${STATIC_PAGES.length}个`);
    console.log(`  博客文章: ${BLOG_POSTS.length}个`);
    console.log(`  字体页面: ${FONT_PAGES.length}个`);
    console.log(`  指南页面: ${GUIDES_PAGES.length}个`);
    console.log(`  教程页面: ${TUTORIALS_PAGES.length}个`);
    console.log(`  资源页面: ${RESOURCES_PAGES.length}个`);
    console.log(`  用例页面: ${USE_CASES_PAGES.length}个`);
    console.log(`  总计: ${CORE_PAGES.length + STATIC_PAGES.length + BLOG_POSTS.length + FONT_PAGES.length + GUIDES_PAGES.length + TUTORIALS_PAGES.length + RESOURCES_PAGES.length + USE_CASES_PAGES.length}个页面`);
    return;
  }

  const command = args[0];
  
  switch (command) {
    case 'all':
      console.log('📤 提交所有页面到IndexNow（与sitemap同步）...\n');
      await submitUrls(CORE_PAGES, '核心页面');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(STATIC_PAGES, '静态页面');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(BLOG_POSTS, '博客文章');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(FONT_PAGES, '字体页面');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(GUIDES_PAGES, '指南页面');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(TUTORIALS_PAGES, '教程页面');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(RESOURCES_PAGES, '资源页面');
      await new Promise(resolve => setTimeout(resolve, 1000));
      await submitUrls(USE_CASES_PAGES, '用例页面');
      break;

    case 'core':
      await submitUrls(CORE_PAGES, '核心页面');
      break;

    case 'static':
      await submitUrls(STATIC_PAGES, '静态页面');
      break;

    case 'blog':
      await submitUrls(BLOG_POSTS, '博客文章');
      break;

    case 'fonts':
      await submitUrls(FONT_PAGES, '字体页面');
      break;

    case 'guides':
      await submitUrls(GUIDES_PAGES, '指南页面');
      break;

    case 'tutorials':
      await submitUrls(TUTORIALS_PAGES, '教程页面');
      break;

    case 'resources':
      await submitUrls(RESOURCES_PAGES, '资源页面');
      break;

    case 'use-cases':
      await submitUrls(USE_CASES_PAGES, '用例页面');
      break;
      
    case 'custom':
      const customUrls = args.slice(1);
      if (customUrls.length === 0) {
        console.log('❌ 请提供要提交的URL路径');
        console.log('💡 示例: npm run submit-indexnow custom /new-page /updated-page');
        return;
      }
      await submitUrls(customUrls, '自定义页面');
      break;
      
    default:
      console.log(`❌ 未知命令: ${command}`);
      console.log('💡 使用 npm run submit-indexnow 查看可用命令');
  }
  
  console.log('\n✨ 提交完成！');
  console.log('📊 通常在几分钟到几小时内，Bing会开始重新抓取这些页面');
}

// 运行主函数
main().catch(console.error);
