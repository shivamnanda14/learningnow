"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

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

export default function BookPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero Section */}

<section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

  <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
        Published Book
      </p>

      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
        Communication Is A Game.
        <br />
        Be A Pro.
      </h1>

      <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">
        A practical communication framework for students,
        teachers, professionals, and creators who want
        to communicate with confidence, clarity, and influence.
      </p>

      <div className="space-y-3 text-zinc-300 mb-10">

        <p>✓ Published on Amazon</p>
        <p>✓ Built from 4+ years of teaching and mentoring experience</p>
        <p>✓ Inspired by real podcast conversations</p>
        <p>✓ Practical frameworks and exercises</p>

      </div>

      <div className="flex flex-col sm:flex-row gap-4">

        <a
          href="https://www.amazon.in/Communication-Game-Pro-Structured-Real-World/dp/9357808647/ref=tmm_pap_swatch_0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
            Buy On Amazon
          </button>
        </a>

        <a
          href="/sample/communication-sample.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-zinc-700 hover:border-purple-500 px-8 py-4 rounded-xl transition-all duration-300">
            Read Sample
          </button>
        </a>

      </div>

    </motion.div>

    {/* Book Covers */}

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="flex justify-center lg:justify-end"
    >

      <div className="flex gap-4 md:gap-6 items-center">

        <motion.img
          whileHover={{
            rotate: -3,
            y: -12,
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          src="/book/communication-is-a-skill.jpg"
          alt="Front Cover"
          className="w-40 sm:w-48 md:w-56 xl:w-64 rounded-3xl border border-zinc-800 shadow-2xl cursor-pointer"
        />

        <motion.img
          whileHover={{
            rotate: 3,
            y: -12,
            scale: 1.05,
          }}
          transition={{ duration: 0.3 }}
          src="/book/communication-is-a-skill-back.jpg"
          alt="Back Cover"
          className="w-40 sm:w-48 md:w-56 xl:w-64 rounded-3xl border border-zinc-800 shadow-2xl cursor-pointer"
        />

      </div>

    </motion.div>

  </div>

</section>
      {/* Why This Book Exists */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Why This Book Exists
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-10">
          Communication Is Rarely Taught.
        </h2>

        <div className="max-w-4xl">

          <p className="text-zinc-300 text-lg leading-relaxed">
            For years, I worked with students, taught in classrooms,
            hosted podcast conversations, and observed one common problem:
            people are taught subjects, but very few are taught how to
            communicate effectively.
          </p>

          <p className="text-zinc-400 text-lg leading-relaxed mt-6">
            This book brings together lessons from teaching,
            public speaking, communication training,
            content creation, and real-world conversations
            into a practical framework that anyone can apply.
          </p>

        </div>

      </section>

      {/* Credibility */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

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
              <Counter to={7} />+
            </h3>

            <p className="text-zinc-400">
              Podcast Episodes
            </p>
          </div>          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-semibold mb-3">
              <Counter to={1} />
            </h3>

            <p className="text-zinc-400">
              Published Book
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

        </div>

      </section>

      {/* What You'll Learn */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Inside The Book
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          What You'll Learn
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              Confidence
            </h3>

            <p className="text-zinc-400">
              Learn how confidence is built and strengthened through action.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              Communication Systems
            </h3>

            <p className="text-zinc-400">
              Practical frameworks for conversations, interviews,
              networking and relationship building.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              Public Speaking
            </h3>

            <p className="text-zinc-400">
              Learn to present ideas clearly, confidently and persuasively.
            </p>
          </motion.div>

        </div>

      </section>

      {/* Availability */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-20">

        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 md:p-14">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Available Online
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
            Get Your Copy Today
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-black border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-2">
                Amazon
              </h3>

              <p className="text-green-400">
                Live Now
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-black border border-zinc-800 rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-2">
                Flipkart
              </h3>

              <p className="text-zinc-400">
                Coming Soon
              </p>
            </motion.div>

          </div>

          <a
            href="https://www.amazon.in/Communication-Game-Pro-Structured-Real-World/dp/9357808647/ref=tmm_pap_swatch_0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-zinc-200 text-black px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Buy On Amazon
            </button>
          </a>

        </div>

      </section>

      {/* Final CTA */}

      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-24">

        <div className="bg-gradient-to-r from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 md:p-16 text-center">

          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            Start Improving Today
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Communication Changes Everything.
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
            Communication is not a gift. It is a skill.
            And like every skill, it can be learned,
            practiced and mastered.
          </p>

          <a
            href="https://www.amazon.in/Communication-Game-Pro-Structured-Real-World/dp/9357808647/ref=tmm_pap_swatch_0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white hover:bg-zinc-200 text-black px-10 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]">
              Get The Book
            </button>
          </a>

        </div>

      </section>

    </main>
  );
}