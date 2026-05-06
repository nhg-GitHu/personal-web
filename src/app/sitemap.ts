import { MetadataRoute } from "next";
import { categories } from "@/lib/constants";
import { getPostsByCategory } from "@/lib/posts";

const baseUrl = "https://polar-bear.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  // Category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${baseUrl}/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Post pages
  const postPages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    getPostsByCategory(cat.slug).map((post) => ({
      url: `${baseUrl}/${cat.slug}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryPages,
    ...postPages,
  ];
}
