import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Quote } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { about } from '../content/about';

export default function About() {
  return (
    <section id="about" className="section relative">
      {/* Soft gold gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gold-radial opacity-50" />

      <div className="section-inner">
        <SectionHeader eyebrow={about.eyebrow} heading={about.heading} subheading={about.intro} />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left — narrative + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-ink-muted leading-relaxed text-left md:text-justify"
              >
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {about.highlights.map((h) => {
                const available = h.available === true;
                const Icon = CheckCircle2 ;
                return (
                  <div
                    key={h.title}
                    className="card card-hover p-4 flex items-start gap-3"
                  >
                    <Icon
                      size={20}
                      className="mt-0.5 shrink-0  text-gold-400"
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-ink leading-snug">{h.title}</div>
                      {h.detail && (
                        <div className="text-sm text-ink-muted leading-relaxed mt-0.5">
                          {h.detail}
                        </div>
                      )}
                     {available && (
                        <div className="text-xs text-gold-400/80 mt-1 uppercase tracking-widest font-semibold">
                          F&O allowed
                        </div>
                     )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — pull-quote style message card */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <MessageCard {...about.message} />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function MessageCard({ title, quote, body, signature, signatureRole }) {
  // Body accepts a single string or an array of paragraphs.
  const paragraphs = Array.isArray(body) ? body : body ? [body] : [];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-gold-sm bg-card-gradient">
      {/* Large decorative quote glyph — sits behind the content */}
      <Quote
        className="absolute -top-2 right-2 text-gold-500/[0.08] pointer-events-none select-none"
        size={160}
        fill="currentColor"
        strokeWidth={0}
        aria-hidden
      />

      {/* Yellow header strip — title only */}
      <div className="relative bg-gold-gradient text-bg px-6 py-5 md:px-7 md:py-6">
        <h3 className="text-lg md:text-xl font-display font-bold leading-tight">
          {title}
        </h3>
      </div>

      {/* Body */}
      <div className="relative p-6 md:p-7">
        {quote && (
          <p className="text-lg md:text-xl font-display font-semibold leading-snug text-ink">
            <span className="text-gold-400 mr-1">“</span>
            {quote}
            <span className="text-gold-400 ml-1">”</span>
          </p>
        )}

        {paragraphs.length > 0 && (
          <div className={`space-y-3 ${quote ? 'mt-5' : ''}`}>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        )}

        {signature && (
          <div className="mt-6 pt-5 border-t border-gold-500/20 flex items-center gap-3">
            <div
              className="grid place-items-center h-10 w-10 rounded-full bg-gold-gradient text-bg font-bold text-sm font-display shrink-0"
              aria-hidden
            >
              AG
            </div>
            <div className="leading-tight">
              <div className="text-sm font-display font-bold text-ink">— {signature}</div>
              {signatureRole && (
                <div className="text-[11px] text-gold-400 uppercase tracking-widest font-semibold mt-0.5">
                  {signatureRole}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
