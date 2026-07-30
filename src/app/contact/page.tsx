import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  LinkedInIcon,
  PinIcon,
} from "@/components/ui/Icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Cup N Saucer, the best marketing consultancy in Madurai. Reach us by message, WhatsApp, email, or phone.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start a conversation"
        intro="Tell us about your business and what you're trying to achieve. We'll respond within one business day."
      />

      <section className="py-20 lg:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_0.85fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            <a
              href={whatsappLink("Hello Cup N Saucer, I'd like to discuss growing my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-gold/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#1da851]">
                <WhatsAppIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-taupe">WhatsApp</span>
                <span className="text-ink">Message us instantly</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-gold/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <MailIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-taupe">Email</span>
                <span className="text-ink">{site.email}</span>
              </span>
            </a>

            <a
              href={`tel:${site.phoneHref}`}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-gold/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <PhoneIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-taupe">Phone</span>
                <span className="text-ink">{site.phone}</span>
              </span>
            </a>

            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-cream p-6 transition-colors hover:border-gold/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <LinkedInIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-taupe">LinkedIn</span>
                <span className="text-ink">Connect with us</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-cream p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <PinIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-eyebrow text-taupe">Based in</span>
                <span className="text-ink">{site.location.display}</span>
              </span>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
