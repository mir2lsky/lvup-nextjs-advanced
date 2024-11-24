"use client";

import { Boundary } from "@/ui/boundary";
import { useCounter } from "./counter-context";

// 사용자와 상호작용을 처리하는 컴포넌트
const ContextClickCounter = () => {
  const [count, setCount] = useCounter();

  return (
    <Boundary
      labels={["Counter Context [Client Component"]}
      color="blue"
      size="small"
      animateRerendering={false}
    >
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg tabular-nums hover:bg-gray-500 hover:text-white"
      >
        {count}번 클릭
      </button>
    </Boundary>
  );
};

// 현재 카운트 상태를 표시
export const Counter = () => {
  const [count] = useCounter();

  return (
    <Boundary
      labels={["Counter Context [Client Component]"]}
      color="blue"
      size="small"
      animateRerendering={false}
    >
      <div className="text-xl font-bold text-black span">
        <span className="tabular-nums">{count}</span> 번 클릭됨
      </div>
    </Boundary>
  );
};

export default ContextClickCounter;
