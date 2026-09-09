import React from 'react';

const McdonaldsIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.2 6.9c2.7 0 3.8 4.5 3.8 6.3v4.3h-2.3v-4.3c0-2.5-1-4.3-1.5-4.3-.6 0-1.5 1.8-1.5 4.3v4.3h-2.3v-4.3c0-2.5-1-4.3-1.5-4.3-.6 0-1.5 1.8-1.5 4.3v4.3H8.1v-4.3c0-1.8 1.1-6.3 3.8-6.3 1.5 0 2.5 1.7 3.1 3.2.6-1.5 1.6-3.2 3.1-3.2z" />
    </svg>
  );
};

export default McdonaldsIcon;