export const site = {
  name: "Cup N Saucer",
  legalName: "Cup N Saucer Business Consulting",
  tagline: "Complete business solutions & sustainable growth.",
  description:
    "Cup N Saucer is a business growth consultancy that helps companies build strategy, systems, people, processes, and performance — turning vision into sustainable, structured growth.",
  // Update these to your live values before launch.
  url: "https://www.cupnsaucer.co.in",
  email: "cupnsaucer26@gmail.com",
  phone: "+91 63791 40626",
  phoneHref: "+916379140626",
  whatsapp: "916379140626",
  social: {
    linkedin: "https://www.linkedin.com/in/cupnsaucer/",
    instagram: "https://www.instagram.com/cupnsaucer.in/",
  },
} as const;

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
