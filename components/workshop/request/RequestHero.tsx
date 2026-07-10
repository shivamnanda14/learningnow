"use client";

import { motion } from "framer-motion";

export default function RequestHero() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Workshop Request
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">

          Let's Bring
          <br />
          Communication Skills
          <br />
          To Your Institution.

        </h1>

        <p className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed">

          Fill out the form below and I'll personally review your
          request. We'll discuss your institution's goals, workshop
          format and suitable dates before confirming the session.

        </p>

      </motion.div>

    </section>
  );
}