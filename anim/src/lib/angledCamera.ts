import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type Vec3 = [number, number, number];

export const AngledCamera = ({
  position = [0, 0, 5],
  lookAt = [0, 0, 0],
  yRotation = 0,
}: {
  position?: Vec3;
  lookAt?: Vec3;
  yRotation?: number; // in radians
}) => {
  const { camera } = useThree();

  useFrame(() => {
    // Apply Y-axis rotation to the up vector
    const up = new THREE.Vector3(Math.sin(yRotation), 0, -Math.cos(yRotation));
    camera.up.copy(up);

    // Set position
    camera.position.set(...position);

    // Set look at target
    camera.lookAt(...lookAt);
  });

  return null;
};
