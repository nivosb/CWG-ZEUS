import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon: Icon }) => {
  return (
    <div className="w-16 h-16 rounded-full bg-[#130423] flex items-center justify-center mb-6 relative group">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#9C27DF] opacity-20 blur-md rounded-full group-hover:opacity-30 transition-opacity duration-300" />
      
      {/* Icon */}
      <div className="relative">
        <Icon className="w-8 h-8 text-[#9C27DF]" />
      </div>
    </div>
  );
}

export default ServiceIcon;