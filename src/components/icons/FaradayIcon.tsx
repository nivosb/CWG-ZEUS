import React from 'react';

const FaradayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 32" fill="currentColor" className={className}>
    <path d="M50 5L35 20h10v7h10v-7h10L50 5z"/>
  </svg>
);

export default FaradayIcon;