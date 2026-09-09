import React from 'react';
import { Users } from 'lucide-react';

const CareersHero: React.FC = () => {
  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-6 sm:pt-40">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm">
            <Users className="w-4 h-4 text-[#9C27DF] mr-2" />
            <span className="text-white/80 text-sm">Join Our Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Build the Future of Cybersecurity
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl">
            Join our team of cybersecurity experts and help organizations protect their digital assets. We're looking for passionate individuals who want to make a difference in the world of security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareersHero;