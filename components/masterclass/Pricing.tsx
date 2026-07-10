"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  CreditCard,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm text-green-300">
            Launch Pricing
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Invest Once.
            <br />
            Learn Forever.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
            One payment. Lifetime access. Future updates included.
            No monthly subscription.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-zinc-900/70"
        >

          <div className="border-b border-zinc-800 bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8">

            <p className="text-purple-300 font-medium">
              LearningNow Communication Masterclass
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              Launch Offer
            </h3>

          </div>

          <div className="p-10">

            <div className="flex items-end gap-4">

              <span className="text-3xl text-zinc-500 line-through">
                ₹399
              </span>

              <span className="text-6xl font-bold text-green-400">
                ₹199
              </span>

            </div>

            <p className="mt-3 text-zinc-400">
              Limited time launch pricing.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <BadgeCheck
                  className="text-green-400"
                  size={20}
                />

                <span>
                  Lifetime Course Access
                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck
                  className="text-green-400"
                  size={20}
                />

                <span>
                  Downloadable Workbook
                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck
                  className="text-green-400"
                  size={20}
                />

                <span>
                  Completion Certificate
                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck
                  className="text-green-400"
                  size={20}
                />

                <span>
                  Future Course Updates
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Sparkles
                  className="text-green-400"
                  size={20}
                />

                <span>
                  AI Assistant (Coming Soon)
                </span>

              </div>

            </div>

            <div className="mt-12">

              <Link
                href="#"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-white
                  px-8
                  py-4
                  text-lg
                  font-semibold
                  text-black
                  transition
                  hover:scale-[1.02]
                "
              >
                <CreditCard size={20} />

                Buy Now

              </Link>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-zinc-400">

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

                Secure Payment

              </div>

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

                One-Time Purchase

              </div>

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={18}
                  className="text-green-400"
                />

                Instant Access

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}