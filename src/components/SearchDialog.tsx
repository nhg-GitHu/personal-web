"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { categories } from "@/lib/constants";

interface SearchDialogProps {
  posts: PostMeta[];
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ posts, open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  const results = query.length > 0
    ? posts.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="flex items-center px-4 h-14 border-b border-zinc-200 dark:border-zinc-800">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-400 mr-3">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索文章... (Ctrl+K)"
            className="flex-1 bg-transparent outline-none text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400"
          />
        </div>
        <div className="max-h-96 overflow-y-auto">
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-zinc-400 dark:text-zinc-500">
              {query.length === 0 ? "输入关键词开始搜索" : "没有找到相关文章"}
            </div>
          ) : (
            results.map((p) => {
              const cat = categories.find((c) => c.slug === p.category);
              return (
                <Link
                  key={p.slug}
                  href={`/${p.category}/${p.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: cat?.color || "#999" }}
                  />
                  <div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{p.title}</p>
                    <p className="text-xs text-zinc-400">{cat?.name}</p>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
