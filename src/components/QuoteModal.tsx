import { Button } from "@/components/ui/button";
import { X, User, Phone, Mail, Building, Package, Hash, FileText, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';
import { createPortal } from "react-dom";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

const QuoteModal = ({ isOpen, onClose, prefilledProduct = "" }: QuoteModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
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

  // Handle body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
          title: t('quoteModal.success.title'),
          description: t('quoteModal.success.description'),
        });
        handleClose();
        setQuoteForm({ fullName: "", email: "", phoneNumber: "", companyName: "", quantity: "", product: "", additionalRequirements: "" });
      } else {
        toast({
          title: t('quoteModal.error.title'),
          description: t('quoteModal.error.submitFailed'),
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: t('quoteModal.error.title'),
        description: t('quoteModal.error.connectionFailed'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] overflow-y-auto flex items-center justify-center p-4 sm:p-6" onClick={handleClose}>
      <div 
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full transform transition-all" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Simple Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="font-semibold text-xl text-gray-900">
              {t('quoteModal.title')}
            </h2>
            {prefilledProduct && (
              <p className="text-sm text-gray-500 mt-1">
                {t('quoteModal.for')} <span className="font-medium text-gray-900">{prefilledProduct}</span>
              </p>
            )}
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Form Body */}
        <div className="p-6 max-h-[calc(100vh-10rem)] overflow-y-auto">
          <form id="quote-form" onSubmit={handleSubmit} className="space-y-5">
            
            {/* 2-Column Grid for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {t('quoteModal.labels.fullName')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={quoteForm.fullName}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, fullName: e.target.value }))}
                    placeholder={t('quoteModal.placeholders.fullName')}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {t('quoteModal.labels.email')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
                    placeholder={t('quoteModal.placeholders.email')}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {t('quoteModal.labels.phone')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={quoteForm.phoneNumber}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    placeholder={t('quoteModal.placeholders.phone')}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">
                  {t('quoteModal.labels.company')}
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={quoteForm.companyName}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, companyName: e.target.value }))}
                    placeholder={t('quoteModal.placeholders.company')}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              {/* Product */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {t('quoteModal.labels.product')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Package className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <select
                    required
                    value={quoteForm.product}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, product: e.target.value }))}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow appearance-none bg-white"
                  >
                    <option value="">{t('quoteModal.placeholders.selectProduct')}</option>
                    <option value="250ml Water Bottle">{t('quoteModal.products.250ml')}</option>
                    <option value="500ml Water Bottle">{t('quoteModal.products.500ml')}</option>
                    <option value="1L Water Bottle">{t('quoteModal.products.1L')}</option>
                    <option value="Custom Product">{t('quoteModal.products.custom')}</option>
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  {t('quoteModal.labels.quantity')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={quoteForm.quantity}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, quantity: e.target.value }))}
                    placeholder={t('quoteModal.placeholders.quantity')}
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>
            </div>

            {/* Additional Requirements (Full Width) */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                {t('quoteModal.labels.requirements')}
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  value={quoteForm.additionalRequirements}
                  onChange={(e) => setQuoteForm(prev => ({ ...prev, additionalRequirements: e.target.value }))}
                  placeholder={t('quoteModal.placeholders.requirements')}
                  rows={3}
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow resize-none"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-xl flex justify-end gap-3">
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleClose}
            disabled={isSubmitting}
          >
            {t('quoteModal.buttons.cancel', 'Cancel')}
          </Button>
          <Button 
            form="quote-form"
            type="submit" 
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('quoteModal.buttons.processing', 'Sending...')}
              </>
            ) : (
              t('quoteModal.buttons.submit', 'Request Quote')
            )}
          </Button>
        </div>
        
      </div>
    </div>,
document.body
);
};

export default QuoteModal;