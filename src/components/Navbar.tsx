import React, { useState } from 'react';
import { Compass, Home, Users, GraduationCap } from 'lucide-react';

type Section = 'home' | 'locals' | 'nonlocals' | 'shared';

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-sage/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-earth text-xl font-semibold">Aantarya</span>
          </div>
          <div className="relative flex space-x-4">
            <DropdownButton 
              isOpen={isDropdownOpen} 
              onToggle={toggleDropdown} 
              activeSection={activeSection}
              onSectionChange={onSectionChange}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <NavButton
                  icon={<Home size={20} />}
                  label="Home"
                  active={activeSection === 'home'}
                  onClick={() => { onSectionChange('home'); setIsDropdownOpen(false); }}
                />
                <NavButton
                  icon={<Users size={20} />}
                  label="Locals"
                  active={activeSection === 'locals'}
                  onClick={() => { onSectionChange('locals'); setIsDropdownOpen(false); }}
                />
                <NavButton
                  icon={<GraduationCap size={20} />}
                  label="Non-Locals"
                  active={activeSection === 'nonlocals'}
                  onClick={() => { onSectionChange('nonlocals'); setIsDropdownOpen(false); }}
                />
                <NavButton
                  icon={<Compass size={20} />}
                  label="Explore"
                  active={activeSection === 'shared'}
                  onClick={() => { onSectionChange('shared'); setIsDropdownOpen(false); }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${active 
          ? 'bg-earth text-cream' 
          : 'text-earth hover:bg-earth/10'
        }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

interface DropdownButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ isOpen, onToggle, activeSection, onSectionChange }) => {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors
        ${isOpen 
          ? 'bg-earth text-cream' 
          : 'text-earth hover:bg-earth/10'
        }`}
    >
      <span className="mr-2">Menu</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5 8a1 1 0 011 1v3a1 1 0 11-2 0V9a1 1 0 011-1zm6 0a1 1 0 011 1v3a1 1 0 11-2 0V9a1 1 0 011-1zm6 0a1 1 0 011 1v3a1 1 0 11-2 0V9a1 1 0 011-1z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default Navbar;
