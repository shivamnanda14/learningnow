"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";

import {
  createLessonSchema,
  CreateLessonValues,
} from "../validation/lesson.schema";

export async function createLessonAction(
  values: CreateLessonValues
) {
  const validated =
    createLessonSchema.parse(values);

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
    .from("product_lessons")
    .insert({
      product_id: validated.product_id,
      module_id: validated.module_id,
      section_id: validated.section_id ?? null,
      title: validated.title,
      description: validated.description ?? null,
    });

  if (error) throw error;

  revalidatePath("/", "layout");
}