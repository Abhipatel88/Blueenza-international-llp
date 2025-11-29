
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Lock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import QuoteModal from "@/components/QuoteModal";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.products-dropdown')) {
        setShowProductsDropdown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.about'), path: "/about" },
    { name: "Certificates", path: "/certificates" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Bluenza International LLP - Premium Import Export Company" 
              className="w-12 h-12 object-contain"
              loading="eager"
            />
            <span className="font-poppins font-bold text-xl text-[#073980]">
              Bluenza International LLP
            </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            {/* Products Dropdown */}
            <div 
              className="relative products-dropdown"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <button
                onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                className={`font-medium transition-colors duration-200 flex items-center ${
                  location.pathname === "/products" || location.pathname === "/wellsip"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {t('nav.products')}
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  showProductsDropdown ? 'rotate-180' : ''
                }`} />
              </button>
              
              <AnimatePresence>
                {showProductsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50"
                  >
                  <Link
                    to="/wellsip"
                    onClick={() => setShowProductsDropdown(false)}
                    className="block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-200 font-medium"
                  >
                    Wellsip Products
                  </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <LanguageSwitcher />
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setShowQuoteModal(true)}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('common.getQuote')}
            </Button>
            {/* <Link to="/admin/login">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-4 py-2 rounded-full transition-all duration-300"
              >
                <Lock className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg glass"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 left-0 right-0 glass-card border-t border-white/20"
            >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Products Menu */}
              <Link
                to="/wellsip"
                onClick={() => setIsOpen(false)}
                className={`block font-medium transition-colors duration-200 ${
                  location.pathname === "/wellsip"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Wellsip Products
              </Link>
              <div className="mb-4">
                <LanguageSwitcher />
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-full"
                onClick={() => {
                  setShowQuoteModal(true);
                  setIsOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                {t('common.getQuote')}
              </Button>
              <Link to="/admin/login" className="block mt-4" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 rounded-full"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Login
                </Button>
              </Link>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Quote Modal */}
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
      />
    </motion.nav>
  );
};

export default Navbar;
