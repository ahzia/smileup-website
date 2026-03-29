import Image from "next/image";
import Link from "next/link";
import AutoMediaCarousel from "../components/AutoMediaCarousel";
import SiteBrand from "../components/SiteBrand";
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
          <SiteBrand priority />
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
            <p className="kicker">🌍 Impact, made social</p>
            <h1>Turn everyday actions into real-world impact.</h1>
            <p className="lead">
              Short missions for climate and community—on your phone, with rewards and friends. Join the waitlist to
              get in early.
            </p>
            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary">
                Join the waitlist
              </a>
              <Link href="/impact/carbon-footprint-calculator" className="btn btn-ghost">
                Try the carbon calculator 🌱
              </Link>
            </div>
            <div className="metric-row">
              <div className="metric-pill">🎯 Missions, not endless scrolling</div>
              <div className="metric-pill">📊 See what your actions add up to</div>
              <div className="metric-pill">👥 Friends and leaderboards</div>
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
          <h2 className="center">How SmileUp works ✨</h2>
          <p className="center muted narrow how-intro">
            We meet young people where they already are—on their phones—and turn that attention into real-world impact.
            Discover quick, engaging missions you can actually complete.
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
            <p className="kicker">🌱 Try it on the web</p>
            <h2>Carbon footprint calculator</h2>
            <p>
              Wonder what a year of habits means for the planet? Answer a few simple questions and get a friendly
              yearly estimate—then use it as a starting point when you join our climate missions.
            </p>
            <ul className="feature-list">
              <li>Plain questions—no spreadsheets</li>
              <li>Travel, home, food, and shopping in one view</li>
              <li>Same spirit as the missions we&apos;re building in the app</li>
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
            <h2>Built with real people 🛠️</h2>
            <p>
              We shaped SmileUp at hackathons and pilots with students, community groups, and partners who told us what
              actually works.
            </p>
            <p className="muted">
              Now we&apos;re polishing for launch: a fast app, clear impact, and an easier path for organizations who
              want to join.
            </p>
          </div>
        </div>
      </section>

      <WaitlistCtaSection
        title="Ready to act for the planet—little and often?"
        description="Get early access to missions, challenges, and tools that help you lower your footprint and back causes you care about. Less scrolling, more doing."
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

