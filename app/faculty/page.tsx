// app/faculty/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Faculty.module.css";

export const metadata: Metadata = {
  title: "Shraddha Gadit — Faculty | KPF Academy",
  description:
    "Performance Nutrition Expert, Academic Leader & Founder of Kinetic Pro Fitness Academy. 17+ years, 10,000+ students, 500+ workshops.",
};

/* ─── DATA ───────────────────────────────────────────────────────── */

const STATS = [
  { num: "17+",     label: "Years of Experience",            sub: "Industry & Academia" },
  { num: "10,000+", label: "Students Mentored",              sub: "Across India" },
  { num: "500+",    label: "Workshops & Webinars",           sub: "Delivered Nationwide" },
  { num: "100+",    label: "Corporates Impacted",            sub: "Organisations Transformed" },
];

const CREDENTIALS = [
  {
    icon: "🎓",
    title: "Master's in Food Science & Nutrition",
    inst: "S.N.D.T. Women's University",
    note: "University Gold Medalist · Department Rank Holder",
  },
  {
    icon: "🎓",
    title: "Bachelor's in Clinical Dietetics",
    inst: "S.V.T. College of Home Science",
    note: "Top academic standing",
  },
  {
    icon: "🏅",
    title: "Batch Topper — Sports Performance Nutrition",
    inst: "IIT Madras",
    note: "Elite executive programme",
  },
  {
    icon: "✦",
    title: "Certified Nutrition Coach (CNC)",
    inst: "NASM, USA",
    note: "International certification",
  },
  {
    icon: "✦",
    title: "Certified Diabetes Educator",
    inst: "National Diabetes Educator Program (NDEP)",
    note: "Clinical specialisation",
  },
  {
    icon: "🏆",
    title: "Best Employee of the Year",
    inst: "3 Consecutive Years — 2016–2019",
    note: "Gold's Gym Fitness Institute",
  },
];

const TIMELINE = [
  {
    period: "Present",
    role: "Founder — Kinetic Pro Fitness Academy (KPF)",
    detail:
      "Building future-ready fitness and nutrition professionals with industry-relevant, evidence-based education.",
  },
  {
    period: "10+ Years",
    role: "Head of Department — Gold's Gym Fitness Institute",
    detail:
      "Led academic and operational excellence, mentored students, guided faculty teams and shaped curriculum across India.",
  },
  {
    period: "Ongoing",
    role: "Visiting Faculty — S.N.D.T. University",
    detail:
      "Mentoring students in applied nutrition and health sciences at one of India's premier women's universities.",
  },
  {
    period: "Global",
    role: "International Fitness Education Representative",
    detail:
      "Represented Indian fitness education at international Gold's Gym conventions in Malaysia, Dubai and Bangkok.",
  },
  {
    period: "Research",
    role: "Published Researcher & Author",
    detail:
      "Research published in the International Journal of Health Sciences and Research. Articles in leading health and fitness magazines.",
  },
  {
    period: "Media",
    role: "Podcast Speaker & Media Expert",
    detail:
      "Invited speaker across nutrition, wellness, performance and lifestyle podcasts. Featured on Zoom TV, Zee Khana Khazana and more.",
  },
];

const EXPERTISE = [
  { icon: "⚡", title: "Performance Nutrition",           desc: "Science-led strategies for athletes and high-performers." },
  { icon: "🏃", title: "Sports Nutrition",                desc: "Fuelling peak athletic output with evidence-based protocols." },
  { icon: "🏢", title: "Corporate Wellness",              desc: "Transforming workplace health through structured programmes." },
  { icon: "👥", title: "Trainer Development",             desc: "Shaping the next generation of fitness professionals." },
  { icon: "🛡", title: "Preventive Health",               desc: "Behaviour-change systems that create lasting outcomes." },
  { icon: "📚", title: "Academic Leadership",             desc: "Curriculum design and institutional excellence." },
];

