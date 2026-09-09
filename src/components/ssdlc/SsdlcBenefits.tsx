import React from 'react';
import { CheckCircle } from 'lucide-react';
import SsdlcAnimation from './SsdlcAnimation';

const benefits = [
  "Early vulnerability detection",
  "Reduced security incidents",
  "Faster time to market",
  "Improved code quality",
  "Enhanced team security awareness",
  "Automated security testing",
  "Regulatory compliance",
  "Cost-effective security"
];

const SsdlcBenefits = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Benefits of SSDLC Implementation
            </h2>
            
            <p className="text-gray-400 mb-8">
              Our SSDLC consulting services help organizations build security into their development process from the ground up.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#9C27DF] flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-3xl rounded-full" />
            <SsdlcAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SsdlcBenefits;