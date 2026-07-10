"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signUp,
} from "../services/auth.service";

import { LoginData, SignUpData } from "../types/auth.types";

export function useAuth() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleSignup(data: SignUpData) {
    try {
      setLoading(true);

      await signUp(data);

      alert("🎉 Account created successfully!");

      router.push("/auth/login");
      router.refresh();
    } catch (error: any) {
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

  async function handleForgotPassword(email: string) {
    try {
      setLoading(true);

      await forgotPassword(email);

      alert(
        "If an account with this email exists, a password reset link has been sent."
      );
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleResetPassword(password: string) {
    try {
      setLoading(true);

      await resetPassword(password);

      alert("Password updated successfully.");

      router.push("/auth/login");
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
    handleForgotPassword,
    handleResetPassword,
    handleLogout,
  };
}