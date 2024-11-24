import { RenderingInfo } from "@/ui/rendering-info";

/**
 * SSR 랜더링
 * fetch API의 cache 옶션을 no-store로 설정
 * 실제 테스트해보니 요청할 때마가 아닌 isr처럼 30초 지난 뒤에 요청이 먹음...
 * SSG도 동일하게 요청해도 안되야 하는데 30초 지난 뒤에 요청하면 됨.
 * 결론적으로 랜더일 방식에 상관없이 일단 30초 뒤에는 요청하면 모두 요청이 되는 듯...
 * 근데 그러면 ISR은 10초 뒤에 백그라운드에서 자동 재요청되는 것도 아니고 30초
 * 뒤에 요청할 시 요청되면 SSG나 SSR이나 뭔 차이가 있는 듯...
 * 테스트 환경이 서버 데이터가 고정되어 있어서 그럴수도 있지만 아무튼 이상함...
 */
export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: "no-store" }
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
        <RenderingInfo type="ssr" />
      </div>
    </div>
  );
}
