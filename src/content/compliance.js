// Compliance Data — verbatim from the SEBI-mandated disclosures published on
// viveklochansharma.in, adapted only where the analyst's identity references
// (name, SEBI reg number, contact details, address) appear. Update only with
// legal/CA review.
//
// All identity-dependent strings are sourced from `site.js` so a single edit
// there cascades through every disclosure.

import { site } from './site';

const NAME = site.name;
const SEBI_REG = site.sebiRegNo;
const EMAIL = site.email;
const PHONE = site.phone;
const ADDRESS = site.address;

export const compliance = {
  eyebrow: 'Regulatory',
  heading: 'Compliance Data',
  subheading:
    'Full SEBI-mandated disclosures, terms, policies and grievance redressal mechanisms — published in line with SEBI (Research Analysts) Regulations, 2014.',

  // -----------------------------------------------------------------------
  // 1. INVESTOR CHARTER
  // -----------------------------------------------------------------------
  investorCharter: {
    title: 'Investor Charter',
    subheading: 'INVESTOR CHARTER IN RESPECT OF RAS',
    // Sequence follows the reference Investor Charter format verbatim:
    //   A. Vision & Mission Statements
    //   B. Details of business transacted
    //   C. Services (no indicative timelines)
    //   D. Grievance redressal mechanism
    //   E. Rights of investors
    //   F. Expectations from investors
    sections: [
      {
        heading: 'A. Vision and Mission Statements for investors',
        // Special section — vision and mission render as plain labeled text
        // (no callout boxes), exactly as on the reference site.
        visionMission: {
          vision: 'Invest with knowledge & safety.',
          mission:
            'Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.',
        },
      },
      {
        heading:
          'B. Details of business transacted by the Research Analyst with respect to the investors',
        bullets: [
          'To publish research report based on the research activities of the RA',
          'To provide an independent unbiased view on securities.',
          'To offer unbiased recommendation, disclosing the financial interests in recommended securities.',
          'To provide research recommendation, based on analysis of publicly available information and known observations.',
          'To conduct audit annually',
          'To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.',
          'To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.',
        ],
      },
      {
        heading: 'C. Details of services provided to investors (No Indicative Timelines)',
        subSections: [
          {
            heading: 'Onboarding of Clients',
            bullets: [
              'Sharing of terms and conditions of research services',
              'Completing KYC of fee paying clients',
            ],
          },
          {
            heading: 'Disclosure to Clients',
            bullets: [
              'To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any',
              'To disclose the extent of use of Artificial Intelligence tools in providing research services',
              'To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures',
              'To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.',
              'To distribute research reports and recommendations to the clients without discrimination.',
              'To maintain confidentiality w.r.t publication of the research report until made available in the public domain.',
              'To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information',
              'To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines',
              'To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services',
              'To treat all clients with honesty and integrity',
              'To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information.',
            ],
          },
        ],
      },
      {
        heading: 'D. Details of grievance redressal mechanism and how to access it',
        body:
          'Investor can lodge complaint/grievance against Research Analyst in the following ways:',
        subSections: [
          {
            heading: 'Mode of filing the complaint with research analyst',
            body:
              'In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.',
          },
          {
            heading:
              'Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB)',
            bullets: [
              'i. SCORES 2.0 (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) — https://scores.sebi.gov.in. Two level review for complaint/grievance against Research Analyst: First review done by designated body (RAASB); Second review done by SEBI.',
              'ii. Email to designated email ID of RAASB.',
              'If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/grievance on SMARTODR platform for its resolution through online conciliation or arbitration.',
            ],
          },
          {
            heading: 'Physical complaints — postal address',
            body:
              "Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, 'G' Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.",
          },
        ],
      },
      {
        heading: 'E. Rights of investors',
        bullets: [
          'Right to Privacy and Confidentiality',
          'Right to Transparent Practices',
          'Right to fair and Equitable Treatment',
          'Right to Adequate Information',
          'Right to Initial and Continuing Disclosure — Right to receive information about all the statutory and regulatory disclosures',
          'Right to Fair & True Advertisement',
          'Right to Awareness about Service Parameters and Turnaround Times',
          'Right to be informed of the timelines for each service',
          'Right to be Heard and Satisfactory Grievance Redressal',
          'Right to have timely redressal',
          'Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst',
          'Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services',
          'Additional Rights to vulnerable consumers — Right to get access to services in a suitable manner even if differently abled',
          'Right to provide feedback on the financial products and services used',
          'Right against coercive, unfair, and one-sided clauses in financial agreements',
        ],
      },
      {
        heading: 'F. Expectations from the investors (Responsibilities of investors)',
        subSections: [
          {
            heading: "Do's",
            bullets: [
              'Always deal with SEBI registered Research Analyst.',
              'Ensure that the Research Analyst has a valid registration certificate.',
              'Check for SEBI registration number.',
              'Please refer to the list of all SEBI registered Research Analysts which is available on the SEBI website: https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14',
              'Always pay attention towards disclosures made in the research reports before investing.',
              'Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.',
              'Before buying/selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.',
              'Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.',
              'Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.',
              'Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.',
              'Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.',
              'Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.',
              'Inform SEBI about Research Analyst offering assured or guaranteed returns.',
            ],
          },
          {
            heading: "Don'ts",
            bullets: [
              'Do not provide funds for investment to the Research Analyst.',
              "Don't fall prey to luring advertisements or market rumors.",
              'Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.',
              'Do not share login credential and password of your trading, demat or bank accounts with the Research Analyst.',
            ],
          },
        ],
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. GRIEVANCE REDRESSAL POLICY
  // -----------------------------------------------------------------------
  grievance: {
    title: 'Grievance Redressal Policy',
    intro: 'Grievance Redressal / Escalation Matrix',
    matrixColumns: [
      'Designation',
      'Contact Person Name',
      'Address',
      'Contact No.',
      'Email-ID',
      'Working hours',
    ],
    matrixRows: [
      [
        'Customer Care / Head of Customer Care / Compliance Officer',
        NAME,
        ADDRESS,
        PHONE,
        EMAIL,
        '10:00 AM – 5:30 PM',
      ],
      [
        'CEO / Principal Officer',
        NAME,
        ADDRESS,
        PHONE,
        EMAIL,
        '10:00 AM – 5:30 PM',
      ],
    ],
    stepsHeading: 'For any grievances,',
    steps: [
      {
        step: 'Step 1',
        title: 'Contact the Research Analyst',
        body: `The client should first contact the RA using the details on the website or the following contact details: ${NAME}, Research Analyst — ${EMAIL} / ${PHONE}.`,
      },
      {
        step: 'Step 2',
        title: 'Escalate via SEBI SCORES',
        body:
          "If the resolution is unsatisfactory, the client can also lodge grievances through SEBI's SCORES platform at https://scores.sebi.gov.in",
      },
      {
        step: 'Step 3',
        title: 'Online Dispute Resolution (Smart ODR)',
        body:
          'The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at https://smartodr.in',
      },
    ],
    notes: [
      'The above table is displayed in the office as well as on the website.',
      'For an individual RA, the Research Analyst is the Compliance Officer and Principal Officer.',
    ],
  },

  // -----------------------------------------------------------------------
  // 3. STANDARD TERMS & CONDITIONS (MITC + Disclosures)
  // -----------------------------------------------------------------------
  terms: {
    title: 'Standard Terms & Conditions',
    subtitle: `Research Analyst — MITC (SEBI Registration No. ${SEBI_REG})`,
    sections: [
      {
        heading: 'Disciplinary history',
        body:
          'No penalties / directions have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services. There are no pending material litigations or legal proceedings, findings of inspections or investigations for which action has been taken or initiated by any regulatory authority against the Research Analyst or its employees.',
      },
      {
        heading: 'Details of associates',
        body: 'No associates.',
      },
      {
        heading: 'Disclosures with respect to Research and Recommendations Services',
        bullets: [
          'Research Analyst may have financial interest or actual / beneficial ownership in the securities recommended in its personal portfolio. Details of the same may be referred through the disclosures made at the time of advice.',
          'There are no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.',
          'Research Analyst or its employee or its associates have not received any compensation from the subject company in past 12 months.',
          'Research Analyst or its employee or its associates have not managed or co-managed the public offering of Subject Company in past 12 months.',
          'Research Analyst or its employee or its associates have not received any compensation for investment banking or merchant banking or brokerage services from the subject company in past 12 months.',
          'Research Analyst or its employee or its associates have not received any compensation for products or services other than above from the subject company in past 12 months.',
          'Research Analyst or its employee or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/recommendation.',
          'The subject company was not a client of Research Analyst or its employee or its associates during twelve months preceding the date of distribution of the research report and recommendation services provided.',
          'Research Analyst or its employee or its associates has not served as an officer, director or employee of the subject company.',
          'Research Analyst has not been engaged in market making activity of the subject company.',
        ],
      },
      {
        heading: 'Most Important Terms and Conditions',
        bullets: [
          'The terms and conditions and the consent thereon are for the research services provided by the RA and the RA cannot execute or carry out any trade (purchase/sell transaction) on behalf of the client. Thus, you are advised not to permit the Research Analyst to execute any trade on your behalf.',
          'The fee charged by the RA to you will be subject to the maximum amount prescribed by SEBI / Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients).',
          'The current fee limit is ₹1,51,000 per annum per family of client for all research services. The fee limit does not include statutory charges. The fee limits do not apply to a non-individual client / accredited investor.',
          'The RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI (presently one year). In case of pre-mature termination of services by either the client or by the RA, the client shall be entitled to seek refund of proportionate fees only for the unexpired period.',
          'Fees may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through the Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (currently recognized RAASB).',
          'Traders/Investors in the services are not being offered any guaranteed/assured returns. Past performance of the services does not indicate/guarantee future performance or return.',
          'The RA never provides services like profit sharing, guaranteed profit, sure shot, jackpot etc. Trading & investments are subject to market risks.',
          'The SEBI registration, enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client.',
        ],
      },
      {
        heading: 'Grievances',
        body: `For any grievances, the client should first contact the RA by using the details: ${PHONE} or write an e-mail at ${EMAIL}. If the resolution is unsatisfactory, the client can lodge grievances through SEBI's SCORES platform at https://scores.sebi.gov.in. The client may also consider Online Dispute Resolution (ODR) through the Smart ODR portal at https://smartodr.in. Clients are required to keep contact details, including email ID and mobile number, updated with the RA at all times. The RA shall never ask for the client's login credentials and OTPs for the client's trading account, demat account or bank account. Never share such information with anyone including the RA.`,
      },
      {
        heading: 'Disclosure regarding use of Artificial Intelligence (AI) tools in Research Services',
        body:
          'In compliance with Regulation 19(vii) and Regulation 24(7) of the SEBI (Research Analyst) Regulations, we hereby declare that no Artificial Intelligence (AI) tools are currently used in the preparation, generation, or distribution of our research services. All research outputs and recommendations are derived through human analysis and traditional research methodologies. Should there be any change in this status, appropriate disclosure will be made in accordance with applicable regulatory requirements.',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. PRIVACY POLICY
  // -----------------------------------------------------------------------
  privacyPolicy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information',
        body:
          'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").',
      },
      {
        heading: 'Information we collect',
        body: 'We may collect various types of information from and about users of our Services, including:',
        bullets: [
          'Personal Information: We may collect personally identifiable information, such as your name, email address, postal address, phone number, and other similar information when you provide it to us voluntarily or when you interact with our Services.',
          'Usage Data: We may collect information about how you use our Services, including your access times, browser types, and language preferences.',
          'Device Information: We may collect information about the device you are using to access our Services, including the hardware model, operating system and version, unique device identifiers, and mobile network information.',
          'Location Information: With your consent, we may collect information about your precise location if your device settings allow us to do so.',
        ],
      },
      {
        heading: 'How we use your information',
        body: 'We may use the information we collect from you for various purposes, including:',
        bullets: [
          'To provide, maintain, and improve our Services.',
          'To personalize our Services.',
          'To respond to your comments, questions, and requests.',
          'To send you technical notices, updates, security alerts, and support and administrative messages.',
          'To communicate with you about products, services, promotions, events, and other news and information we think will be of interest to you.',
          'To monitor and analyze usage patterns, trends, and activities in connection with our Services.',
        ],
      },
      {
        heading: 'Log data',
        body:
          "In addition to the information mentioned above, we collect log data when you interact with our Services. This log data includes your computer's IP address, browser type, browser version, the pages of our Services that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This information is used for analyzing trends, administering the site, tracking users' movements on the site, and gathering demographic information.",
      },
      {
        heading: 'Cookies',
        body:
          "Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. Our Services use cookies and similar technologies. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.",
      },
      {
        heading: 'Security',
        body:
          'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. We employ industry-standard security measures to safeguard your data from unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        heading: 'External links',
        body:
          'Our Site may contain links to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites and cannot accept responsibility or liability for their respective privacy policies. We encourage you to review the privacy policies of these external sites before providing them with any personal information.',
      },
      {
        heading: 'Changes',
        body:
          'This Privacy Policy will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.',
      },
      {
        heading: 'Contact us',
        body: `If you have any questions about this Privacy Policy, please contact us at ${EMAIL}.`,
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. DISCLAIMER
  // -----------------------------------------------------------------------
  disclaimer: {
    title: 'Disclaimer',
    intro: `Disclaimer — ${NAME} — SEBI Registered Research Analyst — Reg. No. ${SEBI_REG}`,
    points: [
      'Investments in the securities market are subject to market risks. Read all the security-related documents carefully before investing.',
      'Registration granted by SEBI, membership of a SEBI recognized supervisory body (if any), enlistment with RAASB/BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.',
      'Subscription paid for research recommendations is non-refundable unless our registration is suspended or canceled by SEBI.',
      'There are no guaranteed returns or profits or fixed returns in the stock market.',
      'Our fees/subscription charges are fixed and we do not operate on any profit-sharing model.',
      'We do not manage your funds. You have to take entries and exits in your own account.',
      'There is no inducement. We are not responsible for any financial loss or any other loss incurred by the client.',
      'Invest/Trade only as per your risk appetite and risk profile.',
      'Past performances and results are no guarantee of future performance. Market and stock performance may vary based on various factors and risks.',
      'All recommendations shared are confidential and for the reference of paid members only. Any unapproved distribution of sensitive data will be considered as a breach of confidentiality and appropriate legal action shall be initiated.',
      'The recommendations must not be used as a singular basis for any investment decision. The views do not consider the risk appetite or the circumstances of an individual investor; readers are requested to take professional advice before investing and trading. Our recommendations should not be construed as investment advice.',
      'Our recommendations may be based on Technical and/or Fundamental and/or a combination of Technical and Fundamental analysis.',
      'The research analyst or research entity or his associate or his relative does not have a financial interest in the subject company.',
      'The research analyst or its associates or relatives do not have actual/beneficial ownership of one percent or more securities of the subject company, at the end of the month immediately preceding the date of publication of the research report or the date of the public appearance.',
      'The research analyst or his associate or his relative does not have any other material conflict of interest at the time of publication of the research report or at the time of public appearance.',
      'The research analyst or its associates have not managed or co-managed the public offering of securities for the subject company in the past twelve months.',
      'The research analyst or its associates have not received any compensation or other benefits from the subject company or third party in connection with the research report.',
      'The research analyst has not been engaged in market-making activity for the subject company.',
      'The research analyst has not served as an officer, director, or employee of the subject company in the past 3 years.',
      'The research analyst did not receive any compensation or other benefits from the companies mentioned in the documents or third parties in connection with the preparation of the research documents. Accordingly, the Research Analyst does not have any material conflict of interest at the time of publication of the research documents.',
    ],
  },

  // -----------------------------------------------------------------------
  // 6. DISCLOSURES
  // -----------------------------------------------------------------------
  disclosure: {
    title: 'Disclosures',
    sections: [
      {
        heading: '1. About the Research Analyst',
        body: `${NAME} is a SEBI Registered Individual Research Analyst having his office at ${ADDRESS}. ${NAME} was registered with the Securities and Exchange Board of India (SEBI) as an Individual Research Analyst vide Registration Number: ${SEBI_REG}, pursuant to which he provides Research Analyst services to his clients.`,
      },
      {
        heading: '2. Background',
        body: `${NAME} possesses a strong command over financial analysis. With a disciplined and data-driven approach, he focuses on identifying fundamentally strong businesses with long-term growth potential. He specializes in simplifying complex financial concepts into easy and actionable insights for investors.`,
      },
      {
        heading: '3. Details of Business Activities',
        body: `${NAME} provides investment recommendations based primarily on fundamental and technical analysis. He may also share research insights and market views through digital platforms such as Telegram and WhatsApp for free subscribers, if any. Clients opting for paid research services are provided recommendations upon payment of the applicable subscription fees, in accordance with SEBI regulations.`,
      },
      {
        heading: '4. Disciplinary History',
        body: `There are no outstanding litigations and no disciplinary actions against ${NAME} by SEBI or any other regulatory authority.`,
      },
      {
        heading: '5. Terms and Conditions on which Research Report is being Issued',
        body: `${NAME} has exercised due diligence in checking the correctness and authenticity of the information contained herein, so far as it relates to current and historical information; however, he does not guarantee its accuracy or completeness. The opinions expressed are based on research conducted as of the date appearing in the material and are subject to change from time to time without prior notice. ${NAME} does not accept any liability arising from the use of this document or the information contained herein. Recipients of this material should rely on their own judgment and seek independent professional advice before acting on this information. ${NAME} shall not be responsible for any loss or damage that may arise to any person(s) from any inadvertent error in the information, views, or opinions expressed in this publication.`,
      },
      {
        heading: `6. ${NAME} or his associates, including relatives`,
        bullets: [
          'Do not hold any financial interest in the company covered under the research report.',
          'Do not have any actual or beneficial ownership of more than 1% in the company.',
          'Do not have any other material conflict of interest at the time of publication of the research report.',
        ],
      },
      {
        heading: `7. ${NAME} or his associates`,
        bullets: [
          'Are not affiliated with any other intermediaries.',
          'Have not received any brokerage, commission, or referral fees from any third party in connection with the research report.',
        ],
      },
      {
        heading: `8. ${NAME} or his associates`,
        body:
          'Have not received any compensation from the company covered under the research report during the past twelve months.',
      },
      {
        heading: `9. ${NAME} or his associates`,
        body:
          'Have not managed or co-managed any public offering of securities of the company covered under the research report during the past twelve months.',
      },
      {
        heading: `10. ${NAME} or his associates`,
        body:
          'Have not served as an officer, director, or employee of the company covered under the research report and have not been engaged in market-making activities for the said company.',
      },
      {
        heading: '11. Investor Disclaimer',
        body: `${NAME} has ensured that the facts mentioned in the research report are sourced from reliable and publicly available information. However, investors are advised to independently evaluate market conditions and risks involved before making any investment decisions.`,
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. REFUND POLICY & FEE BACK ASSURANCE
  // -----------------------------------------------------------------------
  refundPolicy: {
    title: 'Refund Policy & Fee Back Assurance',
    sections: [
      {
        heading: 'Refund Policy',
        body:
          "We value our clients and are committed to providing unsurpassed services. While we take our accuracy seriously, our clients also need to realise that we do not offer a 100% guarantee on our recommendations and hence cannot offer any refund on subscriptions regardless of the individual client's performance. Please note that all sales are final. By accepting the proposal of service and making a payment for the subscription, you agree that there will be ABSOLUTELY NO REFUNDS and/or CANCELLATIONS IN ANY CIRCUMSTANCES. Once a service has been subscribed to and payment has been made, the client will start receiving the recommendations that they asked for. If for some unforeseen reason the client is not satisfied with our services, they may contact us to seek oversight on future recommendations. We will put our best effort to increase the satisfaction levels in such cases. However, any request by the client to cancel a service or get a refund will not be accepted in any case. In the unlikely event that after payment, the service for a client is not started for technical reasons beyond our control, or we decide not to start service for a specific client, the client will be paid back the amount as soon as it is possible. This will not be applicable if the client is not able to receive SMS on the number provided by the client because of the client's DND status. We advise our clients to deregister from DND either before making a payment or as soon as the service is started.",
      },
      {
        heading: 'No Refund Policy',
        body: 'We strongly recommend that before making a payment, our visitors and potential clients please:',
        bullets: [
          'Read all information about our products.',
          'Services and support given to our clients.',
          "Visit the 'About Us' and 'Past Performance' sections on our website.",
          'Visit our Help and Frequently Asked Questions (FAQ) sections.',
          'Read our Terms of Use.',
          'Read our Privacy Policy.',
        ],
      },
      {
        heading: 'Important',
        body:
          'We take the security of our client transactions very seriously. For this reason, we ask that you NOT allow children or other unauthorised family members or friends to access your credit cards, debit cards, or your account at the payment site to ensure that no one pays for a Subscription without your permission. By making a payment for a Subscription to our site, you acknowledge that you have read and agreed to these terms.',
      },
      {
        heading: 'Fee Back Assurance',
        body:
          'Our Fee Back Assurance is designed to ensure transparency and client satisfaction. Please read the details carefully.',
        bullets: [
          'One-Month Subscription Plan — includes 10 days fee back assurance on the subscription fee.',
          'Six-Month Subscription Plan — includes 25 days fee back assurance on the subscription fee.',
          'One-Year Subscription Plan — includes 45 days fee back assurance on the subscription fee.',
        ],
      },
      {
        heading: 'Terms & Conditions (Fee Back)',
        body:
          'If you subscribe to any plan and feel that our service does not meet your expectations, you may request a full fee back within the stipulated period of that subscription plan. For example, if you subscribe to the one-month plan on 1 January, you may request a fee back any time up to 10 January under the 10-day fee back assurance. However, once this benefit has been availed, the client will not be eligible to claim the fee back assurance again on any future subscriptions. We sincerely appreciate your understanding of this one-time benefit policy.',
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 8. COMPLAINTS STATUS TABLE
  // -----------------------------------------------------------------------
  complaintsTable: {
    title: "Number of Client's Complaints",
    period: 'Data of the Month Ending — November 2025',
    columns: [
      'Received From',
      'Pending at end of last month',
      'Received',
      'Resolved *',
      'Total Pending #',
      '> 3 months',
      'Avg Resolution Time (days)',
    ],
    rows: [
      ['Directly from Investors', '0', '0', '0', '0', '0', '0'],
      ['SEBI (SCORES)', '0', '0', '0', '0', '0', '0'],
      ['Other Sources (if any)', '0', '0', '0', '0', '0', '0'],
      ['Grand Total', '0', '0', '0', '0', '0', '0'],
    ],
    notes: [
      '* Average resolution time is calculated for complaints resolved during the month.',
      '# Inclusive of complaints pending as on the last day of the month.',
    ],
    trend: {
      title: 'Trend of Monthly Disposal of Complaints',
      columns: ['Sr. No.', 'Month', 'Carried Forward', 'Received', 'Resolved *', 'Pending #'],
      rows: [],
      emptyMessage: 'No complaints to disclose at this time.',
    },
    annual: {
      title: 'Annual Disposal of Complaints',
      columns: ['Sr. No.', 'Year', 'Carried Forward', 'Received', 'Resolved *', 'Pending #'],
      rows: [],
      emptyMessage: 'No complaints to disclose at this time.',
    },
  },
};
