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
              Consultant Data passionné par le partage de connaissances et
              l&apos;amélioration continue.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="lg:col-span-1">
              <div className="aspect-square rounded-2xl bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4"></div>
                  <p className="text-sm text-slate-500">Photo à venir</p>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Qui je suis
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Je suis Lucas Zubiarrain, consultant Data chez CGI. Passionné
                  par l&apos;univers de la donnée depuis plusieurs années,
                  j&apos;accompagne les entreprises dans leur transformation
                  digitale et l&apos;optimisation de leurs processus data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Mon expérience
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Au quotidien, je travaille sur des projets variés allant de la
                  mise en place de pipelines ETL à la création de tableaux de
                  bord interactifs. J&apos;ai eu l&apos;opportunité de
                  travailler avec des technologies comme Python, SQL, et
                  différents outils de visualisation.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Cette diversité d&apos;expériences m&apos;a permis de
                  développer une approche pragmatique : chercher la solution la
                  plus simple et efficace, tout en gardant à l&apos;esprit les
                  contraintes techniques et métier.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                  Pourquoi ce blog ?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  J&apos;ai créé ce carnet pour partager mes apprentissages et
                  expérimentations dans le domaine de la data. L&apos;idée est
                  simple : documenter ce que j&apos;apprends, les défis que je
                  rencontre, et les solutions que je trouve.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Que vous débutiez dans la data ou que vous cherchiez des
                  retours d&apos;expérience pratiques, j&apos;espère que vous
                  trouverez ici des ressources utiles pour vos propres projets.
                </p>
              </div>

              {/* Contact CTA */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Restons en contact
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  N&apos;hésitez pas à me contacter pour échanger sur vos
                  projets data ou simplement discuter de nos expériences.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center text-sm px-4 py-2 rounded-md border border-slate-200 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  >
                    Me contacter
                  </a>
                  <a
                    href="https://linkedin.com/in/lucas-zubiarrain"
                    className="inline-flex items-center text-sm px-4 py-2 rounded-md border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

