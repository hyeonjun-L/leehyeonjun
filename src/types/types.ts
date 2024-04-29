import { StaticImageData } from 'next/image';

export interface NavItem {
  href?: string;
  SVGComponent?: React.ElementType;
  ariaLabel: string;
  component?: StaticImageData;
  alt?: string;
}

export interface Headings {
  level: number;
  text: string;
}
