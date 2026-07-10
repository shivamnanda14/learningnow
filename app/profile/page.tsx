"use client";

import { useEffect, useRef, useState } from "react";

import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalInfoForm from "@/components/profile/PersonalInfoForm";
import AccountInfo from "@/components/profile/AccountInfo";
import AboutSection from "@/components/profile/AboutSection";
import SaveButton from "@/components/profile/SaveButton";

import { getCurrentUser } from "@/modules/authentication/services/user.service";
import {
  getProfile,
  updateProfile,
} from "@/modules/authentication/services/profile.service";

export default function ProfilePage() {
  const [profile, setProfile] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);
  const editSectionRef = useRef<HTMLDivElement>(null);

function scrollToEdit() {
  editSectionRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    try {
      setLoading(true);

      const user = await getCurrentUser();

      if (!user) {
        return;
      }

      const profileData = await getProfile(user.id);

      setProfile({
        ...profileData,
        email: user.email,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!profile) return;

    try {
      setSaving(true);

      await updateProfile(profile.id, {
        full_name: profile.full_name,
        username: profile.username,
        bio: profile.bio,
        country: profile.country,
        phone: profile.phone,
        website: profile.website,
        avatar_url: profile.avatar_url,
      });

      alert("✅ Profile updated successfully.");

      await loadProfile();
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white text-xl">
        Loading Profile...
      </main>
    );
  }

  if (!profile) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-red-500 text-xl">
        Failed to load profile.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-12 px-4">

      <div className="max-w-5xl mx-auto space-y-8">

        <ProfileHeader
  profile={profile}
  setProfile={setProfile}
  onEditClick={scrollToEdit}
/>

        <div ref={editSectionRef}>
  <PersonalInfoForm
    profile={profile}
    setProfile={setProfile}
  />
</div>

        <AccountInfo
          profile={profile}
        />

        <AboutSection
          profile={profile}
          setProfile={setProfile}
        />

        <SaveButton
          loading={saving}
          onSave={handleSave}
        />

      </div>

    </main>
  );
}