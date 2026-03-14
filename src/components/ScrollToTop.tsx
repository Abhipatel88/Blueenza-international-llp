import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also scroll the document element and body to ensure compatibility
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // If Lenis is being used, we need to scroll it too
    const lenisElement = document.querySelector('[data-lenis]');
    if (lenisElement) {
      lenisElement.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;