export type Resource = {
  slug: string;
  title: string;
  description: string;
  format: string;
};

export const resources: Resource[] = [
  {
    slug: "business-growth-checklist",
    title: "Business Growth Checklist",
    description:
      "A practical checklist to pressure-test whether your business is set up to grow sustainably.",
    format: "PDF · 12 points",
  },
  {
    slug: "sales-audit-template",
    title: "Sales Audit Template",
    description:
      "Diagnose the gaps in your sales process and pipeline before they cost you revenue.",
    format: "Worksheet",
  },
  {
    slug: "distribution-expansion-framework",
    title: "Distribution Expansion Framework",
    description:
      "A structured framework for entering new territories and channels without conflict.",
    format: "PDF · Framework",
  },
  {
    slug: "sop-development-guide",
    title: "SOP Development Guide",
    description:
      "Step-by-step guidance to document the processes your business runs on.",
    format: "Guide",
  },
  {
    slug: "ai-readiness-assessment",
    title: "AI Readiness Assessment",
    description:
      "A self-assessment to gauge where AI can realistically create value for your business.",
    format: "Assessment",
  },
];
