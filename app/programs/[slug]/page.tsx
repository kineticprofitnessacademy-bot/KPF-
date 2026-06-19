import Link from "next/link";
import { programs } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return {};
  return {
    title: `${program.title} — KPF Academy`,
    description: program.description,
  };
}

export default function ProgramDetailPage({ params }: Props) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) notFound();

  return (
    <>
      {/* HERO */}
      <section className="page-hero" style={{ minHeight: "55vh" }}>
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <div className="prog-card-badge" style={{ marginBottom: "1.2rem" }}>{program.tag}</div>
          <h1>{program.title}</h1>
          <p>{program.description}</p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "1rem" }}>
            {[
              `Format: ${program.format.join(" · ")}`,
              `Duration: ${program.duration}`,
              `Eligibility: ${program.eligibility}`,
            ].map((tag) => (
              <span key={tag} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gray)", border: "1px solid var(--border)", padding: "0.3rem 0.8rem", borderRadius: "100px" }}>{tag}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <Link href="/apply" className="btn-gold">Apply Now</Link>
            <a href="/brochure.pdf" download className="btn-gold">
  Download Brochure →
</a>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-split-grid">
            <div>
              <span className="section-label">Who Is This For</span>
              <h2 style={{ marginBottom: "1.5rem" }}>This Program Is Designed For:</h2>
              <Link href="/contact" className="btn-gold" style={{ fontSize: "0.8rem", padding: "0.65rem 1.4rem" }}>
                Book Academic Counselling →
              </Link>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {program.whoFor.map((item) => (
                <li key={item} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", color: "var(--gray)", fontSize: "1rem", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--neon)", fontWeight: 800, flexShrink: 0, marginTop: "0.1rem" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Curriculum</span>
          <h2 style={{ marginBottom: "0.5rem" }}>What You Will Learn.</h2>
          <div className="module-list">
            {program.curriculum.map((mod, i) => (
              <div key={mod.title} className="module-item">
                <div className="module-num">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="module-title">{mod.title}</div>
                  <div className="module-desc">{mod.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem", display: "flex", gap: "1rem" }}>
            <Link href="/apply" className="btn-gold">Apply Now →</Link>
          </div>
        </div>
      </section>

      {/* LEARNING OUTCOMES */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-two-col">
            <div>
              <span className="section-label">Outcomes</span>
              <h2>By the End of This Program, You Will Be Able To:</h2>
            </div>
            <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "0.5rem" }}>
              {program.outcomes.map((outcome) => (
                <li key={outcome} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  <span style={{ color: "var(--neon)", flexShrink: 0 }}>✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LEARNING FORMAT */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">How It&apos;s Delivered</span>
          <h2 style={{ marginBottom: "2rem" }}>Your Learning Experience.</h2>
          <p style={{ color: "var(--gray)", marginBottom: "2.5rem", maxWidth: 560 }}>
            This program is available in {program.format.length > 1 ? "multiple" : "one"} format{program.format.length > 1 ? "s" : ""} — each maintaining the same curriculum, assessment standards, and mentorship quality.
          </p>
          <div className="format-grid" style={{ gridTemplateColumns: `repeat(${program.format.length}, 1fr)` }}>
            {program.format.map((f) => (
              <div key={f} className="format-card">
                <div className="format-icon">{f === "Online" ? "💻" : f === "Offline" ? "🏛️" : "🔀"}</div>
                <div className="format-name">{f}</div>
                <div className="format-desc">
                  {f === "Online" && "Live classes, digital materials, online assessments, mentor support."}
                  {f === "Offline" && "In-person at KPF centres. Hands-on practicals, live demonstrations, direct faculty interaction."}
                  {f === "Blended" && "Online theory + offline practicals. Best of both worlds with full mentor access."}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link href="/contact" className="btn-outline">Enquire Now →</Link>
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Your Faculty</span>
          <h2 style={{ marginBottom: "3rem" }}>Who Teaches This Program.</h2>
          <div className="faculty-highlight">
            <div className="faculty-avatar">
  <Image
    src="/images/shraddha-gadit.jpg"
    alt="Shraddha Gadit"
    fill
    style={{ objectFit: "cover" }}
  />
</div>
            <div>
              <div className="faculty-name">Shraddha Gadit</div>
              <div className="faculty-role">Lead Educator, KPF</div>
              <p className="faculty-bio" style={{ marginBottom: "1.5rem" }}>
                17+ years in fitness education. Gold Medalist, MSc Food Science & Nutrition. Former Department Head and Education Lead at one of India&apos;s leading fitness institutions. Shraddha has designed the curriculum architecture and mentors every cohort personally.
              </p>
              <Link href="/faculty" className="btn-outline">Meet the Faculty →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER PATHWAYS */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Where This Takes You</span>
          <h2 style={{ marginBottom: "2rem" }}>Career Pathways After This Program.</h2>
          <div className="pathway-grid">
            {program.careerPaths.map((path) => (
              <div key={path} className="pathway-card">{path}</div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/career-support" className="btn-outline">Explore Career Support →</Link>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">Frequently Asked Questions</span>
          <h2 style={{ marginBottom: "2rem" }}>Common Questions.</h2>
          <div className="faq-section">
            {[
              { q: "Do I need any prior fitness experience to enrol?", a: program.eligibility },
              { q: "How are assessments conducted?", a: "Assessments include written assignments, case studies, and practical evaluations — designed to test both knowledge and application." },
              { q: "What support do I get during the program?", a: "Every student has access to faculty mentorship, academic counselling, recorded session access, and comprehensive study resources throughout the program." },
              { q: "What happens after I complete the program?", a: "You receive your KPF certification and continued access to career support, workshops, and the KPF professional community." },
              { q: "Can I switch between online and offline formats?", a: "In most cases, yes. Speak with our academic counselling team for details specific to your program." },
            ].map((faq) => (
              <div key={faq.q} className="accordion-item">
                <div className="accordion-q">{faq.q}</div>
                <div className="accordion-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <h2>Take the Next Step.</h2>
        <p>This program could be the foundation of a career you&apos;re proud of. Apply now or speak with our team to learn more.</p>
        <div className="actions">
          <Link href="/apply" className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
        </div>
      </div>
    </>
  );
}
