import React from 'react';
import HeroContent from '../components/hero/HeroContent';
import ReviewsSection from '../components/reviews/ReviewsSection';
import ServicesSection from '../components/services/ServicesSection';
import ClientsSection from '../components/clients/ClientsSection';
import ProcessSection from '../components/process/ProcessSection';
import AboutSection from '../components/about/AboutSection';
import FloatingOrb from '../components/FloatingOrb';
import GlobalPartnersSection from '../components/clients/GlobalPartnersSection';

function HomePage() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black">
        <FloatingOrb
          color="#9C2Fdf"
          size="300px"
          position="-top-20 -left-20"
          blur="120px"
        />
        <FloatingOrb
          color="#9C2Fdf"
          size="250px"
          position="top-1/5 -right-20"
          blur="100px"
        />
        <FloatingOrb
          color="#5e17eb"
          size="200px"
          position="bottom-20 left-20"
          blur="80px"
        />

        <HeroContent />

        <div className="mt-24 sm:mt-32 md:mt-48">
          <GlobalPartnersSection />
          <ServicesSection />
          <ReviewsSection />
          <ClientsSection />
          <ProcessSection />
          <AboutSection />
        </div>
      </div>
    </>
  );
}

export default HomePage;
