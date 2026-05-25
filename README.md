# Akash Garg — SEBI Registered Research Analyst

A modern, responsive single-page site for Akash Garg's research analyst practice. Built as a content-driven React app so copy, plans, and compliance disclosures can be updated without touching component code.

## Stack

- **Vite + React 18**
- **Tailwind CSS** (custom black/gold theme)
- **Framer Motion** (subtle scroll & reveal animations)
- **Lucide React** (icon set)

## Getting started

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the built bundle
```

## Project structure

```
src/
├── App.jsx                # Section composition + modal state
├── main.jsx               # React entry
├── components/            # Presentational components — all read from /content
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Pricing.jsx
│   ├── Compliance.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── ContactModal.jsx
│   ├── FloatingContactButton.jsx
│   └── ui/SectionHeader.jsx
├── content/               # 🔑 All copy lives here — edit these to change the site
│   ├── site.js            # Name, SEBI reg, contact, portrait path
│   ├── nav.js             # Top nav links
│   ├── hero.js
│   ├── about.js
│   ├── services.js        # Swing / Intraday / Education
│   ├── pricing.js         # Subscription tiers
│   ├── compliance.js      # SEBI disclosures (Charter, Grievance, etc.)
│   ├── faq.js
│   ├── footer.js
│   └── contact.js         # Modal copy + form fields
├── hooks/useScrollSpy.js
└── styles/index.css       # Tailwind layers + component classes
```

## Editing content

All text, plan pricing, disclosures, and contact details live in `src/content/`. To update the site copy, edit the relevant file — no component changes needed.

### Replace the portrait

Drop a photo at `public/akash.jpg`. If absent, the hero gracefully falls back to an "AG" monogram inside the gold ring.

### Update SEBI / contact details

Edit `src/content/site.js`:
```js
export const site = {
  name: 'Akash Garg',
  sebiRegNo: 'INH000027450',
  email: 'akashgarg@example.com',
  phone: '+91 99999 99999',
  // ...
};
```

### Add or change a pricing tier

Edit `src/content/pricing.js` and add/remove plan objects. Set `highlighted: true` to render a plan in the yellow recommended style.

## Design tokens

Defined in `tailwind.config.js`:
- `bg` — dark base palette (#0a0a0a → #1c1c1c)
- `gold` — primary accent (50 → 900)
- `ink` — text scale (default / muted / dim)
- Font: **Plus Jakarta Sans** (display) + **Inter** (body)

## Notes

- Contact modal **does not auto-open**. It only opens via the floating blue "Get in Touch" button, the navbar CTA, or any service / pricing CTA.
- No ticker / nifty scrollbar by design.
- All section IDs (`#home`, `#about`, `#services`, `#pricing`, `#compliance`, `#faq`) are referenced from `content/nav.js` — keep them in sync if renamed.
- Form submission currently simulates success — wire `ContactModal.jsx → handleSubmit` to Formspree / Resend / your backend.
