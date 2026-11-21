
/* ---------- ICONS ---------- */
const I={
 acc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h12l4 4v12H4z"/><path d="M8 12h8M8 16h5M8 8h4"/></svg>',
 tax:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/></svg>',
 risk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
 auto:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
 audit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5M8.5 11l2 2 3.5-3.5"/></svg>',
 train:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 8l10-5 10 5-10 5z"/><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
 cfo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><path d="M6 16V11M11 16V7M16 16v-4M20 5l-5 4-4-2-6 4"/></svg>',
 start:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2"/><path d="M9 15l-3-3c2-6 7-9 14-9 0 7-3 12-9 14z"/><circle cx="15" cy="9" r="1.5"/></svg>',
 roc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V9l8-6 8 6v12"/><path d="M9 21v-6h6v6M4 21h16"/></svg>',
 erp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/></svg>'
};
const CATS={all:'All services',comp:'Accounting & compliance',assur:'Audit & assurance',adv:'Advisory',tech:'Technology & automation'};

/* ---------- SERVICE DATA ---------- */
const S=[
{slug:'internal-audit',cat:'assur',icon:'risk',name:'Risk Consulting & Internal Audit',short:'Internal audit that tests the whole population, not a sample — plus RCM, IFC / ICFR / SOX testing, process reviews and due diligence.',
 tagline:'Internal audit that tests the whole population, not a sample — using technology you do not have to buy.',
 hl:['100% transaction testing','9 process areas','Section 138 internal audit','ICFR / SOX'],
 intro:['Traditional internal audit checks a few transactions, so most risks never surface. Errors rarely sit in the typical transaction — and the typical transaction is all a sample can tell you about. Reports issued weeks after quarter-end describe money that has already left: the vendor is paid, the credit is time-barred, and the same error has repeated in the next quarter.',
  'High-cost audit software is not the answer either. Licence, implementation, annual maintenance and a dedicated administrator often cost more than the leakage the platform is bought to find. What we do instead: check every transaction, every cycle, against a fixed risk checklist — using technology you do not have to buy.'],
 who:[['Companies needing Section 138 internal audit','A structured, risk-based programme that satisfies the Companies Act and gives the board real assurance.'],['Owner-managed businesses','Management assurance that money is not leaking through duplicate payments, unapproved discounts or master-data changes.'],['Groups preparing for ICFR / SOX','A living risk-and-control data bank, tested each quarter and scored.'],['Investors and acquirers','Due diligence that looks at how the numbers are produced, not just the numbers.']],
 widget:'ia',
 scope:[['Internal audit — data analysis and vouching (Concept 01)',['100% of transactions tested against the risk checklist','30 samples vouched per quarter in each applicable area — revenue, purchases, expenses, fixed assets, vendor onboarding, customer onboarding and others','Documents examined for authenticity and accuracy','Internal audit report with root cause, implication and recommendation','Suited to Section 138 internal audit']],
  ['Control checks on data only (Concept 02)',['The same checklist and the same full-population coverage, without the vouching layer','Run monthly or quarterly across chosen processes','Exception reporting by value at risk, validated with process owners before issue','Quicker to deploy and materially lower in fee than Concept 01 — ideal for management assurance']],
  ['Excel-based RCM and ICFR / SOX testing (Concept 03)',['Risk Control Matrix built in Excel — every risk, its control, owner and frequency in one searchable data bank','Control gaps identified against each risk, with the mitigation drafted alongside','5 to 10 documents tested per control each quarter, by control frequency and guidance','Every control scored pass, partial pass or fail in a Control Result Matrix']],
  ['Process and sub-process automation (Concept 04)',['One process studied, its manual controls identified and converted into a tool','Examples: inventory slow-moving report, 26AS reconciliation, MSME 45-day monitoring, balance confirmations, MIS packs, GST ITC reconciliation, bank reconciliation','Tool handed over with an SOP and a walkthrough video for ongoing use']],
  ['Process reviews, SOPs and due diligence',['Process walkthroughs documenting how things actually run — not how the manual says they run','SOP drafting with embedded controls, sized to your team','Financial and operational due diligence for investment, acquisition or partnership decisions']]],
 stepsTitle:'How the data testing works',
 steps:[['Fixed risk checklist','Each process carries a pre-built library of risks and the control that should mitigate each — built from years of prior review work across industries.'],['Your data, in full','The complete transaction population is taken from your ERP — Tally, SAP, Oracle, Navision, Busy: anything that produces a data extract.'],['Checks run by tool','Every check is executed against every transaction — duplicate payments, threshold splitting, master-data changes, ageing breaches. Every row.'],['Exceptions, not opinions','You receive the exception list with the underlying transactions, ranked by value at risk, with a recommended control fix against each.'],['Track to closure','Monthly or quarterly refresh, with prior findings followed through to completion.']],
 deliv:['Exception report ranked by value at risk','Internal audit report — root cause, implication, recommendation','Excel Risk Control Matrix (RCM) data bank','Quarterly Control Result Matrix — pass / partial / fail','Sub-process checklists you can extend with your own concerns','Closure tracker for prior findings'],
 callout:'Let\'s not deal with risk once it is already out of control. Controls are cheapest to fix while the exception is still an exception.',
 faq:[['Do we need to buy any audit software?','No. We use our own tooling against a standard data extract from your ERP. No integration, licence or administrator is needed on your side.'],['Where do most clients start?','Procure to Pay and Compliance are the usual starting points. Processes are picked and priced individually — start where your exposure is highest, then extend.'],['Can we add our own risks to the checklist?','Yes. Sub-process checklists are shared before we begin so you can add your own concerns to the library.'],['What is the difference between Concept 01 and 02?','Both test 100% of transactions. Concept 01 adds vouching of 30 samples per quarter per area back to source documents; Concept 02 evidences exceptions from system data alone, so it is faster and lower in fee.']]},

{slug:'automation',cat:'tech',icon:'auto',name:'Business Process Automation',short:'Excel, VBA, Power Query, Power BI and Python tools that take the effort out of finance, operations and compliance work.',
 tagline:'Work that is effort rather than judgement — studied once, built into a tool and handed to your team to run.',
 hl:['Certified Microsoft professionals','Zero licence cost in most builds','Parallel run before go-live','3 months free support'],
 intro:['A process that runs on memory is a process at risk. Automation does not replace the person or remove the control. It takes the part of the work that is effort — the copying, the reformatting, the recomputation — and makes it repeatable.',
  'Our automation practice has a deep catalogue of processes already built, tested and handed over to client teams. The tool is fitted to the process and to your environment — in most cases nothing new has to be licensed, installed or administered. The control stops depending on someone remembering to perform it.'],
 who:[['It is manual','The same files are opened, copied and reformatted every cycle. The output is entirely predictable; only the effort repeats.'],['It takes too long','Days of the closing calendar go into assembling the numbers, leaving too little time to review what they say.'],['It invites error','One stale reference, one row missed in a copy-paste — and the mistake travels quietly into the reported figure.']],
 whoTitle:'Management shortlists a process on three signals',
 widget:'auto',
 scope:[['Data consolidation and reporting',['Merging separate branch, plant or period files into one clean dataset — differing headers, formats and layouts handled on the way in','Consolidation of financial statements — entity trial balances mapped to a common chart, inter-company eliminated, consolidated statements produced','MIS preparation — P&L, cash flow, segment and KPI pack assembled from ERP extracts on refresh, no re-keying']],
  ['Reconciliations',['Bank reconciliation — multi-bank ingest, rule-based auto-matching, unreconciled ageing, suspense clearance tracker','Form 26AS / AIS to books at deductor and section level, short credit quantified before filing','GSTR-2B vs purchase register — mismatch ageing at vendor level and ITC-at-risk report','Balance confirmations generated per party from the ledger, mailed in bulk, responses tracked and reconciled']],
  ['Monitoring and compliance',['Debtor, creditor and inventory ageing with overdue flags and provision working','Inventory slow-moving report — ageing by SKU and location, negative stock flags, NRV comparison','MSME 45-day monitoring — vendors identified, ageing tracked live, exposure quantified before year end','TDS section and rate validation; payroll input validation']],
  ['Calculators and registers',['Discount and incentive calculator — scheme rules built once, payout computed per customer','Fixed asset register and depreciation','Vendor / customer master de-duplication']]],
 stepsTitle:'Four steps, one process at a time',
 steps:[['Identify','Management nominates processes that are manual, slow or error-prone. We shortlist by effort saved against build time, and start with the one that pays back first.'],['Understand','We sit with the person who runs it today and map it as it actually operates — inputs, formats, decision rules, exceptions and sign-offs.'],['Build','The rules are built into a solution using Excel macros, Power Query, Power BI or Python. It runs in parallel for one full cycle and is reconciled to your own output.'],['Deliver','Handed over with a written SOP and a walkthrough video, so your team runs it going forward — followed by three months of support at no cost.']],
 deliv:['The solution — built around your data and formats, reconciled to your output across one full cycle','The SOP — how to run it, what to check before and after, what to do when an input changes','The walkthrough video — so a new joiner can pick it up without a demo','Three months of fixes, refinements and statutory-format updates at no cost'],
 callout:'Nothing goes live on trust — the parallel run is the acceptance test. The tool ships only once its output ties to yours.',
 faq:[['Will we need new software?','In most builds, no. Where the tool has to live inside Excel because that is where your team works, it lives inside Excel. Power BI and Python are used only where scale or monitoring needs them.'],['What if a statutory format changes after handover?','Within the three-month support window the tool is updated at no separate fee. After that, we offer optional support.'],['How do we start?','Name one process — the one that costs your team the most time each month. A 30-minute walkthrough with the person who runs it, and we come back with a written scope: what gets built, how long it takes and what it costs.']]},

{slug:'custom-erp',cat:'tech',icon:'erp',name:'Custom ERP & Software Development',short:'Web-based business software built around how you actually work — inventory, fixed assets, purchase, sales, approvals and dashboards.',
 tagline:'Software designed by accountants and controls specialists — so the system enforces the control, not a reminder.',
 hl:['Built around your process','Controls designed in','Role-based access & audit trail','Integrates with Tally / existing ERP'],
 intro:['Off-the-shelf ERPs ask you to change how you work to fit the software. Large ERP implementations cost more than most growing businesses can justify, and spreadsheets stop scaling the day a second branch or a second shift is added.',
  'We build web-based business applications around your actual process — with approvals, segregation of duties, audit trails and exception reports designed in from day one. Because the people designing it are auditors and accountants, the system produces the reports your finance team, auditors and management really need, and it posts cleanly into your books.'],
 who:[['Outgrown Excel','Multiple users, multiple locations, version conflicts and no audit trail on critical registers.'],['Gaps in your current ERP','Your accounting system works, but inventory, assets, approvals or field operations still run on paper or WhatsApp.'],['Need control, not complexity','You want approvals, maker-checker and access rights enforced by the system without an enterprise-ERP price tag.'],['Unique workflows','Industry-specific processes that no packaged product handles well.']],
 widget:'erp',
 scope:[['Operations modules',['Inventory management — multi-location stock, batch / serial tracking, reorder levels, ageing and slow-moving analysis','Purchase — requisition, PO, GRN and three-way match with approval limits','Sales and billing — quotation to invoice, price masters, discount approvals, credit limits','Production and job-work tracking for manufacturers']],
  ['Finance and control modules',['Fixed asset register — tagging, location, custodian, depreciation (Companies Act and Income-tax), physical verification','Expense and reimbursement claims with policy checks','Vendor and customer master with de-duplication and approval workflow','Approval matrix, maker-checker and full audit trail']],
  ['Reporting and integration',['Management dashboards and MIS on live data','Exception reports — the same control checks we use in internal audit, built into the system','Export / integration with Tally, Zoho, SAP or your existing accounting system','Role-based access, user logs and data backups']]],
 stepsTitle:'From discovery to go-live',
 steps:[['Discover','We map your process as it runs today, the people involved, the controls needed and the reports you want out.'],['Design','Screens, workflows, approval matrix and data model are agreed with you on clickable mock-ups before a line of code is written.'],['Build in sprints','Modules are delivered in short cycles so your team sees and tests working software early.'],['Test & migrate','User acceptance testing, master-data migration and a parallel run against your current method.'],['Go live & support','Training, user manuals and post-go-live support — with enhancements as your business grows.']],
 deliv:['Web-based application, accessible from office, plant or field','Role-based user access and audit trail','Controls built in — approvals, limits, maker-checker','Dashboards and exception reports','User manual, SOPs and training sessions','Post-go-live support and enhancement roadmap'],
 callout:'A control that lives in the system cannot be forgotten. We design software the way an auditor would want it to work.',
 faq:[['Does this replace Tally or our accounting system?','Usually not. Most clients keep their accounting system and use the custom application for operations, assets and approvals, with clean data flowing into the books.'],['Can we start with one module?','Yes, and we recommend it. Start with the module that removes the most manual effort or risk — inventory and fixed assets are common first choices — and extend from there.'],['Who owns the application?','Ownership, hosting and support terms are agreed upfront in the engagement letter so you are never locked in.']]},

{slug:'accounting',cat:'comp',icon:'acc',name:'Accounting (Indian & Foreign)',short:'Bookkeeping, reconciliations, MIS and finalisation for Indian entities and overseas books.',
 tagline:'Books that close on time, reconcile every month and tell management something useful.',
 hl:['Indian & overseas entities','Monthly close & MIS','Tally · Zoho · QuickBooks · Xero','Outsourced or deputed staff'],
 intro:['Accurate books are the foundation every other decision rests on — tax, funding, audit and day-to-day management. Yet in most growing businesses, accounting is the function that gets attention only when the auditor arrives or a return is due.',
  'We run accounting as a disciplined monthly cycle: transactions recorded, accounts reconciled, a close checklist completed and an MIS pack issued. For overseas entities and Indian subsidiaries of foreign groups, we maintain books to the reporting requirements of the parent, with multi-currency handling and time-zone-friendly turnaround.'],
 who:[['SMEs and growing companies','Who need a reliable, reviewed finance function without building a large in-house team.'],['Foreign companies and their Indian subsidiaries','Needing books aligned to group reporting and Indian statutory requirements.'],['Overseas businesses','Looking for offshore bookkeeping on QuickBooks, Xero or similar platforms.'],['Businesses with in-house teams','Who want a deputed resource on site or a senior review layer over existing staff.']],
 scope:[['Day-to-day bookkeeping',['Recording of sales, purchases, expenses, receipts and payments','Accounts payable and receivable management, ageing and follow-ups','Payroll accounting and statutory deduction entries','Inventory and fixed asset accounting']],
  ['Reconciliations and controls',['Bank, credit card and payment gateway reconciliations','Vendor and customer ledger reconciliations and balance confirmations','GST and TDS reconciliation with books','Inter-company reconciliations for group entities']],
  ['Monthly close and MIS',['Month-end close checklist with accruals, prepaids and provisions','MIS pack — P&L, balance sheet, cash flow, KPIs and variances against budget','Debtor, creditor and inventory ageing reports']],
  ['Year-end finalisation',['Finalisation of accounts under Schedule III and applicable accounting standards','Audit schedules and support through statutory and tax audit','Fixed asset register and depreciation workings']],
  ['Foreign accounting',['Bookkeeping for overseas entities on QuickBooks, Xero, Zoho Books and similar platforms','Multi-currency accounting and revaluation','Reporting packs aligned to group or parent requirements']]],
 stepsTitle:'How an accounting engagement runs',
 steps:[['Onboard','Understand your business, chart of accounts, systems and current state of books; clean up backlogs if needed.'],['Set the calendar','Agree a monthly close calendar and the documents we need from you, and by when.'],['Record & reconcile','Transactions recorded and every key account reconciled each month.'],['Review & report','Senior review, then an MIS pack with commentary that management can act on.'],['Finalise','Year-end finalisation and audit support, with no last-minute surprises.']],
 deliv:['Up-to-date books of account','Monthly reconciliation pack','Monthly MIS with commentary','Ageing reports — debtors, creditors, inventory','Year-end financial statements and audit schedules','Close calendar and tracker'],
 callout:'Engagement models to suit you: fully outsourced, a deputed SDDA resource at your office, or a senior review layer over your in-house team.',
 faq:[['Which software do you work on?','Tally Prime, Zoho Books, QuickBooks, Xero, Busy and SAP / ERP environments — we work on yours.'],['Can you place someone at our office?','Yes. We deploy SDDA staff at client locations, with periodic senior review visits to ensure quality.'],['Our books are behind. Can you catch up?','Yes. We start with a backlog clean-up plan, then move to the regular monthly cycle.']]},

{slug:'tax',cat:'comp',icon:'tax',name:'Direct & Indirect Tax Compliance',short:'Income tax, TDS, advance tax, GST returns and reconciliations — filed on time, every time.',
 tagline:'Every return filed on time, every credit claimed, every notice answered.',
 hl:['Income tax & advance tax','TDS / TCS','GST returns & ITC','Notices & assessments'],
 intro:['Tax compliance in India is a calendar that never stops — monthly GST and TDS, quarterly returns, advance tax instalments, annual returns and audits. Missing a date costs interest and late fees; missing a reconciliation costs credit you were entitled to.',
  'We run tax compliance on structured trackers that keep every deadline visible, and we reconcile before we file — books to GSTR-2B, books to 26AS and AIS — so that what is filed is complete and defensible.'],
 who:[['Companies, LLPs and firms','Needing end-to-end direct and indirect tax compliance.'],['Individuals and HNIs','Income tax returns, advance tax planning, capital gains computation and AIS reconciliation.'],['Exporters and service providers','LUT filing, refunds and place-of-supply questions.'],['Businesses facing notices','Responses to GST and income tax notices, scrutiny and assessments.']],
 widget:'cal',
 scope:[['Direct tax',['Income tax returns for companies, LLPs, firms, trusts and individuals','Advance tax estimation and planning each quarter','Tax audit support (Form 3CA/3CB-3CD)','Capital gains computation and AIS / 26AS reconciliation','Responses to notices, scrutiny and assessment proceedings']],
  ['TDS / TCS',['Monthly TDS/TCS computation and deposit','Quarterly returns — 24Q, 26Q, 27Q and 27EQ','TDS section and rate validation, lower-deduction certificates','Form 16 / 16A issuance and correction statements']],
  ['GST',['GST registration and amendments','GSTR-1 and GSTR-3B filing; IFF / QRMP where applicable','Input tax credit reconciliation — GSTR-2B vs purchase register, vendor follow-ups','Annual return and reconciliation statement (GSTR-9 / 9C)','E-invoicing and e-way bill set-up, LUT for exports, refunds','Responses to GST notices and audits']]],
 stepsTitle:'Our compliance cycle',
 steps:[['Calendar','Every applicable due date for your entity mapped into a compliance tracker.'],['Collect','Data collected from your books or accounting team on a fixed schedule.'],['Reconcile','Books matched to GSTR-2B, 26AS and AIS before anything is filed.'],['File','Returns prepared, reviewed and filed — with acknowledgements shared.'],['Report','Monthly compliance status report showing what was filed, paid and pending.']],
 deliv:['Compliance calendar and tracker','Filed returns with acknowledgements','ITC reconciliation with vendor-wise mismatch list','26AS / AIS reconciliation','Advance tax working each quarter','Notice responses and representation'],
 callout:'We reconcile before we file. The credit you lose to a mismatched invoice is real money — we find it while it can still be claimed.',
 faq:[['Do you handle notices for returns filed by someone else?','Yes. We review the history, reconcile the data and prepare the response.'],['Can you automate our reconciliations?','Yes — GST ITC and 26AS reconciliations are among the tools our automation practice builds and hands over.'],['Do you advise on tax planning?','Yes, within the law — structuring, advance tax planning and regime choice for individuals, alongside compliance.']]},

{slug:'statutory-audit',cat:'assur',icon:'audit',name:'Statutory Audit',short:'Independent audits with a sharp eye on controls and practical recommendations.',
 tagline:'An independent opinion — and a management letter you will actually use.',
 hl:['Companies Act audits','Tax audit','CARO & IFC reporting','LLP & trust audits'],
 intro:['A statutory audit is a legal requirement, but it should also be useful. Our controls-first background means we look beyond the balances to how they were produced — and we report what we find in a way management can act on.',
  'We plan each audit around your risks, use data analytics to test populations rather than relying only on samples, and close with a practical management letter covering control gaps, process improvements and compliance observations.'],
 who:[['Private and public limited companies','Statutory audit under the Companies Act, 2013, including CARO and IFC reporting where applicable.'],['LLPs, firms and trusts','Audits under the respective statutes and deeds.'],['Businesses under tax audit','Audit under Section 44AB of the Income-tax Act with Form 3CD reporting.'],['Lenders and stakeholders','Stock audits, limited reviews and special-purpose audits.']],
 scope:[['Statutory audits',['Audit of financial statements under the Companies Act, 2013','Reporting under CARO 2020 and on internal financial controls where applicable','Audit of LLPs, partnership firms, trusts and societies']],
  ['Tax audit',['Audit under Section 44AB and Form 3CA / 3CB-3CD reporting','Reconciliation of books to GST and TDS filings']],
  ['Other assurance',['Limited reviews and special-purpose audits','Stock and receivables audits','Certifications — net worth, utilisation, turnover and other certificates']]],
 stepsTitle:'Our audit approach',
 steps:[['Plan','Understand the business, assess risks and materiality, agree the timeline.'],['Controls','Walk through key processes and test the controls over them.'],['Analytics & substantive','Data analytics across full populations, followed by targeted substantive testing.'],['Close','Discuss findings with management and finalise financial statements.'],['Report','Audit report, CARO / IFC reporting and a practical management letter.']],
 deliv:['Independent auditor\'s report','CARO 2020 and IFC reporting where applicable','Tax audit report (Form 3CD)','Management letter with control observations','Audit timetable and requirement list upfront'],
 callout:'We fix root causes, not just the numbers — so the same audit point does not come back next year.',
 faq:[['How early should we engage the auditor?','Ideally before year-end, so planning, interim testing and any control fixes happen before closing.'],['Can the same firm do our accounting and audit?','Independence rules restrict this for certain entities. We will advise on what is permissible for your entity before accepting any engagement.']]},

{slug:'virtual-cfo',cat:'adv',icon:'cfo',name:'Virtual CFO',short:'Budgeting, cash flow, MIS reviews and board-ready reporting — without a full-time hire.',
 tagline:'Senior finance leadership, sized to your stage.',
 hl:['Budgets & forecasts','Cash flow management','Board & investor reporting','Finance team oversight'],
 intro:['Growing businesses need CFO-level thinking long before they can justify a full-time CFO. Decisions on pricing, hiring, funding and expansion are made every week — often on numbers that are late, incomplete or not looked at at all.',
  'As your Virtual CFO, we own the finance function at a strategic level: setting budgets, forecasting cash, reviewing MIS with you each month, preparing board and investor packs, and overseeing the team and partners who run day-to-day accounting and compliance.'],
 who:[['Founder-led businesses','Where the founder is also acting as the finance head.'],['Funded startups','Needing investor reporting, runway tracking and fundraising readiness.'],['SMEs scaling up','Adding branches, products or lenders and needing tighter financial control.'],['Family businesses','Professionalising finance and preparing the next generation of leadership.']],
 scope:[['Planning',['Annual budget and rolling forecasts','Unit economics, pricing and profitability analysis by product, customer or branch','Scenario planning for hiring, capex and expansion']],
  ['Cash and capital',['13-week cash flow forecasting and working-capital management','Banking relationships, working-capital limits and term loans','Fundraising readiness — data room, financial model, due diligence support']],
  ['Reporting and governance',['Monthly MIS review meeting with management','Board and investor reporting packs','KPI dashboards built on Power BI or Excel','Oversight of accounting, tax and compliance calendar']]],
 stepsTitle:'How it works',
 steps:[['Diagnose','Review the current state of books, reporting, cash and controls.'],['Set the baseline','Budget, KPIs and reporting calendar agreed with leadership.'],['Monthly rhythm','MIS review, cash forecast and variance discussion every month.'],['Strategic support','Funding, pricing, expansion and investor conversations as they arise.']],
 deliv:['Annual budget and rolling forecast','Monthly MIS with variance commentary','13-week cash flow forecast','KPI dashboard','Board / investor reporting pack','Finance calendar and team oversight'],
 callout:'Decision-ready numbers, on time, every month — so leadership spends its time deciding, not assembling.',
 faq:[['How much time does a Virtual CFO spend with us?','It is sized to your needs — typically a fixed number of days a month plus monthly review meetings, scaling up around board meetings or fundraising.'],['Do you replace our accountant?','No. We work with your accounting team or ours, and take responsibility for the quality and usefulness of what they produce.']]},

{slug:'startup-advisory',cat:'adv',icon:'start',name:'Startup Advisory',short:'Entity set-up, registrations, compliance calendar and finance foundations for founders.',
 tagline:'Get the foundations right on day one — so they never slow you down later.',
 hl:['Entity choice & incorporation','Registrations','DPIIT recognition','Finance stack set-up'],
 intro:['The decisions founders make in the first few months — the type of entity, the shareholding, the bank and accounting set-up — are expensive to undo later, especially at the first funding round or due diligence.',
  'We help founders choose the right structure, get every registration in place, and set up a finance and compliance foundation that scales — so that when investors, lenders or auditors look, everything is already in order.'],
 who:[['First-time founders','Deciding between private limited, LLP or OPC, and wanting it done right.'],['Early-stage startups','Needing registrations, a compliance calendar and basic finance processes.'],['Startups preparing to raise','Cleaning up cap tables, statutory records and books ahead of due diligence.'],['Foreign founders','Setting up an Indian entity or subsidiary with FEMA compliance.']],
 widget:'stage',
 scope:[['Set up',['Advice on entity type — private limited, LLP, OPC or partnership','Incorporation, PAN, TAN and bank account','GST, Shops & Establishment, professional tax and Udyam (MSME) registrations','Startup India (DPIIT) recognition and eligible tax exemptions']],
  ['Operate',['Compliance calendar covering ROC, GST, TDS and income tax','Accounting system set-up and chart of accounts','Payroll, reimbursement and vendor payment processes','Founder agreements and basic policies']],
  ['Raise',['Cap table and share issue documentation','Valuation coordination and FEMA reporting for foreign investment','Due diligence readiness and data room','ESOP pool set-up and compliance']]],
 stepsTitle:'Your first 90 days with us',
 steps:[['Consult','Understand the business, founders and funding plans; recommend the structure.'],['Incorporate','Entity incorporated and all core registrations obtained.'],['Set up finance','Accounting, banking, payroll and compliance calendar in place.'],['Hand over the rhythm','A monthly compliance and reporting routine that runs from there.']],
 deliv:['Recommended entity structure note','Incorporation and registration certificates','Compliance calendar','Accounting and payroll set-up','Investor-ready statutory records'],
 callout:'A clean set of books and statutory records is the cheapest due diligence you will ever do.',
 faq:[['Private limited or LLP?','It depends on your funding plans, number of founders and compliance appetite. Private limited companies are generally preferred where equity investment is planned; we walk you through the trade-offs.'],['Can you handle everything after incorporation too?','Yes — accounting, tax, ROC and Virtual CFO support can all continue under one roof.']]},

{slug:'roc',cat:'comp',icon:'roc',name:'ROC Compliance',short:'Annual filings, event-based MCA forms, board and AGM documentation and statutory registers.',
 tagline:'Company Secretary–led compliance that keeps your MCA record clean.',
 hl:['Annual filings','Event-based forms','Board & AGM documentation','Statutory registers'],
 intro:['Non-compliance with the Companies Act and LLP Act attracts steep additional fees and penalties — and a messy MCA record surfaces at the worst moments: fundraising, bank loans and due diligence.',
  'Our Company Secretaries manage the full corporate compliance cycle: annual filings, event-based forms, meetings, minutes and registers — tracked on a calendar so nothing is missed.'],
 who:[['Private and public companies','Annual and event-based compliance under the Companies Act, 2013.'],['LLPs','Annual filings and changes under the LLP Act, 2008.'],['Startups and small companies','Wanting a CS-led compliance function without a full-time hire.'],['Companies with a backlog','Needing defaults regularised and records reconstructed.']],
 scope:[['Annual compliance',['Financial statements and annual return — AOC-4 and MGT-7 / MGT-7A','Auditor appointment — ADT-1','Director KYC — DIR-3 KYC','Return of deposits — DPT-3; MSME-1 half-yearly return','LLP Form 8 and Form 11']],
  ['Event-based compliance',['Appointment and resignation of directors and KMP','Share allotment, transfer and increase in authorised capital','Change of registered office, name or objects','Charge creation, modification and satisfaction','Filing of board and special resolutions']],
  ['Secretarial support',['Board meetings and AGM — notices, agenda, minutes','Statutory registers and records maintenance','Share certificates and demat (ISIN) of private company shares','Strike-off, conversion and regularisation of past defaults']]],
 stepsTitle:'How we keep you compliant',
 steps:[['Health check','Review of MCA records, registers and pending filings.'],['Regularise','Past defaults cleared and records brought up to date.'],['Calendar','Annual and event-based compliance tracked on a calendar.'],['File & record','Forms filed, minutes drafted and registers updated each time.']],
 deliv:['ROC compliance health-check report','Annual filings with SRNs and challans','Board and general meeting minutes','Updated statutory registers','Annual compliance calendar'],
 callout:'Led by a qualified Company Secretary — the same team that understands your accounts and audit.',
 faq:[['We have missed filings in previous years. Can this be fixed?','Usually yes. We assess the defaults, compute additional fees, and use any available condonation or settlement schemes to regularise them.'],['Do private companies need to dematerialise shares?','Certain private companies are now required to issue and hold securities in demat form. We will assess applicability and handle the process.']]},

{slug:'trainings',cat:'adv',icon:'train',name:'Excel & AI Trainings',short:'Practical workshops that help finance and operations teams work faster with Excel and AI tools.',
 tagline:'Teach your team the shortcuts our automation practice uses every day.',
 hl:['Hands-on workshops','Built on your own data','Excel → Power Query → Power BI','AI for finance teams'],
 intro:['Most finance teams use a fraction of what Excel can do, and are only starting to explore what AI assistants can safely take off their plate. The result is hours each week spent on work a better formula, a query or a well-written prompt could do in minutes.',
  'Our trainings are run by the same people who build automation tools for clients. They are hands-on, use real finance and audit scenarios — reconciliations, ageing, MIS — and wherever possible, your own (anonymised) data.'],
 who:[['Finance and accounts teams','Wanting to cut month-end effort and errors.'],['Audit and compliance teams','Needing data analysis skills to test full populations.'],['Operations and MIS teams','Building reports and dashboards from ERP extracts.'],['Managers and leaders','Wanting to understand what AI can and cannot do for their teams.']],
 widget:'train',
 scope:[['Formats',['Half-day and full-day in-house workshops','Multi-week cohort programmes with assignments','Customised sessions built around your processes','Follow-up clinics to resolve real problems after the training']]],
 stepsTitle:'How a training is designed',
 steps:[['Assess','Short skills check and conversation with the team lead.'],['Customise','Curriculum picked from our modules and built on your scenarios.'],['Deliver','Hands-on sessions — every participant works on the file, not watches.'],['Reinforce','Practice workbooks, cheat sheets and a follow-up clinic.']],
 deliv:['Customised curriculum','Practice workbooks with solutions','Cheat sheets and reference guides','Participation certificates','Follow-up Q&A clinic'],
 callout:'The best automation is the one your own team can build and maintain.',
 faq:[['Online or in person?','Both. In-person workshops are available in Mumbai and Pune; online sessions for distributed teams.'],['Is AI safe to use with financial data?','The AI module covers data privacy, what not to paste into public tools, and how to verify outputs — practical guardrails alongside productivity.']]}
];
// automation tech + catalogue as extra
const AUTO_TECH=[['Excel & VBA macros','Runs where your team already works','Templates and one-click routines inside the workbook itself. No new software, no new login, no change to how the team works.'],['Power Query','Ingestion and transformation, on refresh','Many files, many formats, differing headers — pulled together and reshaped on a click each period rather than rebuilt from scratch.'],['Power BI','Monitoring, with drill-down','Dashboards for MIS, ageing and exception tracking, refreshed from source, with drill-down from the summary to the transaction beneath it.'],['Python','For volume a workbook cannot carry','Large populations, matching across two systems, and rule-based reconciliation at a scale that would make a spreadsheet unstable.']];
const AUTO_CAT=[['Merging separate files','Branch, plant or period files brought into one clean dataset.'],['Discount & incentive calculator','Scheme rules built in once; slabs, eligibility and payout computed per customer.'],['MIS preparation','P&L, cash flow, segment and KPI pack assembled from ERP extracts on refresh.'],['Ageing — debtor, creditor, inventory','Bucketed ageing from the ledger, overdue flags, provision working and movement.'],['Consolidation of financial statements','Entity TBs mapped to a common chart, inter-company eliminated.'],['Reconciliation with Form 26AS','Matched at deductor and section level; short credit quantified before filing.'],['Bank reconciliation','Multi-bank ingest, rule-based auto-matching, unreconciled ageing.'],['GST 2B vs purchase register','Mismatch ageing at vendor level and ITC-at-risk report.'],['Balance confirmations','Templates per party from the ledger, mailed in bulk, responses tracked.'],['MSME 45-day monitoring','MSME vendors identified, 45-day ageing tracked live, exposure quantified.'],['Payroll input validation','Attendance-to-payroll variance, duplicate PAN and bank accounts.'],['Fixed asset register & depreciation','Register maintained with depreciation computed by rule.']];

