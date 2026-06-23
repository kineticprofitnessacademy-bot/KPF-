"use client";

import { useState } from "react";
import Link from "next/link";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
const RAZORPAY_LINK = "PASTE_RAZORPAY_LINK_HERE";
const SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbykGKJOqaKBRvnaI2tie7XO8de-LOlbcZtl9vcWbBhoUjvc-o05ed03b1J3oexeKBVtnw/exec";

// ─── TYPES ───────────────────────────────────────────────────────────────────
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  occupation: string;
}
interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  city?: string;
  occupation?: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const MODULES = [
  { num: "01", title: "Behavioural Fitness", desc: "Understand the psychology and mindset behind sustainable fitness habits and long-term client behaviour change." },
  { num: "02", title: "What is Functional Training", desc: "Define functional training principles and how they differ from conventional gym-based exercise programming." },
  { num: "03", title: "Fitness Testing", desc: "Apply beginner, advanced, and athlete-level assessments to accurately gauge baseline performance and set measurable goals." },
  { num: "04", title: "Anatomy & Kinesiology", desc: "Build a working knowledge of human movement mechanics essential for intelligent and safe programme design." },
  { num: "05", title: "Compound Movements", desc: "Master multi-joint exercises that deliver maximum functional carry-over and real-world movement quality." },
  { num: "06", title: "Heart Rate Training & HIIT", desc: "Programme metabolic conditioning with precision using heart-rate zones, intervals, and recovery science." },
  { num: "07", title: "Stability Training", desc: "Develop a foundation of core control and joint stability to reduce injury risk and improve all-round performance." },
  { num: "08", title: "Props & Equipment Usage", desc: "Learn to leverage resistance bands, suspension trainers, kettlebells, and more for varied and progressive training stimulus." },
  { num: "09", title: "Dynamic vs Plyometric vs Static", desc: "Distinguish and intelligently programme three movement categories to achieve specific neuromuscular adaptations." },
  { num: "10", title: "Movement Training", desc: "Explore mobility, locomotion, and pattern-based training as a complete and holistic movement education system." },
  { num: "11", title: "KPF 3-2-1 Training Framework", desc: "Implement KPF Academy's signature programming system — a proven and repeatable blueprint for consistent client results." },
];

const TIMELINE = [
  { time: "1:00 PM", label: "Welcome & Orientation", detail: "Registration, group introductions and session overview." },
  { time: "1:15 PM", label: "Theory Block", detail: "Modules 1–4: Behavioural Fitness, Functional Training concepts, Fitness Testing, and Anatomy & Kinesiology." },
  { time: "2:30 PM", label: "Break", detail: "Refreshments and peer networking." },
  { time: "2:45 PM", label: "Practical Application", detail: "Modules 5–10: Live demonstrations, partner drills, and hands-on equipment practice." },
  { time: "4:15 PM", label: "KPF 3-2-1 Framework Reveal", detail: "Signature methodology walkthrough with full group Q&A." },
  { time: "4:45 PM", label: "Certificate Ceremony & Close", detail: "Group photo, certificate distribution, and next-step guidance." },
];

const WHO_ITEMS = [
  "Certified or aspiring personal trainers seeking advanced tools",
  "Group fitness and yoga instructors expanding their programming",
  "Sports coaches integrating evidence-based functional methods",
  "Gym owners and fitness studio managers upskilling their team",
  "Serious fitness enthusiasts who want structured, professional knowledge",
  "Physiotherapists and rehab professionals moving into performance training",
];

const BENEFITS = [
  { icon: "📋", title: "Workshop Notes", desc: "Comprehensive handouts covering all 11 modules — yours to keep and reference for life." },
  { icon: "🧠", title: "Practical Frameworks", desc: "Take-home programming templates you can apply with clients immediately after the session." },
  { icon: "🏅", title: "Certificate of Completion", desc: "An official KPF Academy certificate to strengthen your professional portfolio and credibility." },
  { icon: "🤝", title: "Networking Opportunity", desc: "Build real connections with like-minded coaches, trainers, and fitness professionals in your city." },
];

const OVERVIEW_ITEMS = [
  { icon: "⏱️", label: "Duration", value: "4 Hours" },
  { icon: "🎯", label: "Format", value: "Theory + Practical" },
  { icon: "📊", label: "Level", value: "All Levels" },
  { icon: "🏅", label: "Certificate", value: "Included" },
];

