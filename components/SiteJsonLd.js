/**
 * Global structured data for SEO (Organization + WebSite).
 */

const org = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmileUp",
  url: "https://smileup.world",
  description:
    "SmileUp turns everyday actions into real climate and social impact through missions, community, and rewards.",
  sameAs: ["https://www.instagram.com/smileupworld"],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SmileUp",
  url: "https://smileup.world",
  description:
    "Missions, community, and rewards for climate and social impact on your phone. Join the waitlist for early access.",
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
