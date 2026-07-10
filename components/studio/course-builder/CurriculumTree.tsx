"use client";

import { useState } from "react";

import ModuleItem from "./ModuleItem";
import CreateModuleDialog from "./dialogs/CreateModuleDialog";

interface CurriculumTreeProps {
  productId: string;
  curriculum: any[];
}

export default function CurriculumTree({
  productId,
  curriculum,
}: CurriculumTreeProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="p-6">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold">
              Curriculum
            </h2>

            <p className="text-sm text-zinc-500">
              Organize your course
            </p>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="rounded-lg bg-purple-600 px-4 py-2 font-medium hover:bg-purple-700"
          >
            + Module
          </button>

        </div>

        {curriculum.length === 0 ? (

          <div className="rounded-xl border border-dashed border-zinc-700 p-12 text-center text-zinc-500">

            No modules yet.

          </div>

        ) : (

          <div className="space-y-4">

            {curriculum.map((module) => (

              <ModuleItem
                key={module.id}
                module={module}
              />

            ))}

          </div>

        )}

      </div>

      <CreateModuleDialog
        open={open}
        onOpenChange={setOpen}
        productId={productId}
      />
    </>
  );
}