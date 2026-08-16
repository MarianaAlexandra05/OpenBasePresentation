import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DeviceStage } from './components/DeviceStage';
import { WhyItExists } from './components/WhyItExists';
import { HowItWorks } from './components/HowItWorks';
import { WindowsStudio } from './components/WindowsStudio';
import { IntegrationsOrbit } from './components/IntegrationsOrbit';
import { ArchitectureComparison } from './components/ArchitectureComparison';
import { DiagnosticsDoctor } from './components/DiagnosticsDoctor';
import { InstallationGuide } from './components/InstallationGuide';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ChangelogModal } from './components/ChangelogModal';

export function AppContent() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 relative overflow-hidden flex flex-col font-sans">
      {/* Background Ambience Glows */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true"></div>
      <div className="ambient-glow ambient-glow-2" aria-hidden="true"></div>
      <div className="ambient-glow ambient-glow-3" aria-hidden="true"></div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-grid-pattern opacity-60 pointer-events-none z-0" aria-hidden="true"></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Navbar 
          onOpenWaitlist={() => setIsWaitlistOpen(true)} 
          onOpenChangelog={() => setIsChangelogOpen(true)} 
        />
        
        <main className="flex-1">
          <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
          <DeviceStage />
          <WhyItExists onOpenWaitlist={() => setIsWaitlistOpen(true)} />
          <HowItWorks />
          <WindowsStudio />
          <IntegrationsOrbit />
          <ArchitectureComparison />
          <DiagnosticsDoctor />
          <InstallationGuide />
        </main>

        <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      </div>

      {/* Modals */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <ChangelogModal 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
