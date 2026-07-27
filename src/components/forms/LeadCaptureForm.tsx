"use client";

import { useState } from "react";
import { Label, Input } from "./Field";
import { DownloadIcon, Check } from "@/components/ui/Icons";

const FORMSPREE_URL = "https://formspree.io/f/xlgqalnd";

export function LeadCaptureForm({ resourceTitle }: { resourceTitle: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `Resource request: ${resourceTitle} — Cup N Saucer`);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-taupe">
        <Check className="h-4 w-4 text-gold" /> Thanks! We'll email you the {resourceTitle} shortly.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input type="hidden" name="resource" value={resourceTitle} />
      <div className="flex-1">
        <Label htmlFor={`lead-${resourceTitle}`}>Work email</Label>
        <Input
          id={`lead-${resourceTitle}`}
          name="email"
          type="email"
          placeholder="you@company.com"
          aria-label={`Email to receive ${resourceTitle}`}
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 self-end rounded-lg bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink-soft disabled:opacity-60"
      >
        <DownloadIcon className="h-4 w-4" /> {status === "loading" ? "Sending…" : "Get it"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:basis-full">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
