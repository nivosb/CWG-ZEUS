import React from 'react';

const ServicesHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
       We Are Here To Make your Business More Secure <br />
        Our Services
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Analyze attack vectors distinct to your organization, link them to exposures, and
        confidently act to prevent breaches with landing MDR
      </p>
    </div>
  );
}

export default ServicesHeader;