"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import CTAButton from "./CTAButton";
import { fadeUp, slideInRight, staggerContainer, viewportOnce } from "@/lib/animations";

const TEASERS = [
  "The #1 improvement buyers notice before they even walk in the door",
  "A commonly-overlooked issue that can tank an offer at inspection — and costs almost nothing to fix",
  "The single change with the biggest bang for your buck (Tactic 9 — most sellers skip it)",
];

export default function BonusGuide() {
  return (
    <section id="bonus-guide" className="relative overflow-hidden bg-navy-gradient py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-royal/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow tone="light">Free Bonus When You Schedule</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance font-sans text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl"
          >
            9 Tactics to Add Up to $5,000 to Your Home&rsquo;s Value{" "}
            <span className="text-2xl font-semibold text-blue-100/60 sm:text-3xl">
              (Without Breaking the Bank)
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-balance text-lg text-blue-50/85">
            You don&rsquo;t need a $30,000 renovation to sell for top
            dollar. Schedule your free phone consultation, and
            I&rsquo;ll send you this guide &mdash; which 9 tactics actually
            add value.
          </motion.p>

          <motion.ul variants={staggerContainer(0.12)} className="mt-8 flex flex-col gap-4">
            {TEASERS.map((teaser) => (
              <motion.li
                key={teaser}
                variants={fadeUp}
                className="flex items-start gap-3 text-blue-50/90"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span className="text-balance">{teaser}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-9">
            <CTAButton>Schedule Your Free Phone Consultation &rarr;</CTAButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={slideInRight}
          className="mx-auto w-full max-w-xs"
        >
          <div className="relative flex flex-col items-center rounded-3xl border border-gold/25 bg-white/5 p-10 text-center shadow-gold backdrop-blur-sm">
            <span className="font-sans text-8xl font-extrabold leading-none text-transparent bg-gold-gradient bg-clip-text sm:text-9xl">
              9
            </span>
            <p className="mt-4 text-lg font-bold text-white">
              Proven Tactics Inside
            </p>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-blue-100/60">
              <LockIcon />
              Revealed when you schedule your call
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
