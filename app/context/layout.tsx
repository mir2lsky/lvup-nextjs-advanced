import { getTopCategories } from "@/data/category";
import { Boundary } from "@/ui/boundary";
import { Metadata } from "next";
import ContextClickCounter from "./context-click-counter";
import { CounterProvider } from "./counter-context";
import { TabGroup } from "@/ui/tab-group";

export const metadata: Metadata = {
  title: "Next.js Advanced: 서버/클라이언트 컴포넌트",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = getTopCategories();

  return (
    <Boundary
      labels={["Server Component Boundary"]}
      size="small"
      animateRerendering={false}
    >
      <Boundary
        labels={["Counter Context Provider [Client Component]"]}
        color="blue"
        size="small"
        animateRerendering={false}
      >
        <CounterProvider>
          <Boundary
            labels={["Server Component Boundary"]}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex justify-between">
                <TabGroup
                  path="/context"
                  items={[
                    {
                      text: "홈",
                    },
                    ...categories.map((x) => ({
                      text: x.name,
                      slug: x.slug,
                    })),
                  ]}
                />
              </div>

              {/* // 클라이언트 컴포넌트 */}
              <ContextClickCounter />

              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
      </Boundary>
    </Boundary>
  );
}
