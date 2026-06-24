"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CommunicationPage() {
  const learnings = [
    "Communication Mindset",
    "Confidence Building",
    "Voice & Presence",
    "Storytelling",
    "Public Speaking",
    "Everyday Communication",
  ];

  const audience = [
    "School Students",
    "College Students",
    "Job Seekers",
    "Content Creators",
  ];

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
            Communication Training
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
            Master Communication.
            <br />
            Build Confidence.
            <br />
            Speak With Clarity.
          </h1>

          <p className="max-w-3xl text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
            From classroom discussions to interviews,
            presentations, meetings, and everyday conversations,
            learn communication skills that create real-world impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <Link href="/masterclass">
              <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
                Join Masterclass
              </button>
            </Link>

            <Link href="/book">
              <button className="border border-zinc-700 hover:border-white px-8 py-4 rounded-xl font-medium transition-all duration-300">
                Explore Book
              </button>
            </Link>

          </div>

        </motion.div>

      </section>

{/* What You'll Learn */}

<section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >

    <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
      Curriculum
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
      What You'll Learn
    </h2>

  </motion.div>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "🧠 Communication Mindset",
        description:
          "Learn how effective communicators think, organize ideas, and approach conversations with clarity and purpose.",
      },
      {
        title: "🔥 Confidence Building",
        description:
          "Build genuine confidence through practical exercises that reduce fear, hesitation, and self-doubt.",
      },
      {
        title: "🎤 Voice & Presence",
        description:
          "Improve your voice, tone, body language, and presence so people naturally pay attention when you speak.",
      },
      {
        title: "📖 Storytelling",
        description:
          "Master the art of turning experiences and ideas into stories that engage, influence, and inspire others.",
      },
      {
        title: "🎯 Public Speaking",
        description:
          "Learn proven techniques for speeches, presentations, interviews, and speaking in front of groups.",
      },
      {
        title: "🤝 Everyday Communication",
        description:
          "Become better at conversations, networking, relationship-building, and professional interactions.",
      },
    ].map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
        }}
        whileHover={{ y: -4 }}
        className="bg-zinc-900/70 border border-zinc-800 hover:border-purple-500 rounded-3xl p-8"
      >
        <h3 className="text-xl font-semibold mb-4">
          {item.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    ))}

  </div>

</section>


{/* Perfect For */}

<section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >

    <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
      Who Benefits Most
    </p>

    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
      Built For Ambitious Learners
    </h2>

    <p className="text-zinc-400 text-lg max-w-3xl mb-12">
      Whether you're preparing for interviews, improving confidence,
      building a personal brand, or becoming a better communicator,
      this masterclass is designed for people who want practical growth.
    </p>

  </motion.div>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      {
        icon: "🎓",
        title: "Students",
        description:
          "Speak confidently in classrooms, interviews, presentations, and group discussions.",
      },
      {
        icon: "💼",
        title: "Job Seekers",
        description:
          "Improve communication skills required for placements, interviews, and professional networking.",
      },
      {
        icon: "🎥",
        title: "Content Creators",
        description:
          "Learn storytelling, audience engagement, camera confidence, and speaking clarity.",
      },
      {
        icon: "🚀",
        title: "Future Leaders",
        description:
          "Develop influence, presence, and communication skills that help you stand out in any field.",
      },
    ].map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        whileHover={{ y: -4 }}
        className="bg-zinc-900/70 border border-zinc-800 hover:border-purple-500 rounded-3xl p-8"
      >
        <div className="text-3xl mb-4">
          {item.icon}
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          {item.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed">
          {item.description}
        </p>
      </motion.div>
    ))}

  </div>

</section>

      {/* Book CTA */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 md:p-14">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Recommended Reading
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Communication Is A Game.
            <br />

            Be A Pro.
          </h2>

          <p className="text-zinc-400 text-lg max-w-3xl mb-8">
            Learn the frameworks, exercises, and systems behind the
            LearningNow Communication Masterclass.
          </p>

          <Link href="/book">
            <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Explore Book
            </button>
          </Link>

        </div>

      </section>

      {/* Free Resources */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Resources
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          Free Resources
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Communication Checklist
            </h3>

            <p className="text-zinc-400">
              Coming Soon
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              Confidence Worksheet
            </h3>

            <p className="text-zinc-400">
              Coming Soon
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              30-Day Practice Guide
            </h3>

            <p className="text-zinc-400">
              Coming Soon
            </p>
          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 md:p-16 text-center">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Next Step
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready To Improve Your Communication?
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Join the LearningNow Communication Masterclass and start
            building confidence, clarity, and influence.
          </p>

          <Link href="/masterclass">
            <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Join Masterclass
            </button>
          </Link>

        </div>

      </section>

    </main>
  );
}