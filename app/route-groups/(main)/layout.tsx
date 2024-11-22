import { getTopCategories } from "@/data/category";
import { Boundary } from "@/ui/boundary";
import { ClickCounter } from "@/ui/click-counter";
import { TabGroup } from "@/ui/tab-group";
import React from "react";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Next.js Advanced: 라우트 그룹",
// };

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = getTopCategories();

  return (
    <Boundary
      labels={["main layout"]}
      color="orange"
      animateRerendering={false}
    >
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup
            path="/route-groups"
            items={[
              {
                text: "Home",
              },
              ...categories.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
              // 장바구니, 후기 직접 추가
              { text: "장바구니", slug: "cart" },
              { text: "후기", slug: "review" },
            ]}
          />

          <div className="self-start">
            <ClickCounter />
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}
