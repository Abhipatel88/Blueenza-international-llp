
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe, HeadphonesIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/forms/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: t('contactPage.success.title'),
          description: t('contactPage.success.description'),
        });
        setFormData({ fullName: "", email: "", phoneNumber: "", companyName: "", subject: "", message: "" });
      } else {
        toast({
          title: t('contactPage.error.title'),
          description: t('contactPage.error.description'),
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: t('contactPage.error.title'),
        description: t('contactPage.error.description'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contactPage.contactDetails.phone'),
      info: "+91 90063 90094",
      subInfo: `${t('contactPage.contactDetails.whatsapp')}: +91 90063 90094`,
      description: t('contactPage.available10to6'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: t('contactPage.contactDetails.email'),
      info: "bluenzainternational.llp@gmail.com",
      subInfo: t('contactPage.businessInquiries'),
      description: t('contactPage.respond24h'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: t('contactPage.contactDetails.address'),
      info: "C-3, Parishram Park, Dhuliya Chokdi",
      subInfo: "Bardoli, Surat, Gujarat-394601",
      description: t('contactPage.openAppointments'),
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: t('contactPage.contactDetails.workingHours'),
      info: t('contactPage.contactDetails.workingHoursText'),
      subInfo: t('contactPage.sundayClosed'),
      description: t('contactPage.gujaratTime'),
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const officeLocations = [
    {
      city: "Bardoli, Surat",
      address: "C-3, Parishram Park, Dhuliya Chokdi, Bardoli, Dis. Surat, Gujarat-394601",
      phone: "+91 90063 90094",
      type: "Head Office"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>{t('contactPage.title')} | Bluenza International LLP</title>
        <meta name="description" content={t('contactPage.subtitle')} />
        <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
        <link rel="canonical" href="https://bluenzainternational.com/contact" />
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
                "name": "Contact Us",
                "item": "https://bluenzainternational.com/contact"
              }
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bluenza International LLP",
            "url": "https://bluenzainternational.com",
            "logo": "/logo.png",
            "description": "Leading import-export company specializing in food grains, oil seeds, and agricultural products worldwide.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C-3, Parishram Park, Dhuliya Chokdi",
              "addressLocality": "Bardoli",
              "addressRegion": "Surat",
              "addressCountry": "IN",
              "postalCode": "394601"
            },
            "telephone": "+91 90063 90094",
            "email": "bluenzainternational.llp@gmail.com",
            "openingHours": [
              "Mo-Sa 10:00-18:00"
            ],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91 90063 90094",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "18:00"
              }
            }],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.107465922463536,
              "longitude": 73.11098905631795
            },
            "priceRange": "$$",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, Credit Card, Bank Transfer"
          }
        `}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-800/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-blue-600 font-medium text-sm">{t('contactPage.badge')}</span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
              <span className="text-gradient">{t('contactPage.heroTitle')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('contactPage.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-0">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="group glass-card rounded-3xl p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 mx-auto`}></div>
                </div>
                
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{item.info}</p>
                <p className="text-gray-600 text-sm mb-2">{item.subInfo}</p>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in-left">
              <div className="glass-card rounded-3xl p-8">
                <div className="mb-8">
                  <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                    {t('contactPage.sendMessage')}
                  </h2>
                  <p className="text-gray-600">
                    {t('contactPage.formDescription')}
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contactPage.formLabels.fullName')} *
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.placeholders.fullName')}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contactPage.formLabels.email')} *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.placeholders.email')}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contactPage.formLabels.phone')}
                      </label>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.placeholders.phone')}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contactPage.formLabels.company')}
                      </label>
                      <Input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder={t('contactPage.placeholders.company')}
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contactPage.formLabels.subject')} *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">{t('contactPage.selectSubject')}</option>
                      <option value="quote">{t('contactPage.subjects.quote')}</option>
                      <option value="partnership">{t('contactPage.subjects.partnership')}</option>
                      <option value="product">{t('contactPage.subjects.product')}</option>
                      <option value="logistics">{t('contactPage.subjects.logistics')}</option>
                      <option value="other">{t('contactPage.subjects.other')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('contactPage.formLabels.message')} *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('contactPage.placeholders.message')}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px] rounded-xl"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {t('contactPage.buttons.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contactPage.buttons.sendMessage')}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Office Locations & Additional Info */}
            <div className="animate-slide-in-right space-y-8">
              {/* Office Locations */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6 flex items-center">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  {t('contactPage.contactDetails.location')}
                </h3>
                
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{office.city}</h4>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {t('contactPage.officeType')}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{office.address}</p>
                      <p className="text-gray-500 text-sm">{office.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Support */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="font-poppins font-bold text-2xl text-gray-900 mb-6 flex items-center">
                  <HeadphonesIcon className="w-6 h-6 text-blue-600 mr-3" />
                  {t('contactPage.quickSupport.title')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">{t('contactPage.quickSupport.emergency')}</div>
                      <div className="text-sm text-gray-600">{t('contactPage.quickSupport.emergencyDesc')}</div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      {t('contactPage.buttons.callNow')}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">{t('contactPage.quickSupport.whatsappSupport')}</div>
                      <div className="text-sm text-gray-600">{t('contactPage.quickSupport.whatsappDesc')}</div>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      {t('contactPage.quickSupport.chatNow')}
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">{t('contactPage.quickSupport.videoCall')}</div>
                      <div className="text-sm text-gray-600">{t('contactPage.quickSupport.videoDesc')}</div>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      {t('contactPage.quickSupport.schedule')}
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  {t('contactPage.getDirections')}
                </h3>
                <div className="rounded-2xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d930.5319784643241!2d73.11098905631795!3d21.107465922463536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d21.107777452322736!2d73.11175616806612!5e0!3m2!1sen!2sin!4v1752388404920!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
