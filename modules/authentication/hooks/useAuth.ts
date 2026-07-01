"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login, logout, signUp } from "../services/auth.service";
import { LoginData, SignUpData } from "../types/auth.types";

export function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSignup(data: SignUpData) {
    try {
      setLoading(true);

      await signUp(data);

      alert(
        "🎉 Account created successfully!\n\nPlease verify your email before logging in."
      );

      window.location.href = "/auth/login";
    }catch (error: any) {
  console.error("Signup Error:", error);
  console.log("Full Error:", JSON.stringify(error, null, 2));

  alert(
    error?.message ||
    error?.error_description ||
    error?.details ||
    JSON.stringify(error)
  );
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(data: LoginData) {
    try {
      setLoading(true);

      await login(data);

      router.push("/dashboard");
      router.refresh();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await logout();

      router.push("/");
      router.refresh();
    } catch (error: any) {
      alert(error.message);
    }
  }

  return {
    loading,
    handleSignup,
    handleLogin,
    handleLogout,
  };
}