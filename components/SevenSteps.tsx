"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import CTAButton from "./CTAButton";
import AnimatedCounter from "./AnimatedCounter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const STEPS = [
  { title: "Strategize", subtitle: "Your custom game plan" },
  { title: "Prepare", subtitle: "Outshine the competition" },
  { title: "Price", subtitle: "Data, not guesswork" },
  { title: "Launch", subtitle: "A high-impact debut" },
  { title: "Create Demand", subtitle: "Keep buyers engaged" },
  { title: "Negotiate", subtitle: "Protect price & terms" },
  { title: "Execute", subtitle: "Flawless to closing" },
];

export default function SevenSteps() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section id="seven-step-system" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow variant="statement">
              The Executive Home Launch System&trade;
            </Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-balance font-sans text-4xl font-extrabold leading-tight tracking-tight text-navy-deep sm:text-5xl"
          >
            A Disciplined, 7-Step Process &mdash; Built Like a Corporate
            Launch Plan
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-balance text-lg text-grey-warm"
          >
            Executive-level marketing, strategic pricing, buyer psychology,
            and expert negotiation &mdash; combined into one proven
            sequence.
          </motion.p>
        </motion.div>

        <div ref={timelineRef} className="relative mt-20 max-w-2xl">
          <svg
            className="pointer-events-none absolute left-7 top-2 h-[calc(100%-1rem)] w-1 -translate-x-1/2 sm:left-8"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#E4E1DA"
              strokeWidth="3"
            />
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="#D4AF37"
              strokeWidth="3"
              style={{ pathLength }}
            />
          </svg>

          <ul className="relative flex flex-col gap-10 sm:gap-12">
            {STEPS.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.08 }}
                className="relative flex items-start gap-5 sm:gap-6"
              >
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-paper bg-navy-gradient text-xl font-extrabold text-gold shadow-card sm:h-16 sm:w-16 sm:text-2xl">
                  <AnimatedCounter value={index + 1} />
                </span>
                <div className="pt-2 sm:pt-3">
                  <h3 className="font-sans text-xl font-bold text-navy-deep sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-grey-warm">{step.subtitle}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="mt-16 max-w-2xl rounded-2xl border border-navy/10 bg-white p-8 shadow-card sm:p-10"
        >
          <motion.p variants={fadeUp} className="text-balance text-lg text-navy-deep">
            Want to see how these 7 steps would work for you? Schedule a
            free 15-minute phone consultation and I&rsquo;ll walk you
            through them personally &mdash; plus you&rsquo;ll get my 9
            Tactics guide free.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-7">
            <CTAButton>Schedule the 15-Minute Phone Consultation &rarr;</CTAButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
