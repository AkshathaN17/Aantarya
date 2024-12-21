import React from 'react';
import { Compass, Home, Users, GraduationCap } from 'lucide-react';

type Section = 'home' | 'locals' | 'nonlocals' | 'shared';

interface NavbarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-sage/90 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-earth text-xl font-semibold">Aantarya</span>
          </div>
          <div className="flex space-x-4">
            <NavButton
              icon={<Home size={20} />}
              label="Home"
              active={activeSection === 'home'}
              onClick={() => onSectionChange('home')}
            />
            <NavButton
              icon={<Users size={20} />}
              label="Locals"
              active={activeSection === 'locals'}
              onClick={() => onSectionChange('locals')}
            />
            <NavButton
              icon={<GraduationCap size={20} />}
              label="Non-Locals"
              active={activeSection === 'nonlocals'}
              onClick={() => onSectionChange('nonlocals')}
            />
            <NavButton
              icon={<Compass size={20} />}
              label="Explore"
              active={activeSection === 'shared'}
              onClick={() => onSectionChange('shared')}
            />
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

export default Navbar;