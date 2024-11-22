import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Advanced: 라우트 그룹",
};

/**
 * 실제 이 layout.tsx 파일은 바이 패스역할이라 없어도 상관없다.
 * 즉, (main)에 상기 메타 데이터 처리를 갖다 놓고 이 파일을 없애도 동작한다.
 * 이유는 (main)에 라우트 경로에 해당하는 폴더가 없어서 그런것으로 추정되고
 * 원래 여기 위치레 있어야 할 layout, page, template.tsx를 그룹핑 하기위해
 * (main)에 위치시킨 것으로 보임
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
