// Industries, the consulting approach, why-choose-us, testimonials,
// case studies, and insights — all in one content module for easy editing.

export type Industry = {
  slug: string;
  title: string;
  blurb: string;
  challenges: string[];
};

export const industries: Industry[] = [
  {
    slug: "startups",
    title: "Startups",
    blurb:
      "Move from founder intuition to a repeatable model without losing speed.",
    challenges: [
      "Finding repeatable, scalable growth",
      "Building first real processes",
      "Stretching limited resources",
    ],
  },
  {
    slug: "smes",
    title: "SMEs",
    blurb:
      "Professionalize the business so it can grow beyond the owner's bandwidth.",
    challenges: [
      "Owner-dependence and key-person risk",
      "Informal processes under strain",
      "Stalled or inconsistent growth",
    ],
  },
  {
    slug: "family-businesses",
    title: "Family Businesses",
    blurb:
      "Balance legacy and ambition with structure the next generation can lead.",
    challenges: [
      "Governance and role clarity",
      "Succession and professionalization",
      "Modernizing without losing values",
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
    slug: "retail",
    title: "Retail Businesses",
    blurb:
      "Sharpen the customer experience and the unit economics behind it.",
    challenges: [
      "Footfall, conversion, and basket size",
      "Inventory and margin discipline",
      "Omnichannel and customer loyalty",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing Companies",
    blurb:
      "Expand distribution and operational discipline to capture more demand.",
    challenges: [
      "Distribution and channel expansion",
      "Operational efficiency and quality",
      "Moving from volume to value",
    ],
  },
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
  body: string[];
  image?: string;
  scrollReveal?: boolean;
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
    slug: "chennai-isnt-a-bigger-madurai",
    category: "Business Growth",
    title: "Chennai isn't a bigger Madurai",
    excerpt:
      "Chennai isn't a bigger Madurai \u2014 it's a different market, with different buyers and different competition. Treat it that way.",
    readMinutes: 4,
    date: "2026-08-04",
    body: [
      "Chennai is often called the Detroit of Asia. It produces well over a third of India's automobiles, anchors one of the country's largest IT and BPO industries, and has become a leading hub for electronics and EV manufacturing. For a business that has proven itself in a market like Madurai, Chennai looks like the obvious next step: bigger population, bigger budgets, bigger opportunity.",
      "But bigger isn't just more of the same. Chennai's buyers are used to dealing with larger, more process-driven vendors, and the competitive set already includes players with city-wide brand recognition. What builds trust in a tighter-knit market \u2014 relationships, reputation, word of mouth \u2014 carries far less weight when you're one of hundreds of similar businesses a buyer has never heard of.",
      "The businesses that expand successfully treat the new city as a distinct market, not a bigger version of the old one: a positioning that explains why a Chennai buyer should choose an unfamiliar name over an established local option, a go-to-market plan built for a market where nobody already knows you, and enough operational discipline to deliver consistently once the first few deals land. Expansion doesn't create strengths and gaps that weren't already there \u2014 it just multiplies whichever ones exist.",
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
