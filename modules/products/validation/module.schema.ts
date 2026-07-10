import { z } from "zod";

export const createModuleSchema = z.object({
  product_id: z.string().uuid(),

  title: z
    .string()
    .trim()
    .min(3, "Module title is required")
    .max(100),

  description: z
    .string()
    .trim()
    .optional(),
});

export type CreateModuleValues =
  z.infer<typeof createModuleSchema>;