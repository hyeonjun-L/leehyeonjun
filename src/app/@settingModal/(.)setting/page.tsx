import { cookies } from 'next/headers';
import SettingModal from './_components/SettingModal';

const page = async () => {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value ?? 'Dark';

  return <SettingModal selectTheme={theme} />;
};

export default page;
