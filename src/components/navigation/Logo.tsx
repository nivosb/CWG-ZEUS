import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // If not on home page, navigate to home
      navigate('/');
    } else {
      // If on home page, smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Link 
      to="/" 
      onClick={handleClick}
      className="font-azonix text-2xl tracking-tight text-white transition-opacity hover:opacity-70"
    >
      CWG
    </Link>
  );
}

export default Logo;