const FLOW_HTML="    <!-- Automation Flow graphic -->\n    <div class=\"flow\" tabindex=\"0\" aria-label=\"Illustration: a purchase invoice is read, checked and posted into an audited balance sheet. Hover to see the data flow.\">\n      <span class=\"flow-label\">Hover to run the pipeline</span>\n\n      <div class=\"flow-card flow-card--in\">\n        <span class=\"scan\"></span>\n        <h4>Purchase invoice <span class=\"tag\">INV/26-27/0917</span></h4>\n        <div class=\"flow-row\"><span>Vendor</span><b>ABC Traders</b></div>\n        <div class=\"flow-row\"><span>Invoice date</span><b>03-Nov-26</b></div>\n        <div class=\"flow-row\"><span>Taxable value</span><b>\u20b91,00,000</b></div>\n        <div class=\"flow-row\"><span>IGST 18%</span><b>\u20b918,000</b></div>\n        <div class=\"flow-row\"><span>TDS 194Q</span><b>\u20b9100</b></div>\n        <div class=\"flow-total\"><span>Payable</span><span>\u20b91,17,900</span></div>\n      </div>\n\n      <div class=\"flow-pipe\" aria-hidden=\"true\">\n        <span class=\"lane\"></span><span class=\"lane\"></span><span class=\"lane\"></span><span class=\"lane\"></span><span class=\"lane\"></span>\n        <span class=\"node\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"16\" rx=\"2\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\"/><path d=\"M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3\"/></svg></span>\n      </div>\n\n      <div class=\"flow-card flow-card--out\">\n        <h4>Balance sheet <span class=\"tag\">as at 31-Mar-27</span></h4>\n        <div class=\"flow-row\"><span>Inventory</span><b>\u20b92,40,18,400</b></div>\n        <div class=\"flow-row\"><span>GST input credit</span><b>\u20b918,42,600</b></div>\n        <div class=\"flow-row\"><span>Trade payables</span><b>\u20b938,62,150</b></div>\n        <div class=\"flow-row\"><span>TDS payable</span><b>\u20b91,24,300</b></div>\n        <div class=\"flow-row\"><span>Bank</span><b>\u20b91,27,05,900</b></div>\n        <div class=\"flow-total\"><span>Checks passed</span><span>42 / 42</span></div>\n        <span class=\"stamp\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z\"/><path d=\"M9 12l2 2 4-4\"/></svg> Audited</span>\n      </div>\n\n      <div class=\"flow-steps\" aria-hidden=\"true\">\n        <div class=\"flow-step\"><b>Read</b>PDF \u2192 data</div>\n        <div class=\"flow-step\"><b>Validate</b>GSTIN \u00b7 HSN \u00b7 TDS</div>\n        <div class=\"flow-step\"><b>Match</b>PO \u00b7 GRN \u00b7 2B</div>\n        <div class=\"flow-step\"><b>Post</b>Ledger \u00b7 reports</div>\n      </div>\n    </div>\n";
const BA_HTML="<div class=\"ba\">\n  <div class=\"ba-tabs\" role=\"tablist\" aria-label=\"Compare legacy accounting with a customised ERP\">\n    <button class=\"ba-tab\" type=\"button\" role=\"tab\" data-side=\"before\" aria-selected=\"false\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z\"/><path d=\"M12 9v4M12 17h.01\"/></svg> Legacy accounting</button>\n    <button class=\"ba-tab\" type=\"button\" role=\"tab\" data-side=\"after\" aria-selected=\"true\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> Customised end-to-end ERP</button>\n  </div>\n  <div class=\"ba-stage\">\n    <!-- AFTER: customised ERP -->\n    <div class=\"ba-pane ba-pane--after\" aria-label=\"Customised end-to-end ERP\">\n      <span class=\"ba-cap ba-cap--after\">After \u00b7 Customised ERP</span>\n      <div class=\"erp\">\n        <div class=\"erp-side\">\n          <div class=\"g\">Overview</div>\n          <div class=\"it on\">Dashboard</div>\n          <div class=\"g\">Operations</div>\n          <div class=\"it\">Purchase orders <span class=\"bd\">12</span></div>\n          <div class=\"it\">Inventory</div>\n          <div class=\"it\">Fixed assets</div>\n          <div class=\"g\">Controls</div>\n          <div class=\"it\">Approvals <span class=\"bd red\">3</span></div>\n          <div class=\"it\">Exceptions <span class=\"bd\">5</span></div>\n          <div class=\"it\">Audit trail</div>\n        </div>\n        <div class=\"erp-main\">\n          <div class=\"erp-kpis\">\n            <div class=\"erp-kpi\"><small>Payables due</small><b>\u20b938.6 L</b><i><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> All approved</i></div>\n            <div class=\"erp-kpi\"><small>Stock value</small><b>\u20b92.4 Cr</b><i><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> Reconciled</i></div>\n            <div class=\"erp-kpi\"><small>GST ITC at risk</small><b>\u20b90</b><i><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> 2B matched</i></div>\n          </div>\n          <div class=\"erp-chart\">\n            <small>Monthly close \u00b7 days taken</small>\n            <div class=\"bars\" aria-hidden=\"true\">\n              <span style=\"height:92%\"></span><span style=\"height:84%\"></span><span style=\"height:70%\"></span><span style=\"height:58%\"></span><span style=\"height:44%\"></span><span style=\"height:36%\"></span><span style=\"height:30%\"></span><span style=\"height:26%\"></span>\n            </div>\n          </div>\n          <div class=\"erp-checks\">\n            <div class=\"c\">Three-way match: PO \u00b7 GRN \u00b7 invoice <span class=\"ok\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> Passed</span></div>\n            <div class=\"c\">Duplicate invoice check <span class=\"ok\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> Passed</span></div>\n            <div class=\"c\">Vendor bank change: maker\u2013checker <span class=\"ok\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> Approved</span></div>\n            <div class=\"c\">MSME 45-day payment watch <span class=\"ok\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12l5 5L20 7\"/></svg> On track</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- BEFORE: legacy accounting -->\n    <div class=\"ba-pane ba-pane--before\" aria-label=\"Legacy accounting\">\n      <span class=\"ba-cap ba-cap--before\">Before \u00b7 Legacy accounting</span>\n      <div class=\"legacy\">\n        <h4>Purchase_Register_FINAL_v7 (2).xlsx</h4>\n        <div class=\"legacy-sheet\" aria-hidden=\"true\">\n          <div class=\"r\"><span>Vendor</span><span>Inv amt</span><span>Paid</span></div>\n          <div class=\"r\"><span>ABC Traders</span><span>1,18,000</span><span>1,18,000</span></div>\n          <div class=\"r\"><span>ABC Traders</span><span>1,18,000</span><span class=\"x\">1,18,000 ??</span></div>\n          <div class=\"r\"><span>XYZ Logistics</span><span>46,250</span><span class=\"x\">#REF!</span></div>\n          <div class=\"r\"><span>PQR Supplies</span><span>2,04,500</span><span>\u2014</span></div>\n          <div class=\"r\"><span>Total</span><span>4,86,750</span><span class=\"x\">#VALUE!</span></div>\n        </div>\n        <div>\n          <span class=\"legacy-alert\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z\"/><path d=\"M12 9v4M12 17h.01\"/></svg> Duplicate payment?</span>\n          <span class=\"legacy-alert\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z\"/><path d=\"M12 9v4M12 17h.01\"/></svg> GSTR-2B not matched</span>\n          <span class=\"legacy-alert\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z\"/><path d=\"M12 9v4M12 17h.01\"/></svg> Vendor bank changed by email</span>\n          <span class=\"legacy-alert\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z\"/><path d=\"M12 9v4M12 17h.01\"/></svg> Stock negative at Pune</span>\n        </div>\n        <ul class=\"legacy-notes\">\n          <li>Data re-keyed from Tally into 4 different sheets</li>\n          <li>Approvals on WhatsApp, no trail</li>\n          <li>Month-end close takes 9 days</li>\n          <li>Only one person knows the macro</li>\n        </ul>\n        <div class=\"sticky-note\">Ask accounts which file is the latest!!</div>\n        <div class=\"sticky-note n2\">TDS rate check pending\u2026</div>\n      </div>\n    </div>\n    <div class=\"ba-handle\" aria-hidden=\"true\"><span class=\"ba-knob\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M8 7l-5 5 5 5M16 7l5 5-5 5\"/></svg></span></div>\n    <input class=\"ba-range\" type=\"range\" min=\"0\" max=\"100\" value=\"50\" step=\"1\" aria-label=\"Drag to compare legacy accounting with the customised ERP\">\n  </div>\n  <p class=\"note mt-2\">Drag the handle or use the buttons to compare. Illustrative screens. The figures are made up for this example.</p>\n</div>\n";
const PHOTO={'internal-audit':['audit-desk.jpg','Reviewing documents and data at a desk'],'automation':['robot-hand.jpg','A robotic hand, representing automation'],'custom-erp':['analytics-screen.jpg','An analytics dashboard on a screen']};
/* ---------- HELPERS ---------- */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const bySlug=Object.fromEntries(S.map(s=>[s.slug,s]));
function card(s){return `<button class="scard" data-cat="${s.cat}" data-go="service-${s.slug}">${s.isNew?'<span class="tag"><span class="new-badge">NEW</span></span>':`<span class="tag">${CATS[s.cat].split(' ')[0]}</span>`}<div class="ic">${I[s.icon]}</div><h3>${s.name}</h3><p>${s.short}</p><span class="more">Explore service →</span></button>`}
function renderGrid(gridId,filId){
  $(gridId).innerHTML=S.map(card).join('')+`<div class="scta"><div class="eyebrow">Not sure where to start?</div><h3>Tell us what's slowing you down — we'll suggest the right mix.</h3><div><button class="btn btn-gold" data-finder>Find the right service →</button></div></div>`;
  $(filId).innerHTML=Object.entries(CATS).map(([k,v],i)=>`<button data-f="${k}" class="${i?'':'on'}">${v}</button>`).join('');
  $(filId).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
    $$(filId+' button').forEach(x=>x.classList.toggle('on',x===b));
    $$(gridId+' .scta').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'));$$(gridId+' .scard').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.cat!==b.dataset.f));});
}
renderGrid('#sgrid','#filters');renderGrid('#sgrid2','#filters2');
$('#ddmenu').innerHTML=S.map(s=>`<a data-go="service-${s.slug}"><span class="ic">${I[s.icon]}</span><span><b style="font-size:14px">${s.name}${s.isNew?' <span class="new-badge">NEW</span>':''}</b><small>${CATS[s.cat]}</small></span></a>`).join('');
$('#f1').innerHTML=S.filter(s=>s.cat==='comp'||s.cat==='assur').map(s=>`<a data-go="service-${s.slug}">${s.name}</a>`).join('');
$('#f2').innerHTML=S.filter(s=>s.cat==='adv'||s.cat==='tech').map(s=>`<a data-go="service-${s.slug}">${s.name}</a>`).join('');
const tick=S.map(s=>`<span>${s.name}</span>`).join('');$('#ticker').innerHTML=tick+tick;

