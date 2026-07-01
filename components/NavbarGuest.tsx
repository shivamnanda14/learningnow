import Link from "next/link";

export default function NavbarGuest() {
  return (
    <div className="flex items-center gap-3">

      <Link
        href="/auth/login"
        className="text-zinc-400 hover:text-white transition-colors duration-300"
      >
        Login
      </Link>

      <Link
        href="/auth/signup"
        className="bg-white hover:bg-zinc-200 text-black px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-[1.03]"
      >
        Sign Up
      </Link>

    </div>
  );
}