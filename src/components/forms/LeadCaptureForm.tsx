"use client";

import { useState } from "react";
import { Label, Input } from "./Field";
import { DownloadIcon, Check } from "@/components/ui/Icons";

export function LeadCaptureForm({ resourceTitle }: { resourceTitle: string }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-taupe">
        <Check className="h-4 w-4 text-gold" /> Sent. Check your inbox for {resourceTitle}.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <Label htmlFor={`lead-${resourceTitle}`}>Work email</Label>
        <Input
          id={`lead-${resourceTitle}`}
          type="email"
          placeholder="you@company.com"
          aria-label={`Email to receive ${resourceTitle}`}
        />
      </div>
      <button
        type="button"
        onClick={() => setDone(true)}
        className="inline-flex items-center justify-center gap-2 self-end rounded-lg bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-ink-soft"
      >
        <DownloadIcon className="h-4 w-4" /> Get it
      </button>
    </div>
  );
}
