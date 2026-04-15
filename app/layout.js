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
  manifest: "/manifest.webmanifest",
  title: {
    default: "SmileUp | Turn everyday actions into impact",
    template: "%s | SmileUp",
  },
  description:
    "SmileUp turns everyday actions into real climate and social impact—missions, community, and rewards on your phone.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logos/smileup-logo-dark.svg", type: "image/svg+xml" }],
    shortcut: ["/logos/smileup-logo-dark.svg"],
    apple: [{ url: "/logos/smileup-logo-mono-green.svg", type: "image/svg+xml" }],
  },
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
      "Real climate and social impact—missions, community, and rewards on your phone.",
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
      "Real climate and social impact—missions, community, and rewards on your phone.",
    images: ["/hackglobal.webp"],
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

