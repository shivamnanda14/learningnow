import Link from "next/link";

import { getModule } from "@/modules/products/services/module.service";

export default async function ModuleOverviewPage({
  params,
}: {
  params: Promise<{
    productId: string;
    moduleId: string;
  }>;
}) {
  const { productId, moduleId } = await params;

  const module = await getModule(moduleId);

  return (
    <div className="p-8 space-y-8">

      <div>

        <Link
          href={`/studio/products/${productId}/modules`}
          className="text-sm text-purple-400"
        >
          ← Back to Modules
        </Link>

        <h1 className="mt-3 text-4xl font-bold">
          {module.title}
        </h1>

        <p className="mt-2 text-zinc-400">
          {module.description || "No description"}
        </p>

      </div>

      <div className="grid grid-cols-4 gap-4">

        <Link
          href={`/studio/products/${productId}/modules/${moduleId}/sections`}
          className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold">
            Sections
          </h2>

          <p className="mt-2 text-zinc-500">
            Manage module sections
          </p>
        </Link>

        <Link
          href={`/studio/products/${productId}/modules/${moduleId}/analytics`}
          className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold">
            Analytics
          </h2>

          <p className="mt-2 text-zinc-500">
            Module analytics
          </p>
        </Link>

        <Link
          href={`/studio/products/${productId}/modules/${moduleId}/settings`}
          className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 hover:border-purple-500"
        >
          <h2 className="text-xl font-semibold">
            Settings
          </h2>

          <p className="mt-2 text-zinc-500">
            Module settings
          </p>
        </Link>

      </div>

    </div>
  );
}