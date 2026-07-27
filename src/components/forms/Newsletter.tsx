"use client";

import { useState } from "react";
import { ArrowRight, Check } from "@/components/ui/Icons";

const FORMSPREE_URL = "https://formspree.io/f/xlgqalnd";

export function Newsletter({ light = false }: { light?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async () => {
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return;
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          _subject: "Newsletter signup — Cup N Saucer",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <p className={`flex items-center gap-2 text-sm ${light ? "text-cream/80" : "text-taupe"}`}>
        <Check className="h-4 w-4 text-gold" /> You&apos;re subscribed. Insights land monthly.
      </p>
    );
  }

  return (
    <div>
      <div className="flex w-full max-w-md items-center gap-2">
        <input
          type="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="Your work email"
          aria-label="Your work email"
          disabled={status === "loading"}
          className={`min-w-0 flex-1 rounded-full border px-5 py-3 text-sm outline-none transition-colors focus:border-gold disabled:opacity-60 ${
            light
              ? "border-cream/25 bg-transparent text-cream placeholder:text-cream/40"
              : "border-line bg-white text-ink placeholder:text-taupe-light"
          }`}
        />
        <button
          type="button"
          onClick={submit}
          aria-label="Subscribe"
          disabled={status === "loading"}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-cream transition-colors hover:bg-gold-dark disabled:opacity-60"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
      {status === "error" && (
        <p className={`mt-2 text-sm ${light ? "text-red-300" : "text-red-600"}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