const APART=[['Enterprise-grade expertise','Global consulting and corporate experience, applied with a practical, business-first lens.'],['Controls-first thinking','We fix root causes, not just the numbers, so issues don\'t recur.'],['Automation by default','Every repeat task is a candidate for a tool that saves time.'],['Partner, not vendor','We take ownership of outcomes as an extension of your team.'],['On time, every time','Structured planning and trackers keep every deadline visible.'],['Integrity & confidentiality','Your data and decisions are handled with professional discretion.']];
['#apart','#apart2'].forEach(id=>$(id).innerHTML=APART.map((a,i)=>`<div class="ap reveal"><div class="n">0${i+1}</div><h3>${a[0]}</h3><p>${a[1]}</p></div>`).join(''));

/* rotator */
const ROT=['finance','compliance','controls','automation','audit','reporting'];let ri=0;
setInterval(()=>{const r=$('#rot');r.style.opacity=0;setTimeout(()=>{ri=(ri+1)%ROT.length;r.textContent=ROT[ri];r.style.opacity=1},250)},2200);
$('#rot').style.transition='opacity .25s';

/* quiz */
const Q=[['My books are late and month-end is chaos',['accounting','automation','virtual-cfo'],'Get the books and close under control','A disciplined monthly close with reconciliations and MIS — and automation for the parts that repeat every month.'],
['I worry money is leaking through gaps in our processes',['internal-audit','automation','custom-erp'],'Find the leakage — across 100% of transactions','Full-population internal audit surfaces duplicate payments, unapproved discounts and master-data changes, ranked by value at risk.'],
['Deadlines, notices and late fees keep piling up',['tax','roc','accounting'],'Put compliance on a calendar','Every GST, TDS, income tax and ROC due date tracked, reconciled before filing, and reported to you monthly.'],
['My team spends days copy-pasting between spreadsheets',['automation','trainings','custom-erp'],'Take the effort out of the work','We build the tool, run it in parallel for a full cycle and hand it over — or train your team to build it themselves.'],
['We\'ve outgrown Excel — we need a proper system',['custom-erp','automation','internal-audit'],'Software built around how you work','A web-based application with approvals, audit trail and dashboards built in — integrated with your accounting system.'],
['I\'m starting up or getting ready to raise funds',['startup-advisory','virtual-cfo','roc'],'Build the foundations investors look for','The right entity, clean statutory records, investor-ready books and a finance partner for the raise.'],
['We need an independent audit or ICFR / SOX testing',['statutory-audit','internal-audit'],'Assurance with a controls-first lens','Statutory audit, tax audit and RCM-based control testing with practical, actionable recommendations.']];
$('#qopts').innerHTML=Q.map((q,i)=>`<button class="qopt${i?'':' on'}" data-q="${i}"><span class="dot"></span>${q[0]}</button>`).join('');
function showQ(i){const q=Q[i];$('#qres').innerHTML=`<div class="eyebrow">Where we'd start</div><h3>${q[2]}</h3><p style="color:#33433b">${q[3]}</p><div class="pill-row">${q[1].map(s=>`<button data-go="service-${s}">${bySlug[s].name} →</button>`).join('')}</div><button class="btn btn-primary" data-go="contact" style="margin-top:6px">Talk to us about this</button>`;$('#qres').animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:300})}
$('#qopts').addEventListener('click',e=>{const b=e.target.closest('.qopt');if(!b)return;$$('.qopt').forEach(x=>x.classList.toggle('on',x===b));showQ(+b.dataset.q)});showQ(0);

