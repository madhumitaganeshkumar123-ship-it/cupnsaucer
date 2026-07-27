"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WhatsAppIcon, ArrowUpRight, DownloadIcon } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/site";

// Floating rail: WhatsApp, Book Consultation, Download Company Profile.
export function FloatingSidebar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ease-smooth ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Link
        href="/resources"
        className="group hidden items-center gap-2 rounded-full border border-line bg-cream/95 px-4 py-2.5 text-xs font-medium text-ink shadow-sm backdrop-blur transition-colors hover:border-gold sm:inline-flex"
      >
        <DownloadIcon className="h-4 w-4 text-gold" />
        Company Profile
      </Link>
      <Link
        href="/book-consultation"
        className="group hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-cream shadow-sm transition-colors hover:bg-ink-soft sm:inline-flex"
      >
        Book Consultation
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
      <a
        href={whatsappLink("Hello Cup N Saucer, I'd like to discuss growing my business.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
