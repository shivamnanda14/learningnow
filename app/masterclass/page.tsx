"use client";

import { motion } from "framer-motion";

export default function MasterclassPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            LearningNow Masterclass
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
            Communication Is A Game.
            <br />
            BE A PRO.
          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
            A practical communication masterclass designed for
            students, teachers, professionals, and creators who
            want to speak with confidence, clarity, and influence.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
              <p className="text-zinc-500 text-sm mb-1">
                Duration
              </p>

              <p className="font-semibold">
                3 Hours
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
              <p className="text-zinc-500 text-sm mb-1">
                Mode
              </p>

              <p className="font-semibold">
                Offline
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4">
              <p className="text-zinc-500 text-sm mb-1">
                Launch Offer
              </p>

              <p className="font-semibold text-green-400">
                ₹199/person
              </p>
            </div>

          </div>

          <a
            href="https://forms.gle/A591uqvcktQ28Bqm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Apply For Masterclass
            </button>
          </a>

        </motion.div>

      </section>

      {/* Pricing */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-8 md:p-12"
        >

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Limited Time Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Launch Pricing
          </h2>

          <div className="flex items-center gap-4 mb-6">

            <span className="text-zinc-500 line-through text-2xl">
              ₹399
            </span>

            <span className="text-5xl font-semibold text-green-400">
              ₹199
            </span>

          </div>

          <p className="text-zinc-400 text-lg">
            Get 50% off during the launch period.
          </p>

        </motion.div>

      </section>

      {/* What You'll Learn */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Curriculum
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          What You'll Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Communication Mindset",
            "Confidence Building Framework",
            "Voice & Presence Training",
            "Storytelling Systems",
            "Public Speaking Techniques",
            "Everyday Communication Skills",
          ].map((item) => (
            <div
              key={item}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* Final CTA */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready To Improve Your Communication?
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Join the LearningNow Communication Masterclass and
            start building confidence, clarity, and influence.
          </p>

          <a
            href="https://forms.gle/A591uqvcktQ28Bqm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Register Now
            </button>
          </a>

        </motion.div>

      </section>

    </main>
  );
}