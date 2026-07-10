export interface Lesson {
  id: string;

  product_id: string;

  module_id: string;

  section_id: string | null;

  title: string;

  slug: string | null;

  description: string | null;

  lesson_type: string;

  duration: string | null;

  display_order: number;

  is_preview: boolean;

  is_downloadable: boolean;

  is_published: boolean;

  created_at: string;

  updated_at: string;
}

export interface CreateLessonData {
  product_id: string;

  module_id: string;

  section_id?: string | null;

  title: string;

  description?: string;
}