'use client';

import { useState } from "react";

export default function Faqs ({ faqs }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faqs" className="w-full py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-white text-6xl font-bold mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.8)]">
                        FAQs
                    </h2>
                    <div className="w-24 h-px bg-white/30 mx-auto"></div>
                </div>

                <div className="space-y-2">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className="bg-white/15 border border-white/20 rounded-2xl overflow-hidden hover:border-white/35 transition-colors duration-200">
                                <button
                                    className="w-full flex justify-between items-center px-8 py-6 text-left gap-4"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base font-semibold text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.8)]">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`shrink-0 w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    <p className="px-8 pb-6 text-white leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
