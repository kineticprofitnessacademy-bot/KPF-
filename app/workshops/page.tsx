import Link from "next/link";
import { workshopTopics } from "@/lib/data";

export const metadata = {
  title: "Workshops & Masterclasses — KPF Academy",
  description: "Expert-led workshops on sports nutrition, fat loss, women's fitness, coaching communication and more.",
};

const WHY_ITEMS = [
  { icon: "📊", label: "Stay Current with Research" },
  { icon: "🎯", label: "Deepen Specialist Knowledge" },
  { icon: "💼", label: "Strengthen Professional Credibility" },
  { icon: "🤝", label: "Network with Industry Peers" },
  { icon: "📜", label: "Earn Completion Certificates" },
];

const WHO_ITEMS = [
  "Working personal trainers who want to deepen their expertise",
  "Nutrition coaches looking to stay current with evidence-based practice",
  "KPF students and graduates seeking continuing education",
  "Gym professionals and managers expanding their knowledge base",
  "Fitness enthusiasts who want to learn from industry educators",
];

export default function WorkshopsPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>
            Workshops &amp; Masterclasses
          </span>
          <h1>Go Deeper. Stay Sharp.<br />Keep Growing.</h1>
          <p>
            Focused, expert-led learning on specialised topics in fitness, nutrition,
            and professional coaching — for professionals who never stop learning.
          </p>
          <Link href="/contact" className="btn-gold">Register Interest →</Link>
        </div>
      </section>

      {/* ── WHY CONTINUING EDUCATION ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Why Continuing Education</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Certification Is the Beginning.<br />Not the End.
              </h2>
              <p className="bodyText">
                The fitness and nutrition industry evolves constantly. New research
                emerges. Client needs change. Professional standards rise.
              </p>
              <p className="bodyText" style={{ marginBottom: "2.5rem" }}>
                KPF&apos;s workshops keep you current, confident, and competitive —
                whether you&apos;re a KPF graduate, a working trainer, or someone
                exploring the field.
              </p>
              <Link href="/apply" className="btn-outline">View All Programs →</Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {WHY_ITEMS.map((item) => (
                <div key={item.label} className="featureBlock featureBlockRow">
                  <span className="featureBlockIcon">{item.icon}</span>
                  <span className="featureBlockTitle">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── WORKSHOP TOPICS ───────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Topics We Cover</span>
            <h2>Explore Our Workshop Categories.</h2>
            <p className="sectionSubtitle">
              Each session is led by experienced KPF faculty — focused, evidence-based,
              and practically relevant.
            </p>
          </div>

          <div className="workshopGrid">
            {workshopTopics.map((w) => (
              <div key={w.title} className="workshopCard">
                <div className="workshopTopic">{w.title}</div>
                <div className="workshopDesc">{w.desc}</div>
                <div className="workshopMeta">{w.format}</div>
                <div style={{ marginTop: "1.5rem" }}>
                  <Link href="/contact" className="btn-outline"
                    style={{ fontSize: "0.7rem", padding: "0.5rem 1.1rem" }}>
                    Register Interest →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING SESSIONS ─────────────────────────────────────── */}
      <section className="section section-darker">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Upcoming Sessions</span>
            <h2>What&apos;s Coming Up.</h2>
            <p className="sectionSubtitle">
              Register your interest and we&apos;ll notify you as soon as the
              next batch is confirmed.
            </p>
          </div>

          <div className="upcomingCard">
            <div style={{ fontSize: "3rem", marginBottom: "1.2rem" }}>📅</div>
            <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", marginBottom: "1rem" }}>
              New Sessions Being Scheduled
            </h3>
            <p style={{ color: "var(--gray)", maxWidth: 480, margin: "0 auto 2rem", lineHeight: 1.75, fontSize: "0.95rem" }}>
              Register your interest and our team will contact you with
              upcoming workshop dates, formats, and fees as soon as confirmed.
            </p>
            <Link href="/contact" className="btn-gold">Register Interest →</Link>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD ATTEND ─────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Who Should Attend</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Our Workshops Are<br />Designed For:
              </h2>
              <Link href="/contact" className="btn-gold">Register Interest →</Link>
            </div>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              {WHO_ITEMS.map((item) => (
                <li key={item} className="checkListItem">
                  <span className="checkListBullet">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <div className="cta-strip">
        <h2>Don&apos;t Miss the Next Session.</h2>
        <p>
          Register your interest and we&apos;ll notify you when new workshops
          and masterclasses are announced.
        </p>
        <div className="actions">
          <Link href="/contact" className="btn-gold">Register Interest</Link>
          <Link href="/programs" className="btn-outline">Explore Full Programs</Link>
        </div>
      </div>
    </>
  );
}
