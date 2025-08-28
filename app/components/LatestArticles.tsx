import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

// Trier et limiter aux 5 derniers articles
const latestArticles = allPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 5);

// Images par défaut selon la catégorie
const getCategoryImage = (category: string) => {
  const images = {
    SEO: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    Data: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    Automatisation:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
    Visualisation:
      "https://images.unsplash.com/photo-1543286384-2ccae3041f2b?q=80&w=800&auto=format&fit=crop",
    Test: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
  };
  return images[category as keyof typeof images] || images.Data;
};

export default function LatestArticles() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-900 mb-4">
            Derniers articles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explorations récentes, retours d&apos;expérience et guides pratiques
            pour améliorer vos workflows data.
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <article
              key={article._id}
              className={`group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Thumbnail */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  src={getCategoryImage(article.category)}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 text-xs rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  <Link
                    href={`/blog/${article._raw.flattenedPath}`}
                    className="block"
                  >
                    {article.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <time dateTime={article.date}>
                    {format(parseISO(article.date), "dd MMMM yyyy", {
                      locale: fr,
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
          >
            Voir tous les articles
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-slate-200/80"></div>
    </section>
  );
}
