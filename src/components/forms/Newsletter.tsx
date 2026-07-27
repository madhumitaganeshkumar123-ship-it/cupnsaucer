"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui/Icons";

export function Newsletter({ light = false }: { light?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = () => {
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    // Wire to your ESP (Mailchimp / Brevo / API route) here.
    setDone(true);
  };

  if (done) {
    return (
      <p className={`flex items-center gap-2 text-sm ${light ? "text-cream/80" : "text-taupe"}`}>
        <Check className="h-4 w-4 text-gold" /> You&apos;re subscribed. Insights land monthly.
      </p>
    );
  }

  return (
    <div className="flex w-full max-w-md items-center gap-2">
      <input
        type="email"
        inputMode="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Your work email"
        aria-label="Your work email"
        className={`min-w-0 flex-1 rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-gold ${
          light
            ? "border-cream/25 bg-transparent text-cream placeholder:text-cream/40"
            : "border-line bg-white text-ink placeholder:text-taupe-light"
        }`}
      />
      <button
        type="button"
        onClick={submit}
        aria-label="Subscribe"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-cream transition-colors hover:bg-gold-dark"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}
