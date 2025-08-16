
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Award, Shield, Globe, X } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import QuoteModal from "@/components/QuoteModal";
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { t, i18n } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState(null);
  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    quantity: "",
    product: "",
    additionalRequirements: ""
  });
  const { toast } = useToast();
  
  const products = [
    {
      id: 1,
      name: t('productsPage.products.250ml.name'),
      description: t('productsPage.products.250ml.description'),
      image: "/b1.jpeg",
      gradient: "from-blue-400 to-cyan-500",
      capacity: "250ml",
      specifications: {
        [t('productsPage.specLabels.capacity')]: t('productsPage.products.250ml.specs.capacity'),
        [t('productsPage.specLabels.material')]: t('productsPage.products.250ml.specs.material'),
        [t('productsPage.specLabels.weight')]: t('productsPage.products.250ml.specs.weight'),
        [t('productsPage.specLabels.dimensions')]: t('productsPage.products.250ml.specs.dimensions'),
        [t('productsPage.specLabels.capType')]: t('productsPage.products.250ml.specs.capType'),
        [t('productsPage.specLabels.features')]: t('productsPage.products.250ml.specs.features'),
        [t('productsPage.specLabels.idealFor')]: t('productsPage.products.250ml.specs.idealFor'),
        [t('productsPage.specLabels.warranty')]: t('productsPage.products.250ml.specs.warranty')
      }
    },
    {
      id: 2,
      name: t('productsPage.products.500ml.name'),
      description: t('productsPage.products.500ml.description'),
      image: "/b2.jpeg",
      gradient: "from-green-400 to-emerald-500",
      capacity: "500ml",
      specifications: {
        [t('productsPage.specLabels.capacity')]: t('productsPage.products.500ml.specs.capacity'),
        [t('productsPage.specLabels.material')]: t('productsPage.products.500ml.specs.material'),
        [t('productsPage.specLabels.weight')]: t('productsPage.products.500ml.specs.weight'),
        [t('productsPage.specLabels.dimensions')]: t('productsPage.products.500ml.specs.dimensions'),
        [t('productsPage.specLabels.capType')]: t('productsPage.products.500ml.specs.capType'),
        [t('productsPage.specLabels.features')]: t('productsPage.products.500ml.specs.features'),
        [t('productsPage.specLabels.idealFor')]: t('productsPage.products.500ml.specs.idealFor'),
        [t('productsPage.specLabels.warranty')]: t('productsPage.products.500ml.specs.warranty')
      }
    },
    {
      id: 3,
      name: t('productsPage.products.1L.name'),
      description: t('productsPage.products.1L.description'),
      image: "/b3.jpeg",
      gradient: "from-purple-400 to-blue-500",
      capacity: "1L",
      specifications: {
        [t('productsPage.specLabels.capacity')]: t('productsPage.products.1L.specs.capacity'),
        [t('productsPage.specLabels.material')]: t('productsPage.products.1L.specs.material'),
        [t('productsPage.specLabels.weight')]: t('productsPage.products.1L.specs.weight'),
        [t('productsPage.specLabels.dimensions')]: t('productsPage.products.1L.specs.dimensions'),
        [t('productsPage.specLabels.capType')]: t('productsPage.products.1L.specs.capType'),
        [t('productsPage.specLabels.features')]: t('productsPage.products.1L.specs.features'),
        [t('productsPage.specLabels.idealFor')]: t('productsPage.products.1L.specs.idealFor'),
        [t('productsPage.specLabels.warranty')]: t('productsPage.products.1L.specs.warranty')
      }
    }
  ];

  const certifications = [
    { name: t('productsPage.certifications.iso'), icon: Award },
    { name: t('productsPage.certifications.haccp'), icon: Shield },
    { name: t('productsPage.certifications.export'), icon: Globe }
  ];

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>{t('productsPage.title')} | Bluenza International LLP</title>
        <meta name="description" content={t('productsPage.subtitle')} />
        <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
        <link rel="canonical" href="https://bluenzainternational.com/products" />
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
                "name": "Products",
                "item": "https://bluenzainternational.com/products"
              }
            ]
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ProductCollection",
            "name": "Premium Water Bottles Collection",
            "description": "High-quality water bottles in various sizes for different hydration needs",
            "brand": {
              "@type": "Brand",
              "name": "Bluenza International LLP"
            },
            "hasPart": [
              {
                "@type": "Product",
                "name": "250ml Water Bottle",
                "image": "/b1.jpeg",
                "description": "Perfect for personal hydration on-the-go. Compact and lightweight design ideal for kids, travel, and quick refreshment needs.",
                "brand": {
                  "@type": "Brand",
                  "name": "Bluenza International LLP"
                },
                "category": "Water Bottles",
                "material": "Food-grade PET plastic",
                "weight": "50g",
                "height": "15cm",
                "width": "5.5cm",
                "depth": "5.5cm",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Capacity",
                    "value": "250ml"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Cap Type",
                    "value": "Screw-top with safety seal"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Features",
                    "value": "BPA-free, Leak-proof, Easy-grip design"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Ideal For",
                    "value": "Kids, Travel, Quick hydration"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Warranty",
                    "value": "30 days replacement"
                  }
                ],
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "Bluenza International LLP"
                  }
                }
              },
              {
                "@type": "Product",
                "name": "500ml Water Bottle",
                "image": "/b2.jpeg",
                "description": "Our most popular size, perfect for daily hydration needs. Ideal for office, gym, and outdoor activities with optimal portability.",
                "brand": {
                  "@type": "Brand",
                  "name": "Bluenza International LLP"
                },
                "category": "Water Bottles",
                "material": "Food-grade PET plastic",
                "weight": "100g",
                "height": "20cm",
                "width": "6.5cm",
                "depth": "6.5cm",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Capacity",
                    "value": "500ml"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Cap Type",
                    "value": "Screw-top with safety seal"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Features",
                    "value": "BPA-free, Leak-proof, Easy-grip design"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Ideal For",
                    "value": "Personal use, Gym, Travel"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Warranty",
                    "value": "30 days replacement"
                  }
                ],
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "Bluenza International LLP"
                  }
                }
              },
              {
                "@type": "Product",
                "name": "1L Water Bottle",
                "image": "/b3.jpeg",
                "description": "Large capacity bottle for extended hydration needs. Perfect for sports, long journeys, and family use with superior durability.",
                "brand": {
                  "@type": "Brand",
                  "name": "Bluenza International LLP"
                },
                "category": "Water Bottles",
                "material": "Food-grade PET plastic",
                "weight": "150g",
                "height": "28cm",
                "width": "8cm",
                "depth": "8cm",
                "additionalProperty": [
                  {
                    "@type": "PropertyValue",
                    "name": "Capacity",
                    "value": "1000ml (1L)"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Cap Type",
                    "value": "Screw-top with safety seal"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Features",
                    "value": "BPA-free, Leak-proof, Ergonomic design"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Ideal For",
                    "value": "Sports, Family use, Long journeys"
                  },
                  {
                    "@type": "PropertyValue",
                    "name": "Warranty",
                    "value": "30 days replacement"
                  }
                ],
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "Bluenza International LLP"
                  }
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-blue-800/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <span className="text-blue-600 font-medium text-sm">{t('productsPage.badge')}</span>
            </div>
            
            <h1 className="font-poppins font-bold text-5xl lg:text-6xl text-gray-900 mb-6">
              <span className="text-gradient">{t('productsPage.heroTitle')}</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t('productsPage.heroSubtitle')}
            </p>
          </div>
          
          {/* Certifications */}
          <div className="flex justify-center items-center space-x-8 mb-12 animate-fade-in">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <cert.icon className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-96 object-contain bg-white rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500 p-8"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-10 rounded-3xl`}></div>
                    
                    {/* Capacity Badge */}
                    <div className="absolute top-6 right-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <Droplets className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Capacity Label */}
                    <div className="absolute bottom-6 left-6">
                      <div className={`px-4 py-2 bg-gradient-to-r ${product.gradient} rounded-full shadow-lg`}>
                        <span className="text-white font-bold text-lg">{product.capacity}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="font-poppins font-bold text-3xl text-gray-900 mb-4">
                      {product.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* Specifications */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">{t('productsPage.modal.productSpecs')}</h3>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value], idx) => (
                          <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-600 text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className={`bg-gradient-to-r ${product.gradient} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg`}
                      onClick={() => {
                        setQuoteProduct(product);
                        setQuoteForm(prev => ({ ...prev, product: product.name }));
                        setShowQuoteModal(true);
                      }}
                    >
                      {t('productsPage.buttons.getQuote')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full transition-all duration-300"
                      onClick={() => setSelectedProduct(product)}
                    >
                      {t('productsPage.buttons.viewDetails')}
                    </Button>
                  </div>
                </div>
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
            {t('productsPage.cta.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('productsPage.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => {
                setQuoteProduct(null);
                setQuoteForm(prev => ({ ...prev, product: "" }));
                setShowQuoteModal(true);
              }}
            >
              {t('productsPage.cta.customQuote')}
            </Button>
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              {t('productsPage.cta.viewCatalog')}
            </Button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-poppins font-bold text-3xl text-gray-900">
                  {selectedProduct.name}
                </h2>
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-96 object-contain bg-gray-50 rounded-2xl p-8"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-4 py-2 bg-gradient-to-r ${selectedProduct.gradient} rounded-full shadow-lg`}>
                      <span className="text-white font-bold">{selectedProduct.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Detailed Specifications */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4 text-xl">{t('productsPage.modal.specifications')}</h3>
                    <div className="space-y-3">
                      {Object.entries(selectedProduct.specifications).map(([key, value], idx) => (
                        <div key={idx} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700 w-1/3">{key}:</span>
                          <span className="text-gray-600 w-2/3 text-right">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      className={`bg-gradient-to-r ${selectedProduct.gradient} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex-1`}
                      onClick={() => {
                        setQuoteProduct(selectedProduct);
                        setQuoteForm(prev => ({ ...prev, product: selectedProduct.name }));
                        setShowQuoteModal(true);
                        setSelectedProduct(null);
                      }}
                    >
                      {t('productsPage.modal.getQuoteNow')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 flex-1"
                      onClick={() => setSelectedProduct(null)}
                    >
                      {t('productsPage.buttons.close')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Import and use the QuoteModal component */}
      {showQuoteModal && (
        <QuoteModal 
          isOpen={showQuoteModal}
          onClose={() => {
            setShowQuoteModal(false);
            setQuoteForm({ fullName: "", email: "", phoneNumber: "", companyName: "", quantity: "", product: "", additionalRequirements: "" });
          }}
          prefilledProduct={quoteProduct ? quoteProduct.name : ""}
        />
      )}
    </div>
  );
};

export default Products;