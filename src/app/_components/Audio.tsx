'use client';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '../Provider';
import { TRACK_LIST } from '@/constants/constants';

const Audio = () => {
  const { audioRef, musicSrc, changeMusicSrc, playMusic } = useContext(Context);
  const trackIndexRef = useRef(0);

  const handleEnded = () => {
    if (audioRef.current) {
      trackIndexRef.current += 1;
      if (trackIndexRef.current < TRACK_LIST.length) {
        changeMusicSrc(TRACK_LIST[trackIndexRef.current].src);
      } else {
        trackIndexRef.current = 0;
        changeMusicSrc(TRACK_LIST[trackIndexRef.current].src);
      }
    }
  };

  useEffect(() => {
    playMusic();
  }, [musicSrc]);

  return (
    <audio
      ref={audioRef}
      src={musicSrc}
      onEnded={handleEnded}
      className="hidden"
    />
  );
};

export default Audio;
