export interface Module {

  id: string;

  product_id: string;

  title: string;

  description: string | null;

  thumbnail_url: string | null;

  estimated_duration: string | null;

  display_order: number;

  is_free: boolean;

  is_published: boolean;

  created_at: string;

  updated_at: string;

}

export interface CreateModuleData {

  product_id: string;

  title: string;

  description?: string;

}