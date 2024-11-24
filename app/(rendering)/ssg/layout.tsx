import { Tab } from "@/ui/tab";
import React from "react";
import { RandomPostTab } from "./random-post-tab";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Advanced: SSG",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/ssg" item={{ text: "홈" }} />
        {/* // 테스트용 탭 생성할 데이터 지정 */}
        <Tab path="/ssg" item={{ text: "포스트 1", slug: "1" }} />
        <Tab path="/ssg" item={{ text: "포스트 2", slug: "2" }} />
        <RandomPostTab path="/ssg" />
      </div>

      <div>{children}</div>
    </div>
  );
}
