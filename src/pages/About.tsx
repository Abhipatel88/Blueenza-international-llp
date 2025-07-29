
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Globe2, Users, TrendingUp, Target, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  const timeline = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Bluenza International LLP was established with a vision to connect global markets through quality agricultural products."
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Expanded operations to cover 25+ countries across Asia, Europe, and Africa."
    },
    {
      year: "2016",
      title: "Quality Certifications",
      description: "Achieved ISO certification and various international quality standards."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Implemented advanced technology solutions for better supply chain management."
    },
    {
      year: "2024",
      title: "Global Leadership",
      description: "Now serving 50+ countries with a network of trusted partners worldwide."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Quality First",
      description: "We never compromise on quality, ensuring every product meets the highest international standards.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers' success is our success. We build long-term partnerships based on trust and reliability.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe2,
      title: "Global Perspective",
      description: "We think globally while acting locally, understanding diverse market needs and cultural nuances.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We constantly evolve and innovate to stay ahead in the dynamic global trade environment.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>About Us | Bluenza International LLP</title>
        <meta name="description" content="Learn about Bluenza International LLP, our mission, vision, and journey as a global leader in import-export services." />
        <link rel="canonical" href="https://bluenzainternational.com/about" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bluenzainternational.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://bluenzainternational.com/about"
              }
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bluenza International LLP",
            "url": "https://bluenzainternational.com",
            "logo": "/logo.png",
            "description": "Bluenza International LLP is a premier import-export company bridging markets worldwide with innovative solutions and premium products. We specialize in food grains, oil seeds, and agricultural products with expertise in water bottles, accessories, and custom solutions.",
            "foundingDate": "2008",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C-3, Parishram Park, Dhuliya Chokdi",
              "addressLocality": "Bardoli",
              "addressRegion": "Surat",
              "addressCountry": "IN",
              "postalCode": "394601"
            },
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 90063 90094",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }],
            "sameAs": [
              "https://twitter.com/bluenza_intl"
            ],
            "knowsAbout": [
              "Import Export",
              "International Trade",
              "Food Grains",
              "Oil Seeds",
              "Agricultural Products",
              "Water Bottles",
              "Global Trade"
            ],
            "numberOfEmployees": "50+",
            "areaServed": "Worldwide"
          }
        `}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-800/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium text-sm">About Bluenza International</span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
              <span className="text-gradient">About Bluenza International</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to Bluenza International, where global trade meets excellence. As a premier import-export company, we bridge markets worldwide with innovative solutions and premium products. Our commitment to quality, sustainability, and customer satisfaction has established us as a trusted partner in international trade. With expertise in water bottles, accessories, and custom solutions, we deliver value that transcends borders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="animate-slide-in-left">
              <div className="glass-card rounded-3xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To connect global markets through quality products, reliable services, and sustainable practices, 
                  enriching lives and economies worldwide.
                </p>
                <div className="space-y-3">
                  {[
                    "Deliver premium quality  products",
                    "Ensure timely and safe deliveries",
                    "Build lasting partnerships across the globe",
                    "Drive innovation in trade"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="animate-slide-in-right">
              <div className="glass-card rounded-3xl p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To be a global leader in import-export services, recognized for our commitment to quality, 
                  sustainability, and customer satisfaction, touching lives and economies worldwide.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                    <div className="text-sm text-gray-600">Countries by 2030</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Carbon</div>
                    <div className="text-sm text-gray-600">Neutral by 2028</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              Our Journey of
              <span className="text-gradient block">Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to global leadership, here's how we've grown over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-1 lg:px-8">
                    <div className={`glass-card rounded-2xl p-6 ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 lg:px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
              Our Core
              <span className="text-gradient block">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group glass-card rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 mx-auto`}></div>
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          <h2 className="font-poppins font-bold text-4xl text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied clients who trust Bluenza International for their global trade needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
