import React from 'react';
import ServicesHeader from './ServicesHeader';
import ServicesGrid from './ServicesGrid';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </section>
  );
}

export default ServicesSection;