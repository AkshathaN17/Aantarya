import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocalsSection from './components/LocalsSection';
import NonLocalsSection from './components/NonLocalsSection';
import SharedSection from './components/SharedSection';
import QRCode from 'qrcode';

type Section = 'home' | 'locals' | 'nonlocals' | 'shared';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const qrCodeCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (qrCodeCanvasRef.current) {
      const appUrl = "http://x.x.x.x:y/"; //Your IP address:local host port
      QRCode.toCanvas(
        qrCodeCanvasRef.current,
        appUrl,
        { width: 128 },
        (error) => {
          if (error) {
            console.error('Error generating QR code:', error);
          }
        }
      );
    }
  }, []);

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

        {activeSection === 'home' && (
          <div className="absolute top-20 right-10"> 
            <canvas
              ref={qrCodeCanvasRef}
              width="128"
              height="128" 
            ></canvas> 
          </div>
        )}

        <main className="pt-16 pb-24">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
