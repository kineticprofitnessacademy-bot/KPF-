import Link from "next/link";

export const metadata = {
  title: "About KPF — Education Beyond Certification",
  description: "KPF exists to raise the standard of professional fitness education in India through science, application, mentorship, and purpose.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="section-label" style={{ justifyContent: "center", marginBottom: "1.2rem" }}>About KPF</span>
          <h1>Education Beyond Certification.</h1>
          <p>KPF exists to raise the standard of professional fitness education — through science, application, mentorship, and purpose.</p>
          <Link href="/programs" className="btn-gold">Explore Programs →</Link>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <span className="section-label">Our Story</span>
          <h2 style={{ marginBottom: "2rem" }}>Why KPF Exists.</h2>
          <p style={{ color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.3rem", fontSize: "1.05rem" }}>
            The fitness education landscape in India has long been fragmented. On one side, quick certification programs that promise credentials but deliver little real competence. On the other, international certifications that are often expensive, disconnected from local industry realities, and lacking in mentorship.
          </p>
          <p style={{ color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.3rem", fontSize: "1.05rem" }}>
            KPF was built to fill this gap.
          </p>
          <p style={{ color: "var(--gray)", lineHeight: 1.85, marginBottom: "1.3rem", fontSize: "1.05rem" }}>
            Founded on the belief that fitness professionals deserve better — better learning, better mentorship, better outcomes — KPF is designed from the ground up as a professional academy. Not a course marketplace. Not a certification factory.
          </p>
          <p style={{ color: "var(--gray)", lineHeight: 1.85, fontSize: "1.05rem" }}>
            Every decision we make — from how our curriculum is structured, to who teaches it, to how we support students after graduation — is guided by one question: <strong style={{ color: "var(--white)" }}>Does this make the professional better?</strong>
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="section section-dark">
        <div className="container">
          <div className="page-two-col">
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "2.5rem" }}>
              <span className="section-label">Vision</span>
              <h3 style={{ marginBottom: "1.2rem", fontSize: "1.8rem" }}>Our Vision</h3>
              <p style={{ color: "var(--gray)", lineHeight: 1.8 }}>
                To become India&apos;s most trusted name in professional fitness education — recognised for academic depth, practical excellence, and the quality of professionals we produce.
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "2.5rem" }}>
              <span className="section-label">Mission</span>
              <h3 style={{ marginBottom: "1.2rem", fontSize: "1.8rem" }}>Our Mission</h3>
              <p style={{ color: "var(--gray)", lineHeight: 1.8 }}>
                To deliver structured, science-based, mentor-led education programs that prepare individuals to lead successful, credible, and meaningful careers in the fitness and wellness industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION PHILOSOPHY */}
      <section className="section section-darker">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 3rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Our Philosophy</span>
            <h2 style={{ marginBottom: "1rem" }}>How KPF Teaches.</h2>
            <p style={{ color: "var(--gray)" }}>Education at KPF is built on five core principles.</p>
          </div>
          <div className="philosophy-stack">

  {[
    {
      num: "01",
      title: "Science, Not Trends",
      desc: "Every concept we teach is grounded in evidence-based research. We don't follow influencer opinion. We follow the science."
    },
    {
      num: "02",
      title: "Application Over Theory",
      desc: "Understanding a concept is one thing. Applying it to a real client in a real session is another. KPF programs are designed to make you capable, not just informed."
    },
    {
      num: "03",
      title: "Mentorship, Not Just Instruction",
      desc: "Our faculty doesn't just deliver lectures. They guide, assess, and support you — building your professional identity alongside your technical skill."
    },
    {
      num: "04",
      title: "Communication as a Core Skill",
      desc: "A great trainer isn't just someone who knows what to prescribe. It's someone who can explain, listen, adapt, and build trust. KPF trains this explicitly."
    },
    {
      num: "05",
      title: "Continuous Learning as a Standard",
      desc: "Graduation is not the end. KPF encourages and facilitates ongoing learning through workshops, masterclasses, and continued faculty access."
    },
  ].map((p) => (
    <div key={p.num} className="philosophy-card">

      <div className="philosophy-num">{p.num}</div>

      <div className="philosophy-content">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>

    </div>
  ))}

