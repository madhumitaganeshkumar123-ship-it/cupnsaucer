import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const wrap = (children: React.ReactNode) =>
  function Icon({ className }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("h-6 w-6", className)}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    );
  };

// Service pillar icons
export const StrategyIcon = wrap(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12 16 8" />
    <circle cx="12" cy="12" r="1.4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
  </>,
);
export const SalesIcon = wrap(
  <>
    <path d="M3 17l5-5 4 3 6-7" />
    <path d="M14 8h5v5" />
  </>,
);
export const PeopleIcon = wrap(
  <>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 4.5a3 3 0 0 1 0 6M18 14c2.2.7 3.6 2.6 3.6 5" />
  </>,
);
export const MarketingIcon = wrap(
  <>
    <path d="M3 10v4h3l6 4V6L6 10H3z" />
    <path d="M16 9a4 4 0 0 1 0 6" />
  </>,
);
export const OperationsIcon = wrap(
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </>,
);
export const AiIcon = wrap(
  <>
    <rect x="6" y="6" width="12" height="12" rx="2" />
    <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
    <circle cx="12" cy="12" r="2" />
  </>,
);

export const BrandingIcon = wrap(
  <>
    <path d="M4 20l3.2-1 8.4-8.4a1.6 1.6 0 0 0-2.2-2.2L4.9 16.9 4 20z" />
    <path d="M13.5 7.5l3 3" />
    <path d="M4 20l1-3.2" />
  </>,
);

export const iconMap = {
  strategy: StrategyIcon,
  sales: SalesIcon,
  people: PeopleIcon,
  marketing: MarketingIcon,
  operations: OperationsIcon,
  ai: AiIcon,
  branding: BrandingIcon,
} as const;

// Utility / UI icons
export const ArrowRight = wrap(<path d="M5 12h14M13 6l6 6-6 6" />);
export const ArrowUpRight = wrap(<path d="M7 17 17 7M8 7h9v9" />);
export const Plus = wrap(<path d="M12 5v14M5 12h14" />);
export const Check = wrap(<path d="M4 12l5 5L20 6" />);
export const Menu = wrap(<path d="M4 7h16M4 12h16M4 17h16" />);
export const Close = wrap(<path d="M6 6l12 12M18 6L6 18" />);

// Brand / social icons
export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

export const LinkedInIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H9z" />
  </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const YouTubeIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={cn("h-5 w-5", className)} fill="currentColor" aria-hidden="true">
    <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.5A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.5a2.5 2.5 0 0 0 1.8-1.8C23 15.2 23 12 23 12zM9.8 15.2V8.8l5.5 3.2z" />
  </svg>
);

export const MailIcon = wrap(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>);
export const PhoneIcon = wrap(<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />);
export const PinIcon = wrap(<><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>);
export const DownloadIcon = wrap(<><path d="M12 3v12M7 11l5 5 5-5" /><path d="M5 21h14" /></>);