/* contact */
$('#svcpick').innerHTML=S.map(s=>`<button type="button" data-s="${s.slug}">${s.name}</button>`).join('');
$('#svcpick').addEventListener('click',e=>{const b=e.target.closest('button');if(b)b.classList.toggle('on')});
$('#cform').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);
  const svcs=$$('#svcpick .on').map(b=>b.textContent).join(', ')||'—';
  const t=`To: info@sdda.co.in\nSubject: Enquiry from ${f.get('name')}${f.get('company')?' ('+f.get('company')+')':''}\n\nName: ${f.get('name')}\nCompany: ${f.get('company')||'—'}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')||'—'}\nServices: ${svcs}\n\n${f.get('msg')||''}`;
  $('#sentText').textContent=t;{const sub=t.split('\n')[1].replace('Subject: ','');const bod=t.split('\n').slice(3).join('\n');$('#mailBtn').href='mailto:info@sdda.co.in?subject='+encodeURIComponent(sub)+'&body='+encodeURIComponent(bod);}$('#sent').style.display='block';$('#sent').scrollIntoView({behavior:'smooth',block:'nearest'})});
$('#copyBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#sentText').textContent);$('#copyBtn').textContent='Copied ✓'}catch(e){$('#copyBtn').textContent='Select the text above to copy'}});

