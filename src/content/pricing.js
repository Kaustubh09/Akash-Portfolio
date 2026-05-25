// Pricing section — subscription tiers.
// `highlighted: true` marks the recommended plan (yellow card).

export const pricing = {
  eyebrow: 'Subscription Plans',
  heading: 'Choose the plan that fits your trading style',
  subheading:
    'All plans are SEBI compliant. Fees are inclusive of GST. Annual fee per family is capped at ₹1,51,000 as per SEBI guidelines.',
  plans: [
    {
      name: 'Monthly',
      price: '₹2,990',
      cadence: '/month',
      description: 'Best to get started and experience the research process.',
      features: [
        '1–2 intraday index/option calls',
        '2–3 intraday equity ideas',
        '1–2 swing trade recommendations',
        '1–2 futures index/option calls',
        'Telegram channel access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Quarterly',
      price: '₹7,990',
      cadence: '/3 months',
      description: 'Most popular — full access with a meaningful trading runway.',
      features: [
        'Everything in Monthly',
        'Priority signal delivery',
        'Weekly market outlook session',
        'Trade journal review',
        'Direct query support',
      ],
      cta: 'Get Started',
      highlighted: true,
      badge: 'Recommended',
    },
    {
      name: 'Half-Yearly',
      price: '₹14,990',
      cadence: '/6 months',
      description: 'For committed traders who want sustained guidance.',
      features: [
        'Everything in Quarterly',
        '1-on-1 onboarding call',
        'Monthly portfolio review',
        'Educational webinar access',
        'Private community access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
  ],
  footnote:
    'Statutory charges (GST) extra where applicable. Fee limits do not apply to non-individual clients.',
};
