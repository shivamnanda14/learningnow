"use client";

import { PlayCircle } from "lucide-react";

export default function LessonItem({
  title,
}: {
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-8 py-3 hover:bg-zinc-900">

      <PlayCircle
        size={16}
        className="text-purple-400"
      />

      <span>{title}</span>

    </div>
  );
}