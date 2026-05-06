export const categories = [
  { slug: "ai", name: "AI", nameEn: "AI", desc: "人工智能与机器学习", descEn: "AI & Machine Learning", color: "#6366f1" },
  { slug: "system", name: "系统", nameEn: "System", desc: "操作系统与底层原理", descEn: "OS & Systems", color: "#0ea5e9" },
  { slug: "software", name: "软件", nameEn: "Software", desc: "软件开发与工程实践", descEn: "Software Engineering", color: "#10b981" },
  { slug: "nas", name: "NAS", nameEn: "NAS", desc: "网络存储与家庭服务器", descEn: "NAS & Home Server", color: "#f59e0b" },
  { slug: "docker", name: "Docker", nameEn: "Docker", desc: "容器化与云原生", descEn: "Containers & Cloud Native", color: "#3b82f6" },
  { slug: "projects", name: "项目", nameEn: "Projects", desc: "项目分享与评论互动", descEn: "Project Showcase", color: "#ec4899" },
] as const;

export const siteConfig = {
  title: "北极熊的 AI 时代",
  titleEn: "The AI Era of the Polar Bear",
  description: "分享 AI、系统、软件、NAS、Docker 领域知识与项目作品",
  descriptionEn: "Sharing knowledge in AI, Systems, Software, NAS, Docker",
  github: "https://github.com/nhg-GitHu",
  bilibili: "https://space.bilibili.com/507886850",
} as const;
