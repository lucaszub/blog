"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="size-9 rounded-md border border-slate-200 bg-white flex items-center justify-center shadow-sm">
              <span className="text-sm tracking-tight font-semibold">LZ</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold tracking-tight leading-none">
                Lucas Zubiarrain
              </span>
              <span className="text-[11px] text-slate-600 leading-none mt-0.5">
                Le carnet Data
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/blog"
              className="text-sm text-slate-700 hover:text-slate-900 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/a-propos"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-700 hover:text-slate-900"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center size-9 rounded-md border border-slate-200 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 p-3 border border-slate-200 rounded-lg shadow-sm bg-white">
            <nav className="grid gap-2">
              <Link
                href="/blog"
                className="text-sm text-slate-800 px-3 py-2 rounded-md hover:bg-slate-50 font-medium"
              >
                Blog
              </Link>
              <Link
                href="/a-propos"
                className="text-sm text-slate-800 px-3 py-2 rounded-md hover:bg-slate-50"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-sm text-slate-800 px-3 py-2 rounded-md hover:bg-slate-50"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
