import { DNABackground } from '~/components/dnaBackground';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useEnter } from '~/hooks/useEnter';
import { useScrollAbsolute } from '~/hooks/useScrollAbsolute';
import { useScale } from '~/hooks/useScale';

export const Main = () => {
  /* Title entrance animation */
  const titleRef = useRef<HTMLHeadingElement>(null);
  const controls = useAnimation();
  const handleViewportEnter = () => {
    controls.start({
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    });
  };
  useEnter(titleRef, handleViewportEnter, false);

  const scrollY = useScrollAbsolute();

  /* Shrinking background animation */
  const bgWidth = useScale(scrollY, [0, 400], [100, 40]);
  const bgHeight = useScale(scrollY, [0, 400], [100, 90]);
  const bgRight = useScale(scrollY, [0, 400], [0, 5]);
  const bgTop = useScale(scrollY, [0, 400], [0, 5]);
  const bgBorderRadius = useScale(scrollY, [0, 400], [0, 20]);
  const bgScroll = useScale(scrollY, [450, 2000], [0, -1550]);

  return (
    <div className="relative w-screen flex flex-row justify-center pt-16">
      {/* Background layers */}
      <div className="fixed top-0 h-screen w-screen bg-gradient-to-br from-neutral-900 to-neutral-950 -z-20" />
      <div
        className="fixed h-screen -z-10 overflow-hidden border border-black shadow-black !shadow-lg"
        style={{
          width: `${bgWidth}vw`,
          height: `${bgHeight}vh`,
          right: `${bgRight}vw`,
          top: `calc(${bgTop}vh + ${bgScroll}px)`,
          borderRadius: `${bgBorderRadius}px`,
        }}
      >
        <DNABackground cameraAngle={2.8} heightScale={bgHeight / 100} />
      </div>

      {/* Content */}
      <div className="relative w-9/10 max-w-5xl top-36 flex flex-col items-start gap-8">
        <div className="flex flex-col overflow-hidden">
          <h2>Hi, I&apos;m</h2>
          <motion.h1
            ref={titleRef}
            className="font-bold text-9xl leading-[1.2] bg-linear-to-r from-tblue to-tgreen text-transparent bg-clip-text"
            initial={{ y: '100%' }}
            animate={controls}
          >
            Aaron Hung
          </motion.h1>
        </div>
        <p className="w-1/2">
          I&apos;m a second year <b>computer science + biochemistry</b> student
          on the pre-med track at <b>Georgia Tech 🐝</b>. My passions are in
          biotechnology, and I strive to leverage the power of modern computing
          to improve healthcare everywhere, for everyone.
        </p>

        <div className="w-1 h-[300px]" />

        <motion.p className="w-1/2">
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
