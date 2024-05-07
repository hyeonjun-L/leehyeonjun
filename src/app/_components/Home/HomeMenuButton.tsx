'use client';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimationPlaybackControls,
} from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import CursorBlinker from './CursorBlinker';

interface HomeMenuButtonProps {
  title: string;
  href: string;
  text: string;
}

const HomeMenuButton = ({ title, href, text }: HomeMenuButtonProps) => {
  const [animateControls, setAnimateControls] =
    useState<AnimationPlaybackControls | null>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  const startAnimate = () => {
    const controls = animate(count, text.length, {
      type: 'tween',
      duration: 1,
      ease: 'easeInOut',
      onPlay: () => {},
    });

    setAnimateControls(controls);
  };

  const stopAnimate = () => {
    animateControls?.stop();
    displayText.set('');
    rounded.set(0);
    count.set(0);
    setAnimateControls(null);
  };

  return (
    <>
      <Link
        onMouseOver={startAnimate}
        onMouseLeave={stopAnimate}
        href={href}
        className="flex h-10 w-[45%] items-center justify-center rounded-md bg-dark-menu hover:bg-dark-activity"
      >
        {title}
      </Link>
      <div className="h-[26.667px]">
        <div className={`${animateControls ? '' : 'hidden'}`}>
          <motion.span>{displayText}</motion.span>
          <CursorBlinker isBlack={false} />
        </div>
      </div>
    </>
  );
};

export default HomeMenuButton;
