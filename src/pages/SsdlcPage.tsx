import React from 'react';
import FloatingOrb from '../components/FloatingOrb';
import SsdlcHero from '../components/ssdlc/SsdlcHero';
import SsdlcFeatures from '../components/ssdlc/SsdlcFeatures';
import SsdlcBenefits from '../components/ssdlc/SsdlcBenefits';

function SsdlcPage() {
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
        <SsdlcHero />
        <SsdlcFeatures />
        <SsdlcBenefits />
      </div>
    </div>
  );
}

export default SsdlcPage;