</div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/programs" className="btn-outline">View Programs →</Link>
          </div>
        </div>
      </section>

      {/* THE KPF DIFFERENCE */}
      <section className="section section-dark">
        <div className="container">
          <span className="section-label">The KPF Difference</span>
          <h2 style={{ marginBottom: "3rem" }}>Why Professionals Choose KPF.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { title: "Structured Curriculum", desc: "Not a collection of random modules. A logical, progressive learning pathway built for professional development." },
              { title: "Industry-Relevant Content", desc: "Designed for how the Indian and global fitness industry actually works — not an imported, uncontextualised syllabus." },
              { title: "Experienced Faculty", desc: "Led by educators with 17+ years of experience across academic, corporate, and industry settings." },
              { title: "Practical, Not Passive", desc: "Live classes, case studies, real-world assessments, and mentor interaction — not just video libraries." },
              { title: "Career Support Included", desc: "Professional guidance, branding, communication training, and interview readiness — in every program." },
              { title: "Multiple Learning Formats", desc: "Online, offline, and blended — so your education fits your life." },
            ].map((d) => (
              <div key={d.title} className="page-faculty-row" style={{ display: "grid", gap: "2rem", padding: "1.8rem 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)" }}>{d.title}</div>
                <div style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.7 }}>{d.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "3rem" }}>
            <Link href="/contact" className="btn-gold">Book Academic Counselling →</Link>
          </div>
        </div>
      </section>

      {/* FOUNDER / LEADERSHIP */}
      <section className="section section-darker">
        <div className="container">
          <span className="section-label">Leadership</span>
          <h2 style={{ marginBottom: "3rem" }}>The Educator Behind KPF.</h2>
          <div className="faculty-highlight">
            <div className="faculty-avatar">👩‍🏫</div>
            <div>
              <div className="faculty-name">Shraddha Gadit</div>
              <div className="faculty-role">Founder & Education Lead, KPF</div>
              <p className="faculty-bio" style={{ marginBottom: "1rem" }}>
                Shraddha Gadit is a Gold Medalist with a postgraduate degree in Food Science and Nutrition, an accomplished Dietician, and a fitness educator with over 17 years of experience across academic institutions, corporate fitness education, and professional certification programs.
              </p>
              <p className="faculty-bio" style={{ marginBottom: "1rem" }}>
                She has served as a Department Head and Nutrition Lecturer, led fitness education programs for some of India&apos;s most recognised gym brands, and has been featured across industry platforms for her contributions to structured, science-driven fitness learning.
              </p>
              <p className="faculty-bio" style={{ marginBottom: "1rem" }}>
                At KPF, Shraddha&apos;s role goes beyond teaching. She has designed the curriculum architecture, set the academic standards, and built a faculty-led model that prioritises professional competence over content consumption.
              </p>
              <blockquote style={{ borderLeft: "2px solid var(--neon)", paddingLeft: "1.5rem", color: "var(--neon)", fontStyle: "italic", fontSize: "1.05rem", marginBottom: "1.8rem" }}>
                &ldquo;If you want to change the industry, start by changing how you educate.&rdquo;
              </blockquote>
              <Link href="/faculty" className="btn-gold">Meet the Faculty →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* KPF IN NUMBERS */}
      <div className="stats-row">
        {[
          { num: "17+", label: "Years of Education Experience" },
          { num: "3", label: "Learning Formats (Online / Offline / Blended)" },
          { num: "4", label: "Program Categories" },
          { num: "3", label: "Cities with Offline Learning" },
          { num: "100%", label: "Career Support in Every Program" },
        ].map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* FINAL CTA */}
      <div className="cta-strip">
        <span className="section-label" style={{ justifyContent: "center", marginBottom: "1rem" }}>Ready to Begin?</span>
        <h2>Explore Our Programs.</h2>
        <p>Find the right learning pathway for your goals, your schedule, and your career vision.</p>
        <div className="actions">
          <Link href="/programs" className="btn-gold">Explore Programs</Link>
          <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
        </div>
      </div>
    </>
  );
}
