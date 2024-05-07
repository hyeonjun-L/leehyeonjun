import HomeMenuButton from './_components/Home/HomeMenuButton';
import MyVSCode from './_components/Home/MyVSCode';
import { HOME_MENU_LIST } from '@/constants/constants';

export default function Home() {
  return (
    <section className="grid grid-cols-[auto_1fr] items-center gap-x-4 sm:mx-auto sm:my-auto">
      <MyVSCode />
      <div className="animate-fadeInUp flex h-full flex-col justify-center">
        <p>안녕하세요!</p>
        <h1 className="text-lg">
          끊임없이 스스로에게 질문하는 개발자, 이현준입니다.
        </h1>
        <div className="mt-14 flex flex-col items-center justify-center gap-3">
          {HOME_MENU_LIST.map((menu) => (
            <HomeMenuButton {...menu} key={menu.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
