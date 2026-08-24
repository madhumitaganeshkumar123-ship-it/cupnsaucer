"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "@/components/ui/Icons";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  { n: "01", label: "Business Strategy & Growth", href: "/services/business-strategy-development" },
  { n: "02", label: "Sales & Distribution", href: "/services/sales-process-design" },
  { n: "03", label: "Operational Excellence", href: "/services/process-optimization" },
  { n: "04", label: "Digital Marketing", href: "/services/digital-marketing-services" },
  { n: "05", label: "Business Health Checkup", href: "/services" },
  { n: "06", label: "Market Research & Survey", href: "/services" },
];

export function GrowthFramework() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">

        {/* ---------- left: framed composition ---------- */}
        <div className="relative min-h-[520px] lg:min-h-[820px]">
          <div className="absolute inset-y-0 left-0 w-3 bg-beige sm:w-[18px]" />

          {/* offset olive frame */}
          <div className="pointer-events-none absolute left-[9%] top-[9%] hidden h-[57%] w-[62%] border-[16px] border-olive lg:block" />

          {/* decorative ticks */}
          <svg aria-hidden className="absolute right-[6%] top-[5%] hidden w-[150px] opacity-80 lg:block" viewBox="0 0 150 150">
            <g fill="#937B25" opacity="0.55">
              <rect x="6" y="10" width="7" height="26" rx="3" transform="rotate(8 9 23)" />
              <rect x="34" y="0" width="7" height="30" rx="3" transform="rotate(8 37 15)" />
              <rect x="62" y="14" width="7" height="24" rx="3" transform="rotate(8 65 26)" />
              <rect x="90" y="4" width="7" height="28" rx="3" transform="rotate(8 93 18)" />
              <rect x="18" y="52" width="7" height="28" rx="3" transform="rotate(8 21 66)" />
              <rect x="48" y="44" width="7" height="24" rx="3" transform="rotate(8 51 56)" />
              <rect x="76" y="56" width="7" height="30" rx="3" transform="rotate(8 79 71)" />
              <rect x="104" y="46" width="7" height="26" rx="3" transform="rotate(8 107 59)" />
              <rect x="30" y="96" width="7" height="24" rx="3" transform="rotate(8 33 108)" />
              <rect x="60" y="90" width="7" height="28" rx="3" transform="rotate(8 63 104)" />
              <rect x="90" y="100" width="7" height="22" rx="3" transform="rotate(8 93 111)" />
            </g>
          </svg>

          {/* main image plate */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease }}
            className="absolute left-[14%] top-[15%] hidden h-[60%] w-[65%] overflow-hidden bg-cover bg-center shadow-[0_26px_60px_-30px_rgba(72,9,2,0.55)] lg:block"
            style={{ backgroundImage: "url(/images/hero-strategy.jpg)", backgroundPosition: "78% 40%" }}
          />

          {/* framework wheel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease, delay: 0.15 }}
            className="absolute left-1/2 top-1/2 w-[86%] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper p-2 shadow-[0_26px_60px_-30px_rgba(72,9,2,0.55)] lg:left-[38%] lg:top-auto lg:bottom-[4%] lg:translate-x-0 lg:translate-y-0"
          >
            <svg viewBox="0 0 620 620" className="h-full w-full" role="img" aria-label="Our Growth Partnership Framework">
              <style>{`
                .fw-l{font-family:var(--font-sans),Inter,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.01em;}
                .fw-n{font-family:var(--font-sans),Inter,sans-serif;font-size:13px;font-weight:700;fill:#F7F0E4;}
                .fw-c{font-family:var(--font-display),Georgia,serif;font-size:25px;font-weight:700;fill:#480902;}
              `}</style>
              <g strokeWidth="2.5" fill="none">
                <path d="M310 195.5L310 175" stroke="#937B25" />
                <path d="M409.2 252.8L426.9 242.5" stroke="#CE7939" />
                <path d="M409.2 367.3L426.9 377.5" stroke="#B54B11" />
                <path d="M310 424.5L310 445" stroke="#480902" />
                <path d="M210.8 367.3L193.1 377.5" stroke="#6E5C1B" />
                <path d="M210.8 252.8L193.1 242.5" stroke="#8A3A0D" />
              </g>
              <g fill="none" strokeWidth="19">
                <path d="M310 205A105 105 0 0 1 400.9 257.5" stroke="#937B25" />
                <path d="M400.9 257.5A105 105 0 0 1 400.9 362.5" stroke="#CE7939" />
                <path d="M400.9 362.5A105 105 0 0 1 310 415" stroke="#B54B11" />
                <path d="M310 415A105 105 0 0 1 219.1 362.5" stroke="#480902" />
                <path d="M219.1 362.5A105 105 0 0 1 219.1 257.5" stroke="#6E5C1B" />
                <path d="M219.1 257.5A105 105 0 0 1 310 205" stroke="#8A3A0D" />
              </g>
              <circle cx="310" cy="310" r="94" fill="#F7F0E4" />
              <text className="fw-c" x="310" y="288" textAnchor="middle">OUR GROWTH</text>
              <text className="fw-c" x="310" y="314" textAnchor="middle">PARTNERSHIP</text>
              <text className="fw-c" x="310" y="340" textAnchor="middle">FRAMEWORK</text>
              <g>
                <circle cx="310" cy="105" r="70" fill="#F7F0E4" stroke="#937B25" strokeWidth="2.5" />
                <g transform="translate(290.0 51.0)" fill="none" stroke="#937B25" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="17" cy="16" r="11"/><path d="M25 24l10 10"/></g>
                <text className="fw-l" x="310" y="121.0" textAnchor="middle" fill="#937B25">UNDERSTAND</text>
                <text className="fw-l" x="310" y="137.0" textAnchor="middle" fill="#937B25">YOUR BUSINESS</text>
                <circle cx="310" cy="35.0" r="15" fill="#937B25" />
                <text className="fw-n" x="310" y="40.0" textAnchor="middle">01</text>
              </g>
              <g>
                <circle cx="487.5" cy="207.5" r="70" fill="#F7F0E4" stroke="#CE7939" strokeWidth="2.5" />
                <g transform="translate(467.5 153.5)" fill="none" stroke="#CE7939" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="20" r="12"/><circle cx="18" cy="20" r="5"/><path d="M27 11l9-9"/><path d="M30 2h6v6"/></g>
                <text className="fw-l" x="487.5" y="223.5" textAnchor="middle" fill="#CE7939">BUILD</text>
                <text className="fw-l" x="487.5" y="239.5" textAnchor="middle" fill="#CE7939">YOUR BRAND</text>
                <circle cx="487.5" cy="137.5" r="15" fill="#CE7939" />
                <text className="fw-n" x="487.5" y="142.5" textAnchor="middle">02</text>
              </g>
              <g>
                <circle cx="487.5" cy="412.5" r="70" fill="#F7F0E4" stroke="#B54B11" strokeWidth="2.5" />
                <g transform="translate(467.5 356.5)" fill="none" stroke="#B54B11" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="34" height="23" rx="3"/><path d="M10 24l7-8 6 5 8-10"/></g>
                <text className="fw-l" x="487.5" y="422.5" textAnchor="middle" fill="#B54B11">STRENGTHEN</text>
                <text className="fw-l" x="487.5" y="437.5" textAnchor="middle" fill="#B54B11">DIGITAL</text>
                <text className="fw-l" x="487.5" y="452.5" textAnchor="middle" fill="#B54B11">PRESENCE</text>
                <circle cx="487.5" cy="342.5" r="15" fill="#B54B11" />
                <text className="fw-n" x="487.5" y="347.5" textAnchor="middle">03</text>
              </g>
              <g>
                <circle cx="310" cy="515" r="70" fill="#F7F0E4" stroke="#480902" strokeWidth="2.5" />
                <g transform="translate(290.0 459.0)" fill="none" stroke="#480902" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 24V14l22-9v29L6 24z"/><path d="M12 27v5a5 5 0 0 0 10 0v-3"/><path d="M33 14a7 7 0 0 1 0 12"/></g>
                <text className="fw-l" x="310" y="525.0" textAnchor="middle" fill="#480902">ACCELERATE</text>
                <text className="fw-l" x="310" y="540.0" textAnchor="middle" fill="#480902">SALES &</text>
                <text className="fw-l" x="310" y="555.0" textAnchor="middle" fill="#480902">MARKETING</text>
                <circle cx="310" cy="445.0" r="15" fill="#480902" />
                <text className="fw-n" x="310" y="450.0" textAnchor="middle">04</text>
              </g>
              <g>
                <circle cx="132.5" cy="412.5" r="70" fill="#F7F0E4" stroke="#6E5C1B" strokeWidth="2.5" />
                <g transform="translate(112.5 358.5)" fill="none" stroke="#6E5C1B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="20" cy="20" r="9"/><path d="M20 4v6M20 30v6M4 20h6M30 20h6M9 9l4 4M27 27l4 4M31 9l-4 4M13 27l-4 4"/></g>
                <text className="fw-l" x="132.5" y="428.5" textAnchor="middle" fill="#6E5C1B">OPTIMIZE</text>
                <text className="fw-l" x="132.5" y="444.5" textAnchor="middle" fill="#6E5C1B">PROCESSES</text>
                <circle cx="132.5" cy="342.5" r="15" fill="#6E5C1B" />
                <text className="fw-n" x="132.5" y="347.5" textAnchor="middle">05</text>
              </g>
              <g>
                <circle cx="132.5" cy="207.5" r="70" fill="#F7F0E4" stroke="#8A3A0D" strokeWidth="2.5" />
                <g transform="translate(112.5 153.5)" fill="none" stroke="#8A3A0D" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 32V22M16 32V14M26 32V6"/><path d="M2 36h34"/><path d="M28 10l8-8M30 2h6v6"/></g>
                <text className="fw-l" x="132.5" y="223.5" textAnchor="middle" fill="#8A3A0D">SCALE & LEAD</text>
                <text className="fw-l" x="132.5" y="239.5" textAnchor="middle" fill="#8A3A0D">THE MARKET</text>
                <circle cx="132.5" cy="137.5" r="15" fill="#8A3A0D" />
                <text className="fw-n" x="132.5" y="142.5" textAnchor="middle">06</text>
              </g>
            </svg>
          </motion.div>
        </div>

        {/* ---------- right: cinnamon block ---------- */}
        <div className="flex flex-col justify-center bg-cinnamon px-8 py-16 text-paper sm:px-12 lg:py-20 lg:pl-14 lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-paper/80">Services</p>

            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.1vw,2.9rem)] font-semibold leading-[1.14] text-paper">
              Trusted Business Consulting in Madurai &amp; Chennai
            </h2>

            <div className="my-6 h-[3px] w-[70px] bg-paper/75" />

            <p className="text-[14.5px] leading-[1.85] text-paper/[0.93]">
              Looking for a business consultancy in Madurai or Chennai that does more than hand you a deck? Cup N Saucer works with startups, MSMEs, family businesses and growing enterprises across Tamil Nadu to build strategy, systems, people and performance — and then stays until it&rsquo;s actually running.
            </p>
            <p className="mt-3.5 text-[14.5px] leading-[1.85] text-paper/[0.93]">
              Every engagement is scoped to a specific business problem and measured against outcomes you agreed to up front.
            </p>

            <div className="mt-7 grid gap-x-8 border-t border-paper/[0.34] sm:grid-cols-2">
              {capabilities.map((c) => (
                <Link
                  key={c.n}
                  href={c.href}
                  className="group flex items-baseline gap-3 border-b border-paper/[0.34] py-3.5 text-sm font-medium text-paper transition-colors hover:text-white"
                >
                  <span className="min-w-[20px] font-display text-[15px] italic text-beige">{c.n}</span>
                  <span className="flex-1 leading-snug">{c.label}</span>
                  <span className="-translate-x-1 text-sm text-beige opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-8 font-display text-[clamp(1rem,1.28vw,1.28rem)] font-bold italic leading-[1.4] text-paper lg:whitespace-nowrap">
              Your challenges become our mission. Your growth becomes our success.
            </p>

            <Link
              href="/book-consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-burgundy px-7 py-3.5 text-[13.5px] font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Book a Strategy Call <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
