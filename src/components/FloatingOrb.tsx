import React from 'react';

interface FloatingOrbProps {
  color: string;
  size: string;
  position: string;
  blur?: string;
}

const FloatingOrb: React.FC<FloatingOrbProps> = ({ color, size, position, blur = '100px' }) => {
  return (
    <div
      className={`absolute rounded-full opacity-50 animate-pulse ${position}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur})`,
      }}
    />
  );
}

export default FloatingOrb;