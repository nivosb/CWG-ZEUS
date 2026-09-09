import React, { useState } from 'react';
import { Sword } from 'lucide-react';
import ContactModal from '../modals/ContactModal';

const RedTeamHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm">
            <Sword className="w-4 h-4 text-[#9C27DF] mr-2" />
            <span className="text-white/80 text-sm">Red Team Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Advanced Adversary Simulation
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl">
            Simulate real-world cyber attacks to test your organization's detection and response capabilities against sophisticated threat actors.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-gradient-to-r from-[#9c27df] to-[#9c27df] rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Request a Free Consultation
            </button>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 border border-white/10 rounded-full text-white font-semibold hover:bg-white/5 transition-colors"
            >
              Learn More
            </button>
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

export default RedTeamHero;