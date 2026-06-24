"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3">

        <div className="flex justify-between items-center">

          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <img
              src="/logo/learningnow-logo.png"
              alt="LearningNow Logo"
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />

            <div className="leading-tight">
              <h2 className="text-xl md:text-xl font-semibold text-white tracking-tight">
                LearningNow
              </h2>

              <p className="text-xs md:text-sm text-zinc-500">
                by Shivam Nanda
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/podcast"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Podcast
            </Link>

            <Link
              href="/communication"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Communication
            </Link>

            <Link
              href="/book"
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              Book
            </Link>
          <Link
  href="/about"
  className="hover:text-white transition"
>
  About
</Link>
            <a
              href="https://www.youtube.com/@LearningNow25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]"
            >
              Subscribe
            </a>

          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden mt-5 border-t border-zinc-800 pt-5 flex flex-col gap-5">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/podcast"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              Podcast
            </Link>

            <Link
              href="/communication"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              Communication
            </Link>

            <Link
              href="/book"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              Book
            </Link>

            <a
              href="https://www.youtube.com/@LearningNow25"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-200 text-black px-4 py-3 rounded-xl font-medium text-center transition-all duration-300"
            >
              Subscribe
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}