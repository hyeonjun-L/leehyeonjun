import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import CursorBlinker from './CursorBlinker';
import RedoAnimText from './RedoAnimText';
import { BASE_TEXT } from '@/constants/constants';

export interface IAnimTextProps {
  delay: number;
}

export default function AnimText({ delay }: IAnimTextProps) {
  const [done, setDone] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    BASE_TEXT.slice(0, latest),
  );

  const LINE_STYLE = [
    'hidden md:flex',
    'hidden sm:max-md:flex',
    'sm:hidden',
  ] as const;

  useEffect(() => {
    const controls = animate(count, BASE_TEXT.length, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true);
      },
    });

    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex h-full py-1">
      <Line length={16} style={LINE_STYLE[0]} />
      <Line length={12} style={LINE_STYLE[1]} />
      <Line length={9} style={LINE_STYLE[2]} />
      <div className="w-full flex-grow">
        <motion.span>{displayText}</motion.span>
        {done && (
          <>
            <br /> <br />
          </>
        )}
        <RedoAnimText delay={delay + 1.3} />
        <CursorBlinker />
      </div>
    </div>
  );
}

const Line = ({ length, style }: { length: number; style: string }) => {
  return (
    <div
      className={`text-White-myVScodeText flex h-full w-10 flex-col ${style}`}
    >
      {Array.from({ length }).map((_, index) => (
        <p key={index} className="w-full pr-3 text-right">
          {index}
        </p>
      ))}
    </div>
  );
};
