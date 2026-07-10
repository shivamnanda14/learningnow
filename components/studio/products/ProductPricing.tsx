"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";

import Input from "../ui/Input";

import { ProductSchema } from "@/modules/products/validation/product.schema";

interface ProductPricingProps {
  register: UseFormRegister<ProductSchema>;
  errors: FieldErrors<ProductSchema>;
}

export default function ProductPricing({
  register,
  errors,
}: ProductPricingProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 space-y-6">

      <div>
        <h2 className="text-xl font-semibold">
          Pricing
        </h2>

        <p className="text-sm text-zinc-500">
          Configure your product pricing.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">

        <Input
          type="number"
          label="Price (₹)"
          {...register("price", {
            valueAsNumber: true,
          })}
          error={errors.price?.message}
        />

        <Input
          type="number"
          label="Discount Price (₹)"
          {...register("discount_price", {
            valueAsNumber: true,
          })}
          error={errors.discount_price?.message}
        />

      </div>

    </div>
  );
}