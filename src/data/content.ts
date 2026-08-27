import { freeAiToolsMarkdown } from "./posts/free-ai-tools";

// Industries, the consulting approach, why-choose-us, testimonials,
// case studies, and insights — all in one content module for easy editing.

import type { Faq } from "./faq";

export type Industry = {
  slug: string;
  title: string;
  blurb: string;
  challenges: string[];
};

export const industries: Industry[] = [
  {
        slug: "manufacturing",
        title: "Manufacturing",
        blurb:
                "Expand distribution and operational discipline to capture more demand.",
        challenges: [
                "Distribution and channel expansion",
                "Operational efficiency and quality",
                "Moving from volume to value",
              ],
  },
  {
        slug: "msmes-family-businesses",
        title: "MSMEs & Family Businesses",
        blurb:
                "Professionalize the business and balance legacy with ambition as the next generation steps in.",
        challenges: [
                "Owner-dependence and key-person risk",
                "Governance and succession planning",
                "Informal processes under strain",
              ],
  },
  {
        slug: "retail-jewellery",
        title: "Retail & Jewellery",
        blurb:
                "Sharpen the customer experience, inventory discipline, and margins retail and jewellery businesses run on.",
        challenges: [
                "Footfall, conversion, and basket size",
                "Inventory and margin discipline",
                "Omnichannel and customer loyalty",
              ],
  },
  {
        slug: "food-processing-fmcg",
        title: "Food Processing & FMCG",
        blurb:
                "Build the distribution reach and operational consistency food and FMCG brands need to scale.",
        challenges: [
                "Distribution and retail penetration",
                "Quality consistency at volume",
                "Brand differentiation on the shelf",
              ],
  },
  {
        slug: "educational-institutions",
        title: "Educational Institutions",
        blurb:
                "Grow enrollment and reputation through clearer positioning and operations.",
        challenges: [
                "Differentiation in a crowded market",
                "Admissions and enrollment growth",
                "Operational and brand consistency",
              ],
  },
  {
        slug: "healthcare",
        title: "Healthcare",
        blurb:
                "Build patient trust and operational systems that let healthcare providers grow without compromising care.",
        challenges: [
                "Patient acquisition and retention",
                "Operational and staffing consistency",
                "Trust and reputation building",
              ],
  },
  {
        slug: "hospitality-tourism",
        title: "Hospitality & Tourism",
        blurb:
                "Turn guest experience into repeat business and steady occupancy.",
        challenges: [
                "Occupancy and seasonal demand",
                "Guest experience consistency",
                "Digital presence and bookings",
              ],
  },
  {
        slug: "agriculture-fpos",
        title: "Agriculture & FPOs",
        blurb:
                "Build market linkages and operational structure that help farmer collectives and agri-businesses scale.",
        challenges: [
                "Market linkages and price realization",
                "Aggregation and quality standards",
                "Access to structured financing",
              ],
  },
  {
        slug: "technology-ai-startups",
        title: "Technology & AI Startups",
        blurb:
                "Move from founder-led product bets to a repeatable go-to-market engine.",
        challenges: [
                "Product-market fit validation",
                "Repeatable go-to-market motion",
                "Scaling without losing speed",
              ],
  },
  {
        slug: "professional-services",
        title: "Professional Services",
        blurb:
                "Turn expertise into a scalable practice with structured delivery and client acquisition.",
        challenges: [
                "Dependence on a few rainmakers",
                "Standardizing service delivery",
                "Predictable client acquisition",
              ],
  },
  {
        slug: "startups-entrepreneurship",
        title: "Startups & Entrepreneurship",
        blurb:
                "Move from founder intuition to a repeatable model without losing speed.",
        challenges: [
                "Finding repeatable, scalable growth",
                "Building first real processes",
                "Stretching limited resources",
              ],
  },
]  ;

export type BusinessType = {
    title: string;
};

export const businessTypes: BusinessType[] = [
  { title: "Startups" },
  { title: "MSMEs" },
  { title: "Family Businesses" },
  { title: "Small Businesses" },
  { title: "Mid-Sized Enterprises" },
  { title: "Large Enterprises" },
  { title: "High-Growth Companies" },
  { title: "D2C Brands" },
  { title: "Franchises" },
  ];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export type ApproachStep = {
  n: string;
  title: string;
  description: string;
};

