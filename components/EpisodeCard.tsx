"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type EpisodeCardProps = {
  title: string;
  guest: string;
  thumbnail: string;
  slug: string;
};

export default function EpisodeCard({
  title,
  guest,
  thumbnail,
  slug,
}: EpisodeCardProps) {
  return (
    <Link href={`/podcast/${slug}`}>
      <motion.div
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.25,
        }}
        className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-3xl overflow-hidden cursor-pointer h-full backdrop-blur-sm"
      >

        <div className="overflow-hidden">

          <img
            src={thumbnail}
            alt={title}
            className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-[1.03]"
          />

        </div>

        <div className="p-6">

          <p className="text-sm uppercase tracking-wider text-purple-400 mb-3">
            {guest}
          </p>

          <h3 className="text-xl font-semibold tracking-tight leading-snug text-white">
            {title}
          </h3>

        </div>

      </motion.div>
    </Link>
  );
}