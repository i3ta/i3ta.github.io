import { DNABackground } from '~/components/dnaBackground';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useEnter } from '~/hooks/useEnter';
import { useScrollAbsolute } from '~/hooks/useScrollAbsolute';
import { useScale } from '~/hooks/useScale';

export const Main = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();

  const handleViewportEnter = () => {
    controls.start({
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    });
  };

  useEnter(titleRef, handleViewportEnter);

  const scrollAbs = useScrollAbsolute();
  const cameraAngle = useScale(scrollAbs, [0, 400], [2.8, 3.3]);

  const { scrollY } = useScroll();
  const opacity2 = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <div className="relative w-screen flex flex-row justify-center pt-16">
      {/* Background layers */}
      <div className="fixed top-0 h-screen w-screen bg-gradient-to-br from-neutral-800 to-neutral-950 -z-20" />
      <div className="fixed h-screen w-full top-0 -z-10 right-0 overflow-hidden">
        <DNABackground cameraAngle={2.8} />
      </div>

      {/* Content */}
      <div className="relative w-9/10 max-w-5xl top-42 overflow-hidden flex flex-col items-start gap-4">
        <motion.h1
          ref={titleRef}
          initial={{ x: '-100%' }}
          animate={controls}
          onViewportEnter={handleViewportEnter}
          viewport={{ once: true, amount: 0.1 }}
        >
          Hi, I&apos;m <b>Aaron</b>.
        </motion.h1>

        <p className="w-1/2">
          I&apos;m a second year <b>computer science + biochemistry</b> student
          on the pre-med track at <b>Georgia Tech 🐝</b>. My passions are in
          biotechnology, and I strive to leverage the power of modern computing
          to improve healthcare everywhere, for everyone.
        </p>

        <div className="w-1 h-[300px]" />

        <motion.p className="w-1/2" style={{ opacity: opacity2 }}>
          I&apos;m a second year <b>computer science + biochemistry</b> student
          on the pre-med track at <b>Georgia Tech 🐝</b>. My passions are in
          biotechnology, and I strive to leverage the power of modern computing
          to improve healthcare everywhere, for everyone.
        </motion.p>
        <div className="w-1 h-[1000px]" />
      </div>
    </div>
  );
};
