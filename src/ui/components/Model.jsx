import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelGlb = () => {
  const { scene } = useGLTF('/assets/model/pepsi_can.glb');
  scene.scale.set(20, 20, 20);
  return <primitive object={scene} width="100vw" height="100vh" />;
};

const Model = () => {
  return (
    <Canvas className="canvas-container" camera={{ position: [0, 0, 5], fov: 25 }}  width="100vw" height="100vh">
      <ambientLight intensity={10}/>
      <pointLight position={[10, 10, 10]} />
      <ModelGlb  />
      <OrbitControls />
    </Canvas>
  );
}

export default Model;
