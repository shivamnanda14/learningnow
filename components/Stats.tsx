"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({
  from = 0,
  to,
}: {
  from?: number;
  to: number;
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [from, to, started]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
            LearningNow in Numbers
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Building Through Curiosity
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.7 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center"
          >
            <h3 className="text-5xl md:text-6xl font-semibold mb-3">
              <Counter to={7} />+
            </h3>

            <p className="text-zinc-400">
              Podcast Episodes
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center"
          >
            <h3 className="text-5xl md:text-6xl font-semibold mb-3">
              <Counter to={10} />+
            </h3>

            <p className="text-zinc-400">
              Hours of Conversations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center"
          >
            <h3 className="text-5xl md:text-6xl font-semibold mb-3">
              <Counter to={4} />+
            </h3>

            <p className="text-zinc-400">
              Fields Represented
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}