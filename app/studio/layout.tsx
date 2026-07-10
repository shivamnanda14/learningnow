import { ReactNode } from "react";
import { redirect } from "next/navigation";

import StudioLayout from "@/components/studio/layout/Layout";
import { getCurrentStudioUser } from "@/modules/studio/services/studio.service";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({
  children,
}: LayoutProps) {
  const user = await getCurrentStudioUser();

  // User is not logged in
  if (!user) {
    redirect("/auth/login");
  }

  // Only admins can access the Studio
  if (user.role !== "admin") {
    redirect("/dashboard");
  }

  return (
    <StudioLayout>
      {children}
    </StudioLayout>
  );
}