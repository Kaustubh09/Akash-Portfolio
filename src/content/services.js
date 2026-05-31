// Services section — the three pillars of the practice.
// Icons map to lucide-react names; rendered by the Services component.

export const services = {
  eyebrow: 'What I Offer',
  heading: 'One Membership. Multiple Benefits.',
  subheading:
    'Subscribe to my SEBI-registered RA service. Educational resources and Investor Learning are included complimentary.',
  items: [
    {
      icon: 'TrendingUp',
      title: 'Equity Calls',
      description:
        'Get well researched calls',
      features: [
        'Intraday',
        'Swing',
        'Long Term Investing',
        'Multibagger',
        { text: 'F&O calls', strike: true },
      ],
    },
    {
      icon: 'GraduationCap',
      title: 'Free Education',
      description:
        'Lean every concept for basic to advanced',
      features: ['Stock Market', 'Mutual Funds', 'Investing & Trading', 'Future & Option Trading (F&O)', 'Risk Management', 'Psychology', 'many more...'],
    },
    {
      icon: 'MessageCircleQuestion',
      title: 'Free Q&A + Responsive Support',
      description:
        'Always ready to answer your questions',
      features: ['Biweekly Q&A session ', 'Available on whatsapp for quick communication'],
    },
  ],
};
