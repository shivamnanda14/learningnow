import { ReactNode } from "react";
import ProductSidebar from "@/components/studio/products/ProductSidebar";

export default async function ProductLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{
    productId: string;
  }>;
}) {
  const { productId } = await params;

  return (
    <div className="flex min-h-screen">
      <ProductSidebar productId={productId} />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}