const APPROACH = [
  { step: "01", heading: "Evidence-Based",     body: "Every recommendation is grounded in peer-reviewed science — no fads, no shortcuts." },
  { step: "02", heading: "Systems Thinking",   body: "Sustainable change requires structures, not just information. We build systems." },
  { step: "03", heading: "Real-World Bridge",  body: "Translating laboratory science into actionable daily strategies people actually follow." },
  { step: "04", heading: "Behaviour Change",   body: "Lasting health outcomes are created through psychology and habit architecture." },
];

const LEGACY = [
  { icon: "🎓", title: "Educational Reputation",        body: "Excellence from academics to real-world impact — a 17-year body of work." },
  { icon: "🌍", title: "International Representation",  body: "Carrying Indian fitness education to global platforms across Asia and the Middle East." },
  { icon: "🏆", title: "Award-Winning Professional",    body: "Shaping thousands of careers with knowledge, mentorship and guidance." },
  { icon: "✦",  title: "Founder's Vision",              body: "Building KPF Academy as the definitive home for India's fitness educators." },
];

const MEDIA = [
  { name: "Zoom TV",              icon: "📺" },
  { name: "Zee Khana Khazana",   icon: "🍽" },
  { name: "Chef Ranveer Brar",   icon: "👨‍🍳" },
  { name: "Care World TV",       icon: "❤" },
  { name: "HerZindagi",          icon: "✨" },
];

const AVAILABLE = [
  { icon: "🎤", title: "Keynote Speeches",                  desc: "Corporate events, conferences and academic institutions." },
  { icon: "🏢", title: "Corporate Wellness Programs",        desc: "Structured workplace health and performance programmes." },
  { icon: "📋", title: "Training & Workshops",              desc: "Hands-on skill-building for professionals and teams." },
  { icon: "🎙", title: "Panel Discussions",                  desc: "Industry forums, education summits and health platforms." },
  { icon: "🎧", title: "Podcast & Media Appearances",        desc: "Nutrition, wellness, performance and lifestyle conversations." },
  { icon: "🤝", title: "Academic & Industry Collaborations", desc: "Research, curriculum design and institutional partnerships." },
];

/* ─── PAGE ───────────────────────────────────────────────────────── */

