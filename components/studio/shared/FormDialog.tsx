"use client";

import { ReactNode } from "react";

interface FormDialogProps {
  open: boolean;
  title: string;
  loading?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  submitText?: string;
  children: ReactNode;
}

export default function FormDialog({
  open,
  title,
  loading = false,
  onClose,
  onSubmit,
  submitText = "Save",
  children,
}: FormDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6">

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <div className="mt-6">
          {children}
        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border border-zinc-700 px-5 py-2"
          >
            Cancel
          </button>

          <button
            disabled={loading}
            onClick={onSubmit}
            className="rounded-lg bg-purple-600 px-5 py-2 disabled:opacity-50"
          >
            {loading ? "Saving..." : submitText}
          </button>

        </div>

      </div>

    </div>
  );
}