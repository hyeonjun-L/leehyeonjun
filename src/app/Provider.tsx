'use client';
import { TRACK_LIST } from '@/constants/constants';
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
  musicSrc: string;
  changeMusicSrc: (src: string) => void;
  playMusic: () => void;
  pauseMusic: () => void;
  playNextTrack: () => void;
}

export const Context = React.createContext<ContextProps>({
  anchorView: false,
  changeAnchorView: () => {},
  audioRef: { current: null },
  musicSrc: '',
  changeMusicSrc: (src: string) => {},
  playMusic: () => {},
  pauseMusic: () => {},
  playNextTrack: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [anchorView, setAnchorView] = useState(false);
  const [musicSrc, setMusicSrc] = useState(TRACK_LIST[0].src);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const trackIndexRef = useRef(0);

  const changeAnchorView = useCallback(() => {
    setAnchorView((prevAnchorView) => !prevAnchorView);
  }, []);

  const changeMusicSrc = useCallback((src: string) => {
    setMusicSrc(src);
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
        changeMusicSrc(TRACK_LIST[trackIndexRef.current].src);
      } else {
        trackIndexRef.current = 0;
        changeMusicSrc(TRACK_LIST[trackIndexRef.current].src);
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
        musicSrc,
        changeMusicSrc,
        playMusic,
        pauseMusic,
      }}
    >
      {children}
    </Context.Provider>
  );
};
