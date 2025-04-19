import { Canvas } from '@react-three/fiber';
import { DNAParticles } from '@/models/dnaParticles';
import { RotatingCamera } from '@/lib/rotatingCamera';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const Main = () => {
  return (
    <div className="fixed w-screen h-screen bg-neutral-800">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.5} />
        <DNAParticles />
        <EffectComposer>
          <Bloom
            intensity={0.5}
            luminanceThreshold={0.8}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>
        <RotatingCamera radius={6} speed={0} />
      </Canvas>
    </div>
  );
};
