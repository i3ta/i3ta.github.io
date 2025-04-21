import { ParticleMaterial } from '@/materials/particleMaterial';
import { ThreeElement } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    particleMaterial: ThreeElement<typeof ParticleMaterial>;
  }
}
