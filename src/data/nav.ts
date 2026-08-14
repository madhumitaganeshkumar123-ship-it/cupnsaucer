export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/insights" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Business Strategy & Growth", href: "/services/business-strategy-development" },
    { label: "Sales & Distribution", href: "/services/sales-process-design" },
    { label: "Organizational Development", href: "/services/performance-management-systems" },
    { label: "Marketing & Customer Growth", href: "/services/marketing-strategy" },
    { label: "AI & Digital Transformation", href: "/services/digital-transformation" },
    { label: "Branding & Creative Marketing", href: "/services/digital-marketing-services" },
  ],
  Resources: [
    { label: "Resource Library", href: "/resources" },
    { label: "Business Growth Blog", href: "/insights" },
    { label: "FAQ", href: "/faq" },
    { label: "Book a Strategy Call", href: "/book-consultation" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookie-policy" },
    { label: "Disclaimer", href: "/legal/disclaimer" },
  ],
} as const;
