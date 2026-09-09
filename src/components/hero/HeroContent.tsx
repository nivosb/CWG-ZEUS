import React, { useState } from 'react';
import HeroVector from '../HeroVector';
import ContactModal from '../modals/ContactModal';

const HeroContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative z-10 min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <div className="max-w-5xl mx-auto sm:text-center">
        <div className="space-y-6 sm:space-y-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-left sm:text-center">
            Secure Your Business with CyberSecurity Experts
          </h1>
          <p className="text-xl sm:text-2xl text-[#cccccc] max-w-3xl sm:mx-auto text-left sm:text-center">
            Let's Secure Your Business Now!
          </p>
          <p className="text-lg text-gray-400 block sm:hidden text-left">
            CWG is a leading cybersecurity company specializing in tailored solutions for identifying vulnerabilities, assessing risks and responding to advanced cyber threats. Trusted worldwide for effective security strategies.
          </p>
          
          <div className="flex sm:justify-center justify-start">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 text-sm bg-gradient-to-r from-[#9c27df] to-[#9c27df] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
          </div>

          <div className="w-full max-w-2xl mx-auto scale-110 sm:scale-125 transform">
            <HeroVector />
          </div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HeroContent;