const WHY_ITEMS = [
  { icon: "💪", text: "Build measurable client results through movement intelligence" },
  { icon: "📐", text: "Programme with anatomical precision and functional context" },
  { icon: "🔬", text: "Understand the science behind the exercise, not just the reps" },
  { icon: "🚀", text: "Deliver standout sessions that clients talk about and recommend" },
];

const FAQS = [
  { q: "Who can attend this workshop?", a: "The workshop is open to fitness professionals, coaches, and serious enthusiasts at any level of experience. The content is structured to deliver value whether you are just starting out or have been coaching for years." },
  { q: "Do I receive a certificate?", a: "Yes. Every participant who attends the full workshop receives an official KPF Academy Certificate of Completion, presented at the closing ceremony." },
  { q: "What should I bring?", a: "Wear comfortable workout attire suitable for movement and bring a water bottle. A notebook is recommended for the theory block. All training equipment will be provided on the day." },
  { q: "Will there be practical demonstrations?", a: "Absolutely. The second half of the workshop is dedicated to hands-on practical application — covering compound movements, equipment usage, stability training, and dynamic movement patterns." },
  { q: "Is prior experience required?", a: "No prior experience is required. The workshop covers both foundational and advanced concepts, making it genuinely suitable for beginners through to experienced coaches." },
];

// ─── VALIDATION ──────────────────────────────────────────────────────────────
function validate(data: FormData): FormErrors {
  const e: FormErrors = {};
  if (!data.fullName.trim()) e.fullName = "Full name is required.";
  if (!data.email.trim()) e.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Enter a valid email address.";
  if (!data.phone.trim()) e.phone = "Phone number is required.";
  else if (!/^\+?[\d\s\-]{7,15}$/.test(data.phone)) e.phone = "Enter a valid phone number.";
  if (!data.city.trim()) e.city = "City is required.";
  if (!data.occupation.trim()) e.occupation = "Occupation is required.";
  return e;
}

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────
function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border2)" }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%", background: "none", border: "none",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "1.2rem 0", cursor: "pointer", textAlign: "left", gap: "1rem",
        }}
        aria-expanded={open}
      >
        <span style={{ color: "var(--white)", fontSize: "clamp(0.9rem,1.3vw,1rem)", fontWeight: 600, lineHeight: 1.5, fontFamily: "'Barlow', sans-serif" }}>{q}</span>
        <span style={{ color: "var(--neon)", fontSize: "1.4rem", flexShrink: 0, transition: "transform 0.25s var(--ease-out)", transform: open ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}>+</span>
      </button>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.3s var(--ease-out)" }}>
        <p className="bodyText" style={{ paddingBottom: "1.2rem", marginBottom: 0 }}>{a}</p>
      </div>
    </div>
  );
}

