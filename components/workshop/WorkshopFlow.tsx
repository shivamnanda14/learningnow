"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Brain,
  Mic2,
  Users,
  MessageSquare,
  Award,
} from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Introduction",
    time: "15 Minutes",
    description:
      "Ice-breaker activities and understanding why communication is one of the most valuable life skills.",
  },
  {
    icon: Brain,
    title: "Communication Mindset",
    time: "30 Minutes",
    description:
      "Understand how confident communicators think and overcome fear, hesitation and self-doubt.",
  },
  {
    icon: Mic2,
    title: "Confidence & Public Speaking",
    time: "45 Minutes",
    description:
      "Practical speaking exercises to improve confidence, voice projection and stage presence.",
  },
  {
    icon: Users,
    title: "Interactive Activities",
    time: "45 Minutes",
    description:
      "Role plays, storytelling, team discussions and communication challenges to maximize engagement.",
  },
  {
    icon: MessageSquare,
    title: "Q&A Session",
    time: "30 Minutes",
    description:
      "Students ask real-life communication questions and receive practical guidance.",
  },
  {
    icon: Award,
    title: "Implementation Blueprint",
    time: "15 Minutes",
    description:
      "A clear roadmap and daily exercises that students can continue after the workshop.",
  },
];

export default function WorkshopFlow() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Workshop Flow
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          A Structured 3-Hour Experience
        </h2>

        <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-14">
          Every workshop follows a structured flow that balances
          learning, interaction and practical implementation.
        </p>

        <div className="space-y-6">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-purple-500 transition"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                  <div className="flex items-start gap-5">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-zinc-800">

                      <Icon
                        size={26}
                        className="text-purple-400"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-semibold">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-zinc-400 leading-7">
                        {step.description}
                      </p>

                    </div>

                  </div>

                  <div className="shrink-0">

                    <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                      {step.time}
                    </span>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </motion.div>

    </section>
  );
}