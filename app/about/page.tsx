"use client";

import { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import Link from "next/link";

function Counter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const controls = animate(0, to, {
      duration: 2,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [started, to]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutPage() {
  const [showStory, setShowStory] = useState(false);

  return (
    <main className="min-h-screen bg-black text-white">

{/* Hero Section */}

<section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

  <div className="grid md:grid-cols-2 gap-14 items-center">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >

      <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
        About The Founder
      </p>

      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
        Hi, I'm Shivam Nanda.
      </h1>

      <p className="text-xl text-zinc-300 mb-3">
        3rd Year CSE Student at GCE Gaya
      </p>

      <p className="text-zinc-400 text-lg leading-relaxed mb-8">
        Educator • Podcast Host • Author • Founder of LearningNow
      </p>

      <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-10">
        Helping students learn through conversations,
        communication, practical insights, and real-world experiences
        beyond traditional education.
      </p>

      <div className="flex flex-wrap gap-4">

        <Link href="/podcast">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:scale-[1.03] transition">
            Explore Podcast
          </button>
        </Link>

        <Link href="/masterclass">
          <button className="border border-purple-500 text-white px-6 py-3 rounded-xl hover:bg-purple-500/10 transition">
            Communication Masterclass
          </button>
        </Link>

        <button
          onClick={() => setShowStory(!showStory)}
          className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-purple-500 transition"
        >
          {showStory ? "Hide Story ↑" : "My Story ↓"}
        </button>

        <a
          href="https://www.linkedin.com/in/shivam-nanda-472289418/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-zinc-700 px-6 py-3 rounded-xl hover:border-purple-500 transition">
            LinkedIn
          </button>
        </a>

      </div>

    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -10,
        rotate: -1,
        scale: 1.03,
      }}
      className="flex justify-center"
    >

      <motion.img
        src="/about/shivam-nanda.jpg"
        alt="Shivam Nanda"
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          w-full
          max-w-md
          rounded-3xl
          border
          border-zinc-800
          shadow-2xl
          cursor-pointer
          hover:border-purple-500
          hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]
          transition-all
          duration-300
        "
      />

    </motion.div>

  </div>

</section>

      {/* Stats */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-semibold mb-3">
              <Counter to={4} />+
            </h3>
            <p className="text-zinc-400">
              Years Teaching
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-semibold mb-3">
              <Counter to={2000} />+
            </h3>
            <p className="text-zinc-400">
              Students Taught
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-semibold mb-3">
              <Counter to={7} />+
            </h3>
            <p className="text-zinc-400">
              Podcast Episodes
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-semibold mb-3">
              <Counter to={1} />
            </h3>
            <p className="text-zinc-400">
              Published Book
            </p>
          </div>

        </div>

      </section>

      {/* Story Section */}

      {showStory && (
        <section className="max-w-4xl mx-auto px-4 md:px-6 pb-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12"
          >

            <h2 className="text-4xl font-semibold mb-8">
              My Story
            </h2>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">

              <p>
                I started teaching while I was still a student.
                What began as an opportunity to help students gradually
                evolved into a deeper passion for education,
                communication, and personal growth.
              </p>

              <p>
                Over the years, I taught more than 2000 students and
                observed a recurring pattern. Students were learning
                subjects, but very few were learning how to communicate
                effectively, think critically, ask better questions,
                and learn from real experiences.
              </p>

              <p>
                That realization eventually led to LearningNow —
                a platform built around conversations, books,
                practical insights, and continuous learning.
              </p>

              <p>
                Today, while pursuing my B.Tech in Computer Science
                and Engineering at GCE Gaya, I continue to teach,
                host podcast conversations, write books,
                and create educational resources that help people
                grow beyond the classroom.
              </p>

            </div>

          </motion.div>

        </section>
      )}

      {/* What I Do */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

        <h2 className="text-4xl md:text-5xl font-semibold mb-12">
          What I Do
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              🎙 Podcast Host
            </h3>

            <p className="text-zinc-400">
              Conversations with experts, educators,
              creators and professionals.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              🎓 Educator
            </h3>

            <p className="text-zinc-400">
              Teaching students for more than four years.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              📖 Author
            </h3>

            <p className="text-zinc-400">
              Author of BOOK 
              "Communication Is Game,
                   Be A PRO."
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-3">
              🗣 Communication Trainer
            </h3>

            <p className="text-zinc-400">
              Helping people build confidence and clarity.
            </p>
          </div>

        </div>

      </section>

      {/* Philosophy */}

      <section className="max-w-5xl mx-auto px-4 md:px-6 py-20 text-center">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          LearningNow Philosophy
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold mb-8">
          Need → Purpose → Curiosity
        </h2>

        <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Need creates action. Purpose creates direction.
          Curiosity keeps us learning. LearningNow exists
          to encourage curiosity because curiosity is the
          starting point of growth.
        </p>

      </section>

      {/* Currently Building */}

<section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

  <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
    Currently Building
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold mb-12">
    What I'm Working On Right Now
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">

      <h3 className="text-2xl font-semibold mb-4">
        🎙 LearningNow Podcast
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Hosting meaningful conversations with educators,
        professionals, creators, politicians, doctors,
        and industry experts to help students learn from
        real experiences.
      </p>

    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">

      <h3 className="text-2xl font-semibold mb-4">
        🗣 Communication Masterclass
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Building practical communication training programs
        that help students develop confidence, clarity,
        public speaking, and real-world communication skills.
      </p>

    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">

      <h3 className="text-2xl font-semibold mb-4">
        📖 Communication Book
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Growing and improving the reach of my published book
        "Communication Is A Game, BE A BRO" to help more
        students become better communicators.
      </p>

    </div>

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition">

      <h3 className="text-2xl font-semibold mb-4">
        🤖 AI + Education Projects
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        Exploring how AI can make learning more accessible,
        personalized, and practical through tools, websites,
        and educational applications.
      </p>

    </div>

  </div>

</section>
{/* Connect With Me */}

<section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

  <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4 text-center">
    Connect With Me
  </p>

  <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
    Let's Connect
  </h2>

  <p className="text-zinc-400 text-lg text-center max-w-2xl mx-auto mb-12">
    Whether you want to discuss education, communication,
    technology, podcasts, collaborations, or simply share
    your thoughts, I'd love to hear from you.
  </p>

  <div className="grid md:grid-cols-4 gap-6">

    <a
      href="https://www.linkedin.com/in/shivam-nanda-472289418/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition group"
    >
      <h3 className="text-xl font-semibold mb-3">
        💼 LinkedIn
      </h3>

      <p className="text-zinc-400 group-hover:text-zinc-300 transition">
        Professional updates and networking.
      </p>
    </a>

    <a
      href="https://www.youtube.com/@LearningNow25"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition group"
    >
      <h3 className="text-xl font-semibold mb-3">
        🎙 YouTube
      </h3>

      <p className="text-zinc-400 group-hover:text-zinc-300 transition">
        Podcasts, conversations and learning content.
      </p>
    </a>

    <a
      href="https://www.instagram.com/learningnow25"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition group"
    >
      <h3 className="text-xl font-semibold mb-3">
        📸 Instagram
      </h3>

      <p className="text-zinc-400 group-hover:text-zinc-300 transition">
        Behind the scenes and updates.
      </p>
    </a>

    <a
      href="mailto:learningnow1411441@gmail.com"
      className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500 transition group"
    >
      <h3 className="text-xl font-semibold mb-3">
        ✉️ Email
      </h3>

      <p className="text-zinc-400 group-hover:text-zinc-300 transition break-all">
        learningnow1411441@gmail.com
      </p>
    </a>

  </div>

</section>

    </main>
  );
}