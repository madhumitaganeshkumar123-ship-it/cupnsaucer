import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ease-smooth focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-cream hover:bg-gold-dark",
  outline: "border border-ink/25 text-ink hover:border-gold hover:text-gold",
  ghost: "text-ink hover:text-gold",
  light: "border border-cream/40 text-cream hover:bg-cream hover:text-ink",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  external,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
