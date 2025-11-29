import React from 'react';

const QualityStandards: React.FC = () => {
  const certifications = [
    // { name: 'BIS', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Bureau_of_Indian_Standards_logo.svg/200px-Bureau_of_Indian_Standards_logo.svg.png' },
    { name: 'FSSAI', logo: '/brendlogo/fssai-logo-hd.png' },
    // { name: 'BIS Certification', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqVLqVqZQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s' },
    { name: 'HACCP', logo: '/brendlogo/184f67c5af21f3f8d4996e3df73ada07.png' },
    { name: 'ISO', logo: '/brendlogo/pngwing.com.png' },
    // { name: 'ISO 14001', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqVLqVqZQxQxQxQxQxQxQxQxQxQxQxQxQxQ&s' },
    // { name: 'NABL', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/NABL-India-logo.png/220px-NABL-India-logo.png' },
    { name: 'ISI', logo: '/brendlogo/isi-mark-logo-hd.png' },
    // { name: 'WHO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/World_Health_Organization_Logo.svg/200px-World_Health_Organization_Logo.svg.png' },
  ];

  return (
    <section id="quality" className="relative border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-green-700 mb-2">
            Quality Control Standards
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="flex items-center justify-center animate-on-scroll opacity-0 translate-y-6 transition-all duration-500 hover:scale-110"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={cert.logo}
                alt={cert.name}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect width="80" height="80" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="%23666"%3E' + cert.name + '%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;

