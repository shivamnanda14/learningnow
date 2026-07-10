"use client";

import { motion } from "framer-motion";
import {
  Video,
  Infinity,
  BookOpen,
  BadgeCheck,
  BrainCircuit,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "3-Hour HD Masterclass",
    description:
      "A structured communication system taught through practical examples, real-world situations and actionable frameworks.",
  },
  {
    icon: Infinity,
    title: "Lifetime Access",
    description:
      "Learn at your own pace with unlimited access from any device.",
  },
  {
    icon: BookOpen,
    title: "Workbook & Resources",
    description:
      "Download worksheets, notes and exercises to practice every concept.",
  },
  {
    icon: BadgeCheck,
    title: "Certificate of Completion",
    description:
      "Receive a digital certificate after successfully completing the masterclass.",
  },
  {
    icon: BrainCircuit,
    title: "AI Learning Assistant",
    description:
      "Ask questions from the course, book and podcast using one AI assistant.",
    badge: "Coming Soon",
  },
  {
    icon: RefreshCcw,
    title: "Future Updates Included",
    description:
      "Get all future improvements and bonus lessons at no additional cost.",
  },
];

export default function WhatYouGet() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          What's Included
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Everything You'll Get
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-400">
          More than just a video course. This masterclass includes
          practical resources, lifetime access and future updates to
          help you become a confident communicator.
        </p>

      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .06,
              }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-purple-500/40"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">

                  <Icon
                    size={28}
                    className="text-purple-400"
                  />

                </div>

                {"badge" in feature && (

                  <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300">

                    {feature.badge}

                  </span>

                )}

              </div>

              <h3 className="mt-6 text-xl font-semibold">

                {feature.title}

              </h3>

              <p className="mt-3 leading-7 text-zinc-400">

                {feature.description}

              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}