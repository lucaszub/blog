"use client";

import { useEffect, useRef } from "react";

interface MarkdownRendererProps {
  html: string;
}

export default function MarkdownRenderer({ html }: MarkdownRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Ajouter des IDs aux titres H2 pour la navigation
      const headings = contentRef.current.querySelectorAll("h2");
      console.log("Titres H2 trouvés:", headings.length);

      headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        console.log(`Ajouté l'ID "${id}" au titre:`, heading.textContent);
      });

      // Déclencher un événement pour informer la table des matières
      const event = new CustomEvent("headingsReady", {
        detail: { count: headings.length },
      });
      window.dispatchEvent(event);
    }
  }, [html]);

  return (
    <div className="markdown-content max-w-none" ref={contentRef}>
      <div
        className="
          [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mt-10 [&_h1]:mb-6 [&_h1]:tracking-tight
          [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-3
          [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-slate-900 [&_h4]:mt-6 [&_h4]:mb-3
          [&_h5]:text-base [&_h5]:font-semibold [&_h5]:text-slate-900 [&_h5]:mt-6 [&_h5]:mb-2
          [&_h6]:text-sm [&_h6]:font-semibold [&_h6]:text-slate-900 [&_h6]:mt-4 [&_h6]:mb-2
          [&_p]:text-base [&_p]:leading-7 [&_p]:text-slate-700 [&_p]:mb-4
          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-slate-700 [&_ul]:mb-4
          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:text-slate-700 [&_ol]:mb-4
          [&_li]:text-base [&_li]:leading-7 [&_li]:mb-1
          [&_strong]:font-semibold [&_strong]:text-slate-900
          [&_em]:italic [&_em]:text-slate-700
          [&_a]:text-slate-900 [&_a]:underline hover:[&_a]:text-slate-700
          [&_blockquote]:border-l-4 [&_blockquote]:border-slate-300 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:text-slate-600 [&_blockquote]:bg-slate-50 [&_blockquote]:rounded-r-lg [&_blockquote]:my-6
          [&_code]:bg-slate-100 [&_code]:text-slate-800 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
          [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:text-sm [&_pre]:font-mono [&_pre]:border [&_pre]:border-slate-200 [&_pre]:my-6
          [&_pre_code]:bg-transparent [&_pre_code]:text-slate-100 [&_pre_code]:p-0
          [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-slate-200 [&_table]:my-6 [&_table]:rounded-lg [&_table]:overflow-hidden
          [&_thead]:bg-slate-50
          [&_th]:border [&_th]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold [&_th]:text-slate-900 [&_th]:text-sm
          [&_td]:border [&_td]:border-slate-200 [&_td]:px-4 [&_td]:py-3 [&_td]:text-slate-700 [&_td]:text-sm
          [&_tbody_tr:nth-child(even)]:bg-slate-50/50
          [&_img]:rounded-lg [&_img]:border [&_img]:border-slate-200 [&_img]:shadow-sm [&_img]:max-w-full [&_img]:h-auto
          [&_hr]:border-t [&_hr]:border-slate-200 [&_hr]:my-8
          [&_figure]:my-6
          [&_figcaption]:text-sm [&_figcaption]:text-slate-600 [&_figcaption]:text-center [&_figcaption]:mt-2 [&_figcaption]:italic
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
