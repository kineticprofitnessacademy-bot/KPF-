import Link from "next/link";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import TestimonialSlider from "@/components/TestimonialSlider";
import LeadForm from "@/components/funnel/LeadForm";
import CtaBgSlider from "@/components/CtaBgSlider";
import Image from "next/image";


/* ─── SECTION DIVIDER ────────────────────────────────────────── */
function Divider({ flip }: { flip?: boolean }) {
  return (
    <div aria-hidden style={{
      width: "100%",
      height: "1px",
      background: flip
        ? "linear-gradient(90deg, transparent, rgba(212,196,106,0.22), transparent)"
        : "linear-gradient(90deg, rgba(212,196,106,0.18), transparent)",
    }} />
  );
}

export default function HomePage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="heroSection">
        <div className="heroBg">
          <video
            autoPlay loop muted playsInline
            className="heroBgVideo"
          >
            <source src="/videos/hero.mp4"  type="video/mp4" />
            <source src="/videos/hero.webm" type="video/webm" />
          </video>
          <div className="heroOverlay" />
          <div className="heroVignette" />
          <div className="heroGrain" />
          <div className="heroLetterboxTop" />
          <div className="heroLetterboxBottom" />
        </div>

        <div className="container heroContent">
          <div className="heroInner">
            <span className="section-label heroLabel">KPF Academy · India</span>

            <h1 className="heroTitle">
              Where Fitness<br />
              <em className="heroAccent">Professionals</em><br />
              Are Built.
            </h1>
            <div className="dynamicTagline">
  Not Just Certified.
