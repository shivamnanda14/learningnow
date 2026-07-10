"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PhoneCall,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="request"
      className="max-w-6xl mx-auto px-4 md:px-6 pb-24"
    >

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
        className="rounded-3xl border border-zinc-800 bg-zinc-900 p-10 md:p-16 text-center"
      >

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Ready To Host?
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">

          Let's Bring This Workshop
          <br />
          To Your Institution.

        </h2>

        <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed mb-12">

          Fill out the workshop request form and I'll personally
          get in touch with you to discuss your requirements,
          schedule and workshop plan.

        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">

          <div className="flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-3">

            <CalendarDays
              size={18}
              className="text-purple-400"
            />

            Flexible Scheduling

          </div>

          <div className="flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-3">

            <PhoneCall
              size={18}
              className="text-purple-400"
            />

            Personal Discussion

          </div>

          <div className="flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-3">

            <BadgeCheck
              size={18}
              className="text-purple-400"
            />

            Customized Workshop

          </div>

        </div>

        <Link
          href="/workshop/request"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-black font-medium transition hover:bg-zinc-200"
        >

          Request Workshop

          <ArrowRight size={18} />

        </Link>

        <p className="mt-8 text-zinc-500 text-sm">

          We'll contact you within 24–48 hours after receiving your request.

        </p>

      </motion.div>

    </section>
  );
}