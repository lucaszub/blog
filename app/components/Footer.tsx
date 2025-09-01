import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100  border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand and copyright */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-7 rounded-md border border-slate-200 bg-white flex items-center justify-center shadow-sm">
                <span className="text-xs tracking-tight font-semibold">LZ</span>
              </div>
              <span className="text-sm text-slate-700 font-medium">Blog</span>
            </Link>
            <p className="text-xs text-slate-600">
              © 2025 Lucas Zubiarrain. Tous droits réservés.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/a-propos"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Contact
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center size-8 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-50"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
