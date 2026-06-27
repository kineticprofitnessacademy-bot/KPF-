'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './page.module.css';

const workshopTopics = [
  { num: '01', title: 'Behavioural Fitness', desc: 'Understand the psychology behind movement and how mindset shapes physical performance.' },
  { num: '02', title: 'What is Functional Training', desc: 'Define real-world movement training and its superiority over isolated machine-based exercise.' },
  { num: '03', title: 'Fitness Testing', desc: 'Master assessment protocols for Beginner, Advanced, and Athlete-level clients.' },
  { num: '04', title: 'Anatomy & Kinesiology', desc: 'Deep-dive into the body\'s movement systems—joints, muscles, and biomechanical chains.' },
  { num: '05', title: 'Compound Movements', desc: 'Program and coach multi-joint exercises that deliver maximum training efficiency.' },
  { num: '06', title: 'Heart Rate Training & HIIT', desc: 'Use heart rate zones to design intelligent, science-backed conditioning protocols.' },
  { num: '07', title: 'Stability Training', desc: 'Build the foundational strength that prevents injury and powers every other movement.' },
  { num: '08', title: 'Equipment & Props', desc: 'Master battle ropes, TRX, kettlebells, resistance bands, medicine balls, and more.' },
  { num: '09', title: 'Dynamic vs Plyometric vs Static', desc: 'Know when and why to deploy each modality for optimal client outcomes.' },
  { num: '10', title: 'Human Movement Patterns', desc: 'Program the seven primal patterns: push, pull, hinge, squat, lunge, rotate, gait.' },
  { num: '11', title: '3-2-1 Training System', desc: 'Learn Prashant\'s proprietary system for building complete, progressive programs.' },
];

const benefits = [
  { icon: '◈', title: 'Better Client Results', desc: 'Deliver visible, measurable transformations that keep clients coming back.' },
  { icon: '◈', title: 'Injury Prevention', desc: 'Coach with confidence knowing every movement is safe and purposeful.' },
  { icon: '◈', title: 'Higher Coaching Confidence', desc: 'Step into every session with the knowledge to adapt in real time.' },
  { icon: '◈', title: 'Smarter Assessments', desc: 'Accurately read every client\'s capability before you prescribe anything.' },
  { icon: '◈', title: 'Elite Programming', desc: 'Design workouts that are periodized, progressive, and professionally presented.' },
  { icon: '◈', title: 'Athlete Performance', desc: 'Train recreational clients with the same methodology top athletes use.' },
  { icon: '◈', title: 'Real Practical Knowledge', desc: 'Four hours of hands-on application, not theory from a slide deck.' },
  { icon: '◈', title: 'Professional Growth', desc: 'Earn a certificate that signals mastery to gyms, studios, and clients.' },
];

const practicals = [
  { icon: '⊗', label: 'Movement Correction' },
  { icon: '⊗', label: 'Battle Ropes' },
  { icon: '⊗', label: 'TRX Suspension' },
  { icon: '⊗', label: 'Resistance Bands' },
  { icon: '⊗', label: 'Kettlebell Work' },
  { icon: '⊗', label: 'Medicine Balls' },
  { icon: '⊗', label: 'Live Programming' },
  { icon: '⊗', label: 'Partner Drills' },
  { icon: '⊗', label: 'Client Assessment' },
];

const audience = [
  { icon: '▸', label: 'Personal Trainers', sub: 'Level up your methodology' },
  { icon: '▸', label: 'Gym Owners', sub: 'Elevate your team\'s standard' },
  { icon: '▸', label: 'Fitness Coaches', sub: 'Add functional depth to your craft' },
  { icon: '▸', label: 'Students', sub: 'Start with the best foundation' },
  { icon: '▸', label: 'Athletes', sub: 'Understand your own performance' },
  { icon: '▸', label: 'Fitness Enthusiasts', sub: 'Train smarter, not just harder' },
  { icon: '▸', label: 'Career Switchers', sub: 'Enter fitness with real credentials' },
];

