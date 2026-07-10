"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Overview",
    href: "",
  },
 
  {
    title: "Modules",
    href: "/modules",
  },
  {
    title: "Students",
    href: "/students",
  },
  {
    title: "Analytics",
    href: "/analytics",
  },
  {
    title: "Settings",
    href: "/settings",
  },
];

export default function ProductSidebar({
  productId,
}: {
  productId: string;
}) {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-800 p-6">
      <h2 className="text-xl font-bold mb-8">
        Product Studio
      </h2>

      <nav className="space-y-2">
        {items.map((item) => {
          const href = `/studio/products/${productId}${item.href}`;

          const active = pathname === href;

          return (
            <Link
              key={item.title}
              href={href}
              className={`block rounded-lg px-4 py-3 transition ${
                active
                  ? "bg-purple-600 text-white"
                  : "hover:bg-zinc-900 text-zinc-300"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}