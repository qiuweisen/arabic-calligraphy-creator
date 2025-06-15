const https = require('https');
const http = require('http');

// 验证结构化数据的函数
function validateStructuredData(url) {
  console.log(`🔍 正在验证结构化数据: ${url}`);
  
  const client = url.startsWith('https') ? https : http;
  
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          // 查找所有的 JSON-LD 结构化数据
          const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis;
          const matches = [...data.matchAll(jsonLdRegex)];
          
          if (matches.length === 0) {
            console.log('❌ 未找到结构化数据');
            resolve({ success: false, message: '未找到结构化数据' });
            return;
          }
          
          console.log(`✅ 找到 ${matches.length} 个结构化数据块`);
          
          matches.forEach((match, index) => {
            try {
              const jsonData = JSON.parse(match[1].trim());
              console.log(`\n📋 结构化数据 ${index + 1}:`);
              console.log(`   类型: ${jsonData['@type']}`);
              console.log(`   名称: ${jsonData.name || '未指定'}`);
              console.log(`   描述: ${jsonData.description ? jsonData.description.substring(0, 100) + '...' : '未指定'}`);
              console.log(`   ✅ JSON 格式有效`);
            } catch (parseError) {
              console.log(`❌ 结构化数据 ${index + 1} JSON 格式无效:`, parseError.message);
            }
          });
          
          resolve({ success: true, count: matches.length });
        } catch (error) {
          console.log('❌ 验证过程中出错:', error.message);
          reject(error);
        }
      });
    }).on('error', (err) => {
      console.log('❌ 请求失败:', err.message);
      reject(err);
    });
  });
}

// 验证多个页面
async function validateAllPages() {
  const baseUrl = 'http://localhost:3000';
  const pages = [
    '/',
    '/fonts',
    '/fonts/amiri',
    '/fonts/cairo',
    '/blog',
  ];
  
  console.log('🚀 开始验证所有页面的结构化数据\n');
  console.log('='.repeat(60));
  
  for (const page of pages) {
    const fullUrl = baseUrl + page;
    try {
      await validateStructuredData(fullUrl);
      console.log('='.repeat(60));
    } catch (error) {
      console.log(`❌ 验证 ${page} 失败:`, error.message);
      console.log('='.repeat(60));
    }
  }
  
  console.log('\n🎉 验证完成！');
  console.log('\n💡 提示：');
  console.log('- 如果看到 ✅ 表示结构化数据正确实现');
  console.log('- 如果看到 ❌ 表示有问题需要修复');
  console.log('- 您也可以使用 Google 的结构化数据测试工具：');
  console.log('  https://search.google.com/test/rich-results');
}

// 运行验证
validateAllPages().catch(console.error); 