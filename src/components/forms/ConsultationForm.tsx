"use client";

import { useState } from "react";
import { Label, Input, Textarea, Select } from "./Field";
import { Check } from "@/components/ui/Icons";

const FORMSPREE_URL = "https://formspree.io/f/xlgqalnd";

const industriesList = [
  "Startup",
  "SME",
  "Family Business",
  "Educational Institution",
  "Retail",
  "Manufacturing",
  "Service Business",
  "Other",
];
const teamSizes = ["1–10", "11–50", "51–200", "201–500", "500+"];

export function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

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
      <div className="rounded-2xl border border-line bg-white p-10 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-display-md text-2xl">Details received</h3>
        <p className="mt-2 text-taupe">
          Now pick a slot above and we&apos;ll be ready for a focused conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-name">Name</Label>
          <Input id="b-name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <Label htmlFor="b-company">Company</Label>
          <Input id="b-company" name="company" placeholder="Your company" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-email">Email</Label>
          <Input id="b-email" name="email" type="email" placeholder="you@company.com" required />
        </div>
        <div>
          <Label htmlFor="b-phone">Phone</Label>
          <Input id="b-phone" name="phone" type="tel" placeholder="Your phone number" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="b-industry">Industry</Label>
          <Select id="b-industry" name="industry" defaultValue="">
            <option value="" disabled>Select industry</option>
            {industriesList.map((i) => <option key={i} value={i}>{i}</option>)}
          </Select>
        </div>
        <div>
          <Label htmlFor="b-team">Team size</Label>
          <Select id="b-team" name="teamSize" defaultValue="">
            <option value="" disabled>Select team size</option>
            {teamSizes.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="b-challenges">Business challenges</Label>
        <Textarea id="b-challenges" name="challenges" placeholder="What's holding growth back right now?" />
      </div>
      <div>
        <Label htmlFor="b-goals">Goals</Label>
        <Textarea id="b-goals" name="goals" placeholder="What does success look like 12 months from now?" />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong sending your details. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Submit business details"}
      </button>
    </form>
  );
}