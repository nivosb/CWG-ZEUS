import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ContactModal from '../modals/ContactModal';

const AboutContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="inline-flex items-center px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm">
        <span className="text-white/80 text-sm">About Us</span>
      </div>
      
      <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
        Get To Know Us
      </h2>
      
      <div className="text-lg text-white/80 leading-relaxed space-y-4">
        <p>
          Founded by veterans of the elite intelligence and cybersecurity units of the Israeli Defense Forces (IDF),
          CWG specializes in cybersecurity protecting sensitive commercial and government information.
        </p>
        
        <p>
          The Company provides a wide range of cybersecurity professional-services worldwide with emphasis on:
        </p>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>High standard of reporting with quality reviews by experienced consultants</li>
          <li>Standardized testing plans based on OWASP Application & Mobile Security Testing Guide</li>
          <li>Meeting security levels in accordance with industry standards</li>
          <li>Careful consideration of real risk with comprehensive risk rating</li>
          <li>Ongoing customer support for implementation and verification</li>
        </ul>
      </div>
      
      <button 
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#7D3FF8] to-[#9B6AF3] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
      >
        Learn More
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default AboutContent;