"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type FeaturedEpisodeProps = {
  title: string;
  guest: string;
  thumbnail: string;
  slug: string;
};

export default function FeaturedEpisode({
  title,
  guest,
  thumbnail,
  slug,
}: FeaturedEpisodeProps) {
  return (
    <Link href={`/podcast/${slug}`}>

      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="cursor-pointer bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-3xl overflow-hidden backdrop-blur-sm"
      >

        <div className="overflow-hidden">

          <img
            src={thumbnail}
            alt={title}
            className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-[1.02]"
          />

        </div>

        <div className="p-8 md:p-10">

          <p className="text-purple-400 uppercase tracking-[0.2em] text-sm mb-3">
            Featured Conversation
          </p>

          <p className="text-zinc-500 mb-4">
             {guest}
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-8">
            {title}
          </h2>

          <button className="bg-white hover:bg-zinc-200 text-black px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
            Watch Episode
          </button>

        </div>

      </motion.div>

    </Link>
  );
}