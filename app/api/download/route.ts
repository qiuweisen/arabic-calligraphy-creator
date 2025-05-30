import { NextRequest, NextResponse } from 'next/server';

const CDN_BASE_URL = 'https://pub-7c6b2100167a48b5877d4c2ab2aa4e3a.r2.dev';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const fileName = searchParams.get('fileName');
    
    if (!fileName) {
      return NextResponse.json(
        { error: 'File name is required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${CDN_BASE_URL}/fonts/${fileName}`);
    
    if (!response.ok) {
      return NextResponse.json(
        { error: 'File download failed' },
        { status: response.status }
      );
    }

    const blob = await response.blob();
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/zip');
    headers.set('Content-Disposition', `attachment; filename="${fileName}"`);

    return new NextResponse(blob, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'An error occurred during download' },
      { status: 500 }
    );
  }
} 