"use client";

import { useState } from "react";
import { Label, Input } from "./Field";
import { DownloadIcon, Check } from "@/components/ui/Icons";

export function LeadCaptureForm({
  resourceTitle,
  resourceSlug,
}: {
  resourceTitle: string;
  resourceSlug: string;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") || "");

    try {
      const res = await fetch("/api/request-resource", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug: resourceSlug }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }
      setStatus("done");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 text-sm text-taupe">
        <Check className="h-4 w-4 text-gold" /> Sent — check your inbox for the{" "}
        {resourceTitle}.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <Label htmlFor={`lead-${resourceSlug}`}>Work email</Label>
        <Input
          id={`lead-${resourceSlug}`}
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
        <DownloadIcon className="h-4 w-4" />{" "}
        {status === "loading" ? "Sending…" : "Get it"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:basis-full">
          {errorMessage || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
