/**
 * 检查慢速页面的脚本 - 专门测试主页和字体页面
 */

const http = require('http');

const BASE_URL = 'http://localhost:3000';
const SLOW_PAGES = ['/', '/fonts'];

function checkUrl(url, timeout = 15000) {
  return new Promise((resolve) => {
    const fullUrl = `${BASE_URL}${url}`;
    console.log(`🔍 检查页面: ${fullUrl}`);
    
    const req = http.get(fullUrl, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const contentLength = data.length;
        resolve({
          url: url,
          status: res.statusCode,
          success: res.statusCode >= 200 && res.statusCode < 400,
          contentLength: contentLength,
          hasContent: contentLength > 1000
        });
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
    
    req.setTimeout(timeout, () => {
      req.destroy();
      resolve({
        url: url,
        status: 'TIMEOUT',
        success: false,
        error: `Request timeout after ${timeout}ms`
      });
    });
  });
}

async function checkSlowPages() {
  console.log('🔍 开始检查慢速页面...\n');
  
  for (const page of SLOW_PAGES) {
    const result = await checkUrl(page, 15000); // 15秒超时
    
    if (result.success) {
      console.log(`✅ ${result.url} - ${result.status} (${result.contentLength} bytes)`);
      if (result.contentLength > 50000) {
        console.log(`   📊 大页面: ${Math.round(result.contentLength / 1024)}KB`);
      }
    } else {
      console.log(`❌ ${result.url} - ${result.status} ${result.error ? `(${result.error})` : ''}`);
    }
    
    // 等待1秒再检查下一个页面
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n✅ 慢速页面检查完成');
}

// 运行检查
if (require.main === module) {
  checkSlowPages().catch(console.error);
}

module.exports = { checkSlowPages };