/* ---------- SERVICE DETAIL ---------- */
function acc(items){return `<div class="acc">${items.map((it,i)=>`<div class="acc-i${i?'':' open'}"><button class="acc-h">${it[0]}<span class="pm">+</span></button><div class="acc-b"${i?'':' style="max-height:none"'}><div class="acc-b-in">${Array.isArray(it[1])?`<ul>${it[1].map(x=>`<li>${x}</li>`).join('')}</ul>`:`<p>${it[1]}</p>`}</div></div></div>`).join('')}</div>`}
function widgetHTML(s){
 if(s.widget==='ia') return `<div class="blk" id="b-widget"><h2>Four ways to work together</h2><p>Choose the concept that fits your objective — or combine them. Click through to compare.</p>
  <div class="wbox"><div class="tabs" id="iaTabs"></div><div class="tabpane" id="iaPane"></div></div></div>
  <div class="blk" id="b-areas"><h2>Nine process areas, one control framework</h2><p>Processes are picked and priced individually — start where your exposure is highest. Click an area to see what the checks look for.</p>
  <div class="areas" id="areas"></div><div class="area-detail" id="areaDet"></div></div>
  <div class="blk" id="b-matrix"><h2>Try it: the Control Result Matrix</h2><p>Under Concept 03, every control is tested each quarter and scored. Click any result to cycle it and watch the overall score move.</p>
  <div class="wbox"><table class="matrix"><thead><tr><th>Control</th><th>Description</th><th>Frequency</th><th>Samples</th><th>Result</th></tr></thead><tbody id="mx"></tbody></table>
  <div class="score"><b style="color:var(--g900)">Control effectiveness</b><div class="bar" id="mxBar"></div><span id="mxTxt" style="font-weight:600"></span></div></div></div>`;
 if(s.widget==='auto') return `<div class="blk" id="b-widget"><h2>Technology you already own</h2><p>The tool is fitted to the process and your environment. Pick a technology to see where it fits.</p>
  <div class="wbox"><div class="tabs" id="techTabs"></div><div class="tabpane" id="techPane"></div></div></div>
  <div class="blk" id="b-cat"><h2>Processes and sub-processes we automate</h2><p>These are examples, not a fixed menu — any repetitive, rule-based process qualifies.</p>
  <div class="mods" id="autoCat"></div></div>
  <div class="blk" id="b-flow"><h2>See a tool at work</h2><p>A typical tool reads the document, validates it against your masters and the law, matches it with the PO, GRN and GSTR-2B, and posts it. Every step is logged and every exception flagged. Hover over (or tap) the graphic to run the pipeline.</p><div class="flow-dark">${FLOW_HTML}</div><p class="note">Illustrative. The figures are made up for this example.</p></div>
  <div class="blk" id="b-calc"><h2>What is one process costing you?</h2><p>Move the sliders to estimate the time a manual process consumes each year. Illustrative only — your written scope will give real numbers.</p>
  <div class="wbox calc"><div>
   <label>Hours per cycle <span id="cv1">16</span></label><input type="range" id="c1" min="1" max="80" value="16">
   <label>Cycles per year <span id="cv2">12</span></label><input type="range" id="c2" min="1" max="52" value="12">
   <label>People involved <span id="cv3">2</span></label><input type="range" id="c3" min="1" max="10" value="2">
   <label>Effort automated <span id="cv4">70%</span></label><input type="range" id="c4" min="20" max="95" value="70">
  </div><div class="calc-out"><div>Hours returned to your team each year</div><b id="cOut">0</b><div id="cDays"></div><small>Illustrative estimate. Actual savings are confirmed during the parallel run.</small></div></div></div>`;
 if(s.widget==='erp') return `<div class="blk" id="b-widget"><h2>Build your ERP</h2><p>Select the modules your business needs. We'll start with the one that removes the most effort or risk, and extend from there.</p>
  <div class="mods" id="erpMods"></div><div class="erp-sum"><div><b id="erpN">0</b> modules selected · <span id="erpPhase"></span></div><button class="btn btn-gold" id="erpGo" style="padding:10px 18px;font-size:14px">Discuss these modules →</button></div></div>
  <div class="blk" id="b-ba"><h2>Before and after</h2><p>Most growing businesses run on a mix of accounting software, spreadsheets and WhatsApp approvals. Drag the slider to compare a typical legacy set-up with a customised ERP built for the same business.</p>${BA_HTML}</div>`;
 if(s.widget==='cal') return `<div class="blk" id="b-widget"><h2>The compliance calendar we run for you</h2><p>Select a month to see the recurring due dates we track for a typical company. Dates shown are standard statutory due dates and may be extended by notification.</p>
  <div class="wbox"><div class="cal-months" id="calM"></div><div class="due" id="calD"></div><p class="note">Indicative list of common due dates; actual applicability depends on your entity, turnover and registrations.</p></div></div>`;
 if(s.widget==='stage') return `<div class="blk" id="b-widget"><h2>Where are you on the journey?</h2><p>Select your stage to see what matters most right now.</p>
  <div class="stage" id="stg"></div><div class="area-detail" id="stgD"></div></div>`;
 if(s.widget==='train') return `<div class="blk" id="b-widget"><h2>Build your curriculum</h2><p>Pick the modules that fit your team — we'll shape the workshop around them.</p>
  <div class="mods" id="trMods"></div><div class="erp-sum"><div><b id="trH">0</b> hours · <span id="trF"></span></div><button class="btn btn-gold" id="trGo" style="padding:10px 18px;font-size:14px">Request this training →</button></div></div>`;
 return '';
}
function renderService(slug){
 const s=bySlug[slug];if(!s){go('services');return}
 const idx=S.indexOf(s),next=S[(idx+1)%S.length];
 const toc=[['b-over','Overview'],['b-who',s.whoTitle?'When to automate':'Who it\'s for'],...(s.widget?[['b-widget',{ia:'Engagement models',auto:'Technology',erp:'Build your ERP',cal:'Compliance calendar',stage:'Your stage',train:'Curriculum'}[s.widget]]]:[]),...(s.widget==='ia'?[['b-areas','Process areas'],['b-matrix','Control matrix']]:[]),...(s.widget==='auto'?[['b-cat','What we automate'],['b-flow','Tool at work'],['b-calc','Effort calculator']]:[]),...(s.widget==='erp'?[['b-ba','Before & after']]:[]),['b-scope','Scope of work'],['b-steps','How we work'],['b-deliv','Deliverables'],['b-faq','FAQs']];
 $('#v-service').innerHTML=`<section class="sd-hero"><div class="wrap"><div class="crumb"><a data-go="home">Home</a> / <a data-go="services">Services</a> / ${s.name}</div>
  <div class="ic">${I[s.icon]}</div><div class="eyebrow">${CATS[s.cat]}${s.isNew?' · <span class="new-badge">NEW</span>':''}</div><h1 style="margin-top:10px">${s.name}</h1><p>${s.tagline}</p>
  <div class="sd-hl">${s.hl.map(h=>`<span>✦ ${h}</span>`).join('')}</div></div></section>
  <div class="wrap sd-body"><aside class="sd-toc">${toc.map(t=>`<a data-scroll="${t[0]}">${t[1]}</a>`).join('')}<div class="other">Other services</div>${S.filter(x=>x!==s).slice(0,5).map(x=>`<a data-go="service-${x.slug}">${x.name}</a>`).join('')}</aside>
  <div>
   ${PHOTO[s.slug]?`<img class="sd-photo" src="assets/img/photos/${PHOTO[s.slug][0]}" alt="${PHOTO[s.slug][1]}" loading="lazy">`:''}
   <div class="blk" id="b-over"><h2>Overview</h2>${s.intro.map(p=>`<p>${p}</p>`).join('')}</div>
   <div class="blk" id="b-who"><h2>${s.whoTitle||'Who it\'s for'}</h2><div class="who">${s.who.map(w=>`<div><b>${w[0]}</b>${w[1]}</div>`).join('')}</div></div>
   ${widgetHTML(s)}
   <div class="blk" id="b-scope"><h2>Scope of work</h2><p>Click a section to expand the detail.</p>${acc(s.scope)}</div>
   <div class="blk" id="b-steps"><h2>${s.stepsTitle}</h2><div class="steps">${s.steps.map((st,i)=>`<div class="step${i?'':' on'}"><div class="num">0${i+1}</div><h4>${st[0]}</h4><p>${st[1]}</p></div>`).join('')}</div></div>
   <div class="blk" id="b-deliv"><h2>What you receive</h2><div class="deliv">${s.deliv.map(d=>`<div>${I.check}<span>${d}</span></div>`).join('')}</div>${s.callout?`<div class="callout" style="margin-top:22px">${s.callout}</div>`:''}</div>
   <div class="blk" id="b-faq"><h2>Frequently asked questions</h2>${acc(s.faq.map(f=>[f[0],f[1]]))}</div>
   <div class="cta-band"><div><h3>Discuss ${s.name.toLowerCase().includes('erp')?'your ERP':'this service'} with us</h3><p>Tell us what you need and we'll come back with a written scope.</p></div><div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-gold" data-go="contact" data-pre="${s.slug}">Get in touch →</button><button class="btn btn-ghost" style="color:#fff" data-go="service-${next.slug}">Next: ${next.name}</button></div></div>
  </div></div>`;
 initWidget(s);bindAcc();bindToc();
}
function bindAcc(){$$('#v-service .acc-h').forEach(h=>h.onclick=()=>{const it=h.parentElement,b=it.querySelector('.acc-b');
  if(it.classList.contains('open')){b.style.maxHeight=b.scrollHeight+'px';requestAnimationFrame(()=>b.style.maxHeight='0');it.classList.remove('open')}
  else{it.classList.add('open');b.style.maxHeight=b.scrollHeight+'px';setTimeout(()=>{if(it.classList.contains('open'))b.style.maxHeight='none'},400)}});
  $$('#v-service .step').forEach(st=>st.onclick=()=>{$$('#v-service .step').forEach(x=>x.classList.toggle('on',x===st))});}
