import { createClient } from "@/lib/supabase/server";

export async function getModules(productId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("product_modules")
    .select("*")
    .eq("product_id", productId)
    .order("display_order");

  if (error) throw error;

  return data;
}

export async function getModule(moduleId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("product_modules")
    .select("*")
    .eq("id", moduleId)
    .single();

  if (error) throw error;

  return data;
}