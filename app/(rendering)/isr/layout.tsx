import { TabGroup } from "@/ui/tab-group";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Advanced: ISR",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  // 테스트용 탭 생성할 데이터 지정
  const ids = [{ id: "1" }, { id: "2" }, { id: "3" }];

  return (
    <div className="space-y-9">
      <TabGroup
        path="/isr"
        items={[
          {
            text: "홈",
          },
          ...ids.map((x) => ({
            text: `포스트 ${x.id}`,
            slug: x.id,
          })),
        ]}
      />

      <div>{children}</div>
    </div>
  );
}
