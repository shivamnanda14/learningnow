import ProductForm from "@/components/studio/products/ProductForm";

export default function NewProductPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Create Product
        </h1>

        <p className="mt-2 text-zinc-400">
          Add a new digital product to LearningNow.
        </p>
      </div>

      <ProductForm />
    </div>
  );
}