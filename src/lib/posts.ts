import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";

const contentDir = path.join(process.cwd(), "src/content");

export interface PostMeta {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  date: string;
  category: string;
}

function getMDXFiles(category: string): PostMeta[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || file.replace(/\.mdx$/, ""),
        titleEn: data.titleEn || data.title || "",
        description: data.description || "",
        descriptionEn: data.descriptionEn || "",
        date: data.date || "1970-01-01",
        category,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostContent(category: string, slug: string): Promise<string> {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return "";

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(fileContent);

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(content);

  return String(result);
}

export function getAllPosts(): PostMeta[] {
  const categories = ["ai", "system", "software", "nas", "docker", "projects"];
  return categories.flatMap(getMDXFiles);
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getMDXFiles(category);
}

export function getPost(category: string, slug: string): PostMeta | null {
  const posts = getMDXFiles(category);
  return posts.find((p) => p.slug === slug) || null;
}

export function getRecentPosts(limit = 6): PostMeta[] {
  return getAllPosts().slice(0, limit);
}
