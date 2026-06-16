'use client';
import { useRef, useState } from 'react';
import type { ReactElement } from 'react';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

const CopyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-3.5"
    aria-hidden
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-3.5"
    aria-hidden
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const CodeBlock = ({ children, className, ...props }: CodeBlockProps) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const codeChild = children as
    | ReactElement<{ className?: string }>
    | undefined;
  const language = codeChild?.props?.className?.match(/language-(\w+)/)?.[1];

  const handleCopy = async () => {
    const text = preRef.current?.textContent ?? '';
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // 클립보드 접근 실패 시 무시
    }
  };

  return (
    <div className="group relative">
      <div className="pointer-events-none absolute right-2 top-2 z-10 flex items-center gap-2">
        {language && (
          <span className="rounded bg-black/40 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-zinc-300">
            {language}
          </span>
        )}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? '복사됨' : '코드 복사'}
          className="pointer-events-auto flex items-center gap-1 rounded bg-black/40 px-2 py-1 text-xs text-zinc-300 opacity-70 transition group-hover:opacity-100 hover:bg-black/60 hover:text-white focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-White-myVScodeText"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? '복사됨' : '복사'}
        </button>
      </div>
      <pre ref={preRef} className={className} {...props}>
        {children}
      </pre>
    </div>
  );
};

export default CodeBlock;
