"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  productSchema,
  ProductSchema,
} from "../validation/product.schema";

export function useProductForm() {
  const defaultValues = useMemo<ProductSchema>(
    () => ({
      title: "",
      slug: "",
      short_description: "",
      description: "",
      thumbnail_url: "",
      category: "",
      product_type: "",
      language: "English",
      level: "Beginner",
      duration: "",
      price: 0,
      discount_price: 0,
      featured: false,
      is_published: false,
    }),
    []
  );

  return useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues,
    mode: "onChange",
  });
}