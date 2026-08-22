import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block h-12 w-12", className)}>
      <Image
        src="/images/logo-mark.png"
        alt=""
        fill
        className="object-contain"
        priority
      />
    </span>
  );
}

export function Logo({
  className,
  light = false,
  withTagline = false,
}: {
  className?: string;
  light?: boolean;
  withTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Cup N Saucer — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-3xl font-semibold tracking-tight",
            light ? "text-cream" : "text-ink",
          )}
        >
          Cup <span className="italic text-gold">n</span> Saucer
        </span>
        {withTagline && (
          <span
            className={cn(
              "mt-1 text-[10px] uppercase tracking-[0.18em]",
              light ? "text-cream/60" : "text-taupe",
            )}
          >
            Complete Business Solutions &amp; Sustainable Growth
          </span>
        )}
      </span>
    </Link>
  );
}
