"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/cupnsaucer26/30min";

export function CalendlyEmbed() {
  useEffect(() => {
    if (document.getElementById("calendly-widget-script")) return;
    const script = document.createElement("script");
    script.id = "calendly-widget-script";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl border border-line"
      data-url={CALENDLY_URL}
      style={{ minWidth: "280px", height: "480px" }}
    />
  );
}