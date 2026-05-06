"use client";

import { usePathname } from "next/navigation";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  const pathname = usePathname();

  // Only show on project posts
  if (!pathname?.startsWith("/projects/")) return null;

  return (
    <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">评论</h2>
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
        <Giscus
          id="comments"
          repo="nhg-GitHu/personal-web"
          repoId="R_kgDOSVb0Vw"
          category="General"
          categoryId="DIC_kwDOSVb0V84C8arY"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </div>
  );
}
