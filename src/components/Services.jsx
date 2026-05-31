import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, GraduationCap, MessageCircleQuestion, Check, X, Plus } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { services } from '../content/services';
import StockBackdrop from './decor/StockBackdrop';

// Map content icon strings → lucide components. Add new mappings here when new
// service items are introduced in content/services.js.
const iconMap = { TrendingUp, Activity, GraduationCap, MessageCircleQuestion };

export default function Services() {
  return (
    <section id="services" className="section bg-bg-soft/40 relative overflow-hidden">
      {/* Faint chart grid spanning the whole section */}
      <StockBackdrop variant="grid" className="absolute inset-0 -z-10 opacity-80" />
      {/* Bold rising chart line drifting along the bottom */}
      <StockBackdrop
        variant="chart"
        className="absolute inset-x-0 bottom-0 -z-10 w-full h-80 md:h-[28rem] opacity-90"
      />
      <div className="section-inner relative">
        <SectionHeader
          eyebrow={services.eyebrow}
          heading={services.heading}
          subheading={services.subheading}
        />

        <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2">
          {services.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? TrendingUp;
            const isLast = idx === services.items.length - 1;
            return (
              <Fragment key={item.title}>
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card card-hover p-6 md:p-8 flex flex-col flex-1"
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
                    {item.features.map((f) => {
                      const text = typeof f === 'string' ? f : f.text;
                      const strike = typeof f === 'object' && f.strike;
                      return (
                        <li key={text} className="flex items-start gap-2.5 text-sm text-ink">
                          {strike ? (
                            <X size={16} className="mt-0.5 text-red-500 shrink-0" />
                          ) : (
                            <Check size={16} className="mt-0.5 text-gold-400 shrink-0" />
                          )}
                          <span className={strike ? 'text-red-500' : ''}>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </motion.article>

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center text-gold-400 lg:px-1 select-none"
                  >
                    <Plus size={36} strokeWidth={2.5} />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
