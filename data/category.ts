export type Category = {
  name: string;
  slug: string; // url에 시용될 카테고리에 사용될 고유 식별자
  count: number;
  parent: string | null; // 상위 카테고리
};

// 메뉴그룹별 메뉴 리스트(2레벨 트리 구조)
// 메뉴그룹도 name속성을 가지면 여러개가 생긼수 있으므로 배열로 정의
export const categories: { items: Category[] }[] = [
  // categoryGroup
  {
    items: [
      { name: "전자제품", slug: "electronics", count: 11, parent: null },
      { name: "의류", slug: "clothing", count: 12, parent: null },
      { name: "서적", slug: "books", count: 10, parent: null },
      { name: "모바일", slug: "phones", count: 4, parent: "electronics" },
      { name: "태블릿", slug: "tablets", count: 5, parent: "electronics" },
      { name: "노트북", slug: "laptops", count: 2, parent: "electronics" },
      { name: "상의", slug: "tops", count: 3, parent: "clothing" },
      { name: "바지", slug: "shorts", count: 4, parent: "clothing" },
      { name: "신발", slug: "shoes", count: 5, parent: "clothing" },
      { name: "소설", slug: "fiction", count: 5, parent: "books" },
      { name: "인물", slug: "biography", count: 2, parent: "books" },
      { name: "교육", slug: "education", count: 3, parent: "books" },
    ],
  },
];

// 메뉴 그룹의 1레벨 탑메뉴 찾기
export function getTopCategories(): Category[] {
  // 배열의 각요소에 대해 함수를 실행하고 그 결과를 평탄화한 새 배열을 리턴
  return categories.flatMap((categoryGroup) =>
    categoryGroup.items.filter((item) => item.parent === null)
  );
}

// 1레벨 탑메뉴에 대한 2레벨 메뉴 찾기
export function getCategories(parent: string): Category[] {
  return categories.flatMap((categoryGroup) =>
    categoryGroup.items.filter((item) => item.parent === parent)
  );
}

// slug로 특적 메뉴 찾기
export function getCategory(slug: string): Category {
  for (const categoryGroup of categories) {
    const foundCategory = categoryGroup.items.find(
      (item) => item.slug === slug
    );
    if (foundCategory) {
      return foundCategory;
    }
  }
  return { name: "", slug: "", count: 0, parent: null };
}
