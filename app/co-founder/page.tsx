// app/co-founder/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── SCROLL REVEAL ─────────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(
      "[data-r], [data-rl], [data-rr], [data-rs]"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.style.opacity = "1";
          el.style.transform = "none";
          io.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    els.forEach((el) => {
      el.style.transition =
        "opacity 0.75s cubic-bezier(0.23,1,0.32,1), transform 0.75s cubic-bezier(0.23,1,0.32,1)";
      el.style.willChange = "opacity, transform";
      el.style.opacity = "0";
      if (el.dataset.r  !== undefined) el.style.transform = "translateY(36px)";
      if (el.dataset.rl !== undefined) el.style.transform = "translateX(-44px)";
      if (el.dataset.rr !== undefined) el.style.transform = "translateX(44px)";
      if (el.dataset.rs !== undefined) el.style.transform = "scale(0.94)";
      io.observe(el);
    });

    /* stagger groups */
    root.querySelectorAll<HTMLElement>("[data-stagger]").forEach((wrap) => {
      Array.from(wrap.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = `opacity 0.65s cubic-bezier(0.23,1,0.32,1) ${i * 90}ms, transform 0.65s cubic-bezier(0.23,1,0.32,1) ${i * 90}ms`;
        el.style.willChange = "opacity, transform";
        io.observe(el);
      });
    });

    return () => io.disconnect();
  }, []);
  return ref;
}

/* ─── DATA ───────────────────────────────────────────────────────── */
const STATS = [
  { num: "20+",   label: "Years Experience" },
  { num: "3",     label: "Premier Institutions" },
  { num: "1000+", label: "Trainers Mentored" },
  { num: "5★",    label: "Coaching Standard" },
];

const JOURNEY = [
  {
    year: "2003 – 2010",
    org: "Gold's Gym",
    role: "Head Trainer & Floor Manager",
    desc: "Built a reputation for results-driven programming and became the go-to mentor for new trainers entering the Gold's system across multiple branches.",
  },
  {
    year: "2010 – 2016",
    org: "Independent Coaching",
    role: "Elite Personal Trainer",
    desc: "Worked with athletes, executives and post-rehab clients, developing a proprietary coaching methodology rooted in biomechanics and behaviour change.",
  },
  {
    year: "2016 – Present",
    org: "Trio Fitness",
    role: "Owner & Master Trainer",
    desc: "Founded and scaled Trio Fitness into a respected training facility, blending evidence-based programming with real-world practical application.",
  },
  {
    year: "2022 – Present",
    org: "KPF Academy",
    role: "Co-Founder",
    desc: "Co-founded Kinetic Pro Fitness Academy with a mission to bridge the gap between theoretical fitness education and what the industry actually demands.",
  },
];

const EXPERTISE = [
  { icon: "🏋️", title: "Strength & Conditioning",   desc: "Periodised strength protocols for athletes, recreational clients and performance-focused individuals." },
  { icon: "🧠", title: "Trainer Development",        desc: "Mentoring aspiring coaches with real floor experience, feedback systems and programming frameworks." },
  { icon: "🔬", title: "Evidence-Based Programming", desc: "Every protocol built on exercise science — not trends. Results that are measurable, repeatable and safe." },
  { icon: "♻️", title: "Rehab & Movement",           desc: "Corrective exercise and mobility integration for clients returning from injury or managing chronic issues." },
  { icon: "🎯", title: "Client Transformation",      desc: "Fat loss, muscle gain and performance — guided by data, delivered with precision." },
  { icon: "🏢", title: "Gym Operations",             desc: "Running a high-performance training facility — systems, staffing, and culture that sustains results." },
];

const PHILOSOPHY = [
  {
    num: "01",
    heading: "Practical Over Theoretical",
    body: "Certifications matter, but what you do with a real client on the floor matters more. Every lesson at KPF is rooted in practical application.",
  },
  {
    num: "02",
    heading: "Mentorship Is the Multiplier",
    body: "Great coaches aren't made in classrooms alone. They are shaped by mentors who care enough to give honest, specific, and timely feedback.",
  },
  {
    num: "03",
    heading: "Standards Create Legacies",
    body: "The fitness industry needs professionals who refuse to cut corners. KPF exists to raise the bar permanently.",
  },
  {
    num: "04",
    heading: "Education Never Stops",
    body: "The coaches who stay curious, keep learning and stay humble are the ones who build careers that last decades.",
  },
];

