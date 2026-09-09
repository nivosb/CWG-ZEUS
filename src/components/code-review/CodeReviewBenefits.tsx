import React from 'react';
import { CheckCircle } from 'lucide-react';
import CodeReviewAnimation from './CodeReviewAnimation';

const benefits = [
  "Early vulnerability detection",
  "Improved code quality",
  "Reduced security risks",
  "Cost-effective prevention",
  "Enhanced compliance",
  "Knowledge transfer",
  "Best practice adoption",
  "Continuous improvement"
];

const CodeReviewBenefits: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Benefits of Code Review
            </h2>
            
            <p className="text-gray-400 mb-8">
              Our code review services help organizations identify and fix security vulnerabilities early in the development lifecycle.
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
            <CodeReviewAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeReviewBenefits;