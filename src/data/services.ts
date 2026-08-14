import type { Faq } from "./faq";

// Seven service pillars shown on the home page, plus the full catalogue of
// individual service offerings rendered at /services/[slug].

export type Pillar = {
  slug: string;
  icon: "strategy" | "sales" | "people" | "marketing" | "operations" | "ai" | "branding";
  title: string;
  short: string;
};

export const pillars: Pillar[] = [
  {
    slug: "business-strategy-development",
    icon: "strategy",
    title: "Business Strategy & Growth Consulting",
    short:
      "Define where to play and how to win — with a growth thesis your whole team can execute against.",
  },
  {
    slug: "sales-process-design",
    icon: "sales",
    title: "Sales & Distribution Excellence",
    short:
      "Build predictable revenue engines and expand distribution into new territories and channels.",
  },
  {
    slug: "performance-management-systems",
    icon: "people",
    title: "Organizational Development",
    short:
      "Align people, structure, and incentives so the organization can carry the growth you plan for.",
  },
  {
    slug: "marketing-strategy",
    icon: "marketing",
    title: "Marketing & Customer Growth",
    short:
      "Position the brand, sharpen the funnel, and turn marketing spend into measurable customer growth.",
  },
  {
    slug: "process-optimization",
    icon: "operations",
    title: "Operational Excellence",
    short:
      "Document, streamline, and systematize operations so quality holds as you scale.",
  },
  {
    slug: "digital-transformation",
    icon: "ai",
    title: "AI & Digital Transformation",
    short:
      "Assess AI readiness and modernize how the business runs — pragmatically, not for hype.",
  },
  {
    slug: "digital-marketing-services",
    icon: "branding",
    title: "Branding & Creative Marketing",
    short:
      "Build a brand people recognize and campaigns that get talked about — identity, advertising, and digital execution.",
  },
];

export type Service = {
  slug: string;
  category: string;
  title: string;
  // Optional SEO overrides. Falls back to `title` / `summary` when not set —
  // used sparingly, only on pages with real local search volume, so we're
  // not stuffing city names into services nobody searches for by location.
  metaTitle?: string;
  metaDescription?: string;
  summary: string;
  problem: string;
  solution: string;
  methodology: string[];
  outcomes: string[];
  faqs?: Faq[];
};

