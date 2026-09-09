import React from 'react';
import FloatingOrb from '../components/FloatingOrb';
import EasHero from '../components/eas/EasHero';
import EasFeatures from '../components/eas/EasFeatures';
import EasBenefits from '../components/eas/EasBenefits';

function ManagedEasPage() {
  return (
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

      <div className="relative z-10">
        <EasHero />
        <EasFeatures />
        <EasBenefits />
      </div>
    </div>
  );
}

export default ManagedEasPage;