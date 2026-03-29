import Image from "next/image";
import Link from "next/link";
import AutoMediaCarousel from "../components/AutoMediaCarousel";
import CalculatorPreview from "../components/CalculatorPreview";
import ThemeToggle from "../components/ThemeToggle";
import WaitlistCtaSection from "../components/WaitlistCtaSection";
import { howItWorksSlides } from "../content/howItWorksSlides";

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
              <div className="metric-pill">Real missions, not endless scrolling</div>
              <div className="metric-pill">See the impact behind your actions</div>
              <div className="metric-pill">Friends and leaderboards that keep you going</div>
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
          <p className="center muted narrow how-intro">
            We meet young people where they already spend attention—quick, visual, mobile—and point that energy toward
            climate and social missions you can actually finish. Here is a glimpse of the app experience.
          </p>
          <AutoMediaCarousel
            className="how-carousel"
            items={howItWorksSlides}
            ariaLabel="Screens from the SmileUp app: feed, missions, leaderboard, rewards"
            intervalMs={7500}
          />
        </div>
      </section>

      <section id="early-features" className="section tint">
        <div className="container split">
          <div className="fade-up">
            <p className="kicker">Try it on the web</p>
            <h2>Carbon footprint calculator</h2>
            <p>
              Curious what a year of habits might mean for the climate? Our calculator turns a few everyday choices
              into a friendly annual estimate—so you have a baseline before you start improving it with missions.
            </p>
            <ul className="feature-list">
              <li>Plain-language questions—no spreadsheets</li>
              <li>See travel, home, food, and shopping in one picture</li>
              <li>Built to line up with the climate missions we are bringing to the app</li>
            </ul>
            <Link href="/impact/carbon-footprint-calculator" className="btn btn-primary">
              Open the full calculator
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

      <WaitlistCtaSection
        title="Ready to turn care for the planet into daily action?"
        description="Join the waitlist for early access to missions, community challenges, and tools that help you shrink your footprint and support causes you believe in—not just watch another feed."
        source="home_waitlist"
      />

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

