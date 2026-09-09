import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold text-white transition-all duration-300 hover:transform hover:scale-105";
  const variants = {
    primary: "bg-gradient-to-r from-[#7e3ff2] to-[#5900cc] shadow-lg",
    secondary: "border-2 border-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;