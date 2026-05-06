import { notFound } from "next/navigation";
import { categories } from "@/lib/constants";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const posts = getPostsByCategory(category);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${cat.color}33` }}
        >
          <span className="text-2xl" style={{ color: cat.color }}>
            {cat.name}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{cat.name}</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mt-1">{cat.desc}</p>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">{cat.descEn}</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16 text-zinc-400 dark:text-zinc-500">
          <p className="text-lg">暂无文章</p>
          <p className="text-sm mt-2">No posts yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
