"use client";

import { motion } from "framer-motion";

export default function LearningNowPhilosophy() {
  return (
    <section className="bg-black text-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading Section */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >

          <p className="text-purple-400 uppercase tracking-[0.25em] mb-4 font-medium text-sm">
            LearningNow Philosophy
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            The Ideas That
            <span className="text-purple-400"> Built LearningNow</span>
          </h2>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
            Need creates action. Purpose creates direction.
            Curiosity keeps us learning.
            The journey ends only when curiosity ends.
          </p>

        </motion.div>

        {/* Banner */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex justify-center"
        >

          <img
            src="/banner/learningnow-philosophy.jpg"
            alt="LearningNow Philosophy"
            className="w-full max-w-5xl rounded-3xl border border-zinc-800 shadow-2xl"
          />

        </motion.div>

        {/* Philosophy Text */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="max-w-3xl mx-auto text-center mt-10"
        >

          <p className="text-xl md:text-2xl font-semibold mb-5">
            Jarurat → Purpose → Curiosity → Maut
          </p>

          <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
            Need creates action.
            Purpose creates direction.
            Curiosity keeps us learning.
            LearningNow exists to encourage curiosity,
            because curiosity is the starting point of learning.
            Every conversation, book, and masterclass is built around
            helping people ask better questions and think more deeply.
          </p>

        </motion.div>

      </div>
    </section>
  );
}