import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "北极熊的 AI 时代",
    template: "%s | 北极熊的 AI 时代",
  },
  description: "分享 AI、系统、软件、NAS、Docker 领域知识与项目作品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts();

  return (
    <html
      lang="zh-CN"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Header posts={posts} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
