"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import {
  createModuleSchema,
  CreateModuleValues,
} from "../validation/module.schema";

export async function createModuleAction(
  values: CreateModuleValues
) {
  const validated = createModuleSchema.parse(values);

  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", (await supabase.auth.getUser()).data.user?.id)
    .single();

  if (!profile || profile.role !== "admin") {
    throw new Error("Unauthorized");
  }

  const { error } = await supabase
    .from("product_modules")
    .insert({
      product_id: validated.product_id,
      title: validated.title,
      description: validated.description ?? null,
    });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath(
    `/studio/products/${validated.product_id}/modules`
  );

  return {
    success: true,
  };
}