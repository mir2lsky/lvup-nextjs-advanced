export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const menus: { name: string; items: Item[] }[] = [
  {
    name: "라우팅: 레이아웃",
    items: [
      {
        name: "라우팅 기본",
        slug: "route",
        description: "파일시스템 기반 라우팅 기본",
      },
      {
        name: "동적 라우팅",
        slug: "dynamic-routing",
        description: "동적으로 생성되는 라우팅 기본",
      },
      {
        name: "라우팅 그룹",
        slug: "route-groups",
        description: "URL경로에 영향을 주지 않고 라우트를 조작",
      },
    ],
  },
  {
    name: "라우팅: UI",
    items: [
      {
        name: "로딩",
        slug: "loading",
        description: "의미있는 로딩 UI",
      },
      {
        name: "에러 처리",
        slug: "error-handling",
        description: "에러 발생 시 보여줄 UI",
      },
      {
        name: "페이지 없음(404)",
        slug: "not-found",
        description: "페이지 없음 UI",
      },
    ],
  },
  {
    name: "다양햔 기법",
    items: [
      {
        name: "CSS 스타일링",
        slug: "styling",
        description: "다양한 스타일링 라이브러리 및 방법론 탐구",
      },
    ],
  },
];
