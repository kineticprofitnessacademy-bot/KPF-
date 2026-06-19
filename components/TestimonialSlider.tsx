"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { testimonials, type Testimonial } from "@/lib/data";
import styles from "./TestimonialSlider.module.css";

/* Extend the imported type locally — data.ts stays untouched */
type TestimonialWithAvatar = Testimonial & { avatar?: string };

const INTERVAL = 5000;

/* Position each slide relative to active index */
function getSlideState(
  index: number,
  active: number,
  total: number
): "active" | "prev" | "next" | "hidden" {
  if (index === active) return "active";
  if (index === (active - 1 + total) % total) return "prev";
  if (index === (active + 1) % total) return "next";
  return "hidden";
}

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  return (
    <section
      className={styles.section}
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle decorative quote mark — positioned top-left, small */}
      <div className={styles.deco} aria-hidden="true">&ldquo;</div>

      {/* 3-D CAROUSEL STAGE */}
      <div className={styles.stageWrap}>
        {(testimonials as TestimonialWithAvatar[]).map((t, i) => {
          const state = getSlideState(i, active, total);
          return (
            <div
              key={i}
              className={`${styles.slide} ${styles[`slide--${state}`]}`}
              aria-hidden={state !== "active"}
              onClick={() => state !== "active" && setActive(i)}
            >
              <figure className={styles.card}>

                {/* ── AVATAR (optional — show initials if no image) ── */}
                <div className={styles.avatarWrap}>
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className={styles.avatarImg}
                      width={72}
                      height={72}
                    />
                  ) : (
                    <div className={styles.avatarInitials} aria-hidden="true">
                      {t.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div className={styles.avatarRing} />
                </div>

                {/* ── STARS ── */}
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  {"★★★★★"}
                </div>

                {/* ── QUOTE ── */}
                <blockquote className={styles.quote}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* ── AUTHOR META ── */}
                <figcaption className={styles.author}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.dot}>·</span>
                  <span className={styles.location}>{t.location}</span>
                </figcaption>

                {/* ── BOTTOM ROW: result badge + program tag ── */}
                <div className={styles.cardFooter}>
                  <span className={styles.resultBadge}>{t.result}</span>
                  <span className={styles.program}>{t.program}</span>
                </div>

              </figure>
            </div>
          );
        })}
      </div>

      {/* CONTROLS */}
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous testimonial">
          ‹
        </button>
        <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              className={`${styles.dotBtn} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Next testimonial">
          ›
        </button>
      </div>

      {/* PROGRESS BAR */}
      <div className={styles.progressWrap} aria-hidden="true">
        <div
          key={active}
          className={`${styles.progress} ${paused ? styles.progressPaused : ""}`}
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

      <Link href="/career-support" className={styles.resultsLink}>
        See Student Outcomes →
      </Link>
    </section>
  );
}