$$('#homeSteps .step').forEach(st=>st.onclick=()=>$$('#homeSteps .step').forEach(x=>x.classList.toggle('on',x===st)));
function bindToc(){$$('.sd-toc [data-scroll]').forEach(a=>a.onclick=()=>document.getElementById(a.dataset.scroll).scrollIntoView({behavior:'smooth'}))}

function initWidget(s){
 if(s.widget==='ia'){
  const C=[['01 · Data analysis + vouching','Internal audit — data analysis and vouching','Technology tests the whole population; document vouching evidences it.',['100% of transactions tested against the risk checklist','30 samples vouched per quarter in each applicable area','Documents examined for authenticity and accuracy','Internal audit report with root cause, implication and recommendation'],'Section 138 internal audit'],
   ['02 · Data only','Control checks on data only','The same checklist and the same full coverage, without the vouching layer.',['Full-population testing across chosen processes, run monthly or quarterly','Exception reporting by value at risk, validated with process owners before issue','Quicker to deploy and materially lower in fee than Concept 01'],'Management assurance'],
   ['03 · RCM & ICFR / SOX','Excel-based RCM and ICFR / SOX testing','A living risk and control data bank, tested each quarter and scored.',['Risk Control Matrix built in Excel — every risk, control, owner and frequency in one searchable data bank','Control gaps identified against each risk, with the mitigation drafted alongside','5 to 10 documents tested per control each quarter, by control frequency'],'ICFR / SOX compliance'],
   ['04 · Automation','Process and sub-process automation','One process studied, its manual controls identified and converted into a tool.',['Inventory slow-moving report, 26AS reconciliation, MSME 45-day monitoring','Balance confirmations, MIS packs, GST ITC reconciliation, bank reconciliation','Tool handed over with an SOP and walkthrough video'],'Automation']];
  $('#iaTabs').innerHTML=C.map((c,i)=>`<button class="${i?'':'on'}" data-i="${i}">${c[0]}</button>`).join('');
  const show=i=>{const c=C[i];$('#iaPane').innerHTML=`<h3>${c[1]}</h3><p style="color:var(--mute)">${c[2]}</p><ul>${c[3].map(x=>`<li>${x}</li>`).join('')}</ul><span class="badge">Best for: ${c[4]}</span>${i===3?` <button class="chip" data-go="service-automation" style="margin-left:8px;cursor:pointer">See Process Automation →</button>`:''}`};
  $('#iaTabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#iaTabs button').forEach(x=>x.classList.toggle('on',x===b));show(+b.dataset.i)};show(0);
  const A=[['Order to Cash (OTC)','Credit limit breaches, unapproved discounts and credit notes, revenue cut-off, price master vs invoice variance, ageing.'],['Procure to Pay (PTP)','Duplicate invoices and vendor codes, three-way match failures, bank-detail changes, split POs below approval limits.'],['Record to Report (RTR)','Entries posted out of hours or by unauthorised users, round-sum and back-dated journals.'],['Hire to Retire (HTR)','Ghost employees, duplicate bank accounts and PAN, full-and-final settlement delays, attendance-to-payroll variance.'],['Fixed assets','Capitalisation vs revenue expense, CWIP ageing, depreciation rate and date validation, physical verification variance.'],['System & access controls','User access rights against role, segregation of duties conflicts, privileged and dormant IDs, generic logins, audit trail settings and change management.'],['Compliance — GST, TDS, Payroll','GSTR-2B vs books ITC matching, blocked credit, RCM applicability, TDS section and rate validation, PF/ESIC/PT/LWF validations.'],['Treasury — investments & borrowings','Interest recomputation vs sanction terms, covenant monitoring, unutilised limits, maturity tracking, forex exposure.'],['Inventory management','Negative stock, slow and non-moving ageing, cycle-count variance, valuation vs NRV, scrap and shortage trends.']];
  $('#areas').innerHTML=A.map((a,i)=>`<button class="area${i===1?' on':''}" data-i="${i}">${a[0]}</button>`).join('');
  const sa=i=>$('#areaDet').innerHTML=`<b>${A[i][0]} — what the checks look for:</b><br>${A[i][1]}`;
  $('#areas').onclick=e=>{const b=e.target.closest('.area');if(!b)return;$$('.area').forEach(x=>x.classList.toggle('on',x===b));sa(+b.dataset.i)};sa(1);
  const M=[['PTP-04','Three-way match','Per transaction','10','Pass'],['PTP-09','Vendor master approval','Per change','10','Partial'],['OTC-02','Credit limit override','Per transaction','10','Fail'],['FA-06','Capitalisation sign-off','Monthly','5','Pass'],['RTR-03','Journal entry approval','Per transaction','10','Pass'],['HTR-05','Payroll input validation','Monthly','5','Partial']];
  const R=['Pass','Partial','Fail'];
  const draw=()=>{$('#mx').innerHTML=M.map((m,i)=>`<tr><td><b>${m[0]}</b></td><td>${m[1]}</td><td>${m[2]}</td><td>${m[3]}</td><td><span class="res ${m[4]}" data-i="${i}">${m[4]}</span></td></tr>`).join('');
   const c={Pass:0,Partial:0,Fail:0};M.forEach(m=>c[m[4]]++);const sc=Math.round((c.Pass+c.Partial*.5)/M.length*100);
   $('#mxBar').innerHTML=`<i style="width:${c.Pass/M.length*100}%;background:#6fae4a"></i><i style="width:${c.Partial/M.length*100}%;background:#e8b93a"></i><i style="width:${c.Fail/M.length*100}%;background:#d0624f"></i>`;
   $('#mxTxt').textContent=`${sc}% · ${c.Pass} pass, ${c.Partial} partial, ${c.Fail} fail`};
  $('#mx').onclick=e=>{const r=e.target.closest('.res');if(!r)return;const m=M[r.dataset.i];m[4]=R[(R.indexOf(m[4])+1)%3];draw()};draw();
 }
 if(s.widget==='auto'){
  $('#techTabs').innerHTML=AUTO_TECH.map((t,i)=>`<button class="${i?'':'on'}" data-i="${i}">${t[0]}</button>`).join('');
  const show=i=>{const t=AUTO_TECH[i];$('#techPane').innerHTML=`<h3>${t[0]}</h3><span class="chip">${t[1]}</span><p style="margin-top:12px;font-size:16px">${t[2]}</p>`};
  $('#techTabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#techTabs button').forEach(x=>x.classList.toggle('on',x===b));show(+b.dataset.i)};show(0);
  $('#autoCat').innerHTML=AUTO_CAT.map(c=>`<div class="mod"><b>${c[0]}</b><small>${c[1]}</small></div>`).join('');
  const upd=()=>{const a=+$('#c1').value,b=+$('#c2').value,c=+$('#c3').value,d=+$('#c4').value;
   $('#cv1').textContent=a;$('#cv2').textContent=b;$('#cv3').textContent=c;$('#cv4').textContent=d+'%';
   const h=Math.round(a*b*c*d/100);$('#cOut').textContent=h.toLocaleString('en-IN');$('#cDays').textContent=`≈ ${Math.round(h/8).toLocaleString('en-IN')} working days`};
  ['#c1','#c2','#c3','#c4'].forEach(x=>$(x).oninput=upd);upd();
  initFlow();
 }
 if(s.widget==='erp'){
  const E=[['Inventory management','Multi-location stock, batches, reorder, ageing',1],['Purchase & procurement','Requisition → PO → GRN, 3-way match',1],['Sales & billing','Quotes, invoices, price & discount control',1],['Fixed asset management','Tagging, custodian, depreciation, verification',1],['Production / job work','BOM, work orders, wastage tracking',2],['Expense & claims','Policy checks, approvals, reimbursements',2],['Vendor & customer master','De-duplication, approval workflow',1],['Approvals & workflow','Approval matrix, maker-checker',1],['HR & attendance','Attendance, leave, payroll inputs',2],['Dashboards & MIS','Live KPIs and drill-down',2],['Exception reports','Audit-grade control checks built in',2],['Accounting integration','Tally / Zoho / SAP posting & export',2]];
  const sel=new Set([0,3,7]);
  const draw=()=>{$('#erpMods').innerHTML=E.map((m,i)=>`<button class="mod${sel.has(i)?' on':''}" data-i="${i}"><b>${m[0]}</b><small>${m[1]}</small></button>`).join('');
   $('#erpN').textContent=sel.size;const p2=[...sel].some(i=>E[i][2]===2);
   $('#erpPhase').textContent=sel.size===0?'pick at least one module':sel.size<=3?'a focused first release':(p2?'phased roll-out in 2–3 releases':'phased roll-out in 2 releases')};
  $('#erpMods').onclick=e=>{const b=e.target.closest('.mod');if(!b)return;const i=+b.dataset.i;sel.has(i)?sel.delete(i):sel.add(i);draw()};draw();
  initBA();
  $('#erpGo').onclick=()=>{go('contact',{pre:'custom-erp',msg:'Custom ERP modules of interest: '+[...sel].map(i=>E[i][0]).join(', ')})};
 }
 if(s.widget==='cal'){
  const mo=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  const monthly=[[7,'TDS / TCS deposit for previous month','TDS','t-tds'],[11,'GSTR-1 for previous month (monthly filers)','GST','t-gst'],[20,'GSTR-3B for previous month (monthly filers)','GST','t-gst']];
  const extra={Apr:[[30,'TDS deposit for March; MSME-1 (Oct–Mar)','TDS / ROC','t-tds']],May:[[31,'TDS returns — Q4 (24Q / 26Q / 27Q)','TDS','t-tds'],[30,'LLP Form 11 annual return','ROC','t-roc']],Jun:[[15,'Advance tax — 1st instalment (15%)','IT','t-it'],[30,'DPT-3 return of deposits','ROC','t-roc']],Jul:[[31,'TDS returns — Q1; ITR for non-audit cases','TDS / IT','t-tds']],Sep:[[15,'Advance tax — 2nd instalment (45%)','IT','t-it'],[30,'Tax audit report; AGM; DIR-3 KYC','IT / ROC','t-it']],Oct:[[30,'AOC-4 (within 30 days of AGM); LLP Form 8','ROC','t-roc'],[31,'TDS returns — Q2; ITR for audit cases; MSME-1 (Apr–Sep)','TDS / IT','t-tds']],Nov:[[29,'MGT-7 / 7A (within 60 days of AGM)','ROC','t-roc']],Dec:[[15,'Advance tax — 3rd instalment (75%)','IT','t-it'],[31,'GSTR-9 / 9C annual return','GST','t-gst']],Jan:[[31,'TDS returns — Q3','TDS','t-tds']],Mar:[[15,'Advance tax — final instalment (100%)','IT','t-it']]};
  $('#calM').innerHTML=mo.map((m,i)=>`<button class="${i===5?'on':''}" data-m="${m}">${m}</button>`).join('');
  const show=m=>{const l=[...monthly.filter(x=>!(m==='Apr'&&x[0]===7)),...(extra[m]||[])].sort((a,b)=>a[0]-b[0]);
   $('#calD').innerHTML=l.map(x=>`<div><span class="d">${x[0]}<small>${m.toUpperCase()}</small></span><span>${x[1]}</span><span class="t ${x[3]}">${x[2]}</span></div>`).join('')};
  $('#calM').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#calM button').forEach(x=>x.classList.toggle('on',x===b));show(b.dataset.m)};show('Sep');
 }
 if(s.widget==='stage'){
  const G=[['💡 Idea','Choose the right structure','Private limited, LLP or OPC — decided against your funding plans, number of founders and compliance appetite. Founders\' agreement and shareholding agreed upfront.'],['🏗️ Incorporate','Get every registration in place','Incorporation, PAN, TAN, bank account, GST, Shops & Establishment, professional tax, Udyam and DPIIT recognition.'],['⚙️ Operate','Build the finance rhythm','Accounting system, payroll, vendor payments and a compliance calendar for ROC, GST, TDS and income tax — running every month.'],['🚀 Raise','Be diligence-ready','Clean cap table, statutory registers and books; financial model and data room; valuation and FEMA reporting for foreign investors; ESOP pool.']];
  $('#stg').innerHTML=G.map((g,i)=>`<button class="area${i?'':' on'}" data-i="${i}">${g[0]}</button>`).join('');
  const sh=i=>$('#stgD').innerHTML=`<b>${G[i][1]}</b><br>${G[i][2]}`;
  $('#stg').onclick=e=>{const b=e.target.closest('.area');if(!b)return;$$('#stg .area').forEach(x=>x.classList.toggle('on',x===b));sh(+b.dataset.i)};sh(0);
 }
 if(s.widget==='train'){
  const T=[['Excel foundations for finance','Shortcuts, tables, data validation, clean data',3],['Lookups & logic','XLOOKUP, INDEX-MATCH, IFS, dynamic arrays',3],['PivotTables & analysis','Pivots, slicers, ageing and variance analysis',3],['Power Query','Merge files, clean and reshape on refresh',4],['Dashboards in Excel','Charts, KPIs and one-page MIS',3],['Intro to VBA macros','Record, read and adapt simple macros',4],['Power BI essentials','Data model, visuals and publishing',6],['AI for finance teams','Prompting, verification and data privacy',3],['Excel for auditors','Full-population testing, duplicates, sampling',4]];
  const sel=new Set([0,2,3,7]);
  const draw=()=>{$('#trMods').innerHTML=T.map((m,i)=>`<button class="mod${sel.has(i)?' on':''}" data-i="${i}"><b>${m[0]}</b><small>${m[1]} · ${m[2]}h</small></button>`).join('');
   const h=[...sel].reduce((a,i)=>a+T[i][2],0);$('#trH').textContent=h;$('#trF').textContent=h===0?'pick modules':h<=4?'a half-day workshop':h<=8?'a full-day workshop':`about ${Math.ceil(h/4)} half-day sessions`};
  $('#trMods').onclick=e=>{const b=e.target.closest('.mod');if(!b)return;const i=+b.dataset.i;sel.has(i)?sel.delete(i):sel.add(i);draw()};draw();
  $('#trGo').onclick=()=>go('contact',{pre:'trainings',msg:'Training modules of interest: '+[...sel].map(i=>T[i][0]).join(', ')});
 }
}

