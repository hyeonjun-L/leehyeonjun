import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowSVG } from '@/icons/index';

interface ProjectProps {
  src: StaticImageData;
  alt: string;
  explanation: string;
  webLink: string;
  detailLink: string;
}

const Project = ({
  src,
  alt,
  explanation,
  webLink,
  detailLink,
}: ProjectProps) => {
  return (
    <figure className="group relative max-h-96 min-h-56 overflow-hidden rounded-lg border border-solid border-dark-body sm:min-h-[348px]">
      <Image
        src={src}
        alt={alt}
        className="size-full duration-500 group-hover:scale-110 dark:bg-white"
      />
      <figcaption className="absolute top-0 flex size-full flex-col items-center justify-evenly bg-White-selectFileMenu-bg px-2 text-sm opacity-0 duration-700 group-hover:opacity-100 sm:p-5 sm:text-base dark:bg-dark-menu-bg">
        <h1>{explanation}</h1>
        <Link
          href={webLink}
          className=" flex translate-y-96 items-center gap-2 rounded-full border border-solid border-black p-2 duration-300 group-hover:translate-y-0 hover:bg-White-anchor-hover sm:p-4 dark:border-white dark:hover:bg-dark-activity"
          aria-label="해당 프로젝트 웹사이트 방문"
          target="_blank"
        >
          웹 사이트 방문하기
          <ArrowSVG className="size-4 dark:fill-white" />
        </Link>
        <Link
          href={detailLink}
          className="flex translate-y-96 items-center gap-2 rounded-full border border-solid border-black p-2 duration-300 group-hover:translate-y-0 hover:bg-White-anchor-hover sm:p-4 dark:border-white dark:hover:bg-dark-activity"
          aria-label="해당 프로젝트 개발 내용 보기"
        >
          개발 내용 보기
          <ArrowSVG className="size-4 dark:fill-white" />
        </Link>
      </figcaption>
    </figure>
  );
};

export default Project;
