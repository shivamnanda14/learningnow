"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getCurrentUser } from "@/modules/authentication/services/user.service";
import { logout } from "@/modules/authentication/services/auth.service";

export default function NavbarUser() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    }

    loadUser();
  }, []);

  async function handleLogout() {
    await logout();
    window.location.reload();
  }

  if (!user) {
    return (
      <div className="flex items-center gap-3">

        <Link
          href="/auth/login"
          className="text-zinc-300 hover:text-white"
        >
          Login
        </Link>

        <Link
          href="/auth/signup"
          className="bg-white text-black px-5 py-2 rounded-xl font-medium hover:bg-zinc-200"
        >
          Sign Up
        </Link>

      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">

      <Link
        href="/profile"
        className="text-white font-medium"
      >
        👤 {user.user_metadata?.full_name || "Profile"}
      </Link>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
      >
        Logout
      </button>

    </div>
  );
}