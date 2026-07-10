import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-black px-8">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          placeholder="Search..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none focus:border-purple-600"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-xl border border-zinc-800 p-3 text-zinc-400 hover:bg-zinc-900 hover:text-white">
          <Bell size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 font-bold">
            S
          </div>

          <div>
            <p className="font-semibold">
              Shivam Nanda
            </p>

            <p className="text-sm text-zinc-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}