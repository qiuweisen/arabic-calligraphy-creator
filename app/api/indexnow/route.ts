import { NextRequest, NextResponse } from 'next/server';

// IndexNow API配置
const INDEXNOW_KEY = '546621d08c3644b2b136f9819638abee';
const SITE_URL = 'https://arabic-calligraphy-generator.com';

// 支持的搜索引擎端点
const SEARCH_ENGINES = [
  'https://api.indexnow.org/indexnow', // 通用端点
  'https://www.bing.com/indexnow',     // Bing
  // 'https://search.seznam.cz/indexnow', // Seznam (可选)
];

interface IndexNowRequest {
  urls: string[];
  immediate?: boolean;
}

/**
 * 提交URL到IndexNow API
 */
async function submitToIndexNow(urls: string[]): Promise<{
  success: boolean;
  results: Array<{ engine: string; status: number; success: boolean }>;
  error?: string;
}> {
  const payload = {
    host: 'arabic-calligraphy-generator.com',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls
  };

  const results = [];
  let hasSuccess = false;

  for (const endpoint of SEARCH_ENGINES) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Arabic-Calligraphy-Generator/1.0'
        },
        body: JSON.stringify(payload)
      });

      const success = response.status === 200 || response.status === 202;
      if (success) hasSuccess = true;

      results.push({
        engine: endpoint.includes('bing') ? 'Bing' : 'IndexNow',
        status: response.status,
        success
      });

      // 添加延迟避免过于频繁的请求
      await new Promise(resolve => setTimeout(resolve, 100));

    } catch (error) {
      results.push({
        engine: endpoint.includes('bing') ? 'Bing' : 'IndexNow',
        status: 0,
        success: false
      });
    }
  }

  return {
    success: hasSuccess,
    results
  };
}

/**
 * POST /api/indexnow
 * 提交URL到IndexNow进行快速收录
 */
export async function POST(request: NextRequest) {
  try {
    const body: IndexNowRequest = await request.json();
    const { urls, immediate = false } = body;

    // 验证输入
    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // 验证URL格式并确保是本站URL
    const validUrls = urls.filter(url => {
      try {
        const urlObj = new URL(url);
        return urlObj.hostname === 'arabic-calligraphy-generator.com';
      } catch {
        return false;
      }
    });

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'No valid URLs found' },
        { status: 400 }
      );
    }

    // 限制每次提交的URL数量
    const urlsToSubmit = validUrls.slice(0, 10);

    // 提交到IndexNow
    const result = await submitToIndexNow(urlsToSubmit);

    return NextResponse.json({
      success: result.success,
      submitted: urlsToSubmit.length,
      urls: urlsToSubmit,
      results: result.results,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('IndexNow API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow
 * 获取IndexNow配置信息
 */
export async function GET() {
  return NextResponse.json({
    configured: true,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    supportedEngines: ['Bing', 'IndexNow'],
    usage: {
      endpoint: '/api/indexnow',
      method: 'POST',
      body: {
        urls: ['https://arabic-calligraphy-generator.com/page1', 'https://arabic-calligraphy-generator.com/page2'],
        immediate: false
      }
    }
  });
}
