"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Folder,
  Plus,
} from "lucide-react";

interface ModuleItemProps {
  module: any;
}

export default function ModuleItem({
  module,
}: ModuleItemProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">

      {/* HEADER */}

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between p-4 hover:bg-zinc-900"
      >
        <div className="flex items-center gap-3">

          {expanded ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}

          <Folder
            size={18}
            className="text-purple-400"
          />

          <span className="font-semibold">
            {module.title}
          </span>

        </div>

        <span className="rounded bg-zinc-800 px-2 py-1 text-xs">

          {module.lessons.length} Lessons

        </span>

      </button>

      {/* BODY */}

      {expanded && (

        <div className="border-t border-zinc-800">

          {/* Lessons */}

          {module.lessons.length > 0 ? (

            module.lessons.map((lesson: any) => (

              <div
                key={lesson.id}
                className="border-b border-zinc-900 px-12 py-3 hover:bg-zinc-900"
              >
                ▶ {lesson.title}
              </div>

            ))

          ) : (

            <div className="px-12 py-4 text-sm text-zinc-500">

              No lessons yet

            </div>

          )}

          {/* Buttons */}

          <div className="flex gap-3 border-t border-zinc-800 p-4">

            <button className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-900">

              <Plus size={16} />

              Lesson

            </button>

            <button className="flex items-center gap-2 rounded-lg border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-900">

              <Plus size={16} />

              Section

            </button>

          </div>

        </div>

      )}

    </div>
  );
}