"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import FormDialog from "@/components/studio/shared/FormDialog";
import { createModuleAction } from "@/modules/products/actions/module.actions";

interface CreateModuleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productId: string;
}

export default function CreateModuleDialog({
  open,
  onOpenChange,
  productId,
}: CreateModuleDialogProps) {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [pending, startTransition] = useTransition();

  function resetForm() {
    setTitle("");
    setDescription("");
  }

  function handleClose() {
    resetForm();
    onOpenChange(false);
  }

  function handleSubmit() {
    if (!title.trim()) {
      toast.error("Module title is required.");
      return;
    }

    startTransition(async () => {
      try {
        await createModuleAction({
          product_id: productId,
          title: title.trim(),
          description: description.trim(),
        });

        toast.success("Module created successfully.");

        resetForm();

        onOpenChange(false);

        router.refresh();
      } catch (error: any) {
        toast.error(
          error?.message || "Failed to create module."
        );
      }
    });
  }

  return (
    <FormDialog
      open={open}
      title="Create Module"
      loading={pending}
      onClose={handleClose}
      onSubmit={handleSubmit}
      submitText="Create Module"
    >
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Module Title
          </label>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Module 1 - Introduction"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-purple-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description of this module..."
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-purple-500"
          />
        </div>
      </div>
    </FormDialog>
  );
}