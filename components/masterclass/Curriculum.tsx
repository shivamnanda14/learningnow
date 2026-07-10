"use client";

import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  Mic2,
  MessageSquareQuote,
  Users,
  Rocket,
} from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "Module 1",
    duration: "25 min",
    topic: "Communication Mindset",
    description:
      "Understand how great communicators think, organize ideas and build clarity before speaking.",
  },
  {
    icon: ShieldCheck,
    title: "Module 2",
    duration: "30 min",
    topic: "Confidence Framework",
    description:
      "Learn practical exercises to overcome hesitation, fear and self-doubt while speaking.",
  },
  {
    icon: Mic2,
    title: "Module 3",
    duration: "35 min",
    topic: "Voice & Presence",
    description:
      "Improve your voice, body language and overall stage presence with practical drills.",
  },
  {
    icon: MessageSquareQuote,
    title: "Module 4",
    duration: "35 min",
    topic: "Storytelling System",
    description:
      "Learn how to make conversations, presentations and speeches memorable.",
  },
  {
    icon: Users,
    title: "Module 5",
    duration: "30 min",
    topic: "Everyday Communication",
    description:
      "Communication strategies for interviews, networking, college and professional life.",
  },
  {
    icon: Rocket,
    title: "Module 6",
    duration: "25 min",
    topic: "Implementation Blueprint",
    description:
      "Build a long-term communication improvement system that lasts beyond the course.",
  },
];

export default function Curriculum() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Curriculum
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          What You'll Learn
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-400">
          A structured 3-hour masterclass divided into six practical
          modules. Every section focuses on real communication skills
          you can apply immediately.
        </p>

      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">

        {modules.map((module, index) => {

          const Icon = module.icon;

          return (

            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-purple-500/40"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">

                  <Icon
                    size={28}
                    className="text-purple-400"
                  />

                </div>

                <span className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300">

                  {module.duration}

                </span>

              </div>

              <p className="mt-6 text-sm uppercase tracking-wider text-purple-400">

                {module.title}

              </p>

              <h3 className="mt-2 text-2xl font-semibold">

                {module.topic}

              </h3>

              <p className="mt-4 leading-7 text-zinc-400">

                {module.description}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}