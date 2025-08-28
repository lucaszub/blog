import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function APropos() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
              À propos
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Consultant Data passionné par l&apos;analyse et la transformation
              de données en décisions concrètes.
            </p>
          </div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="/Lucas Zubiarrain.png"
                  alt="Lucas Zubiarrain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Contenu texte */}
            <div className="lg:col-span-2 prose prose-slate prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-slate-900 mt-0 mb-6">
                Qui je suis
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                Je m&apos;appelle Lucas Zubiarrain. Ce qui me passionne,
                c&apos;est d&apos;analyser de grandes quantités de données, en
                faire ressortir des tendances et les transformer en éléments
                concrets pour orienter des décisions. J&apos;aime apprendre,
                tester de nouvelles approches, améliorer ce que je fais et
                partager mes découvertes pour qu&apos;elles puissent servir à
                d&apos;autres.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-6">
                Mon expérience
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                J&apos;interviens sur toutes les étapes du cycle de vie de la
                donnée : depuis sa collecte et sa transformation jusqu&apos;à
                son analyse et sa restitution sous une forme claire et
                exploitable. Mon approche repose sur la recherche de solutions
                simples, efficaces et adaptées aux besoins réels, avec une
                attention particulière à la fiabilité et à la cohérence des
                résultats.
              </p>

              <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-6">
                Pourquoi ce blog ?
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                J&apos;ai créé cet espace comme un carnet de bord pour
                documenter mes apprentissages, mes expérimentations et les
                solutions que je trouve utiles. L&apos;objectif est simple :
                proposer des contenus clairs, directement applicables, qui
                aident à mieux comprendre et exploiter la donnée dans différents
                contextes.
              </p>

              {/* Call to action */}
              <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Vous avez un projet data ?
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  N&apos;hésitez pas à me contacter pour échanger sur vos
                  besoins en analyse de données, automatisation ou
                  visualisation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Me contacter
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Voir mes articles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
