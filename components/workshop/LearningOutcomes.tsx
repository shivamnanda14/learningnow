"use client";

import { motion } from "framer-motion";
import {
  Mic2,
  Users,
  Briefcase,
  MessageCircle,
  Brain,
  BadgeCheck,
} from "lucide-react";

const outcomes = [
  {
    icon: Mic2,
    title: "Public Speaking",
    description:
      "Speak confidently in front of an audience without fear or hesitation.",
  },
  {
    icon: MessageCircle,
    title: "Communication Skills",
    description:
      "Improve clarity, confidence and effectiveness in everyday conversations.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Learn how to communicate better while working with classmates and teams.",
  },
  {
    icon: Briefcase,
    title: "Interview Readiness",
    description:
      "Develop communication skills required for college interviews and placements.",
  },
  {
    icon: Brain,
    title: "Confidence Mindset",
    description:
      "Replace fear and self-doubt with practical communication habits.",
  },
  {
    icon: BadgeCheck,
    title: "Action Plan",
    description:
      "Students receive a clear framework to continue improving after the workshop.",
  },
];

export default function LearningOutcomes() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Learning Outcomes
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          What Students Will Gain
        </h2>

        <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-14">
          Every participant leaves with practical communication skills
          that can be applied immediately in academics, interviews and
          everyday life.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {outcomes.map((item, index) => {
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
                  size={30}
                  className="text-purple-400 mb-5"
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