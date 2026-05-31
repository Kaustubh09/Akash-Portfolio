import { useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  AlertTriangle,
  Info,
  Scroll,
  ShieldCheck,
  Building2,
  Lock,
  RotateCcw,
} from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { compliance } from '../content/compliance';

// All copy is sourced verbatim from content/compliance.js. Do not edit text
// here. The component is a pure renderer for the structured data.

const tabs = [
  { id: 'charter', label: 'Investor Charter', icon: ShieldCheck },
  { id: 'grievance', label: 'Grievance Redressal', icon: AlertTriangle },
  { id: 'terms', label: 'Terms & Conditions', icon: Scroll },
  { id: 'disclaimer', label: 'Disclaimer', icon: Info },
  { id: 'disclosure', label: 'Disclosures', icon: FileText },
  { id: 'privacy', label: 'Privacy Policy', icon: Lock },
  { id: 'refund', label: 'Refund & Fee-Back', icon: RotateCcw },
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
          {/* Tabs — sidebar on desktop, horizontal scroll on mobile/tablet */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-1 px-1">
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

          {/* Active panel */}
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
              {active === 'terms' && <RichPanel data={compliance.terms} />}
              {active === 'disclaimer' && <DisclaimerPanel data={compliance.disclaimer} />}
              {active === 'disclosure' && <RichPanel data={compliance.disclosure} />}
              {active === 'privacy' && <RichPanel data={compliance.privacyPolicy} />}
              {active === 'refund' && <RichPanel data={compliance.refundPolicy} />}
            </motion.div>
          </div>
        </div>

        {/* Complaints data */}
        <ComplaintsTable data={compliance.complaintsTable} />
      </div>
    </section>
  );
}

// ============================================================================
// Shared building blocks
// ============================================================================

function PanelHeading({ children, sub }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-display font-bold text-ink">{children}</h3>
      {sub && <p className="mt-1 text-sm text-ink-muted">{sub}</p>}
      <div className="divider-gold mt-4" />
    </div>
  );
}

