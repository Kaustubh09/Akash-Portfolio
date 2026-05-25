import { Mail, Phone, MapPin, Instagram, Twitter, Send, Youtube, ShieldCheck } from 'lucide-react';
import { footer } from '../content/footer';
import { site } from '../content/site';

const iconMap = { Instagram, Twitter, Send, Youtube };

export default function Footer() {
  return (
    <footer className="relative bg-bg-soft border-t border-white/5">
      <div className="section-inner container-px pt-16 pb-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-lg bg-gold-gradient text-bg font-bold">
                AG
              </span>
              <div className="leading-tight">
                <div className="font-display font-bold text-ink">{site.name}</div>
                <div className="text-[11px] uppercase tracking-widest text-gold-400">
                  SEBI Reg • {site.sebiRegNo}
                </div>
              </div>
            </div>
            <p className="text-sm text-ink-muted leading-relaxed max-w-md">
              {footer.about}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {footer.socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center h-10 w-10 rounded-full border border-white/10 bg-bg-elev text-ink-muted hover:text-gold-400 hover:border-gold-500/40 transition-colors"
                  >
                    {Icon ? <Icon size={16} /> : null}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="label mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footer.quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-muted hover:text-gold-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SEBI refs + contact */}
          <div className="md:col-span-4 space-y-6">
            <div>
              <h4 className="label mb-4">SEBI References</h4>
              <ul className="space-y-2.5">
                {footer.sebiRefs.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-muted hover:text-gold-400 transition-colors inline-flex items-center gap-1"
                    >
                      {l.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="label mb-3">Reach Out</h4>
              <ul className="space-y-2 text-sm text-ink-muted">
                <li className="flex items-center gap-2">
                  <Mail size={14} className="text-gold-400" />
                  <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-gold-400" />
                  <a href={`tel:${site.phone}`} className="hover:text-ink">{site.phone}</a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="text-gold-400 mt-1" />
                  <span>{site.address}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Helpline strip */}
        <div className="mt-10 rounded-xl border border-gold-500/20 bg-gold-500/5 px-5 py-3 flex flex-wrap items-center gap-2 text-sm text-gold-300">
          <ShieldCheck size={16} className="text-gold-400" />
          <span className="font-medium">{footer.helpline}</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-dim">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>
            Investments in securities market are subject to market risks. Read all related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
