import React from 'react';
import CompanyLogoAnimation from './CompanyLogoAnimation';

const TeamCulture: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Culture & Values
            </h2>
            
            <div className="space-y-6 text-gray-400">
              <p>
                At CWG, we foster a culture of innovation, collaboration, and continuous learning. Our team consists of passionate cybersecurity experts who are committed to staying ahead of emerging threats.
              </p>
              
              <p>
                We believe in:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Continuous innovation and learning</li>
                <li>Collaboration and knowledge sharing</li>
                <li>Ethical conduct and transparency</li>
                <li>Client-centric approach</li>
                <li>Excellence in everything we do</li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-3xl rounded-full" />
            <CompanyLogoAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;