'use client';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import { DotButton, useDotButton } from './CarouselDotButton';
import { ImageInfo } from '@/types/types';

interface CarouselProps {
  slides: ImageInfo[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(({ src, placeholder, width, height }) => (
            <div className="embla__slide" key={src}>
              <div className="embla__slide__number">
                <Image
                  src={src}
                  alt="개발과정 이미지"
                  width={width}
                  height={height}
                  placeholder="blur"
                  className="size-full"
                  blurDataURL={placeholder}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
