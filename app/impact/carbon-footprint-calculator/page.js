import CalculatorJsonLd from "../../../components/CalculatorJsonLd";
import CalculatorPreview from "../../../components/CalculatorPreview";
import ContentIconCarousel from "../../../components/ContentIconCarousel";
import ThemeToggle from "../../../components/ThemeToggle";
import WaitlistCtaSection from "../../../components/WaitlistCtaSection";
import { calculatorMethodologySlides } from "../../../content/calculatorMethodologySlides";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Carbon Footprint Calculator",
  description:
    "Estimate your yearly carbon footprint from travel, home electricity, food, and shopping. Free, transparent methodology—see how SmileUp helps you turn insight into lower emissions and real-world missions.",
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
      "Step-by-step estimate of your yearly emissions—with clear methodology and next steps to reduce your footprint.",
    url: "https://smileup.world/impact/carbon-footprint-calculator",
    type: "website",
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
          <Link href="/" className="brand" aria-label="SmileUp home">
            <Image
              src="/logos/smileup-logo-dark.svg"
              alt="SmileUp"
              width={128}
              height={32}
              priority
            />
          </Link>
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
          <p className="kicker">SmileUp tool</p>
          <h1>Carbon footprint calculator</h1>
          <p className="lead">
            See roughly how much greenhouse gas your year might add up to—from how you move, use electricity at
            home, eat, and shop. No jargon required: we show the maths in plain language when you are done.
          </p>
          <ul className="feature-list">
            <li>Simple questions, one screen at a time</li>
            <li>Your total split into travel, home, food, and shopping</li>
            <li>Clear labels for published data versus rough guides</li>
          </ul>
          <p className="muted small">
            Results are rounded estimates. They are here to start a conversation with yourself (and soon, with
            missions in SmileUp)—not to replace a professional carbon audit.
          </p>
        </section>
        <CalculatorPreview detailed />
      </div>

      <section className="section methodology-section" aria-labelledby="methodology-heading">
        <div className="container narrow methodology-section__inner">
          <h2 id="methodology-heading">How we calculate your estimate</h2>
          <p className="muted methodology-section__lead">
            One simple rule: <strong>emissions ≈ how much you do × a factor</strong>. Tap a topic below—or let the
            slides play—to see what changes with your answers.
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
        title="Want help lowering your footprint?"
        description="Join the SmileUp waitlist for missions, habits, and community support that turn climate awareness into steady action—not just a one-off score."
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
