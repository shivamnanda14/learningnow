"use client";

import OnlineCourseCard from "./OnlineCourseCard";
import OfflineWorkshopCard from "./OfflineWorkshopCard";

export default function LearningPaths() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">

      <div className="text-center mb-14">

        <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
          Learning Paths
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
          Choose Your Learning Path
        </h2>

        <p className="max-w-3xl mx-auto text-zinc-400 text-lg leading-relaxed">
          Learn communication at your own pace with the online
          masterclass or invite me to your institution for an
          interactive offline workshop.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">

        <OnlineCourseCard />

        <OfflineWorkshopCard />

      </div>

    </section>
  );
}