/* ---------- ROUTER ---------- */
function go(route,opt){
 if(location.hash!=='#'+route){history.pushState(null,'','#'+route)}
 render(route,opt);
}
function render(route,opt){
 route=route||'home';
 $$('.view').forEach(v=>v.classList.remove('active'));
 let navKey=route;
 if(route.startsWith('service-')){renderService(route.slice(8));$('#v-service').classList.add('active');navKey='services'}
 else{const v=$('#v-'+route)||$('#v-home');v.classList.add('active');navKey=v.id.slice(2)}
 $$('.navlinks > a, .navlinks > .dd > a').forEach(a=>a.classList.toggle('on',a.dataset.go===navKey));
 $('#navlinks').classList.remove('open');
 window.scrollTo({top:0,behavior:'instant'});
 if(route==='contact'&&opt){$$('#svcpick button').forEach(b=>b.classList.toggle('on',b.dataset.s===opt.pre));if(opt.msg)document.querySelector('#cform textarea').value=opt.msg}
 setTimeout(observe,30);
}
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(!g)return;e.preventDefault();
 const opt=g.dataset.pre?{pre:g.dataset.pre}:undefined;go(g.dataset.go,opt)});
window.addEventListener('hashchange',()=>render(location.hash.slice(1)));
window.addEventListener('popstate',()=>render(location.hash.slice(1)));
document.addEventListener('click',e=>{if(!e.target.closest('[data-finder]'))return;e.preventDefault();
 const toFinder=()=>document.getElementById('finder').scrollIntoView({behavior:'smooth'});
 if(!$('#v-home').classList.contains('active')){go('home');setTimeout(toFinder,80)}else toFinder()});
