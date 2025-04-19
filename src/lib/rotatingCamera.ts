import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';

export const RotatingCamera = ({
  radius = 5,
  speed = 0.5,
}: {
  radius?: number;
  speed?: number;
}) => {
  const { camera } = useThree();
  const angle = useRef(0);

  useFrame((_, delta) => {
    angle.current += speed * delta;
    const x = radius * Math.cos(angle.current);
    const y = radius * Math.sin(angle.current);
    const z = camera.position.z;

    camera.position.set(x, y, z);
    camera.lookAt(0, 0, 0);
    camera.up.set(Math.sin(angle.current), -Math.cos(angle.current), 0.7);
  });

  return null;
};
