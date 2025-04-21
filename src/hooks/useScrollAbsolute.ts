import { useEffect, useState } from 'react';

export const useScrollAbsolute = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const updateScroll = () => {
      setScrollY(window.scrollY);
      animationFrameId = requestAnimationFrame(updateScroll);
    };

    animationFrameId = requestAnimationFrame(updateScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return scrollY;
};
