import { StaticImageData } from 'next/image';

export interface NavItem {
  href?: string;
  SVGComponent?: React.ElementType;
  ariaLabel: string;
  component?: StaticImageData;
  alt?: string;
}
