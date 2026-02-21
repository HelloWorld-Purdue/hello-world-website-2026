import React from "react";

export default function Faqs ({ Card, faqs, CardContent }) {
    return (
        <section id="faq" className="py-20 px-4 bg-gradient-to-br from-background via-muted to-muted">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-bold mb-6 text-black">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow duration-300 border-2 border-border hover:border-primary/50"
                        >
                            <CardContent className="p-8">
                                <h3 className="text-xl font-semibold mb-4 text-[#000000]">{faq.question}</h3>
                                <p className="text-card-foreground leading-relaxed">{faq.answer}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

