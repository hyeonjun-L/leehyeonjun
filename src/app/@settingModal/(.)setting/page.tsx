import { cookies } from 'next/headers';
import SettingModal from './_components/SettingModal';

const page = () => {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value;

  return <SettingModal />;
};

export default page;
