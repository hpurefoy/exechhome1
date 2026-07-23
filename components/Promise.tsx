"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const CARDS = [
  {
    icon: "$",
    title: "The Most Money Possible",
    body: "A data-driven pricing and marketing strategy built to maximize your net proceeds.",
  },
  {
    icon: "⏱",
    title: "A Fast, Predictable Timeline",
    body: "A coordinated launch plan — not months of uncertainty on the market.",
  },
  {
    icon: "✓",
    title: "Less Stress, Start to Close",
    body: "Disciplined, proactive management so nothing catches you by surprise.",
  },
];

export default function Promise() {
  return (
    <section className="relative bg-paper py-24 sm:py-32">
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
              The Three Things Every Seller Wants
            </Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-balance font-sans text-4xl font-extrabold leading-tight tracking-tight text-navy-deep sm:text-5xl"
          >
            Selling Your Home Shouldn&rsquo;t Feel Like a Guessing Game.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-balance text-lg text-grey-warm"
          >
            Most homeowners go into a sale hoping for the best. Hope
            isn&rsquo;t a strategy &mdash; and in today&rsquo;s market,
            it&rsquo;s an expensive one.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15, 0.1)}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="rounded-2xl border border-navy/5 bg-white p-8 shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-gradient text-2xl font-bold text-gold">
                {card.icon}
              </div>
              <h3 className="mt-6 font-sans text-xl font-bold text-navy-deep">
                {card.title}
              </h3>
              <p className="mt-3 text-grey-warm">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
