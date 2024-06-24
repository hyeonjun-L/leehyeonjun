import { Context } from '@/app/Provider';
import { PauseSvg, StartSvg } from '@/icons/index';
import { motion, useAnimation } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { playMusic, pauseMusic, music } = useContext(Context);

  const pauseMusicHandler = () => {
    pauseMusic();
    setIsPlaying(false);
  };

  const playMusicHandler = () => {
    playMusic();
    setIsPlaying(true);
  };

  return (
    <section className="h-full p-5 sm:h-80">
      <div className="flex items-center gap-2">
        <div className="relative h-7 w-52 overflow-hidden rounded-md border border-solid border-dark-disabled px-2">
          <motion.div
            className="absolute flex whitespace-nowrap"
            initial={{ x: '0%' }}
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            <span className="w-full flex-shrink-0">{music.title}</span>
            <span className="w-full flex-shrink-0">{music.title}</span>
          </motion.div>
        </div>
        <button onClick={playMusicHandler} className="group">
          <StartSvg
            className={`size-8 ${isPlaying ? 'fill-black dark:fill-white' : 'fill-dark-disabled hover:fill-black group-hover:dark:fill-white '}`}
          />
        </button>
        <button onClick={pauseMusicHandler} className="group">
          <PauseSvg
            className={`size-8 ${isPlaying ? 'fill-dark-disabled hover:fill-black group-hover:dark:fill-white ' : 'fill-black dark:fill-white'}`}
          />
        </button>
      </div>
    </section>
  );
};

export default Music;
