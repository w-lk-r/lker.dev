import { NextRequest, NextResponse } from 'next/server';
import ogs from 'open-graph-scraper';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  try {
    const { result } = await ogs({ url });

    return NextResponse.json({
      title: result.ogTitle || result.twitterTitle,
      description: result.ogDescription || result.twitterDescription,
      image: result.ogImage?.[0]?.url || result.twitterImage?.[0]?.url,
      url: result.ogUrl || url,
    });
  } catch (error) {
    console.error('Error fetching OG data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Open Graph data' },
      { status: 500 }
    );
  }
}
