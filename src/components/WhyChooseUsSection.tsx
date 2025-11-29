
import { Shield, Clock, Globe, Award, Users, Truck } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const { t } = useTranslation();
  
  const strengths = [
    {
      icon: Shield,
      title: t('whyChoose.qualityAssurance'),
      description: t('whyChoose.qualityDesc'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: t('whyChoose.timelyDelivery'),
      description: t('whyChoose.timelyDesc'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: t('whyChoose.globalNetwork'),
      description: t('whyChoose.networkDesc'),
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Award,
      title: t('whyChoose.industryExperience'),
      description: t('whyChoose.experienceDesc'),
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: t('whyChoose.customerSupport'),
      description: t('whyChoose.supportDesc'),
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Truck,
      title: t('whyChoose.logisticsExcellence'),
      description: t('whyChoose.logisticsDesc'),
      gradient: "from-rose-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-800/5"></div>
      
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <span className="text-blue-600 font-medium text-sm">{t('whyChoose.badge')}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-poppins font-bold text-4xl lg:text-5xl text-gray-900 mb-6"
          >
            <span className="text-gradient">{t('whyChoose.title')}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('whyChoose.subtitle')}
          </motion.p>
        </motion.div>
        
        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <strength.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
              
              {/* Content */}
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Stats */}
        {/* <div className="mt-20 animate-fade-in">
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Customer Support</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
