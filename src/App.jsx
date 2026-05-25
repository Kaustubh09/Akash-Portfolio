import { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Compliance from './components/Compliance';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import FloatingContactButton from './components/FloatingContactButton';

export default function App() {
  // Single source of truth for modal visibility.
  // IMPORTANT: must default to `false` — modal must NEVER auto-open on load.
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <div className="grain min-h-screen text-ink bg-bg">
      <Navbar onOpenContact={openContact} />
      <main>
        <Hero />
        <About />
        <Services onOpenContact={openContact} />
        <Pricing onOpenContact={openContact} />
        <Compliance />
        <FAQ />
      </main>
      <Footer />
      <FloatingContactButton onClick={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  );
}
