import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocalsSection from './components/LocalsSection';
import NonLocalsSection from './components/NonLocalsSection';
import SharedSection from './components/SharedSection';

type Section = 'home' | 'locals' | 'nonlocals' | 'shared';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'locals':
        return <LocalsSection />;
      case 'nonlocals':
        return <NonLocalsSection />;
      case 'shared':
        return <SharedSection />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />

        <main className="pt-16 pb-24">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
