"use client";

import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useProductForm } from "@/modules/products/hooks/useProductForm";
import { createProductAction } from "@/modules/products/actions/product.actions";

import ProductBasicInfo from "./ProductBasicInfo";
import ProductPricing from "./ProductPricing";
import ProductSettings from "./ProductSettings";
import ProductThumbnail from "./ProductThumbnail";
import ProductActions from "./ProductActions";

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function ProductForm() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useProductForm();

  const title = watch("title");

  useEffect(() => {
    setValue("slug", generateSlug(title));
  }, [title, setValue]);

  async function onSubmit(values: any) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, String(value ?? ""));
    });

    startTransition(async () => {
      try {
        const product = await createProductAction(formData);

        toast.success("Product created successfully.");

        router.push(`/studio/products/${product.id}`);

        router.refresh();
      } catch (error: any) {
        toast.error(error.message);
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <ProductBasicInfo
        register={register}
        errors={errors}
      />

      <ProductPricing
        register={register}
        errors={errors}
      />

      <ProductSettings
        register={register}
        errors={errors}
      />

      <ProductThumbnail />

      <ProductActions
        loading={isPending}
      />
    </form>
  );
}