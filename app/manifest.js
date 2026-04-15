export default function manifest() {
  return {
    name: "SmileUp",
    short_name: "SmileUp",
    description:
      "SmileUp turns everyday actions into real climate and social impact through missions, community, and rewards.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2a9a32",
    icons: [
      {
        src: "/logos/smileup-logo-dark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logos/smileup-logo-mono-green.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
