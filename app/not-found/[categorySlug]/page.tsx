import { getCategory } from "@/data/category";
import { SkeletonCard } from "@/ui/skeleton-card";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  // - `getCategory()` returns `notFound()` if the fetched data is `null` or `undefined`.
  // - `notFound()` renders the closest `not-found.tsx` in the route segment hierarchy.
  // - For `layout.js`, the closest `not-found.tsx` starts from the parent segment.
  // - For `page.js`, the closest `not-found.tsx` starts from the same segment.
  // - Learn more: https://nextjs.org/docs/app/building-your-application/routing#component-hierarchy.
  const category = getCategory(params.categorySlug);

  /**
   * TODO: not-found.tsx가 자동으로 동작하지 않는 문제
   * 원래는 존재하지 않는 url로 접근 시 자동으로 not-found.tsx가 실해되어야 하는데
   * 이 라우팅 경로 안에서 존재하지 않는 url(e.g. /not-found/does-not-exist)로
   * 접근시 동작하지 안는다.
   * 대안으로 notFound()함수를 수동으로 실행하면 동작해서 아래와 같이 처리함
   * cf) 그냥 /abc/xxx로 치면 자동으로 not-found가 실행됨...
   */
  if (!category.name) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        모든 {category.name}
      </h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
