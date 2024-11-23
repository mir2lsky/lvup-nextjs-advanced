import StyledComponentsRegistry from "./registry";

/**
 * registry.tsx를 못 찾튼다고 에러가 나긴 하는데 실행은 잘됨 *
 *
 * CSS-in-JS를 app 폴더에서 설정하는 세가지 단계
 * 1. 스타일 레지스트리를 생성하여 랜더링 증 모든 CSS 규칙을 수집
 * 2. useServerInsertedHTML 훅을 사용하여  콘텐츠가 사용하기 전에 규칙을 삽입
 * 3.초기 서버사이드 랜더링 중에 애플리케이션을 스타일 레지스트리로 감싸는 클라이언트
 * 컴포넌트를 사용
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
