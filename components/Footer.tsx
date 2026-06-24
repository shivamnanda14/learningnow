import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">

        <h3 className="text-xl font-bold mb-2">
          LearningNow
        </h3>

        <p className="text-gray-400 mb-6">
          Learn Communication. Learn From Real Conversations.
        </p>

        <div className="flex flex-wrap gap-6 text-gray-400">

          <Link href="/" className="hover:text-white transition">
            Home
          </Link>

          <Link href="/podcast" className="hover:text-white transition">
            Podcast
          </Link>

          <Link href="/communication" className="hover:text-white transition">
            Communication
          </Link>

          <Link href="/book" className="hover:text-white transition">
            Book
          </Link>
          <Link href="/about" className="hover:text-white transition">
  About
</Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-6">

          <a
            href="https://www.youtube.com/@LearningNow25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/learningnow25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-nanda-472289418/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
          

        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800">

          <p className="text-sm text-gray-500">
            © 2026 Shivam Nanda. All rights reserved.
          </p>

          <p className="text-xs text-gray-600 mt-2">
            Built with curiosity, conversations, and continuous learning.
          </p>

        </div>

      </div>
    </footer>
  );
}