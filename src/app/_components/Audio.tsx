'use client';
import { useContext, useEffect } from 'react';
import { TRACK_LIST } from '@/constants/constants';
import { Context } from '../Provider';

const Audio = () => {
  const { audioRef, playNextTrack } = useContext(Context);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, [audioRef]);

  return (
    <audio
      ref={audioRef}
      src={TRACK_LIST[0].src}
      onEnded={playNextTrack}
      className="hidden"
    />
  );
};

export default Audio;
