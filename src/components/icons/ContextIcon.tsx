import React from 'react';

const ContextIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 32" fill="currentColor" className={className}>
    <path d="M50 5c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15S58.3 5 50 5zm0 25c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"/>
  </svg>
);

export default ContextIcon;