export default function FacultyPage() {
  return (
    <main className={styles.main}>

      {/* ══════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════ */}
      <section className={styles.hero} aria-label="Faculty hero">
        {/* portrait image */}
        <div className={styles.heroImgWrap}>
          <Image
            src="/images/faculty/shraddha-gadit.jpg"
            fill
            alt="Shraddha Gadit — Founder KPF Academy"
            className={styles.heroImg}
            priority
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          {/* cinematic overlays */}
          <div className={styles.heroOverlay} aria-hidden />
          <div className={styles.heroLeakLeft}  aria-hidden />
          <div className={styles.heroLeakRight} aria-hidden />
        </div>

        {/* text content */}
        <div className={styles.heroContent}>
          <div className={styles.heroBadge} aria-hidden>
            <span className={styles.heroBadgeLine} />
            <span className={styles.heroBadgeText}>KPF Academy — Faculty</span>
            <span className={styles.heroBadgeLine} />
          </div>

          <h1 className={styles.heroName}>
            <span className={styles.heroNameFirst}>Shraddha</span>
            <span className={styles.heroNameLast}>Gadit</span>
          </h1>

          <p className={styles.heroTitles}>
            Performance Nutrition Expert&nbsp;·&nbsp;Academic Leader&nbsp;·&nbsp;Founder
          </p>
          <p className={styles.heroTagline}>
            Inspiring.&nbsp;Educating.&nbsp;Transforming.
          </p>

          <div className={styles.heroCta}>
            <Link href="#contact" className={styles.btnGold}>
              Work With Shraddha
            </Link>
            <Link href="#credentials" className={styles.btnOutline}>
              View Credentials
            </Link>
          </div>
        </div>

        {/* scroll hint */}
        <div className={styles.heroScroll} aria-hidden>
          <span className={styles.heroScrollLine} />
          <span className={styles.heroScrollLabel}>scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. CORE BELIEF
      ══════════════════════════════════════════════ */}
      <section className={styles.belief} aria-label="Core belief">
        <div className={styles.beliefInner}>
          <span className={styles.beliefEye}>Core Belief</span>
          <blockquote className={styles.beliefQuote}>
            <span className={styles.beliefMark}>&ldquo;</span>
            Driven by a belief that lasting health outcomes are created through
            education, systems and behaviour change — not simply information.
            <span className={styles.beliefMark}>&rdquo;</span>
          </blockquote>
          <cite className={styles.beliefCite}>— Shraddha Gadit</cite>
          <div className={styles.beliefRule} aria-hidden />
          <p className={styles.beliefSub}>
            Recognised for contributions to Nutrition Education, Fitness Leadership
            and Professional Development across India and internationally.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. STATS
      ══════════════════════════════════════════════ */}
      <section className={styles.statsSection} aria-label="Key numbers">
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.num} className={styles.statCard}>
              <div className={styles.statGlow} aria-hidden />
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statSub}>{s.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. CREDENTIALS
      ══════════════════════════════════════════════ */}
      <section className={styles.credSection} id="credentials" aria-label="Credentials">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Academic &amp; Professional</span>
            <h2 className={styles.sectionTitle}>Credentials</h2>
            <p className={styles.sectionSub}>
              A foundation of academic excellence and internationally recognised qualifications.
            </p>
          </div>
          <div className={styles.credGrid}>
            {CREDENTIALS.map((c) => (
              <div key={c.title} className={styles.credCard}>
                <span className={styles.credIcon} aria-hidden>{c.icon}</span>
                <div>
                  <h3 className={styles.credTitle}>{c.title}</h3>
                  <p className={styles.credInst}>{c.inst}</p>
                  <p className={styles.credNote}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. CAREER TIMELINE
      ══════════════════════════════════════════════ */}
      <section className={styles.timelineSection} aria-label="Career highlights">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Career Highlights</span>
            <h2 className={styles.sectionTitle}>A Decade of Leadership</h2>
          </div>

          <div className={styles.timeline} aria-label="Career timeline">
            <div className={styles.timelineSpine} aria-hidden />
            {TIMELINE.map((t, i) => (
              <div
                key={t.role}
                className={`${styles.timelineItem} ${i % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
              >
                <div className={styles.timelineNode} aria-hidden />
                <div className={styles.timelineCard}>
                  <span className={styles.timelinePeriod}>{t.period}</span>
                  <h3 className={styles.timelineRole}>{t.role}</h3>
                  <p className={styles.timelineDetail}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. EXPERTISE
      ══════════════════════════════════════════════ */}
      <section className={styles.expertiseSection} aria-label="Areas of expertise">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Specialisations</span>
            <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
          </div>
          <div className={styles.expertiseGrid}>
            {EXPERTISE.map((e) => (
              <div key={e.title} className={styles.expertiseCard}>
                <span className={styles.expertiseIcon} aria-hidden>{e.icon}</span>
                <h3 className={styles.expertiseTitle}>{e.title}</h3>
                <p className={styles.expertiseDesc}>{e.desc}</p>
                <div className={styles.expertiseStripe} aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. SPEAKER · EDUCATOR · INFLUENCER
      ══════════════════════════════════════════════ */}
      <section className={styles.speakerSection} aria-label="Speaker and educator">
        <div className={styles.container}>
          <div className={styles.speakerGrid}>
            <div className={styles.speakerCopy}>
              <span className={styles.eyebrow}>Speaker · Educator · Influencer</span>
              <h2 className={styles.sectionTitle}>500+ Events Delivered</h2>
              <p className={styles.bodyText}>
                A sought-after keynote speaker at conferences, corporate events,
                academic institutions and industry platforms across India.
              </p>
              <p className={styles.bodyText}>
                Workshops and webinars spanning performance nutrition, sports nutrition,
                corporate wellness, behaviour change, preventive health, trainer education
                and sustainable performance.
              </p>
              <ul className={styles.speakerTopics}>
                {["Performance Nutrition","Sports Nutrition","Corporate Wellness",
                  "Behaviour Change","Preventive Health","Trainer Education",
                  "Sustainable Performance"].map((t) => (
                  <li key={t} className={styles.speakerTopic}>
                    <span className={styles.speakerDot} aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.speakerStatWrap}>
              {[
                { num: "500+", label: "Workshops & Webinars" },
                { num: "100+", label: "Corporate Events"     },
                { num: "17+",  label: "Years on Stage"       },
              ].map((s) => (
                <div key={s.label} className={styles.speakerStat}>
                  <span className={styles.speakerStatNum}>{s.num}</span>
                  <span className={styles.speakerStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. PROUD TO BE
      ══════════════════════════════════════════════ */}
      <section className={styles.proudSection} aria-label="Proud to be">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Beyond Nutrition</span>
            <h2 className={styles.sectionTitle}>Proud To Be</h2>
            <p className={styles.sectionSub}>
              Where science meets art, and passion creates purpose.
            </p>
          </div>
          <div className={styles.proudGrid}>
            <div className={styles.proudCard}>
              <div className={styles.proudArt} aria-hidden>
                <span className={styles.proudArtGlyph}>𝄞</span>
              </div>
              <div className={styles.proudBody}>
                <span className={styles.proudTag}>Visharad</span>
                <h3 className={styles.proudTitle}>Bharatanatyam</h3>
                <p className={styles.proudDesc}>
                  14 years of formal classical dance training. A lifelong journey of
                  discipline, grace and self-expression — the same values that define
                  her approach to education.
                </p>
              </div>
            </div>
            <div className={styles.proudCard}>
              <div className={`${styles.proudArt} ${styles.proudArtPaint}`} aria-hidden>
                <span className={styles.proudArtGlyph}>✦</span>
              </div>
              <div className={styles.proudBody}>
                <span className={styles.proudTag}>Visharad</span>
                <h3 className={styles.proudTitle}>Drawing &amp; Painting</h3>
                <p className={styles.proudDesc}>
                  Creativity complements science. Bringing balance, expression and
                  perspective — art trains the eye to see what data alone cannot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          9. MY APPROACH
      ══════════════════════════════════════════════ */}
      <section className={styles.approachSection} aria-label="My approach">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Philosophy</span>
            <h2 className={styles.sectionTitle}>My Approach</h2>
          </div>
          <div className={styles.approachGrid}>
            {APPROACH.map((a) => (
              <div key={a.step} className={styles.approachCard}>
                <span className={styles.approachStep} aria-hidden>{a.step}</span>
                <h3 className={styles.approachHeading}>{a.heading}</h3>
                <p className={styles.approachBody}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          10. BEYOND NUTRITION — full-width feature
      ══════════════════════════════════════════════ */}
      <section className={styles.beyondSection} aria-label="A life of discipline and creativity">
        <div className={styles.beyondInner}>
          <div className={styles.beyondGlow} aria-hidden />
          <span className={styles.eyebrow}>A Life of Discipline &amp; Creativity</span>
          <h2 className={styles.beyondTitle}>
            Where Science Meets Art,<br />
            <span className={styles.beyondGold}>and Passion Creates Purpose</span>
          </h2>
          <p className={styles.beyondBody}>
            Shraddha Gadit is not only an educator and nutrition scientist — she is a
            classically trained Bharatanatyam dancer and an accomplished visual artist.
            The same discipline that drives her academic and professional life infuses
            every creative pursuit. She believes that a life of full expression — across
            science, movement and art — is itself the most powerful proof of what she
            teaches: that health is holistic, and peak performance encompasses the whole person.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          11. LEGACY & VISION
      ══════════════════════════════════════════════ */}
      <section className={styles.legacySection} aria-label="Legacy and vision">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Legacy &amp; Vision</span>
            <h2 className={styles.sectionTitle}>Building a Legacy</h2>
          </div>
          <div className={styles.legacyGrid}>
            {LEGACY.map((l) => (
              <div key={l.title} className={styles.legacyCard}>
                <span className={styles.legacyIcon} aria-hidden>{l.icon}</span>
                <h3 className={styles.legacyTitle}>{l.title}</h3>
                <p className={styles.legacyBody}>{l.body}</p>
                <div className={styles.legacyStripe} aria-hidden />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          12. MEDIA FEATURES
      ══════════════════════════════════════════════ */}
      <section className={styles.mediaSection} aria-label="Media features">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Featured In</span>
            <h2 className={styles.sectionTitle}>Media &amp; Press</h2>
          </div>
          <div className={styles.mediaStrip}>
            {MEDIA.map((m) => (
              <div key={m.name} className={styles.mediaItem}>
                <span className={styles.mediaIcon} aria-hidden>{m.icon}</span>
                <span className={styles.mediaName}>{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          13. AVAILABLE FOR
      ══════════════════════════════════════════════ */}
      <section className={styles.availSection} aria-label="Available for">
        <div className={styles.container}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Engagements</span>
            <h2 className={styles.sectionTitle}>Available For</h2>
          </div>
          <div className={styles.availGrid}>
            {AVAILABLE.map((a) => (
              <div key={a.title} className={styles.availCard}>
                <span className={styles.availIcon} aria-hidden>{a.icon}</span>
                <h3 className={styles.availTitle}>{a.title}</h3>
                <p className={styles.availDesc}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          14. CONTACT
      ══════════════════════════════════════════════ */}
      <section className={styles.contactSection} id="contact" aria-label="Contact">
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactCopy}>
              <span className={styles.eyebrow}>Get In Touch</span>
              <h2 className={styles.sectionTitle}>Let&rsquo;s Connect</h2>
              <p className={styles.bodyText}>
                Whether you&rsquo;re looking for a keynote speaker, a curriculum
                collaborator, or a corporate wellness partner — Shraddha Gadit brings
                17 years of expertise to every engagement.
              </p>
            </div>
            <div className={styles.contactCards}>
              <a href="tel:+917208299269" className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden>📞</span>
                <div>
                  <span className={styles.contactCardLabel}>Phone</span>
                  <span className={styles.contactCardVal}>+91 72082 99269</span>
                </div>
              </a>
              <a href="mailto:shraddhagadit@gmail.com" className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden>📧</span>
                <div>
                  <span className={styles.contactCardLabel}>Email</span>
                  <span className={styles.contactCardVal}>shraddhagadit@gmail.com</span>
                </div>
              </a>
              <div className={styles.contactCard}>
                <span className={styles.contactCardIcon} aria-hidden>📍</span>
                <div>
                  <span className={styles.contactCardLabel}>Location</span>
                  <span className={styles.contactCardVal}>Kandivali East, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          15. FINAL KPF CTA
      ══════════════════════════════════════════════ */}
      <section className={styles.ctaSection} aria-label="KPF Academy CTA">
        <div className={styles.ctaGlow} aria-hidden />
        <div className={styles.ctaBeam} aria-hidden />
        <div className={styles.ctaInner}>
          <span className={styles.ctaEye}>Kinetic Pro Fitness Academy</span>
          <h2 className={styles.ctaTitle}>
            Inspiring.{" "}
            <span className={styles.ctaGoldWord}>Educating.</span>{" "}
            Transforming.
          </h2>
          <p className={styles.ctaBody}>
            Join thousands of fitness and nutrition professionals who have built their
            careers under Shraddha Gadit&rsquo;s guidance at KPF Academy.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/programs" className={styles.btnGold}>
              Explore Programs
            </Link>
            <Link href="/contact" className={styles.btnOutline}>
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
