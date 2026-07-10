import Logo from "./Logo";
import NavItem from "./NavItem";

const navigation = [
  {
    title: "Dashboard",
    href: "/studio",
    icon: "dashboard",
  },
  {
    title: "Products",
    href: "/studio/products",
    icon: "products",
  },
  {
    title: "Users",
    href: "/studio/users",
    icon: "users",
  },
  {
    title: "Orders",
    href: "/studio/orders",
    icon: "orders",
  },
  {
    title: "Analytics",
    href: "/studio/analytics",
    icon: "analytics",
  },
  {
    title: "Settings",
    href: "/studio/settings",
    icon: "settings",
  },
] as const;

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="border-b border-zinc-800 p-6">
        <Logo />
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {navigation.map((item) => (
          <NavItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>
    </aside>
  );
}