'use client';
import { motion } from 'framer-motion';
import AnimText from './AnimText';
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
    <motion.span className="select-none text-black">
      <motion.div
        variants={containerVariants}
        animate="visible"
        initial="hidden"
        className="grid aspect-[1/1.41] h-[400px] grid-rows-[auto_1fr] bg-white md:h-[500px]"
      >
        <motion.div variants={itemVariants} className="flex items-center">
          <div className="flex w-full items-center gap-1 bg-White-menu-bg pl-1 text-sm">
            <VsCodeSVG className="size-4" />
            {MENU.map((menu) => (
              <p key={menu} className="px-2 hover:bg-White-menu-hover">
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
            <div className="flex h-5 bg-White-selectFile">
              <div className="flex h-full items-center gap-1 bg-white px-2 text-sm">
                <MarkDwonSVG className="size-4 fill-black" />
                concern.md
                <CloseSVG className="size-[10px] fill-black hover:fill-gray-600" />
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
