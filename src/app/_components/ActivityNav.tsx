'use client';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
  BlogSVG,
  GithubSVG,
  HomeSVG,
  PortfolioSVG,
  SettingSVG,
} from '@/icons/index';
import myImage from '@/images/이현준.jpg';
import { NavItem } from '@/types/types';

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
  {
    href: '/setting',
    SVGComponent: SettingSVG,
    ariaLabel: '해당 페이지 세팅',
    scroll: false,
  },
];

const ActivityNav = () => {
  const pathname = usePathname();

  const renderNavItem = ({
    href,
    SVGComponent,
    ariaLabel,
    component,
    alt,
    scroll = true,
  }: NavItem) => {
    const isSelected =
      href === '/' ? pathname === href : pathname.startsWith(href ?? '');

    return (
      <Link
        key={href}
        href={href}
        scroll={scroll}
        aria-label={ariaLabel}
        className="group relative flex size-16 p-4 md:size-20"
        target={!href.startsWith('/') ? '_blank' : undefined}
      >
        {isSelected && (
          <motion.div
            layoutId="selected"
            className="absolute bottom-0 left-0 h-0.5 w-full bg-white sm:top-0 sm:h-full sm:w-0.5"
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
              className={`${isSelected ? 'hidden' : 'group-hover:hidden'} absolute top-0 size-full rounded-md bg-dark-disabled/30 backdrop-grayscale`}
            />
          </div>
        )}
      </Link>
    );
  };

  return (
    <aside className="bg-dark-activity md:h-full dark:bg-dark-activity">
      <section className="flex h-full justify-between sm:flex-col">
        <nav className="flex sm:block">
          {activityNavList.map(renderNavItem)}
        </nav>
        <nav className="hidden sm:block">{etcList.map(renderNavItem)}</nav>
      </section>
    </aside>
  );
};

export default ActivityNav;
