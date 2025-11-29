import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF ,Environment  } from '@react-three/drei';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
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
</motion.div>
          
          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-medium text-sm">{t('globalReach.badge')}</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="font-poppins font-bold text-4xl text-gray-900 mb-6"
            >
              <span className="text-gradient">{t('globalReach.title')}</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              {t('globalReach.description1')}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              {t('globalReach.description2')}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              {t('globalReach.description3')}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;