function SubHeading({ children }) {
  return (
    <h4 className="text-base md:text-lg font-display font-semibold text-gold-300 mb-3">
      {children}
    </h4>
  );
}

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-2.5">
      {items.map((p, i) => (
        <li key={i} className="flex gap-3 text-sm md:text-base text-ink-muted leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

function BodyText({ children }) {
  return (
    <p className="text-sm md:text-base text-ink-muted leading-relaxed">
      {children}
    </p>
  );
}

// Generic section renderer — handles `body`, `bullets`, `subSections`, and
// the special `visionMission` block (rendered as plain labeled text, no boxes,
// to match the reference Investor Charter section A).
function Section({ section }) {
  return (
    <div className="space-y-3">
      {section.heading && <SubHeading>{section.heading}</SubHeading>}

      {section.visionMission && (
        <div className="space-y-4 pl-1">
          <VisionMissionEntry label="Vision" text={section.visionMission.vision} />
          <VisionMissionEntry label="Mission" text={section.visionMission.mission} />
        </div>
      )}

      {section.body && <BodyText>{section.body}</BodyText>}
      {section.bullets && <BulletList items={section.bullets} />}
      {section.subSections?.map((sub, i) => (
        <div key={i} className="mt-4 rounded-lg border border-white/5 bg-bg-elev/50 p-4 space-y-2">
          {sub.heading && (
            <h5 className="text-sm font-semibold uppercase tracking-widest text-gold-400">
              {sub.heading}
            </h5>
          )}
          {sub.body && <BodyText>{sub.body}</BodyText>}
          {sub.bullets && <BulletList items={sub.bullets} />}
        </div>
      ))}
    </div>
  );
}

function VisionMissionEntry({ label, text }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-gold-400 mb-1">
        {label}
      </div>
      <p className="text-sm md:text-base text-ink-muted leading-relaxed">{text}</p>
    </div>
  );
}

// ============================================================================
// Specific panels
// ============================================================================

function CharterPanel({ data }) {
  return (
    <div>
      <PanelHeading>{data.title}</PanelHeading>

      {/* "INVESTOR CHARTER IN RESPECT OF RAS" — sits between the title and
          the lettered sections, matching the reference site's layout. */}
      {data.subheading && (
        <div className="mb-8 inline-flex items-center rounded-md bg-gold-500/10 border border-gold-500/30 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">
          {data.subheading}
        </div>
      )}

      <div className="space-y-8">
        {data.sections.map((s, i) => (
          <Section key={i} section={s} />
        ))}
      </div>
    </div>
  );
}

function GrievancePanel({ data }) {
  return (
    <div>
      <PanelHeading sub={data.intro}>{data.title}</PanelHeading>

      {/* Escalation matrix */}
      <div className="overflow-x-auto -mx-2 px-2 mb-8">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              {data.matrixColumns.map((c) => (
                <th
                  key={c}
                  className="bg-bg-elev border-b border-gold-500/30 text-left text-[10px] uppercase tracking-widest text-gold-400 font-semibold px-3 py-3 whitespace-normal"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.matrixRows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="px-3 py-3 border-b border-white/5 text-ink-muted text-xs md:text-sm align-top"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Steps */}
      <h4 className="text-sm font-bold uppercase tracking-widest text-gold-400 mb-4">
        {data.stepsHeading}
      </h4>
      <ol className="space-y-4">
        {data.steps.map((s, i) => (
          <li key={i} className="relative pl-12">
            <span className="absolute left-0 top-0 grid place-items-center h-9 w-9 rounded-full bg-gold-gradient text-bg font-bold text-sm shadow-gold-sm">
              {i + 1}
            </span>
            <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
              {s.step}
            </div>
            <div className="mt-0.5 text-lg font-display font-semibold text-ink">{s.title}</div>
            <p className="mt-1 text-sm md:text-base text-ink-muted leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>

      {data.notes?.length > 0 && (
        <ul className="mt-6 space-y-1 text-xs text-ink-dim italic">
          {data.notes.map((n, i) => (
            <li key={i}>• {n}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function DisclaimerPanel({ data }) {
  return (
    <div>
      <PanelHeading sub={data.intro}>{data.title}</PanelHeading>
      <ol className="space-y-3 list-decimal list-outside pl-5 marker:text-gold-400 marker:font-semibold">
        {data.points.map((p, i) => (
          <li key={i} className="text-sm md:text-base text-ink-muted leading-relaxed pl-1">
            {p}
          </li>
        ))}
      </ol>
    </div>
  );
}

// Generic panel for sections with a `sections[]` array (terms, disclosure,
// privacy, refund). Handles body, bullets and nested sub-sections.
function RichPanel({ data }) {
  return (
    <div>
      <PanelHeading sub={data.subtitle}>{data.title}</PanelHeading>
      <div className="space-y-7">
        {data.sections.map((s, i) => (
          <Section key={i} section={s} />
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Complaints table block (lives outside the tab panel)
// ============================================================================

function ComplaintsTable({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="mt-14 card p-6 md:p-8 space-y-10"
    >
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-ink">
              {data.title}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">{data.period}</p>
          </div>
          <div className="divider-gold" />
        </div>

        {/* Monthly table */}
        <div className="mt-5 overflow-x-auto -mx-2 px-2">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                {data.columns.map((col) => (
                  <th
                    key={col}
                    className="bg-bg-elev border-b border-gold-500/30 text-left text-[10px] uppercase tracking-widest text-gold-400 font-semibold px-3 py-3 whitespace-normal"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, ri) => {
                const isTotal = row[0] === 'Grand Total';
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

        {data.notes?.length > 0 && (
          <ul className="mt-4 space-y-1 text-xs text-ink-dim">
            {data.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Trend table */}
      {data.trend && <ExtraTable data={data.trend} />}
      {/* Annual table */}
      {data.annual && <ExtraTable data={data.annual} />}
    </motion.div>
  );
}

function ExtraTable({ data }) {
  const isEmpty = !data.rows || data.rows.length === 0;
  return (
    <div>
      <h4 className="text-base md:text-lg font-display font-bold text-ink">{data.title}</h4>
      <div className="divider-gold mt-3 mb-4" />
      <div className="overflow-x-auto -mx-2 px-2">
        <table className="min-w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr>
              {data.columns.map((col) => (
                <th
                  key={col}
                  className="bg-bg-elev border-b border-gold-500/30 text-left text-[10px] uppercase tracking-widest text-gold-400 font-semibold px-3 py-3 whitespace-normal"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {isEmpty ? (
              <tr>
                <td
                  colSpan={data.columns.length}
                  className="px-3 py-6 text-center text-sm text-ink-dim italic border-b border-white/5"
                >
                  {data.emptyMessage || 'No data to disclose.'}
                </td>
              </tr>
            ) : (
              data.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-3 border-b border-white/5 text-ink">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
