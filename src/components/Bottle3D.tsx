import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense } from 'react';

const BottleModel = () => {
  const { scene } = useGLTF('/water+bottle+3d+model.glb');
  return <primitive object={scene} scale={2.5} position={[0, -1.2, 0]} />;
};

interface Bottle3DProps {
  className?: string;
}

const Bottle3D: React.FC<Bottle3DProps> = ({ className = "h-full w-full" }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [10, 15, 30], fov: 5 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 20]} intensity={2} />
        <directionalLight position={[-10, -10, 10]} intensity={2} />
        
        <Suspense fallback={null}>
          <Environment preset="sunset" background={false} />
          <BottleModel />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={1} 
            enablePan={false}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Bottle3D;