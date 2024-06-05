'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const NprogressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="5px"
        color="#4389ba"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default NprogressBarProvider;
