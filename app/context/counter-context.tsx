"use client";

import { createContext, useContext, useState } from "react";

/**
 * 다른 컴포넌트에서 useCounter훅을 호출함으로써 현재의 count값을 읽고 setCounter함수를 사용 가능
 * 서로 다른 컴포넌트라도 둘다 CounterProvider에 감싸져 있다면 동일한 카운트 상태를 공유 가능
 *
 */

// undefined로 설정하여 컨텍스트가 제공되지 않는 상황에서 해당 컨테스트를 사용하는 것을 방지
const CounterContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>] | undefined
>(undefined);

// 이 컨텍스트의 프로바이더로 역할로 자식 컴포넌트에게 count, setCountfmf a전달
export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {children}
    </CounterContext.Provider>
  );
}

// 커스텀 훅으로 이 훅을 사용하는 컴포넌트는 CounterContext의 값을 읽을 수 있다.
export function useCounter() {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
