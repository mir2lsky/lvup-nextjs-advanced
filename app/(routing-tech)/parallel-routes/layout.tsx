import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Advanced: 병렬 라우팅",
};

export default function Layout({
  children,
  audience,
  views,
}: {
  children: React.ReactNode;
  audience: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        {children}

        <div className="space-y-6">
          {audience}
          {views}
        </div>
      </div>
    </div>
  );
}
