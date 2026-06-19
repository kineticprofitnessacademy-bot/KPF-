"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/data";
import styles from "./ProgramsShowcase.module.css";

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

const CATEGORIES = [
  { id: "fitness",   label: "Personal Training" },
  { id: "nutrition", label: "Sports Nutrition"  },
  { id: "business",  label: "Gym Management"    },
  { id: "workshop",  label: "Workshops"          },
] as const;

// ← your actual image paths from /public
const IMAGES: Record<string, string> = {
  "advanced-personal-training": "/images/fitness-certification.png",
  "sports-nutrition":           "/images/nutrition-mastery.png",
  "gym-management":             "/images/strength-foundations.png",
  "workshops":                  "/images/nutrition-masterclass.png",
};

const TAGS: Record<string, string[]> = {
  "advanced-personal-training": ["Exercise Science", "Program Design", "Client Coaching"],
  "sports-nutrition":           ["Macronutrients", "Meal Planning", "Supplementation"],
  "gym-management":             ["Operations", "Revenue Growth", "Team Leadership"],
  "workshops":                  ["Continuing Ed", "Specialist Skills", "Hands-On"],
};

export default function ProgramsShowcase() {
  const [catIdx, setCatIdx] = useState(0);
  const [fading, setFading] = useState(false);

  const allPrograms = programs;

function switchTab(i: number) {
  setCatIdx(i);
}

  return (
    <section className={styles.sc} aria-labelledby="programs-heading">

      <div className={styles.noise}  aria-hidden />
      <div className={styles.beam}   aria-hidden />

      {/* HEADER */}
      <header className={styles.hd}>
        <div className={styles.eyebrow} aria-hidden>
          <span className={styles.eyeLine} />
          <span className={styles.eyeTxt}>What We Offer</span>
          <span className={`${styles.eyeLine} ${styles.eyeLineR}`} />
        </div>
        <h2 id="programs-heading" className={styles.h1}>
          OUR <span className={styles.h1Gold}>PROGRAMS</span>
          <span className={styles.h1Sub}>BY KPF ACADEMY</span>
        </h2>
        <p className={styles.subP}>
          Science-backed certifications designed by Shraddha Gadit — choose your
          path and train with purpose.
        </p>
      </header>

      {/* DIAMOND RULE */}
      <div className={styles.rule} aria-hidden>
        <span className={styles.ruleL} />
        <span className={styles.ruleDiamond} />
        <span className={styles.ruleR} />
      </div>

      {/* TABS */}
      <nav className={styles.tabsBorder} aria-label="Program categories">
        <div className={styles.tabs} role="tablist">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={catIdx === i}
              aria-controls="programs-grid"
              className={`${styles.tab} ${catIdx === i ? styles.tabOn : ""}`}
              onClick={() => switchTab(i)}
            >
              <span className={styles.tabDot} aria-hidden />
              {cat.label}
              {catIdx === i && <span className={styles.tabUl} aria-hidden />}
            </button>
          ))}
        </div>
      </nav>

      {/* META */}
      <div className={styles.metaRow}>
        <span className={styles.progCount}>
          {allPrograms.length} Programs
        </span>
        <span className={styles.catLbl}>All Programs</span>
      </div>

      {/* GRID */}
      <div
        id="programs-grid"
        role="tabpanel"
        aria-label="Programs"
        className={`${styles.grid} ${fading ? styles.gridOut : styles.gridIn}`}
      >
        {allPrograms.map((p, idx) => {
          const imgSrc = IMAGES[p.slug] ?? "/images/programs-bg.jpg";
          const tags   = TAGS[p.slug] ?? [];
          const num    = String(idx + 1).padStart(2, "0");

          const vars = {
            "--acc-raw":  p.color,
            "--acc-30":   hexToRgba(p.color, 0.30),
            "--acc-40":   hexToRgba(p.color, 0.38),
            "--acc-08":   hexToRgba(p.color, 0.08),
            "--acc-glow": hexToRgba(p.color, 0.20),
            "--acc-tint": hexToRgba(p.color, 0.09),
          } as React.CSSProperties;

          return (
            <article key={p.slug} className={styles.card} style={vars}>

              {/* ── CARD HEAD: real image + overlays ── */}
              <div className={styles.cardHead}>

                {/* 1. actual photo — bottom-most layer */}
                <Image
                  src={imgSrc}
                  alt={p.title}
                  fill
                  sizes="(max-width: 600px) 90vw, 340px"
                  style={{ objectFit: "cover" }}
                  className={styles.cardImg}
                  priority={idx === 0}
                />

                {/* 2. colour orbs on top of image */}
                <div className={styles.chOrb}  aria-hidden />
                <div className={styles.chOrb2} aria-hidden />

                {/* 3. dot grid (hover) */}
                <div className={styles.chGrid} aria-hidden />

                {/* 4. ghost number */}
                <div className={styles.chNum} aria-hidden>{num}</div>

                {/* 5. dark gradient fade so body text reads cleanly */}
                <div
                  className={styles.chFade}
                  style={{
                    background: `linear-gradient(
                      180deg,
                      ${hexToRgba(p.color, 0.08)} 0%,
                      rgba(4,4,14,0.55)           40%,
                      rgba(4,4,14,0.97)           100%
                    )`,
                  }}
                  aria-hidden
                />

                {/* 6. badge */}
                <span className={styles.chBadge}>{p.tag}</span>

                {/* 7. accent stripe */}
                <div className={styles.chStripe} aria-hidden />
              </div>

              {/* corner brackets */}
              <div className={`${styles.brkt} ${styles.brktTL}`} aria-hidden />
              <div className={`${styles.brkt} ${styles.brktBR}`} aria-hidden />

              {/* BODY */}
              <div className={styles.body}>
                <div className={styles.bMeta}>
                  <span className={styles.bAcc}>{p.format[0]}</span>
                  <span className={styles.bDot}>·</span>
                  <span>{p.duration}</span>
                </div>

                <h3 className={styles.bTitle}>{p.title}</h3>
                <p className={styles.bDesc}>{p.shortDesc}</p>

                {tags.length > 0 && (
                  <div className={styles.bTags} aria-label="Topics covered">
                    {tags.map((t) => (
                      <span key={t} className={styles.bTag}>{t}</span>
                    ))}
                  </div>
                )}

                <Link href={`/programs/${p.slug}`} className={styles.bCta}>
                  <span className={styles.ctaFill} aria-hidden />
                  <span className={styles.ctaT}>View Program</span>
                  <span className={styles.ctaArr} aria-hidden>→</span>
                </Link>
              </div>

              <div className={styles.botGlow} aria-hidden />
            </article>
          );
        })}
      </div>

    </section>
  );
}