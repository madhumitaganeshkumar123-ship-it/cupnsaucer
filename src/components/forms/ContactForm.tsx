"use client";

import { useState } from "react";
import { Label, Input, Textarea } from "./Field";
import { Check } from "@/components/ui/Icons";

const FORMSPREE_URL = "https://formspree.io/f/xlgqalnd";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New message from Contact page — Cup N Saucer");

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
      <div className="rounded-2xl border border-line bg-cream-deep/40 p-10 text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="text-display-md text-2xl">Message received</h3>
        <p className="mt-2 text-taupe">
          Thank you. A member of our team will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name">Full name</Label>
          <Input id="c-name" name="name" placeholder="Your name" required />
        </div>
        <div>
          <Label htmlFor="c-company">Company</Label>
          <Input id="c-company" name="company" placeholder="Your company" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" type="email" name="email" placeholder="you@company.com" required />
        </div>
        <div>
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" type="tel" name="phone" placeholder="+91 90000 00000" />
        </div>
      </div>
      <div>
        <Label htmlFor="c-message">How can we help?</Label>
        <Textarea id="c-message" name="message" placeholder="Tell us about your business and what you're trying to achieve." />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong sending your message. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-1 inline-flex w-fit items-center justify-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
