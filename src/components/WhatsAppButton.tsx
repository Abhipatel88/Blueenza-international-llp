const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Remove + and spaces
  const message = "Hello! I'm interested in your import-export services. Could you please provide more information about your products and services?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img src="/whatsapp-logo.svg" alt="Chat with Bluenza International on WhatsApp" className="w-7 h-7" loading="lazy" />
    </a>
  );
};

export default WhatsAppButton;