import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/${post.category}/${post.slug}`}
      className="group block rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
            {post.description}
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
            {new Date(post.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </Link>
  );
}
