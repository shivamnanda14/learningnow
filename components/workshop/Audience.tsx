"use client";

import { motion } from "framer-motion";
import {
  School,
  GraduationCap,
  Building2,
  University,
  Users,
  Briefcase,
} from "lucide-react";

const audiences = [
  {
    icon: School,
    title: "Schools",
    description:
      "Communication and confidence building sessions for Classes 9–12 students.",
  },
  {
    icon: GraduationCap,
    title: "Colleges",
    description:
      "Ideal for undergraduate and postgraduate students preparing for careers.",
  },
  {
    icon: Building2,
    title: "Coaching Institutes",
    description:
      "Enhance students' communication alongside academic preparation.",
  },
  {
    icon: University,
    title: "Universities",
    description:
      "Workshops for departments, student clubs and placement cells.",
  },
  {
    icon: Users,
    title: "Student Communities",
    description:
      "Perfect for clubs, societies and leadership development programs.",
  },
  {
    icon: Briefcase,
    title: "Training Institutes",
    description:
      "Professional communication workshops for skill development programs.",
  },
];

export default function Audience() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Who Can Host?
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Designed For Educational Institutions
        </h2>

        <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-14">
          Whether you're running a school, college, coaching institute
          or university, this workshop can be customized according to
          your students and learning objectives.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {audiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
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