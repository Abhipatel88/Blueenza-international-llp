
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './i18n';
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { HelmetProvider } from "react-helmet-async";

// Admin imports
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminEmails from "./pages/admin/AdminEmails";
import AdminQuotes from "./pages/admin/AdminQuotes";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminProfile from "./pages/admin/AdminProfile";
import AuthGuard from "./components/admin/AuthGuard";

const queryClient = new QueryClient();

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  
  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <WhatsAppButton />
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AuthGuard><AdminDashboard /></AuthGuard>} />
            <Route path="/admin/emails" element={<AuthGuard><AdminEmails /></AuthGuard>} />
            <Route path="/admin/quotes" element={<AuthGuard><AdminQuotes /></AuthGuard>} />
            <Route path="/admin/products" element={<AuthGuard><AdminProducts /></AuthGuard>} />
            <Route path="/admin/profile" element={<AuthGuard><AdminProfile /></AuthGuard>} />
            
            {/* Public Routes - With navbar/footer */}
            <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
            <Route path="/products" element={<PublicLayout><Products /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
            <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
