import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import { type RefObject } from 'react';
import { DNAParticles } from './models/dnaParticles';
import { AngledCamera } from './lib/angledCamera';
import { CurvedPlane } from './models/curvedPlane';
import { Recorder } from './lib/recorder';

export const DNABackground = ({
  cameraAngle,
  ref,
}: {
  cameraAngle?: number;
  ref?: RefObject<HTMLDivElement> | undefined;
}) => {
  return (
    <div className="absolute !w-screen !h-screen top-0 right-0" ref={ref}>
      <Canvas
        camera={{ fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color(23, 23, 23);
          scene.fog = new THREE.Fog('black', 5, 15);
        }}
      >
        <DNAParticles />
        <EffectComposer>
          <Bloom
            intensity={3.0}
            luminanceThreshold={0.1}
            luminanceSmoothing={1}
          />
        </EffectComposer>
        <AngledCamera
          position={[0, 7, 5]}
          lookAt={[2, 0, 0]}
          yRotation={cameraAngle}
        />

        {/* Glow effect */}
        <CurvedPlane
          position={[-3, -3, 0]}
          rotation={[-1.4, -0.3, 1.5]}
          radius={100}
          angle={0.3}
        />
        <pointLight position={[-1, 0, 1.5]} intensity={7} />
        <pointLight position={[-1, 0, -2.5]} intensity={7} />
        <Recorder />
      </Canvas>
    </div>
  );
};
