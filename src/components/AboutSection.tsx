
import { CheckCircle, Award, Shield, Globe2 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Certified quality products meeting international standards"
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "15+ years of reliable service in global trade"
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Extensive network across 50+ countries worldwide"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium text-sm">About Bluenza International</span>
            </div>
            
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              <span className="text-gradient">Powerful Strategies for Global Growth</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We help companies elevate their brands with strategic international campaigns. Our mission is to connect the best of Indian manufacturing to worldwide markets, ensuring every brand reaches its potential.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From product packaging to global distribution, we handle it all — guided by passion and precision.
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

          </div>
          
          {/* Right Content */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="/team.png"
                alt="Bluenza International team working on global trade solutions"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                loading="lazy"
              />
              
              {/* Feature Cards */}
              <div className="absolute -bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="glass-card rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300"
                    >
                      <feature.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs font-semibold text-gray-800">{feature.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
