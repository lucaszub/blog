import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

// Trier les articles par date (plus récent en premier)
const sortedPosts = allPosts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

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

export default function Blog() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
              Blog
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explorations, retours d&apos;expérience et guides pratiques autour
              de la data, l&apos;automatisation et la visualisation.
            </p>
          </div>

          {/* Articles grid */}
          <div className="grid gap-8">
            {sortedPosts.map((article, index) => (
              <article
                key={article._id}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Regular article layout - version simplifiée */}
                <div className="md:flex md:gap-6">
                  {/* Content */}
                  <div className="p-6 md:flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1.5 text-xs rounded-full border border-slate-200 bg-slate-50 text-slate-700 font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <time dateTime={article.date}>
                            {format(parseISO(article.date), "dd MMMM yyyy", {
                              locale: fr,
                            })}
                          </time>
                        </div>
                      </div>
                    </div>

                    {/* Title and excerpt */}
                    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                      <Link href={`/blog/${article._raw.flattenedPath}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {article.excerpt}
                    </p>

                    {/* Read more */}
                    <div>
                      <Link
                        href={`/blog/${article._raw.flattenedPath}`}
                        className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors"
                      >
                        Lire l&apos;article
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
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
              Plus d&apos;articles à venir...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
