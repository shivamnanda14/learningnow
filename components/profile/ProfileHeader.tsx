"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, CalendarDays } from "lucide-react";
import { useRef, useState } from "react";

import {
  uploadAvatar,
  updateAvatarUrl,
} from "@/modules/authentication/services/profile.service";

type Profile = {
  id: string;
  full_name: string;
  username?: string;
  avatar_url?: string;
  email?: string;
  created_at?: string;
};

type ProfileProps = {
  profile: Profile;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
};

export default function ProfileHeader({
  profile,
  setProfile,
}: ProfileProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [uploading, setUploading] = useState(false);

  async function handleImageSelect(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    try {
      const file = e.target.files?.[0];

      if (!file) return;

      setUploading(true);

      const localPreview = URL.createObjectURL(file);

      setPreviewImage(localPreview);

      const avatarUrl = await uploadAvatar(profile.id, file);

      await updateAvatarUrl(profile.id, avatarUrl);

      setProfile((prev: any) => ({
        ...prev,
        avatar_url: avatarUrl,
      }));

      setPreviewImage(null);
    } catch (error) {
      console.error(error);
      alert("Failed to upload profile picture.");
    } finally {
      setUploading(false);
    }
  }

  const username =
    profile.username ||
    profile.email?.split("@")[0] ||
    "username";

  const joinedDate = profile.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Recently Joined";
   console.log("PROFILE DATA", profile);
console.log("AVATAR URL", profile.avatar_url);
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10">

      <div className="flex flex-col lg:flex-row gap-10 items-center">

        {/* ================= Profile Image ================= */}

        <div className="relative">

          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-zinc-700 bg-zinc-800">

            <img
  src={
    previewImage ||
    profile.avatar_url ||
    "/profile/default-avatar.png"
  }
  alt="Profile"
  className="w-full h-full object-cover"
/>

          </div>

          <button
            type="button"
            disabled={uploading}
            onClick={() => fileInputRef.current?.click()}
            className="
              absolute
              bottom-3
              right-3
              w-12
              h-12
              rounded-full
              bg-purple-600
              hover:bg-purple-500
              transition
              flex
              items-center
              justify-center
              shadow-lg
              disabled:opacity-50
            "
          >
            <Camera size={20} />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
          />

        </div>

        {/* ================= User Details ================= */}

        <div className="flex-1 text-center lg:text-left">

          <h1 className="text-4xl md:text-5xl font-bold">
            {profile.full_name}
          </h1>

          <p className="text-purple-400 mt-2 text-lg">
            @{username}
          </p>

          <p className="text-zinc-400 mt-5 max-w-2xl leading-7">
            Manage your profile, account settings and your complete
            LearningNow journey from one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-8">

            <div className="bg-black border border-zinc-800 rounded-2xl px-6 py-5 min-w-[180px]">

              <div className="flex items-center gap-2 text-zinc-500 text-sm">

                <CalendarDays size={16} />

                <span>Joined</span>

              </div>

              <h3 className="font-semibold text-lg mt-3">
                {joinedDate}
              </h3>

            </div>

            <Link
              href="/masterclass"
              className="
                bg-purple-600
                hover:bg-purple-500
                transition
                rounded-2xl
                px-8
                py-5
                font-semibold
                flex
                items-center
                justify-center
                shadow-lg
                shadow-purple-500/20
              "
            >
              Explore Masterclass
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}