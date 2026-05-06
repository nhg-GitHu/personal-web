import Link from "next/link";
import { categories, siteConfig } from "@/lib/constants";
import CategoryCard from "@/components/CategoryCard";
import PostCard from "@/components/PostCard";
import { getRecentPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getRecentPosts(6);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          {siteConfig.title}
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mt-4 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-2">
          {siteConfig.descriptionEn}
        </p>
      </section>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">板块</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.slug} {...cat} />
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">最新文章</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
