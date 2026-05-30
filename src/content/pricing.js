// Pricing section — subscription tiers.
//
// Fields:
// - price          : the actual price the customer pays
// - originalPrice  : (optional) shown struck-through next to price to imply discount
// - savings        : (optional) small badge below the price ("You save ₹X with this plan")
// - cadence        : e.g. "/month", "/3 months"
// - highlighted    : marks the recommended plan (yellow card)
// - features       : optional bullet list; leave empty to hide the bullets entirely

export const pricing = {
  eyebrow: 'Subscription Plans',
  heading: 'Choose the plan that fits your style',
  subheading:
    'All plans are SEBI compliant. Fees are inclusive of GST. Annual fee per family is capped at ₹1,51,000 as per SEBI guidelines.',
  plans: [
    {
      name: 'Monthly',
      price: '₹2,990',
      cadence: '/month',
      description: 'Best to get started and experience the research process.',
      features: [],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Quarterly',
      price: '₹7,990',
      originalPrice: '₹8,970',
      savings: 'You save ₹980 with this plan',
      cadence: '/3 months',
      description: 'Most popular — best value with quarterly commitment.',
      features: [],
      cta: 'Get Started',
      highlighted: true,
      badge: 'Recommended',
    },
    {
      name: 'Half-Yearly',
      price: '₹14,990',
      originalPrice: '₹17,940',
      savings: 'You save ₹2,950 with this plan',
      cadence: '/6 months',
      description: 'For committed traders who want sustained guidance.',
      features: [],
      cta: 'Get Started',
      highlighted: false,
    },
  ],
  footnote:
    'Statutory charges (GST) extra where applicable. Fee limits do not apply to non-individual clients.',
};
