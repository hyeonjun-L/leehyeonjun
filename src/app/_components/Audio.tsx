'use client';
import { useContext } from 'react';
import { Context } from '../Provider';

const Audio = () => {
  const { audioRef, musicSrc } = useContext(Context);

  return <audio ref={audioRef} src={musicSrc} className="hidden" />;
};

export default Audio;
