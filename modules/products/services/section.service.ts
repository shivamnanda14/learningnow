import { createClient } from "@/lib/supabase/server";

export async function getSections(moduleId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("product_sections")
    .select("*")
    .eq("module_id", moduleId)
    .order("display_order");

  if (error) {
    throw error;
  }

  return data;
}

export async function getSection(sectionId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("product_sections")
    .select("*")
    .eq("id", sectionId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}