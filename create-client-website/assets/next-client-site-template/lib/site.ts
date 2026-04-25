export const site = {
  name: "Client Name",
  description: "A fresh client website ready for real content and CMS editing.",
  footer: "Built for clear content, responsive design, and easy editing.",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  primaryCta: { label: "Start a conversation", href: "#contact" },
  secondaryCta: { label: "View services", href: "#services" },
  hero: {
    eyebrow: "Fresh client website",
    title: "Real content, new design.",
    summary:
      "Replace this starter copy with extracted client messaging, then shape the design around the chosen visual direction.",
  },
  highlights: [
    "Editable content model",
    "Responsive Next.js build",
    "Netlify and Decap CMS ready",
  ],
  servicesTitle: "Services shaped around the client's real offer.",
  services: [
    {
      title: "Primary service",
      summary: "Summarize the most important client offer with specific, factual language.",
    },
    {
      title: "Secondary service",
      summary: "Use real details from the existing website or client brief.",
    },
    {
      title: "Ongoing support",
      summary: "Keep this section focused on outcomes the client can actually claim.",
    },
  ],
  contact: {
    title: "Ready to talk?",
    summary: "Use the client's real contact details and preferred conversion path.",
    email: "hello@example.com",
    location: "Client location",
  },
} as const;
