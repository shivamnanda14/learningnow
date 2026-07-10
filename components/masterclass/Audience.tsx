"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Video,
  Users,
  Lightbulb,
  UserCheck,
} from "lucide-react";

const audience = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Build confidence for presentations, viva, interviews and everyday communication.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    description:
      "Communicate ideas effectively in meetings, workplaces and client interactions.",
  },
  {
    icon: Video,
    title: "Content Creators",
    description:
      "Improve storytelling, on-camera confidence and audience engagement.",
  },
  {
    icon: Users,
    title: "Teachers",
    description:
      "Deliver lectures with clarity, authority and stronger classroom presence.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs",
    description:
      "Pitch ideas confidently, build trust and communicate your vision effectively.",
  },
  {
    icon: UserCheck,
    title: "Job Aspirants",
    description:
      "Prepare for interviews, group discussions and professional communication.",
  },
];

export default function Audience() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Who Is This For?
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Designed For Every Stage Of Your Journey
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-zinc-400">
          Whether you're preparing for interviews, teaching a classroom,
          creating content or leading a team, this masterclass gives you
          practical communication skills that can be applied immediately.
        </p>

      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {audience.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-7 transition hover:border-purple-500/40"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10">

                <Icon
                  size={28}
                  className="text-purple-400"
                />

              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}