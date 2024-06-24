'use client';
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
}

export const Context = React.createContext<ContextProps>({
  anchorView: false,
  changeAnchorView: () => {},
  audioRef: { current: null },
  musicSrc:
    'https://storage.googleapis.com/leehyeonjun.com/music/Always%20Sunshine_full.wav',
  changeMusicSrc: (src: string) => {},
  playMusic: () => {},
  pauseMusic: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [anchorView, setAnchorView] = useState(false);
  const [musicSrc, setMusicSrc] = useState(
    'https://storage.googleapis.com/leehyeonjun.com/music/Always%20Sunshine_full.wav',
  );
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const changeAnchorView = useCallback(() => {
    setAnchorView((prevAnchorView) => !prevAnchorView);
  }, []);

  const changeMusicSrc = useCallback((src: string) => {
    setMusicSrc(src);
  }, []);

  const playMusic = useCallback(() => {
    audioRef.current?.play();
  }, []);

  const pauseMusic = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  return (
    <Context.Provider
      value={{
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
