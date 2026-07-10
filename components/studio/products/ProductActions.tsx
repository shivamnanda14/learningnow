"use client";

interface ProductActionsProps {
  loading: boolean;
}

export default function ProductActions({
  loading,
}: ProductActionsProps) {
  return (
    <div className="flex justify-end">

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-purple-600 px-8 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
      >
        {loading
          ? "Creating..."
          : "Create Product"}
      </button>

    </div>
  );
}