export const approach: ApproachStep[] = [
  {
    n: "01",
    title: "Discover",
    description:
      "We immerse in your business, market, and numbers — listening before advising — to understand the real situation, not the surface symptoms.",
  },
  {
    n: "02",
    title: "Diagnose",
    description:
      "We pinpoint the few constraints holding growth back, separating root causes from noise so effort goes where it counts.",
  },
  {
    n: "03",
    title: "Design",
    description:
      "We co-create the strategy, systems, and plan — practical and tailored to your team, resources, and ambition.",
  },
  {
    n: "04",
    title: "Deliver",
    description:
      "We work alongside your people to implement, building capability as we go rather than handing over a report and leaving.",
  },
  {
    n: "05",
    title: "Drive Results",
    description:
      "We track the outcomes that matter, adjust as reality unfolds, and hand you systems that keep performing after we step back.",
  },
];

export type WhyPoint = { title: string; description: string };

export const whyChooseUs: WhyPoint[] = [
  {
    title: "Practical, Not Theoretical",
    description:
      "We don't deliver frameworks for the shelf. Everything we design is built to be run by your team in the real world.",
  },
  {
    title: "Industry Experience",
    description:
      "We bring patterns from across sectors and stages, so you benefit from what already works — adapted to your context.",
  },
  {
    title: "Customized Approach",
    description:
      "No templated playbooks. We design around your business model, market, and the people who'll execute the plan.",
  },
  {
    title: "Outcome Focused",
    description:
      "We measure ourselves by the results you achieve — growth, margin, and capability — not by slides delivered.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We aim to be the advisor you call for years, not a one-off engagement. Your sustained growth is the point.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They cut through years of indecision in weeks. For the first time, our leadership team is aligned on exactly where we're taking the business.",
    name: "Managing Director",
    role: "Managing Director",
    company: "Manufacturing SME, Tamil Nadu",
  },
  {
    quote:
      "Our sales used to depend on two people. Now we have a process the whole team runs, and new hires are productive in a fraction of the time.",
    name: "Sales Head",
    role: "Head of Sales",
    company: "Distribution Business",
  },
  {
    quote:
      "Pragmatic, structured, and genuinely invested in our outcomes. They built capability inside our team rather than creating dependence.",
    name: "Founder",
    role: "Founder & CEO",
    company: "Growth-stage Startup",
  },
  {
    quote:
      "The AI readiness work saved us from an expensive distraction and pointed us at two changes that actually paid back within the year.",
    name: "Operations Director",
    role: "Operations Director",
    company: "Retail Chain",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  approach: string;
  implementation: string;
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "manufacturing-distribution-expansion",
    client: "Mid-size Manufacturer",
    industry: "Manufacturing",
    title: "Tripling distribution reach without channel conflict",
    summary:
      "A regional manufacturer had plateaued. We redesigned its distribution architecture to open new territories while protecting existing partners.",
    metric: "3×",
    metricLabel: "active distribution points in 12 months",
    challenge:
      "Growth had stalled. Coverage was concentrated in a few districts, partners were under-incentivized, and earlier expansion attempts had triggered conflict between channels.",
    approach:
      "We audited channel economics, mapped white-space territories, and designed a tiered partner structure with clear margins, terms, and protected zones to prevent overlap.",
    implementation:
      "We co-built partner onboarding, incentive schemes, and a light governance rhythm, then supported the first two quarters of rollout alongside the sales leadership.",
    results: [
      "Active distribution points tripled within a year",
      "Channel conflict complaints fell to near zero",
      "Revenue from new territories became the primary growth driver",
    ],
  },
  {
    slug: "sme-sales-process",
    client: "B2B Services SME",
    industry: "SMEs",
    title: "From founder-led selling to a predictable engine",
    summary:
      "Revenue swung with the founder's calendar. We built a documented sales process the team could run independently.",
    metric: "40%",
    metricLabel: "shorter ramp time for new sales hires",
    challenge:
      "All meaningful selling ran through the founder. Forecasting was guesswork and new hires took the better part of a year to contribute.",
    approach:
      "We mapped the real buying journey, defined qualification and stage criteria, and built playbooks and tools so the process no longer lived in one person's head.",
    implementation:
      "We trained the team, set a weekly pipeline cadence, and coached the first cohort of reps through live deals using the new process.",
    results: [
      "New-hire ramp time cut by roughly 40%",
      "Pipeline became forecastable quarter to quarter",
      "Founder freed to focus on strategy and key accounts",
    ],
  },
  {
    slug: "family-business-transformation",
    client: "Second-generation Family Business",
    industry: "Family Businesses",
    title: "Professionalizing for the next generation",
    summary:
      "A respected family business needed structure to grow beyond its founders. We introduced governance, roles, and a growth plan.",
    metric: "5",
    metricLabel: "year roadmap with clear leadership ownership",
    challenge:
      "Decisions bottlenecked at the top, roles overlapped across family members, and there was no shared plan for the next phase of growth.",
    approach:
      "We clarified governance and roles, separated ownership from management decisions, and built a five-year growth roadmap the next generation could lead.",
    implementation:
      "We facilitated leadership alignment sessions, defined an operating cadence, and put performance metrics in place to track progress objectively.",
    results: [
      "Clear roles and faster decision-making",
      "A shared, documented growth roadmap",
      "Next-generation leaders owning delivery",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export type Insight = {
  slug: string;
  category: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  readMinutes: number;
  date: string;
  // Paragraphs render as plain text by default. A paragraph can start with
  // "## " or "### " to render as an H2 or H3 subheading instead, so longer,
  // more structured insights can have real section headings without
  // changing this field's shape for any of the existing shorter posts.
  body: string[];
  faqs?: Faq[];
  image?: string;
  scrollReveal?: boolean;
  markdown?: string;
};

export const insightCategories = [
  "Business Growth",
  "Sales",
  "Distribution",
  "Marketing",
  "Branding",
  "Leadership",
  "AI",
  "Operations",
];

export const insights: Insight[] = [
  {
    slug: "free-ai-tools-marketing-billing-customer-service",
    category: "Digital & AI",
    title: "Free AI Tools for Marketing, Billing and Customer Service",
    metaTitle:
      "Free AI Tools for Marketing, Billing and Customer Service (Guide)",
    excerpt:
      "A practical guide to the free AI tools that actually save a small business time — for writing, design, GST billing, WhatsApp and customer support. No budget required.",
    readMinutes: 18,
    date: "2026-08-27",
    image: "/images/blog-free-ai-tools.jpg",
    markdown: freeAiToolsMarkdown,
    body: [
      "You can run the marketing, billing and customer service side of a small business using free AI tools, without paying a rupee in software fees.",
    ],
    faqs: [
      {
        question: "What are the best free AI tools for a small business?",
        answer:
          "Five cover almost everything: ChatGPT or Google Gemini for writing, Canva for design, Zoho Invoice for GST billing, WhatsApp Business for customer messaging, and Tawk.to for website live chat.",
      },
      {
        question: "Which free billing software is best for Indian small businesses?",
        answer:
          "Zoho Invoice is the strongest free option. It is completely free rather than a limited tier, and handles GST-compliant invoicing, recurring bills, payment reminders and expense tracking.",
      },
      {
        question: "Is it safe to use free AI tools for business data?",
        answer:
          "It is safe for general content like marketing copy. It is not safe for customer personal data, employee records, bank details or login credentials. Remove identifying details first and switch off data training in your settings.",
      },
      {
        question: "Can AI handle customer service on its own?",
        answer:
          "No. AI handles repeated questions well, such as hours, location and availability. It handles complaints and unusual requests badly. Use it as a first layer that hands anything unusual to a person quickly.",
      },
      {
        question: "Will free AI tools stay free?",
        answer:
          "Some will, some will not. Free tiers have tightened across the industry. Assume any free plan could change within a year, keep exports of anything important, and avoid building critical processes on a plan you cannot replace.",
      },
    ],
  },
  {
    slug: "chennai-isnt-a-bigger-madurai",
    category: "Business Growth",
    title: "Chennai isn't a bigger Madurai",
    excerpt:
      "Chennai isn't a bigger Madurai — it's a different market, with different buyers and different competition. Here's how to expand the right way.",
    readMinutes: 9,
    date: "2026-08-18",
    body: [
      "Chennai isn't a bigger Madurai. It's a different market, with its own buyers, its own competitors, and its own way of building trust. Businesses that expand from Madurai into Chennai succeed by treating it as a fresh market: proving the approach on a small scale, repositioning for buyers who have never heard of them, and building the systems needed to deliver consistently at a distance from home. Businesses that simply copy what worked in Madurai usually struggle, no matter how strong their reputation is back home.",
      "## Why Chennai Isn't Just a Bigger Madurai",
      "Chennai is often called the Detroit of Asia. It produces well over a third of India's automobiles, anchors one of the country's largest IT and BPO industries, and has become a leading hub for electronics and EV manufacturing. For a business that has proven itself in a market like Madurai, Chennai looks like the obvious next step: bigger population, bigger budgets, bigger opportunity.",
      "But bigger isn't just more of the same. Chennai's buyers are used to dealing with larger, more process-driven vendors, and the competitive set already includes players with city-wide brand recognition built over many years. What builds trust in a tighter-knit market like Madurai, relationships, reputation, word of mouth, carries far less weight in Chennai, where a buyer might be choosing between dozens of vendors they have never heard of.",
      "### The Trap of Assuming Your Strengths Travel With You",
      "A business that has spent years earning a strong name in Madurai has an advantage that has nothing to do with its product: people know the owner, referrals flow naturally, and reputation does the selling. None of that history moves into Chennai. The business starts from zero there, competing against Chennai-based companies that already have that same kind of local trust. The product may still be excellent and the team may still be skilled, but the invisible advantages do not transfer. They have to be rebuilt, and that takes longer than most Madurai businesses expect, often a full year or more before the name means anything to a Chennai buyer on its own.",
      "## Are You Actually Ready to Expand Into Chennai?",
      "Not every business that has succeeded in Madurai is ready to take on Chennai. Readiness has less to do with how well things are going right now and more to do with whether that success can survive being copied somewhere else. A useful test: if the founder or a small core team were not personally involved day to day, would the quality of work stay the same? If a business depends heavily on one person's judgment or a tightly knit team's instincts, that is a warning sign, not a strength worth exporting to a market three times the size.",
      "Expansion into Chennai also works best when there is a clear signal that the Madurai market is close to its ceiling, not just a vague feeling that growth would be nice, and when there is enough cash set aside to survive a slower-than-expected start. Chennai rarely makes money quickly for a new entrant, because winning a first-time customer with no prior relationship costs more than retaining a loyal one back home. A useful gut check before committing: can the business describe what makes it worth choosing without mentioning how long it has operated in Madurai or how well known the founder is locally? If the honest answer leans heavily on local familiarity, that advantage will not exist on day one in Chennai.",
      "## Why Most Madurai-to-Chennai Expansions Fail",
      "Most failed expansions into Chennai are not failures of the product. They are failures of assumption. The single biggest mistake is copying the Madurai playbook: the same pitch, the same pricing, the same message, dropped into a market where nobody has heard the business's name or knows its track record. Close behind is underestimating Chennai's competitive intensity, researching the market from the outside and noticing only the gap to fill, while missing how entrenched the existing players already are. A third pattern is ignoring how trust gets built differently. In Madurai, trust often comes from relationships and community standing. In Chennai, it comes from process: documentation, professional presentation, case studies, and consistent reviews. A business that only knows how to build one kind of trust struggles when the market expects the other.",
      "## How Chennai Buyers Decide Who to Trust",
      "Buyer behavior itself changes between the two cities, even when job titles look identical on paper. Madurai buying decisions often lean on personal trust: a friend's recommendation, a founder's local reputation, a long-standing relationship that outweighs a slightly better price elsewhere. Chennai buyers are more likely to be one voice in a group decision, following a structured, comparison-driven process that expects multiple proposals and visible proof rather than a personal pitch. A Madurai business new to Chennai also starts with zero brand recognition there, and unknown vendors typically need more proof, more reassurance, and more patience before a Chennai buyer takes a chance on them.",
      "Online research plays a bigger role too: a Chennai buyer with no personal connection to a business will often check reviews, look for case studies, and search for proof before ever picking up the phone, which makes local visibility online part of how first impressions get formed. A Madurai business that has never needed a strong digital presence at home, because referrals did the work instead, often discovers this gap only after Chennai outreach quietly goes nowhere.",
      "## Building a Market Entry Strategy for Chennai",
      "A Chennai market entry strategy needs its own logic, not a bigger version of the marketing plan that worked in Madurai. It starts by accepting that reputation and brand recall do not exist yet in Chennai, which forces the business to build proof rather than assume it. Positioning has to be reworked around a simple question: why should a Chennai buyer, with dozens of options already available, choose an unfamiliar Madurai name over the alternatives they already trust? The go-to-market plan should assume the Chennai buyer has never heard of the business, leaning on visible proof, case studies, pilots, and reviews, rather than the personal networks that worked at home.",
      "### Prove the Model Before You Scale It",
      "Before hiring a large Chennai team or signing a long lease, the smarter move is proving the model works with a smaller footprint first: a remote start, a light local presence, or a handful of early Chennai customers, with a clear point built in from day one to review whether the evidence supports scaling further.",
      "### Consider a Chennai Partnership Before Going Alone",
      "A partnership with an established Chennai business can effectively lend a new entrant some of the trust it has not had time to build on its own. This is often faster and cheaper than trying to build that same trust from zero through advertising alone, though it does mean sharing some of the value with the partner in exchange for the head start. For a Madurai business with no existing Chennai relationships, this route is frequently underused simply because it was never needed at home.",
      "## Get Your Operations Ready, Not Just Your Pitch",
      "Strategy gets most of the attention in expansion planning, but operations quietly decide whether that strategy survives contact with Chennai's reality. In Madurai, a founder's personal involvement can paper over informal processes. That safety net disappears in Chennai, where a new team without daily founder oversight needs clear steps, clear ownership, and documented standards so quality does not depend on who happens to be handling it. If the reason something worked in Madurai lived only in someone's head, it cannot be copied into Chennai until it is written down.",
      "Running two markets at once also creates a new challenge: keeping standards consistent without forcing a single rigid process onto two different contexts. The businesses that manage this well usually separate what must stay identical, core quality standards, pricing discipline, brand values, from what is allowed to adapt, messaging, channel mix, and day-to-day delivery details.",
      "## Common Mistakes Madurai Businesses Make in Chennai",
      "The businesses that expand successfully treat Chennai as a distinct market, not a bigger version of Madurai: a positioning that explains why a Chennai buyer should choose an unfamiliar name over an established local option, a go-to-market plan built for a market where nobody already knows them, and enough operational discipline to deliver consistently once the first few deals land. A bigger Chennai marketing budget does not fix unclear positioning either; it just pushes an unclear message in front of more people faster. Metro markets also create pressure to look established quickly, tempting Madurai businesses to hire ahead of proven Chennai demand and lock in costs before the model has earned them. And underpricing to win early Chennai customers is hard to reverse later, since a market that anchors on a low price resists paying more once it has gotten used to it.",
      "## Budgeting for the Move to Chennai",
      "Budgeting for a Chennai expansion needs to include the costs that are easy to miss. Beyond the visible expenses, travel, a local presence, and marketing spend, there are hidden costs: a slower sales cycle caused by buyer unfamiliarity, extra leadership time spent overseeing a market the founder does not know as well, and the cost of early mistakes made while learning how Chennai buyers actually behave. A workable approach is to estimate the expected cost, then add a meaningful buffer and a longer timeline than feels comfortable, since markets that turn profitable faster than planned are a pleasant surprise, while markets that take longer than a tight best-case budget allowed for are what force rushed decisions.",
      "## How to Know Your Chennai Expansion Is Working",
      "Whether the Chennai expansion is working should be judged by real signals, checked regularly, not by assumptions made on day one. Useful signals include whether Chennai buyers are responding to outreach at a reasonable rate, whether deals are converting through the new go-to-market plan rather than relying on personal connections back in Madurai, and whether the cost of winning a new Chennai customer is trending down over time. If positioning still is not resonating after a fair test, and costs remain high with no improvement despite real effort, it is worth stepping back and asking honestly whether Chennai was the wrong market to enter next, or whether the execution needs a rework, rather than assuming the outcome alone tells the whole story.",
      "## What a Realistic First Year in Chennai Looks Like",
      "Madurai businesses that plan for a realistic first year in Chennai tend to fare better than those chasing a fast win. The first few months are usually about research and small, low-risk tests, not signed contracts: talking to real Chennai buyers, testing messaging, and identifying which parts of the Madurai offering need to change. The middle stretch is where proof gets built, a handful of early customers, case studies, and reviews that make the next pitch easier than the last. Revenue that actually justifies a larger local investment, a bigger team, a permanent office, a wider marketing push, usually shows up later than founders hope, and treating that delay as normal rather than a warning sign is part of what separates expansions that survive their first year from those that get pulled back too early out of impatience.",
      "### How Cup N Saucer Helps With This",
      "This is the exact gap we work in. We've helped Madurai and Tamil Nadu businesses plan and run their move into Chennai: sizing the opportunity honestly, rebuilding positioning for buyers who have never heard of the name, and designing a go-to-market plan built for a market where nothing is inherited from home. We also help set up the operational discipline, documented processes, clear ownership, a review cadence, that keeps quality consistent once a Chennai team is running day to day without the founder in the room. If you're weighing whether Chennai is the right next step, or you've already started and the traction isn't matching the effort, that's a conversation worth having before more budget goes in.",
      "## The Bottom Line",
      "Chennai isn't a bigger Madurai. It's a different market, with its own competitors, its own way of building trust, and its own rules for what works. Expansion doesn't create strengths and gaps that weren't already there, it just multiplies whichever ones exist. The Madurai businesses that succeed in Chennai are rarely the ones with the biggest budgets. They are the ones willing to test their assumptions instead of trusting them, and to let evidence from the new market, not past success in the old one, decide how fast they move.",
    ],
    faqs: [
      {
        question: "Is Chennai really that different from Madurai for a growing business?",
        answer:
          "Yes. Chennai buyers are more used to process-driven vendors and formal comparisons, and the competitive set already includes companies with citywide brand recognition. Trust that comes from relationships and reputation in Madurai carries far less weight there, so the market has to be approached on its own terms.",
      },
      {
        question: "What's the biggest mistake Madurai businesses make expanding to Chennai?",
        answer:
          "Copying the same pitch, pricing, and marketing message that worked in Madurai without adjusting it. A Chennai buyer has no context for the business's local reputation, so the message needs to build proof and trust from scratch rather than assume it already exists.",
      },
      {
        question: "How long does it usually take to become profitable in Chennai?",
        answer:
          "Longer than most founders expect. Winning a first-time Chennai customer with no prior relationship costs more than retaining a loyal Madurai customer, so a realistic budget should include a meaningful buffer and a longer timeline than feels comfortable.",
      },
      {
        question: "Should I hire a Chennai-based team before I have Chennai customers?",
        answer:
          "It's usually safer to prove the model works with a smaller footprint first, a remote start, a light local presence, or a handful of early customers, and scale the team once there's real evidence of demand, rather than locking in costs before the approach is proven.",
      },
      {
        question: "Do I need a different marketing message for Chennai than for Madurai?",
        answer:
          "Generally yes. Positioning that worked in Madurai often relied on local reputation and relationships that don't exist yet in Chennai, so the message usually needs to lean more on visible proof: case studies, reviews, and a clear reason to choose an unfamiliar name.",
      },
      {
        question: "Is it better to expand into Chennai slowly or all at once?",
        answer:
          "A slower, staged expansion that proves the model before scaling it generally carries less risk than a fast, full-scale launch. Moving quickly can still work, but only after positioning, pricing, and demand have already been tested and confirmed in the new market.",
      },
    ],
    image: "/images/insights/chennai-isnt-a-bigger-madurai.jpg",
    scrollReveal: true,
  },
  {
    slug: "growth-is-a-system-not-a-sprint",
    category: "Business Growth",
    title: "Growth is a system, not a sprint",
    excerpt:
      "Durable growth comes from compounding systems, not heroic quarters. Here's how to build the system.",
    readMinutes: 6,
    date: "2026-05-12",
    body: [
      "Most businesses treat growth as a series of sprints — a big push, a good quarter, then a return to baseline. The companies that compound do something different: they build systems that produce growth as a by-product of how they operate.",
      "A growth system has three parts. First, a clear thesis about where value comes from. Second, a small set of levers the team actually controls. Third, an operating cadence that turns the thesis into weekly action and learning.",
      "The work isn't glamorous. It's choosing fewer priorities, defining who owns each lever, and reviewing progress often enough to course-correct. But that discipline is exactly what turns a good quarter into a good decade.",
    ],
    image: "/images/insights/growth-is-a-system-not-a-sprint.jpg",
    scrollReveal: true,
  },
  {
    slug: "your-sales-process-lives-in-someones-head",
    category: "Sales",
    title: "If your sales process lives in someone's head, it isn't a process",
    metaTitle: "Undocumented Sales Processes Cap Your Growth",
    excerpt:
      "Undocumented selling caps your growth at the bandwidth of your best people. Make it a system.",
    readMinutes: 5,
    date: "2026-04-28",
    body: [
      "When selling depends on intuition and relationships held by a few individuals, the business carries hidden risk: results swing with mood and calendar, forecasts are guesses, and every new hire is a slow, expensive bet.",
      "A real process makes the implicit explicit. It names the stages a buyer moves through, defines what has to be true to advance, and equips the team with the tools to do it consistently. That's what makes performance coachable.",
      "You don't lose the art of selling by writing it down. You give more people the chance to be good at it — and you give yourself a pipeline you can actually trust.",
    ],
    image: "/images/insights/your-sales-process-lives-in-someones-head.jpg",
    scrollReveal: true,
  },
  {
    slug: "distribution-is-strategy",
    category: "Distribution",
    title: "Distribution is strategy, not an afterthought",
    excerpt:
      "How you reach the customer is as much a competitive advantage as what you sell.",
    readMinutes: 6,
    date: "2026-04-10",
    body: [
      "Plenty of strong products lose to weaker ones with better distribution. Reach, availability, and partner motivation often matter more than features — yet distribution is frequently left to grow by accident.",
      "Designed deliberately, distribution becomes a moat. The right channel architecture, partner profiles, and incentives can extend your reach faster than competitors can copy your product.",
      "Start by mapping where your customers actually are and how they prefer to buy. Then build the channel structure backward from that — not forward from your existing relationships.",
    ],
  },
  {
    slug: "ai-readiness-before-ai-ambition",
    category: "AI",
    title: "AI readiness should come before AI ambition",
    excerpt:
      "The question isn't whether to use AI. It's where it creates value for your specific business.",
    readMinutes: 7,
    date: "2026-03-22",
    body: [
      "There's real pressure on leaders to 'do something with AI'. That pressure produces a lot of motion and not much value, because the technology is adopted before the problem is defined.",
      "Readiness is about three things: data you can actually use, processes clear enough to improve, and a team able to absorb change. Where those exist, AI can deliver outsized returns. Where they don't, it's an expensive distraction.",
      "The pragmatic path is to score a handful of concrete use cases by value, effort, and risk — then start with one or two that pay back quickly and build confidence for the rest.",
    ],
  },
  {
    slug: "positioning-beats-promotion",
    category: "Branding",
    title: "Positioning beats promotion",
    excerpt:
      "A clear position in the customer's mind does more for growth than a bigger ad budget.",
    readMinutes: 5,
    date: "2026-03-05",
    body: [
      "When a brand isn't clearly positioned, every marketing rupee works harder for less return, because the message has to re-explain the business each time. Customers default to comparing on price.",
      "Positioning answers three questions crisply: who are you for, what do you stand for, and why are you the better choice. Get those right and promotion amplifies a clear signal instead of compensating for a muddy one.",
      "It's cheaper to be clear than to be loud. Sharpen the position first; the funnel and the spend become far more efficient afterward.",
    ],
  },
  {
    slug: "operations-that-scale",
    category: "Operations",
    title: "The operations that got you here won't scale you there",
    excerpt:
      "Informal processes are a feature at ten people and a liability at a hundred.",
    readMinutes: 6,
    date: "2026-02-18",
    body: [
      "Early on, informal operations are an advantage — fast, flexible, and run by people who care. But the same informality that helped you start will quietly cap how far you can grow.",
      "As volume rises, undocumented processes produce inconsistency, rework, and constant firefighting. Quality becomes a function of who happened to handle the order.",
      "Scaling means systematizing the core: mapping the processes that matter, removing waste, and documenting them so quality holds regardless of who's on shift. Structure is what lets you grow without breaking.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export function getRelatedInsights(slug: string, count = 3) {
  const currentIndex = insights.findIndex((i) => i.slug === slug);
  if (currentIndex === -1) return [];
  const current = insights[currentIndex];
  // Walk the list starting from the *next* item and wrapping around, so
  // link distribution is balanced instead of always favoring the first
  // few entries in the array (which would otherwise starve later items
  // of inbound internal links).
  const circular = insights
    .slice(currentIndex + 1)
    .concat(insights.slice(0, currentIndex));
  const sameCategory = circular.filter((i) => i.category === current.category);
  const rest = circular.filter((i) => i.category !== current.category);
  // Cap same-category picks so at least one slot always goes to a
  // different category, keeping link distribution balanced even if
  // category sizes are uneven.
  const samePicks = sameCategory.slice(0, Math.min(2, count - 1));
  const restPicks = rest.slice(0, count - samePicks.length);
  return [...samePicks, ...restPicks];
}
