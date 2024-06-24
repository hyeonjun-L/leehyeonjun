'use client';
import { useContext, useEffect } from 'react';
import { Context } from '../Provider';

const Audio = () => {
  const { audioRef, musicSrc, playNextTrack, playMusic } = useContext(Context);

  useEffect(() => {
    playMusic();
  }, [musicSrc]);

  return (
    <audio
      ref={audioRef}
      src={musicSrc}
      onEnded={playNextTrack}
      className="hidden"
    />
  );
};

export default Audio;
