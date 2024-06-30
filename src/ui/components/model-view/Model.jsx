import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState, useEffect } from 'react';

const ModelGlb = () => {
  const { scene } = useGLTF('/assets/model/pepsi_can.glb');
  scene.scale.set(5, 5, 5);
  return <primitive object={scene} width="100vw" height="100vh" />;
};

const Model = () => {

  const [rotateDirection, setRotateDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotateDirection((prev) => -prev); // Toggle the direction
    }, 3000); // Change direction every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas className="canvas-container" camera={{ position: [0, 0, 5], fov: 25 }}  width="100vw" height="100vh">
      <ambientLight intensity={10}/>
      <pointLight position={[10, 10, 10]} />
      <ModelGlb  />
      <OrbitControls 
       enableZoom={false}
       autoRotate
       autoRotateSpeed={8 * rotateDirection}
       minPolarAngle={Math.PI / 4} 
       maxPolarAngle={Math.PI / 1.8} 
       minAzimuthAngle={-Math.PI / 8} 
       maxAzimuthAngle={Math.PI }
      />
    </Canvas>
  );
}

export default Model;
