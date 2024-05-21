import Image from 'next/image';
import connectionImage from '@/images/connection/connection_main.png';
import connectionHealthImage from '@/images/connection-health/connection-health.png';
import editorImage from '@/images/editor/editor.jpg';
import haruImage from '@/images/haru/haru.jpg';

const page = () => {
  return (
    <section className="grid w-full gap-12 p-4 sm:p-16 md:grid-cols-2 [&>figure]:max-h-96">
      <figure>
        <Image
          src={connectionImage}
          alt="커넥션 프로젝트 이미지"
          className="size-full bg-white"
        />
      </figure>
      <figure>
        <Image
          src={connectionHealthImage}
          alt="커넥션 건강 이미지"
          className="size-full "
        />
      </figure>
      <figure>
        <Image src={editorImage} alt="에디터 이미지" className="size-full " />
      </figure>
      <figure>
        <Image src={haruImage} alt="하루 이미지" className="size-full " />
      </figure>
    </section>
  );
};

export default page;
