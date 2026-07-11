"use client";

import React, { useState } from "react";

interface FaqsProps {
  faqs: Array<{ question: string; answer: string }>;
}

export default function Faqs({ faqs }: FaqsProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-6xl">
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* sticky intro column */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground sm:text-6xl">
                Frequently
                <br />
                <span className="italic font-medium text-primary">asked</span>
                <br />
                questions
              </h2>
              <p className="mt-6 max-w-xs font-serif text-base leading-relaxed text-foreground/60">
                Everything you might be wondering about HelloWorld, gathered in one place.
                Still stuck? Find us in Discord or on-site.
              </p>
            </div>
          </div>

          {/* accordion column */}
          <div className="lg:col-span-8">
            <div className="border-t border-foreground/15">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-foreground/15">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-start gap-5 py-7 text-left transition-colors duration-300 hover:text-primary"
                    >
                      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground pt-1.5 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="flex-1 font-serif text-xl font-normal leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {faq.question}
                      </h3>
                      <span className="relative mt-2 h-4 w-4 shrink-0">
                        <span className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-foreground transition-colors duration-300 group-hover:bg-primary" />
                        <span
                          className={`absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-foreground transition-all duration-300 group-hover:bg-primary ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-7 pl-12 pr-10 font-serif text-base leading-relaxed text-foreground/70">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}