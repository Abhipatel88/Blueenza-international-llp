import { useTranslation } from 'react-i18next';

const MeetFoundersSection = () => {
  const { t } = useTranslation();
  
  const founders = [
    {
      name: "Uday Dabhi",
      designation: t('founders.managingDirector'),
      company: "Bluenza International LLP",
      location: "Surat",
      image: "/uday.jpg"
    },
    {
      name: "Sanjay K Dabhi", 
      designation: t('founders.partner'),
      company: "Bluenza International LLP",
      location: "Surat",
      image: "/uday.jpg"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6">
            <span className="text-purple-600 font-medium text-sm">{t('founders.badge')}</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
            <span className="text-gradient">{t('founders.title')}</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {t('founders.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="text-center animate-slide-in-up">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={founder.image}
                    alt={`${founder.name}, ${founder.designation} at ${founder.company}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="glass-card rounded-full px-4 py-2">
                    <span className="text-blue-600 font-semibold text-sm">{t('founders.founder')}</span>
                  </div>
                </div>
              </div>
              
              <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-2">
                {founder.name}
              </h3>
              
              <div className="space-y-2 text-gray-600">
                <p className="text-lg font-semibold text-blue-600">{founder.designation}</p>
                <p className="text-base">{founder.company}</p>
                <p className="text-sm">{t('founders.from')} {founder.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetFoundersSection;