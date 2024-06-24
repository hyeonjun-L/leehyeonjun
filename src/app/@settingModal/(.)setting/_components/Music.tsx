import { Context } from '@/app/Provider';
import { useContext } from 'react';

const Music = () => {
  const { playMusic, pauseMusic, changeMusicSrc } = useContext(Context);

  return (
    <section className="h-full p-5 sm:h-80">
      <button onClick={playMusic}>음악 시작</button>
      <button onClick={pauseMusic}>음악 멈추기</button>
    </section>
  );
};

export default Music;
