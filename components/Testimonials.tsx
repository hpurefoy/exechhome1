"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const TESTIMONIALS = [
  {
    title: "Hank Will Get the Job Done!",
    quote:
      "Hank is very professional and knowledgeable. He has helped me buy and sell two homes so far — he knows how to get homes sold! He priced my home right, and it sold in two days. He truly cares about his clients. I 100 percent recommend Hank to anyone selling or buying a home!",
    author: "N. Harrison",
  },
  {
    title: "Hank Made It Simple and Easy for Us!",
    quote:
      "Hank did a great job selling our home and helping us buy a new one. He gave us great advice to get our home ready to sell and was able to get us more than we expected. The sale was smooth, and Hank made the process easy. When we bought our new home, he did an excellent job explaining how everything would work, helped us negotiate upgrades, and saved us a ton of money. Hank is our Realtor and friend for life!",
    author: "D. and S. Hall",
  },
  {
    title: "Hank Goes Above and Beyond to Get the Job Done",
    quote:
      "We were very pleased working with Hank Purefoy in selling our house. He is a knowledgeable professional with a pleasant personality and is easy to talk with about every issue that arose during the sale. He went above and beyond to help with the details — even meeting contractors at our house when we couldn't be there. Hank is thoughtful, courteous, and considerate. We highly recommend him for your real estate needs.",
    author: "Reverend L. Gregory",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15)}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>What Clients Say</Eyebrow>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-balance font-sans text-4xl font-extrabold leading-tight tracking-tight text-navy-deep sm:text-5xl"
          >
            Real Results for Real Sellers
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15, 0.1)}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.author}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="flex flex-col rounded-2xl border border-navy/5 bg-white p-8 shadow-card"
            >
              <Stars />
              <h3 className="mt-5 font-sans text-lg font-bold text-navy-deep">
                {t.title}
              </h3>
              <blockquote className="mt-3 flex-1 text-balance text-grey-warm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-wide text-royal">
                &mdash; {t.author}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.26 6.9.6-5.2 4.6 1.6 6.79L12 16.9l-6.2 3.35 1.6-6.79-5.2-4.6 6.9-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}
