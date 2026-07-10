import Link from "next/link";
import { getProducts } from "@/modules/products/actions/get-products";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage all your products.
          </p>
        </div>

        <Link
          href="/studio/products/new"
          className="rounded-xl bg-purple-600 px-5 py-3 font-medium hover:bg-purple-500 transition"
        >
          + New Product
        </Link>

      </div>

      {/* Empty State */}

      {products.length === 0 && (

        <div className="rounded-2xl border border-zinc-800 p-16 text-center">

          <h2 className="text-2xl font-semibold">
            No Products Found
          </h2>

          <p className="mt-3 text-zinc-500">
            Create your first product.
          </p>

        </div>

      )}

      {/* Product List */}

      {products.length > 0 && (

        <div className="overflow-hidden rounded-2xl border border-zinc-800">

          <table className="w-full">

            <thead className="bg-zinc-900">

              <tr>

                <th className="px-6 py-4 text-left">
                  Title
                </th>

                <th className="px-6 py-4 text-left">
                  Category
                </th>

                <th className="px-6 py-4 text-left">
                  Price
                </th>

                <th className="px-6 py-4 text-left">
                  Status
                </th>

                <th className="px-6 py-4 text-right">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-t border-zinc-800"
                >

                  <td className="px-6 py-5">

                    <div className="font-semibold">
                      {product.title}
                    </div>

                    <div className="text-sm text-zinc-500">
                      {product.slug}
                    </div>

                  </td>

                  <td className="px-6 py-5">
                    {product.category}
                  </td>

                  <td className="px-6 py-5">
                    ₹{product.price}
                  </td>

                  <td className="px-6 py-5">

                    {product.is_published ? (

                      <span className="rounded-full bg-green-600/20 px-3 py-1 text-sm text-green-400">
                        Published
                      </span>

                    ) : (

                      <span className="rounded-full bg-yellow-600/20 px-3 py-1 text-sm text-yellow-400">
                        Draft
                      </span>

                    )}

                  </td>

                  <td className="px-6 py-5 text-right">

                    <Link
                      href={`/studio/products/${product.id}`}
                      className="text-purple-400 hover:text-purple-300"
                    >
                      Open →
                    </Link>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
}