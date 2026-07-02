import { supabase } from "@/lib/supabase/client";

/* =========================
   Get Profile
========================= */

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
}

/* =========================
   Upload Avatar
========================= */

export async function uploadAvatar(
  userId: string,
  file: File
) {
  const fileExt = file.name.split(".").pop();

  const fileName = `${userId}.${fileExt}`;

  const { error } = await supabase.storage
    .from("avatars")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: true,
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

/* =========================
   Update Avatar URL
========================= */

export async function updateAvatarUrl(
  userId: string,
  avatarUrl: string
) {
  const { error } = await supabase
    .from("profiles")
    .update({
      avatar_url: avatarUrl,
    })
    .eq("id", userId);

  if (error) throw error;
}

/* =========================
   Update Profile
========================= */

export async function updateProfile(
  userId: string,
  values: {
    full_name?: string;
    username?: string;
    bio?: string;
    country?: string;
    phone?: string;
    website?: string;
    avatar_url?: string;
  }
) {
  const { error } = await supabase
    .from("profiles")
    .update(values)
    .eq("id", userId);

  if (error) throw error;
}