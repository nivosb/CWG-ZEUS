import React from 'react';
import { ClientLogo } from './types';

interface LogoItemProps {
  client: ClientLogo;
}

const LogoItem: React.FC<LogoItemProps> = ({ client }) => {
  const getLogoClass = (name: string) => {
    const baseClasses = "w-auto object-contain brightness-0 invert";
    
    switch (name) {
      case 'Fibi':
        return `h-10 sm:h-8 ${baseClasses} translate-y-1`;
      case 'Harel':
        return `h-14 sm:h-13 ${baseClasses}`;
      case 'Carrefour':
        return `h-14 sm:h-13 ${baseClasses}`;
      case 'Stratasys':
        return `h-12 sm:h-14 ${baseClasses} -translate-y-1`;
      default:
        return `h-10 sm:h-13 ${baseClasses}`;
    }
  };

  return (
    <div className="flex-none mx-4 sm:mx-8 flex items-center">
      <a 
        href={client.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center hover:opacity-75 transition-opacity duration-300"
      >
        <img
          src={client.imageUrl}
          alt={`${client.name} logo`}
          className={getLogoClass(client.name)}
        />
      </a>
    </div>
  );
};

export default LogoItem;