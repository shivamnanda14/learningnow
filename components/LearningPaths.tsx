"use client";

import { motion } from "framer-motion";
import PathCard from "./PathCard";

export default function LearningPaths() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Learn Your Way
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Choose Your Learning Path
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn through conversations, communication frameworks,
            and practical insights designed for real-world growth.
          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <PathCard
            icon="🎙"
            title="Podcast"
            description="Learn from experts, educators, professionals, and creators through meaningful long-form conversations."
            buttonText="Explore Episodes"
            href="/podcast"
          />

          <PathCard
            icon="🗣"
            title="Communication"
            description="Build confidence, improve speaking skills, and master communication through practical learning."
            buttonText="Start Learning"
            href="/communication"
          />

          <PathCard
            icon="📖"
            title="Book"
            description="Discover practical communication frameworks, exercises, and systems you can apply immediately."
            buttonText="Explore Book"
            href="/book"
          />

        </div>

      </div>
    </section>
  );
}