</div>

            <p className="heroDesc">
              India&apos;s premium academy for fitness education, sports
              nutrition, and professional coaching systems — built for
              real-world success.
            </p>

            <div className="heroCta">
              <a href="/programs"  className="btn-gold">Explore Programs</a>
              <a href="/apply"     className="btn-outline">Apply Now</a>
              <a href="/contact"   className="hero-text-link">
                Book Academic Counselling →
              </a>
            </div>
          </div>
        </div>

        <div className="heroScroll">
          <div className="heroScrollLine" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════════════ */}
      <div className="marqueeSection">
        <div className="marqueeTrack">
          {[
            { icon: "⚡", text: "Strength Training Systems" },
            { icon: "🔬", text: "Exercise Science Learning" },
            { icon: "🥗", text: "Sports Nutrition Mastery" },
            { icon: "🎯", text: "Real Coaching Experience" },
            { icon: "🏅", text: "Certification Programs" },
            { icon: "🌟", text: "Elite Mentorship" },
            { icon: "📊", text: "Evidence-Based Curriculum" },
            { icon: "🚀", text: "Career Launch Support" },
            { icon: "💪", text: "Practical Application" },
            { icon: "🧠", text: "Science-First Education" },
          ].flatMap((item, i, arr) => [item, ...arr].slice(0, arr.length * 2)).map((item, i) => (
            <div key={i} className="marqueeItem" aria-hidden={i >= 10}>
              <span className="marqueeIcon">{item.icon}</span>
              <span className="marqueeText">{item.text}</span>
              <span className="marqueeDot">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ ABOUT ═════════════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="aboutGrid">
            <div className="aboutCopy">
              <span className="section-label">About KPF</span>
              <h2>Education Beyond<br />Certification.</h2>
              <p className="bodyText">
                KPF was founded on a simple conviction: fitness professionals deserve
                better education. Not louder marketing. Not quicker certificates.
                Better learning.
              </p>
              <p className="bodyText">
                We combine scientific rigour with real-world application. Every
                program is built around a structured curriculum, experienced
                mentorship, and a clear focus on professional outcomes. We
                don&apos;t teach trends. We teach systems — grounded in evidence,
                refined through practice, and delivered with purpose.
              </p>
              <p className="bodyText" style={{ marginBottom: "2rem" }}>
                Whether you are beginning your career in fitness or deepening
                your expertise, KPF offers the learning environment and
                professional foundation to take you further than a certificate
                ever could.
              </p>
              <Link href="/about" className="btn-outline">
                Learn More About KPF →
              </Link>
            </div>

            <div className="statsCard">
              <div className="statsGrid">
                {[
                  { num: "17+", label: "Years of Experience" },
                  { num: "3",   label: "Learning Formats" },
                  { num: "4",   label: "Program Categories" },
                  { num: "3",   label: "Offline Centres" },
                ].map((s) => (
                  <div key={s.label} className="statItem">
                    <span className="statNum">{s.num}</span>
                    <span className="statLabel">{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="statsCardDeco" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <Divider flip />

      {/* ══ WHY KPF ═══════════════════════════════════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Why KPF</span>
            <h2>What Sets KPF Apart.</h2>
            <p className="sectionSubtitle">
              In a market crowded with quick certifications, KPF stands for depth,
              credibility, and genuine professional development.
            </p>
          </div>

          <div className="pillarsGrid">
            {[
              {
                num: "01", icon: "🔬",
                title: "Science-First Curriculum",
                desc: "Every module is rooted in exercise science, sports nutrition research, and applied learning — not fitness fads or influencer opinion.",
              },
              {
                num: "02", icon: "🧑‍🏫",
                title: "Mentor-Led Learning",
                desc: "You don't just watch videos. You learn from experienced educators who guide, assess, and support your development throughout.",
              },
              {
                num: "03", icon: "🎯",
                title: "Practical Application",
                desc: "From live demonstrations to case-based assessments, KPF programs ensure you can apply what you learn — from day one.",
              },
              {
                num: "04", icon: "🌐",
                title: "Online + Offline Flexibility",
                desc: "Study from anywhere through our structured online platform, or attend hands-on sessions at our offline learning centres.",
              },
              {
                num: "05", icon: "🚀",
                title: "Career-Focused Outcomes",
                desc: "Every program includes guidance on professional readiness — from communication skills and personal branding to client management.",
              },
              {
                num: "06", icon: "🏛️",
                title: "An Academy, Not a Course Seller",
                desc: "KPF operates as a professional education institution with a defined philosophy, structured faculty, and long-term commitment.",
              },
            ].map((p) => (
              <div key={p.num} className="pillarCard">
                <div className="pillarNum">{p.num}</div>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.7rem" }}>{p.icon}</div>
                <h4 className="pillarTitle">{p.title}</h4>
                <p className="pillarDesc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="sectionCta">
            <Link href="/programs" className="btn-gold">Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* ══ PROGRAMS SHOWCASE ═════════════════════════════════════ */}
      <ProgramsShowcase />

      <Divider />


      {/* ══ HOW YOU LEARN ═════════════════════════════════════════ */}
      <section className="section section-darker">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">How You Learn</span>
            <h2>Structured. Supported.<br />Built for Real Learning.</h2>
            <p className="sectionSubtitle">
              At KPF, learning is never passive. Every program follows a structured
              delivery system designed to build understanding, develop skill, and
              reinforce application.
            </p>
          </div>

          <div className="formatGrid">
            {[
              { icon: "🎥", name: "Live Classes",
                desc: "Scheduled, mentor-led sessions with real-time interaction. Not pre-recorded. Not automated." },
              
              { icon: "📖", name: "Study Resources",
                desc: "Curated study guides, reference materials, and module notes — designed for clarity and retention." },
              { icon: "✍️", name: "Assignments",
                desc: "Practical assessments that challenge you to apply what you've learned in real coaching scenarios." },
              { icon: "🧑‍🏫", name: "Mentorship",
                desc: "Ongoing guidance from KPF faculty — not just during the program, but as you grow professionally." },
              { icon: "🎓", name: "Certification",
                desc: "Rigorous evaluation that ensures every KPF graduate meets a professional standard." },
            ].map((f) => (
              <div key={f.name} className="formatCard">
                <span className="formatIcon">{f.icon}</span>
                <div className="formatName">{f.name}</div>
                <div className="formatDesc">{f.desc}</div>
              </div>
            ))}
          </div>

          <div className="sectionCta">
            <Link href="/online-learning" className="btn-outline">
              Explore Online Learning →
            </Link>
          </div>
        </div>
      </section>

      <Divider flip />

      {/* ══ FACULTY ═══════════════════════════════════════════════ */}
<section className="section section-dark">
  <div className="container">

    <span className="section-label">Faculty</span>

    <h2 style={{ marginBottom: "4rem" }}>
      Learn from Educators Who&apos;ve
      <br />
      Shaped the Industry.
    </h2>

    <div className="facultyFeature">

      {/* IMAGE SIDE */}
      <div className="facultyImageWrap">
        <Image
  src="/images/shraddha-gadit.jpg"
  alt="Shraddha Gadit"
  fill
  priority
  style={{
    objectFit: "cover",
    objectPosition: "center 20%",
  }}
/>
 <div className="facultyBadge">
    <span>17+</span>
    Years Experience
  </div>
  
      </div>

      {/* CONTENT SIDE */}
      <div className="facultyContent">

        <div className="facultyName">
          Shraddha Gadit
        </div>

        <div className="facultyRole">
          Education Lead & Senior Faculty, KPF
        </div>

        <p className="facultyBio">
          With over 17 years of experience in fitness education,
          nutrition science, and academic leadership, Shraddha
          Gadit is the driving force behind KPF&apos;s curriculum
          and learning philosophy.
        </p>

        <p className="facultyBio">
          A Gold Medalist with a postgraduate degree in Food
          Science and Nutrition, she has served as Department
          Head, lecturer, and education lead for major fitness
          institutions across India.
        </p>

        <p
          className="facultyBio"
          style={{ marginBottom: "2rem" }}
        >
          Her approach combines scientific depth, practical
          coaching systems, and professional mentorship —
          shaping students into real-world fitness professionals.
        </p>

        <Link href="/faculty" className="btn-gold">
          Meet the Faculty →
        </Link>

      </div>
    </div>

  </div>
</section>
{/* ══ LEADERSHIP ═══════════════════════════════════════════ */}
<section className="section section-dark">
  <div className="container">

    <div className="sectionHeader">
      <span className="section-label">Leadership</span>

      <h2>
        Meet the Vision Behind
        <br />
        KPF Academy.
      </h2>

      <p className="sectionSubtitle">
        Built by professionals committed to raising the standard of fitness education.
      </p>
    </div>

    <div className="leadershipFeature">

      {/* LEFT CONTENT */}
      <div className="leadershipContent">

        <div className="facultyRole">
          Co-Founder
        </div>

        <h3 className="facultyName">
          Ratanraj S. Reddy
        </h3>

        <p className="facultyBio">
          With over 20 years of experience in fitness education,
          trainer development, and coaching excellence, Ratanraj S. Reddy
          has dedicated his career to developing competent fitness
          professionals through practical education and mentorship.
        </p>

        <ul className="leadershipList">
          <li>20+ Years of Industry Experience</li>
          <li>Former Head Trainer, Gold's Gym</li>
          <li>Owner & Master Trainer, Trio Fitness</li>
          <li>Industry Mentor & Educator</li>
        </ul>

        <Link href="/co-founder" className="btn-gold">
  Meet Our Co-Founder →
</Link>

      </div>

      {/* RIGHT IMAGE */}

      <div className="leadershipImageWrap">

        {/* Replace later */}

        {/*
        <Image
          src="/images/ratanraj.jpg"
          alt="Ratanraj S. Reddy"
          fill
          style={{ objectFit: "cover" }}
        />
        */}

        <div className="imagePlaceholder">
          Co-Founder Image
        </div>

      </div>

    </div>

  </div>
</section>
      {/* ══ CAREER SUPPORT ════════════════════════════════════════ */}
      <section className="section section-darker">
        <div className="container">
          <div className="careerGrid">
            <div className="careerCopy">
              <span className="section-label">Career Support</span>
              <h2>Built for What Happens<br />After You Graduate.</h2>
              <p className="bodyText" style={{ marginBottom: "1.8rem" }}>
                A certificate is not a career. KPF understands this. Career
                readiness is woven into every program — not bolted on as an
                afterthought.
              </p>
              <ul className="careerList">
                {[
                  "Professional Guidance & Direction",
                  "Communication & Client Skills Training",
                  "Personal Branding & Positioning",
                  "Interview & Workplace Readiness",
                  "Ongoing Professional Development",
                ].map((item) => (
                  <li key={item} className="careerListItem">
                    <span className="careerBullet">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/career-support" className="btn-gold">
                Explore Career Support →
              </Link>
            </div>

            <div className="pathwayGrid">
              {[
                { icon: "💪", label: "Personal Trainer" },
                { icon: "📱", label: "Online Fitness Coach" },
                { icon: "🥗", label: "Nutrition Coach" },
                { icon: "🏢", label: "Gym Manager / Owner" },
                { icon: "🎓", label: "Fitness Educator" },
                { icon: "🌿", label: "Wellness Professional" },
              ].map((path) => (
                <div key={path.label} className="pathwayCard">
                  <div style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>
                    {path.icon}
                  </div>
                  {path.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════ */}
      <TestimonialSlider />

      <Divider flip />

      {/* ══ WORKSHOPS ═════════════════════════════════════════════ */}
      <section className="section section-dark">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Workshops &amp; Masterclasses</span>
            <h2>Go Deeper. Stay Current.<br />Keep Growing.</h2>
            <p className="sectionSubtitle">
              Focused, expert-led sessions on specialised topics — designed for
              working professionals committed to staying at the front of the field.
            </p>
          </div>

          <div className="workshopGrid">
            {[
              { icon: "🧪", title: "Protein & Supplementation Science",
                desc: "Evidence-based understanding of supplements beyond marketing claims.",
                format: "Online / In-Person" },
              { icon: "🔥", title: "Fat Loss: Myths, Mechanisms & Methods",
                desc: "What actually works, and why — backed by science, not social media.",
                format: "Online" },
              { icon: "♀️", title: "Women's Fitness & Hormonal Health",
                desc: "Programming and nutrition considerations for female clients at every life stage.",
                format: "Online / In-Person" },
              { icon: "🗣️", title: "Coaching Communication Masterclass",
                desc: "How to consult, educate, and retain clients through better communication.",
                format: "In-Person" },
            ].map((w) => (
              <div key={w.title} className="workshopCard">
                <div style={{ fontSize: "1.8rem", marginBottom: "0.8rem" }}>
                  {w.icon}
                </div>
                <div className="workshopTopic">{w.title}</div>
                <div className="workshopDesc">{w.desc}</div>
                <div className="workshopMeta">{w.format}</div>
              </div>
            ))}
          </div>

          <div className="sectionCta">
            <Link href="/workshops" className="btn-outline">
              View All Workshops →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ LOCATIONS ═════════════════════════════════════════════ */}
      <section className="section section-darker">
        <div className="container">
          <div className="sectionHeader">
            <span className="section-label">Where We Teach</span>
            <h2>Offline Learning Centres.</h2>
            <p className="sectionSubtitle">
              KPF&apos;s offline programs run across select cities — hands-on,
              immersive, practical learning led by experienced faculty.
            </p>
          </div>

          <div className="locationGrid">
            {[
              { city: "Mumbai",     status: "Active" },
              { city: "Surat",       status: "Active" },
              { city: "Ahmedabad",  status: "Active" },
              { city: "More Cities",status: "Coming Soon" },
            ].map((loc) => (
              <div key={loc.city} className="locationCard">
                <div className="locationCity">{loc.city}</div>
                <div className={`locationStatus${loc.status === "Active" ? " locationActive" : ""}`}>
                  {loc.status}
                </div>
              </div>
            ))}
          </div>

          <div className="sectionCta">
            <Link href="/offline-learning" className="btn-outline">
              Explore Offline Learning →
            </Link>
          </div>
        </div>
      </section>

      {/* ══ LEAD FORM ═════════════════════════════════════════════ */}
      <section className="section enquireSection" id="enquire">
        <div className="container">
          <div className="enquireGrid">
            <div className="enquireCopy">
              <span className="section-label">Start Here</span>
              <h2>Your Career in Fitness<br />Starts with the Right Education.</h2>
              <p className="bodyText" style={{ marginBottom: "1.5rem" }}>
                Whether you&apos;re starting fresh or building on existing experience,
                KPF gives you the knowledge, the mentorship, and the professional
                foundation to succeed.
              </p>
              <p className="enquireNote">
                ✦ Takes 60 seconds · No spam · Serious guidance only
              </p>
            </div>
            <div className="enquireForm">
              <LeadForm source="homepage_main" interest="general" />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA SLIDER ══════════════════════════════════════ */}
      <CtaBgSlider />
    </>
  );
}
