import Link from "next/link";
import { episodes } from "../../../data/episodes";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const episode = episodes.find(
    (episode) => episode.slug === slug
  );

  if (!episode) {
    return {
      title: "Episode Not Found | LearningNow",
    };
  }

  return {
    title: `${episode.title} | LearningNow Podcast`,

    description:
      episode.summary ||
      `Listen to ${episode.title} featuring ${episode.guest} on LearningNow Podcast.`,
    alternates: {
  canonical: `https://learningnow.in/podcast/${episode.slug}`,
},
    keywords: episode.keywords,

    openGraph: {
      title: `${episode.title} | LearningNow Podcast`,
      description:
        episode.summary ||
        `Listen to ${episode.title} featuring ${episode.guest}.`,
        url: `https://learningnow.in/podcast/${episode.slug}`,
      images: [
  {
    url: `https://learningnow.in${episode.thumbnail}`,
    width: 1200,
    height: 630,
    alt: episode.title,
  },
],
    },

    twitter: {
      card: "summary_large_image",
      title: `${episode.title} | LearningNow Podcast`,
      description:
        episode.summary ||
        `Listen to ${episode.title} featuring ${episode.guest}.`,
      images: [
  `https://learningnow.in${episode.thumbnail}`,
],
    },
  };
}
export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const episode = episodes.find(
    (episode) => episode.slug === slug
  );

  if (!episode) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Episode Not Found
          </h1>

          <p className="text-zinc-400 mb-8">
            The episode you are looking for does not exist.
          </p>

          <Link href="/podcast">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
              Back To Podcast
            </button>
          </Link>
        </div>
      </main>
    );
  }

  const relatedEpisodes = episodes
    .filter((ep) => ep.slug !== episode.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-12 md:pt-20">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-3">
          Episode {episode.id}
        </p>

        <p className="text-zinc-400 mb-4">
          Guest: {episode.guest}
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
          {episode.title}
        </h1>

        {episode.summary && (
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-8">
            {episode.summary}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mb-12">

          <a
            href={episode.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:scale-[1.02] transition">
              Watch On YouTube
            </button>
          </a>

          <Link href="/podcast">
            <button className="border border-zinc-700 px-8 py-4 rounded-xl hover:border-white transition">
              More Episodes
            </button>
          </Link>

        </div>

        <img
          src={episode.thumbnail}
          alt={episode.title}
          className="w-full aspect-video object-cover rounded-3xl border border-zinc-800"
        />

      </section>

      {/* Shivam Learnings */}

      {episode.shivamLearnings?.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            🧠 What Shivam Learned
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {episode.shivamLearnings.map((learning, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 transition"
              >
                <p className="text-zinc-300 leading-relaxed">
                  {learning}
                </p>
              </div>
            ))}

          </div>

        </section>
      )}

      {/* AI Learnings */}

      {episode.aiLearnings?.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            🤖 AI Learnings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {episode.aiLearnings.map((learning, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-purple-500 transition"
              >
                <p className="text-zinc-300 leading-relaxed">
                  {learning}
                </p>
              </div>
            ))}

          </div>

        </section>
      )}

      {/* Action Items */}

      {episode.actionItems?.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            ✅ Action Items
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {episode.actionItems.map((action, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-green-500 transition"
              >
                <p className="text-zinc-300 leading-relaxed">
                  {action}
                </p>
              </div>
            ))}

          </div>

        </section>
      )}

      {/* Continue Learning */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">

        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Continue Learning
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {relatedEpisodes.map((ep) => (
            <Link
              key={ep.id}
              href={`/podcast/${ep.slug}`}
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-purple-500 transition cursor-pointer">

                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full aspect-video object-cover"
                />

                <div className="p-5">

                  <p className="text-sm text-zinc-500 mb-2">
                    {ep.guest}
                  </p>

                  <h3 className="font-semibold leading-snug">
                    {ep.title}
                  </h3>

                </div>

              </div>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}