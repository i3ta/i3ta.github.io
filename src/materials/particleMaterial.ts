import { shaderMaterial } from "@react-three/drei";
import vertexShader from "@/shaders/particleVertexShader.glsl";
import fragmentShader from "@/shaders/particleFragmentShader.glsl";

export const ParticleMaterial = shaderMaterial(
  { uTime: 0 },
  vertexShader,
  fragmentShader
);
