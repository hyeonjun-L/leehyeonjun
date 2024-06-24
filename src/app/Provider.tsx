'use client';
import { TRACK_LIST } from '@/constants/constants';
import { Music } from '@/types/types';
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

interface ContextProps {
  anchorView: boolean;
  changeAnchorView: () => void;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  music: Music;
  changeMusic: (music: Music) => void;
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
  changeMusic: (music: Music) => {},
  playMusic: () => {},
  pauseMusic: () => {},
  playNextTrack: () => {},
  volumeControl: (volume: number) => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [anchorView, setAnchorView] = useState(false);
  const [music, setMusic] = useState(TRACK_LIST[0]);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const trackIndexRef = useRef(0);

  const changeAnchorView = useCallback(() => {
    setAnchorView((prevAnchorView) => !prevAnchorView);
  }, []);

  const changeMusic = useCallback((music: Music) => {
    const selectMusicIndex = TRACK_LIST.findIndex(
      ({ title }) => title === music.title,
    );
    trackIndexRef.current = selectMusicIndex;
    setMusic(music);
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
  }, []);

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
