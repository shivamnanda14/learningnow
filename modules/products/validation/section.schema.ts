import { z } from "zod";

export const createSectionSchema = z.object({
  module_id: z.string().uuid(),

  title: z
    .string()
    .trim()
    .min(3, "Section title is required")
    .max(100),

  description: z
    .string()
    .trim()
    .optional(),
});

export type CreateSectionValues =
  z.infer<typeof createSectionSchema>;