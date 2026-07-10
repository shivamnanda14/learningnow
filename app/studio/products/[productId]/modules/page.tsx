import CourseBuilder from "@/components/studio/course-builder/CourseBuilder";
import { getCurriculum } from "@/modules/products/services/curriculum.service";

export default async function ProductModulesPage({
  params,
}: {
  params: Promise<{
    productId: string;
  }>;
}) {
  const { productId } = await params;

  const curriculum = await getCurriculum(productId);

  return (
    <div className="p-6">
      <CourseBuilder
        productId={productId}
        curriculum={curriculum}
      />
    </div>
  );
}