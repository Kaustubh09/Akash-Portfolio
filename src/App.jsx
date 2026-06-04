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
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    // FIX 1: overflow-x-hidden on the root wrapper clips any child that
    // bleeds past 100vw (glow blurs, SVG backdrops, etc.) without affecting
    // vertical scrolling. w-full ensures the div fills the viewport width.
    <div className="grain min-h-screen text-ink bg-bg overflow-x-hidden w-full">
      <Navbar onOpenContact={openContact} />
      <main>
        <Hero />
        <Services onOpenContact={openContact} />
        <Pricing onOpenContact={openContact} />
        <About />
        <FAQ />
        <Compliance />
      </main>
      <Footer />
      <FloatingContactButton onClick={openContact} />
      <ContactModal open={contactOpen} onClose={closeContact} />
    </div>
  );
}