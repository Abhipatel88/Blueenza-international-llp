import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MeetFoundersSection = () => {
  const { t } = useTranslation();

  // Example founders shown in the screenshot — adjust images/names as needed
  const founders = [
    
    {
      name: 'Uday Dabhi',
      designation: 'Founder',
      image:
        '/uday.jpg',
    },
    {
      name: 'Sanjay Dabhi',
      designation: 'Co-Founder',
      image:
        '/uday.jpg',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-4"
          >
            <span className="text-purple-600 font-medium text-sm">{t('founders.badge')}</span>
          </motion.div>

          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-4">
            <span className="text-gradient">{t('founders.title')}</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {t('founders.subtitle')}
          </p>
        </motion.div>

        <div className=" h-[50vh] flex items-center justify-center gap-10">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="w-72 h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">{founder.name}</h3>
                <p className="text-sm text-blue-600 mt-2">{founder.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetFoundersSection;