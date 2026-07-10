import CreateSectionDialog from "@/components/studio/sections/CreateSectionDialog";
import { getSections } from "@/modules/products/services/section.service";

export default async function ModuleSectionsPage({
  params,
}: {
  params: Promise<{
    productId: string;
    moduleId: string;
  }>;
}) {
  const { productId, moduleId } = await params;

  const sections = await getSections(moduleId);

  return (
    <div className="p-8 space-y-8">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Sections
          </h1>

          <p className="mt-2 text-zinc-400">
            Organize lessons into sections.
          </p>

        </div>

        <CreateSectionDialog
          moduleId={moduleId}
          productId={productId}
        />

      </div>

      {sections.length === 0 && (

        <div className="rounded-2xl border border-dashed border-zinc-700 p-16 text-center">

          <h2 className="text-2xl font-semibold">
            No Sections
          </h2>

          <p className="mt-3 text-zinc-500">
            Create your first section.
          </p>

        </div>

      )}

      <div className="space-y-5">

        {sections.map((section, index) => (

          <div
            key={section.id}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
          >

            <div className="flex items-start justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <span className="text-zinc-500">
                    #{index + 1}
                  </span>

                  <h2 className="text-2xl font-semibold">
                    {section.title}
                  </h2>

                  {section.is_published ? (

                    <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs text-green-400">
                      Published
                    </span>

                  ) : (

                    <span className="rounded-full bg-yellow-600/20 px-3 py-1 text-xs text-yellow-400">
                      Draft
                    </span>

                  )}

                </div>

                <p className="mt-3 text-zinc-400">
                  {section.description ||
                    "No description provided."}
                </p>

              </div>

              <div className="flex gap-3">

                <button className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-900">
                  Open
                </button>

                <button className="rounded-lg border border-zinc-700 px-4 py-2 hover:bg-zinc-900">
                  Edit
                </button>

                <button className="rounded-lg border border-red-800 px-4 py-2 text-red-400 hover:bg-red-950">
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}