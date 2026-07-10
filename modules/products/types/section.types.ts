export interface Section {
  id: string;

  module_id: string;

  title: string;

  description: string | null;

  display_order: number;

  is_published: boolean;

  created_at: string;

  updated_at: string;
}

export interface CreateSectionData {
  module_id: string;

  title: string;

  description?: string;
}