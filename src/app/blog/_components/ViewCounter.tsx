'use client';

import { useEffect, useRef, useState } from 'react';

interface ViewCounterProps {
  slug: string;
  increment?: boolean;
  initialViews?: number | null;
}

const ViewCounter = ({
  slug,
  increment = false,
  initialViews = null,
}: ViewCounterProps) => {
  const [views, setViews] = useState<number | null>(initialViews);
  const didRun = useRef(false);

  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    const run = async () => {
      try {
        const response = increment
          ? await fetch('/api/views', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ slug }),
            })
          : await fetch(`/api/views?slug=${encodeURIComponent(slug)}`);

        if (!response.ok) return;

        const data = (await response.json()) as { count: number | null };

        if (typeof data.count === 'number') setViews(data.count);
      } catch {}
    };

    run();
  }, [slug, increment]);

  if (views === null) return null;

  return (
    <>
      <span aria-hidden>·</span>
      <span>조회 {views.toLocaleString()}</span>
    </>
  );
};

export default ViewCounter;
