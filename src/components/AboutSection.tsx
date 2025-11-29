
import { CheckCircle, Award, Shield, Globe2 } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Award,
      title: t('about.qualityAssurance'),
      description: t('about.qualityDesc')
    },
    {
      icon: Shield,
      title: t('about.trustedPartner'),
      description: t('about.trustedDesc')
    },
    {
      icon: Globe2,
      title: t('about.globalReach'),
      description: t('about.globalDesc')
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
            >
              <span className="text-blue-600 font-medium text-sm">{t('about.badge')}</span>
            </motion.div>
            
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              <span className="text-gradient">{t('about.title')}</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description1')}
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description2')}
            </p>
            
            <div className="mb-8">
              <img 
                src="/signature.png" 
                alt="Bluenza International company signature" 
                className="h-16 object-contain"
                loading="lazy"
              />
            </div>
            
            {/* <div className="space-y-4 mb-8">
              {[
                "Premium quality food grains and oil seeds",
                "Comprehensive logistics and supply chain management",
                "Certified organic and conventional products",
                "End-to-end trade solutions and support"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
             */}

          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                src="/team.png"
                alt="Bluenza International team working on global trade solutions"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Feature Cards */}
              <div className="absolute -bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="glass-card rounded-xl p-4 text-center"
                    >
                      <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs font-semibold text-gray-800">{feature.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
