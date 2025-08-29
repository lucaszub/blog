import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import CategoryBadges from "../components/CategoryBadges";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

// Trier les articles par date (plus récent en premier)
const sortedPosts = allPosts.sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Images par défaut selon la catégorie
const getCategoryImage = (categories: string[]) => {
  const images = {
    SEO: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
    Data: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop",
    Automatisation:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
    Visualisation:
      "https://images.unsplash.com/photo-1543286384-2ccae3041f2b?q=80&w=1400&auto=format&fit=crop",
    Test: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
  };
  // Utilise la première catégorie pour l'image
  const primaryCategory = categories[0];
  return images[primaryCategory as keyof typeof images] || images.Data;
};

export default function Blog() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-slate-900 mb-4">
            Articles
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Expériences et ressources autour de la data, de
            l&apos;automatisation et de la visualisation — appliquées au web et
            à l&apos;acquisition.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <article
              key={post.url}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:shadow-sm transition"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <Image
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  src={post.image || getCategoryImage(post.category)}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Catégorie et temps de lecture */}
                <div className="flex items-center gap-2 mb-3">
                  <CategoryBadges categories={post.category} size="sm" />
                  <div className="flex items-center gap-1 text-[11px] text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Titre */}
                <h2 className="text-base tracking-tight font-semibold text-slate-900 mb-3 leading-tight">
                  <Link
                    href={post.url}
                    className="hover:text-slate-700 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Extrait */}
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {post.excerpt.length > 150
                    ? `${post.excerpt.substring(0, 150)}...`
                    : post.excerpt}
                </p>

                {/* Date */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-4">
                  <Calendar className="w-3 h-3" />
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "dd MMM yyyy", { locale: fr })}
                  </time>
                </div>

                {/* Lien de lecture */}
                <Link
                  href={post.url}
                  className="inline-flex items-center gap-2 text-sm text-slate-900 hover:underline font-medium"
                >
                  Lire
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Message si aucun article */}
        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">
              Aucun article publié pour le moment.
            </p>
          </div>
        )}
      </div>

      {/* Séparateur */}
      <div className="border-t border-slate-200/80"></div>
    </main>
  );
}
