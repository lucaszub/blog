"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

interface TableOfContentsProps {
  html: string;
}

interface TocItem {
  id: string;
  text: string;
}

export default function TableOfContents({ html }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extraire les titres du HTML et générer les IDs
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const headings = doc.querySelectorAll("h2");

    const items: TocItem[] = [];
    headings.forEach((heading, index) => {
      const text = heading.textContent || "";
      const id = `heading-${index}`;

      items.push({
        id,
        text,
      });
    });

    setTocItems(items);
  }, [html]);

  // Observer les titres pour détecter celui qui est actuellement visible
  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -70% 0px",
        threshold: 0,
      }
    );

    // Observer tous les titres
    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Écouter l'événement de mise à jour des titres
    const handleHeadingsReady = () => {
      // Refaire l'observation après un délai
      setTimeout(() => {
        observer.disconnect();
        tocItems.forEach((item) => {
          const element = document.getElementById(item.id);
          if (element) {
            observer.observe(element);
          }
        });
      }, 100);
    };

    window.addEventListener("headingsReady", handleHeadingsReady);

    return () => {
      observer.disconnect();
      window.removeEventListener("headingsReady", handleHeadingsReady);
    };
  }, [tocItems]);

  // Fonction pour faire défiler vers un titre - Version simplifiée
  const scrollToHeading = (id: string) => {
    // Attendre un peu que le DOM soit prêt
    setTimeout(() => {
      // Chercher l'élément par ID
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // Chercher tous les H2 et essayer de matcher par index
        const allH2s = document.querySelectorAll("h2");
        const index = parseInt(id.replace("heading-", ""));

        if (allH2s[index]) {
          allH2s[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }, 50);
  };

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className="toc-container">
      <div className="toc-content">
        <h3 className="toc-title">Contents</h3>
        <ul className="toc-list">
          {tocItems.map((item) => (
            <li
              key={item.id}
              className={`toc-item ${activeId === item.id ? "toc-active" : ""}`}
            >
              <button
                onClick={() => scrollToHeading(item.id)}
                className="toc-link"
              >
                <ChevronRight className="toc-icon" />
                <span className="toc-text">{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
