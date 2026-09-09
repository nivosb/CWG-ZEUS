import React from 'react';
import LogoCarousel from './LogoCarousel';

const ClientsGrid: React.FC = () => {
  return (
    <div className="w-full bg-black/50 backdrop-blur-sm py-12">
      <div className="max-w-7xl mx-auto px-6">
        <LogoCarousel />
      </div>
    </div>
  );
};

export default ClientsGrid;