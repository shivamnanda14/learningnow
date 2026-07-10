"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Clock3,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-zinc-900 via-black to-black p-10 md:p-16"
      >

        {/* Glow */}

        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-purple-600/15 blur-[120px]" />

        <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

        <div className="relative z-10 text-center">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Ready To Begin?
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">

            Transform The Way
            <br />

            You Communicate.

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

            Stop relying on talent.
            Learn a practical communication system that helps you
            speak with confidence, clarity and influence in every
            conversation.

          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button
              disabled
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-8
                py-4
                font-semibold
                text-black
                opacity-80
                cursor-not-allowed
              "
            >

              Coming Soon

              <ArrowRight size={18} />

            </button>

            <Link
              href="/communication"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-medium transition hover:border-purple-500"
            >

              Back To Communication

            </Link>

          </div>

          {/* Trust Row */}

          <div className="mt-14 grid gap-4 md:grid-cols-3">

            <div className="flex items-center justify-center gap-2 text-zinc-400">

              <BadgeCheck
                size={18}
                className="text-green-400"
              />

              Lifetime Access

            </div>

            <div className="flex items-center justify-center gap-2 text-zinc-400">

              <ShieldCheck
                size={18}
                className="text-green-400"
              />

              Secure Payment

            </div>

            <div className="flex items-center justify-center gap-2 text-zinc-400">

              <Clock3
                size={18}
                className="text-green-400"
              />

              Instant Dashboard Access

            </div>

          </div>

          <p className="mt-8 text-sm text-zinc-500">

            Payment integration is currently being completed.
            Enrollment will be available very soon.

          </p>

        </div>

      </motion.div>

    </section>
  );
}