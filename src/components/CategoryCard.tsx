import Link from "next/link";

interface CategoryCardProps {
  slug: string;
  name: string;
  nameEn: string;
  desc: string;
  descEn: string;
  color: string;
}

export default function CategoryCard({ slug, name, nameEn, desc, descEn, color }: CategoryCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-br p-6 h-48 transition-transform hover:scale-[1.02] hover:shadow-xl"
      style={{ background: `linear-gradient(135deg, ${color}22, ${color}11)` }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(135deg, ${color}11, ${color}05)` }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}33` }}>
          <span className="text-2xl" style={{ color }}>
            {name}
          </span>
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{name}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{desc}</p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">{descEn}</p>
      </div>
    </Link>
  );
}
