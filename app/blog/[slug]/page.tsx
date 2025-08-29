import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import FAQ from "../../components/FAQ";
import CategoryBadges from "../../components/CategoryBadges";

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
            <div className="flex items-center justify-center gap-4 mb-6">
              <CategoryBadges categories={post.category} size="md" />
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

            {/* FAQ optionnelle */}
            {post.faq && <FAQ faqs={post.faq} />}
          </div>

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
