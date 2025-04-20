import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'motion/react';
import { useRef, type LegacyRef, type RefObject } from 'react';

export const HeroContent = ({
  ref,
}: {
  ref: LegacyRef<HTMLDivElement> | undefined;
}) => {
  /* Title entrance animation */
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

  return (
    <div
      className="flex flex-col gap-8"
      style={{ minHeight: 'calc(90vh + 450px - 9rem)' }}
      ref={ref}
    >
      <div className="flex flex-col overflow-hidden">
        <h2>Hi, I&apos;m</h2>
        <motion.h1
          ref={titleRef}
          className="font-bold text-9xl leading-[1.2] bg-linear-to-r from-tblue to-tgreen text-transparent bg-clip-text"
          initial={{ y: '100%' }}
          whileInView={{ y: '0%' }}
          transition={{ type: 'spring', duration: 1, bounce: 0 }}
          animate={controls}
        >
          Aaron Hung
        </motion.h1>
      </div>
      <p className="w-1/2">
        I&apos;m a second year <b>computer science + biochemistry</b> student on
        the pre-med track at <b>Georgia Tech 🐝</b>. My passions are in
        biotechnology, and I strive to leverage the power of modern computing to
        improve healthcare everywhere, for everyone.
      </p>
      <p className="w-1/2">
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
      <div className="w-1/2 flex flex-col items-center">
        <Button className="w-32">
          <a target="_blank" rel="noreferrer" href="/resume.pdf">
            Resume
          </a>
        </Button>
      </div>
    </div>
  );
};
