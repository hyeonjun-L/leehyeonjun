'use client';
import { useReportWebVitals } from 'next/web-vitals';

const WebVitals = () => {
  useReportWebVitals((metric) => {
    // eslint-disable-next-line no-console
    console.log(metric);
  });

  return null;
};

export default WebVitals;
