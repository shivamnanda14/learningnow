"use client";

import clsx from "clsx";
import {
  TextareaHTMLAttributes,
  forwardRef,
} from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ label, error, className, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-zinc-300">
          {label}
        </label>
      )}

      <textarea
        ref={ref}
        {...props}
        className={clsx(
          "min-h-[140px] w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition resize-y",
          "placeholder:text-zinc-500",
          "focus:border-purple-600",
          error && "border-red-500",
          className
        )}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;