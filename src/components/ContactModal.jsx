import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contact } from '../content/contact';
import { site } from '../content/site';

// Modal is intentionally NOT opened on page load — only when the parent toggles
// `open` to true (FAB click, nav button click, or any service CTA).
//
// Form submission POSTs to `site.formEndpoint` (FormSubmit AJAX). FormSubmit
// then forwards the payload as an email to the configured inbox.
export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({});

  // Reset state whenever modal closes
  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSubmitted(false);
        setSubmitting(false);
        setError(null);
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
    if (error) setError(null);
  }

  // Build subject + plain-text body once — used by both delivery paths.
  function buildEmail() {
    const subject = form.subject
      ? `[Website] ${form.subject}`
      : `[Website] New enquiry from ${form.name || 'visitor'}`;
    const body = [
      `Name: ${form.name || ''}`,
      `Email: ${form.email || ''}`,
      `Phone: ${form.phone || ''}`,
      form.subject ? `Subject: ${form.subject}` : null,
      '',
      'Message:',
      form.message || '',
    ]
      .filter((line) => line !== null)
      .join('\n');
    return { subject, body };
  }

  // Fallback: open the visitor's default email client with everything
  // pre-filled. Works on every device with mail configured — no API, no CORS.
  function openMailClient() {
    const { subject, body } = buildEmail();
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    // Use window.open in a new tab so the modal/page state isn't lost.
    window.open(url, '_blank');
    setSubmitted(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    // -- Path 1: Web3Forms direct delivery (only if access key is configured)
    if (site.web3formsAccessKey) {
      try {
        // FormData → multipart/form-data → CORS-"simple", no preflight.
        const fd = new FormData();
        fd.append('access_key', site.web3formsAccessKey);
        const { subject } = buildEmail();
        fd.append('subject', subject);
        fd.append('from_name', form.name || 'Website Visitor');
        fd.append('name', form.name || '');
        fd.append('email', form.email || '');
        fd.append('phone', form.phone || '');
        fd.append('message', form.message || '');
        if (form.subject) fd.append('user_subject', form.subject);

        const resp = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: fd,
        });
        const data = await resp.json().catch(() => ({}));
        if (resp.ok && data?.success) {
          setSubmitted(true);
          setSubmitting(false);
          return;
        }
        // API responded but not success — fall through to mailto fallback.
      } catch {
        // Network/CORS failure — fall through to mailto fallback.
      }
    }

    // -- Path 2: mailto: fallback (default if no access key, or on API error)
    try {
      openMailClient();
    } catch (err) {
      setError(
        "Couldn't open your email client. Please email " +
          site.email +
          ' directly.'
      );
    } finally {
      setSubmitting(false);
    }
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
                            disabled={submitting}
                            className="input resize-none disabled:opacity-60"
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
                            disabled={submitting}
                            className="input disabled:opacity-60"
                          />
                        )}
                      </div>
                    ))}

                    {error && (
                      <div
                        role="alert"
                        className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs text-red-300"
                      >
                        <AlertCircle size={16} className="mt-0.5 shrink-0" />
                        <span>
                          {error}{' '}
                          <a
                            href={`mailto:${site.email}`}
                            className="underline font-semibold hover:text-red-200"
                          >
                            Email {site.email}
                          </a>
                        </span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full mt-2 disabled:cursor-wait"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          {contact.submitLabel}
                        </>
                      )}
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