/* service cards: spotlight follows the cursor */
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.scard');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true});
$('#burger').onclick=()=>$('#navlinks').classList.toggle('open');

/* reveal + counters */
let io;
function observe(){
 if(!io)io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');
   en.target.querySelectorAll('[data-count]').forEach(c=>{if(c.dataset.done)return;c.dataset.done=1;const n=+c.dataset.count;let k=0;const t=setInterval(()=>{k++;c.textContent=k;if(k>=n){clearInterval(t);c.textContent=n+(n===12?'+':'')}},Math.max(40,900/n))});
   io.unobserve(en.target)}}),{threshold:.12});
 $$('.view.active .reveal:not(.in)').forEach(el=>io.observe(el));
}
window.addEventListener('scroll',()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
 $('#progress').style.width=(h>0?y/h*100:0)+'%';$('#hdr').classList.toggle('scrolled',y>10);$('#totop').classList.toggle('show',y>600);
 const tocs=$$('.view.active .sd-toc [data-scroll]');if(tocs.length){let cur=tocs[0];tocs.forEach(a=>{const el=document.getElementById(a.dataset.scroll);if(el&&el.getBoundingClientRect().top<140)cur=a});tocs.forEach(a=>a.classList.toggle('on',a===cur))}
},{passive:true});
$('#totop').onclick=()=>scrollTo({top:0,behavior:'smooth'});
render(location.hash.slice(1)||'home');


/* ---------- merged: pipeline graphic (Process Automation page) ---------- */
function initFlow(){
 const flow=document.querySelector('#v-service .flow'); if(!flow) return;
 const src=flow.querySelectorAll('.flow-card--in .flow-row'), dst=flow.querySelectorAll('.flow-card--out .flow-row'), steps=flow.querySelectorAll('.flow-step');
 const tokens=['GSTIN ✓','HSN 9983','TDS 194Q','₹1,18,000','3-way ✓','Dr/Cr ✓','Ledger','Ageing'];
 const reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
 let timer=null,stepT=null,si=0,ti=0;
 const shoot=()=>{const fr=flow.getBoundingClientRect(),s=src[Math.floor(Math.random()*src.length)].getBoundingClientRect(),d=dst[Math.floor(Math.random()*dst.length)].getBoundingClientRect();
  const p=document.createElement('span');p.className='packet';p.textContent=tokens[ti++%tokens.length];
  const x0=s.right-fr.left-30,y0=s.top-fr.top+s.height/2-8,x1=d.left-fr.left+10,y1=d.top-fr.top+d.height/2-8;
  p.style.left=x0+'px';p.style.top=y0+'px';p.style.setProperty('--dx',(x1-x0)+'px');p.style.setProperty('--dy',(y1-y0)+'px');flow.appendChild(p);setTimeout(()=>p.remove(),1200)};
 const adv=()=>{steps.forEach((s,i)=>s.classList.toggle('is-active',i===si));si=(si+1)%steps.length};
 const start=()=>{if(reduce||timer)return;shoot();timer=setInterval(shoot,320);adv();stepT=setInterval(adv,700)};
 const stop=()=>{clearInterval(timer);clearInterval(stepT);timer=stepT=null;steps.forEach(s=>s.classList.remove('is-active'))};
 flow.addEventListener('mouseenter',start);flow.addEventListener('mouseleave',stop);flow.addEventListener('focusin',start);flow.addEventListener('focusout',stop);
 flow.addEventListener('touchstart',()=>{start();setTimeout(stop,3500)},{passive:true});
}

/* ---------- merged: before / after slider (Custom ERP page) ---------- */
function initBA(){
 const ba=document.querySelector('#v-service .ba'); if(!ba) return;
 const stage=ba.querySelector('.ba-stage'),range=ba.querySelector('.ba-range'),tabs=ba.querySelectorAll('.ba-tab');let raf=null;
 const apply=v=>{stage.style.setProperty('--pos',v+'%');range.value=v;
  range.setAttribute('aria-valuetext',v>60?'Showing mostly legacy accounting':v<40?'Showing mostly the customised ERP':'Split view');
  tabs.forEach(t=>{const side=t.dataset.side;t.setAttribute('aria-selected',((side==='before'&&v>=50)||(side==='after'&&v<50))?'true':'false')})};
 const setPos=v=>{const from=+range.value;let t0=null;cancelAnimationFrame(raf);
  const f=ts=>{if(!t0)t0=ts;const k=Math.min(1,(ts-t0)/450),e=1-Math.pow(1-k,3);apply(from+(v-from)*e);if(k<1)raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f)};
 range.addEventListener('input',()=>{cancelAnimationFrame(raf);apply(+range.value)});
 tabs.forEach(t=>t.addEventListener('click',()=>setPos(t.dataset.side==='before'?100:0)));
 apply(50);
}

/* ---------- merged: ICAI disclaimer, shown once per browser session ---------- */
(function(){
 const d=document.getElementById('disclaimer'); if(!d) return;
 const ss={get:k=>{try{return sessionStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{sessionStorage.setItem(k,v)}catch(e){}}};
 const open=()=>{d.classList.add('open');d.querySelector('[data-agree]').focus()};
 if(ss.get('sdda-disclaimer')!=='1') open();
 d.querySelector('[data-agree]').addEventListener('click',()=>{ss.set('sdda-disclaimer','1');d.classList.remove('open')});
 document.querySelectorAll('[data-open-disclaimer]').forEach(b=>b.addEventListener('click',open));
})();
