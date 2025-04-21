import { useGLTF } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';
import { SampledParticles } from './sampledParticles';

export const DNAParticles = ({ count = 8000 }: { count?: number }) => {
  const { nodes } = useGLTF('/dna.glb');

  const geometry1 = useMemo(() => {
    const cloned = nodes.Cylinder001.geometry.clone();
    return cloned;
  }, [nodes]);

  const geometry2 = useMemo(() => {
    const cloned = nodes.Cylinder002.geometry.clone();
    cloned.applyMatrix4(new THREE.Matrix4().makeRotationZ(Math.PI));
    return cloned;
  }, [nodes]);

  return (
    <>
      <SampledParticles geometry={geometry1} count={count / 2} />
      <SampledParticles geometry={geometry2} count={count / 2} />
    </>
  );
};

useGLTF.preload('/dna.glb');
