"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

import { ProductSchema } from "@/modules/products/validation/product.schema";

interface ProductBasicInfoProps {
  register: UseFormRegister<ProductSchema>;
  errors: FieldErrors<ProductSchema>;
}

export default function ProductBasicInfo({
  register,
  errors,
}: ProductBasicInfoProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">

      <div>
        <h2 className="text-xl font-semibold text-white">
          Basic Information
        </h2>

        <p className="text-sm text-zinc-500 mt-1">
          Enter the main information about your product.
        </p>
      </div>

      <Input
        label="Product Title"
        placeholder="Communication Is A Game Masterclass"
        {...register("title")}
        error={errors.title?.message}
      />

      <Input
        label="Slug"
        placeholder="communication-is-a-game-masterclass"
        {...register("slug")}
        error={errors.slug?.message}
      />

      <Textarea
        label="Short Description"
        placeholder="A short description shown on product cards."
        rows={4}
        {...register("short_description")}
        error={errors.short_description?.message}
      />

      <Textarea
        label="Full Description"
        placeholder="Write the complete description..."
        rows={8}
        {...register("description")}
        error={errors.description?.message}
      />

    </div>
  );
}