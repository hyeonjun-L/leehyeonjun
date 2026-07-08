import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/constants/site';

const FONT_URL =
  'https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/public/static/Pretendard-Bold.otf';

let fontPromise: Promise<ArrayBuffer> | null = null;

const loadFont = () => {
  if (!fontPromise) {
    fontPromise = fetch(FONT_URL).then((res) => {
      if (!res.ok) throw new Error(`font fetch failed: ${res.status}`);

      return res.arrayBuffer();
    });
  }

  return fontPromise;
};

const formatDate = (iso: string) => {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) return '';

  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(
    date.getDate(),
  ).padStart(2, '0')}`;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') || SITE_NAME).slice(0, 80);
  const category = (searchParams.get('category') || '').slice(0, 30);
  const date = formatDate(searchParams.get('date') || '');

  let fontData: ArrayBuffer;

  try {
    fontData = await loadFont();
  } catch {
    fontPromise = null;

    return new Response('OG font load failed', { status: 500 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0d1117',
          backgroundImage:
            'radial-gradient(circle at 18% 0%, #1f2937 0%, #0d1117 55%)',
          padding: '72px 80px',
          fontFamily: 'Pretendard',
          color: '#e6edf3',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#ff5f56',
              }}
            />
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#ffbd2e',
              }}
            />
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                backgroundColor: '#27c93f',
              }}
            />
          </div>
          {category ? (
            <div
              style={{
                display: 'flex',
                marginLeft: '8px',
                padding: '8px 24px',
                borderRadius: '999px',
                backgroundColor: 'rgba(78,201,176,0.15)',
                color: '#4ec9b0',
                fontSize: 30,
              }}
            >
              {category}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: title.length > 28 ? 66 : 78,
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 30,
            color: '#8b949e',
          }}
        >
          <div style={{ display: 'flex' }}>{date}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', color: '#e6edf3' }}>{SITE_NAME}</div>
            <div style={{ display: 'flex', color: '#4ec9b0' }}>·</div>
            <div style={{ display: 'flex' }}>leehyeonjun.com</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'Pretendard', data: fontData, weight: 700, style: 'normal' },
      ],
    },
  );
}
