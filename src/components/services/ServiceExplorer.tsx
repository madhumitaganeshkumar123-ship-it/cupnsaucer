"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "@/components/ui/Icons";
import { services, serviceCategories } from "@/data/services";

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS: Record<string, React.ReactNode> = {
  "Strategy & Growth": (
    <>
      <circle cx="16" cy="16" r="11" />
      <circle cx="16" cy="16" r="5" />
      <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  "Sales & Distribution": (
    <>
      <circle cx="16" cy="6.5" r="3.5" />
      <circle cx="6.5" cy="25" r="3.5" />
      <circle cx="25.5" cy="25" r="3.5" />
      <path d="M14 9.5L8.5 21.5M18 9.5l5.5 12M10 25h12" />
    </>
  ),
  "Organizational Development": (
    <>
      <circle cx="16" cy="7.5" r="4" />
      <rect x="3" y="21" width="9.5" height="7.5" rx="2" />
      <rect x="19.5" y="21" width="9.5" height="7.5" rx="2" />
      <path d="M16 11.5v5M7.75 21v-4.5h16.5V21" />
    </>
  ),
  "Marketing & Customer Growth": (
    <>
      <path d="M4 21v-9l17-7v23L4 21z" />
      <path d="M9 22.5v3a2.5 2.5 0 0 0 5 0v-2" />
      <path d="M25 12a3.5 3.5 0 0 1 0 8" />
    </>
  ),
  "Operational Excellence": (
    <>
      <circle cx="16" cy="16" r="4.5" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.9 2.9M22.3 22.3l2.9 2.9M25.2 6.8l-2.9 2.9M9.7 22.3l-2.9 2.9" />
    </>
  ),
  "AI & Digital Transformation": (
    <>
      <rect x="10" y="10" width="12" height="12" rx="2" />
      <rect x="14" y="14" width="4" height="4" rx="1" />
      <path d="M13 10V6M19 10V6M13 22v4M19 22v4M10 13H6M10 19H6M22 13h4M22 19h4" />
    </>
  ),
  "Branding & Creative Marketing": (
    <>
      <path d="M7 25l3-9 12-12 6 6-12 12-9 3z" />
      <path d="M19 7l6 6" />
      <path d="M10 16l6 6" />
    </>
  ),
};

function CategoryIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name] ?? <circle cx="16" cy="16" r="11" />}
    </svg>
  );
}

export function ServiceExplorer() {
  const [open, setOpen] = useState<string | null>(serviceCategories[0] ?? null);
  const active = open ? services.filter((s) => s.category === open) : [];

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <p className="eyebrow mb-3">Explore by capability</p>
        <h2 className="text-display-md text-3xl">
          Choose an area, then dig into the detail
        </h2>
        <p className="mt-4 max-w-xl text-taupe">
          Select a capability to see the specific engagements we run inside it.
        </p>

        {/* ---- category grid ---- */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((cat) => {
            const count = services.filter((s) => s.category === cat).length;
            const isOpen = open === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setOpen(isOpen ? null : cat)}
                aria-expanded={isOpen}
                className={[
                  "group flex items-start gap-4 rounded-2xl border p-6 text-left transition-all duration-300",
                  isOpen
                    ? "border-cinnamon bg-cinnamon text-paper shadow-[0_18px_50px_-30px_rgba(72,9,2,0.5)]"
                    : "border-line bg-cream hover:border-cinnamon/50 hover:bg-paper",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                    isOpen ? "bg-paper/20 text-paper" : "bg-beige/50 text-rust",
                  ].join(" ")}
                >
                  <CategoryIcon name={cat} />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg leading-snug">{cat}</span>
                  <span
                    className={[
                      "mt-1 block text-xs uppercase tracking-[0.14em]",
                      isOpen ? "text-paper/75" : "text-taupe",
                    ].join(" ")}
                  >
                    {count} {count === 1 ? "service" : "services"}
                  </span>
                </span>
                <span
                  className={[
                    "mt-1 text-lg leading-none transition-transform duration-300",
                    isOpen ? "rotate-45 text-paper" : "text-rust",
                  ].join(" ")}
                  aria-hidden
                >
                  +
                </span>
              </button>
            );
          })}
        </div>

        {/* ---- expanded panel ---- */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
              className="mt-6 rounded-2xl border border-line bg-paper p-6 sm:p-8"
            >
              <p className="eyebrow mb-5 text-rust">{open}</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {active.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex h-full flex-col justify-between rounded-xl border border-line bg-cream p-5 transition-all duration-300 hover:border-cinnamon/50 hover:shadow-[0_18px_50px_-30px_rgba(72,9,2,0.35)]"
                  >
                    <span>
                      <span className="block font-display text-base text-ink">{s.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-taupe">{s.summary}</span>
                    </span>
                    <ArrowUpRight className="mt-5 h-4 w-4 text-rust transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
