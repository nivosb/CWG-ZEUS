import React from 'react';
import { ClientLogo } from './types';
import LogoItem from './LogoItem';

interface LogoRowProps {
  logos: ClientLogo[];
}

const LogoRow: React.FC<LogoRowProps> = ({ logos }) => {
  return (
    <div className="flex items-center">
      {logos.map((client, index) => (
        <LogoItem 
          key={index}
          client={client}
        />
      ))}
    </div>
  );
};

export default LogoRow;