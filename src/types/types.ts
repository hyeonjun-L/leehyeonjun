import { StaticImageData } from 'next/image';

export interface NavItem {
  href: string;
  SVGComponent?: React.ElementType;
  ariaLabel: string;
  component?: StaticImageData;
  alt?: string;
  scroll?: boolean;
}

export interface Headings {
  level: number;
  text: string;
  id: string;
}

export interface BlurImageSrc {
  src: string;
  placeholder: string;
}

export interface ImageInfo extends BlurImageSrc {
  width: number;
  height: number;
}
