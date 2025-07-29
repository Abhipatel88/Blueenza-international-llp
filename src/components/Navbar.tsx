
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-white/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => setShowQuoteModal(true)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
            <Link to="/admin/login">
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-4 py-2 rounded-full transition-all duration-300"
              >
                <Lock className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
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
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 glass-card border-t border-white/20 animate-fade-in">
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
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-2 rounded-full"
                onClick={() => {
                  setShowQuoteModal(true);
                  setIsOpen(false);
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
              <Link to="/admin" className="block mt-4" onClick={() => setIsOpen(false)}>
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 rounded-full"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Admin Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Quote Modal */}
      <QuoteModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
      />
    </nav>
  );
};

export default Navbar;
