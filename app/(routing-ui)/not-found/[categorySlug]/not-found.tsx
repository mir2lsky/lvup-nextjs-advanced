import { Boundary } from "@/ui/boundary";

export default function NotFound() {
  // console.log("categorySlug > notFound()");
  return (
    <Boundary labels={["./[categorySlug]/not-found.tsx"]} color="pink">
      <div className="space-y-3 text-vercel-pink">
        <h2 className="text-lg font-bold">항목 페이지 미존재(Not Found)</h2>

        <p className="text-sm">요청한 리소스를 찾을 수 없습니다.</p>
      </div>
    </Boundary>
  );
}
