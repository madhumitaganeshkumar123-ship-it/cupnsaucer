export const site = {
  name: "Cup N Saucer",
  legalName: "Cup N Saucer Business Consulting",
  tagline: "Complete business solutions & sustainable growth.",
  description:
    "Cup N Saucer is a business growth consultancy that helps companies build strategy, systems, people, processes, and performance — turning vision into sustainable, structured growth.",
  // Update these to your live values before launch.
  url: "https://www.cupnsaucer.in",
  email: "hello@cupnsaucer.in",
  phone: "+91 90000 00000",
  phoneHref: "+919000000000",
  whatsapp: "919000000000",
  address: {
    line1: "Cup N Saucer Advisory",
    line2: "Anna Salai",
    city: "Chennai",
    region: "Tamil Nadu",
    postalCode: "600002",
    country: "India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/cupnsaucer",
    instagram: "https://www.instagram.com/cupnsaucer",
    youtube: "https://www.youtube.com/@cupnsaucer",
  },
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
