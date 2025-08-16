
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import MeetFoundersSection from "@/components/MeetFoundersSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Bluenza International LLP - {t('hero.title')}</title>
        <meta name="description" content={`Bluenza International LLP - ${t('hero.subtitle')}`} />
        <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
        <meta name="keywords" content="import export, international trade, food grains, oil seeds, agricultural products, global trade, Bluenza, India export" />
        <meta property="og:title" content="Bluenza International LLP - Premium Import Export Company" />
        <meta property="og:description" content="Leading import-export company specializing in food grains, oil seeds, and agricultural products worldwide. Quality products, competitive prices, and reliable service." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bluenza_intl" />
        <meta name="twitter:title" content="Bluenza International LLP - Premium Import Export Company" />
        <meta name="twitter:description" content="Leading import-export company specializing in food grains, oil seeds, and agricultural products worldwide." />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="canonical" href="https://bluenzainternational.com" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What products does Bluenza International export?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bluenza International specializes in exporting premium food grains, oil seeds, agricultural products, and water bottles. We offer high-quality products including rice, wheat, barley, sunflower seeds, soybeans, and various sizes of water bottles (250ml, 500ml, 1L)."
                }
              },
              {
                "@type": "Question",
                "name": "Which countries does Bluenza International serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We serve over 50 countries worldwide with our extensive global network. Our services cover markets across Asia, Europe, Africa, and the Americas, providing reliable import-export solutions to clients worldwide."
                }
              },
              {
                "@type": "Question",
                "name": "What quality certifications does Bluenza International have?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bluenza International holds ISO 9001:2015 certification, HACCP certification, and various international quality standards. Our products meet the highest quality requirements for global trade and export markets."
                }
              },
              {
                "@type": "Question",
                "name": "How can I get a quote from Bluenza International?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get a quote by contacting us through our website contact form, calling us at +91 90063 90094, or sending an email to bluenzainternational.llp@gmail.com. Our team will respond within 24 hours with detailed pricing and terms."
                }
              },
              {
                "@type": "Question",
                "name": "What are Bluenza International's business hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our business hours are Monday to Saturday, 10:00 AM to 6:00 PM (Gujarat Standard Time). We are closed on Sundays. For urgent inquiries, we also provide emergency support services."
                }
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
            "description": "Leading import-export company specializing in food grains, oil seeds, and agricultural products worldwide.",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 90063 90094",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }],
            "sameAs": [
              "https://twitter.com/bluenza_intl"
            ]
          }
        `}</script>
      </Helmet>
      <HeroSection />
      <AboutSection />
      <GlobalReachSection />
      {/* <ProductsSection /> */}
      <WhyChooseUsSection />
      <MeetFoundersSection />
      <ContactSection />
    </div>
  );
};

export default Index;
