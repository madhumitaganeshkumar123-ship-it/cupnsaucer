export type Resource = {
  slug: string;
  title: string;
  description: string;
  format: string;
  file: string;
};

export const resources: Resource[] = [
  {
    slug: "business-growth-checklist",
    title: "Business Growth Checklist",
    description:
      "A practical checklist to pressure-test whether your business is set up to grow sustainably.",
    format: "PDF · 12 points",
    file: "business-growth-checklist.pdf",
  },
  {
    slug: "sales-audit-template",
    title: "Sales Audit Template",
    description:
      "Diagnose the gaps in your sales process and pipeline before they cost you revenue.",
    format: "Worksheet",
    file: "sales-audit-template.pdf",
  },
  {
    slug: "distribution-expansion-framework",
    title: "Distribution Expansion Framework",
    description:
      "A structured framework for entering new territories and channels without conflict.",
    format: "PDF · Framework",
    file: "distribution-expansion-framework.pdf",
  },
  {
    slug: "sop-development-guide",
    title: "SOP Development Guide",
    description:
      "Step-by-step guidance to document the processes your business runs on.",
    format: "Guide",
    file: "sop-development-guide.pdf",
  },
  {
    slug: "ai-readiness-assessment",
    title: "AI Readiness Assessment",
    description:
      "A self-assessment to gauge where AI can realistically create value for your business.",
    format: "Assessment",
    file: "ai-readiness-assessment.pdf",
  },
];
