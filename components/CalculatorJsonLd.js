/**
 * Structured data for the carbon calculator route.
 */

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "SmileUp Carbon Footprint Calculator",
      url: "https://smileup.world/impact/carbon-footprint-calculator",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description:
        "Free, step-by-step estimate of your yearly carbon footprint from travel, home electricity, diet, and spending—with transparent methodology.",
      provider: { "@type": "Organization", name: "SmileUp", url: "https://smileup.world" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is this calculator a certified carbon audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It is an educational estimate to help you see where emissions often come from and how choices add up. It is not a certified carbon footprint for compliance or offset purchases.",
          },
        },
        {
          "@type": "Question",
          name: "Does the country I pick change my whole result?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It mainly changes home electricity, because grid power mixes differ by country. Travel factors in this version use the same reference values for everyone so results stay comparable.",
          },
        },
      ],
    },
  ],
};

export default function CalculatorJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
