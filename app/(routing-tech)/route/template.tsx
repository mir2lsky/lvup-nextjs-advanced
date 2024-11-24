import { Boundary } from "@/ui/boundary";

/**
 * 레이아웃과 유사하게 자식 레이아웃이나 페이지를 래핑
 * 차이점은 페이지 전환시마다 새 인스턴스를 생성
 * 예를 들어 특정 스타일이나 오류처리 로직을 여러페이지나 컴포넌트에 적용하고 싶을때 사용
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <Boundary>{children}</Boundary>;
}
