"use client";

import styles from "./styles.module.css";

const SkeletonCard = () => (
  /**
   * 자바스크립트 객체에서 속성을 참조하는 방식
   */
  <div className={styles.skeleton}>
    <div className={styles["skeleton-img"]} />
    <div className={styles["skeleton-btn"]} />
    <div className={styles["skeleton-line-one"]} />
    <div className={styles["skeleton-line-two"]} />
  </div>
);

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled with CSS Modules
      </h1>
      <div className={styles.container}>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