export const services: Service[] = [
  {
    slug: "business-strategy-development",
    category: "Strategy & Growth",
    title: "Business Strategy Development",
    summary:
      "A clear growth thesis: where to play, how to win, and what to build first.",
    problem:
      "Many businesses are busy without being strategic. Decisions are made reactively, resources are spread thin across too many bets, and there is no shared definition of what winning looks like.",
    solution:
      "We work with leadership to build a focused strategy grounded in market reality — clarifying your positioning, your highest-value opportunities, and the sequence of moves that turn ambition into a plan the organization can actually run.",
    methodology: [
      "Diagnose the current model, market position, and economics",
      "Map opportunities by attractiveness and right-to-win",
      "Define the growth thesis and strategic priorities",
      "Translate strategy into a phased execution roadmap",
    ],
    outcomes: [
      "A documented strategy leadership genuinely aligns on",
      "Clear priorities that stop resource scatter",
      "A roadmap with owners, milestones, and metrics",
    ],
  },
  {
    slug: "growth-planning",
    category: "Strategy & Growth",
    title: "Growth Planning",
    summary:
      "Turn a strategy into a quarter-by-quarter plan with realistic numbers and owners.",
    problem:
      "Growth targets are often set top-down with no clear path to reach them, so teams chase numbers they don't believe in.",
    solution:
      "We build a bottom-up growth plan that connects targets to specific levers — pricing, channels, segments, and capacity — so every number has an owner and a mechanism behind it.",
    methodology: [
      "Model the growth levers and their realistic ceilings",
      "Stress-test targets against capacity and cash",
      "Sequence initiatives across quarters",
      "Set the operating cadence to track and adjust",
    ],
    outcomes: [
      "A credible plan the team commits to",
      "Visibility into which levers move the number",
      "A review rhythm that catches drift early",
    ],
  },
  {
    slug: "market-expansion-strategy",
    category: "Strategy & Growth",
    title: "Market Expansion Strategy",
    summary:
      "Enter new geographies or segments with a tested, de-risked approach.",
    problem:
      "Expansion often fails because it copies the home-market playbook into a market that behaves differently.",
    solution:
      "We size the opportunity, choose the right entry model, and design a beachhead approach that proves demand before you commit heavy investment.",
    methodology: [
      "Size and prioritize target markets",
      "Select entry model and partnership structure",
      "Design a beachhead and validation milestones",
      "Plan the scale-up once the model is proven",
    ],
    outcomes: [
      "A prioritized list of where to expand and why",
      "A lower-risk, staged entry plan",
      "Clear go / no-go criteria before scaling",
    ],
  },
  {
    slug: "go-to-market-planning",
    category: "Strategy & Growth",
    title: "Go-To-Market Planning",
    summary:
      "A launch plan that aligns product, pricing, channels, and messaging.",
    problem:
      "Good products underperform when the route to the customer is unclear or the message doesn't land.",
    solution:
      "We define the target buyer, the value proposition, the pricing logic, and the channel mix — then sequence the launch so each part reinforces the next.",
    methodology: [
      "Define ideal customer and buying journey",
      "Set positioning, messaging, and pricing",
      "Choose and prioritize the channel mix",
      "Build the launch sequence and metrics",
    ],
    outcomes: [
      "A coherent GTM plan across functions",
      "Faster, cleaner launches",
      "Early signal on what is working",
    ],
  },
  {
    slug: "sales-process-design",
    category: "Sales & Distribution",
    title: "Sales Process Design",
    summary:
      "A repeatable sales process that reduces dependence on a few star performers.",
    problem:
      "When sales lives in people's heads, results swing wildly and new hires take far too long to become productive.",
    solution:
      "We design a clear, stage-based sales process with defined activities, qualification criteria, and tools — so performance becomes coachable and predictable.",
    methodology: [
      "Map the real buying and selling stages",
      "Define qualification and stage-exit criteria",
      "Build playbooks, scripts, and tools",
      "Set the metrics and coaching cadence",
    ],
    outcomes: [
      "A predictable, documented sales process",
      "Faster ramp for new sales hires",
      "A pipeline you can forecast with confidence",
    ],
  },
  {
    slug: "distribution-expansion",
    category: "Sales & Distribution",
    title: "Distribution Expansion",
    summary:
      "Reach more customers through the right channel partners and structures.",
    problem:
      "Distribution often grows by accident, leaving coverage gaps, channel conflict, and partners who aren't incentivized to push.",
    solution:
      "We design a distribution architecture — channel mix, partner profiles, margins, and coverage — that extends reach without cannibalizing existing business.",
    methodology: [
      "Audit current coverage and channel economics",
      "Design the target channel architecture",
      "Define partner profiles, terms, and incentives",
      "Plan onboarding and channel governance",
    ],
    outcomes: [
      "Wider, more deliberate market coverage",
      "Healthier channel margins and fewer conflicts",
      "Partners motivated to grow your volume",
    ],
  },
  {
    slug: "territory-optimization",
    category: "Sales & Distribution",
    title: "Territory Optimization",
    summary:
      "Balance territories so effort matches opportunity, not history.",
    problem:
      "Territories drawn years ago rarely match where the opportunity is today, so some reps are overloaded while others coast.",
    solution:
      "We rebalance territories and quotas against real potential, improving coverage and fairness while lifting overall productivity.",
    methodology: [
      "Quantify opportunity by geography and segment",
      "Model coverage and workload balance",
      "Redesign territories and quotas",
      "Plan the transition to limit disruption",
    ],
    outcomes: [
      "Territories matched to real potential",
      "Fairer quotas and better morale",
      "Higher productivity per rep",
    ],
  },
  {
    slug: "sales-training",
    category: "Sales & Distribution",
    title: "Sales Training",
    metaTitle: "Sales Training for Teams | Madurai & Chennai",
    metaDescription:
      "Hands-on sales training for teams in Madurai and Chennai — practical workshops on discovery, objection handling, and negotiation, built around your real sales process.",
    summary:
      "Hands-on training that turns your sales process into a skill your team actually has.",
    problem:
      "A great sales process on paper doesn't help if reps haven't internalized how to run it — objection handling, discovery, and negotiation stay inconsistent, and ramp time for new hires drags on.",
    solution:
      "We deliver practical, role-specific sales training — covering discovery, objection handling, negotiation, and pipeline discipline — built around your actual process and real deal scenarios, not generic theory. Training is reinforced with coaching and role-play so it sticks. We run these workshops on-site in Madurai and Chennai, or remotely for distributed teams.",
    methodology: [
      "Assess current sales skill gaps and call/deal patterns",
      "Design a training curriculum mapped to your sales stages",
      "Run live workshops with role-play on real scenarios",
      "Reinforce with manager coaching guides and follow-up sessions",
    ],
    outcomes: [
      "A team that runs the sales process consistently, not just knows it",
      "Faster ramp-up for new sales hires",
      "Higher win rates on qualified opportunities",
    ],
    faqs: [
      {
        question: "Do you train teams in Madurai and Chennai?",
        answer:
          "Yes, we run in-person workshops in both cities, and remote sessions for distributed teams.",
      },
      {
        question: "How long is a typical training program?",
        answer:
          "Most programs run as a series of half-day workshops over 3–4 weeks, reinforced with manager coaching afterward.",
      },
    ],
  },
  {
    slug: "performance-management-systems",
    category: "Organizational Development",
    title: "Performance Management Systems",
    summary:
      "Goals, metrics, and reviews that actually drive performance.",
    problem:
      "Performance systems often measure activity instead of outcomes, so they create paperwork rather than results.",
    solution:
      "We design a performance framework that connects individual goals to business outcomes, with metrics people understand and a review cadence that drives action.",
    methodology: [
      "Define outcome-based goals and metrics",
      "Cascade goals across roles and teams",
      "Design the review and feedback cadence",
      "Link recognition and development to results",
    ],
    outcomes: [
      "Clear line of sight from role to results",
      "Reviews that drive action, not just ratings",
      "A stronger performance culture",
    ],
  },
  {
    slug: "marketing-strategy",
    category: "Marketing & Customer Growth",
    title: "Marketing Strategy",
    metaTitle: "Marketing Strategy Consulting | Madurai & Chennai",
    metaDescription:
      "Marketing strategy consulting for growing businesses in Madurai and Chennai — a plan tied to revenue and pipeline, not vanity metrics.",
    summary:
      "A marketing plan tied to revenue, not vanity metrics.",
    problem:
      "Marketing budgets are often spent on activity with no clear link to pipeline or revenue.",
    solution:
      "We build a marketing strategy anchored in your best customers and the journey they take — for businesses in Madurai, Chennai, and across Tamil Nadu — focusing spend on the channels and messages that actually convert.",
    methodology: [
      "Define target segments and value proposition",
      "Map the customer journey and funnel",
      "Prioritize channels by return potential",
      "Set the measurement framework",
    ],
    outcomes: [
      "Marketing spend tied to pipeline",
      "A clearer, more consistent brand story",
      "Metrics that inform real decisions",
    ],
    faqs: [
      {
        question: "Do you work with businesses outside Madurai?",
        answer:
          "Yes — we work with businesses across Madurai, Chennai, and Tamil Nadu more broadly, in person and remotely.",
      },
      {
        question: "How long does a marketing strategy engagement take?",
        answer:
          "Most marketing strategy engagements run 4–6 weeks, from diagnosis to a documented plan your team can execute.",
      },
    ],
  },
  {
    slug: "brand-positioning",
    category: "Marketing & Customer Growth",
    title: "Brand Positioning",
    metaTitle: "Brand Positioning & Strategy | Madurai & Chennai",
    metaDescription:
      "Brand positioning strategy for businesses in Madurai and Chennai — a distinct market position that justifies your price and guides every touchpoint.",
    summary:
      "A distinct position in the customer's mind that justifies your price.",
    problem:
      "Undifferentiated brands compete on price and get squeezed from both ends.",
    solution:
      "We clarify what you stand for, who you're for, and why you're the better choice for customers in Madurai and Chennai — then express it consistently across every touchpoint.",
    methodology: [
      "Research customers, competitors, and category",
      "Define the positioning and value proposition",
      "Build the messaging architecture",
      "Guide rollout across touchpoints",
    ],
    outcomes: [
      "A clear, defensible market position",
      "Consistent messaging across channels",
      "Less pressure to compete on price",
    ],
    faqs: [
      {
        question: "Is brand positioning different from branding?",
        answer:
          "Yes. Positioning is the strategic groundwork — what you stand for and why customers should choose you. Branding is the visual and creative expression of that positioning. We offer both, and recommend positioning first.",
      },
      {
        question: "Do you work with businesses in Chennai as well as Madurai?",
        answer:
          "Yes, we work with businesses across both cities and Tamil Nadu more broadly.",
      },
    ],
  },
  {
    slug: "digital-marketing-advisory",
    category: "Marketing & Customer Growth",
    title: "Digital Marketing Advisory",
    metaTitle: "Digital Marketing Advisory | Madurai & Chennai",
    metaDescription:
      "Independent digital marketing audit and advisory for businesses in Madurai and Chennai — an objective view on where your digital spend actually earns its return.",
    summary:
      "An objective view on where digital spend earns its return.",
    problem:
      "It's hard to tell whether agencies and platforms are delivering value or just spending budget.",
    solution:
      "As an independent advisor to businesses in Madurai and Chennai, we audit your digital marketing, set the right metrics, and build a channel plan focused on profitable growth — not platform hype.",
    methodology: [
      "Audit current channels and performance",
      "Define metrics and attribution approach",
      "Prioritize channels and budget allocation",
      "Set governance for agencies and tools",
    ],
    outcomes: [
      "Clarity on what's working and what isn't",
      "Better return on digital spend",
      "Accountability from agencies and platforms",
    ],
    faqs: [
      {
        question: "How is this different from your Digital Marketing service?",
        answer:
          "Digital Marketing Advisory is an independent audit — we review your existing agency or channels and tell you what's working. Our Digital Marketing service is hands-on execution, where we run the channels ourselves.",
      },
      {
        question: "Can you audit an agency we already work with in Madurai or Chennai?",
        answer:
          "Yes — that's one of the most common reasons businesses bring us in.",
      },
    ],
  },
  {
    slug: "customer-experience-design",
    category: "Marketing & Customer Growth",
    title: "Customer Experience Design",
    summary:
      "Design the end-to-end experience that earns loyalty and referrals.",
    problem:
      "Disjointed experiences quietly cost businesses repeat purchases and word of mouth.",
    solution:
      "We map the full customer journey, find the moments that matter, and redesign them so the experience builds loyalty and advocacy.",
    methodology: [
      "Map the end-to-end customer journey",
      "Identify pain points and moments of truth",
      "Redesign priority experiences",
      "Set experience metrics and feedback loops",
    ],
    outcomes: [
      "Higher retention and repeat business",
      "More referrals and advocacy",
      "A measurable experience standard",
    ],
  },
  {
    slug: "process-optimization",
    category: "Operational Excellence",
    title: "Process Optimization",
    summary:
      "Remove friction and waste so operations scale without breaking.",
    problem:
      "As businesses grow, informal processes buckle — leading to delays, errors, and firefighting.",
    solution:
      "We map your core processes, eliminate waste, and redesign workflows so quality and speed hold up as volume increases.",
    methodology: [
      "Map core end-to-end processes",
      "Identify bottlenecks and rework",
      "Redesign streamlined workflows",
      "Implement controls and measures",
    ],
    outcomes: [
      "Faster cycle times with fewer errors",
      "Operations that scale predictably",
      "Less firefighting, more flow",
    ],
  },
  {
    slug: "sop-development",
    category: "Operational Excellence",
    title: "SOP Development",
    summary:
      "Capture how the business runs so it doesn't depend on a few people.",
    problem:
      "When critical knowledge lives only in people's heads, every absence is a risk and every new hire is slow.",
    solution:
      "We document clear, usable standard operating procedures for your core processes — so quality is consistent and the business is less dependent on individuals.",
    methodology: [
      "Prioritize processes to document",
      "Capture steps with the people who do them",
      "Write clear, usable SOPs",
      "Set a review and update routine",
    ],
    outcomes: [
      "Consistent quality across the team",
      "Faster, more confident onboarding",
      "Reduced key-person risk",
    ],
  },
  {
    slug: "ai-readiness-assessment",
    category: "AI & Digital Transformation",
    title: "AI Readiness Assessment",
    summary:
      "An honest assessment of where AI can help — and where it can't yet.",
    problem:
      "There's pressure to 'do AI', but few businesses know where it actually creates value versus where it's a distraction.",
    solution:
      "We assess your data, processes, and team against practical AI use cases — then recommend a focused, low-risk set of first moves with real payback.",
    methodology: [
      "Assess data, processes, and capability",
      "Identify and score practical use cases",
      "Estimate value, effort, and risk",
      "Recommend a prioritized starting roadmap",
    ],
    outcomes: [
      "A clear-eyed view of AI opportunities",
      "A prioritized, low-risk starting point",
      "Avoided spend on AI that won't pay off",
    ],
  },
  {
    slug: "digital-transformation",
    category: "AI & Digital Transformation",
    title: "Digital Transformation",
    summary:
      "Modernize how the business runs — sequenced so the organization keeps up.",
    problem:
      "Transformation programs often stall because they change technology faster than people and process can absorb.",
    solution:
      "We design a transformation roadmap that balances technology, process, and people — sequencing change so adoption sticks and value compounds.",
    methodology: [
      "Define the transformation vision and scope",
      "Assess process, technology, and capability gaps",
      "Sequence change for adoption, not just rollout",
      "Govern delivery and track value realized",
    ],
    outcomes: [
      "A realistic, staged transformation roadmap",
      "Higher adoption and less disruption",
      "Technology that earns its return",
    ],
  },
  {
    slug: "branding-visual-identity",
    category: "Branding & Creative Marketing",
    title: "Branding & Visual Identity",
    metaTitle: "Branding Agency in Madurai & Chennai",
    metaDescription:
      "Branding and visual identity for growing businesses in Madurai and Chennai — logo design, brand guidelines, and collateral built on a positioning strategy that actually holds up.",
    summary:
      "A complete brand identity — logo, guidelines, and collateral — grounded in a positioning that holds up as you scale.",
    problem:
      "Many growing businesses either have no real brand identity or one that was designed once and never revisited — inconsistent logos, mismatched colors, collateral that looks like five different companies made it.",
    solution:
      "We design a cohesive visual identity — logo, color, typography, and usage guidelines — anchored in your brand positioning, so everything from your signage to your pitch deck looks like it belongs to the same company. We take on branding projects for businesses across Madurai and Chennai.",
    methodology: [
      "Audit existing brand assets and market context",
      "Define the visual direction from your positioning",
      "Design logo, identity system, and brand guidelines",
      "Roll out across key touchpoints and collateral",
    ],
    outcomes: [
      "A professional, consistent identity across every touchpoint",
      "Brand guidelines your team can use without you",
      "A brand that looks credible to bigger customers and partners",
    ],
    faqs: [
      {
        question: "Do you design logos as a standalone service?",
        answer:
          "Yes, though logo design is stronger when it's grounded in a positioning strategy — we can do both together, or just the identity work if your positioning is already clear.",
      },
      {
        question: "Do you work with businesses in Chennai as well as Madurai?",
        answer:
          "Yes — we take on branding projects across both cities.",
      },
    ],
  },
  {
    slug: "advertising-ideation-campaigns",
    category: "Branding & Creative Marketing",
    title: "Advertising Ideation & Campaigns",
    metaTitle: "Advertising Agency in Madurai & Chennai",
    metaDescription:
      "Advertising campaign ideation for businesses in Madurai and Chennai — concepts, creative direction, and media planning that get attention and drive real response.",
    summary:
      "Campaign concepts and creative direction that get your business noticed — not just another ad.",
    problem:
      "Most local advertising is generic — a discount banner or a boosted post — because there's no one dedicated to the idea behind the ad, so campaigns blend into the noise instead of standing out.",
    solution:
      "We develop the campaign concept, creative direction, and media plan together — so every ad has a clear idea behind it, not just a product photo and a price. We run this for businesses across Madurai and Chennai.",
    methodology: [
      "Understand the offer, audience, and moment",
      "Develop campaign concepts and creative territory",
      "Build out creative direction across formats",
      "Plan media placement and flight timing",
    ],
    outcomes: [
      "Campaigns with a clear, ownable idea",
      "Creative that performs across print, digital, and social",
      "Advertising spend that earns attention, not just impressions",
    ],
    faqs: [
      {
        question: "Do you also run the media buying, or just the creative?",
        answer:
          "We lead the concept, creative direction, and media planning. Buying and placement can be handled by us or your existing media partner, depending on what you need.",
      },
      {
        question: "What kind of businesses is this for?",
        answer:
          "Any business in Madurai or Chennai that wants advertising with a real idea behind it — not just a discount banner.",
      },
    ],
  },
  {
    slug: "digital-marketing-services",
    category: "Branding & Creative Marketing",
    title: "Digital Marketing",
    metaTitle: "Digital Marketing Agency in Madurai & Chennai",
    metaDescription:
      "Digital marketing services for growing businesses in Madurai and Chennai — SEO, social media, paid ads, and content, run by a consultancy that ties spend to revenue, not vanity metrics.",
    summary:
      "SEO, social media, paid ads, and content — run end-to-end, tied to revenue rather than vanity metrics.",
    problem:
      "Most local businesses either have no digital presence or are paying an agency for activity — posts, boosted ads — with no clear link back to leads or sales.",
    solution:
      "We run digital marketing end-to-end — SEO, social media, paid ads, and content — with the same revenue discipline we bring to strategy work, so digital spend is judged by pipeline, not likes. We work with businesses in Madurai, Chennai, and beyond.",
    methodology: [
      "Audit current digital presence and performance",
      "Build the channel plan and content calendar",
      "Execute SEO, social, and paid campaigns",
      "Report against revenue-linked metrics monthly",
    ],
    outcomes: [
      "A digital presence that actually generates leads",
      "Clear monthly reporting tied to pipeline, not vanity metrics",
      "One accountable partner instead of scattered freelancers",
    ],
    faqs: [
      {
        question: "How much does digital marketing cost for a small business in Madurai?",
        answer:
          "It depends on the channel mix and ad spend, but most engagements start with a focused scope — one or two channels done well — rather than everything at once. We'll size it to your budget in the first conversation.",
      },
      {
        question: "Do you handle Chennai-specific campaigns separately from Madurai?",
        answer:
          "Yes, when it makes sense — location-targeted campaigns are part of how we run paid ads and local SEO for businesses operating in more than one city.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3) {
  const currentIndex = services.findIndex((s) => s.slug === slug);
  if (currentIndex === -1) return [];
  const current = services[currentIndex];
  // Walk the list starting from the *next* item and wrapping around, so
  // link distribution is balanced instead of always favoring the first
  // few entries in the array (which would otherwise starve later items
  // of inbound internal links).
  const circular = services
    .slice(currentIndex + 1)
    .concat(services.slice(0, currentIndex));
  const sameCategory = circular.filter((s) => s.category === current.category);
  const rest = circular.filter((s) => s.category !== current.category);
  // Cap same-category picks so at least one slot always goes to a
  // different category. Otherwise services in a category that's always
  // fully "satisfied" by same-category matches (e.g. every page in a
  // 4-service category picking its 3 category-mates) would never link to
  // services in smaller or single-entry categories, leaving those orphaned.
  const samePicks = sameCategory.slice(0, Math.min(2, count - 1));
  const restPicks = rest.slice(0, count - samePicks.length);
  return [...samePicks, ...restPicks];
}

export const serviceCategories = Array.from(
  new Set(services.map((s) => s.category)),
);
