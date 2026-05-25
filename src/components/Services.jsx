import { motion } from 'framer-motion';
import { TrendingUp, Activity, GraduationCap, Check, ArrowRight } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { services } from '../content/services';

// Map content icon strings → lucide components. Add new mappings here when new
// service items are introduced in content/services.js.
const iconMap = { TrendingUp, Activity, GraduationCap };

export default function Services({ onOpenContact }) {
  return (
    <section id="services" className="section bg-bg-soft/40">
      <div className="section-inner">
        <SectionHeader
          eyebrow={services.eyebrow}
          heading={services.heading}
          subheading={services.subheading}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? TrendingUp;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card card-hover p-6 md:p-8 flex flex-col h-full"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-400 mb-5 border border-gold-500/20">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-ink-muted leading-relaxed">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check size={16} className="mt-0.5 text-gold-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onOpenContact}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  Enquire about this <ArrowRight size={14} />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
