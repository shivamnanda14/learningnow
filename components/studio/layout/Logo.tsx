import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/studio"
      className="flex items-center gap-3"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-600 text-lg font-bold text-white">
        LN
      </div>

      <div className="leading-tight">
        <p className="text-lg font-bold text-white">
          LearningNow
        </p>

        <p className="text-xs text-zinc-500">
          Studio
        </p>
      </div>
    </Link>
  );
}