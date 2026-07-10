"use client";

import CurriculumTree from "./CurriculumTree";
import EditorPanel from "./editor/EditorPanel";

interface CourseBuilderProps {
  productId: string;
  curriculum: any[];
}

export default function CourseBuilder({
  productId,
  curriculum,
}: CourseBuilderProps) {
  return (
    <div className="grid h-[calc(100vh-170px)] grid-cols-12 overflow-hidden rounded-xl border border-zinc-800">

      <div className="col-span-4 overflow-y-auto border-r border-zinc-800">

        <CurriculumTree
          productId={productId}
          curriculum={curriculum}
        />

      </div>

      <div className="col-span-8 overflow-y-auto">

        <EditorPanel />

      </div>

    </div>
  );
}