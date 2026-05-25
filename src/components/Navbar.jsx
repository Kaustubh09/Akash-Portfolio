import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../content/nav';
import { site } from '../content/site';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar({ onOpenContact }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = navLinks.map((l) => l.href.replace('#', ''));
  const active = useScrollSpy(ids, 140);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-bg/80 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-content container-px flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-gold-gradient text-bg font-bold text-sm">
            AG
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-bold text-ink">{site.name}</span>
            <span className="text-[10px] uppercase tracking-widest text-gold-400">
              SEBI • {site.sebiRegNo}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-gold-400' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={onOpenContact} className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
            Get in Touch
          </button>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-bg-soft border-t border-white/5 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-px mx-auto max-w-content py-6 space-y-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive ? 'bg-gold-500/10 text-gold-400' : 'text-ink hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li className="pt-2">
            <button
              onClick={() => { setOpen(false); onOpenContact(); }}
              className="btn-primary w-full"
            >
              Get in Touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
