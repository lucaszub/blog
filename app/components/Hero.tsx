import Link from "next/link";
import { BookOpen, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status badge */}
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-600 mb-6">
            <span className="size-1.5 rounded-full bg-emerald-500"></span>
            Nouveau contenu chaque mois
          </span>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold text-slate-900 mb-6">
            Le carnet Data de{" "}
            <span className="text-slate-700">Lucas Zubiarrain</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Expérimentations et retours d&apos;expérience sur la data,
            l&apos;automatisation et la visualisation. Apprendre, documenter,
            itérer.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md border border-slate-200 bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-4 focus-visible:ring-slate-100 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              Lire les articles
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 focus-visible:ring-4 focus-visible:ring-slate-100 transition-colors"
            >
              <User className="w-4 h-4" />À propos
            </Link>
          </div>

          {/* Topics tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-slate-600">Sujets:</span>
            {["Data", "Automatisation", "Visualisation", "Reporting"].map(
              (topic) => (
                <span
                  key={topic}
                  className="px-3 py-1.5 text-xs rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="border-t border-slate-200/80"></div>
    </section>
  );
}
