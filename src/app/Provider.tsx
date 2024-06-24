'use client';
import { TRACK_LIST } from '@/constants/constants';
import React, {
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

type Music = { title: string; src: string };

interface ContextProps {
  anchorView: boolean;
  changeAnchorView: () => void;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  music: Music;
  changeMusic: (music: Music) => void;
  playMusic: () => void;
  pauseMusic: () => void;
  playNextTrack: () => void;
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

  return (
    <Context.Provider
      value={{
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
