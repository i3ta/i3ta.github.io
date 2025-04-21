import {
  ParticleMaterial,
  ParticleMaterialType,
} from '@/materials/particleMaterial';
import { Sampler, type TransformFn } from '@react-three/drei';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

extend({ ParticleMaterial });

export const SampledParticles = ({
  geometry,
  count,
}: {
  geometry: THREE.BufferGeometry;
  count: number;
}) => {
  const materialRef = useRef<ParticleMaterialType>(null!);
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null!);
  const { pointer, camera } = useThree();

  const rotationSpeed = 0.005;

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uTime = state.clock.elapsedTime;

      const vec = new THREE.Vector3(pointer.x, pointer.y, 0);
      vec.unproject(camera);

      materialRef.current.uMouse = vec;
      materialRef.current.uTime = performance.now() / 1000;
    }

    if (instancedMeshRef.current) {
      instancedMeshRef.current.rotation.z += rotationSpeed;
    }
  });

  useEffect(() => {
    const createIndexAttr = (ref: THREE.InstancedMesh, offset: number) => {
      const indexAttr = new Float32Array(count);
      for (let i = 0; i < count; i++) indexAttr[i] = i + offset;
      ref.geometry.setAttribute(
        'instanceIndex',
        new THREE.InstancedBufferAttribute(indexAttr, 1)
      );
    };

    if (instancedMeshRef.current) {
      createIndexAttr(instancedMeshRef.current, 0);
    }
  }, [count]);

  return (
    <Sampler count={count} transform={transformInstance}>
      <mesh geometry={geometry} visible={false} />
      <instancedMesh
        ref={instancedMeshRef}
        args={[undefined, undefined, count]}
      >
        <sphereGeometry args={[0.01]} />
        <particleMaterial ref={materialRef} />
      </instancedMesh>
    </Sampler>
  );
};

function transformInstance({ dummy, position }: TransformPayload) {
  dummy.position.copy(position);
  dummy.position.z += 15;
  dummy.scale.setScalar(1);
  dummy.updateMatrix();
  return dummy;
}

type TransformPayload = Parameters<TransformFn>[0];
