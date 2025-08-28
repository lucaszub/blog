import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">
              Contact
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              N&apos;hésitez pas à me contacter pour échanger sur vos projets
              data ou simplement discuter de nos expériences.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Email */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-slate-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Email
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Pour toute question ou collaboration
                  </p>
                  <a
                    href="zubiarrainlucas@gmail.com"
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    zubiarrainlucas@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-slate-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Connectons-nous professionnellement
                  </p>
                  <a
                    href="https://linkedin.com/in/lucas-zubiarrain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    lucas-zubiarrain
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Localisation
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">Basé en France</p>
                  <p className="text-slate-900 font-medium">France</p>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-slate-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    GitHub
                  </h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Mes projets et contributions
                  </p>
                  <a
                    href="https://github.com/lucaszub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    lucas-zubiarrain
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Temps de réponse
              </h3>
              <p className="text-sm text-slate-600">
                Je réponds généralement aux emails dans les 24-48h. Pour des
                échanges plus rapides, LinkedIn est souvent plus efficace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
