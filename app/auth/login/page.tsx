"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

import { useAuth } from "@/modules/authentication/hooks/useAuth";

export default function LoginPage() {
  const { handleLogin, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await handleLogin({
      email,
      password,
    });
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h1 className="text-5xl font-bold mb-3">
          Welcome Back
        </h1>

        <p className="text-zinc-400 mb-8">
          Login to continue your learning journey.
        </p>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-zinc-400">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3"
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-400">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-sm text-purple-400 hover:text-purple-300 transition"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-zinc-200 transition disabled:opacity-50"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-8 text-zinc-400">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-purple-400 hover:text-purple-300"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}