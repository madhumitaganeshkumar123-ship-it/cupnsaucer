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
    slug: "how-to-expand-your-business-into-a-new-city",
    category: "Business Growth",
    title: "How to Expand Your Business Into a New City the Right Way",
    excerpt:
      "Expanding into a new city works best when you treat it as a brand-new market, not a bigger copy of the one you already know.",
    readMinutes: 9,
    date: "2026-08-18",
    body: [
      "Expanding into a new city means treating it as its own market, not a bigger copy of the one you already know. Buyers behave differently, competitors are already established, and the trust you built at home does not travel with you automatically. Businesses that succeed at expansion prove their model on a small scale first, rebuild their positioning for local buyers, and put real systems behind what used to run on instinct. Businesses that skip these steps usually struggle, no matter how strong their track record was back home.",
      "It is tempting to think a bigger city is just more of the same, more people, more budgets, more customers waiting to be found. That idea feels logical, and it is also one of the most common reasons expansion fails. A bigger city is a different market with its own rules. The competition is different. The way people decide who to trust is different. A business that has spent ten years earning a strong local name has an advantage that has nothing to do with its product: neighbors know the owner, referrals flow naturally, and reputation does the selling. None of that history moves with the business into a new city. It starts from zero there, competing against businesses that already have that same decade of local trust.",
      "This is the trap. A business assumes its strengths automatically apply somewhere new. Often only some of them do. The product may still be excellent and the team may still be skilled, but the invisible advantages, relationships, word of mouth, a familiar name, do not transfer. They have to be rebuilt from scratch, and that takes time most businesses underestimate. A company that has grown well in a closer-knit, mid-sized city can expect a much larger metro market to behave completely differently. Buyers there are used to dealing with bigger, process-driven vendors who offer formal onboarding and dedicated account managers, and the competitive set already includes names with citywide recognition built over years. What worked at home, relationships and referrals, carries far less weight when a buyer is choosing between dozens of vendors they have never heard of. This pattern shows up wherever a business moves from a smaller, closer market into a larger, more competitive one. The city names change; the underlying lesson does not.",
      "Not every successful business is ready to make this move. Readiness has less to do with how well things are going right now and more to do with whether that success can survive being copied somewhere else. A good starting test: if you were not personally involved day to day, would quality stay the same? If a business depends heavily on one founder's judgment or a tightly connected team's instincts, that is a warning sign, not a strength worth exporting. A repeatable process, one a new team in a new city can follow and deliver consistent results with, is what actually travels well. Expansion also works best when it follows a clear signal that the current market is close to its limit, not a vague feeling that growth would be nice, and when there is enough cash set aside to survive a slower-than-expected start. New markets rarely make money quickly, because winning a first-time customer with no prior relationship costs more than retaining a loyal one.",
      "Most failed expansions are not failures of the product. They are failures of assumption. The single biggest mistake is copying the home-market playbook: the same pitch, the same pricing, the same message, dropped into a market where nobody has heard your name or knows your track record. Close behind is underestimating local competition, researching a new market from the outside and noticing only the gap to fill, while missing how entrenched the existing players already are. A third pattern is ignoring how trust gets built differently. In smaller markets, trust often comes from relationships and community standing. In larger, more anonymous markets, it comes from process: documentation, professional presentation, case studies, and consistent reviews. A business that only knows how to build one kind of trust struggles when the market expects the other. And hiring a full local team before the model has been tested locks in fixed costs before there is any evidence the approach will actually work.",
      "Buyer behavior itself changes between markets, even when job titles look identical on paper. Smaller-city buying decisions often lean on personal trust: a friend's recommendation, a founder's local reputation, a long-standing relationship that outweighs a slightly better price elsewhere. Larger metro buyers are more likely to be one voice in a group decision, following a structured, comparison-driven process that expects multiple proposals and visible proof rather than a personal pitch. A business new to the market also starts with zero brand recognition, and unknown vendors typically need more proof, more reassurance, and more patience before a buyer takes a chance on them. Even the same product can solve different problems in different places: something that saves a small owner time in one city might matter in a bigger one mainly because it reduces risk for a larger team. Assuming the same pitch lands the same way everywhere is how good products get rejected by the right buyers for the wrong reasons. Online research plays a bigger role too, since a buyer with no personal connection to a business will often check reviews, look for case studies, and search for proof before ever picking up the phone, which makes local visibility online part of how first impressions get formed in a new city.",
      "A market entry strategy needs its own logic, not a bigger version of the existing marketing plan. It starts by accepting that reputation and brand recall do not exist yet in the new market, which forces a business to build proof rather than assume it. Positioning has to be reworked around a simple question: why should this buyer, in this market, choose an unfamiliar name over the alternatives they already trust? The go-to-market plan should assume the buyer has never heard of the business, leaning on visible proof, case studies, pilots, and reviews, rather than the personal networks that worked at home. Before hiring a large local team or signing a long lease, the smarter move is proving the model works with a smaller footprint first: a remote start, a light local presence, or a handful of early customers, with a clear point built in from day one to review whether the evidence supports scaling further.",
      "Strategy gets most of the attention in expansion planning, but operations quietly decide whether that strategy survives contact with reality. In a familiar market, a founder's personal involvement can paper over informal processes. That safety net disappears in a new city, where a new team without daily founder oversight needs clear steps, clear ownership, and documented standards so quality does not depend on who happens to be handling it. If the reason something worked at home lived only in someone's head, it cannot be copied into a new market until it is written down. Running the new market entirely from headquarters, without any real local capability, tends to leave a business a step behind on decisions that need to happen quickly and locally.",
      "Moving from a smaller, tighter-knit city into a larger metro brings its own specific traps. A bigger available marketing budget does not fix unclear positioning; it just pushes an unclear message in front of more people faster. Metro markets also create pressure to look established quickly, tempting businesses to hire ahead of proven demand and lock in costs before the model has earned them. Direct relationships that work well in smaller cities often need to be supplemented with partnerships in bigger ones, since an established local partner can lend a new entrant trust it has not had time to build alone. And underpricing to win early customers is hard to reverse later, since a market that anchors on a low price resists paying more once it has gotten used to it. Competing on proof, specialization, and service tends to hold up better over time than competing purely on price.",
      "Budgeting for expansion also needs to include the costs that are easy to miss. Beyond the visible expenses, local hires, travel, and marketing spend, there are hidden costs: a slower sales cycle caused by buyer unfamiliarity, extra leadership time spent overseeing an unfamiliar market, and the cost of early mistakes made while learning how the new city actually behaves. A workable approach is to estimate the expected cost, then add a meaningful buffer and a longer timeline than feels comfortable, since markets that turn profitable faster than planned are a pleasant surprise, while markets that take longer than a tight best-case budget allowed for are what force rushed, poorly considered decisions.",
      "Whether expansion is working should be judged by real signals, checked regularly, not by assumptions made on day one. Useful signals include whether new-market buyers are responding to outreach at a reasonable rate, whether deals are converting through the new go-to-market plan rather than relying on personal connections back home, and whether the cost of winning a new customer is trending down over time. If positioning still is not resonating after a fair test, and costs remain high with no improvement despite real effort, it is worth stepping back and asking honestly whether the market was the wrong fit or whether the execution needs a rework, rather than assuming the outcome alone tells the whole story. Pulling back at that point is not the same as failing; it is often what keeps a recoverable setback from turning into a much larger one.",
      "A bigger city is not a bigger version of the market a business already knows. It is a different market, with its own competitors, its own way of building trust, and its own rules for what actually works. Respecting that difference, instead of assuming an existing playbook will simply scale up, is what separates expansion that builds lasting growth from expansion that quietly drains resources for years. The businesses that get this right are rarely the ones with the biggest budgets. They are the ones willing to test their assumptions instead of trusting them, and to let evidence, not past success elsewhere, decide how fast they move.",
      "A few questions come up often. How do you know if a business is ready to expand? Usually when there is a repeatable process that does not depend entirely on one person, a visible ceiling in the current market, and enough cash reserves for a slower start than hoped. What is the single biggest mistake in expansion? Assuming the same pricing, pitch, and message that worked at home will automatically work in a new city, instead of repositioning for buyers who have never heard of the business. How long does a new market usually take to turn a profit? Longer than founders expect going in, because winning unfamiliar buyers costs more than keeping loyal ones, which is why a realistic budget always includes a buffer and a longer timeline than feels comfortable. Should a full local team be hired before entering a new city? It is safer to prove the model works with a smaller footprint first and scale the team once real demand has shown up, rather than locking in costs before there is evidence to support them.",
    ],
    scrollReveal: true,
  },
  {
    slug: "chennai-isnt-a-bigger-madurai",
    category: "Business Growth",
    title: "Chennai isn't a bigger Madurai",
    excerpt:
      "Chennai isn't a bigger Madurai — it's a different market, with different buyers and different competition. Treat it that way.",
    readMinutes: 4,
    date: "2026-08-04",
    body: [
      "Chennai is often called the Detroit of Asia. It produces well over a third of India's automobiles, anchors one of the country's largest IT and BPO industries, and has become a leading hub for electronics and EV manufacturing. For a business that has proven itself in a market like Madurai, Chennai looks like the obvious next step: bigger population, bigger budgets, bigger opportunity.",
      "But bigger isn't just more of the same. Chennai's buyers are used to dealing with larger, more process-driven vendors, and the competitive set already includes players with city-wide brand recognition. What builds trust in a tighter-knit market — relationships, reputation, word of mouth — carries far less weight when you're one of hundreds of similar businesses a buyer has never heard of.",
      "The businesses that expand successfully treat the new city as a distinct market, not a bigger version of the old one: a positioning that explains why a Chennai buyer should choose an unfamiliar name over an established local option, a go-to-market plan built for a market where nobody already knows you, and enough operational discipline to deliver consistently once the first few deals land. Expansion doesn't create strengths and gaps that weren't already there — it just multiplies whichever ones exist.",
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
