import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navItems } from './navItems';
import ContactModal from '../modals/ContactModal';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const scrolled = useScrollPosition();
  const location = useLocation();

  const handleNavClick = () => {
    setActiveDropdown(null);
  };

  const handleMobileNavClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed inset-x-0 top-0 z-[60] h-8 bg-white overflow-hidden ${isContactModalOpen ? 'pointer-events-none' : ''}`}>
          <Link
            to="/products/agentic-pentest"
            className="flex h-full w-full items-center justify-center px-2 transition-opacity hover:opacity-75 sm:px-10"
            style={{ fontSize: 'clamp(0.55rem, 3.2vw, 0.875rem)' }}
          >
            <span className="text-[#0d0318]" style={{ whiteSpace: 'nowrap' }}>⚡️ Zeus Has Launched - The Agentic Pentesting Platform ⚡️</span>
          </Link>
      </div>
      <nav 
        className={`fixed inset-x-0 top-8 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-[#0d0318]' : 'bg-transparent'
        } ${isContactModalOpen ? 'pointer-events-none' : ''}`}
        onClick={handleNavClick}
      >
      <div className="mx-auto flex max-w-6xl items-center px-6 py-7 sm:px-10 sm:py-9">
        <Logo />
        
        <div className="flex-1 flex justify-center">
          <div className="hidden lg:flex items-center space-x-1 bg-[#1e1e1e]/30 backdrop-blur-sm rounded-full px-3 py-2 border border-white/5">
            {navItems.map((item, index) => (
              <NavLink 
                key={index}
                {...item}
                hasDropdown={!!item.dropdownItems}
                isActive={activeDropdown === item.label}
                onDropdownChange={(isOpen) => {
                  setActiveDropdown(isOpen ? item.label : null);
                }}
              />
            ))}
          </div>
        </div>

        <button 
          className="hidden lg:block px-6 py-2 bg-[#7D3FF8] text-white rounded-full font-medium hover:bg-[#6932d3] transition-colors"
          onClick={() => setIsContactModalOpen(true)}
        >
          Book a Zeus Demo
        </button>

        <div className="lg:hidden">
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          />
        </div>

        <MobileNav 
          isOpen={isMobileMenuOpen} 
          scrolled={scrolled}
          items={navItems}
          onClose={handleMobileNavClose}
        />

        </div>
      </nav>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