const faqs = [
  { q: 'Is this workshop for beginners or advanced coaches?', a: 'Both. The curriculum is structured to build from foundational concepts to advanced application, so whether you\'re starting your coaching career or have years of experience, you\'ll leave with new tools and a deeper framework.' },
  { q: 'What do I need to bring?', a: 'Just yourself and comfortable workout attire. All equipment — battle ropes, TRX, kettlebells, resistance bands, medicine balls — is provided at the venue.' },
  { q: 'Will I receive a certificate?', a: 'Yes. Every participant who completes the workshop receives a certificate issued by KPF Academy, signed by Coach Prashant Wadekar.' },
  { q: 'How many seats are available?', a: 'Seats are strictly limited to maintain a hands-on, personal learning environment. Once capacity is reached, registrations will be closed.' },
  { q: 'What is the refund policy?', a: 'The registration fee of ₹499 is non-refundable. However, if you cannot attend, you may transfer your seat to another person by notifying us in advance.' },
  { q: 'Where is the workshop held?', a: 'Venue details will be shared with all confirmed participants via WhatsApp and email after registration.' },
];

export default function WorkshopPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll(`.${styles.reveal}`).forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

 const handleEnroll = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.name || !formData.phone) return;

  setIsSubmitting(true);

  try {
    // ── Send lead to Google Apps Script ──────────────────────────
    // Using URLSearchParams + no Content-Type header so the browser
    // sends a proper form POST that Apps Script can read via
    // e.parameter (no JSON.parse needed — see updated doPost below).
    const params = new URLSearchParams({
      name:         formData.name,
      phone:        formData.phone,
      email:        formData.email,
      workshopName: "Functional Training Workshop",
      paymentStatus:"Pending",
    });

    await fetch(
      "https://script.google.com/macros/s/AKfycbxOBAhXEha1xZdsFW3C_AYJTbyjPeSATEX_r-jxDPGnQoweegSKXK3fa3_MJj-D3jkIMg/exec",
      {
        method:  "POST",
        body:    params,
        // ✅ No mode:"no-cors" — that silently drops the body
        // ✅ No Content-Type header — browser sets it automatically
        //    as application/x-www-form-urlencoded which Apps Script reads
      }
    );

    // ── Redirect to Razorpay ──────────────────────────────────────
    window.location.href = "YOUR_RAZORPAY_PAYMENT_LINK";

  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  const scrollToForm = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img src="/images/1000264310.jpg" alt="Coach Prashant Wadekar" className={styles.heroBgImg} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>KPF ACADEMY PRESENTS</p>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroLine}>FUNCTIONAL</span>
            <span className={styles.heroLine}>TRAINING</span>
            <span className={`${styles.heroLine} ${styles.heroLineGold}`}>WORKSHOP</span>
          </h1>
          <p className={styles.heroTagline}>Become the Coach Clients Never Forget.</p>
          <div className={styles.heroBadges}>
            <span className={styles.badge}>📅 11 July 2025</span>
            <span className={styles.badge}>🕐 1 PM – 5 PM</span>
            <span className={styles.badge}>₹499 Only</span>
            <span className={styles.badge}>🏅 Certificate</span>
            <span className={styles.badge}>⚡ Limited Seats</span>
          </div>
          <button className={styles.ctaPrimary} onClick={scrollToForm}>
            Enroll Now — ₹499
          </button>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>SCROLL</span>
        </div>
      </section>

      {/* ── WORKSHOP SNAPSHOT ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>AT A GLANCE</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Workshop Details</h2>
          <div className={styles.snapshotGrid}>
            {[
              { icon: '📅', label: 'Date', value: '11 July 2025' },
              { icon: '🕐', label: 'Time', value: '1:00 PM – 5:00 PM' },
              { icon: '⏱', label: 'Duration', value: '4 Hours Intensive' },
              { icon: '📊', label: 'Level', value: 'All Levels Welcome' },
              { icon: '🏅', label: 'Certificate', value: 'Issued on Completion' },
              { icon: '💰', label: 'Investment', value: '₹499 Only' },
            ].map((item, i) => (
              <div className={`${styles.snapshotCard} ${styles.reveal}`} key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <span className={styles.snapshotIcon}>{item.icon}</span>
                <span className={styles.snapshotLabel}>{item.label}</span>
                <span className={styles.snapshotValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS WORKSHOP ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <div className={styles.whySplit}>
            <div className={`${styles.whyImage} ${styles.reveal}`}>
              <img src="/images/1000264309.jpg" alt="Coach in action" />
            </div>
            <div className={styles.whyContent}>
              <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>THE PHILOSOPHY</p>
              <h2 className={`${styles.whyTitle} ${styles.reveal}`}>
                Machines build muscles.<br />
                <span className={styles.goldText}>Movement builds athletes.</span>
              </h2>
              <p className={`${styles.whyBody} ${styles.reveal}`}>
                Most fitness certifications teach you what to do. This workshop teaches you <em>why</em> movement matters — and how to translate that understanding into coaching that transforms lives.
              </p>
              <p className={`${styles.whyBody} ${styles.reveal}`}>
                In four hours with Coach Prashant Wadekar, you will compress 18 years of elite coaching experience into a framework you can apply the very next day.
              </p>
              <blockquote className={`${styles.quote} ${styles.reveal}`}>
                "The best coaches don't just train the body. They train the entire human."
                <cite>— Prashant Wadekar</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRICULUM ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>THE CURRICULUM</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>What You Will Master</h2>
          <div className={styles.topicTimeline}>
            <div className={styles.topicLine} />
            {workshopTopics.map((topic, i) => (
              <div className={`${styles.topicCard} ${i % 2 === 0 ? styles.topicLeft : styles.topicRight} ${styles.reveal}`} key={i}>
                <div className={styles.topicDot} />
                <div className={styles.topicInner}>
                  <span className={styles.topicNum}>{topic.num}</span>
                  <h3 className={styles.topicTitle}>{topic.title}</h3>
                  <p className={styles.topicDesc}>{topic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU WILL GAIN ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>YOUR TRANSFORMATION</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>What You Will Gain</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <div className={`${styles.benefitCard} ${styles.reveal}`} key={i}>
                <span className={styles.benefitIcon}>{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE PRACTICAL ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>HANDS-ON SESSION</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Live Practical Experience</h2>
          <p className={`${styles.centeredBody} ${styles.reveal}`}>
            Theory is only half the story. The second half of the workshop puts you on the floor with real equipment and real coaching scenarios.
          </p>
          <div className={styles.practicalGrid}>
            {practicals.map((p, i) => (
              <div className={`${styles.practicalCard} ${styles.reveal}`} key={i}>
                <span className={styles.practicalIcon}>{p.icon}</span>
                <span className={styles.practicalLabel}>{p.label}</span>
              </div>
            ))}
          </div>
          <div className={`${styles.practicalImageRow} ${styles.reveal}`}>
            <img src="/images/1000264301.jpg" alt="Coach training" />
            <img src="/images/1000264303.jpg" alt="Coach at work" />
          </div>
        </div>
      </section>

      {/* ── MEET YOUR COACH ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>YOUR MENTOR</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Meet Coach Prashant</h2>
          <div className={styles.coachSplit}>
            <div className={`${styles.coachImageWrap} ${styles.reveal}`}>
              <img src="/images/1000264309.jpg" alt="Prashant Wadekar" className={styles.coachImg} />
              <div className={styles.coachStatBar}>
                <div className={styles.coachStat}><span className={styles.coachStatNum}>18+</span><span className={styles.coachStatLabel}>Years</span></div>
                <div className={styles.coachStat}><span className={styles.coachStatNum}>4</span><span className={styles.coachStatLabel}>Certs</span></div>
                <div className={styles.coachStat}><span className={styles.coachStatNum}>5</span><span className={styles.coachStatLabel}>Specializations</span></div>
              </div>
            </div>
            <div className={styles.coachContent}>
              <h3 className={`${styles.coachName} ${styles.reveal}`}>Prashant Wadekar</h3>
              <p className={`${styles.coachRole} ${styles.reveal}`}>Professional Fitness Trainer & Coach · KPF Academy</p>
              <p className={`${styles.coachBio} ${styles.reveal}`}>
                Prashant has spent 18+ years in the health and fitness industry — not behind a desk, but on the floor, shaping bodies, fixing broken movement, and building coaches who outlast trends.
              </p>
              <p className={`${styles.coachBio} ${styles.reveal}`}>
                Associated with celebrity trainer <strong>Ramona Braganza</strong>, his approach blends sports science with real-world instinct. He has led master training programs at Talwalkars, managed elite clients at Level 6, and now runs KPF Academy to give the next generation of coaches the education he had to build himself.
              </p>
              <div className={`${styles.coachTimeline} ${styles.reveal}`}>
                {[
                  { year: '2007', org: "Gold's Gym", role: 'Fitness Trainer' },
                  { year: '2012', org: 'Talwalkars', role: 'Master Trainer' },
                  { year: '2015', org: 'Level 6', role: 'Trainer & Management' },
                  { year: '2020', org: 'Freelance', role: 'Elite Coach' },
                  { year: '2022', org: 'KPF Academy', role: 'Founder & Head Coach' },
                ].map((t, i) => (
                  <div className={styles.timelineItem} key={i}>
                    <span className={styles.timelineYear}>{t.year}</span>
                    <div className={styles.timelineDot} />
                    <div className={styles.timelineText}>
                      <strong>{t.org}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={`${styles.certRow} ${styles.reveal}`}>
                {['Gold\'s Gym Certified', 'ISSA Certified', 'Yoga Instructor', 'Zumba Instructor'].map((c, i) => (
                  <span className={styles.certBadge} key={i}>{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATE ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>RECOGNITION</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Your Certificate of Excellence</h2>
          <div className={`${styles.certMockup} ${styles.reveal}`}>
            <div className={styles.certBorder}>
              <div className={styles.certInner}>
                <p className={styles.certAcademy}>KPF ACADEMY</p>
                <div className={styles.certDivider} />
                <p className={styles.certGranted}>CERTIFICATE OF COMPLETION</p>
                <p className={styles.certTitle}>Functional Training Workshop</p>
                <p className={styles.certAwarded}>Awarded to</p>
                <p className={styles.certName}>Your Name</p>
                <div className={styles.certDivider} />
                <p className={styles.certSigned}>Coach Prashant Wadekar · 11 July 2025</p>
              </div>
            </div>
            <p className={`${styles.centeredBody} ${styles.reveal}`} style={{ marginTop: '2rem' }}>
              Every participant who completes the full workshop receives an official KPF Academy certificate — a credential that signals mastery to gyms, studios, and clients.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD ATTEND ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>IS THIS FOR YOU?</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Who Should Attend</h2>
          <div className={styles.audienceGrid}>
            {audience.map((a, i) => (
              <div className={`${styles.audienceCard} ${styles.reveal}`} key={i}>
                <span className={styles.audienceIcon}>{a.icon}</span>
                <h3 className={styles.audienceLabel}>{a.label}</h3>
                <p className={styles.audienceSub}>{a.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENROLL FORM ── */}
      <section className={styles.section} id="enroll">
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>SECURE YOUR SEAT</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Enroll Now</h2>
          <div className={`${styles.formWrap} ${styles.reveal}`}>
            <form className={styles.enrollForm} onSubmit={handleEnroll}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Full Name *</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Phone Number *</label>
                <input
                  className={styles.formInput}
                  type="tel"
                  placeholder="+91 9XXXXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email Address</label>
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <button className={styles.ctaForm} type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Confirm Seat — ₹499'}
              </button>
              <p className={styles.formNote}>Limited seats. First come, first served. No refunds.</p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <p className={`${styles.sectionEyebrow} ${styles.reveal}`}>QUESTIONS</p>
          <h2 className={`${styles.sectionTitle} ${styles.reveal}`}>Frequently Asked</h2>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div className={`${styles.faqItem} ${styles.reveal}`} key={i}>
                <button
                  className={`${styles.faqQ} ${openFaq === i ? styles.faqQOpen : ''}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqChevron}>{openFaq === i ? '−' : '+'}</span>
                </button>
                <div className={`${styles.faqA} ${openFaq === i ? styles.faqAOpen : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaBg}>
          <img src="/images/1000264310.jpg" alt="Coach Prashant" className={styles.finalCtaBgImg} />
          <div className={styles.finalCtaOverlay} />
          <div className={styles.finalCtaSpotlight} />
        </div>
        <div className={styles.finalCtaContent}>
          <p className={styles.finalCtaEyebrow}>ONE DECISION. ONE DAY. CAREER-CHANGING.</p>
          <h2 className={styles.finalCtaTitle}>
            Ready to Coach at<br />
            <span className={styles.goldText}>the Next Level?</span>
          </h2>
          <p className={styles.finalCtaBody}>4 hours. 18 years of knowledge. One workshop that changes how you coach forever.</p>
          <button className={styles.ctaGlow} onClick={scrollToForm}>
            Enroll Now — ₹499
          </button>
          <p className={styles.finalCtaNote}>⚡ Seats are strictly limited. Register before it's too late.</p>
        </div>
      </section>

      {/* ── SUCCESS POPUP ── */}
      {showSuccess && (
        <div className={styles.successOverlay}>
          <div className={styles.successModal}>
            <div className={styles.successIcon}>✓</div>
            <h3 className={styles.successTitle}>You're In!</h3>
            <p className={styles.successBody}>Your seat is confirmed. We'll WhatsApp you the venue details closer to the date.</p>
            <button className={styles.successClose} onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}

    </main>
  );
}