import { RefObject } from 'react';

export interface DnaBackgroundProps {
  ref: RefObject<HTMLDivElement> | undefined;
}

export const DnaBackground = ({ ref }: DnaBackgroundProps) => {
  return (
    <div className="absolute !w-screen !h-screen top-0 right-0" ref={ref}>
      <img
        src="/dna-background-poster.jpg"
        alt="glowing dna model"
        className="w-full h-full object-cover object-[75%_25%]"
      />
    </div>
  );
};
