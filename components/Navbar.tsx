"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import NavbarGuest from "./NavbarGuest";
import NavbarUser from "./NavbarUser";
import { getCurrentUser } from "@/modules/authentication/services/user.service";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const user = await getCurrentUser();
      setLoggedIn(!!user);
    }

    checkUser();
  }, []);

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
              <h2 className="text-xl font-semibold text-white tracking-tight">
                LearningNow
              </h2>

              <p className="text-xs md:text-sm text-zinc-500">
                by Shivam Nanda
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/podcast"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Podcast
            </Link>

            <Link
              href="/communication"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Communication
            </Link>

            <Link
              href="/book"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Book
            </Link>

            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>

            {loggedIn ? <NavbarUser /> : <NavbarGuest />}

          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

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

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-400 hover:text-white"
            >
              About
            </Link>

            {loggedIn ? <NavbarUser /> : <NavbarGuest />}

          </div>
        )}

      </div>
    </nav>
  );
}