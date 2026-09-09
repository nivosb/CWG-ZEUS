import React from 'react';
import { CheckCircle } from 'lucide-react';
import EasAnimation from './EasAnimation';

const benefits = [
  "Comprehensive asset visibility",
  "Reduced attack surface",
  "Early threat detection",
  "Continuous compliance monitoring",
  "Automated vulnerability assessment",
  "Real-time security alerts",
  "Risk-based prioritization",
  "Detailed security reporting"
];

const EasBenefits = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Benefits of Managed EAS
            </h2>
            
            <p className="text-gray-400 mb-8">
              Our managed EAS service provides comprehensive visibility and protection of your external attack surface.
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
            <EasAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasBenefits;