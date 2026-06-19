"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CtaBgSlider.module.css";

const BG_IMAGES = [
  { src: "/images/fitness-certification.png", alt: "Personal Training program" },
  
];

const INTERVAL = 4500;

export default function CtaBgSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % BG_IMAGES.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="cta-heading">

      {/* BACKGROUND SLIDESHOW */}
      <div className={styles.bgWrap} aria-hidden="true">
        {BG_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={`${styles.bgSlide} ${i === active ? styles.bgActive : ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={i === 0}
            />
          </div>
        ))}
        <div className={styles.overlay} />
        <div className={styles.grain}  aria-hidden="true" />
        <div className={styles.glow}   aria-hidden="true" />
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.watermark} aria-hidden="true">KPF</div>

        <span
          className="section-label"
          style={{ justifyContent: "center", marginBottom: "1.4rem" }}
        >
          Your Career Starts Here
        </span>

        <h2 id="cta-heading" className={styles.title}>
          READY TO BUILD YOUR<br />
          <em>CAREER?</em>
        </h2>

        <p className={styles.sub}>
          Join KPF Academy and get the science-based education, mentorship,
          and career support that the fitness industry demands.
        </p>

        <div className={styles.actions}>
          <Link href="/apply"   className="btn-gold">Apply Now</Link>
          <Link href="/contact" className="btn-outline">Book Academic Counselling</Link>
        </div>
      </div>

      {/* SLIDE DOTS */}
      <div className={styles.dots} aria-hidden="true">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Background slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
