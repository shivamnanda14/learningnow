import { createClient } from "@/lib/supabase/server";
import { StudioUser } from "../types/studio.types";

export async function getCurrentStudioUser(): Promise<StudioUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("id, full_name, username, role")
    .eq("id", user.id)
    .single();

  if (error || !data) return null;

  return data as StudioUser;
}