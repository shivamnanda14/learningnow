"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart3,
  Settings,
  LucideIcon,
} from "lucide-react";

interface NavItemProps {
  title: string;
  href: string;
  icon:
    | "dashboard"
    | "products"
    | "users"
    | "orders"
    | "analytics"
    | "settings";
}

const icons: Record<NavItemProps["icon"], LucideIcon> = {
  dashboard: LayoutDashboard,
  products: Package,
  users: Users,
  orders: ShoppingCart,
  analytics: BarChart3,
  settings: Settings,
};

export default function NavItem({
  title,
  href,
  icon,
}: NavItemProps) {
  const pathname = usePathname();

  const Icon = icons[icon];

  const active =
    pathname === href ||
    (href !== "/studio" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
        active
          ? "bg-purple-600 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
      )}
    >
      <Icon size={20} />

      <span>{title}</span>
    </Link>
  );
}