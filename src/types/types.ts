import { StaticImageData } from 'next/image';

export interface NavItem {
  href: string;
  SVGComponent?: React.ElementType;
  ariaLabel: string;
  component?: StaticImageData;
  alt?: string;
  scroll?: boolean;
}

export interface Heading {
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

export interface Post {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  posterImage: string;
  categories: string[];
}

export type TMusic = { title: string; src: string };
