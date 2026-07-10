"use client";

import {
  BadgeCheck,
  Users,
  Mic2,
  Clock3,
  Building2,
  CalendarDays,
} from "lucide-react";

const benefits = [
  {
    icon: Building2,
    title: "Customized For Your Institution",
  },
  {
    icon: Users,
    title: "Interactive Activities",
  },
  {
    icon: Mic2,
    title: "Public Speaking Practice",
  },
  {
    icon: Clock3,
    title: "3 Hour Workshop",
  },
  {
    icon: CalendarDays,
    title: "Flexible Scheduling",
  },
  {
    icon: BadgeCheck,
    title: "Personal Follow-up",
  },
];

export default function RequestBenefits() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">

      <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
        Why Book With LearningNow?
      </p>

      <h2 className="text-3xl font-semibold mb-8">
        What You'll Get
      </h2>

      <div className="space-y-6">

        {benefits.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex items-center gap-4"
            >

              <Icon
                size={24}
                className="text-purple-400"
              />

              <span className="text-zinc-300">
                {item.title}
              </span>

            </div>

          );

        })}

      </div>

    </div>
  );
}