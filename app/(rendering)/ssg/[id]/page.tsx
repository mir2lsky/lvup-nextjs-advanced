import { RenderingInfo } from "@/ui/rendering-info";
import { notFound } from "next/navigation";

// 정적으로 생성할 게실글 지정(page라우터의  getStaticPath) 대체
export async function generateStaticParams() {
  // 빌드 시에 두 페이지를 생성하고 나머지(3-100)는 요청에 따라 생성
  // TODO: 실제 구현시에는 id를 어디서 가져오는 지 여기서 그냥 정적으로 정의하는지 의문?
  return [{ id: "1" }, { id: "2" }];
}

/**
 * SSG 랜더링
 * fetch API의 cache 옶션을 force-cache로 설정
 * --> default설정
 */

export default async function Page({ params }: { params: { id: string } }) {
  if (Number(params.id) >= 100) {
    notFound();
  }

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
    // SSG
    // { cache: "force-cache" }
  );
  const data = (await res.json()) as { title: string; body: string };

  const isOnDemand = Number(params.id) >= 3;

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="space-y-3 col-span-full lg:col-span-4">
        <h1 className="text-2xl font-medium text-gray-600 capitalize truncate">
          {data.title}
        </h1>
        <p className="font-medium text-gray-500 line-clamp-3">{data.body}</p>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        <RenderingInfo type={isOnDemand ? "ssgod" : "ssg"} />
      </div>
    </div>
  );
}
