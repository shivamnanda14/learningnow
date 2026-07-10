"use client";

import {
  CalendarDays,
  Mail,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

type Profile = {
  email?: string;
  created_at?: string;
  is_admin?: boolean;
};

type Props = {
  profile: Profile;
};

export default function AccountInfo({ profile }: Props) {
  const joinedDate = profile.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Unknown";

  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8">

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Account Information
        </h2>

        <p className="text-zinc-400 mt-2">
          Details related to your LearningNow account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Email */}

        <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-5">

          <div className="flex items-center gap-2 text-purple-400 mb-4">

            <Mail size={18} />

            <span>Email</span>

          </div>

          <p className="break-all text-zinc-200">

            {profile.email}

          </p>

          <p className="text-xs text-zinc-500 mt-3">

            Your login email.

          </p>

        </div>

        {/* Joined */}

        <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-5">

          <div className="flex items-center gap-2 text-purple-400 mb-4">

            <CalendarDays size={18} />

            <span>Joined</span>

          </div>

          <p className="text-zinc-200">

            {joinedDate}

          </p>

          <p className="text-xs text-zinc-500 mt-3">

            Account creation date.

          </p>

        </div>

        {/* Account */}

        <div className="bg-zinc-950 rounded-2xl border border-zinc-800 p-5">

          <div className="flex items-center gap-2 text-purple-400 mb-4">

            <ShieldCheck size={18} />

            <span>Account</span>

          </div>

          <div className="inline-flex items-center gap-4 px-5 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-purple-300">

            <BadgeCheck size={16} />

            {profile.is_admin ? "Administrator" : "Free Member"}

          </div>

          <p className="text-xs text-zinc-500 mt-3">

            Upgrade anytime to unlock premium features.

          </p>

        </div>

      </div>

    </section>
  );
}