// ─── REGISTRATION FORM ───────────────────────────────────────────────────────
function RegistrationForm() {
  const [form, setForm] = useState<FormData>({ fullName: "", email: "", phone: "", city: "", occupation: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [apiError, setApiError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");
    setApiError("");
    try {
      await fetch(SHEETS_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, workshop: "Functional Training Workshop" }),
      });
      setStatus("success");
    } catch {
      setApiError("Something went wrong. Please try again or contact the KPF team.");
      setStatus("error");
    }
  }

  // ── SUCCESS STATE ──
  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <div style={{ fontSize: "3.5rem", marginBottom: "1.2rem" }}>🎉</div>
        <span className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>Registration Received</span>
        <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: "1rem" }}>
          Registration Received Successfully
        </h2>
        <p className="bodyText" style={{ maxWidth: 540, margin: "0 auto 0.8rem" }}>
          Thank you for registering for the <strong style={{ color: "var(--neon)" }}>Functional Training Workshop</strong>. Your registration details have been received successfully.
        </p>
        <p className="bodyText" style={{ maxWidth: 540, margin: "0 auto 0.8rem" }}>
          Please complete your payment using the button below to secure your seat. A confirmation email with workshop details will be sent to your registered email address after successful payment.
        </p>
        <p className="bodyText" style={{ maxWidth: 540, margin: "0 auto 1.8rem" }}>
          We look forward to seeing you at <strong style={{ color: "var(--gold)" }}>KPF Academy</strong>.
        </p>

        {/* Workshop info pills */}
        <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          {[{ icon: "📅", text: "Date: 11 July" }, { icon: "🕐", text: "Time: 1:00 PM – 5:00 PM" }].map(d => (
            <div key={d.text} style={{
              display: "flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(212,196,106,0.07)",
              border: "1px solid rgba(212,196,106,0.22)",
              borderRadius: "var(--radius)", padding: "0.65rem 1.1rem",
              color: "var(--neon)", fontSize: "0.88rem", fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, letterSpacing: "0.08em",
            }}>
              {d.icon} {d.text}
            </div>
          ))}
        </div>

        <a
          href={RAZORPAY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ fontSize: "0.82rem", padding: "1rem 2.5rem", display: "inline-flex" }}
        >
          Proceed To Secure Payment →
        </a>
        <p style={{ color: "var(--gray2)", fontSize: "0.72rem", marginTop: "0.9rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          🔒 Secured by Razorpay
        </p>
      </div>
    );
  }

  // ── FORM ──
  const errMsg: React.CSSProperties = { color: "#ff6b6b", fontSize: "0.72rem", marginTop: "0.25rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.06em" };

  function Field({ label, name, type = "text", placeholder }: { label: string; name: keyof FormData; type?: string; placeholder: string }) {
    return (
      <div className="form-field">
        <label className="form-label" htmlFor={`ft-${name}`}>
          {label} <span style={{ color: "#ff6b6b" }}>*</span>
        </label>
        <input
          id={`ft-${name}`}
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className="form-input"
          style={errors[name] ? { borderColor: "rgba(255,107,107,0.5)" } : {}}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `ft-${name}-error` : undefined}
        />
        {errors[name] && <p id={`ft-${name}-error`} style={errMsg}>{errors[name]}</p>}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Field label="Full Name" name="fullName" placeholder="Your full name" />
      <Field label="Email Address" name="email" type="email" placeholder="your@email.com" />
      <Field label="Phone Number" name="phone" type="tel" placeholder="+91 98765 43210" />
      <div className="form-row-grid">
        <Field label="City" name="city" placeholder="Your city" />
        <Field label="Occupation / Role" name="occupation" placeholder="e.g. Personal Trainer" />
      </div>

      {status === "error" && (
        <p style={{ ...errMsg, textAlign: "center", marginBottom: "0.5rem" }}>{apiError}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="form-submit"
        style={{ marginTop: "0.5rem" }}
      >
        {status === "loading" ? "Submitting…" : "Reserve My Seat"}
      </button>
      <p style={{ color: "var(--gray2)", fontSize: "0.7rem", textAlign: "center", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        🔒 Your information is secure and will never be shared
      </p>
    </form>
  );
}



export default function FunctionalTrainingWorkshop() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="page-hero" style={{ minHeight: "clamp(340px,60vh,620px)", padding: "clamp(4rem,8vh,7rem) 2rem clamp(3rem,5vh,5rem)" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">

          {/* Limited seats badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(212,196,106,0.1)", border: "1px solid rgba(212,196,106,0.3)", borderRadius: "999px", padding: "0.35rem 1rem 0.35rem 0.6rem", marginBottom: "1.5rem" }}>
            <span style={{ background: "#ff4444", borderRadius: "50%", width: 8, height: 8, display: "inline-block", boxShadow: "0 0 6px #ff4444" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--neon)" }}>
              Limited Seats Available
            </span>
          </div>

          <h1 style={{ marginBottom: "0.6rem" }}>
            Functional Training<br />Workshop
          </h1>
          <p style={{ color: "var(--gray)", fontSize: "clamp(0.95rem,1.5vw,1.1rem)", marginBottom: "2rem", maxWidth: 600 }}>
            A 4-hour intensive day of evidence-based theory and hands-on practical application — built for coaches and trainers who want to programme smarter.
          </p>

          {/* Date / time chips */}
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.2rem" }}>
            {[
              { icon: "📅", text: "11 July" },
              { icon: "🕐", text: "1:00 PM – 5:00 PM" },
              { icon: "⏱️", text: "4-Hour Intensive" },
            ].map(d => (
              <div key={d.text} style={{
                display: "flex", alignItems: "center", gap: "0.45rem",
                background: "rgba(212,196,106,0.07)",
                border: "1px solid rgba(212,196,106,0.2)",
                borderRadius: "var(--radius)", padding: "0.6rem 1.1rem",
                fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.78rem",
                fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--neon)",
              }}>
                {d.icon} {d.text}
              </div>
            ))}
          </div>

          <div className="heroCta" style={{ display: "flex", gap: "0.85rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#register" className="btn-gold">Reserve My Seat →</a>
            <a href="https://wa.me/917208299269" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Contact Team
            </a>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ──────────────────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Workshop At A Glance</span>
            <h2>Everything You Need to Know.</h2>
            <p className="sectionSubtitle">
              One focused day. Eleven modules. Real skills you can use immediately.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", background: "rgba(212,196,106,0.1)", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid rgba(212,196,106,0.1)" }}>
            {OVERVIEW_ITEMS.map(item => (
              <div key={item.label} style={{ background: "var(--card)", padding: "clamp(1.5rem,3vh,2.5rem) 1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.85rem" }}>{item.icon}</div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.6rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "0.4rem" }}>{item.label}</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.2rem,2vw,1.5rem)", color: "var(--white)", letterSpacing: "0.04em" }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ATTEND ────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Why This Workshop</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Functional Training<br />Is the Future of Coaching.
              </h2>
              <p className="bodyText">
                Coaches who understand functional movement patterns deliver better results, retain more clients, and build stronger reputations. Yet most certifications skim the surface of how the body actually moves.
              </p>
              <p className="bodyText">
                This workshop bridges that gap — giving you evidence-based theory, hands-on practical exposure, and a proven programming framework in a single intensive day.
              </p>
              <p className="bodyText" style={{ marginBottom: "2rem" }}>
                Whether you are building your first programme or refining a decade of practice, you will leave with tools you can use the very next day.
              </p>
              <a href="#register" className="btn-gold" style={{ display: "inline-flex" }}>Secure Your Seat →</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {WHY_ITEMS.map(item => (
                <div key={item.text} className="featureBlock featureBlockRow">
                  <span className="featureBlockIcon">{item.icon}</span>
                  <span className="featureBlockTitle">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL LEARN ───────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Curriculum</span>
            <h2>11 Learning Modules.</h2>
            <p className="sectionSubtitle">
              A structured progression from mindset to methodology — theory and practical application woven together throughout the day.
            </p>
          </div>
          <div className="workshopGrid">
            {MODULES.map(m => (
              <div key={m.num} className="workshopCard">
                <div className="workshopMeta" style={{ marginBottom: "0.6rem" }}>Module {m.num}</div>
                <div className="workshopTopic">{m.title}</div>
                <div className="workshopDesc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="section section-darker">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Workshop Flow</span>
            <h2>Day Schedule.</h2>
            <p className="sectionSubtitle">A structured 4-hour session designed to maximise both learning and retention.</p>
          </div>

          <div style={{ maxWidth: 680, margin: "0 auto", position: "relative" }}>
            {/* vertical line */}
            <div style={{
              position: "absolute", left: "112px", top: 0, bottom: 0, width: 1,
              background: "linear-gradient(to bottom, transparent, rgba(212,196,106,0.3), transparent)",
            }} />

            {TIMELINE.map((t, i) => (
              <div key={i} style={{ display: "flex", gap: "1.5rem", marginBottom: "2rem", alignItems: "flex-start" }}>
                <div style={{ minWidth: 96, textAlign: "right", paddingTop: "0.15rem" }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.12em", color: "var(--neon)", textTransform: "uppercase" }}>{t.time}</span>
                </div>
                {/* dot */}
                <div style={{ flexShrink: 0, marginTop: "0.3rem", position: "relative", zIndex: 1 }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg, var(--neon), var(--gold2))", boxShadow: "0 0 10px rgba(212,196,106,0.5)" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "0.2rem" }}>{t.label}</p>
                  <p className="bodyText" style={{ marginBottom: 0, fontSize: "0.85rem" }}>{t.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD ATTEND ─────────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Ideal For</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Our Workshop Is<br />Designed For:
              </h2>
              <p className="bodyText">
                If you work in fitness, coach athletes, manage a gym, or simply take your training seriously — this day was built for you.
              </p>
              <a href="#register" className="btn-gold" style={{ display: "inline-flex", marginTop: "1rem" }}>Reserve My Seat →</a>
            </div>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              {WHO_ITEMS.map(item => (
                <li key={item} className="checkListItem">
                  <span className="checkListBullet">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── COACH SECTION ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Your Instructor</span>
            <h2>Meet Your Coach.</h2>
            <p className="sectionSubtitle">Expert-led. Practitioner-driven. Every module is taught from the field, not a textbook.</p>
          </div>
          <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
            {/* Image placeholder */}
            <div style={{
              width: 160, height: 160, borderRadius: "50%",
              background: "var(--card2)", border: "2px solid rgba(212,196,106,0.25)",
              display: "flex", flexDirection: "column", alignItems: "center",
              justifyContent: "center", margin: "0 auto 1.8rem", gap: "0.4rem",
            }}>
              <span style={{ fontSize: "2.5rem" }}>👤</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.55rem", fontWeight: 800, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gray2)" }}>Photo</span>
            </div>

            <h3 style={{ fontSize: "clamp(1.4rem,2.5vw,1.8rem)", marginBottom: "0.3rem" }}>Coach Name Placeholder</h3>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "1.5rem" }}>
              Coach Designation Placeholder
            </p>
            <div className="upcomingCard" style={{ padding: "1.5rem 1.5rem", textAlign: "center" }}>
              <p className="bodyText" style={{ marginBottom: 0, fontStyle: "italic" }}>
                &ldquo;Coach details will be updated soon.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">What You Take Home</span>
            <h2>Workshop Benefits.</h2>
            <p className="sectionSubtitle">Your investment goes beyond the session — everything you need to keep growing after the day ends.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "clamp(0.8rem,1.5vw,1.2rem)" }}>
            {BENEFITS.map(b => (
              <div key={b.title} className="workshopCard" style={{ textAlign: "center", alignItems: "center" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>{b.icon}</div>
                <div className="workshopTopic" style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", marginBottom: "0.5rem" }}>{b.title}</div>
                <div className="workshopDesc" style={{ textAlign: "center" }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTRATION ──────────────────────────────────────────────────── */}
      <section id="register" className="section section-darker">
        <div className="container">
          <div className="page-split-grid" style={{ alignItems: "start" }}>

            {/* Left: Workshop details */}
            <div>
              <span className="section-label">Secure Your Spot</span>
              <h2 style={{ marginBottom: "1.2rem" }}>Register Now.</h2>
              <p className="bodyText">
                Seats are limited to ensure a focused, quality learning environment. Fill in the form to register — payment completes your booking.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", margin: "2rem 0" }}>
                {[
                  { icon: "📅", label: "Date", val: "11 July" },
                  { icon: "🕐", label: "Time", val: "1:00 PM – 5:00 PM" },
                  { icon: "⏱️", label: "Duration", val: "4 Hours" },
                  { icon: "📍", label: "Venue", val: "KPF Academy — To Be Confirmed" },
                  { icon: "👥", label: "Capacity", val: "Limited Seats" },
                  { icon: "🏅", label: "Certificate", val: "Included" },
                ].map(d => (
                  <div key={d.label} style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <span style={{ fontSize: "1.3rem", flexShrink: 0, width: 32, textAlign: "center" }}>{d.icon}</span>
                    <div>
                      <span style={{ display: "block", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.58rem", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "0.1rem" }}>{d.label}</span>
                      <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--white)" }}>{d.val}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(212,196,106,0.05)", border: "1px solid rgba(212,196,106,0.18)", borderRadius: "var(--radius)", padding: "1.4rem 1.6rem" }}>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--neon)", marginBottom: "0.5rem" }}>Have Questions?</p>
                <p className="bodyText" style={{ marginBottom: "0.8rem", fontSize: "0.85rem" }}>
                  Our team is happy to help before you register.
                </p>
                <a href="https://wa.me/917208299269" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "0.7rem", padding: "0.55rem 1.2rem", display: "inline-flex" }}>
                  WhatsApp Us →
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div style={{ background: "var(--card)", border: "1px solid var(--border2)", borderRadius: "var(--radius-lg)", padding: "clamp(1.8rem,3vw,2.8rem)" }}>
              <h3 style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", marginBottom: "0.4rem" }}>Complete Registration</h3>
              <p className="bodyText" style={{ marginBottom: "1.8rem", fontSize: "0.85rem" }}>
                Fill in your details below. After submission, proceed to secure payment to confirm your seat.
              </p>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Common Questions</span>
            <h2>Frequently Asked.</h2>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {FAQS.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ────────────────────────────────────────────────────── */}
      <div className="cta-strip">
        <h2>Don&apos;t Miss Your Seat.</h2>
        <p>
          Limited places available. Register today and invest a single day in skills that will serve your coaching career for years.
        </p>
        <div className="actions">
          <a href="#register" className="btn-gold">Reserve My Seat</a>
          <Link href="/programs" className="btn-outline">Explore Full Programs →</Link>
        </div>
      </div>
    </>
  );
}
