"use client";

import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`;

const SkeletonInner = styled.div`
  padding: 1rem /* 16px */;
  background-color: rgb(24 24 27 / 0.3);
  border-radius: 1rem /* 16px */;
`;

const SkeletonImg = styled.div`
  height: 3.5rem /* 56px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 0.8);
`;

const SkeletonBtn = styled.div`
  margin-top: 0.75rem /* 12px */;
  width: 25%;
  height: 0.75rem /* 12px */;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(255 0 128 / 1);
`;

const SkeletonLineOne = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 91.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 0.5);
`;

const SkeletonLineTwo = styled.div`
  margin-top: 0.75rem /* 12px */;
  height: 0.75rem /* 12px */;
  width: 66.666667%;
  border-radius: 0.5rem /* 8px */;
  background-color: rgb(63 63 70 / 0.5);
`;

const Skeleton = () => (
  <SkeletonInner>
    <SkeletonImg />
    <SkeletonBtn />
    <SkeletonLineOne />
    <SkeletonLineTwo />
  </SkeletonInner>
);

/**
 * TODO : Next.js에서 서버 컴포넌트는 CSS-in-JS 라이브러리를 지원하지 않음
 * 즉, 서버 컴포넌트에서는 CSS-in-JS를 적용하는 것을 권장하지 않는다
 * 이유는 리액트의 최신기능인 서버컴포넌트와 스트리밍을 사용하려면 라이브러리를 제공하는
 * 곳에서 동시 랜더링을 지원하는 리액트의 최신 버전을 지원해야 하기 때문...
 *
 * 상기 이유 때문인지 next.js 15에서 styled-components가 설치가 안됨
 * 현재 버전을 14로 내려서 하니 되기는 하는데... 상기 이유 때문인듯...
 * 버전 업에 따른 버그인지 계속 문제가 될진 실제 상황일 때 검토 필요
 *
 */
export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled with Styled Components
      </h1>
      <Container>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    </div>
  );
}
