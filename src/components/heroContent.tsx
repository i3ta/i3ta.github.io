import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { RefObject } from 'react';

export const HeroContent = ({
  ref,
  mobile = false,
}: {
  ref: RefObject<HTMLDivElement> | undefined;
  mobile?: boolean;
}) => {
  const textSize = mobile ? 'w-full' : 'w-1/2';
  const nameSize = mobile ? 'text-8xl leading-[1.3]' : 'text-9xl leading-[1.2]';

  return (
    <div className="flex flex-col gap-8" ref={ref}>
      <div className="flex flex-col overflow-hidden">
        <h2>Hi, I&apos;m</h2>
        <motion.h1
          className={cn(
            'font-bold bg-linear-to-r from-tblue to-tgreen text-transparent bg-clip-text transition-all',
            nameSize
          )}
          initial={{ y: '100%' }}
          whileInView={{ y: '0%' }}
          transition={{ type: 'spring', duration: 1, bounce: 0 }}
        >
          Aaron Hung
        </motion.h1>
      </div>
      <p className={textSize}>
        I&apos;m a second year <b>computer science + biochemistry</b> student on
        the pre-med track at <b>Georgia Tech 🐝</b>. My passions are in
        biotechnology, and I strive to leverage the power of modern computing to
        improve healthcare everywhere, for everyone.
      </p>
      <p className={textSize}>
        While many in computational biology begin with a strong foundation in
        biology and later pick up programming, I’ve approached the field from
        the opposite direction—starting with a deep understanding of computing.
        I believe that to truly harness the power of algorithms, machine
        learning, and data modeling in medicine, it’s essential to be fluent in
        both disciplines. This dual perspective has shaped my approach to
        research and development in biotechnology. From leading projects in
        neural control algorithms to contributing to molecular engineering
        initiatives, my work aims to bridge the gap between computation and life
        sciences. You can explore some of my key projects, publications, and
        ongoing work below.
      </p>
      <div className={cn('flex flex-col items-center', textSize)}>
        <Button className="w-32">
          <a target="_blank" rel="noreferrer" href="/resume.pdf">
            Resume
          </a>
        </Button>
      </div>
      <div className="w-1 h-8"></div>
    </div>
  );
};
