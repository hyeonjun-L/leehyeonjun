'use client';
import { useRouter } from 'next/navigation';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const closeModalHandler = () => {
    router.back();
  };

  return (
    <div
      onClick={closeModalHandler}
      className="fixed bottom-0 left-0 right-0 top-0 z-modal mx-auto bg-dark-disabled/60"
    >
      <article
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="shadow-float absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-White-body sm:h-fit sm:w-[40rem] sm:rounded-md dark:bg-dark-body"
      >
        {children}
      </article>
    </div>
  );
};

export default Modal;
