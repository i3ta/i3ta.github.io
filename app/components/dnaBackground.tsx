import { AngledCamera } from '@/lib/angledCamera';
import { DNAParticles } from '@/models/dnaParticles';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import * as THREE from 'three';
import { CurvedPlane } from './curvedPlane';

export const DNABackground = ({ cameraAngle }: { cameraAngle?: number }) => {
  return (
    <div className="absolute w-screen h-screen top-0 right-0">
      <Canvas
        camera={{ fov: 45 }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color('black');
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
        <pointLight position={[-1, 0, 0]} intensity={7} />
      </Canvas>
    </div>
  );
};
