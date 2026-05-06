# Personal Web

个人技术网站 — 分享技术知识和项目作品。

## Language

**板块 (Category)**:
网站的顶级内容分类，每个板块有独立的 slug、中文名、描述和主题色。
_Avoid_: 分类

**文章 (Post)**:
属于某个板块的内容条目，使用 MDX 编写，有 frontmatter（title, date, description）。
_Avoid_: 博客文章, blog post

**项目 (Project)**:
特殊的板块，文章带有评论区（Giscus + GitHub Discussions）。
_Avoid_: 作品展示, portfolio

**评论 (Comment)**:
通过 Giscus 嵌入 GitHub Discussion 的讨论区。仅项目在文章页展示。
_Avoid_: 留言, feedback

**首页 (Home)**:
入口页，展示所有板块概览卡片和最新文章列表。

**品牌 (Brand)**:
网站品牌名 "The AI Era of the Polar Bear"，Logo 为北极熊图标。
_Avoid_: mascot

**深色模式 (Dark Mode)**:
全站支持浅色/深色主题切换，默认浅色。
_Avoid_: 暗黑模式

**图床 (Image Host)**:
文章图片存放在外部图床，文章中仅保留 URL 链接。
_Avoid_: 本地图片

**搜索 (Search)**:
客户端全搜索，构建时生成文章索引 JSON，搜索在浏览器端完成。
_Avoid_: Algolia, Elasticsearch

## Relationships

- 一个 **板块** 包含多篇 **文章**
- **项目** 板块下的 **文章** 关联一个 GitHub **评论** 区
- **首页** 引用所有 **板块** 和最新的 **文章**

## Example dialogue

> **Dev:** "一个新文章怎么加入 'AI' 板块？"
> **领域专家:** "在对应目录下新建一个 `.mdx` 文件，加上 frontmatter 就行。"
>
> **Dev:** "那如果这篇文章是项目分享，要带评论的呢？"
> **领域专家:** "放到 **项目** 板块下，文章页会自动带上 Giscus 评论区。"

## Flagged ambiguities

- "项目" 既是板块名也是一种内容类型 — 当前项目中这两个概念等同。
