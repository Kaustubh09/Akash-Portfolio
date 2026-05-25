import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, AlertTriangle, Info, Scroll, ShieldCheck, Building2 } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { compliance } from '../content/compliance';

// Section is structured as a tabbed/accordion explorer.
// All copy is sourced verbatim from content/compliance.js — do not edit text here.

const tabs = [
  { id: 'charter', label: 'Investor Charter', icon: ShieldCheck },
  { id: 'grievance', label: 'Grievance Redressal', icon: AlertTriangle },
  { id: 'disclaimer', label: 'Disclaimer', icon: Info },
  { id: 'disclosure', label: 'Disclosure', icon: FileText },
  { id: 'terms', label: 'Terms & Conditions', icon: Scroll },
  { id: 'policy', label: 'Internal Policies', icon: Building2 },
];

export default function Compliance() {
  const [active, setActive] = useState('charter');

  return (
    <section id="compliance" className="section bg-bg-soft/40">
      <div className="section-inner">
        <SectionHeader
          eyebrow={compliance.eyebrow}
          heading={compliance.heading}
          subheading={compliance.subheading}
        />

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Tabs — desktop sidebar, mobile horizontal scroll */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {tabs.map((t) => {
                  const Icon = t.icon;
                  const isActive = active === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium whitespace-nowrap transition-all border ${
                        isActive
                          ? 'bg-gold-500/10 text-gold-300 border-gold-500/40'
                          : 'bg-card-gradient text-ink-muted border-white/5 hover:text-ink hover:border-white/10'
                      }`}
                    >
                      <Icon size={16} className={isActive ? 'text-gold-400' : ''} />
                      <span className="text-left">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Active tab content */}
          <div className="lg:col-span-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="card p-6 md:p-8"
            >
              {active === 'charter' && <CharterPanel data={compliance.investorCharter} />}
              {active === 'grievance' && <GrievancePanel data={compliance.grievance} />}
              {active === 'disclaimer' && (
                <BulletPanel title={compliance.disclaimer.title} points={compliance.disclaimer.points} />
              )}
              {active === 'disclosure' && (
                <BulletPanel title={compliance.disclosure.title} points={compliance.disclosure.points} />
              )}
              {active === 'terms' && (
                <BulletPanel title={compliance.terms.title} points={compliance.terms.points} />
              )}
              {active === 'policy' && (
                <BulletPanel title={compliance.internalPolicy.title} points={compliance.internalPolicy.points} />
              )}
            </motion.div>
          </div>
        </div>

        {/* Complaints table */}
        <ComplaintsTable data={compliance.complaintsTable} />
      </div>
    </section>
  );
}

function PanelHeading({ children, sub }) {
  return (
    <div className="mb-5">
      <h3 className="text-xl md:text-2xl font-display font-bold text-ink">{children}</h3>
      {sub && <p className="mt-1 text-sm text-ink-muted">{sub}</p>}
      <div className="divider-gold mt-4" />
    </div>
  );
}

function CharterPanel({ data }) {
  return (
    <div>
      <PanelHeading>{data.title}</PanelHeading>
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Callout label="Vision" text={data.vision} accent />
        <Callout label="Mission" text={data.mission} />
      </div>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-400 mb-3">
        Rights of Investors
      </h4>
      <ul className="space-y-2.5">
        {data.rights.map((r, i) => (
          <li key={i} className="flex gap-3 text-sm md:text-base text-ink-muted leading-relaxed">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GrievancePanel({ data }) {
  return (
    <div>
      <PanelHeading>{data.title}</PanelHeading>
      <ol className="space-y-4">
        {data.steps.map((s, i) => (
          <li key={i} className="relative pl-12">
            <span className="absolute left-0 top-0 grid place-items-center h-9 w-9 rounded-full bg-gold-gradient text-bg font-bold text-sm shadow-gold-sm">
              {i + 1}
            </span>
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">{s.step}</div>
            <div className="mt-0.5 text-lg font-display font-semibold text-ink">{s.title}</div>
            <p className="mt-1 text-sm md:text-base text-ink-muted leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-6 rounded-lg border border-gold-500/30 bg-gold-500/5 px-4 py-3 text-sm text-gold-300">
        {data.helpline}
      </div>
    </div>
  );
}

function BulletPanel({ title, points }) {
  return (
    <div>
      <PanelHeading>{title}</PanelHeading>
      <ul className="space-y-3">
        {points.map((p, i) => (
          <li key={i} className="flex gap-3 text-sm md:text-base text-ink-muted leading-relaxed">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Callout({ label, text, accent = false }) {
  return (
    <div
      className={`rounded-xl p-4 ${
        accent ? 'bg-gold-gradient text-bg' : 'bg-bg-elev border border-white/5 text-ink'
      }`}
    >
      <div className={`text-[11px] uppercase tracking-widest font-bold ${accent ? 'text-bg/70' : 'text-gold-400'}`}>
        {label}
      </div>
      <p className={`mt-1 text-base md:text-lg font-display font-semibold leading-snug ${
        accent ? 'text-bg' : 'text-ink'
      }`}>
        {text}
      </p>
    </div>
  );
}

function ComplaintsTable({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mt-14 card p-6 md:p-8"
    >
      <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
        <div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-ink">
            {data.title}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{data.period}</p>
        </div>
        <div className="divider-gold" />
      </div>

      <div className="overflow-x-auto -mx-2 px-2">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              {data.columns.map((col) => (
                <th
                  key={col}
                  className="bg-bg-elev border-b border-gold-500/30 text-left text-xs uppercase tracking-widest text-gold-400 font-semibold px-3 py-3 whitespace-normal"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, ri) => {
              const isTotal = row[1] === 'Grand Total';
              return (
                <tr key={ri} className={isTotal ? 'bg-gold-500/[0.04] font-semibold' : ''}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-3 border-b border-white/5 ${
                        isTotal ? 'text-gold-300' : 'text-ink'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ul className="mt-5 space-y-1 text-xs text-ink-dim">
        {data.notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </motion.div>
  );
}
