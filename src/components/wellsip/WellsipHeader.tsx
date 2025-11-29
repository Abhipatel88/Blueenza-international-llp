import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const WellsipHeader: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#story', label: 'About' },
    { href: '#sustainability', label: 'Sustainability' },
    { href: '#water', label: 'Water' },
    { href: '#shop', label: 'Shop' },
    { href: '#blog', label: 'Blog' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If we're not on the Wellsip page, navigate there first
    if (!location.pathname.includes('/wellsip')) {
      navigate('/wellsip');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on Wellsip page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setMobileNavOpen(false);
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm text-zinc-600">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 stroke-[1.5] text-pink-500" />
              <span className="text-xs md:text-sm">+1 (800) 000–0000</span>
            </span>
            <span className="hidden items-center gap-1.5 sm:inline-flex">
              <Mail className="h-3.5 w-3.5 stroke-[1.5] text-pink-500" />
              <span className="text-xs md:text-sm">care@wellsipwater.com</span>
            </span>
          </div>
          <button className="group relative inline-flex items-center gap-2 rounded-full border border-pink-500/40 bg-pink-50/80 px-4 py-1.5 text-xs md:text-sm text-pink-700 transition-colors duration-300 hover:border-pink-500 hover:bg-pink-100">
            <span>Find a Country</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500/90 text-[0.6rem] font-medium tracking-tight text-white group-hover:bg-pink-400 transition-colors duration-300">
              Go
            </span>
          </button>
        </div>
      </div>

      {/* Main header / nav */}
      <header
        className={`sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl shadow-[0_1px_8px_rgba(15,23,42,0.06)]' : ''
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 md:py-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <img src="/wellsip-logo.png" className='h-14' alt="Wellsip Logo" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-xs md:flex md:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-zinc-600 transition-colors duration-300 hover:text-zinc-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#shop"
              onClick={(e) => handleNavClick(e, '#shop')}
              className="hidden md:inline-flex relative overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-500 px-4 py-1.5 text-xs md:text-sm font-medium tracking-tight text-white shadow-lg shadow-pink-500/40 transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-pink-500/60"
            >
              <span className="relative z-10">Order Now</span>
            </a>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white md:hidden"
            >
              {mobileNavOpen ? (
                <X className="h-4 w-4 stroke-[1.5] text-zinc-900" />
              ) : (
                <Menu className="h-4 w-4 stroke-[1.5] text-zinc-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileNavOpen && (
          <div className="border-t border-zinc-200 bg-white/95 backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default WellsipHeader;

