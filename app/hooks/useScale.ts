import { useEffect, useState } from 'react';

export const useScale = (
  val: number,
  range: Array<number>,
  output: Array<number>
) => {
  const [transformed, setTransformed] = useState(0);

  useEffect(() => {
    const clamped = Math.min(Math.max(val, range[0]), range[1]);
    const effectiveRange = range[1] - range[0];
    const percentage = (clamped - range[0]) / effectiveRange;
    const effectiveOutputRange = output[1] - output[0];
    setTransformed(output[0] + effectiveOutputRange * percentage);
  }, [val, range, output]);

  return transformed;
};
