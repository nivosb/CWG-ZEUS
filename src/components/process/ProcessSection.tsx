import React from 'react';
import ProcessHeader from './ProcessHeader';
import ProcessLine from './ProcessLine';
import ProcessStep from './ProcessStep';
import { processSteps } from './processSteps';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#130423] to-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ProcessHeader />
        
        <div className="relative">
          <ProcessLine />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative pl-16 md:pl-0">
                <ProcessStep {...step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;