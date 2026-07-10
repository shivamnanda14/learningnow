export interface Product {
  id: string;

  title: string;

  slug: string;

  short_description: string | null;

  description: string | null;

  thumbnail_url: string | null;

  category: string;

  product_type: string;

  language: string | null;

  level: string | null;

  duration: string | null;

  price: number;

  discount_price: number |null;

  featured: boolean;

  display_order: number | null;

  is_published: boolean;

  instructor_id: string | null;

  created_at: string;

  updated_at: string;
}

export interface ProductFormValues {
  title: string;

  slug: string;

  short_description: string;

  description: string;

  thumbnail_url: string;

  category: string;

  product_type: string;

  language: string;

  level: string;

  duration: string;

  price: number;

  discount_price: number;

  featured: boolean;

  is_published: boolean;
}