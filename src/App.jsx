import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WindowsStudio } from './components/WindowsStudio';
import { ArchitectureComparison } from './components/ArchitectureComparison';
import { FeaturesSection } from './components/FeaturesSection';
import { DeviceStage } from './components/DeviceStage';
import { WhyItExists } from './components/WhyItExists';
import { DiagnosticsDoctor } from './components/DiagnosticsDoctor';
import { InstallationGuide } from './components/InstallationGuide';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { ChangelogModal } from './components/ChangelogModal';

export function AppContent() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  return (
    <>
      {/* Background Ambience Effects */}
      <div className="ambient-glow ambient-glow-1" aria-hidden="true"></div>
      <div className="ambient-glow ambient-glow-2" aria-hidden="true"></div>
      <div className="ambient-glow ambient-glow-3" aria-hidden="true"></div>

      <Navbar 
        onOpenWaitlist={() => setIsWaitlistOpen(true)} 
        onOpenChangelog={() => setIsChangelogOpen(true)} 
      />
      
      <main>
        <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <WindowsStudio />
        <ArchitectureComparison />
        <FeaturesSection />
        <DeviceStage />
        <WhyItExists onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        <DiagnosticsDoctor />
        <InstallationGuide />
      </main>

      <Footer onOpenWaitlist={() => setIsWaitlistOpen(true)} />

      {/* Modals */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />

      <ChangelogModal 
        isOpen={isChangelogOpen} 
        onClose={() => setIsChangelogOpen(false)} 
      />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
