import { notFound } from "next/navigation";
import { categories } from "@/lib/constants";
import { getPostsByCategory, getPostContent } from "@/lib/posts";
import GiscusComments from "@/components/GiscusComments";

interface PostPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return categories.flatMap((cat) =>
    getPostsByCategory(cat.slug).map((post) => ({
      category: cat.slug,
      slug: post.slug,
    }))
  );
}

export default async function PostPage({ params }: PostPageProps) {
  const { category, slug } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const posts = getPostsByCategory(category);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const html = await getPostContent(category, slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        <a href="/" className="hover:text-zinc-900 dark:hover:text-zinc-50">首页</a>
        <span>/</span>
        <a href={`/${category}`} className="hover:text-zinc-900 dark:hover:text-zinc-50">{cat.name}</a>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-50">{post.title}</span>
      </nav>

      {/* Article */}
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-zinc-400 dark:text-zinc-500 mt-4 pb-8 border-b border-zinc-200 dark:border-zinc-800">
          <time>
            {new Date(post.date).toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric" })}
          </time>
        </div>
        <div
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {/* Giscus comments for projects */}
      {category === "projects" && <GiscusComments />}
    </div>
  );
}
