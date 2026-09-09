import React from 'react';
import { Building } from 'lucide-react';

const ClientsHero: React.FC = () => {
  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm">
            <Building className="w-4 h-4 text-[#9C27DF] mr-2" />
            <span className="text-white/80 text-sm">Our Clients</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Trusted by Industry Leaders
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl">
            We partner with organizations across various industries to deliver exceptional cybersecurity solutions. Our diverse client portfolio includes leading companies in finance, technology, healthcare, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientsHero;