"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type PathCardProps = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
};

export default function PathCard({
  icon,
  title,
  description,
  buttonText,
  href,
}: PathCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -6,
      }}
      className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-600 rounded-3xl p-8 transition-all duration-300 h-full flex flex-col backdrop-blur-sm"
    >

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
        className="text-5xl mb-5"
      >
        {icon}
      </motion.div>

      <h3 className="text-2xl font-semibold tracking-tight mb-3">
        {title}
      </h3>

      <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      <Link href={href}>
        <button className="w-full bg-white hover:bg-zinc-200 text-black px-5 py-3 rounded-xl font-medium transition-all duration-300">
          {buttonText}
        </button>
      </Link>

    </motion.div>
  );
}