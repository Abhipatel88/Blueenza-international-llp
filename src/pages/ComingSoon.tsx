import { Mail, Phone } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
      {/* Language Switcher */}
      <div className="absolute top-6 right-6">
        <LanguageSwitcher />
      </div>

      {/* Main Content */}
      <div className="text-center px-4 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src="/logo.png" 
            alt="Bluenza International LLP" 
            className="w-20 h-20 mx-auto mb-4 rounded-full"
          />
          <h1 className="font-bold text-2xl text-white mb-2">
            Bluenza International LLP
          </h1>
          <p className="text-blue-200">Coming Soon</p>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="font-bold text-4xl text-white mb-4">
            We're Building Something Amazing
          </h2>
          <p className="text-blue-100 text-lg">
            Our website is under construction. Premium import-export solutions coming soon.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-white">
            <Phone className="w-5 h-5" />
            <span>+91 90063 90094</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-white">
            <Mail className="w-5 h-5" />
            <span className="text-sm">bluenzainternational.llp@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;