"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

import { useAuth } from "@/modules/authentication/hooks/useAuth";

export default function ForgotPasswordPage() {
  const { handleForgotPassword, loading } = useAuth();

  const [email, setEmail] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await handleForgotPassword(email);

    setEmail("");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h1 className="text-5xl font-bold mb-3">
          Forgot Password
        </h1>

        <p className="text-zinc-400 mb-8">
          Enter your registered email address and we'll send you a password
          reset link.
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
              className="w-full rounded-xl bg-zinc-950 border border-zinc-800 px-4 py-3 outline-none focus:border-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-zinc-200 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="text-center mt-8 text-zinc-400">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-purple-400 hover:text-purple-300"
          >
            Back to Login
          </Link>
        </p>
      </div>
    </main>
  );
}