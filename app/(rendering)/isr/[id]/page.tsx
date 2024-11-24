import { RenderingInfo } from "@/ui/rendering-info";

export const dynamicParams = true;

// 정적으로 생성할 게실글 지정(page라우터의  getStaticPath) 대체
export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

/**
 * ISR방식 랜더링
 * revalidate를 10초로 주면 10초 단위로 자동 재검증이라고 했는데 실제로는
 * 10초 뒤에 사용자가 해당 컨텐츠를 클릭했을 때만 요청되는 것으로 보임
 * 근데 테스트해 보니 10초로 설정했는데 실제로는 30초가 지난 뒤에 해당 컨텐츠를
 * 클릭하면 다시 요청해서 가져옴...
 */

export default async function Page({ params }: { params: { id: string } }) {
  // ISR 방식 패치
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      // 재검증(update) 10초
      next: {
        revalidate: 10,
        // 캐시 태그 -> 필요에 따라 특정 태그가 지정된 캐시만 갱신 가능
        tags: ["collection"],
      },
    }
  );
  const data = (await res.json()) as { title: string; body: string };

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="space-y-3 col-span-full lg:col-span-4">
        <h1 className="text-2xl font-medium text-gray-600 capitalize truncate">
          {data.title}
        </h1>
        <p className="font-medium text-gray-500">{data.body}</p>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
        <RenderingInfo type="isr" />
      </div>
    </div>
  );
}
