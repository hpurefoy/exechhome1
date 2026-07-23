"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./Container";
import CTAButton from "./CTAButton";
import AgentHeadshot from "./AgentHeadshot";
import { fadeUp, fadeUpSmall, staggerContainer, scaleIn } from "@/lib/animations";

const TRUST_ITEMS = [
  "Licensed REALTOR® since 2005",
  "Fortune 500 Marketing & Finance Background",
  "Metro Atlanta Specialist",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-navy-gradient pb-24 pt-36 sm:pb-32 sm:pt-44 lg:pb-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-navy-radial" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[36rem] w-[36rem] rounded-full bg-royal/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="text-balance font-sans leading-snug"
          >
            <span className="block text-sm font-bold uppercase tracking-wide text-alert sm:text-base">
              Attention Metro Atlanta Homeowners:
            </span>
            <span className="mt-2 block text-xl font-bold text-gold sm:text-2xl md:text-[1.75rem]">
              If You Want to Sell Fast, Sell for More, and Skip the Stress
              &mdash; Read This First
            </span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance font-sans text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.03] tracking-tight text-white"
          >
            You Have to Experience{" "}
            <span className="text-gold">The Executive Home Launch System&trade;</span>.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-balance text-lg font-semibold text-blue-50/95 sm:text-xl"
          >
            A 7-Step System designed to help homeowners sell for the most
            money, faster, and with less stress.
          </motion.p>

          <motion.p
            variants={fadeUpSmall}
            className="mt-4 max-w-lg text-balance text-sm text-blue-100/60 sm:text-base"
          >
            Click below to schedule a free 15-minute phone consultation
            &mdash; I&rsquo;ll personally go over all 7 steps with you. No
            pressure, no obligation.
          </motion.p>

          <motion.div variants={fadeUpSmall} className="mt-9">
            <CTAButton>Schedule the 15-Minute Phone Consultation &rarr;</CTAButton>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="mt-8 max-w-xl rounded-2xl border border-gold/30 bg-gold/10 p-5 shadow-gold sm:p-6"
          >
            <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-navy-deep">
              Free Bonus
            </span>
            <p className="mt-3 text-balance text-lg font-semibold leading-snug text-white sm:text-xl">
              Schedule your call and get my free guide,{" "}
              <span className="text-gold">
                &ldquo;9 Tactics to Add Up to $5,000 to Your Home&rsquo;s Value
                (Without Breaking the Bank)&rdquo;
              </span>
            </p>
          </motion.div>

          <motion.ul
            variants={staggerContainer(0.1)}
            className="mt-9 flex flex-col flex-wrap gap-x-8 gap-y-3 sm:flex-row"
          >
            {TRUST_ITEMS.map((item) => (
              <motion.li
                key={item}
                variants={fadeUpSmall}
                className="flex items-center gap-2 text-sm font-medium text-blue-50/80"
              >
                <CheckIcon />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div style={{ y: imageY }} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border-4 border-white/10 bg-navy shadow-card">
              <AgentHeadshot />
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
              <p className="font-sans text-lg font-bold text-white">Hank Purefoy</p>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-100/60">
                REALTOR&reg; | eXp Realty
              </p>
            </div>
            <div
              className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-gold-gradient opacity-80 blur-2xl"
              aria-hidden
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 text-gold"
      aria-hidden
    >
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
