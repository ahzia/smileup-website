export default function sitemap() {
  const baseUrl = "https://smileup.world";
  const lastModified = new Date("2026-04-15T00:00:00.000Z");

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/impact/carbon-footprint-calculator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}

