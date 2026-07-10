"use client";

import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-zinc-300">
            {label}
          </label>
        )}

        <input
          ref={ref}
          {...props}
          className={clsx(
            "w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition",
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
  }
);

Input.displayName = "Input";

export default Input;