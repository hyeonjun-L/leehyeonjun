import {
  AnimationPlaybackControls,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface HomeMenuAnimateTextProps {
  delay: number;
  isAnimateStart: boolean;
  text: string;
  spacing: boolean;
}

const HomeMenuAnimateText = ({
  isAnimateStart,
  text,
  delay,
  spacing,
}: HomeMenuAnimateTextProps) => {
  const [isSpacing, setIsSpacing] = useState(false);
  const [animateControls, setAnimateControls] =
    useState<AnimationPlaybackControls | null>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    if (isAnimateStart) {
      const controls = animate(count, text.length, {
        type: 'tween',
        delay: delay,
        duration: 1,
        ease: 'easeInOut',
        onComplete: () => {
          setIsSpacing(spacing);
        },
      });

      setAnimateControls(controls);
    } else {
      animateControls?.stop();
      rounded.set(0);
      count.set(0);
      setIsSpacing(false);
      setAnimateControls(null);
    }

    return animateControls?.stop;
  }, [isAnimateStart]);

  return (
    <motion.span
      style={{ color: 'var(--from)' }}
      className={`${isSpacing ? 'pr-2' : ''}`}
    >
      {displayText}
    </motion.span>
  );
};

export default HomeMenuAnimateText;
