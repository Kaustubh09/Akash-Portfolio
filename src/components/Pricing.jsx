import { motion } from 'framer-motion';
import { Check, Star, TrendingDown } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { pricing } from '../content/pricing';
import StockBackdrop from './decor/StockBackdrop';

export default function Pricing({ onOpenContact }) {
  return (
    <section id="pricing" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-gold-500/[0.04] to-transparent" />
      {/* Subtle trading-chart grid backdrop */}
      <StockBackdrop variant="grid" className="absolute inset-0 -z-10 opacity-60" />

      <div className="section-inner relative">
        <SectionHeader
          eyebrow={pricing.eyebrow}
          heading={pricing.heading}
          subheading={pricing.subheading}
        />

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {pricing.plans.map((plan, idx) => (
            <PlanCard key={plan.name} plan={plan} idx={idx} onAction={onOpenContact} />
          ))}
        </div>

        
      </div>
    </section>
  );
}

function PlanCard({ plan, idx, onAction }) {
  const highlighted = plan.highlighted;
  const hasFeatures = plan.features && plan.features.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`relative flex flex-col rounded-2xl p-7 md:p-8 ${
        highlighted
          ? 'bg-gold-gradient text-bg shadow-gold scale-[1.02] md:-mt-2 md:mb-2'
          : 'bg-card-gradient border border-white/5 text-ink shadow-card'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-bg text-gold-400 border border-gold-500/40 px-3 py-1 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap">
          <Star size={12} fill="currentColor" /> {plan.badge}
        </div>
      )}

      <div>
        <h3 className={`text-lg font-display font-bold ${highlighted ? 'text-bg' : 'text-ink'}`}>
          {plan.name}
        </h3>
        <p className={`mt-1 text-sm leading-relaxed ${highlighted ? 'text-bg/75' : 'text-ink-muted'}`}>
          {plan.description}
        </p>
      </div>

      {/* Price block */}
      <div className="mt-6">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className={`text-4xl md:text-5xl font-display font-extrabold leading-none ${
            highlighted ? 'text-bg' : 'text-ink'
          }`}>
            {plan.price}
          </span>
          <span className={`text-sm font-medium ${highlighted ? 'text-bg/70' : 'text-ink-muted'}`}>
            {plan.cadence}
          </span>
          {plan.originalPrice && (
            <span
              className={`text-base md:text-lg font-bold line-through decoration-2 ml-1 ${
                highlighted ? 'text-bg/50 decoration-bg/60' : 'text-ink-dim decoration-red-500/70'
              }`}
              aria-label={`Originally ${plan.originalPrice}`}
            >
              {plan.originalPrice}
            </span>
          )}
        </div>

        {plan.savings && (
          <div
            className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] md:text-xs font-bold uppercase tracking-wider ${
              highlighted
                ? 'bg-bg text-gold-400'
                : 'bg-gold-500/10 text-gold-300 border border-gold-500/30'
            }`}
          >
            <TrendingDown size={12} />
            {plan.savings}
          </div>
        )}
      </div>

      {hasFeatures && (
        <ul className="mt-7 space-y-3">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm">
              <Check
                size={16}
                className={`mt-0.5 shrink-0 ${highlighted ? 'text-bg' : 'text-gold-400'}`}
              />
              <span className={highlighted ? 'text-bg/90' : 'text-ink'}>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* push CTA to the bottom of the card */}
      <div className="flex-1" />

      <button
        onClick={onAction}
        className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-all ${
          highlighted
            ? 'bg-bg text-gold-400 hover:bg-bg-elev'
            : 'bg-gold-gradient text-bg hover:brightness-110 shadow-gold-sm'
        }`}
      >
        {plan.cta}
      </button>
    </motion.div>
  );
}
