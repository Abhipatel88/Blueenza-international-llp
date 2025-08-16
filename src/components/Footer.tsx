import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.quickLinksItems.home'), path: "/" },
    { name: t('footer.quickLinksItems.about'), path: "/about" },
    { name: t('footer.quickLinksItems.products'), path: "/products" },
    { name: t('footer.quickLinksItems.contact'), path: "/contact" }
  ];

  const products = [
    { name: t('footer.products.250ml'), path: "/products" },
    { name: t('footer.products.500ml'), path: "/products" },
    { name: t('footer.products.1L'), path: "/products" },
    { name: t('footer.products.custom'), path: "/products" }
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 90063 90094" },
    { icon: Mail, text: "bluenzainternational.llp@gmail.com" },
    { icon: MapPin, text: "C-3, Parishram Park, Dhuliya Chokdi, Bardoli, Surat, Gujarat-394601" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Instagram, href: "#", name: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="Bluenza International LLP - Premium Import Export Company" 
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <span className="font-poppins font-bold text-xl">
                Bluenza International
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.companyDescription')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-6">{t('footer.ourProducts')}</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to={product.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-6">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{info.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">{t('footer.businessHours')}</p>
              <p className="text-gray-300 text-sm">{t('footer.workingHours')}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bluenza International LLP. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {t('footer.cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;