import { useEffect, type RefObject } from 'react';

export const useEnter = <T extends HTMLElement>(
  targetRef: RefObject<T>,
  handler: () => void,
  once = true
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handler();
          if (once) {
            observer.disconnect();
          }
        }
      },
      {
        threshold: 0.0,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetRef, handler, once]);
};
