import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { faq } from '../content/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="section-inner max-w-3xl">
        <SectionHeader eyebrow={faq.eyebrow} heading={faq.heading} />

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`card overflow-hidden ${isOpen ? 'border-gold-500/30' : ''}`}
              >
                <button
                  className="w-full text-left flex items-start justify-between gap-4 p-5 md:p-6"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-base md:text-lg text-ink">
                    {item.q}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 mt-1 text-gold-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <p className="px-5 md:px-6 pb-5 md:pb-6 -mt-2 text-sm md:text-base text-ink-muted leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
