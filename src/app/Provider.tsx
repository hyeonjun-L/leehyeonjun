'use client';
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';
import { TRACK_LIST } from '@/constants/constants';
import { TMusic } from '@/types/types';

interface ContextProps {
  anchorView: boolean;
  changeAnchorView: () => void;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  music: TMusic;
  changeMusic: (music: TMusic) => void;
  playMusic: () => void;
  pauseMusic: () => void;
  playNextTrack: () => void;
  volumeControl: (volume: number) => void;
}

export const Context = React.createContext<ContextProps>({
  anchorView: false,
  changeAnchorView: () => {},
  audioRef: { current: null },
  music: TRACK_LIST[0],
  changeMusic: () => {},
  playMusic: () => {},
  pauseMusic: () => {},
  playNextTrack: () => {},
  volumeControl: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [anchorView, setAnchorView] = useState(false);
  const [music, setMusic] = useState(TRACK_LIST[0]);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const trackIndexRef = useRef(0);

  const changeAnchorView = useCallback(() => {
    setAnchorView((prevAnchorView) => !prevAnchorView);
  }, []);

  const playMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const pauseMusic = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const changeMusic = useCallback((music: TMusic) => {
    if (audioRef.current) {
      const selectMusicIndex = TRACK_LIST.findIndex(
        ({ title }) => title === music.title,
      );
      trackIndexRef.current = selectMusicIndex;
      audioRef.current.src = music.src;
      setMusic(music);
      playMusic();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playNextTrack = useCallback(() => {
    if (audioRef.current) {
      trackIndexRef.current += 1;
      if (trackIndexRef.current < TRACK_LIST.length) {
        changeMusic(TRACK_LIST[trackIndexRef.current]);
      } else {
        trackIndexRef.current = 0;
        changeMusic(TRACK_LIST[trackIndexRef.current]);
      }
    }
  }, [changeMusic]);

  const volumeControl = (volume: number) => {
    const newVolume = Math.min(volume, 1);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <Context.Provider
      value={{
        volumeControl,
        playNextTrack,
        audioRef,
        anchorView,
        changeAnchorView,
        music,
        changeMusic,
        playMusic,
        pauseMusic,
      }}
    >
      {children}
    </Context.Provider>
  );
};
