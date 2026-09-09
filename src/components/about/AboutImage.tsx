import React from 'react';

const AboutImage: React.FC = () => {
  return (
    <div className="relative">
      {/* Purple glow effects */}
      <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-3xl rounded-full" />
      <div className="absolute inset-0 bg-[#7D3FF8] opacity-10 blur-2xl rounded-full animate-pulse" />
      
      {/* Circular tech graphic */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1633259584604-afdc243122ea?w=800&auto=format&fit=crop&q=60"
          alt="Cybersecurity Visualization"
          className="w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
}

export default AboutImage;