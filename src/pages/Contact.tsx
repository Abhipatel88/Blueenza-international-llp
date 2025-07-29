
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Globe, HeadphonesIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
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
          title: "Message Sent Successfully!",
          description: "Thank you for contacting us. Our team will get back to you within 24 hours.",
        });
        setFormData({ fullName: "", email: "", phoneNumber: "", companyName: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Connection failed. Please try again.",
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
      title: "Call Us",
      info: "+91 90063 90094",
      subInfo: "WhatsApp: +91 90063 90094",
      description: "Available 10:00 AM - 6:00 PM",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "bluenzainternational.llp@gmail.com",
      subInfo: "Business inquiries welcome",
      description: "We'll respond within 24 hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "C-3, Parishram Park, Dhuliya Chokdi",
      subInfo: "Bardoli, Surat, Gujarat-394601",
      description: "Open for appointments",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      info: "Monday - Saturday: 10:00 AM - 6:00 PM",
      subInfo: "Sunday: Closed",
      description: "Gujarat Standard Time",
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
        <title>Contact Us | Bluenza International LLP</title>
        <meta name="description" content="Contact Bluenza International LLP for global trade solutions, quotes, and support. Reach out to our team for personalized assistance." />
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
              <span className="text-blue-600 font-medium text-sm">Get In Touch</span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
              Let's Discuss Your
              <span className="text-gradient block">Global Trade Needs</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ready to expand your business globally? Our trade experts are here to provide personalized solutions, 
              competitive quotes, and comprehensive support for all your import-export requirements.
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
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Your phone number"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request Quote</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="product">Product Information</option>
                      <option value="logistics">Logistics Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, quantities, target markets, or any specific questions..."
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
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
                  Our Office Locations
                </h3>
                
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border-l-4 border-blue-600 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{office.city}</h4>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          {office.type}
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
                  Quick Support
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">Emergency Support</div>
                      <div className="text-sm text-gray-600">24/7 for urgent orders</div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Call Now
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">WhatsApp Support</div>
                      <div className="text-sm text-gray-600">Quick responses</div>
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Chat Now
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">Video Call</div>
                      <div className="text-sm text-gray-600">Schedule a meeting</div>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Schedule
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Google Maps */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="font-poppins font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  Find Us Here
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
