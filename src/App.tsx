import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { TacticalPillars } from './components/TacticalPillars';
import { VideoSection } from './components/VideoSection';
import { TrajectoryTimeline } from './components/TrajectoryTimeline';
import { PhotoGallery } from './components/PhotoGallery';
import { FullProfileDetails } from './components/FullProfileDetails';
import { ContactSection } from './components/ContactSection';
import { DossierModal } from './components/DossierModal';

export function App() {
  const [dossierOpen, setDossierOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090c] text-[#e2e4ea] selection:bg-[#45f3ff] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenDossier={() => setDossierOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenDossier={() => setDossierOpen(true)} />
        <MetricsBar />
        <TacticalPillars />
        <VideoSection />
        <TrajectoryTimeline />
        <PhotoGallery />
        <FullProfileDetails onOpenDossier={() => setDossierOpen(true)} />
        <ContactSection />
      </main>

      {/* Dossier Modal / Printable Sheet */}
      <DossierModal isOpen={dossierOpen} onClose={() => setDossierOpen(false)} />
    </div>
  );
}

export default App;
