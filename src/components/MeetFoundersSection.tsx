import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const MeetFoundersSection = () => {
  const { t } = useTranslation();

  const founders = [
    {
      name: 'Uday Dabhi',
      designation: 'Founder',
      image: '/uday.jpg',
    },
    {
      name: 'Sanjay Dabhi',
      designation: 'Co-Founder',
      image: '/profile.png', // Replace with Sanjay's photo when available
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Refined Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-50 via-transparent to-blue-50/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold tracking-wide uppercase">
            {t('founders.badge')}
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              {t('founders.title')}
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            {t('founders.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-12">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
              className="relative group w-full max-w-[320px]"
            >
              {/* Card Decoration Blobs */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center">
                {/* Photo Container - Circular Masking makes inconsistent photos look consistent */}
                <div className="relative w-48 h-48 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-full -rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-gray-100">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {founder.name}
                  </h3>
                  <div className="inline-block px-3 py-1 mt-2 bg-blue-50 rounded-lg">
                    <p className="text-sm font-semibold text-blue-600">
                      {founder.designation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetFoundersSection;