import { Boundary } from "@/ui/boundary";
import Link from "next/link";
// import { CurrentRoute } from "./_ui/current-route";
import { CurrentRoute } from "@/app/(routing-tech)/parallel-routes/_ui/current-route";

export default function Default() {
  return (
    <Boundary labels={["@children/default.tsx"]} color="blue" size="small">
      <div className="prose-sm prose max-w-none">
        <h2 className="text-lg font-bold">디폴트(Default) UI</h2>
        <p>
          <code>@children</code> 내에 현재{" "}
          <code>
            /<CurrentRoute slice={1} />
          </code>{" "}
          경로에 일치하는 라우트 세그먼트가 없기 때문에 디폴트 UI가 렌더링됨
        </p>
        아래 2개 페이지 중 하나가 미존재함
        <ul className="text-xs">
          <li>
            <code>
              parallel-routes/
              <CurrentRoute />
              /page.js
            </code>
          </li>
          <li>
            <code>
              parallel-routes/@children/
              <CurrentRoute />
              /page.js
            </code>
          </li>
        </ul>
        아래 2개 페이지 중 하나가 존재함
        <ul className="text-xs">
          <li>
            <code>parallel-routes/default.js</code>
          </li>
          <li>
            <code>parallel-routes/@children/default.js</code>
          </li>
        </ul>
        <div className="flex not-prose">
          <Link
            href="/parallel-routes"
            className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg hover:bg-gray-500 hover:text-white"
          >
            홈으로
          </Link>
        </div>
      </div>
    </Boundary>
  );
}
