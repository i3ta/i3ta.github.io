import { useGLTF } from '@react-three/drei';

export const DNA = ({ visible = false }: { visible: boolean }) => {
  const { nodes } = useGLTF('/dna.glb');

  return (
    <group visible={visible}>
      <mesh geometry={nodes.Cylinder001.geometry}>
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh geometry={nodes.Cylinder002.geometry} rotation={[0, 0, Math.PI]}>
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

useGLTF.preload('/dna.glb');
