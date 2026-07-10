"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/lib/supabase/server";
import { productSchema } from "../validation/product.schema";

export async function createProductAction(formData: FormData) {
  const supabase = await createClient();

  // ===========================
  // AUTH
  // ===========================

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  console.log("\n========== CREATE PRODUCT ==========");
  console.log("USER ERROR:", userError);
  console.log("USER:", user);

  if (!user) {
    throw new Error("Unauthorized");
  }

  // ===========================
  // PROFILE
  // ===========================

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, role")
    .eq("id", user.id)
    .single();

  console.log("PROFILE:", profile);
  console.log("PROFILE ERROR:", profileError);

  if (!profile) {
    throw new Error("Profile not found.");
  }

  if (profile.role !== "admin") {
    throw new Error("Only admins can create products.");
  }

  // ===========================
  // VALIDATION
  // ===========================

  const values = productSchema.parse({
    title: formData.get("title"),
    slug: formData.get("slug"),
    short_description: formData.get("short_description"),
    description: formData.get("description"),
    thumbnail_url: "",
    category: formData.get("category"),
    product_type: formData.get("product_type"),
    language: formData.get("language"),
    level: formData.get("level"),
    duration: formData.get("duration"),
    price: Number(formData.get("price")),
    discount_price: Number(formData.get("discount_price") || 0),
    featured: formData.get("featured") === "true",
    is_published: formData.get("is_published") === "true",
  });

  console.log("VALIDATED VALUES:", values);

  // ===========================
  // INSERT PAYLOAD
  // ===========================

  const payload = {
    ...values,
    instructor_id: profile.id,
  };

  console.log("INSERT PAYLOAD:");
  console.dir(payload, { depth: null });

  const { data, error } = await supabase
    .from("products")
    .insert(payload)
    .select()
    .single();

  console.log("INSERT DATA:");
  console.dir(data, { depth: null });

  console.log("INSERT ERROR:");
  console.dir(error, { depth: null });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/studio/products");

  return data;
}