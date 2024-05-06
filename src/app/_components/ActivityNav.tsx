'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { NavItem } from '@/types/types';
import {
  BlogSVG,
  GithubSVG,
  HomeSVG,
  PortfolioSVG,
  SettingSVG,
} from '@/icons/index';
import myImage from '@/images/이현준.jpg';

const activityNavList = [
  { href: '/', SVGComponent: HomeSVG, ariaLabel: 'Hoom' },
  {
    href: '/profile',
    component: myImage,
    alt: '이현준',
    ariaLabel: '이현준 Profile',
  },
  {
    href: '/portfolio',
    SVGComponent: PortfolioSVG,
    ariaLabel: '이현준 Portfolio',
  },
  {
    href: '/blog',
    SVGComponent: BlogSVG,
    ariaLabel: '이현준 Blog',
  },
];

const etcList = [
  {
    href: 'https://github.com/hyeonjun-L',
    SVGComponent: GithubSVG,
    ariaLabel: '이현준 Github',
  },
  { SVGComponent: SettingSVG, ariaLabel: '해당 페이지 세팅' },
];

const ActivityNav = () => {
  const pathname = usePathname();

  const renderNavItem = (
    { href, SVGComponent, ariaLabel, component, alt }: NavItem,
    index: number,
  ) => {
    const isSelected =
      href === '/' ? pathname === href : pathname.startsWith(href ?? '');

    if (href) {
      return (
        <Link
          key={href || index}
          href={href}
          aria-label={ariaLabel}
          className="group relative flex p-4 md:size-20"
          target={!href.startsWith('/') ? '_blank' : undefined}
        >
          {isSelected && (
            <motion.div
              layoutId="selected"
              className="absolute left-0 top-0 h-full w-0.5 bg-white"
            />
          )}
          {SVGComponent && (
            <SVGComponent
              className={`${isSelected ? 'fill-white' : 'fill-dark-disabled group-hover:fill-white'}`}
            />
          )}
          {component && (
            <div className="relative size-full">
              <Image
                src={component as StaticImageData}
                alt={alt as string}
                className="size-full rounded-md"
                priority={true}
              />
              <div
                className={`${isSelected ? 'hidden' : 'group-hover:hidden'} bg-dark-disabled/30 absolute top-0 size-full rounded-md backdrop-grayscale`}
              />
            </div>
          )}
        </Link>
      );
    } else {
      return (
        <button
          aria-label={ariaLabel}
          key={index}
          className="group ml-0.5 flex p-4 md:size-20"
        >
          {SVGComponent && (
            <SVGComponent className="fill-dark-disabled group-hover:fill-white" />
          )}
        </button>
      );
    }
  };

  return (
    <aside className="dark:bg-dark-activity md:h-full">
      <section className="flex h-full flex-col justify-between">
        <nav>{activityNavList.map(renderNavItem)}</nav>
        <nav>{etcList.map(renderNavItem)}</nav>
      </section>
    </aside>
  );
};

export default ActivityNav;
