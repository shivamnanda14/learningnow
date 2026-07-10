"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Clock3,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          LearningNow Workshop
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">

          Bring Communication
          <br />
          Skills To Your
          <br />
          Institution.

        </h1>

        <p className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed mb-12">

          A highly interactive 3-hour communication workshop
          designed for schools, colleges and coaching institutes
          to improve confidence, public speaking and real-world
          communication skills.

        </p>

        {/* Stats */}

        <div className="grid gap-4 md:grid-cols-4 mb-12">

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <Clock3
              className="text-purple-400 mb-4"
              size={28}
            />

            <p className="text-zinc-500 text-sm">
              Duration
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              3 Hours
            </h3>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <Building2
              className="text-purple-400 mb-4"
              size={28}
            />

            <p className="text-zinc-500 text-sm">
              Mode
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              Offline
            </h3>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <Users
              className="text-purple-400 mb-4"
              size={28}
            />

            <p className="text-zinc-500 text-sm">
              Audience
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              Institutions
            </h3>

          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

            <IndianRupee
              className="text-green-400 mb-4"
              size={28}
            />

            <p className="text-zinc-500 text-sm">
              Starting From
            </p>

            <h3 className="mt-2 text-xl font-semibold text-green-400">
              ₹8,999
            </h3>

          </div>

        </div>

        {/* CTA */}

        <div className="flex flex-wrap gap-5">

          <Link
            href="#request"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-black font-medium transition hover:bg-zinc-200"
          >

            Request Workshop

            <ArrowRight size={18} />

          </Link>

          <Link
            href="#overview"
            className="rounded-xl border border-zinc-700 px-8 py-4 font-medium hover:border-purple-500 transition"
          >

            Explore Workshop

          </Link>

        </div>

      </motion.div>

    </section>
  );
}