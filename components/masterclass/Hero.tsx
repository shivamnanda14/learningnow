"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock3,
  MonitorPlay,
  Infinity,
  BadgeIndianRupee,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-purple-600/15 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300">

            🚀 LearningNow Communication Masterclass

          </div>

          {/* Heading */}

          <h1 className="mt-8 max-w-5xl text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">

            Communication
            <br />

            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">

              Is A Game.

            </span>

            <br />

            Be A Pro.

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-8 text-zinc-400">

            A practical communication system designed for students,
            teachers, professionals and creators who want to speak
            with confidence, clarity and influence in every situation.

          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-black transition hover:bg-zinc-200"
            >
              Start Learning

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/communication"
              className="rounded-xl border border-zinc-700 px-7 py-4 font-medium transition hover:border-purple-500"
            >
              View Curriculum
            </Link>

          </div>

          {/* Trust Text */}

          <p className="mt-6 text-sm text-zinc-500">

            Lifetime access • Future updates included • Certificate of completion

          </p>

          {/* Stats */}

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <Clock3 className="mb-5 text-purple-400" size={28} />

              <div>

                <p className="text-sm text-zinc-500">

                  Duration

                </p>

                <h3 className="mt-2 text-2xl font-semibold">

                  3 Hours

                </h3>

              </div>

            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <MonitorPlay className="mb-5 text-purple-400" size={28} />

              <div>

                <p className="text-sm text-zinc-500">

                  Mode

                </p>

                <h3 className="mt-2 text-2xl font-semibold">

                  Online

                </h3>

              </div>

            </div>

            <div className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

              <Infinity className="mb-5 text-purple-400" size={28} />

              <div>

                <p className="text-sm text-zinc-500">

                  Access

                </p>

                <h3 className="mt-2 text-2xl font-semibold">

                  Lifetime

                </h3>

                <p className="mt-1 text-sm text-zinc-500">

                  Includes future updates

                </p>

              </div>

            </div>

            <div
              id="pricing"
              className="flex flex-col justify-between rounded-2xl border border-green-500/30 bg-green-500/10 p-6"
            >

              <BadgeIndianRupee
                className="mb-5 text-green-400"
                size={28}
              />

              <div>

                <p className="text-sm text-zinc-400">

                  Launch Price

                </p>

                <h3 className="mt-2 text-3xl font-semibold text-green-400">

                  ₹199

                </h3>

                <p className="mt-1 text-sm text-green-300">

                  Limited-time offer

                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}