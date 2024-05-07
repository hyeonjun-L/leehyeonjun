import HomeMenuButton from './_components/Home/HomeMenuButton';
import MyVSCode from './_components/Home/MyVSCode';
import { HOME_MENU_LIST } from '@/constants/constants';

export default function Home() {
  return (
    <section className="grid items-center gap-x-4 sm:mx-auto sm:my-auto md:grid-cols-[auto_1fr]">
      <MyVSCode />
      <div className="mt-4 flex h-full animate-fadeInUp flex-col justify-center md:mt-0">
        <p>안녕하세요!</p>
        <h1 className="text-lg">
          끊임없이 스스로에게 질문하는 개발자, 이현준입니다.
        </h1>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 md:mt-14">
          {HOME_MENU_LIST.map((menu) => (
            <HomeMenuButton {...menu} key={menu.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
