import React from 'react';

interface ClientLogoProps {
  name: string;
  imageUrl: string;
  link: string;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ name, imageUrl, link }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center px-8 hover:opacity-75 transition-opacity duration-300"
    >
      <div className="relative w-48 h-20">
        <img
          src={imageUrl}
          alt={`${name} logo`}
          className="w-full h-full object-contain filter brightness-100"
        />
      </div>
    </a>
  );
};

export default ClientLogo;