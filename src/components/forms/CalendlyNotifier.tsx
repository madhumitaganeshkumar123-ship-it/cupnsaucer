"use client";

import { useEffect } from "react";

export function CalendlyNotifier() {
  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (
        e.origin.includes("calendly.com") &&
        e.data?.event === "calendly.event_scheduled"
      ) {
        fetch("/api/book-consultation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "Calendly",
            name: "(booked via Calendly — check your Calendly dashboard for details)",
          }),
        }).catch(() => {});
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}