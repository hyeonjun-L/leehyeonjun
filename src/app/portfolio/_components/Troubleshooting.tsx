import { LongArrowSvg } from '@/icons/index';
import trouble from '@/images/trouble.png';
import troubleshooting from '@/images/troubleshooting.png';

type TroubleshootingProps =
  | {
      isMobile: boolean;
      troubleSrc: string;
      troubleShootingSrc: string;
      issue: string;
    }
  | { issue: string };

const Troubleshooting = (props: TroubleshootingProps) => {
  return (
    <div className="mt-6 pl-5 lg:mt-0 lg:pl-10">
      <h4 className="text-lg sm:text-2xl">트러블 슈팅</h4>
      <p className="my-5">이슈: {props.issue}</p>
      {'isMobile' in props && (
        <div
          className={`flex flex-col items-center justify-evenly ${props.isMobile ? 'gap-12 sm:flex-row sm:gap-0' : 'gap-3 lg:flex-row'}`}
        >
          <VideoFigure
            isMobile={props.isMobile}
            troubleSrc={props.troubleSrc}
          />
          {props.isMobile && (
            <LongArrowSvg className=" hidden size-28 fill-white lg:block" />
          )}
          <VideoFigure
            isMobile={props.isMobile}
            troubleShootingSrc={props.troubleShootingSrc}
          />
        </div>
      )}
    </div>
  );
};

type VideoFigureProps =
  | {
      isMobile: boolean;
      troubleSrc: string;
    }
  | {
      isMobile: boolean;
      troubleShootingSrc: string;
    };

const VideoFigure = (props: VideoFigureProps) => {
  return (
    <figure
      className={`${props.isMobile ? 'h-[37.5rem] sm:w-[45%] lg:w-auto' : ''}`}
    >
      <video
        className={`${props.isMobile ? 'aspect-[9/16] size-full bg-white' : 'aspect-video h-96'} `}
        poster={'troubleSrc' in props ? trouble.src : troubleshooting.src}
        controls
        preload="none"
      >
        <source
          src={
            'troubleSrc' in props ? props.troubleSrc : props.troubleShootingSrc
          }
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <figcaption className="text-center text-sm">
        {'troubleSrc' in props ? 'trouble video' : 'troubleshooting video'}
      </figcaption>
    </figure>
  );
};

export default Troubleshooting;
