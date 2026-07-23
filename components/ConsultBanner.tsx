"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import CTAButton from "./CTAButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function ConsultBanner() {
  return (
    <section id="consult" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="relative overflow-hidden rounded-[2rem] bg-navy-gradient px-8 py-16 text-center shadow-card sm:px-16 sm:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-navy-radial"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <motion.div variants={fadeUp}>
              <Eyebrow tone="light">Not in the Mood to Read?</Eyebrow>
            </motion.div>
            <motion.h3
              variants={fadeUp}
              className="mt-5 text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
            >
              Let&rsquo;s just talk about your home &mdash; by phone.
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-6 text-balance text-lg text-blue-50/85">
              A free, no-obligation 15-minute phone consultation. I&rsquo;ll
              walk you through all 7 steps of the Executive Home Launch
              System&trade;, and you&rsquo;ll get my &ldquo;9 Tactics to Add
              Up to $5,000 to Your Home&rsquo;s Value&rdquo; guide free for
              scheduling. If you&rsquo;d like to go deeper after that, we
              can schedule a full strategy session next.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex justify-center">
              <CTAButton>
                Click Here to Schedule the 15-Minute Phone Consultation &rarr;
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
