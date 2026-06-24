"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="bg-black text-white">
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-36 pb-12 md:pb-16">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400 mb-6"
        >
          LearningNow by Shivam Nanda
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="max-w-5xl text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8"
        >
          Learn Communication.
          <br />
          Learn From Real Conversations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 leading-relaxed mb-12"
        >
          Podcasts, communication training, practical insights, and
          real-world lessons to help students and professionals
          build confidence, clarity, and influence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="flex flex-col sm:flex-row gap-4"
        >

          <Link href="/podcast">
            <button className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Explore Podcast
            </button>
          </Link>

          <Link href="/communication">
            <button className="w-full sm:w-auto border border-zinc-700 hover:border-white text-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
              Communication Masterclass
            </button>
          </Link>

        </motion.div>

      </section>
    </main>
  );
}