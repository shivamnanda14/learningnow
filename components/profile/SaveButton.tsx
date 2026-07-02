"use client";

import { Loader2, Save } from "lucide-react";

type SaveButtonProps = {
  loading: boolean;
  onSave: () => void;
};

export default function SaveButton({
  loading,
  onSave,
}: SaveButtonProps) {
  return (
    <div className="flex justify-end">

      <button
        type="button"
        onClick={onSave}
        disabled={loading}
        className="
          flex
          items-center
          gap-3
          px-8
          py-4
          rounded-2xl
          bg-purple-600
          hover:bg-purple-500
          disabled:bg-purple-700
          disabled:cursor-not-allowed
          transition-all
          duration-300
          font-semibold
          shadow-lg
          shadow-purple-600/20
        "
      >
        {loading ? (
          <>
            <Loader2
              size={20}
              className="animate-spin"
            />

            Saving...
          </>
        ) : (
          <>
            <Save size={20} />

            Save Profile
          </>
        )}
      </button>

    </div>
  );
}