import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Newsletter } from "@/components/forms/Newsletter";
import {
  LinkedInIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";
import { footerNav } from "@/data/nav";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo light withTagline />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/60">
              A business growth consultancy helping companies build strategy,
              systems, people, processes, and performance.
            </p>
            <div className="mt-7">
              <p className="mb-3 text-xs uppercase tracking-eyebrow text-gold-light">
                Business growth insights, monthly
              </p>
              <Newsletter light />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerNav).map(([group, items]) => (
              <div key={group}>
                <p className="mb-4 text-xs uppercase tracking-eyebrow text-cream/40">
                  {group}
                </p>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-cream/70 transition-colors hover:text-gold-light"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-cream/10" />

        <div className="mt-7 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
              { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
              { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold-light hover:text-gold-light"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
