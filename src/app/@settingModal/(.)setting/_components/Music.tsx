import { Context } from '@/app/Provider';
import { MuteSvg, PauseSvg, SpeakerSvg, StartSvg } from '@/icons/index';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

const Music = () => {
  const { audioRef, playMusic, pauseMusic, music, volumeControl } =
    useContext(Context);
  const [isPlaying, setIsPlaying] = useState(() => {
    return audioRef.current ? !audioRef.current.paused : false;
  });
  const [volume, setVolume] = useState(audioRef.current?.volume ?? 0.5);

  const pauseMusicHandler = () => {
    pauseMusic();
    setIsPlaying(false);
  };

  const playMusicHandler = () => {
    playMusic();
    setIsPlaying(true);
  };

  const setVolumeHandler = (volume: number) => {
    setVolume(volume);
    volumeControl(volume);
  };

  const setVolumeRangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolumeHandler(newVolume);
  };

  return (
    <section className="h-full p-5 sm:h-80">
      <div className="flex items-center gap-2">
        <div className="relative h-7 w-52 overflow-hidden rounded-md border border-solid border-dark-disabled px-2">
          <motion.div
            className="absolute flex whitespace-nowrap"
            initial={{ x: '0%' }}
            animate={isPlaying ? { x: ['0%', '-100%'] } : { x: '0%' }}
            transition={{
              duration: isPlaying ? 10 : 0,
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
        <div className="ml-4 flex gap-2">
          <button onClick={() => setVolumeHandler(0)}>
            <MuteSvg className="size-5 fill-black dark:fill-white" />
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={setVolumeRangeHandler}
            className="w-24"
          />
          <button onClick={() => setVolumeHandler(1)}>
            <SpeakerSvg className="size-5 fill-black dark:fill-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Music;
