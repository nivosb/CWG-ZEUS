import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceIcon from './ServiceIcon';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onExplore: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, onExplore }) => {
  return (
    <div className="relative group">
      {/* Gradient background with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#130423] via-[#130423] to-[#220937] rounded-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative backdrop-blur-sm rounded-3xl p-8 border border-white/5 group-hover:border-white/10 transition-all duration-300">
        <div className="relative">
          <ServiceIcon icon={icon} />
          <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>
          
          <button 
            onClick={onExplore}
            className="text-white font-medium flex items-center hover:opacity-80 transition-opacity"
          >
            Explore
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;