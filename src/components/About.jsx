import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { about } from '../content/about';

export default function About() {
  return (
    <section id="about" className="section relative">
      {/* Soft gold gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gold-radial opacity-50" />

      <div className="section-inner">
        <SectionHeader eyebrow={about.eyebrow} heading={about.heading} subheading={about.intro} />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left — narrative + highlights */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg text-ink-muted leading-relaxed">
                {p}
              </p>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {about.highlights.map((h) => (
                <div
                  key={h.title}
                  className="card card-hover p-4 flex items-start gap-3"
                >
                  <CheckCircle2 size={20} className="mt-1 text-gold-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-ink">{h.title}</div>
                    <div className="text-sm text-ink-muted leading-relaxed mt-0.5">{h.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — vision / mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-4 lg:sticky lg:top-28"
          >
            <ValueCard icon={Eye} label={about.vision.label} text={about.vision.text} accent />
            <ValueCard icon={Target} label={about.mission.label} text={about.mission.text} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ icon: Icon, label, text, accent = false }) {
  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 overflow-hidden ${
        accent
          ? 'bg-gold-gradient text-bg shadow-gold'
          : 'bg-card-gradient border border-white/5 text-ink'
      }`}
    >
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
        accent ? 'bg-bg/15 text-bg' : 'bg-gold-500/10 text-gold-400'
      }`}>
        <Icon size={20} />
      </div>
      <div className={`mt-4 text-xs font-semibold uppercase tracking-widest ${
        accent ? 'text-bg/70' : 'text-gold-400'
      }`}>
        {label}
      </div>
      <p className={`mt-2 text-lg md:text-xl font-display font-semibold leading-snug ${
        accent ? 'text-bg' : 'text-ink'
      }`}>
        {text}
      </p>
    </div>
  );
}
