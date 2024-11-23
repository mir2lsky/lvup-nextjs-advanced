"use client";

import { useState } from "react";
import Button from "./button";

export default function BuggyButton() {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    throw new Error("문제가 발생하였습니다.");
  }

  return (
    <Button kind="error" onClick={() => setClicked(true)}>
      강제로 에러 발생시키기
    </Button>
  );
}
