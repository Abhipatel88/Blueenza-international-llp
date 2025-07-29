
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "/1.jpeg",
      title: "Global Trade"
    },
    {
      image: "/2.jpeg",
      title: "Agricultural Products"
    },
    {
      image: "/3.jpeg",
      title: "Food Grains"
    },
    {
      image: "/4.jpeg",
      title: "Oil Seeds"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-800/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Globe className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">Global Trade Excellence</span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
              <span className="text-gradient">Bluenza</span>
              <br />
              International LLP
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your trusted partner in global import-export operations. We specialize in premium food grains, oil seeds, and agricultural products, connecting markets worldwide with quality and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Quote Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">Fast</div>
                <div className="text-sm text-gray-600">Global Delivery</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Carousel */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Carousel Container */}
              <div className="glass-card rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative overflow-hidden">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  {slides.map((slide, index) => (
                    <img
                      key={index}
                      src={slide.image}
                      alt={`${slide.title} - Bluenza International global trade services`}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-lg"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-800" />
                  </button>
                  
                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-pulse">
                <TrendingUp className="w-8 h-8 text-green-600 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Growing Markets</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 animate-pulse delay-500">
                <Users className="w-8 h-8 text-blue-600 mb-2" />
                <div className="text-sm font-semibold text-gray-800">Global Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
