import React from 'react';

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-modal fixed bottom-0 left-0 right-0 top-0 mx-auto bg-black/50 ">
      <div className="shadow-float absolute left-1/2 top-1/2 max-w-[40rem] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md bg-white">
        {children}
      </div>
    </div>
  );
};

export default Modal;
