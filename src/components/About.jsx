import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';
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
                const unavailable = h.available === false;
                const Icon = unavailable ? XCircle : CheckCircle2;
                return (
                  <div
                    key={h.title}
                    className="card card-hover p-4 flex items-start gap-3"
                  >
                    <Icon
                      size={20}
                      className={`mt-0.5 shrink-0 ${unavailable ? 'text-red-500' : 'text-gold-400'}`}
                    />
                    <div className="min-w-0">
                      <div className="font-semibold text-ink leading-snug">{h.title}</div>
                      {h.detail && (
                        <div className="text-sm text-ink-muted leading-relaxed mt-0.5">
                          {h.detail}
                        </div>
                      )}
                      {unavailable && (
                        <div className="text-xs text-red-400/80 mt-1 uppercase tracking-widest font-semibold">
                          Not Offered
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — single merged message card (yellow header + dark body) */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <MessageCard title={about.message.title} body={about.message.body} />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function MessageCard({ title, body }) {
  // `body` accepts either a single string or an array of paragraph strings —
  // normalise to an array so we always render proper <p> blocks with spacing.
  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <div className="rounded-2xl overflow-hidden border border-gold-500/30 shadow-gold-sm">
      {/* Yellow header strip */}
      <div className="bg-gold-gradient text-bg p-6 md:p-7">
        <h3 className="text-xl md:text-2xl font-display font-bold leading-tight">
          {title}
        </h3>
      </div>
      {/* Dark body content */}
      <div className="bg-bg-elev p-6 md:p-7 space-y-4">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base md:text-[17px] leading-relaxed text-ink-muted text-left md:text-justify"
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
