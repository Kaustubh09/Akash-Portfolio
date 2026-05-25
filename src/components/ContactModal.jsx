import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { contact } from '../content/contact';
import { site } from '../content/site';

// Modal is intentionally NOT opened on page load — only when the parent toggles
// `open` to true (FAB click, nav button click, or any service CTA).
export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({});

  // Reset state whenever modal closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setForm({});
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Esc to close + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: integrate with backend / form service (e.g. Formspree, Resend)
    // For now: simulate success.
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card-gradient border border-gold-500/20 shadow-gold"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-bg/70 border border-white/10 text-ink hover:text-gold-400 hover:border-gold-500/40 transition-colors z-10"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-5">
              {/* Left rail — quick contact info */}
              <aside className="md:col-span-2 p-6 md:p-8 bg-gold-gradient text-bg rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <h3 id="contact-title" className="text-2xl font-display font-bold">
                  {contact.title}
                </h3>
                <p className="mt-2 text-sm text-bg/80 leading-relaxed">
                  {contact.subtitle}
                </p>

                <div className="mt-8 space-y-4 text-sm">
                  <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
                  <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, '')}`} />
                  <ContactRow icon={MapPin} label="Location" value={site.address} />
                </div>

                <div className="mt-8 pt-6 border-t border-bg/20 text-xs text-bg/80">
                  SEBI Registered Research Analyst
                  <div className="font-bold mt-0.5 text-bg">{site.sebiRegNo}</div>
                </div>
              </aside>

              {/* Right — form / success */}
              <div className="md:col-span-3 p-6 md:p-8">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="grid place-items-center h-16 w-16 rounded-full bg-gold-500/10 text-gold-400 mb-4 border border-gold-500/30">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className="text-xl font-display font-bold text-ink">Message sent</h4>
                    <p className="mt-2 text-sm text-ink-muted max-w-sm">
                      {contact.successMessage}
                    </p>
                    <button onClick={onClose} className="btn-outline mt-6">
                      Close
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {contact.fields.map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="label block mb-1.5">
                          {field.label}
                          {field.required && <span className="text-gold-400 ml-0.5">*</span>}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            rows={4}
                            value={form[field.name] || ''}
                            onChange={handleChange}
                            className="input resize-none"
                          />
                        ) : (
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={form[field.name] || ''}
                            onChange={handleChange}
                            className="input"
                          />
                        )}
                      </div>
                    ))}
                    <button type="submit" className="btn-primary w-full mt-2">
                      <Send size={16} />
                      {contact.submitLabel}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const Inner = (
    <>
      <div className="grid place-items-center h-9 w-9 rounded-lg bg-bg/15 shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-widest font-bold text-bg/70">
          {label}
        </div>
        <div className="font-semibold text-bg">{value}</div>
      </div>
    </>
  );
  if (href) {
    return (
      <a href={href} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {Inner}
      </a>
    );
  }
  return <div className="flex items-center gap-3">{Inner}</div>;
}
