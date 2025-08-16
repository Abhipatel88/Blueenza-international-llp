import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF ,Environment  } from '@react-three/drei';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Earth3D = () => {
  const { scene } = useGLTF('/earthdunya.glb');
  return <primitive object={scene} scale={1.5} />;
};

const GlobalReachSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 to-blue-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - 3D Earth */}
          <div className="animate-slide-in-left order-2 lg:order-1">
  <div className="h-64 lg:h-96 w-full">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      {/* Bright ambient light */}
      <ambientLight intensity={1.5} />

      {/* Strong directional lights from different angles */}
      <directionalLight position={[10, 10, 10]} intensity={2} />
      <directionalLight position={[-10, -10, 10]} intensity={2} />

      {/* Add a realistic environment light */}
      <Suspense fallback={null}>
        <Environment preset="sunset" background={false} />

        {/* Your Earth model */}
        <Earth3D />

        {/* Controls */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={2} 
          enablePan={false}
        />
      </Suspense>
    </Canvas>
  </div>
</div>
          
          {/* Right Content */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium text-sm">{t('globalReach.badge')}</span>
            </div>
            
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              <span className="text-gradient">{t('globalReach.title')}</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('globalReach.description1')}
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('globalReach.description2')}
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('globalReach.description3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;