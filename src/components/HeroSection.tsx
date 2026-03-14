
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();
  
  const slides = [
    {
      image: "/1.png",
      title: "Global Trade"
    },
    {
      image: "/2nd.jpg",
      title: "Import Export Business"
    },
    {
      image: "/logistics-container-cargo-ship-t.png",
      title: "Logistics Solution"
    },
    {
      image: "/3.png",
      title: "International Trade"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Slides */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30"
          >
            <Globe className="w-4 h-4 text-white mr-2" />
            <span className="text-white font-medium text-sm tracking-wide">Global Trade Excellence</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6 drop-shadow-lg"
          >
            <span>Bluenza</span>
            <br />
            International LLP
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl drop-shadow-md"
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl text-lg border-0">
              {t('common.getQuote')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-6 rounded-full transition-all duration-300 text-lg backdrop-blur-sm bg-black/10">
              {t('common.learnMore')}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 pointer-events-none z-20">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-black/30 hover:bg-black/50 text-white backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 border border-white/20 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-black/30 hover:bg-black/50 text-white backdrop-blur-md rounded-full p-3 md:p-4 transition-all duration-300 border border-white/20 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-8 h-2.5 bg-blue-500' 
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
