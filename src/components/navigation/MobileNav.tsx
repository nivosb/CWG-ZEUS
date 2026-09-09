import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItem } from './types';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../utils/scroll';

interface MobileNavProps {
  isOpen: boolean;
  scrolled: boolean;
  items: NavItem[];
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, scrolled, items, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();

  if (!isOpen) {
    if (openDropdown) setOpenDropdown(null);
    return null;
  }

  const handleItemClick = (item: NavItem) => {
    if (item.href) {
      navigate(item.href);
      scrollToTop();
      onClose();
    } else if (item.dropdownItems) {
      setOpenDropdown(openDropdown === item.label ? null : item.label);
    }
  };

  const handleDropdownItemClick = (href: string) => {
    navigate(href);
    scrollToTop();
    onClose();
    setOpenDropdown(null);
  };

  return (
    <div className={`lg:hidden absolute top-full left-0 right-0 py-4 px-4 transition-colors duration-300 ${
      scrolled ? 'bg-[#0d0318]' : 'bg-[#1e1e1e]/95 backdrop-blur-sm'
    }`}>
      <div className="flex flex-col space-y-2">
        {items.map((item) => (
          <div key={item.label}>
            <button
              className="flex items-center justify-between w-full px-4 py-2 text-[#cccccc] hover:text-white transition-colors"
              onClick={() => handleItemClick(item)}
            >
              <span>{item.label}</span>
              {item.dropdownItems && (
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                  openDropdown === item.label ? 'rotate-180' : ''
                }`} />
              )}
            </button>
            
            {item.dropdownItems && openDropdown === item.label && (
              <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                {item.dropdownItems.map((dropdownItem) => (
                  <button
                    key={dropdownItem.label}
                    onClick={() => handleDropdownItemClick(dropdownItem.href)}
                    className="block w-full text-left py-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {dropdownItem.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
