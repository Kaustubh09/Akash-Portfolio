// Compliance Data — content mirrors the SEBI-mandated disclosures verbatim
// from the reference site. Update only with legal review.

export const compliance = {
  eyebrow: 'Regulatory',
  heading: 'Compliance Data',
  subheading:
    'Full SEBI-mandated disclosures, terms, and grievance redressal mechanisms — published in line with SEBI Research Analyst Regulations, 2014.',

  investorCharter: {
    title: 'Investor Charter',
    vision: 'Invest with knowledge & safety.',
    mission:
      'Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.',
    rights: [
      'Right to fair and equitable treatment.',
      'Right to receive copy of registration certificate of Research Analyst.',
      'Right to receive complete information about the services rendered.',
      'Right to receive recommendations only after entering into an agreement with the Research Analyst.',
      'Right to receive research reports with material disclosures, including the analyst’s holdings and financial interest.',
      'Right to seek clarifications on the recommendations and reports issued.',
      'Right to confidentiality — personal information not to be shared without consent.',
      'Right to grievance redressal as per the timelines prescribed by SEBI.',
    ],
  },

  grievance: {
    title: 'Grievance Redressal Mechanism',
    steps: [
      {
        step: 'Step 1',
        title: 'Contact the Research Analyst directly',
        body:
          'Email the analyst at the registered email ID or call the registered phone number. The Research Analyst shall endeavour to resolve the complaint within 21 calendar days of receipt.',
      },
      {
        step: 'Step 2',
        title: 'SEBI SCORES Platform',
        body:
          'If the complaint is not resolved within the timeline or the resolution is unsatisfactory, lodge the complaint on SEBI SCORES at scores.sebi.gov.in. SCORES provides a two-level review mechanism.',
      },
      {
        step: 'Step 3',
        title: 'Online Dispute Resolution (Smart ODR)',
        body:
          'If still unresolved, you may seek resolution through the Online Dispute Resolution portal at smartodr.in for conciliation and/or arbitration.',
      },
    ],
    helpline: 'SEBI Toll-Free Helpline: 1800 22 7575 / 1800 266 7575',
  },

  disclaimer: {
    title: 'Disclaimer',
    points: [
      'Investments in securities market are subject to market risks. Read all the related documents carefully before investing.',
      'Registration granted by SEBI and certification from NISM in no way guarantee performance of the Research Analyst or provide any assurance of returns to investors.',
      'No guaranteed/assured returns, profit-sharing or principal-protection schemes are offered.',
      'Past performance is not indicative of future results.',
      'Recommendations are based on technical and/or fundamental analysis and should not be treated as personalised investment advice. Investors are advised to consult their financial advisor before acting on any recommendation.',
      'The Research Analyst has no material conflict of interest with respect to the recommendations made.',
    ],
  },

  disclosure: {
    title: 'Disclosure',
    points: [
      'The Research Analyst is duly registered with SEBI under the SEBI (Research Analysts) Regulations, 2014 vide registration number INH000027450.',
      'The Research Analyst or its associates do not have any financial interest, actual or beneficial ownership of 1% or more, in the subject company at the time of publication of the research report.',
      'The Research Analyst has not received any compensation from the subject company in the past twelve months.',
      'The Research Analyst has not served as an officer, director or employee of the subject company.',
      'The Research Analyst has not been engaged in market making activity for the subject company.',
      'There is no disciplinary history against the Research Analyst — no penalties or directions have been issued by SEBI.',
    ],
  },

  terms: {
    title: 'Standard Terms & Conditions',
    points: [
      'The Research Analyst is not permitted to execute or carry out any trade (purchase / sale transaction) on behalf of the client. Hence advised not to permit Research Analyst to execute any trade on your behalf.',
      'The fee charged by the Research Analyst to the client will be subject to the maximum amount prescribed by SEBI / Research Analyst Administration and Supervisory Body (RAASB) from time to time.',
      'The current fee limit prescribed is ₹1,51,000/- per annum per family of client for availing research services. The said fee limit does not include statutory charges.',
      'The fee limits do not apply to a non-individual client / accredited investor.',
      'Research Analyst shall obtain Annual Audit Report from a qualified Chartered Accountant and submit the same to RAASB.',
      'Research Analyst shall not accept any consideration in the form of cash. All payments shall be received through banking channels only.',
      'Advance fees collected shall not exceed the period stipulated by SEBI (currently one year).',
      'The Research Analyst shall not offer / advertise any indicative or guaranteed / assured returns to clients.',
    ],
  },

  internalPolicy: {
    title: 'Internal Policies',
    points: [
      'Refund Policy: Fees once paid are strictly non-refundable, except in cases of suspension or cancellation of SEBI registration.',
      'Fee-Back Assurance: 10 days for 1-month plans, 25 days for 6-month plans, and 45 days for 1-year plans. Fee-back is available only if no recommendation has been availed by the client.',
      'DND Protocol: Clients who have registered for DND must deregister or whitelist communications to receive SMS-based research delivery.',
      'Data Privacy: Client information is treated as strictly confidential and not shared with any third party without prior written consent, except as required by law.',
    ],
  },

  complaintsTable: {
    title: 'Complaints Status',
    period: 'Data of the Month Ending — November 2025',
    columns: [
      'S.No.',
      'Received From',
      'Pending at the end of last month',
      'Received',
      'Resolved*',
      'Total Pending #',
      'Pending complaints > 3 months',
      'Average Resolution time^ (in days)',
    ],
    rows: [
      ['1', 'Directly from Investors', '0', '0', '0', '0', '0', '0'],
      ['2', 'SEBI (SCORES)', '0', '0', '0', '0', '0', '0'],
      ['3', 'Other Sources (if any)', '0', '0', '0', '0', '0', '0'],
      ['', 'Grand Total', '0', '0', '0', '0', '0', '0'],
    ],
    notes: [
      '* Inclusive of complaints of previous months resolved in the current month.',
      '# Inclusive of complaints pending as on the last day of the month.',
      '^ Average Resolution time is the sum total of time taken to resolve each complaint in days, in the current month divided by total number of complaints resolved in the current month.',
    ],
  },
};
