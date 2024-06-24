'use client';
import { useContext, useEffect } from 'react';
import { Context } from '../Provider';

const Audio = () => {
  const { audioRef, music, playNextTrack, playMusic } = useContext(Context);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  useEffect(() => {
    playMusic();
  }, [music]);

  return (
    <audio
      ref={audioRef}
      src={music.src}
      onEnded={playNextTrack}
      className="hidden"
    />
  );
};

export default Audio;
