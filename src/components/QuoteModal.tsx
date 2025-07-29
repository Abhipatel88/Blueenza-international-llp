import { Button } from "@/components/ui/button";
import { ArrowRight, X, CheckCircle, User, Phone, Mail, Building, Package, Hash, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

const QuoteModal = ({ isOpen, onClose, prefilledProduct = "" }: QuoteModalProps) => {
  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    quantity: "",
    product: prefilledProduct,
    additionalRequirements: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const { toast } = useToast();

  // Handle body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleClose = () => {
    document.body.style.overflow = 'auto';
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/forms/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteForm),
      });
      
      if (response.ok) {
        toast({
          title: "Quote Request Submitted!",
          description: "We will contact you soon with a detailed quote.",
        });
        handleClose();
        setQuoteForm({ fullName: "", email: "", phoneNumber: "", companyName: "", quantity: "", product: "", additionalRequirements: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to submit quote request. Please try again.",
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] overflow-y-auto min-h-[100vh]" onClick={handleClose}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl transform transition-all duration-300 ease-in-out" 
          onClick={(e) => e.stopPropagation()}
        >
        <div>
          {/* Modal Header with gradient background */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-t-3xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-poppins font-bold text-3xl text-white">
                  Get Quote
                </h2>
                {prefilledProduct && (
                  <p className="text-blue-100 font-medium mt-1">
                    for {prefilledProduct}
                  </p>
                )}
              </div>
              <button 
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-6 flex items-center">
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300 ease-in-out" 
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <span className="text-white text-sm ml-3">{currentStep}/{totalSteps}</span>
            </div>
          </div>
          
          <div className="p-6">

          {/* Quote Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={quoteForm.fullName}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, fullName: e.target.value }))}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      value={quoteForm.email}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      value={quoteForm.phoneNumber}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      placeholder="Your phone number"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={quoteForm.companyName}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, companyName: e.target.value }))}
                      placeholder="Your company name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800">Product Details</h3>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Package className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      value={quoteForm.product}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, product: e.target.value }))}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors appearance-none"
                    >
                      <option value="">Select a product</option>
                      <option value="250ml Water Bottle">250ml Water Bottle</option>
                      <option value="500ml Water Bottle">500ml Water Bottle</option>
                      <option value="1L Water Bottle">1L Water Bottle</option>
                      <option value="Custom Product">Custom Product</option>
                    </select>
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Hash className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={quoteForm.quantity}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, quantity: e.target.value }))}
                      placeholder="e.g., 1000 pieces"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      value={quoteForm.additionalRequirements}
                      onChange={(e) => setQuoteForm(prev => ({ ...prev, additionalRequirements: e.target.value }))}
                      placeholder="Tell us about your specific requirements, delivery location, timeline, etc."
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 mt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 flex-1 flex items-center justify-center"
                >
                  Back
                </button>
              )}
              
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 flex items-center justify-center"
                >
                  Next
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <CheckCircle className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              )}
              
              {currentStep === 1 && (
                <button
                  type="button"
                  onClick={handleClose}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3 rounded-full transition-all duration-300 flex-1"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuoteModal;