import React from 'react';

const IntelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 32" fill="currentColor" className={className}>
    <path d="M19.3 5h61.4C83.5 5 86 7.5 86 10.3v11.4c0 2.8-2.5 5.3-5.3 5.3H19.3c-2.8 0-5.3-2.5-5.3-5.3V10.3c0-2.8 2.5-5.3 5.3-5.3zm1.4 4v13.9h7.5V9h-7.5zm11.1 0v13.9h7.5V9h-7.5z"/>
  </svg>
);

export default IntelIcon;