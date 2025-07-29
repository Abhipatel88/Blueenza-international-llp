
import { Shield, Clock, Globe, Award, Users, Truck } from "lucide-react";

const WhyChooseUsSection = () => {
  const strengths = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes and international certifications ensure premium products every time.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient logistics network and reliable supply chain management for on-time deliveries worldwide.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive partnerships across 50+ countries with local expertise in international markets.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "15+ years of proven track record in agricultural commodity trading and export excellence.",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated team of trade experts providing personalized service and comprehensive support.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Truck,
      title: "Logistics Excellence",
      description: "Advanced supply chain solutions and partnerships with leading logistics providers globally.",
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
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-600 font-medium text-sm">Why Choose Bluenza</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-900 mb-6">
            Your Success is
            <span className="text-gradient block">Our Priority</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine industry expertise, global reach, and unwavering commitment to quality, making us the preferred partner for businesses worldwide.
          </p>
        </div>
        
        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <strength.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${strength.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
              </div>
              
              {/* Content */}
              <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {strength.description}
              </p>
            </div>
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
