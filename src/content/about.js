// About section content — credentials, philosophy, vision/mission.
//
// `highlights[].available: false` → render a red X instead of a green check,

export const about = {
  eyebrow: 'About Me',
  heading: "Risk isn't dangerous when it's calculated and researched",
  intro:
    "I am a SEBI Registered Research Analyst (INH000027450) with expertise in finance, stock markets, and F&O trading. My mission is to provide research-backed intraday, swing, and long-term equity market calls, supported by detailed analysis and disciplined risk management. Every call is based on data, in-depth research, and a commitment to delivering quality insights to investors and traders.",
  paragraphs: [
    "I started my stock market journey at the age of 22 while pursuing my engineering studies in Germany. From the beginning, I believed that success in the markets comes from knowledge, discipline, and continuous learning. I understand that many people do not have the time to study the markets in depth. In such cases, always seek guidance from SEBI-registered research analysts and avoid unauthorized tips or promises of guaranteed returns. The market offers opportunities, but it also requires caution and proper risk management. My philosophy is simple: learn continuously, make informed decisions, and focus on protecting capital while building long-term wealth.",
    "It is important to remember that no one in the financial markets can guarantee fixed or risk-free returns. I do not promise guaranteed returns. What I offer is a transparent, SEBI compliant framework.",
  ],
  highlights: [
    { title: 'SEBI Registered (INH000027450)' },
    { title: 'NISM XV Certified' },
    { title: 'German Graduate' },
    { title: 'Equity Calls' },
    { title: 'F&O Calls', available: true  },
  ],
  // Personal message card.
  //   title         → main heading on the yellow strip
  //   quote         → pull-quote in large display font (acts as the hook)
  //   body          → supporting paragraphs (string or string[])
  //   signature     → name shown under the body (with AG monogram)
  //   signatureRole → small caption under the signature
  message: {
    title: 'My Message to Youth & Beginners',
    quote: 'Never be afraid of taking calculated risks at a young age.',
    body: [
      "This is the best phase of life to learn, explore, and build your future with knowledge and discipline.",
      "In the stock market, experience matters. Learning from experienced guidance saves you from years of mistakes, emotional decisions, and unnecessary losses.",
    ],
    signature: 'Akash Garg',
    signatureRole: 'SEBI Registered Research Analyst (INH000027450)',
  },
};
