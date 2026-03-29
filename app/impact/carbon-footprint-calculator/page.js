import Image from "next/image";
import Link from "next/link";
import CalculatorPreview from "../../../components/CalculatorPreview";
import WaitlistForm from "../../../components/WaitlistForm";
import ThemeToggle from "../../../components/ThemeToggle";

export const metadata = {
  title: "Carbon Footprint Calculator",
  description:
    "Estimate your annual footprint with SmileUp's lightweight carbon calculator and join the waitlist for mission-based impact tools.",
};

export default function CarbonCalculatorPage() {
  return (
    <main>
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
          <p className="kicker">SmileUp Early Feature</p>
          <h1>Carbon Footprint Calculator</h1>
          <p className="lead">
            This is a fast, transparent estimate tool. It is designed as an entry
            point to behavior change and will connect to future SmileUp missions.
          </p>
          <ul className="feature-list">
            <li>Quick step-by-step inputs</li>
            <li>Visible assumptions and transparent output</li>
            <li>Built for mobile-first UX and fast load</li>
          </ul>
          <p className="muted small">
            Note: results are approximate and based on regional average factors.
          </p>
        </section>
        <CalculatorPreview detailed />
      </div>

      <section className="section">
        <div className="container">
          <h2>How we calculate CO2 emissions</h2>
          <p className="muted">
            We use a standard emission-factor model: <strong>emissions = activity x
            factor</strong>. Factors are selected from public references and tuned for a
            practical MVP experience.
          </p>
          <div className="method-grid">
            <article className="card">
              <h3>Transport</h3>
              <p className="small">Car: annual km x 0.18 kg CO2e/km</p>
              <p className="small">Bus: annual km x 0.09 kg CO2e/km</p>
              <p className="small">Rail: annual km x 0.04 kg CO2e/km</p>
            </article>
            <article className="card">
              <h3>Flights</h3>
              <p className="small">Short haul: flights/year x 250 kg CO2e</p>
              <p className="small">Long haul: flights/year x 1100 kg CO2e</p>
              <p className="small">Includes non-CO2 effects in a simplified way.</p>
            </article>
            <article className="card">
              <h3>Home, Food, Consumption</h3>
              <p className="small">Electricity: monthly kWh x 12 x country factor</p>
              <p className="small">Food: profile-based yearly estimate</p>
              <p className="small">Consumption: low/medium/high yearly estimate</p>
            </article>
          </div>
          <p className="muted small">
            Sources used for calibration:{" "}
            <a href="https://www.gov.uk/government/collections/government-conversion-factors-for-company-reporting" target="_blank" rel="noreferrer">
              DEFRA
            </a>
            ,{" "}
            <a href="https://www.eea.europa.eu/" target="_blank" rel="noreferrer">
              EEA
            </a>
            ,{" "}
            <a href="https://www.ipcc.ch/" target="_blank" rel="noreferrer">
              IPCC
            </a>
            . Values are simplified for user experience and transparency.
          </p>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <h2 className="center">Want mission recommendations from your results?</h2>
          <p className="center muted">Join the waitlist for the full SmileUp app launch.</p>
          <WaitlistForm source="calculator_page" />
        </div>
      </section>

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

