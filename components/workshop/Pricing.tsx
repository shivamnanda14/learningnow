"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BadgeCheck,
  IndianRupee,
  Clock3,
  Users,
  ArrowRight,
} from "lucide-react";

export default function Pricing() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Pricing
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Transparent Workshop Pricing
        </h2>

        <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed mb-14">
          Every workshop is customized according to your institution,
          audience size and learning objectives.
        </p>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-10">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left */}

            <div>

              <p className="text-purple-400 uppercase tracking-[0.2em] text-sm mb-3">
                Starting Price
              </p>

              <div className="flex items-end gap-2 mb-6">

                <IndianRupee
                  size={40}
                  className="text-green-400"
                />

                <h3 className="text-6xl font-semibold text-green-400">
                  8,999
                </h3>

              </div>

              <p className="text-zinc-400 leading-8">
                Final pricing may vary depending on the location,
                audience size and workshop requirements.
              </p>

            </div>

            {/* Right */}

            <div className="space-y-5">

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-purple-400" />

                <span>3 Hour Live Workshop</span>

              </div>

              <div className="flex items-center gap-3">

                <Users className="text-purple-400" />

                <span>Interactive Activities & Group Tasks</span>

              </div>

              <div className="flex items-center gap-3">

                <Clock3 className="text-purple-400" />

                <span>Question & Answer Session</span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-purple-400" />

                <span>Customized According To Institution</span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-purple-400" />

                <span>Participation Certificate (Optional)</span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck className="text-purple-400" />

                <span>Post Workshop Resources</span>

              </div>

            </div>

          </div>

          <div className="mt-10">

            <Link
              href="/workshop/request"
               className="
    inline-flex
    w-fit
    self-start
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-white
    px-8
    py-4
    font-medium
    text-black
    no-underline
    transition
    hover:bg-zinc-200
  "
            >
              Request Workshop

              <ArrowRight size={18} />

            </Link>

          </div>

        </div>

      </motion.div>

    </section>
  );
}