import React from 'react';
import FloatingOrb from '../components/FloatingOrb';
import CodeReviewHero from '../components/code-review/CodeReviewHero';
import CodeReviewFeatures from '../components/code-review/CodeReviewFeatures';
import CodeReviewBenefits from '../components/code-review/CodeReviewBenefits';

function CodeReviewPage() {
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
        <CodeReviewHero />
        <CodeReviewFeatures />
        <CodeReviewBenefits />
      </div>
    </div>
  );
}

export default CodeReviewPage;