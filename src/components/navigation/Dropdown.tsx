import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DropdownProps } from './types';
import { scrollToTop } from '../../utils/scroll';

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen }) => {
  const navigate = useNavigate();

  if (!isOpen || !items) return null;

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    navigate(href);
    scrollToTop();
  };

  return (
    <div className="w-48 bg-[#0d0318] rounded-lg shadow-lg py-2 border border-white/10">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default Dropdown;