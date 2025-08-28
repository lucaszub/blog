import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

export default function TestContentlayer() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
              Test Contentlayer
            </h1>
            <p className="text-lg text-slate-600">
              Vérification que Contentlayer fonctionne correctement
            </p>
          </div>

          {/* Status */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-emerald-900">
                  ✅ Contentlayer fonctionne !
                </h3>
                <p className="text-sm text-emerald-700">
                  {allPosts.length} article(s) trouvé(s) dans le dossier
                  content/
                </p>
              </div>
            </div>
          </div>

          {/* Articles found */}
          {allPosts.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Articles détectés :
              </h2>

              {allPosts.map((post) => (
                <div
                  key={post._id}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {post.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 text-xs rounded-full border border-slate-200 bg-white text-slate-700 flex-shrink-0">
                      {post.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>
                      📅{" "}
                      {format(parseISO(post.date), "dd MMMM yyyy", {
                        locale: fr,
                      })}
                    </span>
                    <span>⏱️ {post.readTime}</span>
                    <span>🔗 {post.url}</span>
                  </div>

                  {/* Content preview */}
                  <div className="mt-4 p-4 bg-white border border-slate-200 rounded-lg">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">
                      Aperçu du contenu :
                    </h4>
                    <div
                      className="prose prose-sm text-slate-600"
                      dangerouslySetInnerHTML={{
                        __html: post.body.html.substring(0, 200) + "...",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Instructions */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              📝 Comment ajouter du contenu
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
              <li>
                Créez un fichier{" "}
                <code className="bg-blue-100 px-1 rounded">.md</code> dans le
                dossier{" "}
                <code className="bg-blue-100 px-1 rounded">content/</code>
              </li>
              <li>
                Ajoutez les métadonnées frontmatter (title, date, excerpt,
                category, readTime)
              </li>
              <li>Écrivez votre contenu en Markdown</li>
              <li>Contentlayer génère automatiquement les données !</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}

