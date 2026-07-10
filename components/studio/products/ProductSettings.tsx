"use client";

import { FieldErrors, UseFormRegister } from "react-hook-form";

import Input from "../ui/Input";

import { ProductSchema } from "@/modules/products/validation/product.schema";

interface ProductSettingsProps {
  register: UseFormRegister<ProductSchema>;
  errors: FieldErrors<ProductSchema>;
}

export default function ProductSettings({
  register,
  errors,
}: ProductSettingsProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">

      <div>
        <h2 className="text-xl font-semibold">
          Product Settings
        </h2>

        <p className="text-sm text-zinc-500">
          Configure product metadata.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">

        <Input
          label="Category"
          {...register("category")}
          error={errors.category?.message}
        />

        <Input
          label="Product Type"
          {...register("product_type")}
          error={errors.product_type?.message}
        />

        <Input
          label="Language"
          {...register("language")}
          error={errors.language?.message}
        />

        <Input
          label="Level"
          {...register("level")}
          error={errors.level?.message}
        />

        <Input
          label="Duration"
          {...register("duration")}
          error={errors.duration?.message}
        />

      </div>

    </div>
  );
}