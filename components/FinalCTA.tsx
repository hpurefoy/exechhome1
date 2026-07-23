"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import CTAButton from "./CTAButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-royal/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow tone="light">Ready When You Are</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance font-sans text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Ready to Sell for More, in Less Time, with Less Hassle?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-balance text-lg text-blue-50/85">
            Schedule your free 15-minute phone consultation &mdash;
            you&rsquo;ll walk away with a clearer plan than you had five
            minutes ago, plus my free &ldquo;9 Tactics to Add Up to $5,000
            to Your Home&rsquo;s Value&rdquo; guide.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <CTAButton>Schedule the 15-Minute Phone Consultation &rarr;</CTAButton>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-2 text-sm font-medium text-blue-100/70 sm:flex-row sm:gap-6"
          >
            <a href={PHONE_HREF} data-cursor-hover className="hover:text-white">
              📞 {PHONE_DISPLAY}
            </a>
            <span className="hidden sm:inline">|</span>
            <a href={`mailto:${EMAIL}`} data-cursor-hover className="hover:text-white">
              ✉️ {EMAIL}
            </a>
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
