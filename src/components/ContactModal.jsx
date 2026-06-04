import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contact } from '../content/contact';
import { site } from '../content/site';

export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({});
  // FIX 2+3: track the scroll position so we can restore it on iOS after
  // removing the scroll-lock class (see below).
  const scrollYRef = useRef(0);

  // Reset form state whenever the modal closes
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

  // Esc to close + iOS-safe body scroll lock
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);

    // FIX 2: iOS Safari ignores `overflow: hidden` on <body> for scroll
    // locking — the page still scrolls under a fixed modal, which makes the
    // modal appear to jump to the top. The reliable fix is to:
    //   1. Record the current scroll position.
    //   2. Set `position: fixed` on the body with a negative `top` equal to
    //      the scroll offset (keeps the visual position intact).
    //   3. On cleanup, undo the fixed position and restore scrollY manually.
    scrollYRef.current = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollYRef.current}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      // Restore the scroll position that was frozen while the modal was open
      window.scrollTo(0, scrollYRef.current);
    };
  }, [open, onClose]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (error) setError(null);
  }

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

  function openMailClient() {
    const { subject, body } = buildEmail();
    const url = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);

    if (site.web3formsAccessKey) {
      try {
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
      } catch {
        // fall through to mailto
      }
    }

    try {
      openMailClient();
    } catch (err) {
      setError(
        "Couldn't open your email client. Please email " + site.email + ' directly.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        // FIX 2: `fixed inset-0` covers the entire **viewport** regardless of
        // scroll position. Combined with the body position-fixed scroll lock
        // above, the backdrop always fills the screen and the modal is always
        // centred in the visible area — not at the top of the document.
        //
        // FIX 3: `p-4` gives safe breathing room on narrow phones so the modal
        // never touches screen edges. `items-center justify-center` centres it.
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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

          {/* FIX 3: Modal panel sizing for mobile.
              - `w-full` fills the padded area.
              - `max-w-2xl` (not max-w-3xl) is narrower so it doesn't feel
                zoomed on mid-size phones.
              - `max-h-[85vh]` (reduced from 90vh) leaves a visible gap top
                and bottom, making it obvious it's a floating modal.
              - `overflow-y-auto` lets the form scroll internally rather than
                the modal growing off-screen.
              - `my-auto` ensures vertical centering inside the flex container
                even if the modal is shorter than the viewport. */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-card-gradient border border-gold-500/20 shadow-gold"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 grid place-items-center h-9 w-9 rounded-full bg-bg/70 border border-white/10 text-ink hover:text-gold-400 hover:border-gold-500/40 transition-colors z-10"
            >
              <X size={18} />
            </button>

            {/* FIX 3: On mobile the two-column grid stacks vertically
                (the gold rail becomes a top header, form below).
                `md:grid-cols-5` kicks in at ≥768px only. */}
            <div className="grid md:grid-cols-5">
              {/* Left rail — quick contact info */}
              {/* FIX 3: reduced padding on mobile (p-5 instead of p-6/p-8)
                  so the rail doesn't eat too much vertical space when stacked */}
              <aside className="md:col-span-2 p-5 md:p-8 bg-gold-gradient text-bg rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <h3 id="contact-title" className="text-xl md:text-2xl font-display font-bold">
                  {contact.title}
                </h3>
                <p className="mt-1.5 text-sm text-bg/80 leading-relaxed">
                  {contact.subtitle}
                </p>

                {/* FIX 3: on mobile, show contact details in a 2-col grid
                    rather than a long vertical list to save vertical space */}
                <div className="mt-5 md:mt-8 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4 text-sm">
                  <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
                  <ContactRow icon={Phone} label="Phone" value={site.phone} href={`tel:${site.phone.replace(/\s/g, '')}`} />
                  <ContactRow icon={MapPin} label="Location" value={site.address} />
                </div>

                <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-bg/20 text-xs text-bg/80">
                  SEBI Registered Research Analyst
                  <div className="font-bold mt-0.5 text-bg">{site.sebiRegNo}</div>
                </div>
              </aside>

              {/* Right — form / success */}
              {/* FIX 3: reduced padding on mobile */}
              <div className="md:col-span-3 p-5 md:p-8">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8 md:py-12">
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
                            rows={3}
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
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-widest font-bold text-bg/70">
          {label}
        </div>
        {/* FIX 3: break-all prevents long email/phone strings from overflowing
            the contact rail on narrow screens */}
        <div className="font-semibold text-bg break-all text-sm leading-snug">{value}</div>
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