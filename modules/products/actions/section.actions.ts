"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import {
  createSectionSchema,
  CreateSectionValues,
} from "../validation/section.schema";

export async function createSectionAction(
  values: CreateSectionValues
) {
  const validated =
    createSectionSchema.parse(values);

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("product_sections")
    .insert({
      module_id: validated.module_id,
      title: validated.title,
      description: validated.description ?? null,
    });

  if (error) {
    throw error;
  }

  revalidatePath("/", "layout");
}