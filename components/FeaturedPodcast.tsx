"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { episodes } from "../data/episodes";

export default function FeaturedPodcast() {
  const featuredEpisode = episodes.find(
    (episode) => episode.featured
  );

  if (!featuredEpisode) return null;

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Featured Conversation
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Latest Featured Podcast
          </h2>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -4 }}
          className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-3xl overflow-hidden transition-all duration-300"
        >

          <div className="overflow-hidden">
            <img
              src={featuredEpisode.thumbnail}
              alt={featuredEpisode.title}
              className="w-full aspect-video object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="p-8 md:p-10">

            <p className="text-sm uppercase tracking-wider text-purple-400 mb-3">
              Featured Episode
            </p>

            <p className="text-zinc-500 mb-4">
               {featuredEpisode.guest}
            </p>

            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              {featuredEpisode.title}
            </h3>

            <p className="text-zinc-400 max-w-3xl leading-relaxed mb-8">
              {featuredEpisode.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link href={`/podcast/${featuredEpisode.slug}`}>
                <button className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
                  Read Insights
                </button>
              </Link>

              <a
                href={featuredEpisode.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto border border-zinc-700 hover:border-white px-7 py-3 rounded-xl transition-all duration-300">
                  Watch On YouTube
                </button>
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}