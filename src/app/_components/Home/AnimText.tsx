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
      <Line length={16} hiddenOnSmallScreen={true} />
      <Line length={12} hiddenOnSmallScreen={false} />
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

const Line = ({
  length,
  hiddenOnSmallScreen,
}: {
  length: number;
  hiddenOnSmallScreen: boolean;
}) => {
  return (
    <div
      className={`text-White-myVScodeText flex h-full w-10 flex-col ${hiddenOnSmallScreen ? 'hidden sm:flex' : 'sm:hidden'}`}
    >
      {Array.from({ length }).map((_, index) => (
        <p key={index} className="w-full pr-3 text-right">
          {index}
        </p>
      ))}
    </div>
  );
};
