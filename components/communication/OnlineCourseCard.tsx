"use client";

import Link from "next/link";
import {
  Clock3,
  BookOpen,
  Infinity,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function OnlineCourseCard() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      {/* Badge */}

      <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
        Online
      </p>

      {/* Title */}

      <h3 className="text-3xl font-semibold mb-4">
        Communication Masterclass
      </h3>

      {/* Description */}

      <p className="text-zinc-400 leading-8">
        Learn communication at your own pace through a structured
        3-hour masterclass designed for students, professionals,
        teachers and creators.
      </p>

      {/* Price */}

      <div className="mt-8">

        <p className="text-zinc-500 line-through text-xl">
          ₹399
        </p>

        <div className="flex items-end gap-3 mt-2">

          <span className="text-5xl font-semibold">
            ₹199
          </span>

          <span className="text-green-400 mb-2">
            Launch Offer
          </span>

        </div>

      </div>

      {/* Features */}

      <div className="mt-10 space-y-4 flex-1">

        <div className="flex items-center gap-3">

          <Clock3
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            3 Hour HD Masterclass
          </span>

        </div>

        <div className="flex items-center gap-3">

          <Infinity
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            Lifetime Access
          </span>

        </div>

        <div className="flex items-center gap-3">

          <BookOpen
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            Downloadable Workbook
          </span>

        </div>

        <div className="flex items-center gap-3">

          <BadgeCheck
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            Certificate of Completion
          </span>

        </div>

      </div>

      {/* Button */}

      <Link
        href="/masterclass"
        className="
          mt-10
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-white
          px-6
          py-4
          font-medium
          text-black
          transition-all
          duration-300
          hover:bg-zinc-200
        "
      >
        Start Learning

        <ArrowRight size={18} />

      </Link>

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-zinc-500">
        Instant access after purchase.
      </p>

    </div>
  );
}