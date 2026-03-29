import "./globals.css";
import Script from "next/script";
import SiteJsonLd from "../components/SiteJsonLd";

const themeInit = `
(function(){
  try {
    var k = "smileup-theme";
    var t = localStorage.getItem(k);
    if (t === "light" || t === "dark") {
      document.documentElement.setAttribute("data-theme", t);
    } else {
      document.documentElement.setAttribute(
        "data-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      );
    }
  } catch (e) {
    document.documentElement.setAttribute("data-theme", "light");
  }
})();
`.trim();

export const metadata = {
  metadataBase: new URL("https://smileup.world"),
  title: {
    default: "SmileUp | Turn everyday actions into impact",
    template: "%s | SmileUp",
  },
  description:
    "SmileUp helps people turn everyday actions into measurable environmental and social impact through missions, community, and rewards.",
  keywords: [
    "SmileUp",
    "social impact app",
    "climate action app",
    "carbon footprint calculator",
    "climate missions",
    "gamified missions",
    "Gen Z volunteering",
    "waitlist",
  ],
  openGraph: {
    title: "SmileUp",
    description:
      "Turn everyday actions into measurable environmental and social impact.",
    url: "https://smileup.world",
    siteName: "SmileUp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hackglobal.webp",
        width: 1100,
        height: 700,
        alt: "SmileUp team collaborating at a hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileUp",
    description:
      "Turn everyday actions into measurable environmental and social impact.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="smileup-theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}

