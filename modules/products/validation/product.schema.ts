import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string()
    .min(3, "Title must contain at least 3 characters")
    .max(150),

  slug: z
    .string()
    .min(3)
    .max(150),

  short_description: z
    .string()
    .max(300)
    .optional(),

  description: z
    .string()
    .optional(),

  thumbnail_url: z
    .string()
    .optional(),

  category: z
    .string()
    .min(1, "Category is required"),

  product_type: z
    .string()
    .min(1, "Product type is required"),

  language: z
    .string()
    .optional(),

  level: z
    .string()
    .optional(),

  duration: z
    .string()
    .optional(),

  price: z
    .coerce
    .number()
    .min(0),

  discount_price: z
    .coerce
    .number()
    .min(0)
    .optional(),

  featured: z.boolean(),

  is_published: z.boolean(),
});

export type ProductSchema = z.infer<typeof productSchema>;