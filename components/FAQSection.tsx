"use client";

import * as React from "react";
import { Sparkle, ChevronDown } from "lucide-react";
import { faqData } from "@/data/faq";

export function FAQSection() {
  const [openId, setOpenId] = React.useState<string | null>(faqData[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mx-auto my-24 max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* Left Column */}
        <div className="md:w-1/3">
          <div className="mb-4 flex items-center gap-2">
            <Sparkle className="h-4 w-4 text-highlight" />
            <span className="inline-block bg-gradient-to-r from-text-secondary via-text-primary to-text-secondary bg-[length:300%_200%] bg-clip-text text-xs font-semibold uppercase tracking-widest text-highlight animate-shine">
              FAQs
            </span>
          </div>

          <h2 className="font-clash text-3xl font-medium tracking-tight text-text-primary md:text-5xl">
            Have Questions?
          </h2>
          <p className="mt-3 text-pretty text-sm text-text-secondary font-satoshi sm:text-base">
            Frequently asked questions regarding my background, development stack, and health-tech projects.
          </p>
        </div>

        {/* Right Column Accordions */}
        <div className="w-full space-y-3.5 md:w-2/3">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl border border-bg-700 bg-bg-800 transition-all duration-300 hover:border-bg-600"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between p-5 text-left font-satoshi text-base font-medium text-text-primary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold text-text-muted">
                      {faq.number}.
                    </span>
                    <span className="text-base font-medium text-text-primary sm:text-lg">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-highlight" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-bg-700/80 px-6 pb-6 pt-4 animate-accordion-down">
                    <p className="text-sm leading-relaxed text-text-secondary font-satoshi sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
