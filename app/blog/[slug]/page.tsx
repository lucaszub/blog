import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import CategoryBadges from "../../components/CategoryBadges";
import BlogFAQ from "../../components/BlogFAQ";

// Générer les paramètres statiques pour tous les posts
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

// Générer les métadonnées pour chaque post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${post.title} | Le carnet Data`,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Trouver l'article correspondant au slug
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  // Si l'article n'existe pas, afficher la page 404
  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}

      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header de l'article */}
          <header className="mb-12 text-center">
            {/* Catégorie et métadonnées */}
            <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
              <CategoryBadges categories={post.category} size="sm" />
              <div className="h-1 w-1 bg-slate-300 rounded-full"></div>
              <div className="flex items-center gap-1 text-sm text-slate-500">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Extrait */}
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {post.excerpt}
            </p>

            {/* Date */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>
                Publié le{" "}
                {format(parseISO(post.date), "dd MMMM yyyy", { locale: fr })}
              </time>
            </div>
          </header>

          {/* Image de l'article */}
          {post.image && (
            <div className="mb-12">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          )}

          {/* Contenu de l'article */}
          <div className="max-w-3xl mx-auto">
            <MarkdownRenderer html={post.body.html} />
          </div>

          {/* Section FAQ */}
          {post.faq && <BlogFAQ faqs={post.faq} />}

          {/* Section Autres articles */}
          <section className="mt-16 pt-8 border-t border-slate-200">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Autres articles
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {allPosts
                  .filter((otherPost) => otherPost.url !== post.url) // Exclure l'article actuel
                  .slice(0, 4) // Limiter à 4 articles
                  .map((relatedPost) => (
                    <article
                      key={relatedPost.url}
                      className="group rounded-lg border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-shadow"
                    >
                      {/* Image */}
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <Image
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          src={relatedPost.image || "/azure-deploiymenet.png"}
                          alt={relatedPost.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        {/* Catégories */}
                        <div className="mb-3">
                          <CategoryBadges
                            categories={relatedPost.category}
                            size="sm"
                          />
                        </div>

                        {/* Titre */}
                        <h3 className="text-base font-semibold text-slate-900 mb-2 leading-tight">
                          <Link
                            href={relatedPost.url}
                            className="hover:text-slate-700 transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </h3>

                        {/* Extrait */}
                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                          {relatedPost.excerpt.length > 100
                            ? `${relatedPost.excerpt.substring(0, 100)}...`
                            : relatedPost.excerpt}
                        </p>

                        {/* Métadonnées */}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>

              {/* Lien vers tous les articles */}
              <div className="text-center mt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-900 hover:text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  Voir tous les articles
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>

          {/* Navigation entre articles */}
          <footer className="mt-16 pt-8 border-t border-slate-200 max-w-3xl mx-auto">
            <div className="flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors group"
              >
                <svg
                  className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Retour au blog
              </Link>

              <div className="text-sm text-slate-500">
                {post.readTime} de lecture
              </div>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
