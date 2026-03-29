import CalculatorJsonLd from "../../../components/CalculatorJsonLd";
import CalculatorPreview from "../../../components/CalculatorPreview";
import ContentIconCarousel from "../../../components/ContentIconCarousel";
import SiteBrand from "../../../components/SiteBrand";
import ThemeToggle from "../../../components/ThemeToggle";
import WaitlistCtaSection from "../../../components/WaitlistCtaSection";
import {
  calculatorWaitlistCtaDescription,
  calculatorWaitlistCtaTitle,
} from "../../../content/calculatorWaitlistCta";
import { calculatorMethodologySlides } from "../../../content/calculatorMethodologySlides";
import Link from "next/link";

export const metadata = {
  title: "Carbon Footprint Calculator",
  description:
    "Free calculator: estimate your yearly carbon footprint from travel, home, food, and shopping. Clear steps and simple methodology from SmileUp.",
  keywords: [
    "carbon footprint calculator",
    "CO2 calculator",
    "climate footprint estimate",
    "sustainable living",
    "SmileUp",
    "carbon emissions estimate",
  ],
  alternates: {
    canonical: "https://smileup.world/impact/carbon-footprint-calculator",
  },
  openGraph: {
    title: "Carbon Footprint Calculator | SmileUp",
    description:
      "Step-by-step yearly emissions estimate—with clear methodology and tips to lower your footprint.",
    url: "https://smileup.world/impact/carbon-footprint-calculator",
    type: "website",
    images: [
      {
        url: "/hackglobal.webp",
        width: 1100,
        height: 700,
        alt: "SmileUp — climate and social impact tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbon Footprint Calculator | SmileUp",
    description:
      "Step-by-step yearly emissions estimate—with clear methodology and tips to lower your footprint.",
    images: ["/hackglobal.webp"],
  },
};

export default function CarbonCalculatorPage() {
  return (
    <main>
      <CalculatorJsonLd />
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-grid" />
      <header className="site-header">
        <nav className="container nav">
          <SiteBrand priority />
          <div className="nav-cluster">
            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/#waitlist">Waitlist</Link>
              <a
                href="https://www.instagram.com/smileupworld"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <div className="section container split">
        <section>
          <p className="kicker">🧮 SmileUp tool</p>
          <h1>Carbon footprint calculator</h1>
          <p className="lead">
            See roughly how much your year adds up to—from travel, home electricity, food, and shopping. When
            you&apos;re done, we explain it in plain language—no jargon.
          </p>
          <ul className="feature-list">
            <li>One easy question at a time</li>
            <li>Travel, home, food, and shopping in one total</li>
            <li>We label what&apos;s from data vs. a rough guide</li>
          </ul>
          <p className="muted small">
            Rounded estimates to learn from—not a certified audit. Soon we&apos;ll connect this to missions in
            SmileUp.
          </p>
        </section>
        <CalculatorPreview detailed />
      </div>

      <section className="section methodology-section" aria-labelledby="methodology-heading">
        <div className="container narrow methodology-section__inner">
          <h2 id="methodology-heading">How we calculate your estimate</h2>
          <p className="muted methodology-section__lead">
            Simple idea: <strong>emissions ≈ what you do × a factor</strong>. Tap a topic—or watch the slides—to see
            what depends on your answers.
          </p>

          <ContentIconCarousel
            className="methodology-carousel"
            items={calculatorMethodologySlides}
            ariaLabel="How we calculate each part of your footprint"
            instanceId="calc-method"
            intervalMs={8500}
          />

          <details className="methodology-sources">
            <summary className="methodology-sources__summary">
              <span className="methodology-sources__summary-emoji" aria-hidden>
                📚
              </span>
              Where the numbers come from
            </summary>
            <div className="methodology-sources__body muted small">
              <p>
                Published references include the{" "}
                <a
                  href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting"
                  target="_blank"
                  rel="noreferrer"
                >
                  UK government conversion factors
                </a>{" "}
                (travel) and{" "}
                <a
                  href="https://www.eea.europa.eu/en/analysis/indicators/greenhouse-gas-emission-intensity-of-1/greenhouse-gas-emission-intensity-of-electricity-generation-country-level"
                  target="_blank"
                  rel="noreferrer"
                >
                  EEA electricity intensity by country
                </a>
                . Diet and shopping use simplified bands—we label them clearly in your results as rough guides.
              </p>
            </div>
          </details>
        </div>
      </section>

      <WaitlistCtaSection
        sectionId="calculator-waitlist"
        title={calculatorWaitlistCtaTitle}
        description={calculatorWaitlistCtaDescription}
        source="calculator_page"
      />

      <footer className="site-footer">
        <div className="container footer-grid">
          <p>© {new Date().getFullYear()} SmileUp</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <a href="https://www.instagram.com/smileupworld" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
