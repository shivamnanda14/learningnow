import Link from "next/link";
export default function AboutLearningNow() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12">

          <p className="text-purple-400 uppercase tracking-wider mb-4 font-semibold">
            About LearningNow
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Learn From Real Conversations.
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            LearningNow is a platform created by Shivam Nanda to help
            students learn through meaningful conversations, practical
            communication training and real-world insights.
          </p>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
            Through podcasts, books and communication masterclasses,
            the goal is simple: help people think better, communicate
            clearly and grow with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-black rounded-2xl p-5 text-center border border-zinc-800">
              🎙️
              <p className="mt-2 font-semibold">
                Podcast Host
              </p>
            </div>

            <div className="bg-black rounded-2xl p-5 text-center border border-zinc-800">
              📖
              <p className="mt-2 font-semibold">
                Author
              </p>
            </div>

            <div className="bg-black rounded-2xl p-5 text-center border border-zinc-800">
              🎓
              <p className="mt-2 font-semibold">
                Educator
              </p>
              <Link href="/about">
  <button className="mt-8 border border-zinc-700 px-6 py-3 rounded-xl hover:border-purple-500 transition">
    Learn More About Shivam
  </button>
</Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}