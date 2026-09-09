import React, { useState } from 'react';
import ContactModal from '../modals/ContactModal';

const NewsletterSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Contact Us</h2>
        <p className="text-gray-400">Get in touch to learn more about our Services.</p>
      </div>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="px-8 py-3 bg-[#9C27DF] hover:bg-[#8422bd] transition-colors rounded-full text-white font-medium"
      >
        Contact Us
      </button>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default NewsletterSection;