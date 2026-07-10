import { z } from "zod";

export const createLessonSchema = z.object({
  product_id: z.string().uuid(),

  module_id: z.string().uuid(),

  section_id: z.string().uuid().nullable().optional(),

  title: z
    .string()
    .trim()
    .min(3, "Lesson title is required")
    .max(120),

  description: z
    .string()
    .trim()
    .optional(),
});

export type CreateLessonValues =
  z.infer<typeof createLessonSchema>;