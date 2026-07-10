import { createClient } from "@/lib/supabase/server";

export async function getCurriculum(productId: string) {
  const supabase = await createClient();

  // Fetch everything in parallel
  const [
    { data: modules, error: modulesError },
    { data: sections, error: sectionsError },
    { data: lessons, error: lessonsError },
  ] = await Promise.all([
    supabase
      .from("product_modules")
      .select("*")
      .eq("product_id", productId)
      .order("display_order"),

    supabase
      .from("product_sections")
      .select("*")
      .order("display_order"),

    supabase
      .from("product_lessons")
      .select("*")
      .eq("product_id", productId)
      .order("display_order"),
  ]);

  if (modulesError) throw modulesError;
  if (sectionsError) throw sectionsError;
  if (lessonsError) throw lessonsError;

  const curriculum = modules.map((module) => ({
    ...module,

    lessons: lessons.filter(
      (lesson) =>
        lesson.module_id === module.id &&
        lesson.section_id === null
    ),

    sections: sections
      .filter((section) => section.module_id === module.id)
      .map((section) => ({
        ...section,

        lessons: lessons.filter(
          (lesson) => lesson.section_id === section.id
        ),
      })),
  }));

  return curriculum;
}