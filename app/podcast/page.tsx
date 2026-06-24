"use client";

import { motion } from "framer-motion";
import { episodes } from "../../data/episodes";
import EpisodeCard from "../../components/EpisodeCard";
import FeaturedEpisode from "../../components/FeaturedEpisode";

export default function PodcastPage() {
  const featuredEpisode = episodes.find(
    (episode) => episode.featured
  );

  const otherEpisodes = episodes.filter(
    (episode) => !episode.featured
  );

  return (
    <main className="min-h-screen bg-black text-white">

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            LearningNow Podcast
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Learn Through
            <br />
            Conversations.
          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg leading-relaxed">
            Conversations with educators, professionals,
            creators, and experts sharing real experiences,
            lessons, failures, and insights.
          </p>

        </motion.div>

        {/* Featured Episode */}

        {featuredEpisode && (
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mb-20"
          >

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="text-purple-400 uppercase tracking-[0.2em] text-sm mb-2">
                  Featured
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Latest Episode
                </h2>
              </div>

            </div>

            <FeaturedEpisode
              title={featuredEpisode.title}
              guest={featuredEpisode.guest}
              thumbnail={featuredEpisode.thumbnail}
              slug={featuredEpisode.slug}
            />

          </motion.div>
        )}

        {/* Recent Episodes */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-purple-400 uppercase tracking-[0.2em] text-sm mb-2">
            Archive
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">
            Previous Conversations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {otherEpisodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                title={episode.title}
                guest={episode.guest}
                thumbnail={episode.thumbnail}
                slug={episode.slug}
              />
            ))}

          </div>

        </motion.div>

      </section>

    </main>
  );
}