/* ─── PAGE ───────────────────────────────────────────────────────── */
export default function CoFounderPage() {
  const pageRef = useReveal();

  return (
    <main ref={pageRef as React.RefObject<HTMLDivElement>}>

      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section
        className="section section-dark"
        style={{ paddingTop: "clamp(4rem,8vh,7rem)", paddingBottom: "clamp(4rem,8vh,7rem)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr clamp(300px,38%,480px)",
              gap: "clamp(2.5rem,5vw,5rem)",
              alignItems: "center",
            }}
          >
            {/* LEFT — text */}
            <div data-rl>
              <span className="section-label">Co-Founder · KPF Academy</span>

              <h1
                style={{
                  fontSize: "clamp(3rem,6vw,5.8rem)",
                  lineHeight: 0.92,
                  marginBottom: "1.2rem",
                }}
              >
                Ratanraj<br />
                <span style={{ color: "var(--neon)" }}>S. Reddy</span>
              </h1>

              <p
                style={{
                  fontSize: "clamp(0.95rem,1.4vw,1.1rem)",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "2rem",
                  maxWidth: "540px",
                }}
              >
                With over 20 years on the gym floor, Ratanraj S. Reddy has shaped trainers,
                transformed clients, and built institutions. As Co-Founder of KPF Academy,
                he brings everything he learned the hard way — so the next generation doesn't have to.
              </p>

              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem", marginBottom: "2.5rem" }}
              >
                <span className="badge">20+ Years Experience</span>
                <span className="badge">Former Head Trainer · Gold's Gym</span>
                <span className="badge">Owner · Trio Fitness</span>
                <span className="badge">Co-Founder · KPF Academy</span>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/programs" className="btn-gold">Explore Programs</Link>
                <Link href="/contact"  className="btn-outline">Work With Us</Link>
              </div>
            </div>

            {/* RIGHT — image */}
            <div data-rr>
              <div
                className="facultyImageWrap"
                style={{
                  position: "relative",          /* required for Next.js fill Image */
                  height: "clamp(400px,52vh,580px)",
                  borderRadius: "28px",
                  overflow: "hidden",             /* clip the image to rounded corners */
                  transform: "perspective(1400px) rotateY(-4deg)",
                }}
              >
                <Image
                  src="/images/team/ratanraj.jpg"
                  alt="Ratanraj S. Reddy — Co-Founder, KPF Academy"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>

              {/* Floating stat badge */}
              <div
                data-rs
                style={{
                  marginTop: "-3rem",
                  marginLeft: "1.5rem",
                  position: "relative",
                  zIndex: 2,
                  display: "inline-block",
                  background: "linear-gradient(135deg, #ffe080, #f4c542, #d4a017)",
                  borderRadius: "14px",
                  padding: "1rem 1.5rem",
                  boxShadow: "0 12px 40px rgba(244,197,66,0.3)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    color: "#060400",
                    lineHeight: 1,
                  }}
                >
                  20+
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#3a2800",
                  }}
                >
                  Years on the Floor
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS ROW ══════════════════════════════════════════════ */}
      <div className="stats-row" data-stagger>
        {STATS.map((s) => (
          <div key={s.num} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ══ CAREER JOURNEY ════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader" data-r>
            <span className="section-label">The Path</span>
            <h2>Career Journey</h2>
            <p className="sectionSubtitle">
              Two decades across India's most respected fitness institutions — each role a deeper layer of expertise.
            </p>
          </div>

          <div className="timelineGrid" data-stagger>
            {JOURNEY.map((j, i) => (
              <div key={i} className="timelineCard" style={{ textAlign: "left" }}>
                <div className="timelineStep" style={{ textAlign: "left" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="timelineTime">{j.year}</div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 800,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--neon)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {j.org}
                </div>
                <div className="timelineTitle">{j.role}</div>
                <div className="timelineDesc">{j.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT — SPLIT ═════════════════════════════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2.5rem,5vw,5rem)",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div data-rl>
              <span className="section-label">The Mission</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Building a Better<br />
                <span style={{ color: "var(--neon)" }}>Fitness Industry</span>
              </h2>
              <p className="bodyText">
                Ratanraj's career began on the floor at Gold's Gym — where he quickly rose from trainer
                to Head Trainer by producing results others couldn't explain. His secret was never
                a secret: relentless attention to movement quality, client psychology, and progressive
                programming.
              </p>
              <p className="bodyText">
                After founding Trio Fitness, he realised that the gap between what fitness education
                teaches and what the industry actually needs was enormous. KPF Academy is his answer —
                built alongside Shraddha Gadit to produce professionals the industry can trust.
              </p>

              <ul className="leadershipList" style={{ marginTop: "1.5rem" }}>
                <li>Former Head Trainer, Gold's Gym — shaped trainer culture across branches</li>
                <li>Owner of Trio Fitness — a training facility built on science and standards</li>
                <li>Mentor to 1,000+ aspiring fitness professionals across India</li>
                <li>Co-Founder of KPF Academy — India's next-generation fitness institution</li>
              </ul>
            </div>

            {/* RIGHT — glass stat card */}
            <div data-rr>
              <div className="statsCard">
                <div className="statsGrid">
                  {[
                    { num: "20+",   label: "Years Experience" },
                    { num: "1000+", label: "Trainers Mentored" },
                    { num: "3",     label: "Institutions Built" },
                    { num: "100%",  label: "Floor-Tested Methods" },
                  ].map((s) => (
                    <div key={s.num} className="statItem">
                      <span className="statNum">{s.num}</span>
                      <span className="statLabel">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="statsCardDeco" />

                <blockquote
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--border)",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem,1.4vw,1.2rem)",
                    lineHeight: 1.6,
                    color: "var(--neon)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  "Great fitness professionals aren't just trained — they are mentored, challenged,
                  and inspired to keep learning every single day."
                  <cite
                    style={{
                      display: "block",
                      marginTop: "0.8rem",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "0.62rem",
                      fontWeight: 800,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--gray2)",
                      fontStyle: "normal",
                    }}
                  >
                    — Ratanraj S. Reddy
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AREAS OF EXPERTISE ════════════════════════════════════ */}
      <section className="section section-darker">
        <div className="container">
          <div className="sectionHeader" data-r>
            <span className="section-label">Specialisations</span>
            <h2>Areas of Expertise</h2>
            <p className="sectionSubtitle">
              Two decades of floor time distilled into six core disciplines.
            </p>
          </div>

          <div className="pillarsGrid" data-stagger>
            {EXPERTISE.map((e, i) => (
              <div key={i} className="pillarCard">
                <div className="pillarNum">{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: "1.8rem", marginBottom: "1rem", position: "relative", zIndex: 2 }}>
                  {e.icon}
                </div>
                <div className="pillarTitle">{e.title}</div>
                <p className="pillarDesc">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY ════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader" data-r>
            <span className="section-label">Philosophy</span>
            <h2>How Ratanraj Coaches</h2>
            <p className="sectionSubtitle">
              Four principles that have guided every session, every mentor relationship, and every institution he has built.
            </p>
          </div>

          <div className="philosophy-stack" data-stagger>
            {PHILOSOPHY.map((p) => (
              <div key={p.num} className="philosophy-card">
                <div className="philosophy-num">{p.num}</div>
                <div className="philosophy-content">
                  <h3>{p.heading}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ KPF VISION ════════════════════════════════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2.5rem,5vw,5rem)",
              alignItems: "center",
            }}
          >
            <div data-rl>
              <span className="section-label">The Vision</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Why KPF<br />
                <span style={{ color: "var(--neon)" }}>Exists</span>
              </h2>
              <p className="bodyText">
                India's fitness industry is growing faster than its education system can keep up.
                Gyms are full of trainers who passed an exam but don't know how to handle a real client
                with real limitations, real goals, and real expectations.
              </p>
              <p className="bodyText">
                KPF Academy was founded to close that gap — permanently. Every programme is designed
                to produce professionals who are technically sound, practically skilled, and
                ethically grounded.
              </p>
            </div>

            <div data-rr>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { icon: "🎓", title: "Industry-Relevant Curriculum", desc: "Built from real coaching experience, not textbook theory alone." },
                  { icon: "🤝", title: "Mentorship-Led Learning",       desc: "Every student gets direct access to educators who have done the work." },
                  { icon: "📜", title: "Recognised Certification",      desc: "Credentials that gyms, studios and clients can trust." },
                  { icon: "🌐", title: "A Nationwide Network",          desc: "Join a community of KPF alumni building careers across India." },
                ].map((f) => (
                  <div key={f.title} className="featureBlock">
                    <div className="featureBlockIcon">{f.icon}</div>
                    <div>
                      <div className="featureBlockTitle">{f.title}</div>
                      <div className="featureBlockDesc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════════════ */}
      <section className="cta-strip" data-r>
        <div className="container">
          <span
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "1rem" }}
          >
            Ready to Learn From the Best?
          </span>
          <h2 style={{ marginBottom: "1rem" }}>
            Train Under{" "}
            <span style={{ color: "var(--neon)" }}>Ratanraj S. Reddy</span>
          </h2>
          <p>
            Explore KPF Academy's programmes and start building a fitness career
            that stands on a real foundation.
          </p>
          <div className="actions">
            <Link href="/programs" className="btn-gold">View All Programs</Link>
            <Link href="/contact"  className="btn-outline">Get in Touch</Link>
          </div>
        </div>
      </section>

    </main>
  );
}