import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const ModelGlb = () => {
  const { scene } = useGLTF('/assets/model/pepsi_can.glb');
  scene.scale.set(5, 5, 5);
  return <primitive object={scene} width="100vw" height="100vh" />;
};

const Model = () => {
  return (
    <Canvas className="canvas-container" camera={{ position: [0, 0, 5], fov: 25 }}  width="100vw" height="100vh">
      <ambientLight intensity={10}/>
      <pointLight position={[10, 10, 10]} />
      <ModelGlb  />
      <OrbitControls 
       enableZoom={false}
      //  ref={controlRef}
      //  maxAzimuthAngle ={3.14}
      />
    </Canvas>
  );
}

export default Model;
