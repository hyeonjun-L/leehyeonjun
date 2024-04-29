'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const ThemeButton = () => {
  const router = useRouter();
  const theme = Cookies.get('theme');

  const test = () => {
    Cookies.set('theme', !theme || theme === 'dark' ? 'white' : 'dark');
    router.refresh();
  };

  return <button onClick={test}>Toggle Theme</button>;
};

export default ThemeButton;
