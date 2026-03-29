/**
 * Global structured data for SEO (Organization + WebSite).
 */

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmileUp",
  url: "https://smileup.world",
  description:
    "SmileUp helps people turn everyday actions into measurable environmental and social impact through missions, community, and rewards.",
  sameAs: ["https://www.instagram.com/smileupworld"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SmileUp",
  url: "https://smileup.world",
  description:
    "Turn everyday actions into measurable environmental and social impact. Join the waitlist for mission-based climate and social tools.",
  publisher: { "@type": "Organization", name: "SmileUp" },
};

export default function SiteJsonLd() {
  const payload = [org, website];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
