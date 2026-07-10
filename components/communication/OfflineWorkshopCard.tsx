"use client";

import Link from "next/link";
import {
  Building2,
  Users,
  Mic2,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function OfflineWorkshopCard() {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      {/* Badge */}

      <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
        Offline
      </p>

      {/* Title */}

      <h3 className="text-3xl font-semibold mb-4">
        Institutional Workshop
      </h3>

      {/* Description */}

      <p className="text-zinc-400 leading-8">
        Invite me to your school, college or coaching institute for a
        practical 3-hour communication workshop filled with activities,
        audience interaction and real-world exercises.
      </p>

      {/* Price */}

      <div className="mt-8">

        <span className="text-5xl font-semibold">
          ₹8,999
        </span>

        <p className="mt-2 text-zinc-500">
          Starting Price
        </p>

      </div>

      {/* Features */}

      <div className="mt-10 space-y-4 flex-1">

        <div className="flex items-center gap-3">

          <Building2
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            Schools, Colleges & Institutes
          </span>

        </div>

        <div className="flex items-center gap-3">

          <Mic2
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            3 Hour Live Interactive Session
          </span>

        </div>

        <div className="flex items-center gap-3">

          <Users
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            Activities, Practice & Q&A
          </span>

        </div>

        <div className="flex items-center gap-3">

          <MapPin
            size={18}
            className="text-purple-400"
          />

          <span className="text-zinc-300">
            Available Across India
          </span>

        </div>

      </div>

      {/* Button */}

      <Link
        href="/workshop"
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
        Request Workshop

        <ArrowRight size={18} />

      </Link>

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-zinc-500">
        Submit a request and I'll contact you personally.
      </p>

    </div>
  );
}