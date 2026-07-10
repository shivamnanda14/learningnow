"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Mic2,
  Users,
  Target,
  BadgeCheck,
  Lightbulb,
} from "lucide-react";

const points = [
  {
    icon: Brain,
    title: "Practical Learning",
    description:
      "Students don't just listen—they practice communication through structured exercises and activities.",
  },
  {
    icon: Mic2,
    title: "Public Speaking Practice",
    description:
      "Every session focuses on reducing stage fear and improving speaking confidence.",
  },
  {
    icon: Users,
    title: "Interactive Activities",
    description:
      "Group discussions, storytelling, role-play and audience interaction keep everyone engaged.",
  },
  {
    icon: Target,
    title: "Real-Life Communication",
    description:
      "Interview skills, classroom communication, teamwork and everyday conversations.",
  },
  {
    icon: BadgeCheck,
    title: "Actionable Framework",
    description:
      "Students leave with clear exercises and systems they can continue using after the workshop.",
  },
  {
    icon: Lightbulb,
    title: "Built for Long-Term Growth",
    description:
      "The goal isn't motivation for one day—it's building communication habits that last.",
  },
];

export default function WhyWorkshop() {
  return (
    <section
      id="overview"
      className="max-w-6xl mx-auto px-4 md:px-6 pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Why This Workshop?
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          More Than A Seminar.
        </h2>

        <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-14">
          This workshop is designed around participation, practice and
          implementation so students don't just learn communication—they
          experience it.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 hover:border-purple-500 transition"
              >
                <Icon
                  className="text-purple-400 mb-5"
                  size={30}
                />

                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}