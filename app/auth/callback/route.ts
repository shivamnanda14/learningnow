import { NextRequest, NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);

  const token = requestUrl.searchParams.get("token");
  const type = requestUrl.searchParams.get("type");
  const next =
    requestUrl.searchParams.get("next") ??
    "/auth/reset-password";

  if (!token || type !== "recovery") {
    return NextResponse.redirect(
      new URL("/auth/login", request.url)
    );
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.verifyOtp({
    token_hash: token,
    type: "recovery",
  });

  if (error) {
    return NextResponse.redirect(
      new URL(
        "/auth/login?error=invalid_reset_link",
        request.url
      )
    );
  }

  return NextResponse.redirect(
    new URL(next, request.url)
  );
}