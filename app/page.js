import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "../components/WaitlistForm";
import CalculatorPreview from "../components/CalculatorPreview";
import ThemeToggle from "../components/ThemeToggle";

export default function HomePage() {
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
              <a href="#how">How it works</a>
              <a href="#early-features">Early features</a>
              <a href="#waitlist">Waitlist</a>
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

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy fade-up">
            <p className="kicker">Impact, made social</p>
            <h1>Turn everyday actions into environmental and social impact.</h1>
            <p className="lead">
              SmileUp helps communities gamify real-world missions, build habits,
              and track meaningful progress. Join the waitlist for launch access.
            </p>
            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary">
                Join Waitlist
              </a>
              <Link href="/impact/carbon-footprint-calculator" className="btn btn-ghost">
                Try Carbon Tool
              </Link>
            </div>
            <div className="metric-row">
              <div className="metric-pill">Mission-first product</div>
              <div className="metric-pill">Transparent impact math</div>
              <div className="metric-pill">Community gamification-ready</div>
            </div>
          </div>
          <div className="hero-media fade-up delay-1">
            <Image
              src="/hackglobal.webp"
              alt="SmileUp team at global hackathon"
              width={1100}
              height={700}
              className="hero-image"
              sizes="(max-width: 800px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section id="how" className="section">
        <div className="container">
          <h2 className="center">How SmileUp works</h2>
          <div className="cards three">
            <article className="card fade-up">
              <h3>Discover</h3>
              <p>Explore short, engaging impact stories and mission opportunities.</p>
            </article>
            <article className="card fade-up delay-1">
              <h3>Act</h3>
              <p>Complete practical missions in climate and social impact categories.</p>
            </article>
            <article className="card fade-up delay-2">
              <h3>Grow</h3>
              <p>Earn Smiles, see your progress, and unlock community momentum.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="early-features" className="section tint">
        <div className="container split">
          <div className="fade-up">
            <p className="kicker">Early feature launch</p>
            <h2>Carbon Footprint Calculator</h2>
            <p>
              Before the full platform launch, we are shipping useful tools on the
              website. Start with a fast calculator that estimates annual emissions
              and points to mission categories.
            </p>
            <ul className="feature-list">
              <li>Fast one-question-per-step interactions</li>
              <li>Transparent estimates and assumptions</li>
              <li>Designed to connect with future in-app missions</li>
            </ul>
            <Link href="/impact/carbon-footprint-calculator" className="btn btn-primary">
              Open full calculator page
            </Link>
          </div>
          <div className="fade-up delay-1">
            <CalculatorPreview />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split reverse">
          <div className="fade-up">
            <Image
              src="/hackwarsaw.webp"
              alt="SmileUp team at Warsaw hackathon"
              width={1000}
              height={700}
              className="hero-image"
              sizes="(max-width: 800px) 100vw, 45vw"
            />
          </div>
          <div className="fade-up delay-1">
            <h2>Built and tested through real-world iteration</h2>
            <p>
              SmileUp evolved across multiple hackathon and MVP cycles, guided by
              direct feedback from students, communities, and organizations.
            </p>
            <p className="muted">
              Our next phase is focused on launch quality: speed, transparency,
              accessibility, and better onboarding for partner organizations.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="section tint">
        <div className="container narrow">
          <h2 className="center">Join the SmileUp waitlist</h2>
          <p className="center muted">
            Be the first to access the app release, mission pilots, and feature
            updates.
          </p>
          <WaitlistForm source="home_waitlist" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <p>© {new Date().getFullYear()} SmileUp</p>
          <div className="footer-links">
            <a href="https://smileup.world">smileup.world</a>
            <a href="https://www.instagram.com/smileupworld" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

