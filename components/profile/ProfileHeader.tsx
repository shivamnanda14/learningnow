"use client";

import { useRef, useState } from "react";

import {
  Camera,
  CalendarDays,
  Globe,
  MapPin,
} from "lucide-react";

import {
  uploadAvatar,
  updateAvatarUrl,
} from "@/modules/authentication/services/profile.service";

type Props = {
  profile: any;
  setProfile: React.Dispatch<React.SetStateAction<any>>;
  onEditClick: () => void;
};

export default function ProfileHeader({
  profile,
  setProfile,
  onEditClick,
}: Props) {

  const fileInputRef =
    useRef<HTMLInputElement>(null);

  const [uploading, setUploading] =
    useState(false);

  const [previewImage, setPreviewImage] =
    useState<string | null>(null);

  async function handleImageSelect(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    try {

      const file = e.target.files?.[0];

      if (!file) return;

      setUploading(true);

      const localPreview =
        URL.createObjectURL(file);

      setPreviewImage(localPreview);

      const avatarUrl =
        await uploadAvatar(profile.id, file);

      await updateAvatarUrl(
        profile.id,
        avatarUrl
      );

      setProfile((prev: any) => ({
        ...prev,
        avatar_url: avatarUrl,
      }));

      setPreviewImage(null);

    } catch (err) {

      console.error(err);

      alert(
        "Failed to upload profile picture."
      );

    } finally {

      setUploading(false);

    }
  }

  const imageSrc =
    previewImage ||
    profile.avatar_url ||
    "/profile/default-avatar.png";

  const username =
    profile.username ||
    profile.email?.split("@")[0] ||
    "username";

  const joined =
    profile.created_at
      ? new Date(
          profile.created_at
        ).toLocaleDateString(
          "en-IN",
          {
            month: "long",
            year: "numeric",
          }
        )
      : "Recently Joined";

  return (

    <section
      className="
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-950
        shadow-2xl
      "
    >

      {/* ================= Banner ================= */}

      <div className="relative h-56 md:h-72 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-violet-600 to-zinc-900" />

        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)",
            backgroundSize:
              "42px 42px",
          }}
        />

      </div>

      {/* ================= Content ================= */}

      <div
        className="
          px-8
          md:px-12
          py-10
        "
      >

        <div
          className="
            flex
            flex-col-reverse
            lg:flex-row
            items-start
            gap-12
          "
        >

          {/* LEFT */}

          <div className="flex-1">

            <h1
              className="
                text-4xl
                md:text-5xl
                font-bold
                tracking-tight
              "
            >
              {profile.full_name}
            </h1>

            <p
              className="
                mt-2
                text-lg
                text-purple-400
              "
            >
              @{username}
            </p>

            <p
              className="
                mt-6
                max-w-3xl
                text-zinc-400
                leading-8
                text-[17px]
              "
            >
              {profile.bio?.trim()
                ? profile.bio
                : "Tell people about yourself. Share your journey, interests and what you're building."}
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >              <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3">

                <MapPin
                  size={18}
                  className="text-purple-400"
                />

                <span className="text-zinc-300">
                  {profile.country || "Not Specified"}
                </span>

              </div>

              {profile.website && (

                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-zinc-800
                    bg-zinc-900
                    px-5
                    py-3
                    hover:border-purple-500
                    transition
                  "
                >

                  <Globe
                    size={18}
                    className="text-purple-400"
                  />

                  <span className="text-zinc-300 truncate max-w-[180px]">

                    {profile.website
                      .replace("https://", "")
                      .replace("http://", "")}

                  </span>

                </a>

              )}

              <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-5 py-3">

                <CalendarDays
                  size={18}
                  className="text-purple-400"
                />

                <span className="text-zinc-300">

                  Joined {joined}

                </span>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button
              onClick={onEditClick}
                className="
                  rounded-xl
                  bg-purple-600
                  px-6
                  py-3
                  font-semibold
                  hover:bg-purple-500
                  transition
                "
              >
                Edit Profile
              </button>

              <a
                href="/masterclass"
                className="
                  rounded-xl
                  border
                  border-zinc-700
                  px-6
                  py-3
                  font-semibold
                  hover:border-purple-500
                  transition
                "
              >
                Explore Masterclass
              </a>

            </div>

          </div>

          {/* ================= RIGHT ================= */}

          <div
            className="
              w-full
              lg:w-auto
              flex
              justify-center
              lg:justify-end
            "
          >

            <div className="relative">

              <div
                onClick={() =>
                  fileInputRef.current?.click()
                }
               className="
group
relative
w-40
h-40
lg:w-44
lg:h-44
rounded-full
overflow-hidden
border-[5px]
border-zinc-800
bg-zinc-900
shadow-2xl
cursor-pointer
"
              >

                <img
                  src={imageSrc}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                <div
                  className={`
                    absolute
                    inset-0
                    bg-black/60
                    flex
                    flex-col
                    items-center
                    justify-center
                    transition
                    ${
                      uploading
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                >

                  <Camera size={30} />

                  <span className="mt-3 font-medium">

                    {uploading
                      ? "Uploading..."
                      : "Change Photo"}

                  </span>

                </div>

              </div>

              <input
                ref={fileInputRef}
                hidden
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
              />            </div>

          </div>

        </div>

      </div>

    </section>

  );
}