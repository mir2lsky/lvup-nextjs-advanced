"use client";

import { Tab } from "@/ui/tab";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export function RandomPostTab({ path }: { path: string }) {
  const [post, setPost] = useState<null | { text: string; slug: string }>(null);

  useEffect(() => {
    const randomId = String(randomNumber(3, 100));
    setPost({
      text: `포스트 ${randomId} (클릭 시 데이터 가져오기)`,
      slug: randomId,
    });
  }, []);

  return (
    // 포스트가 존재하지 않으면 투명도 0, 존재하면 투명도 1을 주어 표시되게 함
    <div
      className={clsx("inline-flex transition", {
        "opacity-0": !post,
        "opacity-100": post,
      })}
    >
      {post ? (
        <Tab path={path} item={{ text: post.text, slug: post.slug }} />
      ) : null}
    </div>
  );
}
