import { NextRequest, NextResponse } from 'next/server';
import { getView, incrementView } from '@/utils/views';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'slug required' }, { status: 400 });
  }

  const count = await getView(slug);

  return NextResponse.json({ slug, count });
}

export async function POST(request: NextRequest) {
  let slug: string | undefined;

  try {
    const body = (await request.json()) as { slug?: string };
    slug = body.slug;
  } catch {
    slug = undefined;
  }

  if (!slug) {
    return NextResponse.json({ error: 'slug required' }, { status: 400 });
  }

  const count = await incrementView(slug);

  return NextResponse.json({ slug, count });
}
