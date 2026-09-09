import React from 'react';
import AboutContent from './AboutContent';
import AboutVector from './AboutVector';
import StatsSection from './StatsSection';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AboutContent />
          <AboutVector />
        </div>
        <StatsSection />
      </div>
    </section>
  );
}

export default AboutSection;