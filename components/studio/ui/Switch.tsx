"use client";

import clsx from "clsx";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export default function Switch({
  checked,
  onChange,
  label,
  description,
  disabled = false,
}: SwitchProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        {label && (
          <p className="text-sm font-medium text-white">
            {label}
          </p>
        )}

        {description && (
          <p className="mt-1 text-sm text-zinc-500">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(!checked)}
        className={clsx(
          "relative h-7 w-12 rounded-full transition-all duration-200",
          checked
            ? "bg-purple-600"
            : "bg-zinc-700",
          disabled &&
            "cursor-not-allowed opacity-50"
        )}
      >
        <span
          className={clsx(
            "absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-200",
            checked ? "left-6" : "left-1"
          )}
        />
      </button>
    </div>
  );
}