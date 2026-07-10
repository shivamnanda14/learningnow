import { createClient } from "@/lib/supabase/server";

export async function getLessons(moduleId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("product_lessons")
    .select("*")
    .eq("module_id", moduleId)
    .is("section_id", null)
    .order("display_order");

  if (error) throw error;

  return data;
}

export async function getLesson(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("product_lessons")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}