"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-slate-200">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
            <HelpCircle className="w-4 h-4 text-slate-600" />
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Questions fréquentes
          </h2>
        </div>
        <p className="text-slate-600 text-sm">
          Trouvez rapidement les réponses aux questions les plus courantes sur
          ce sujet.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors rounded-lg"
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-slate-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-4 pt-0">
                <div className="text-slate-700 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-sm text-slate-600 text-center">
          <span className="font-medium">
            Vous avez d&apos;autres questions ?
          </span>{" "}
          <Link
            href="/contact"
            className="text-slate-900 hover:underline font-medium"
          >
            Contactez-moi
          </Link>{" "}
          pour en discuter.
        </p>
      </div>
    </section>
  );
}
