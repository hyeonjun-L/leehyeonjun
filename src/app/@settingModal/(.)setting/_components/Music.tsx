import { Context } from '@/app/Provider';
import { TRACK_LIST } from '@/constants/constants';
import { MuteSvg, PauseSvg, SpeakerSvg, StartSvg } from '@/icons/index';
import { Music } from '@/types/types';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';

const Music = () => {
  const { audioRef, playMusic, pauseMusic, music, volumeControl, changeMusic } =
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

  const selectMusicHandler = (music: Music) => {
    changeMusic(music);
    setIsPlaying(true);
  };

  return (
    <section className="h-full p-5 sm:h-80">
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center gap-3 sm:gap-2">
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
        </div>
        <nav className="mt-4 flex gap-2 sm:mt-0">
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
            className="w-full sm:w-24"
          />
          <button onClick={() => setVolumeHandler(1)}>
            <SpeakerSvg className="size-5 fill-black dark:fill-white" />
          </button>
        </nav>
      </div>
      <ul className="mt-2 grid grid-cols-2 gap-y-1.5">
        {TRACK_LIST.map(({ title, src }) => (
          <li key={title}>
            <button onClick={() => selectMusicHandler({ title, src })}>
              {title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Music;
