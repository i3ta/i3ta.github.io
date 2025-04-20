import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const CurvedPlane = ({
  radius = 30,
  angle = Math.PI / 4,
  width = 100,
  height = 100,
  segments = 64,
  ...props
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const geometry = mesh.geometry as THREE.PlaneGeometry;
    const posAttr = geometry.attributes.position;
    const pos = posAttr.array as Float32Array;

    for (let i = 0; i < posAttr.count; i++) {
      const x = pos[i * 3]; // X
      const y = pos[i * 3 + 1]; // Y
      const t = x / width; // normalized X [-0.5, 0.5]

      // Compute curve offset
      const theta = t * angle;
      pos[i * 3] = radius * Math.sin(theta); // new X
      pos[i * 3 + 2] = radius * (1 - Math.cos(theta)); // curve Z
    }

    posAttr.needsUpdate = true;
    geometry.computeVertexNormals();
  }, [radius, angle, width]);

  return (
    <mesh ref={meshRef} {...props}>
      <planeGeometry args={[width, height, segments, 1]} />
      <meshStandardMaterial color="green" side={THREE.DoubleSide} />
    </mesh>
  );
};
