import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItem } from './types';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../utils/scroll';

interface NavLinkProps extends NavItem {
  hasDropdown?: boolean;
  isActive: boolean;
  onDropdownChange: (isOpen: boolean) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  label, 
  href, 
  dropdownItems, 
  hasDropdown = false,
  isActive,
  onDropdownChange
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isActive && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    onDropdownChange(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    onDropdownChange(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      navigate(href);
      scrollToTop();
      setIsDropdownOpen(false);
      onDropdownChange(false);
    } else if (hasDropdown) {
      e.stopPropagation();
      setIsDropdownOpen(!isDropdownOpen);
      onDropdownChange(!isDropdownOpen);
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="flex items-center px-4 py-1.5 text-[#cccccc] hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
        onClick={handleClick}
      >
        <span className="text-sm font-medium">{label}</span>
        {hasDropdown && (
          <ChevronDown className={`w-4 h-4 ml-1 opacity-50 transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`} />
        )}
      </button>
      
      {dropdownItems && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
          <Dropdown items={dropdownItems} isOpen={isDropdownOpen} />
        </div>
      )}
    </div>
  );
}

export default NavLink;
