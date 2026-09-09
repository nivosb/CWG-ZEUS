import React from 'react';
import ClientsGrid from './ClientsGrid';

const ClientsSection: React.FC = () => {
  return (
    <section className="bg-black relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[#0A0A0A] opacity-95" />
      <ClientsGrid />
    </section>
  );
};

export default ClientsSection;