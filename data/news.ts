export type NewsArticle = {
  id: number
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  content: string[]
}

const articles: NewsArticle[] = [
  {
    id: 1,
    slug: "modular-housing-trends-2025",
    title: "Modular Housing Gains Speed on Major Projects",
    excerpt: "Developers accelerate schedules by 20–30% using off-site fabrication and just-in-time delivery.",
    date: "01-10-2025",
    author: "Construction Desk",
    image: "/news/modular-housing-construction-site.jpg",
    content: [
      "Modular construction is accelerating delivery on complex residential and hospitality programs by shifting repetitive scopes into controlled factory environments. Standardized subassemblies—such as bathroom pods, MEP risers, and unitized façades—move off the critical path, reducing weather risk and site congestion. As a result, superintendents report fewer coordination clashes and more predictable inspections.",
      "Owners are prioritizing design for manufacturing and assembly (DfMA) during schematic design, ensuring repeatable floor plates, vertical alignments, and consistent module dimensions. This early decision-making enables procurement teams to lock capacity at qualified factories while architects refine details around lifting points, structural interface plates, and waterproofing transitions.",
      "Onsite, foundations, utilities, and crane planning define the tempo of installation. Logistics teams stage delivery windows to avoid multiple module queues, while rigging crews coordinate with traffic control and neighboring businesses. Just-in-time sequencing reduces laydown requirements and keeps pedestrian walkways clear in urban infill conditions.",
      "Quality assurance shifts upstream. Factories implement station-based inspections with checklists for framing, electrical rough-in, plumbing pressure tests, and finish standards. These signoffs travel with the module, creating a traceable quality record that site teams can reference during hookup and commissioning.",
      "Cost models show savings in general conditions—shorter schedules, fewer weather delays, and reduced rework—offsetting premium fabrication expenses. The magnitude of savings depends on repetition, site constraints, and crane productivity. Teams that deliberately track crane hours, modules set per shift, and hookup durations are better able to forecast with confidence.",
      "Authorities Having Jurisdiction (AHJs) increasingly accept third‑party factory inspections, but local approvals still govern fire-rating continuity, egress paths, and seismic connections. Early engagement with plan reviewers and pre-inspection walkthroughs smooth the final approval sequence and minimize surprises during set days.",
      "Risk registers should explicitly cover transportation damage, module tolerance stacking, and wet-area waterproofing continuity. Mockups—both at the factory and onsite—validate detailing at corridor joints, vertical MEP risers, and exterior seals before production ramps.",
      "Key performance indicators (KPIs) include modules per crane shift, hookup cycle times, punch list items per module, and variance between planned and actual takt times. Continuous improvement—closing the loop between factory lessons learned and onsite feedback—drives measurable gains by the second project.",
    ],
  },
  {
    id: 2,
    slug: "material-prices-q3-2025",
    title: "Material Prices Stabilize in Q3 2025",
    excerpt: "Steel and concrete pricing flatten while electrical gear lead times remain elevated.",
    date: "25-09-2025",
    author: "Market Watch",
    image: "/news/steel-rebar-and-concrete-materials.jpg",
    content: [
      "Market data for Q3 2025 indicates stabilization across core materials after two years of volatility. Structural steel shows modest variance by region as mills return to normalized utilization rates. Ready-mix pricing has flattened where cement supply is steady, though local haul distance and traffic conditions continue to influence delivered cost.",
      "Electrical equipment remains the leading schedule risk, with switchgear lead times still elevated. Procurement teams are sequencing buyouts to lock long-lead items immediately after contract award, coordinating submittal reviews and factory witness tests to hold production slots.",
      "Copper and aluminum pricing has decoupled from prior spikes, allowing MEP trades to offer quotes with tighter validity windows. However, projects with extensive feeder runs or large busway systems should maintain contingency for small upward revisions tied to commodity movements.",
      "Escalation clauses are becoming more balanced. Owners accept transparent indices for predetermined adjustments, while contractors commit to early package releases and multi-sourcing strategies when feasible. Collaborative preconstruction remains the best hedge against late-stage scope creep.",
      "Supplier health is a renewed focus during prequalification. Teams review backlog, workforce stability, and credit references to ensure vendors can honor deliveries throughout the schedule. Site teams plan receiving with barcode scanning and secure storage protocols to prevent shrinkage.",
      "Contractors should differentiate between headline price stability and actual install cost. Productivity assumptions, inspection availability, and trade stacking continue to drive total installed cost. Detailed look-aheads reduce idle time and protect planned crew density.",
      "For budgeting, most regions are holding prior-quarter allowances for concrete, steel, and interior finishes, with a watchful eye on energy inputs and freight. Project finance teams are revisiting contingency frameworks to align with current market risk rather than last year’s volatility.",
      "Forward guidance points to steady conditions through Q4, barring geopolitical shocks. Project teams that finalize procurement early, validate supplier capacity, and maintain disciplined change control are best positioned to deliver on GMP commitments.",
    ],
  },
  {
    id: 3,
    slug: "jobsite-safety-ai-cameras",
    title: "AI Cameras Reduce Jobsite Incidents",
    excerpt: "Vision-based monitoring flags PPE non-compliance and near-miss hotspots in real time.",
    date: "18-09-2025",
    author: "Safety Report",
    image: "/news/construction-site-safety-cameras-ppe.jpg",
    content: [
      "Computer vision tools are moving beyond pilot status to become standard elements of comprehensive safety programs. Deployed cameras monitor zones for PPE compliance, fall‑protection usage, and housekeeping hazards such as blocked egress or unprotected edges, flagging conditions in near real time.",
      "Successful implementations begin with a clear policy framework. Project leadership defines objectives, data retention, alert thresholds, and incident escalation paths, engaging labor partners and joint safety committees early to build trust and clarify boundaries.",
      "Weekly heatmaps highlight recurring hotspots, enabling superintendents to tailor toolbox talks to actual site behaviors rather than generic topics. This targeted coaching drives measurable reductions in repeat observations and improves buy-in from field crews.",
      "Integration with existing workflows is critical. Alerts feed into established observation logs and corrective action systems, ensuring consistency with internal metrics and regulatory reporting. Nothing replaces a safety walk; AI simply directs attention to where it’s needed most.",
      "Privacy is addressed through automatic face blurring, restricted access, and limited retention windows. Sites post clear signage and share program goals—preventing injuries, not policing—while offering channels for feedback and continuous improvement.",
      "Training focuses on interpretation rather than raw alerts. Teams learn to distinguish signal from noise, grouping observations by root cause: material staging, access planning, or sequencing issues. This approach strengthens coordination between trades.",
      "Metrics typically include observation close-out time, repeated condition rate, and correlation with incident logs. Over the first 60–90 days, many jobs report a decline in near misses and improved housekeeping scores during third-party audits.",
      "Cost-benefit analysis captures avoided incidents, reduced work stoppages, and strengthened compliance documentation, offsetting subscription fees. The strongest ROI appears on large, multi-zone projects where situational awareness is hardest to maintain.",
    ],
  },
  {
    id: 4,
    slug: "construction-labor-outlook",
    title: "Labor Outlook: Upskilling and Retention",
    excerpt: "Contractors invest in training and mentorship to tackle persistent labor shortages.",
    date: "10-09-2025",
    author: "Workforce Insights",
    image: "/news/construction-workers-training-on-site.jpg",
    content: [
      "Contractors are investing in structured upskilling to address persistent labor shortages and elevate field leadership. Foreman academies pair technical refreshers with planning and communication modules, equipping leads to run reliable huddles, manage constraints, and mentor apprentices.",
      "Retention correlates strongly with predictability. Sequencing that limits weekend work, clear rotations, and consistent start times reduce burnout. When overtime is unavoidable, transparent look-aheads and early notice help teams plan around critical lifts and inspections.",
      "Technology adoption follows a pragmatic path. Field apps that simplify timesheets, material tracking, and daily reports see strong uptake; complex tools without clear benefits stall. Pilot with a small crew, capture feedback, then standardize with simple, repeatable workflows.",
      "Partnerships with trade schools and community colleges are expanding, emphasizing hands-on labs tied to real project scenarios. Site visits and guest instructors from active jobs make the curriculum relevant and accelerate ramp-up once apprentices join a crew.",
      "Compensation remains important, but career pathways—apprentice to journeyman to foreman—drive long-term commitment. Visible advancement criteria and feedback loops reduce turnover and create a deeper bench for complex interiors or shutdown work.",
      "Diversity and inclusion unlock broader talent pools. Mentorship programs and peer support networks help retain new entrants and encourage cross-trade collaboration, especially during high-pressure phases like commissioning or schedule recovery.",
      "Productivity metrics move beyond generic hours per unit to track constraint-free work time and handoff reliability. When crews start clean, with materials staged and decisions made, output stabilizes and quality improves.",
      "Outlook: Firms that combine training, stable scheduling, and practical digital tools will outperform on both recruitment and delivery. The result is safer jobs, fewer callbacks, and a more resilient workforce.",
    ],
  },
  {
    id: 5,
    slug: "public-infrastructure-funding",
    title: "Public Infrastructure Funding Unlocks Backlog",
    excerpt: "Transportation and water projects move off the shelf as approvals accelerate.",
    date: "02-09-2025",
    author: "Civils Update",
    image: "/news/bridge-construction-infrastructure-project.jpg",
    content: [
      "Public funding packages are unlocking shelved transportation and water projects, bringing multi-year programs to market with clearer procurement timelines. Agencies are publishing pipeline outlooks that help contractors plan bonding, equipment, and specialty staffing.",
      "Procurement selection remains project-specific: design-bid-build offers price transparency for well-scoped work, while CMGC and design-build can compress schedules and incentivize innovation where staging and utility conflicts dominate risk.",
      "Environmental approvals and right-of-way coordination require early engagement. Stakeholder mapping—residents, businesses, transit operators, and utilities—guides communication plans that reduce surprises during lane closures and detours.",
      "Construction phasing balances throughput and public impact. Night work, off-peak closures, and temporary decking keep traffic moving while crews tackle critical path activities like girder setting or major utility tie-ins.",
      "Risk registers track geotechnical unknowns, contaminated soils, and third-party dependencies. Clear escalation paths and dispute resolution frameworks help teams maintain momentum when encountering unforeseen conditions.",
      "Payment schedules based on measurable milestones—pile installation, deck pours, pressure tests—improve cash flow predictability for primes and subs alike. Digital quantity tracking reduces errors and speeds verification.",
      "Material availability influences sequencing. Long-lead bearings, specialty valves, and SCADA components are ordered early, with mockups and factory acceptance tests planned into the baseline schedule.",
      "Program success depends on accurate as-builts and commissioning documentation, which facilitate long-term operations and maintenance. Agencies increasingly require digital turnover packages aligned to asset management systems.",
    ],
  },
  {
    id: 6,
    slug: "rfp-best-practices",
    title: "Writing Clear RFPs for Faster Bids",
    excerpt: "Precise scopes and standard templates cut bid cycles by a week.",
    date: "28-08-2025",
    author: "Preconstruction Team",
    image: "/news/rfp-documents-construction-estimating.jpg",
    content: [
      "Clear, consistent RFPs shorten bid cycles and yield fewer clarifications. Standard templates with defined scopes, alternates, and unit prices allow estimators to compare apples-to-apples and reduce contingency stacking.",
      "Assumptions and exclusions must be explicit. For example, clarify temporary power responsibilities, craneage, and winter conditions so bidders price the same baseline and minimize scope gaps.",
      "BIM expectations should include required LOD by trade, model exchange frequency, and clash-detection cadence. Stating software versions and coordination platforms avoids translation issues mid-project.",
      "Submission checklists prevent incomplete bids. Required forms, bonding capacity, safety EMR, and sample schedules help evaluators gauge delivery capability, not just cost.",
      "A structured Q&A with published deadlines ensures fairness. Summarize clarifications and issue consolidated addenda to maintain a single source of truth for all bidders.",
      "Schedule narratives are invaluable. Ask bidders to describe critical path assumptions, long-lead procurement, and sequencing of key milestones such as envelope close-in and commissioning.",
      "Evaluation criteria should weight both price and qualitative factors—approach, team resumes, past performance, and safety. Transparent scoring builds trust and reduces protests.",
      "Post-award, a well-documented basis-of-estimate (BOE) accelerates onboarding and aligns the team on quantities, allowances, and value engineering opportunities.",
    ],
  },
  {
    id: 7,
    slug: "lean-construction-field",
    title: "Lean Construction, On Site",
    excerpt: "Daily huddles and takt planning trim waste and stabilize production.",
    date: "20-08-2025",
    author: "Field Ops",
    image: "/news/lean-construction-takt-planning-whiteboard.jpg",
    content: [
      "Lean practices are most effective when embedded into daily routines. Morning huddles align crews on safety, goals, and constraints, while afternoon checkouts capture learnings that inform the next day’s plan.",
      "Takt planning organizes work into fixed-time increments across defined zones, making flow visible and handoffs predictable. Buffers absorb variability without derailing adjacent trades.",
      "Constraint logs track prerequisites—design decisions, inspections, materials—and prevent crews from arriving to incomplete workfronts. Removing constraints before they bite protects throughput.",
      "Visual management—zone maps, color-coded tags, and simple boards—keeps the plan front and center. Crews should immediately see where they are, what’s next, and what’s blocked.",
      "Percent plan complete (PPC) and reasons for variance provide honest feedback loops. Teams address systemic issues such as missing information or late deliveries rather than blaming crews.",
      "Standard work reduces variability. Documented steps for recurring tasks like layout, hangers, and rough-in ensure consistency across shifts and subcontractors.",
      "Short, focused gemba walks by superintendents and trade leads reveal friction points—material handling, access routes, or tool availability. Quick fixes compound into meaningful gains.",
      "The payoff is fewer surprises, better quality, and reliable milestones. Lean isn’t extra work; it’s how the work gets done.",
    ],
  },
  {
    id: 8,
    slug: "sustainable-materials-checklist",
    title: "Sustainable Materials Checklist",
    excerpt: "Practical steps to specify low-carbon concrete, recycled steel, and FSC lumber.",
    date: "12-08-2025",
    author: "Sustainability",
    image: "/news/low-carbon-concrete-and-sustainable-materials.jpg",
    content: [
      "Sustainable material strategies are moving from aspirational to achievable with clear specifications and verifiable documentation. Start by defining embodied carbon targets and requiring Environmental Product Declarations (EPDs) for major packages.",
      "Concrete mix optimization leverages supplementary cementitious materials (SCMs) such as slag and fly ash to reduce cement content, while trial batches confirm finishability and strength gain relative to schedule needs.",
      "Reinforcing steel with recycled content and mill certifications supports both sustainability goals and quality assurance. Early mill engagement secures heat numbers and delivery windows for critical pours.",
      "FSC-certified lumber and low-VOC adhesives improve indoor environmental quality, particularly important for education and healthcare projects. Submittals should include chain-of-custody documentation.",
      "Procurement alignment is essential. Bid forms that capture alternates for low-carbon options enable informed choices without delaying award. Contract language should define acceptance criteria and testing.",
      "Quality does not take a back seat. Field mockups validate surface finish, curing methods, and protection plans, while inspectors verify performance through standard test methods.",
      "Lifecycle impacts extend beyond installation. Durable selections reduce maintenance and replacement frequency, improving total cost of ownership and long-term environmental outcomes.",
      "With a structured checklist, sustainability becomes a practical workflow—planned, measured, and delivered alongside schedule and budget.",
    ],
  },
]

export function getNews(): NewsArticle[] {
  return articles
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return articles.find((a) => a.slug === slug)
}
