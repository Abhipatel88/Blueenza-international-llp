import { motion } from 'framer-motion';
import { Award, Download, Eye, Calendar, CheckCircle, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Certificates = () => {
  const { t } = useTranslation();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: "ISO 9001 Certificate",
      issuer: "International Organization for Standardization",
      date: "2023",
      validity: "Valid until 2026",
      pdfPath: "/ceretificates/ISO 9001 CERTIFICATE.pdf",
      imagePath: "/certificate_img/ISO 9001 CERTIFICATE.png",
      description: "Quality management systems certification ensuring consistent quality in our export operations."
    },
    {
      id: 2,
      title: "ISO 22000 Certificate",
      issuer: "International Organization for Standardization",
      date: "2023",
      validity: "Valid until 2026",
      pdfPath: "/ceretificates/ISO 22000 CERTIFICATE.pdf",
      imagePath: "/certificate_img/ISO 22000 CERTIFICATE.png",
      description: "Food safety management systems certification for agricultural and food products."
    },
    {
      id: 3,
      title: "FSSAI License",
      issuer: "Food Safety and Standards Authority of India",
      date: "2023",
      validity: "Valid until 2025",
      pdfPath: "/ceretificates/FSSAI LICENCE.pdf",
      imagePath: "/certificate_img/FSSAI LICENCE.png",
      description: "Food safety certification for handling and export of food products and agricultural commodities."
    },
    {
      id: 4,
      title: "HACCP Certificate",
      issuer: "Hazard Analysis Critical Control Points",
      date: "2023",
      validity: "Valid until 2026",
      pdfPath: "/ceretificates/HACCP CERTIFICATE.pdf",
      imagePath: "/certificate_img/HACCP CERTIFICATE.png",
      description: "Food safety management system based on the analysis and control of biological, chemical, and physical hazards."
    },
    {
      id: 5,
      title: "Startup India Certificate",
      issuer: "Department for Promotion of Industry and Internal Trade",
      date: "2022",
      validity: "Lifetime Recognition",
      pdfPath: "/ceretificates/STARTUP INDIA CERTIFICATE.pdf",
      imagePath: "/certificate_img/STARTUP INDIA CERTIFICATE.png",
      description: "Recognition as a startup under the Startup India initiative promoting innovation and entrepreneurship."
    }
  ];

  const handleViewPdf = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
  };

  const handleOpenInNewTab = (pdfPath: string) => {
    window.open(pdfPath, '_blank');
  };

  const handleDownloadPdf = (pdfPath: string, title: string) => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full mb-6 shadow-sm">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">Certified Excellence</span>
            </div>
            
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Certifications
              </span>
            </h1>
            
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Trusted certifications and awards that validate our commitment to quality, safety, and excellence in global trade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500"
              >
                {/* Certificate Preview */}
                <div className="relative mb-6 overflow-hidden rounded-xl cursor-pointer group" onClick={() => handleViewPdf(certificate.pdfPath)}>
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={certificate.imagePath} 
                      alt={`${certificate.title} preview`}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-xl flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-blue-700 font-semibold text-sm">Click to view PDF</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      onClick={() => handleViewPdf(certificate.pdfPath)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30"
                      onClick={() => handleDownloadPdf(certificate.pdfPath, certificate.title)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                      {certificate.title}
                    </h3>
                    <p className="text-blue-600 font-semibold text-sm mb-1">
                      {certificate.issuer}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {certificate.description}
                    </p>
                  </div>

                  {/* Certificate Details */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-600">Issued: {certificate.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-slate-600">{certificate.validity}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50"
                      onClick={() => handleViewPdf(certificate.pdfPath)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                      onClick={() => handleDownloadPdf(certificate.pdfPath, certificate.title)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-slate-900 mb-4">
              Trusted by Global Partners
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Our certifications ensure compliance with international standards and build trust with partners worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-slate-600">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-slate-600">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-slate-600">Countries Served</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PDF Preview Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h3 className="font-poppins font-bold text-lg text-slate-900">Certificate Preview</h3>
              <div className="flex items-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleOpenInNewTab(selectedPdf)}
                  className="border-blue-200 text-blue-600 hover:bg-blue-50"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedPdf(null)}
                  className="text-slate-500 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-1 p-4">
              <iframe
                src={selectedPdf}
                className="w-full h-full rounded-xl border border-slate-200"
                title="Certificate Preview"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 flex justify-between items-center">
              <p className="text-sm text-slate-600">
                Having trouble viewing? Try opening in a new tab or downloading the PDF.
              </p>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setSelectedPdf(null)}
                  className="border-slate-200 text-slate-600 hover:bg-slate-50"
                >
                  Close
                </Button>
                <Button
                  onClick={() => {
                    const certificate = certificates.find(cert => cert.pdfPath === selectedPdf);
                    if (certificate) {
                      handleDownloadPdf(selectedPdf, certificate.title);
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;