import React, { useEffect } from 'react';
import WellsipHeader from '../components/wellsip/WellsipHeader';
import WellsipHero from '../components/wellsip/WellsipHero';
import WellsipStory from '../components/wellsip/WellsipStory';
import MineralComposition from '../components/wellsip/MineralComposition';
import ReviewsSlider from '../components/wellsip/ReviewsSlider';
import ShopSection from '../components/wellsip/ShopSection';
import QualityStandards from '../components/wellsip/QualityStandards';
import TrustedBySection from '../components/wellsip/TrustedBySection';
import SustainabilitySection from '../components/wellsip/SustainabilitySection';
import BlogSection from '../components/wellsip/BlogSection';
import FAQSection from '../components/wellsip/FAQSection';
import ContactSection from '../components/wellsip/ContactSection';
import WellsipFooter from '../components/wellsip/WellsipFooter';
import '../components/wellsip/wellsip-animations.css';

const Wellsip: React.FC = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const animatedEls = document.querySelectorAll('.animate-on-scroll, .mineral-card, .review-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            entry.target.classList.add('opacity-100', 'translate-y-0', 'transition', 'duration-700');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    animatedEls.forEach((el) => observer.observe(el));

    return () => {
      animatedEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <WellsipHeader />
      <main>
        <WellsipHero />
        <WellsipStory />
        <SustainabilitySection />
        <MineralComposition />
        <ReviewsSlider />
        <ShopSection />
        <QualityStandards />
        {/* <TrustedBySection /> */}
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>
      <WellsipFooter />
    </div>
  );
};

export default Wellsip;