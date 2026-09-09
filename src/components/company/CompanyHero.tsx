import React from 'react';
import { Building } from 'lucide-react';
import CompanyHeroAnimation from './CompanyHeroAnimation';

const CompanyHero: React.FC = () => {
  return (
    <div className="relative z-10 min-h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 bg-white/5 rounded-full backdrop-blur-sm">
            <Building className="w-4 h-4 text-[#9C27DF] mr-2" />
            <span className="text-white/80 text-sm">About CWG</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Securing the Digital Future
          </h1>

          <CompanyHeroAnimation />
          
          <div className="space-y-6">
            <p className="text-xl text-gray-400">
              Founded by veterans of elite intelligence and cybersecurity units of the Israeli Defense Forces (IDF), CWG specializes in protecting sensitive commercial and government information through advanced cybersecurity solutions.
            </p>

            <p className="text-xl text-gray-400">
              Our team brings decades of combined experience in cybersecurity, offering comprehensive professional services worldwide with a focus on:
            </p>

            <ul className="text-xl text-gray-400 list-disc pl-6 space-y-2">
              <li>High-standard reporting with quality reviews by experienced consultants</li>
              <li>Standardized testing plans based on OWASP Application & Mobile Security Testing Guide</li>
              <li>Meeting security levels in accordance with industry standards</li>
              <li>Careful consideration of real risk with comprehensive risk rating</li>
              <li>Ongoing customer support for implementation and verification</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHero;