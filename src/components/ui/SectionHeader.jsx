import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, heading, subheading, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const dividerClass = align === 'left' ? '' : 'mx-auto';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 md:mb-16 ${alignClass}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="text-display-lg mt-4 text-ink">
        {heading}
      </h2>
      <div className={`divider-gold mt-5 ${dividerClass}`} />
      {subheading && (
        <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-muted leading-relaxed mx-auto">
          {subheading}
        </p>
      )}
    </motion.div>
  );
}
