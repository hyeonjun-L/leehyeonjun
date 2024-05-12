'use client';
import { motion } from 'framer-motion';
import { MENU } from '@/constants/constants';
import {
  BranchSVG,
  CloseSVG,
  DebugSVG,
  FileSVG,
  MarkDwonSVG,
  SearchSVG,
  VsCodeSVG,
} from '@/icons/index';
import AnimText from './AnimText';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const MyVSCode = () => {
  return (
    <motion.span className="mx-auto select-none text-black">
      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className="grid aspect-square h-[300px] grid-rows-[auto_1fr] bg-dark-body sm:aspect-[1/1.41] sm:h-[400px] md:h-[500px] dark:bg-white"
      >
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="flex w-full items-center gap-1 bg-dark-menu-bg pl-1 text-sm text-dark-menu-text dark:bg-White-menu-bg dark:text-White-menu-text">
            <VsCodeSVG className="size-4" />
            {MENU.map((menu) => (
              <p
                key={menu}
                className="px-2 hover:bg-dark-menu-hover dark:hover:bg-White-menu-hover"
              >
                {menu}
              </p>
            ))}
          </div>
        </motion.div>
        <div className="flex h-full">
          <motion.div
            variants={itemVariants}
            className="flex h-full w-12 flex-col items-center gap-4 bg-dark-activity py-3 text-white"
          >
            <FileSVG className="size-6 fill-dark-disabled hover:fill-white" />
            <SearchSVG className="size-7 fill-dark-disabled hover:fill-white" />
            <BranchSVG className="size-7 fill-dark-disabled hover:fill-white" />
            <DebugSVG className="size-6 fill-dark-disabled hover:fill-white" />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex size-full flex-col text-lg text-slate-900"
          >
            <div className="flex h-5 bg-dark-selectFileMenu-bg dark:bg-White-selectFileMenu-bg">
              <div className="flex h-full items-center gap-1 bg-dark-body px-2 text-sm text-white dark:bg-white dark:text-black">
                <MarkDwonSVG className="size-4 fill-white dark:fill-black" />
                concern.md
                <CloseSVG className="size-[10px] fill-dark-menu-text hover:fill-white dark:fill-black dark:hover:fill-gray-600" />
              </div>
            </div>
            <AnimText delay={1} />
          </motion.div>
        </div>
      </motion.div>
    </motion.span>
  );
};

export default MyVSCode;
