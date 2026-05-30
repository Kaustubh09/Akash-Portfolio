import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { hero } from '../content/hero';
import { site } from '../content/site';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-gold-600/10 blur-3xl" />
      </div>

      <div className="section-inner container-px grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left — text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 order-2 lg:order-1"
        >
          <span className="eyebrow">
            <ShieldCheck size={14} className="text-gold-400" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-5 text-display-xl text-ink">
            {hero.greeting && (
              <span className="block text-ink-muted text-2xl md:text-3xl font-medium mb-2 font-sans tracking-normal">
                {hero.greeting}
              </span>
            )}
            <span className="text-gold-gradient">{hero.name}</span>
          </h1>

          {hero.title && (
            <p className="mt-5 text-lg md:text-xl text-gold-300 font-medium leading-snug max-w-2xl">
              {hero.title}
            </p>
          )}

          {hero.description && (
            <p className="mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted text-left md:text-justify">
              {hero.description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
            <a href={hero.ctaPrimary.href} className="btn-primary">
              {hero.ctaPrimary.label}
              <ArrowRight size={16} />
            </a>
            <a href={hero.ctaSecondary.href} className="btn-outline">
              {hero.ctaSecondary.label}
            </a>
          </div>

          {/* Stats — sizing tuned so word-values like "Professional" never crop */}
          <dl className="mt-12 grid grid-cols-3 gap-3 sm:gap-5 md:gap-7 max-w-xl">
            {hero.stats.map((s) => (
              <div key={s.label} className="text-left min-w-0">
                <dt className="text-gold-gradient font-display font-bold leading-tight text-[clamp(1rem,3.5vw,1.75rem)] break-words">
                  {String(s.value).trim()}
                </dt>
                <dd className="mt-1.5 text-[11px] sm:text-xs md:text-sm text-ink-muted leading-snug">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <PortraitFrame src={site.portrait} alt={site.name} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll to next section"
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-1 text-ink-dim hover:text-gold-400 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

function PortraitFrame({ src, alt }) {
  return (
    <div className="relative">
      {/* Decorative glow ring */}
      <div className="absolute inset-0 -m-2 rounded-full bg-gold-gradient blur-2xl opacity-30 animate-pulse-soft" />
      <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-[22rem] lg:w-[22rem] rounded-full p-1 bg-gold-gradient shadow-gold">
        <div className="relative h-full w-full rounded-full overflow-hidden bg-bg-soft">
          {/* Image with graceful fallback to initials */}
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <div
            className="absolute inset-0 hidden items-center justify-center text-6xl font-display font-bold text-gold-gradient"
            aria-hidden
          >
            AG
          </div>
        </div>

        {/* SEBI badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-bg-elev border border-gold-500/40 px-4 py-2 shadow-gold-sm whitespace-nowrap">
          <ShieldCheck size={14} className="text-gold-400" />
          <span className="text-xs font-semibold text-ink">SEBI Registered</span>
        </div>
      </div>
    </div>
  );
}
