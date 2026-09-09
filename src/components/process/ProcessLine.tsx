import React from 'react';

const ProcessLine: React.FC = () => {
  return (
    <>
      {/* Desktop horizontal line */}
      <div className="hidden md:block relative w-full mb-16">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-0.5 bg-white/10" />
        
        <div className="relative flex justify-between max-w-5xl mx-auto px-4">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="relative -translate-y-1/2">
              <div className="w-2 h-2 rounded-full bg-[#ffffff] relative z-10" />
              <div className="absolute -inset-2 bg-[#9C27DF] opacity-30 blur-sm rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical line */}
      <div className="md:hidden absolute left-8 top-24 bottom-24 w-0.5 bg-white/10">
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={index} 
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: `${(index * 100) / 3}%` }}
          >
            <div className="w-2 h-2 rounded-full bg-[#ffffff] relative z-10" />
            <div className="absolute -inset-2 bg-[#9C27DF] opacity-30 blur-sm rounded-full" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProcessLine;