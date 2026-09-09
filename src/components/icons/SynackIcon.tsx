import React from 'react';

const SynackIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 32" fill="currentColor" className={className}>
    <path d="M50 5L35 27h30L50 5zm0 8l7.5 11h-15L50 13z"/>
  </svg>
);

export default SynackIcon;